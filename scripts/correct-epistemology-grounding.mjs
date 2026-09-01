import { readFile, writeFile } from "node:fs/promises";

const conceptPath = "domains/epistemology/concepts/initial-10-longform.json";
const sourcePath = "domains/epistemology/sources/sources.json";
const concepts = JSON.parse(await readFile(conceptPath, "utf8"));
const sources = JSON.parse(await readFile(sourcePath, "utf8"));

const extraSources = [
  { id: "sep-belief", title: "Belief", url: "https://plato.stanford.edu/entries/belief/", type: "reference-article", locator: "propositional attitude and nature of belief", extracted_support: "Belief is characterized as an affirmative propositional attitude toward a proposition or state of affairs." },
  { id: "sep-epistemology", title: "Epistemology", url: "https://plato.stanford.edu/entries/epistemology/", type: "reference-article", locator: "knowledge, justification, and epistemic concepts", extracted_support: "Epistemology studies knowledge and related concepts; knowledge claims and their justification have multiple competing analyses." },
  { id: "sep-logical-consequence", title: "Logical Consequence", url: "https://plato.stanford.edu/entries/logical-consequence/", type: "reference-article", locator: "logical consequence and validity", extracted_support: "Logical consequence concerns what follows from premises by virtue of logical form or meaning, distinguishing consequence from truth of the premises." },
  { id: "sep-induction-problem", title: "The Problem of Induction", url: "https://plato.stanford.edu/entries/induction-problem/", type: "reference-article", locator: "problem of induction and observed/unobserved generalization", extracted_support: "The problem of induction concerns the justification of extending claims from observed cases to unobserved cases and future cases." },
  { id: "sep-abduction", title: "Abduction", url: "https://plato.stanford.edu/archives/spr2024/entries/abduction/", type: "reference-article", locator: "modern abduction and supplement on historical Peircean abduction", extracted_support: "Abduction has a modern inference-to-the-best-explanation sense and a distinct historical Peircean sense concerning explanatory hypothesis formation." },
  { id: "sep-pseudo-science", title: "Science and Pseudo-Science", url: "https://plato.stanford.edu/entries/pseudo-science/", type: "reference-article", locator: "Popper, falsifiability, and demarcation", extracted_support: "Popper proposed falsifiability as a demarcation criterion; historical and methodological qualifications distinguish logical testability from simple rejection."
  }
];
const sourceIds = new Set(sources.map((source) => source.id));
for (const source of extraSources) if (!sourceIds.has(source.id)) sources.push(source);

