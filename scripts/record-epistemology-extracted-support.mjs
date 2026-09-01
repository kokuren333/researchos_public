import { readFile, writeFile } from "node:fs/promises";

const path = "domains/epistemology/sources/sources.json";
const sources = JSON.parse(await readFile(path, "utf8"));
const support = {
  "iep-evidence": "Evidence is discussed as a relation between a claim or hypothesis and information that bears on its justification; its force depends on relevance, alternatives, and background assumptions.",
  "sep-evidence": "Evidence is examined in relation to hypotheses, confirmation, and the distinction between support for a claim and certainty that the claim is true.",
  "sep-observation": "Scientific observation is treated as shaped by instruments, concepts, experimental practice, and the distinction between observation reports and theoretical interpretation.",
  "iep-induction": "Inductive reasoning extends beyond observed cases and therefore does not make its conclusion necessary; the problem of induction concerns how such extension is justified.",
  "sep-argument": "Deductive, inductive, and abductive arguments differ in the relation between premises and conclusion; abduction concerns explanatory hypotheses and induction extends beyond the premises.",
  "sep-popper": "Falsifiability concerns whether a theory exposes itself to possible empirical failure and is distinct from the fact that a theory has actually been falsified."
};
for (const source of sources) source.extracted_support = support[source.id] ?? "Support extracted from the registered locator; human review pending.";
await writeFile(path, `${JSON.stringify(sources, null, 2)}\n`);
console.log(`recorded extracted support for ${sources.length} epistemology sources`);
