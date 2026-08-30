import { access, readFile } from "node:fs/promises";
import path from "node:path";

export const PROJECT_STATUSES = ["idea", "literature-review", "protocol", "analysis", "writing", "internal-review", "submitted", "revision", "accepted", "published", "abandoned"];
export async function readProject(projectDir) { return JSON.parse(await readFile(path.join(projectDir, "project.yaml"), "utf8")); }
async function exists(file) { try { await access(file); return true; } catch { return false; } }
export async function validateResearchProject(projectDir, { fields = [] } = {}) {
  const issues = [];
  if (!await exists(path.join(projectDir, "project.yaml"))) return { valid: false, issues: ["project.yaml is required"] };
  let project;
  try { project = await readProject(projectDir); } catch (error) { return { valid: false, issues: [`project.yaml is invalid JSON-compatible YAML: ${error.message}`] }; }
  if (!PROJECT_STATUSES.includes(project.status)) issues.push(`invalid status '${project.status}'`);
  if (!project.research_type) issues.push("research_type is required");
  if (!project.primary_field) issues.push("primary_field is required");
  if (fields.length && !fields.includes(project.primary_field)) issues.push(`unknown field '${project.primary_field}'`);
  if (["analysis", "writing", "internal-review", "submitted", "revision", "accepted", "published"].includes(project.status)) for (const file of ["question.md", "protocol/protocol.md", "protocol/analysis-plan.md"]) if (!await exists(path.join(projectDir, file))) issues.push(`${file} is required for analysis or later`);
  if (await exists(path.join(projectDir, "results/results.md")) && !await exists(path.join(projectDir, "protocol/analysis-plan.md"))) issues.push("results require protocol/analysis-plan.md");
  return { valid: issues.length === 0, issues, project };
}
