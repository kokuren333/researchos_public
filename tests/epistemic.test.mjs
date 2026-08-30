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
