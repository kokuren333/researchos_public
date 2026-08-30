import { readFile } from "node:fs/promises";
import path from "node:path";

export async function readJson(file) { return JSON.parse(await readFile(file, "utf8")); }

export function validateEpistemic({ sources = [], evidence = [], claims = [], concepts = [] }) {
  const issues = [];
  const sourceIds = new Set(sources.map((x) => x.id));
  const evidenceIds = new Set(evidence.map((x) => x.id));
  const conceptIds = new Set(concepts.map((x) => x.id));
  for (const item of evidence) {
    if (!item.source || !sourceIds.has(item.source)) issues.push(`evidence '${item.id}': unknown source '${item.source ?? ""}'`);
    if (!item.locator) issues.push(`evidence '${item.id}': locator is required`);
  }
  for (const claim of claims) {
    for (const id of claim.evidence ?? []) if (!evidenceIds.has(id)) issues.push(`claim '${claim.id}': unknown evidence '${id}'`);
    if (["supported", "established"].includes(claim.status) && !(claim.evidence ?? []).length) issues.push(`claim '${claim.id}': supported claim requires evidence`);
  }
  for (const concept of concepts) {
    for (const id of concept.prerequisites ?? []) if (!conceptIds.has(id)) issues.push(`concept '${concept.id}': unknown prerequisite '${id}'`);
  }
  return { valid: issues.length === 0, issues };
}

export function prerequisiteEdges(concepts = []) { return concepts.flatMap((c) => (c.prerequisites ?? []).map((p) => ({ from: p, to: c.id }))); }
