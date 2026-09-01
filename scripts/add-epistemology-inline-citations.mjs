import { readFile, writeFile } from "node:fs/promises";

const packetPath = "docs/reviews/epistemology-review-packet-a.md";
const conceptPath = "domains/epistemology/concepts/initial-10-longform.json";
const concepts = JSON.parse(await readFile(conceptPath, "utf8"));
const packet = await readFile(packetPath, "utf8");
const focusSources = {
  evidence: ["iep-evidence"], belief: ["sep-belief"], knowledge: ["sep-knowledge-analysis"], uncertainty: ["sep-epistemology", "ncbi-environmental-uncertainty", "nist-measurement-uncertainty"], observation: ["sep-observation"], inference: ["sep-argument"], deduction: ["sep-logical-consequence"], induction: ["sep-induction-problem"], abduction: ["sep-abduction"], falsifiability: ["sep-popper"]
};
const sectionNames = ["Definition", "Conceptual structure", "Intuition", "Multiple examples", "Common confusions", "Boundaries / limitations", "Relations to neighboring concepts"];
const cite = (text, numbers) => `${text.trimEnd()}${numbers.map((number) => `[${number}]`).join("")}\n`;
const chunks = packet.split("\n---\n");
for (let i = 1; i < chunks.length; i++) {
  const concept = concepts[i - 1];
  if (!concept) continue;
  const numbers = (focusSources[concept.id] ?? []).map((sourceId) => concept.sources.indexOf(sourceId) + 1).filter((number) => number > 0);
  let chunk = chunks[i];
  for (const name of sectionNames) {
    const start = chunk.indexOf(`## ${name}`);
    if (start < 0) continue;
    const bodyStart = start + (`## ${name}`).length;
    const next = chunk.indexOf("\n## ", bodyStart);
    const end = next < 0 ? chunk.length : next;
    const body = chunk.slice(bodyStart, end);
    if (!body.includes("[1]") && numbers.length) chunk = `${chunk.slice(0, bodyStart)}${cite(body, numbers)}${chunk.slice(end)}`;
  }
  chunks[i] = chunk;
}
await writeFile(packetPath, chunks.join("\n---\n"));
console.log("added inline citations to epistemology review packet");