const structures = {
  evidence: "証拠は、bearer（データ・経験・記録など）、target（何を支持するか）、evidential relation（関連性・方向・強さ）、context（競合仮説と背景仮定）の組として整理できる。したがって同じデータでも、問い・比較対象・測定の信頼性が変われば証拠としての役割も変わる。",
  belief: "信念は、主体が命題に対して持つ態度である。命題内容、心理的なbelief、程度としてのcredence、実務上採用するacceptance、そしてそれを正当化するevidenceを分けると、確信の強さと合理性を混同しにくい。",
  knowledge: "知識の分析では、subject、proposition、truth、belief、justification、そして偶然性を排除する条件が関係する。JTBは古典的な候補であり、Gettier問題は正当化された真なる信念でも偶然に真でありうることを示す。",
  uncertainty: "不確実性は単一の分類表ではなく、対象の変動、情報不足、測定、モデル、構造、言語の曖昧さが異なる箇所で生じる関係として捉える。aleatory/epistemicは一つの整理法であり、measurement uncertaintyやmodel uncertaintyと同じ階層の排他的分類とは限らない。",
  observation: "観察は、対象またはその作用、観察装置・実験系、分類語彙、記録、解釈の連鎖として成立する。観察報告と理論的解釈を分けつつ、どちらも完全に理論や装置から独立ではないことを記録する。",
  inference: "推論は、前提・推論規則・結論・信頼度・反証条件の関係である。deductionは必然性、inductionは未観察への拡張、abductionは説明仮説の生成または選択という異なる役割を持ち、統計・因果・診断推論はそれぞれ固有の前提を追加する。",
  deduction: "演繹の構造は、前提集合、論理形式、結論、validity、soundnessに分かれる。validityは前提が真なら結論も真になる形式的関係であり、soundnessには前提の真理も必要である。",
  induction: "帰納は、観察済みの事例・データから未観察事例、将来、または一般パターンへ移る構造を持つ。対象範囲、標本の選択、安定性、競合仮説、一般化規則が結論の強さを左右する。",
  abduction: "アブダクションには、Peirceに由来する説明仮説の生成と、現代的なInference to the Best Explanation（IBE）としての仮説評価・選択という関連するが異なる用法がある。どちらも観察、候補説明、追加テストの関係を必要とする。",
  falsifiability: "反証可能性は、主張、禁止される観察、テスト条件、測定規則、補助仮定、実際の不一致を区別する。論理的に失敗可能であることと、実際に反証されたこと、科学的方法として棄却すべきことは別である。"
};
const addedSources = {
  belief: ["sep-belief"], knowledge: ["sep-epistemology"], uncertainty: ["sep-epistemology"], deduction: ["sep-logical-consequence"], induction: ["sep-induction-problem"], abduction: ["sep-abduction"], falsifiability: ["sep-pseudo-science"]
};

for (const concept of concepts) {
  concept.sections["conceptual-structure"] = structures[concept.id];
  concept.sections.structure = structures[concept.id];
  for (const sourceId of addedSources[concept.id] ?? []) {
    if (!concept.sources.includes(sourceId)) concept.sources.push(sourceId);
    for (const claim of concept.claims ?? []) {
      if (!claim.evidence.some((evidence) => evidence.source_id === sourceId)) claim.evidence.push({ source_id: sourceId, locator: sources.find((source) => source.id === sourceId)?.locator });
    }
  }
  if (concept.id === "evidence") concept.sections.examples = concept.sections.examples.replace("証拠の不一致は、測定・標本・仮説のどこで生じたかを分解する手掛かりになる。", "証拠の不一致は、測定・標本・仮説のどこで生じたかを分解する手掛かりになる。証拠のbearerが物理的状態なのか観察報告なのかという哲学的問題もあり、Research OSの操作的定義が唯一の形だとは扱わない。");
  if (concept.id === "belief") concept.sections.confusions += "\n\nbeliefは命題への態度、credenceは程度として表す信念、acceptanceは議論や行動のために命題を採用する態度であり、同じではない。";
  if (concept.id === "uncertainty") concept.sections.core = concept.sections.core.replace("区別すると、何を追加すれば不確実性が減るかが見える。", "一つの整理として区別すると、何を追加すれば不確実性が減るかが見える。ただし分類は目的や分野によって重なりうる。");
  if (concept.id === "inference") concept.sections.practice += "\n\nここでのClaim→Evidence→Conclusionの記録はResearch OSの設計規範であり、推論一般の哲学的必要条件だと主張するものではない。";
  if (concept.id === "induction") concept.sections.core = concept.sections.core.replace("統計的推論、理論のconfirmationなどを含むが", "統計的推論の多くは帰納的役割を担うが、統計的推論そのものと帰納を単純に同一視できず、理論のconfirmationなども含めて論じられるが");
  if (concept.id === "falsifiability") concept.sections.practice += "\n\n事前に予測や許容範囲を定めることは、Research OSで反証可能性を研究条件へ実装する規範であり、Popperの概念そのものと同一ではない。";
}

await writeFile(sourcePath, `${JSON.stringify(sources, null, 2)}\n`);
await writeFile(conceptPath, `${JSON.stringify(concepts, null, 2)}\n`);
console.log(`corrected epistemology grounding: ${concepts.length} concepts, ${sources.length} sources`);
