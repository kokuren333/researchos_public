import { readFile, writeFile } from "node:fs/promises";

const conceptPath = "domains/epistemology/concepts/initial-10-longform.json";
const basePath = "domains/epistemology/concepts/initial-10.json";
const sourcePath = "domains/epistemology/sources/sources.json";
const concepts = JSON.parse(await readFile(conceptPath, "utf8"));
const base = JSON.parse(await readFile(basePath, "utf8"));
const sources = JSON.parse(await readFile(sourcePath, "utf8"));
const additions = [
  { id: "sep-knowledge-analysis", title: "The Analysis of Knowledge", url: "https://plato.stanford.edu/entries/knowledge-analysis/", type: "reference-article", locator: "JTB, Gettier cases, epistemic luck, and competing analyses", extracted_support: "The analysis of propositional knowledge examines truth, belief, justification, Gettier cases, epistemic luck, and competing conditions; no single analysis is widely accepted." },
  { id: "nist-measurement-uncertainty", title: "Guidelines for Evaluating and Expressing the Uncertainty of NIST Measurement Results", url: "https://www.nist.gov/document/tn1297spdf", type: "measurement-standard", locator: "Sections 1.2, 2, and 5 on measurement uncertainty and uncertainty components", extracted_support: "Measurement uncertainty is evaluated and expressed from available information about the measurement process; components and their treatment depend on how the measured quantity is used in a model." }
];
const known = new Set(sources.map((source) => source.id));
for (const source of additions) if (!known.has(source.id)) sources.push(source);
const byId = new Map(concepts.map((concept) => [concept.id, concept]));
const addSource = (concept, sourceId) => {
  if (!concept.sources.includes(sourceId)) concept.sources.push(sourceId);
  for (const claim of concept.claims ?? []) if (!claim.evidence.some((evidence) => evidence.source_id === sourceId)) claim.evidence.push({ source_id: sourceId, locator: sources.find((source) => source.id === sourceId).locator });
};
addSource(byId.get("knowledge"), "sep-knowledge-analysis");
addSource(byId.get("uncertainty"), "nist-measurement-uncertainty");
const structures = {
  evidence: "証拠は、bearer（データ・経験・記録など）、target（何を支持するか）、evidential relation（関連性・方向・強さ）、context（競合仮説と背景仮定）の組として整理できる。",
  belief: "信念は、主体が命題に対して持つ態度である。命題内容、心理的なbelief、程度としてのcredence、実務上採用するacceptance、正当化するevidenceを分ける。",
  knowledge: "知識の分析では、subject、proposition、truth、belief、justification、偶然性を排除する条件が関係する。JTBは候補であり、Gettier問題はその十分性を問う。",
  uncertainty: "不確実性は単一の分類表ではなく、対象の変動、情報不足、測定、モデル、構造、言語の曖昧さが異なる箇所で生じる関係として捉える。",
  observation: "観察は、対象またはその作用、観察装置・実験系、分類語彙、記録、解釈の連鎖として成立する。",
  inference: "推論は、前提・推論規則・結論・信頼度・反証条件の関係である。deduction、induction、abductionは異なる役割を持つ。",
  deduction: "演繹の構造は、前提集合、論理形式、結論、validity、soundnessに分かれる。validityは形式的関係であり、soundnessには前提の真理も必要である。",
  induction: "帰納は、観察済みの事例・データから未観察事例、将来、一般パターンへ移る構造を持つ。",
  abduction: "アブダクションには、Peirceに由来する説明仮説の生成と、現代的なIBEとしての仮説評価・選択という関連するが異なる用法がある。",
  falsifiability: "反証可能性は、主張、禁止される観察、テスト条件、測定規則、補助仮定、実際の不一致を区別する。"
};
for (const concept of concepts) {
  concept.sections.structure = structures[concept.id];
  if (concept.id === "evidence") { concept.sections.core = concept.sections.core.replace("証拠は、", "Research OSでは、証拠を、ある命題の受容・棄却・保留に理由を与える認識論的役割を果たす情報として操作的に扱う。認識論では何がevidenceのbearerになるかに複数の立場がある。証拠は、"); concept.sections.examples = concept.sections.examples.replace("量が多くても独立な証拠が増えたとは限らない", "観測数が増えても、独立な情報量が同じ割合で増えるとは限らない"); }
  if (concept.id === "belief") concept.sections.core = concept.sections.core.replace("確率を付けたbelief", "degree of belief / credenceを確率で表現する形式化");
  if (concept.id === "knowledge") concept.sections.core = concept.sections.core.replace("科学的知識は確実性ではなく、公開された理由、再検討可能性、適用範囲を含む。", "経験科学上の知識主張は確実性と同一ではなく、理論によっては改訂可能である。Research OSでは根拠・適用範囲・不確実性・改訂可能性を併記するが、これはknowledge一般の必要条件ではなく研究上の運用規範である。");
  if (concept.id === "uncertainty") concept.sections.intuition += "\n\naleatory / epistemicは『変動か知識不足か』という一つの分類軸である。一方、measurement uncertaintyやmodel uncertaintyは不確実性が研究過程のどこで生じるかという別の軸であり、互いに排他的な同階層カテゴリとは限らない。";
  if (concept.id === "observation") concept.sections.core = concept.sections.core.replace("対象との接触から得られる記録・知覚・測定結果", "対象またはその作用について、知覚・装置・実験系を通じて得られる経験的記録");
  if (concept.id === "inference") concept.sections.examples = concept.sections.examples.replace("統計推論は標本から母集団の量へ進む", "典型的な統計推論の一例として、標本から母集団の量へ進む").replace("因果推論は観測された関連から介入時の反実仮想へ進む", "反実仮想的な枠組みでは、観測された関連から介入時の結果を推論する");
  if (concept.id === "deduction") concept.sections.intuition = concept.sections.intuition.replace("前提に含まれた帰結を明示する", "前提から論理的に帰結する内容を導く");
  if (concept.id === "induction") concept.sections.core = concept.sections.core.replace("統計的推論、理論のconfirmationなどを含むが", "多くの統計的推論は帰納的役割を担うが、統計的推論そのものを帰納と同一視できず、理論のconfirmationなども含めて論じられるが");
  if (concept.id === "abduction") concept.sections.core = concept.sections.core.replace("アブダクションは、観察された事実を説明する競合仮説を比較し、現時点で最良の説明を選ぶ推論である。", "アブダクションは説明的推論を指す。歴史的にはPeirceによる説明仮説の生成、現代ではInference to the Best Explanation（IBE）として競合仮説を評価・選択するという、関連した二つの用法がある。");
  if (concept.id === "falsifiability") concept.sections.practice = concept.sections.practice.replace("研究計画では、理論が禁じる観察、測定の妥当性、失敗時に再検討する仮定を事前に記録する。", "研究計画では、理論が禁じる観察、測定の妥当性、失敗時に再検討する仮定を記録する。Research OSで反証可能性を研究設計へ実装する場合には、予測、測定規則、失敗条件を事前に具体化する。これは反証可能性そのものの定義ではなく、運用上の規範である。");
  for (const claim of concept.claims ?? []) claim.semantic_review = { status: ["knowledge", "uncertainty", "abduction", "falsifiability"].includes(concept.id) ? "partial" : "pending", note: "Source locatorとclaimの意味的支持をHuman reviewで確認する" };
}
const beliefBase = base.find((concept) => concept.id === "belief");
beliefBase.prerequisites = (beliefBase.prerequisites ?? []).filter((id) => id !== "evidence");
beliefBase.related = [...new Set([...(beliefBase.related ?? []), "evidence"])];
await writeFile(sourcePath, `${JSON.stringify(sources, null, 2)}\n`);
await writeFile(conceptPath, `${JSON.stringify(concepts, null, 2)}\n`);
await writeFile(basePath, `${JSON.stringify(base, null, 2)}\n`);
console.log(`finalized epistemology packet A: ${concepts.length} concepts, ${sources.length} sources`);
