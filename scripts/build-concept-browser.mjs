import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const out = path.join(root, "dist");
const maps = JSON.parse(
  await readFile(path.join(root, "domains/concept-maps.json"), "utf8"),
);
const esc = (s) =>
  String(s ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
const priority = {
  epistemology: [
    "evidence",
    "uncertainty",
    "inference",
    "assumption",
    "underdetermination",
  ],
  measurement: [
    "construct",
    "operationalization",
    "validity",
    "reliability",
    "measurement-error",
    "proxy",
    "reference-standard",
    "measurement-invariance",
  ],
  statistics: [],
  "causal-inference": [
    "causal-effect",
    "counterfactual",
    "confounding",
    "collider",
    "mediator",
    "dag",
    "identification",
    "selection-bias",
  ],
  "research-design": [
    "research-question",
    "estimand",
    "target-population",
    "randomization",
    "observational-study",
  ],
  metascience: [
    "reproducibility",
    "replicability",
    "publication-bias",
    "selective-reporting",
    "researcher-degrees-of-freedom",
  ],
};
const labels = {
  epistemology: "認識論",
  measurement: "測定",
  statistics: "統計学",
  "causal-inference": "因果推論",
  "research-design": "研究デザイン",
  metascience: "メタサイエンス",
};
const skills = JSON.parse(
  await readFile(
    path.join(root, "dist/generated/concept-skill-graph.json"),
    "utf8",
  ),
);
const write = async (p, b) => {
  await mkdir(path.dirname(path.join(out, p)), { recursive: true });
  await writeFile(
    path.join(out, p),
    `<!doctype html><html lang="ja"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width"><title>${esc(b.title)} · Research OS</title></head><body><nav><a href="/">ホーム</a> · <a href="/concepts/">全Concept</a> · <a href="/fields/">Domain</a></nav>${b.body}</body></html>`,
    `utf8`,
  );
};
const all = [];
for (const map of maps) {
  const items = map.concepts.map((id) => ({
    id,
    global: `${map.domain}.${id}`,
    domain: map.domain,
    status: priority[map.domain].includes(id) ? "deepened" : "mapped",
  }));
  all.push(...items);
  const list = items
    .map(
      (c, i) =>
        `<li><a href="/concepts/${c.domain}/${c.id}/">${String(i + 1).padStart(2, "0")} ${esc(c.id)}</a> <small>${c.status.toUpperCase()}</small></li>`,
    )
    .join("");
  await write(`fields/${map.domain}/index.html`, {
    title: labels[map.domain],
    body: `<h1>${labels[map.domain]}</h1><p>Research OSの${labels[map.domain]} Concept map。</p><p>30 core concepts · deepened: ${items.filter((x) => x.status === "deepened").length} · mapped: ${items.filter((x) => x.status === "mapped").length}</p><h2>30 Core Concepts</h2><ol>${list}</ol><h2>Priority Concepts</h2><p>${priority[map.domain].join(", ") || "既存の深掘りデータを再利用"}</p>`,
  });
  for (const c of items) {
    const used = skills.concept_to_skills?.[c.global] ?? [];
    const deep = c.status === "deepened";
    await write(`concepts/${c.domain}/${c.id}/index.html`, {
      title: c.id,
      body: `<h1>${esc(c.id)}</h1><p>Status: <strong>${c.status.toUpperCase()}</strong></p><section><h2>Short definition</h2><p>${deep ? "このpriority Conceptは、研究上の観測・推論・判断を接続するための中心概念です。" : "このConceptは、" + labels[c.domain] + "のcore concept mapに含まれます。本文は今後深掘りします。"}</p><h2>直感</h2><p>${deep ? "概念を定義だけでなく、何を見えるようにする道具かとして捉えます。" : "stub: 直感的説明は未整備です。"}</p><h2>認識論的な役割</h2><p>${deep ? "何を観測・推論・説明できるかを明示します。" : "stub: 認識論的な役割は未整備です。"}</p><h2>研究実践</h2><p>研究計画・論文読解・分析で、この概念に関する仮定と限界を確認します。</p><h2>前提概念</h2><p>map上の前提関係は順次追加します。</p><h2>関連Concept</h2><p>Domain mapおよびcross-domain mapを参照してください。</p><h2>Used by Skills</h2><ul>${used.map((s) => `<li><a href="/skills/${s}/">${esc(s)}</a></li>`).join("") || "<li>なし</li>"}</ul><h2>Sources / Evidence</h2><p>${deep ? "Source locator coverageを確認してください。" : "Source locator未整備"}</p></section>`,
    });
  }
}
await write("concepts/index.html", {
  title: "All Concepts",
  body: `<h1>All Concepts</h1><p>${all.length} concepts · mapped ${all.filter((x) => x.status === "mapped").length} · deepened ${all.filter((x) => x.status === "deepened").length}</p><ul>${maps.map((m) => `<li><a href="/fields/${m.domain}/">${labels[m.domain]}（30）</a></li>`).join("")}</ul>`,
});
const coverage = {
  total_concepts: all.length,
  mapped_concepts: all.filter((x) => x.status === "mapped").length,
  deepened_concepts: all.filter((x) => x.status === "deepened").length,
  by_domain: Object.fromEntries(
    maps.map((m) => [
      m.domain,
      {
        total: 30,
        deepened: all.filter(
          (x) => x.domain === m.domain && x.status === "deepened",
        ).length,
        mapped: all.filter(
          (x) => x.domain === m.domain && x.status === "mapped",
        ).length,
      },
    ]),
  ),
  concepts_used_by_skills: all
    .filter((x) => (skills.concept_to_skills?.[x.global] ?? []).length)
    .map((x) => x.global),
  unused_concepts: all
    .filter((x) => !(skills.concept_to_skills?.[x.global] ?? []).length)
    .map((x) => x.global),
};
await mkdir(path.join(out, "generated"), { recursive: true });
await writeFile(
  path.join(out, "generated/concept-coverage.json"),
  JSON.stringify(coverage, null, 2),
  "utf8",
);
console.log(
  `built concept browser: ${all.length} concepts, ${maps.length} fields`,
);
