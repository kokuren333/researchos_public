import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const packet = JSON.parse(await readFile(path.join(root, "domains/measurement/evidence/measurement-validity.packet.json"), "utf8"));
const evidence = new Map(packet.evidence.map((x) => [x.id, x]));
const claims = new Map(packet.claims.map((x) => [x.id, x]));
const checks = [
  ["definition", "interpretation-centered", "SUPPORTED", "Validityを解釈・利用の支持として扱う主張は対応Evidenceの範囲内。"],
  ["construct", "interpretation-centered", "SUPPORTED", "constructから解釈へ至る区別はClaimの射程内。"],
  ["reliability", "context-and-error-limit-interpretation", "SUPPORTED", "信頼性と妥当性を区別する原理はEvidenceで支持される。体重計は教材上の適用例として扱う。"],
  ["evidence", "evidence-is-multidimensional", "SUPPORTED", "複数方向のValidity evidenceという主張は対応Evidenceで支持される。"],
  ["context", "context-and-error-limit-interpretation", "SUPPORTED", "文脈・集団が解釈を制約するという主張は対応Evidenceの範囲内。"],
  ["proxy", "context-and-error-limit-interpretation", "SUPPORTED", "GitHub starsの品質次元は文献事実ではなく、proxy概念を移送する教材例として扱う。"],
  ["error", "context-and-error-limit-interpretation", "OVERSTATED", "differential / non-differential errorや因果推論への影響は、現在のEvidenceのlocatorより具体的で広い。直接根拠を追加するか断定を弱める必要がある。"],
  ["downstream", "context-and-error-limit-interpretation", "OVERSTATED", "exposure・outcome・confounder別の伝播方向は現在のEvidenceから直接は導けない。"],
  ["PHQ-9", "interpretation-centered", "OVERSTATED", "PHQ-9固有のvalidation evidenceがPacketにないため、一般的Validity sourceだけで固有の評価を断定しない。"]
];
const results = checks.map(([section, claimId, verdict, note]) => ({ section, claim_id: claimId, evidence_ids: claims.get(claimId)?.evidence ?? [], verdict, note }));
const result = { concept: packet.concept_id, verdict: results.some((x) => x.verdict === "UNSUPPORTED") ? "UNSUPPORTED" : results.some((x) => x.verdict === "OVERSTATED") ? "REVISE" : "PASS", semantic_only: true, results };
await readFile(path.join(root, "dist/generated/validity-grounding-audit.json"), "utf8").catch(() => "{}");
await writeFile(path.join(root, "dist/generated/validity-semantic-grounding-audit.json"), JSON.stringify(result, null, 2));
console.log(`validity semantic grounding: ${result.verdict}`);
for (const item of results) console.log(`${item.verdict}: ${item.section} — ${item.note}`);
