import { readFile, writeFile, mkdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),"..");
const data=JSON.parse(await readFile(path.join(root,"domains/priority-concepts.json"),"utf8"));
const fields=["definition","intuition","why","example","misuse","limits","practice","source","locator"];
const rows=data.map(c=>{const issues=fields.filter(k=>!c[k]||String(c[k]).length<20);const initial=issues.length?"REVISE":"PASS";return {concept:c.id,initial,after_revision:initial,grounding:c.source&&c.locator?"PASS":"REVISE",final:initial==="PASS"&&c.source&&c.locator?"READY_FOR_HUMAN_REVIEW":"DRAFT",issues};});
const report={total:rows.length,initial_pass:rows.filter(r=>r.initial==="PASS").length,ready_for_human_review:rows.filter(r=>r.final==="READY_FOR_HUMAN_REVIEW").map(r=>r.concept),rows};
await mkdir(path.join(root,"dist/generated"),{recursive:true});await writeFile(path.join(root,"dist/generated/priority-concept-quality-batch.json"),JSON.stringify(report,null,2),"utf8");await writeFile(path.join(root,"docs/architecture/priority-concept-quality-batch.md"),`# Priority Concept quality batch\n\n${rows.map(r=>`| ${r.concept} | ${r.initial} | ${r.grounding} | ${r.final} |`).join("\n")}`,"utf8");console.log(`batch audited ${report.total} priority concepts`);
