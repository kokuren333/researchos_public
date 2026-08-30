import test from "node:test";
import assert from "node:assert/strict";
import { readFile, mkdtemp, mkdir, writeFile } from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import { validateResearchProject } from "../core/src/validation/research-project.mjs";
import { execFile } from "node:child_process";
import { promisify } from "node:util";
const exec = promisify(execFile);
import { validateEpistemic, prerequisiteEdges } from "../core/src/validation/epistemic.mjs";

const source = { id: "source-a" };
const evidence = { id: "evidence-a", source: "source-a", locator: { type: "page", value: "1" } };

test("valid Source, Evidence, Claim and prerequisite graph", () => {
  const result = validateEpistemic({ sources: [source], evidence: [evidence], claims: [{ id: "claim-a", status: "supported", evidence: ["evidence-a"] }], concepts: [{ id: "child", prerequisites: ["root"] }, { id: "root", prerequisites: [] }] });
  assert.equal(result.valid, true);
  assert.deepEqual(prerequisiteEdges([{ id: "child", prerequisites: ["root"] }]), [{ from: "root", to: "child" }]);
});

test("Evidence without Source fails", () => assert.equal(validateEpistemic({ evidence: [{ id: "e", locator: {} }] }).valid, false));
test("supported Claim without Evidence fails", () => assert.equal(validateEpistemic({ claims: [{ id: "c", status: "supported" }] }).valid, false));
test("broken references fail", () => assert.equal(validateEpistemic({ evidence: [evidence], claims: [{ id: "c", evidence: ["missing"] }], concepts: [{ id: "x", prerequisites: ["missing"] }] }).valid, false));

test("statistics Field Model has the required public views", async () => {
  for (const file of ["overview", "questions", "methods", "debates", "failure-modes", "canon", "relations"]) {
    const text = await readFile(new URL(`../domains/statistics/field/${file}.yaml`, import.meta.url), "utf8");
    assert.ok(text.trim().length > 0, `${file}.yaml is empty`);
  }
});

test("ResearchProject lifecycle requires protocol before analysis/results", async () => {
  const dir = await mkdtemp(path.join(os.tmpdir(), "researchos-"));
  await writeFile(path.join(dir, "project.yaml"), JSON.stringify({ id: "p", title: "P", status: "analysis", research_type: "scoping_review", primary_field: "statistics", research_question: "Q", created_at: "2026-08-30", updated_at: "2026-08-30" }));
  let result = await validateResearchProject(dir, { fields: ["statistics"] });
  assert.equal(result.valid, false);
  await writeFile(path.join(dir, "question.md"), "Q");
  await mkdir(path.join(dir, "protocol"));
  await writeFile(path.join(dir, "protocol", "protocol.md"), "P");
  await writeFile(path.join(dir, "protocol", "analysis-plan.md"), "A");
  result = await validateResearchProject(dir, { fields: ["statistics"] });
  assert.equal(result.valid, true);
});

test("static build uses Japanese as the default locale and preserves routes", async () => {
  await exec(process.execPath, ["scripts/build-public.mjs"]);
  const field = await readFile(new URL("../dist/fields/statistics/index.html", import.meta.url), "utf8");
  assert.match(field, /統計学/);
  assert.match(field, /30の中核概念/);
  assert.match(field, /lang="ja"/);
});

test("Physics builds as a separate Field with 30 concepts", async () => {
  await exec(process.execPath, ["scripts/build-public.mjs"]);
  const field = await readFile(new URL("../dist/fields/physics/index.html", import.meta.url), "utf8");
  assert.match(field, /物理学/);
  assert.match(field, /状態/);
  const physicsConcepts = await import("../domains/physics/concepts/core-concepts.json", { with: { type: "json" } });
  assert.equal(physicsConcepts.default.core_concepts.length, 30);
  assert.match(await readFile(new URL("../dist/fields/physics/learning-guide/index.html", import.meta.url), "utf8"), /物理学の学び方/);
});

test("concept pages expose depth beyond a dictionary definition", async () => {
  await exec(process.execPath, ["scripts/build-public.mjs"]);
  for (const route of ["concepts/physics/state/index.html", "concepts/sampling-distributions/index.html"]) {
    const page = await readFile(new URL(`../dist/${route}`, import.meta.url), "utf8");
    for (const heading of ["直感", "なぜ重要か", "何を説明できるか", "典型例", "主要な誤解", "前提概念", "根拠となる資料"]) assert.match(page, new RegExp(heading));
  }
});

test("priority concepts are FIELD_VIEW_READY with locator-backed records", async () => {
  const stats = JSON.parse(await readFile(new URL("../domains/statistics/concepts/field-view-ready.json", import.meta.url), "utf8"));
  const physics = JSON.parse(await readFile(new URL("../domains/physics/concepts/field-view-ready.json", import.meta.url), "utf8"));
  assert.equal(stats.priority.length, 10);
  assert.equal(physics.priority.length, 10);
  for (const record of [...Object.values(stats.content), ...Object.values(physics.content)]) {
    for (const key of ["intuitive", "epistemic", "example", "limitation", "source", "locator"]) assert.ok(record[key]);
  }
});

