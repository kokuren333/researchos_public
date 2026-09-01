import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const out = path.join(root, "dist/concepts/epistemology");
const longform = JSON.parse(await readFile(path.join(root, "domains/epistemology/concepts/initial-10-longform.json"), "utf8"));
const base = JSON.parse(await readFile(path.join(root, "domains/epistemology/concepts/initial-10.json"), "utf8"));
const sources = JSON.parse(await readFile(path.join(root, "domains/epistemology/sources/sources.json"), "utf8"));
const esc = (value) => String(value ?? "").replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;");
const label = (id) => id.split(".").at(-1).replaceAll("-", " ");
const link = (id) => { const scoped = id.includes(".") ? id : `epistemology.${id}`; return `<a href="/concepts/${scoped.split(".")[0]}/${scoped.split(".").slice(1).join(".")}/">${esc(label(id))}</a>`; };
const section = (heading, text, ids = [], concept) => { const numbers = ids.map((id) => (concept?.sources.indexOf(id) ?? -1) + 1).filter((number) => number > 0); const suffix = numbers.map((number) => `[${number}]`).join(""); return `<h2>${esc(heading)}</h2>${String(text).split("\n\n").map((paragraph) => `<p>${esc(paragraph)}${suffix}</p>`).join("")}`; };
const focus = { evidence: ["iep-evidence"], belief: ["sep-belief"], knowledge: ["sep-knowledge-analysis"], uncertainty: ["sep-epistemology", "ncbi-environmental-uncertainty", "nist-measurement-uncertainty"], observation: ["sep-observation"], inference: ["sep-argument"], deduction: ["sep-logical-consequence"], induction: ["sep-induction-problem"], abduction: ["sep-abduction"], falsifiability: ["sep-popper"] };
for (const concept of longform) {
  const info = base.find((item) => item.id === concept.id);
  const references = concept.sources.map((id, index) => { const source = sources.find((item) => item.id === id); return `<li id="source-${index + 1}"><a href="${source?.url ?? "#"}">${esc(source?.title ?? id)}</a> — ${esc(source?.locator ?? "locator未記録")}</li>`; }).join("");
  const body = [`<nav><a href="/">ホーム</a> · <a href="/concepts/">全Concept</a> · <a href="/fields/epistemology/">認識論</a></nav>`, `<p><strong>Concept · 認識論</strong> · Status: ${esc(concept.content_status ?? "deepened")}</p>`, `<h1>${esc(info.title.ja)}</h1>`, section("定義", concept.sections.core, focus[concept.id], concept), section("概念構造", concept.sections.structure, focus[concept.id], concept), section("直感", concept.sections.intuition, focus[concept.id], concept), section("研究でなぜ重要か", info.why_it_matters, [], concept), section("具体例", concept.sections.examples, [], concept), section("よくある混同", concept.sections.confusions, focus[concept.id], concept), section("境界と限界", `${info.limits}\n\n${concept.sections.controversy}`, focus[concept.id], concept), section("隣接Conceptとの関係", concept.sections.relations, focus[concept.id], concept), `<h2>前提Concept</h2><p>${(info.prerequisites ?? []).map(link).join("、") || "なし"}</p>`, `<h2>関連Concept</h2><p>${(info.related ?? []).map(link).join("、") || "なし"}</p>`, `<h2>Sources</h2><ol>${references}</ol>`].join("");
  const html = `<!doctype html><html lang="ja"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width"><title>${esc(info.title.ja)} · Research OS</title><style>body{font:16px system-ui;max-width:820px;margin:auto;padding:2rem;line-height:1.85}h1{margin-top:1.5rem}h2{margin-top:2.2rem}a{color:#075985}li{margin:.7rem 0}</style></head><body>${body}</body></html>`;
  const file = path.join(out, concept.id, "index.html");
  await mkdir(path.dirname(file), { recursive: true });
  await writeFile(file, html, "utf8");
}
console.log(`rendered ${longform.length} epistemology Concept pages`);
