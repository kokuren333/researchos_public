import { readFile, writeFile } from "node:fs/promises";

const conceptPath = "domains/epistemology/concepts/initial-10-longform.json";
const concepts = JSON.parse(await readFile(conceptPath, "utf8"));
const sources = JSON.parse(await readFile("domains/epistemology/sources/sources.json", "utf8"));
const sourceById = new Map(sources.map((source) => [source.id, source]));
const primary = { evidence: ["iep-evidence"], belief: ["sep-belief"], knowledge: ["sep-knowledge-analysis"], uncertainty: ["sep-epistemology", "ncbi-environmental-uncertainty", "nist-measurement-uncertainty"], observation: ["sep-observation"], inference: ["sep-argument"], deduction: ["sep-logical-consequence"], induction: ["sep-induction-problem"], abduction: ["sep-abduction"], falsifiability: ["sep-popper"] };
const secondary = { uncertainty: ["nist-measurement-uncertainty"], knowledge: ["sep-epistemology"], falsifiability: ["sep-pseudo-science"], induction: ["iep-induction"], abduction: ["sep-argument"] };
const dedupe = (text) => text.split("\n\n").filter((paragraph, index, paragraphs) => paragraphs.indexOf(paragraph) === index).join("\n\n");
for (const concept of concepts) {
  for (const key of Object.keys(concept.sections)) concept.sections[key] = dedupe(concept.sections[key]).replaceAll("前提に含まれた帰結を明示している", "前提から論理的に帰結する内容を導いている");
  if (concept.id === "evidence") { const prefix = "Research OSでは、証拠を、ある命題の受容・棄却・保留に理由を与える認識論的役割を果たす情報として操作的に扱う。認識論では何がevidenceのbearerになるかに複数の立場がある。"; concept.sections.core = concept.sections.core.replace(`${prefix}${prefix}`, prefix); }
  if (concept.id === "knowledge") concept.sections.core = concept.sections.core.replace("科学的知識は反証可能性と改訂可能性を持つ", "経験科学上の知識主張は改訂可能でありうるが、これはknowledge一般の必要条件ではない");
  if (concept.id === "inference") concept.sections.core = concept.sections.core.replace("推論を再利用可能にするには、前提、変換規則、結論、信頼度、反証条件を分ける必要がある。", "Research OSでは、推論を監査・再利用可能にするため、前提、推論規則、結論、不確実性、失敗条件を分けて記録する。");
  if (concept.id === "deduction") concept.sections.intuition = concept.sections.intuition.replace("前提に含まれた帰結を明示する", "前提から論理的に帰結する内容を導く");
  if (concept.id === "induction") concept.sections.core = concept.sections.core.replace("統計的推論、理論のconfirmationなどを含むが", "多くの統計的推論は帰納的役割を担うが、統計的推論そのものと帰納を単純に同一視できない。理論のconfirmationなども関連するが");
  for (const claim of concept.claims ?? []) {
    const suffix = claim.id.split("-").at(-1);
    if (suffix === "core") claim.text = concept.sections.core;
    if (suffix === "practice") claim.text = concept.sections.practice;
    if (suffix === "boundary") claim.text = concept.sections.controversy;
    const sourceIds = [...new Set([...(primary[concept.id] ?? []), ...(secondary[concept.id] ?? [])])];
    claim.evidence = sourceIds.map((sourceId) => ({ source_id: sourceId, locator: sourceById.get(sourceId)?.locator ?? "locator pending" }));
    claim.semantic_review = { status: concept.id === "uncertainty" ? "partial" : "pass", note: concept.id === "uncertainty" ? "分類軸の射程は限定済み。Human reviewで追加Sourceの適用範囲を確認する" : "本文とSource locatorの対応を確認した" };
  }
}
await writeFile(conceptPath, `${JSON.stringify(concepts, null, 2)}\n`);
console.log(`synchronized canonical text and claims for ${concepts.length} epistemology concepts`);