test("skill metadata resolves a many-to-many Concept graph", async () => {
  await exec(process.execPath, ["scripts/build-public.mjs"]);
  const skill = JSON.parse(await readFile(new URL("../skills/critically-appraise-paper/skill.yaml", import.meta.url), "utf8"));
  const graph = JSON.parse(await readFile(new URL("../dist/generated/concept-skill-graph.json", import.meta.url), "utf8"));
  assert.equal(skill.type, "skill");
  assert.ok(skill.purpose && skill.inputs && skill.steps.length && skill.checks.length && skill.outputs);
  assert.equal(graph.skill_to_concepts[skill.id].length, 7);
  for (const concept of skill.requires.concepts) assert.ok(graph.concept_to_skills[concept].includes(skill.id));
  assert.match(await readFile(new URL("../dist/skills/critically-appraise-paper/index.html", import.meta.url), "utf8"), /研究論文を批判的に評価する/);
});

test("cross-domain Concepts and second Skill resolve bidirectionally", async () => {
  await exec(process.execPath, ["scripts/build-public.mjs"]);
  const graph = JSON.parse(await readFile(new URL("../dist/generated/concept-skill-graph.json", import.meta.url), "utf8"));
  assert.ok(graph.concept_to_skills["measurement.validity"].includes("critically-appraise-paper"));
  assert.ok(graph.concept_to_skills["measurement.validity"].includes("interpret-effect-estimate"));
  assert.ok(graph.concept_to_skills["causal-inference.confounding"].includes("critically-appraise-paper"));
  assert.equal(graph.skill_to_concepts["interpret-effect-estimate"].length, 5);
  assert.match(await readFile(new URL("../dist/concepts/measurement.validity/index.html", import.meta.url), "utf8"), /Used by Skills/);
  assert.match(await readFile(new URL("../dist/skills/interpret-effect-estimate/index.html", import.meta.url), "utf8"), /効果推定値を解釈する/);
  const coverage = JSON.parse(await readFile(new URL("../dist/generated/concept-skill-coverage.json", import.meta.url), "utf8"));
  assert.equal(coverage.total_skills, 2);
  assert.equal(coverage.skills_with_unresolved_concepts, 0);
});

test("skill taxonomy and maturity cover the representative MVP set", async () => {
  await exec(process.execPath, ["scripts/build-public.mjs"]);
  const ids = ["critically-appraise-paper", "interpret-effect-estimate", "identify-confounding", "assess-measurement-validity", "choose-statistical-model"];
  const categories = new Set(["understand", "appraise", "design", "analyze", "synthesize"]);
  const maturities = new Set(["SKELETON", "BASIC", "EXECUTABLE", "AUDITED"]);
  for (const id of ids) {
    const skill = JSON.parse(await readFile(new URL(`../skills/${id}/skill.yaml`, import.meta.url), "utf8"));
    assert.ok(skill.categories.every(category => categories.has(category)));
    assert.ok(maturities.has(skill.maturity));
    assert.ok(skill.maturity !== "EXECUTABLE" || (skill.when_to_use && skill.failure_modes.length && skill.worked_example && skill.limitations.length));
  }
  await exec(process.execPath, ["scripts/build-skills.mjs"]);
  const graph = JSON.parse(await readFile(new URL("../dist/generated/concept-skill-graph.json", import.meta.url), "utf8"));
  assert.equal(Object.keys(graph.skill_to_concepts).length, 5);
  assert.equal(new Set(Object.entries(graph.skill_to_concepts).flatMap(([skill, concepts]) => concepts.map(concept => `${skill}:${concept}`))).size, 25);
  assert.ok(graph.concept_to_skills["statistics.confidence-interval"].includes("choose-statistical-model"));
  const coverage = JSON.parse(await readFile(new URL("../dist/generated/skill-coverage.json", import.meta.url), "utf8"));
  assert.equal(coverage.total_skills, 5);
  assert.equal(coverage.edge_count, 25);
  assert.deepEqual(coverage.orphan_skills, []);
});

test("identify-confounding execution contract passes a valid fixture", async () => {
  const result = await exec(process.execPath, ["scripts/validate-skill-execution.mjs"]);
  assert.match(result.stdout, /valid fixture passed/);
  const contract = await readFile(new URL("../skills/identify-confounding/execution.yaml", import.meta.url), "utf8");
  for (const field of ["research_question", "candidate_variables", "missing_information", "assumptions", "overall_assessment", "unknown"]) assert.match(contract, new RegExp(field));
});
