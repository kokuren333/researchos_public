import { readFile, writeFile } from "node:fs/promises";
const path = "domains/epistemology/concepts/initial-10-longform.json";
const concepts = JSON.parse(await readFile(path, "utf8"));
const preferred = {
  evidence: ["iep-evidence", "sep-evidence"], belief: ["sep-belief", "iep-evidence", "sep-evidence"], knowledge: ["sep-knowledge-analysis", "sep-epistemology", "iep-evidence", "sep-evidence"], uncertainty: ["sep-epistemology", "nist-measurement-uncertainty", "iep-evidence", "sep-evidence"], observation: ["sep-observation"], inference: ["sep-argument", "iep-evidence"], deduction: ["sep-logical-consequence", "sep-argument", "sep-popper"], induction: ["sep-induction-problem", "iep-induction", "sep-argument", "sep-evidence"], abduction: ["sep-abduction", "sep-argument", "iep-induction"], falsifiability: ["sep-popper", "sep-pseudo-science", "sep-observation", "sep-argument"]
};
for (const concept of concepts) {
  const order = preferred[concept.id] ?? concept.sources;
  concept.sources = [...new Set([...order, ...concept.sources])];
}
await writeFile(path, `${JSON.stringify(concepts, null, 2)}\n`);
console.log("ordered epistemology sources by conceptual importance");
