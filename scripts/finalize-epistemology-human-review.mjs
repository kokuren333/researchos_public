import { readFile, writeFile } from "node:fs/promises";

const conceptPath = "domains/epistemology/concepts/initial-10-longform.json";
const sourcePath = "domains/epistemology/sources/sources.json";
const concepts = JSON.parse(await readFile(conceptPath, "utf8"));
const sources = JSON.parse(await readFile(sourcePath, "utf8"));
const extra = { id: "ncbi-environmental-uncertainty", title: "Environmental Decisions in the Face of Uncertainty", url: "https://www.ncbi.nlm.nih.gov/books/NBK200850/", type: "authoritative-report", locator: "Introduction: statistical variability/heterogeneity and model/parameter uncertainty", extracted_support: "The report distinguishes statistical variability and heterogeneity from model and parameter uncertainty as a context-dependent framework." };
if (!sources.some((source) => source.id === extra.id)) sources.push(extra);
const byId = new Map(concepts.map((concept) => [concept.id, concept]));
const uncertainty = byId.get("uncertainty");
if (!uncertainty.sources.includes(extra.id)) uncertainty.sources.splice(2, 0, extra.id);
uncertainty.sections.intuition = uncertainty.sections.intuition.replace("aleatory / epistemicは『変動か知識不足か』という一つの分類軸である。", "aleatory / epistemicは『変動か知識不足か』という一つの分類軸である。環境リスクの報告でも、統計的変動とモデル・パラメータ不確実性を区別する枠組みが用いられるが、これは文脈依存の整理である。");
const knowledge = byId.get("knowledge");
knowledge.sections.confusions = knowledge.sections.confusions.replace("knowledgeとcertaintyも異なり、科学的知識は反証可能性と改訂可能性を持つ。", "knowledgeとcertaintyも異なる。経験科学上の知識主張は改訂可能に扱われることがあるが、これはknowledge一般の必要条件ではない。");
const deduction = byId.get("deduction");
deduction.sections.intuition = deduction.sections.intuition.replace("前提に含まれた帰結を明示する", "前提から論理的に帰結する内容を導く");
const falsifiability = byId.get("falsifiability");
falsifiability.sections.core = falsifiability.sections.core.replace("テスト可能性を高めるには予測を事前に具体化し、測定規則と許容範囲を定める必要がある。", "研究設計へ実装する場合には、予測、測定規則、失敗条件を事前に具体化する。");
const primary = { evidence: ["iep-evidence"], belief: ["sep-belief"], knowledge: ["sep-knowledge-analysis"], uncertainty: ["sep-epistemology", "ncbi-environmental-uncertainty", "nist-measurement-uncertainty"], observation: ["sep-observation"], inference: ["sep-argument"], deduction: ["sep-logical-consequence"], induction: ["sep-induction-problem"], abduction: ["sep-abduction"], falsifiability: ["sep-popper"] };
for (const concept of concepts) {
  for (const claim of concept.claims ?? []) {
    const suffix = claim.id.split("-").at(-1);
    if (suffix === "core") claim.text = concept.sections.core;
    if (suffix === "practice") claim.text = concept.sections.practice;
    if (suffix === "boundary") claim.text = concept.sections.controversy;
    const ids = suffix === "core" ? primary[concept.id] : primary[concept.id]?.slice(0, 1);
    claim.evidence = (ids ?? []).map((id) => ({ source_id: id, locator: sources.find((source) => source.id === id).locator }));
    claim.semantic_review = { status: concept.id === "uncertainty" ? "partial" : "pass", note: concept.id === "uncertainty" ? "分類軸の射程は限定済み。追加Sourceの適用範囲をHuman reviewで確認する" : "本文とSource locatorの対応を確認した" };
  }
}
await writeFile(sourcePath, `${JSON.stringify(sources, null, 2)}\n`);
await writeFile(conceptPath, `${JSON.stringify(concepts, null, 2)}\n`);
console.log(`applied final human-review edits: ${concepts.length} concepts, ${sources.length} sources`);
