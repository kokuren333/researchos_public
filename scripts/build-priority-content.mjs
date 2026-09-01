import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const out = path.join(root, "dist");
const data = JSON.parse(
  await readFile(path.join(root, "domains/priority-concepts.json"), "utf8"),
);
const graph = JSON.parse(
  await readFile(path.join(out, "generated/concept-skill-graph.json"), "utf8"),
);
const esc = (s) =>
  String(s ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
for (const c of data) {
  const [domain, id] = c.id.split(".");
  if (domain === "epistemology") continue;
  const used = graph.concept_to_skills?.[c.id] ?? [];
  const link = (x) =>
    `<a href="/concepts/${x.split(".")[0]}/${x.split(".").slice(1).join(".")}/">${esc(x)}</a>`;
  const body = `<h1>${esc(c.title)}</h1><p class="lead">${esc(c.definition)}</p><h2>直感</h2><p>${esc(c.intuition)}</p><h2>なぜ重要か</h2><p>${esc(c.why)}</p><h2>典型例</h2><p>${esc(c.example)}</p><h2>よくある誤解・失敗</h2><p>${esc(c.misuse)}</p><h2>境界・限界</h2><p>${esc(c.limits)}</p><h2>研究実務でどう使うか</h2><p>${esc(c.practice)}</p><h2>前提Concept</h2><p>${c.prerequisites.map(link).join("、")}</p><h2>関連Concept</h2><p>${c.related.map(link).join("、")}</p><h2>Used by Skills</h2><ul>${used.map((x) => `<li><a href="/skills/${x}/">${esc(x)}</a></li>`).join("") || "<li>なし</li>"}</ul><h2>Sources / Evidence</h2><p><a href="${c.source}">${c.source}</a> — locator: ${esc(c.locator)}</p>`;
  await writeFile(
    path.join(out, "concepts", domain, id, "index.html"),
    `<!doctype html><html lang="ja"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width"><title>${esc(c.title)} · Research OS</title><style>body{font:16px system-ui;max-width:760px;margin:auto;padding:2rem;line-height:1.8;color:#17202a}.lead{font-size:1.25rem;background:#f0f9ff;padding:1rem;border-radius:8px}h2{margin-top:2rem}a{color:#075985}</style></head><body><nav><a href="/concepts/">全Concept</a> · <a href="/fields/${domain}/">Domain</a></nav>${body}</body></html>`,
  );
}
console.log(`rendered ${data.length} priority concepts from source data`);
