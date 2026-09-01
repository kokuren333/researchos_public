# Epistemology Review Packet A（1–10）

このpacketは、epistemology最初の10 ConceptをSource-firstで人間監査するための全文版です。本文sourceは `domains/epistemology/concepts/initial-10-longform.json`、Source registryは `domains/epistemology/sources/sources.json` です。

初期成熟度: `stub`。最終成熟度: `deepened`。Human review: 完了（10/10 PASS）。

---

# 1. evidence — 証拠

## Definition
Research OSでは、証拠を、ある命題の受容・棄却・保留に理由を与える認識論的役割を果たす情報として操作的に扱う。認識論では何がevidenceのbearerになるかに複数の立場がある。証拠は、命題が真であると断定する材料ではなく、その命題を受け入れる・退ける・保留する理由として機能する情報である。したがって証拠には、何についての証拠か、どの仮説と比較するか、どの背景仮定に依存するかという構造がある。データは記録された情報、証拠はそのデータがある主張に対して持つ認識論的役割であり、両者は同じではない。

研究で証拠を扱うときは、観察された情報、そこから支える命題、競合する説明、結論の強さを分ける。例えば差のある平均値は効果の証拠になり得るが、割付、測定、欠測、選択の仮定を通じて初めて因果主張に接続する。証拠は主張から独立したラベルではなく、問いと推論の関係の中で成立する。[1]

## Conceptual structure
証拠は、bearer（データ・経験・記録など）、target（何を支持するか）、evidential relation（関連性・方向・強さ）、context（競合仮説と背景仮定）の組として整理できる。[1]

## Intuition
検査結果が陽性でも、それだけで病気が確定するわけではない。事前確率、検査の感度・特異度、代替説明によって証拠の強さが変わる。証拠は反証や新情報によって覆されうる、defeasibleな支持として扱う。[1]

## Why it matters for research
引用や観測を主張と混同せず、何がどこまで結論を支えるかを限定できる。

## Multiple examples
医学では陽性検査が診断仮説を支持するが、偽陽性率と対象集団に依存する。工学では振動記録が軸受故障の仮説を支持するが、別の機械的原因も比較する。社会科学では相関は関連の証拠になりうるが、因果効果の証明とは別である。

反例として、同じ参加者を何度も測ったデータは観測数が増えても、独立な情報量が同じ割合で増えるとは限らない。境界例として、専門家の一致は実務上有用な証拠だが、独立な検証や代替説明の検討なしに真理の保証にはならない。証拠の不一致は、測定・標本・仮説のどこで生じたかを分解する手掛かりになる。証拠のbearerが物理的状態なのか観察報告なのかという哲学的問題もあり、Research OSの操作的定義が唯一の形だとは扱わない。[1]

## Common confusions
証拠とproofは異なる。proofは妥当な形式と真の前提から結論を必然化するが、経験的証拠は通常そこまで保証しない。証拠の量と質も異なり、同じ偏った測定を増やしても支持は強くならない。直接証拠と間接証拠も、推論段階と代替説明の数が異なる。[1]

## Boundaries / limitations
証拠は通常、主張を論理的に確定せず、仮定・測定・代替説明に依存する。


証拠の認識論的な重みを確率で表すべきか、説明力や反証可能性を重視すべきかは立場により異なる。単一の尺度で全ての証拠を比較できるとは限らない。[1]

## Relations to neighboring concepts
evidenceはbeliefの正当化に関与するがbeliefそのものではない。inferenceはevidenceから結論へ進む過程である。uncertaintyは証拠が残す複数の可能性を表す。[1]

## Research Skill connection
現時点で直接接続するResearch Skillはありません。将来、evidence audit・hypothesis appraisal・source appraisalへ接続候補です。

## Major claims and evidence
### evidence-core
Research OSでは、証拠を、ある命題の受容・棄却・保留に理由を与える認識論的役割を果たす情報として操作的に扱う。認識論では何がevidenceのbearerになるかに複数の立場がある。証拠は、命題が真であると断定する材料ではなく、その命題を受け入れる・退ける・保留する理由として機能する情報である。したがって証拠には、何についての証拠か、どの仮説と比較するか、どの背景仮定に依存するかという構造がある。データは記録された情報、証拠はそのデータがある主張に対して持つ認識論的役割であり、両者は同じではない。

研究で証拠を扱うときは、観察された情報、そこから支える命題、競合する説明、結論の強さを分ける。例えば差のある平均値は効果の証拠になり得るが、割付、測定、欠測、選択の仮定を通じて初めて因果主張に接続する。証拠は主張から独立したラベルではなく、問いと推論の関係の中で成立する。
- semantic review: pass（本文とSource locatorの対応を確認した）
- source: iep-evidence
  locator: overview and sections on justification
  extracted_support: Evidence is discussed as a relation between a claim or hypothesis and information that bears on its justification; its force depends on relevance, alternatives, and background assumptions.

### evidence-practice
論文では各主要claimについて、観測データ、比較対象、推論規則、背景仮定を分けて記録する。Research OSではClaim→Evidence→Source→locatorを保存し、証拠が支持する範囲を超える文章を弱める。

Evidence packetでは、各claimに対して何が直接観察され、何が推論されたかを記録する。論文を読むときは、結果の統計的有意性ではなく、問いに対する関連性、測定の妥当性、比較可能性、代替説明を順に確認する。
- semantic review: pass（本文とSource locatorの対応を確認した）
- source: iep-evidence
  locator: overview and sections on justification
  extracted_support: Evidence is discussed as a relation between a claim or hypothesis and information that bears on its justification; its force depends on relevance, alternatives, and background assumptions.

### evidence-boundary
証拠の認識論的な重みを確率で表すべきか、説明力や反証可能性を重視すべきかは立場により異なる。単一の尺度で全ての証拠を比較できるとは限らない。
- semantic review: pass（本文とSource locatorの対応を確認した）
- source: iep-evidence
  locator: overview and sections on justification
  extracted_support: Evidence is discussed as a relation between a claim or hypothesis and information that bears on its justification; its force depends on relevance, alternatives, and background assumptions.

## Sources
1. Evidence（https://iep.utm.edu/evidence/）
   - locator: overview and sections on justification
   - supports: Evidence is discussed as a relation between a claim or hypothesis and information that bears on its justification; its force depends on relevance, alternatives, and background assumptions.
2. Evidence（https://plato.stanford.edu/entries/evidence/）
   - locator: evidence and hypothesis testing
   - supports: Evidence is examined in relation to hypotheses, confirmation, and the distinction between support for a claim and certainty that the claim is true.

## Audit notes
- previous maturity: stub
- maturity: deepened
- duplicate risk: 要確認（近接Concept: claim, inference, uncertainty）
- unresolved claims: none
- source-grounding concerns: none identified

## Human review
- [x] 定義は正確
- [x] Concept固有の説明になっている
- [x] 直感説明は誤解を生まない
- [x] 具体例は妥当
- [x] 近接Conceptとの境界は自然
- [x] 過度な一般化がない
- [x] Sourceが主要主張を支持している
- [x] 独立Conceptとして残す価値がある

Decision: PASS

Comment:

---

# 2. belief — 信念

## Definition
信念は、ある命題を真として受け入れる命題的態度である。これは心理的状態としてのbeliefと、その信念が正当化されているかという認識論的評価を区別する概念である。信念にはしばしば確信の程度が伴うが、確信が強いことは真理や正当化を保証しない。

信念は命題へのコミットメントであり、真であること・正当化されていること・行動のために採用されていることは別の軸である。degree of belief / credenceを確率で表現する形式化は不確実性を表現しやすいが、数値を付けただけで根拠の質や校正が改善するわけではない。[1]

## Conceptual structure
信念は、主体が命題に対して持つ態度である。命題内容、心理的なbelief、程度としてのcredence、実務上採用するacceptance、正当化するevidenceを分ける。[1]

## Intuition
人は同じ証拠から異なる確信を形成する。背景知識、信頼する情報源、代替仮説の評価が異なるからである。より厳密には、信念の有無だけでなく、どの命題に、どの程度、どの理由でコミットしているかを問う。[1]

## Why it matters for research
信念と知識、仮説、証拠を区別すると、確信の強さと正当化の根拠を別々に検討できる。

## Multiple examples
研究者が予備実験から仮説を信じ始めても、追試前には暫定的な信念に留める。診断医が症状から疾患仮説を持っても、検査結果で確信度を更新する。政策担当者がモデル予測を受け入れても、予測誤差と前提を記録する必要がある。

研究者がp値を見て仮説を信じても、その信念の強さは仮説の事前確率、研究の再現性、分析の自由度に依存する。反例は、強い所属集団への信頼だけで命題を受け入れる場合である。境界では、実務上ひとまず採用する仮定と、真だと信じることを区別する。[1]

## Common confusions
beliefとknowledgeは同じではない。真の信念でも偶然なら知識とは限らない。beliefとacceptanceも、後者が議論や実務のために仮置きする態度を含みうる点で異なる。confidenceは主観的確信であり、正当化の質そのものではない。

beliefは命題への態度、credenceは程度として表す信念、acceptanceは議論や行動のために命題を採用する態度であり、同じではない。[1]

## Boundaries / limitations
信念の心理的記述だけでは、その信念が合理的・真であるかを決められない。


beliefを合理的に評価する基準として証拠だけを重視する立場と、信頼・徳・実践的文脈も重視する立場がある。[1]

## Relations to neighboring concepts
evidenceはbeliefを支持しうるが、beliefを自動的に生成しない。knowledgeはbeliefに加えて真理や正当化などの条件を問う。uncertaintyは競合するbeliefやその確信度を明示する。[1]

## Research Skill connection
現時点で直接接続するResearch Skillはありません。将来、evidence audit・hypothesis appraisal・source appraisalへ接続候補です。

## Major claims and evidence
### belief-core
信念は、ある命題を真として受け入れる命題的態度である。これは心理的状態としてのbeliefと、その信念が正当化されているかという認識論的評価を区別する概念である。信念にはしばしば確信の程度が伴うが、確信が強いことは真理や正当化を保証しない。

信念は命題へのコミットメントであり、真であること・正当化されていること・行動のために採用されていることは別の軸である。degree of belief / credenceを確率で表現する形式化は不確実性を表現しやすいが、数値を付けただけで根拠の質や校正が改善するわけではない。
- semantic review: pass（本文とSource locatorの対応を確認した）
- source: sep-belief
  locator: propositional attitude and nature of belief
  extracted_support: Belief is characterized as an affirmative propositional attitude toward a proposition or state of affairs.

### belief-practice
研究記録では、観測事実・採用した仮説・確信度・根拠・反証条件を分ける。仮説を信じていることを、結果が確認されたことや研究者間の合意の代わりに使わない。

研究ノートでは、観測事実、作業仮説、確信度、採用理由、変更条件を別欄にする。結果に都合よく信念を更新したのか、事前に決めた更新規則に従ったのかも残す。
- semantic review: pass（本文とSource locatorの対応を確認した）
- source: sep-belief
  locator: propositional attitude and nature of belief
  extracted_support: Belief is characterized as an affirmative propositional attitude toward a proposition or state of affairs.

### belief-boundary
beliefを合理的に評価する基準として証拠だけを重視する立場と、信頼・徳・実践的文脈も重視する立場がある。
- semantic review: pass（本文とSource locatorの対応を確認した）
- source: sep-belief
  locator: propositional attitude and nature of belief
  extracted_support: Belief is characterized as an affirmative propositional attitude toward a proposition or state of affairs.

## Sources
1. Belief（https://plato.stanford.edu/entries/belief/）
   - locator: propositional attitude and nature of belief
   - supports: Belief is characterized as an affirmative propositional attitude toward a proposition or state of affairs.
2. Evidence（https://iep.utm.edu/evidence/）
   - locator: overview and sections on justification
   - supports: Evidence is discussed as a relation between a claim or hypothesis and information that bears on its justification; its force depends on relevance, alternatives, and background assumptions.
3. Evidence（https://plato.stanford.edu/entries/evidence/）
   - locator: evidence and hypothesis testing
   - supports: Evidence is examined in relation to hypotheses, confirmation, and the distinction between support for a claim and certainty that the claim is true.

## Audit notes
- previous maturity: stub
- maturity: deepened
- duplicate risk: 要確認（近接Concept: knowledge, uncertainty, claim, evidence）
- unresolved claims: none
- source-grounding concerns: none identified

## Human review
- [x] 定義は正確
- [x] Concept固有の説明になっている
- [x] 直感説明は誤解を生まない
- [x] 具体例は妥当
- [x] 近接Conceptとの境界は自然
- [x] 過度な一般化がない
- [x] Sourceが主要主張を支持している
- [x] 独立Conceptとして残す価値がある

Decision: PASS

Comment:

---

# 3. knowledge — 知識

## Definition
知識は、単に正しい命題を信じること以上の認識状態として論じられる。古典的にはjustified true belief（正当化された真なる信念）が候補になったが、Gettier型の反例は、真・信念・正当化だけでは偶然の正しさを排除できないことを示した。現代の分析は一つに確定していない。

知識を研究に持ち込むとき、命題の真偽だけでなく、誰がどの条件で知っていると言えるかが問題になる。測定が再現されても測っている対象が違えば知識とは言いにくく、正しい予測も偶然なら知識の根拠として弱い。経験科学上の知識主張は確実性と同一ではなく、理論によっては改訂可能である。Research OSでは根拠・適用範囲・不確実性・改訂可能性を併記するが、これはknowledge一般の必要条件ではなく研究上の運用規範である。[1]

## Conceptual structure
知識の分析では、subject、proposition、truth、belief、justification、偶然性を排除する条件が関係する。JTBは候補であり、Gettier問題はその十分性を問う。[1]

## Intuition
時計がたまたま正しい時刻を示したとき、それを見て時刻を当てても、通常は時刻を知っているとは言いにくい。正しい結果だけでなく、結果に至る経路が偶然に依存していないかを問う必要がある。[1]

## Why it matters for research
研究で得た結果を、観測された事実・推論・確定的知識として過大評価しないために必要だ。

## Multiple examples
再現された測定と妥当な推論に基づく科学的知見は、暫定的・可謬的な知識として扱える。逆に、p値が小さいという理由だけで理論が真だと結論することは、証拠から知識への飛躍になりうる。

同じ時計が偶然正しい時刻を示す例は、真なるbeliefと知識の違いを示す。研究では、追試で同じ結果が得られても、選択的報告や測定の不備が残れば主張の知識化を急げない。逆に複数の独立な証拠と明示的な限界があれば、可謬的でも実務上信頼できる知識になる。[1]

## Common confusions
true beliefはknowledgeと同一ではない。justificationがあっても反例や隠れた前提がありうる。knowledgeとcertaintyも異なる。経験科学上の知識主張は改訂可能に扱われることがあるが、これはknowledge一般の必要条件ではない。[1]

## Boundaries / limitations
知識の定義は認識論上争われており、実務では確信度と根拠を明示する方が安全な場合がある。


知識に安全性・信頼性・反偶然性のどれを要求するか、文脈主義を採るかは争われている。[1]

## Relations to neighboring concepts
beliefは知識候補の心理的側面、evidenceはその正当化に関わる情報、inferenceは到達過程である。uncertaintyは可謬的知識の限界を表す。[1]

## Research Skill connection
現時点で直接接続するResearch Skillはありません。将来、evidence audit・hypothesis appraisal・source appraisalへ接続候補です。

## Major claims and evidence
### knowledge-core
知識は、単に正しい命題を信じること以上の認識状態として論じられる。古典的にはjustified true belief（正当化された真なる信念）が候補になったが、Gettier型の反例は、真・信念・正当化だけでは偶然の正しさを排除できないことを示した。現代の分析は一つに確定していない。

知識を研究に持ち込むとき、命題の真偽だけでなく、誰がどの条件で知っていると言えるかが問題になる。測定が再現されても測っている対象が違えば知識とは言いにくく、正しい予測も偶然なら知識の根拠として弱い。経験科学上の知識主張は確実性と同一ではなく、理論によっては改訂可能である。Research OSでは根拠・適用範囲・不確実性・改訂可能性を併記するが、これはknowledge一般の必要条件ではなく研究上の運用規範である。
- semantic review: pass（本文とSource locatorの対応を確認した）
- source: sep-knowledge-analysis
  locator: JTB, Gettier cases, epistemic luck, and competing analyses
  extracted_support: The analysis of propositional knowledge examines truth, belief, justification, Gettier cases, epistemic luck, and competing conditions; no single analysis is widely accepted.
- source: sep-epistemology
  locator: knowledge, justification, and epistemic concepts
  extracted_support: Epistemology studies knowledge and related concepts; knowledge claims and their justification have multiple competing analyses.

### knowledge-practice
Research OSではknowledgeを最終判定語として乱用せず、claim・evidence・assumption・uncertaintyを明示する。論文では「知識になったか」より、どの主張がどの条件でどの程度支持されるかを記録する。

論文ではknowledgeという強い語を避け、claimがどの集団・条件・測定・推論に依存するかを書く。更新可能な結論として、反証条件と新情報で何が変わるかを明示する。
- semantic review: pass（本文とSource locatorの対応を確認した）
- source: sep-knowledge-analysis
  locator: JTB, Gettier cases, epistemic luck, and competing analyses
  extracted_support: The analysis of propositional knowledge examines truth, belief, justification, Gettier cases, epistemic luck, and competing conditions; no single analysis is widely accepted.
- source: sep-epistemology
  locator: knowledge, justification, and epistemic concepts
  extracted_support: Epistemology studies knowledge and related concepts; knowledge claims and their justification have multiple competing analyses.

### knowledge-boundary
知識に安全性・信頼性・反偶然性のどれを要求するか、文脈主義を採るかは争われている。
- semantic review: pass（本文とSource locatorの対応を確認した）
- source: sep-knowledge-analysis
  locator: JTB, Gettier cases, epistemic luck, and competing analyses
  extracted_support: The analysis of propositional knowledge examines truth, belief, justification, Gettier cases, epistemic luck, and competing conditions; no single analysis is widely accepted.
- source: sep-epistemology
  locator: knowledge, justification, and epistemic concepts
  extracted_support: Epistemology studies knowledge and related concepts; knowledge claims and their justification have multiple competing analyses.

## Sources
1. The Analysis of Knowledge（https://plato.stanford.edu/entries/knowledge-analysis/）
   - locator: JTB, Gettier cases, epistemic luck, and competing analyses
   - supports: The analysis of propositional knowledge examines truth, belief, justification, Gettier cases, epistemic luck, and competing conditions; no single analysis is widely accepted.
2. Epistemology（https://plato.stanford.edu/entries/epistemology/）
   - locator: knowledge, justification, and epistemic concepts
   - supports: Epistemology studies knowledge and related concepts; knowledge claims and their justification have multiple competing analyses.
3. Evidence（https://iep.utm.edu/evidence/）
   - locator: overview and sections on justification
   - supports: Evidence is discussed as a relation between a claim or hypothesis and information that bears on its justification; its force depends on relevance, alternatives, and background assumptions.
4. Evidence（https://plato.stanford.edu/entries/evidence/）
   - locator: evidence and hypothesis testing
   - supports: Evidence is examined in relation to hypotheses, confirmation, and the distinction between support for a claim and certainty that the claim is true.

## Audit notes
- previous maturity: stub
- maturity: deepened
- duplicate risk: 要確認（近接Concept: uncertainty, inference）
- unresolved claims: none
- source-grounding concerns: none identified

## Human review
- [x] 定義は正確
- [x] Concept固有の説明になっている
- [x] 直感説明は誤解を生まない
- [x] 具体例は妥当
- [x] 近接Conceptとの境界は自然
- [x] 過度な一般化がない
- [x] Sourceが主要主張を支持している
- [x] 独立Conceptとして残す価値がある

Decision: PASS

Comment:

---

# 4. uncertainty — 不確実性

## Definition
不確実性は、対象について複数の可能性が残り、現在の情報だけでは一つに固定できない状態である。偶然変動（aleatory uncertainty）、知識不足に由来する認識的不確実性（epistemic uncertainty）、モデル・測定・構造の不確実性を一つの整理として区別すると、何を追加すれば不確実性が減るかが見える。ただし分類は目的や分野によって重なりうる。

不確実性は一つの数字が足りないという意味ではなく、複数の可能な状態・モデル・解釈が残る構造である。偶然変動は反復や確率モデルで表せる一方、認識不足は追加測定や仮定の比較を必要とする。区間が狭くても、系統誤差や未測定交絡を含まなければ結論全体の不確実性は小さくならない。[1][5][2]

## Conceptual structure
不確実性は単一の分類表ではなく、対象の変動、情報不足、測定、モデル、構造、言語の曖昧さが異なる箇所で生じる関係として捉える。[1][5][2]

## Intuition
同じ条件でも結果が揺れる場合と、条件そのものを知らない場合は違う。前者は繰り返しで分布を学べることがあるが、後者は新しい測定や仮定の検討が必要である。数値化できない曖昧さや無知も、勝手に確率へ変換してはならない。

aleatory / epistemicは『変動か知識不足か』という一つの分類軸である。環境リスクの報告でも、統計的変動とモデル・パラメータ不確実性を区別する枠組みが用いられるが、これは文脈依存の整理である。一方、measurement uncertaintyやmodel uncertaintyは不確実性が研究過程のどこで生じるかという別の軸であり、互いに排他的な同階層カテゴリとは限らない。[1][5][2]

## Why it matters for research
不明なことを既知として埋めず、追加データや感度分析が何を変えるかを示せる。

## Multiple examples
標本の標準誤差はsampling uncertainty、測定器の校正不足はmeasurement uncertainty、モデル形式の違いはmodel uncertaintyである。未測定交絡は信頼区間に含まれない構造的不確実性になりうる。

標本抽出の揺らぎには信頼区間が役立つが、対象集団の定義が曖昧なら別種の不確実性が残る。二つの妥当なモデルが異なる結論を出すならモデル不確実性を感度分析する。境界例として、情報がないことを50%の確率と表すのは、根拠のない精密化になりうる。[1][5][2]

## Common confusions
confidence intervalは全ての不確実性を表さない。precisionとvalidityも異なる。ignoranceは可能性を評価する情報自体が不足した状態で、ambiguityは概念や問いの意味が複数ある状態である。[1][5][2]

## Boundaries / limitations
すべての不確実性を一つの確率や区間に還元できるとは限らない。


不確実性を確率・区間・シナリオ・質的な留保のどれで表すかは目的と情報構造に依存する。[1][5][2]

## Relations to neighboring concepts
evidenceは不確実性を減らしうるが、証拠の解釈にも仮定がある。inferenceは不確実性を伴う結論を作る。beliefは不確実性のもとでの確信度を表す。[1][5][2]

## Research Skill connection
現時点で直接接続するResearch Skillはありません。将来、evidence audit・hypothesis appraisal・source appraisalへ接続候補です。

## Major claims and evidence
### uncertainty-core
不確実性は、対象について複数の可能性が残り、現在の情報だけでは一つに固定できない状態である。偶然変動（aleatory uncertainty）、知識不足に由来する認識的不確実性（epistemic uncertainty）、モデル・測定・構造の不確実性を一つの整理として区別すると、何を追加すれば不確実性が減るかが見える。ただし分類は目的や分野によって重なりうる。

不確実性は一つの数字が足りないという意味ではなく、複数の可能な状態・モデル・解釈が残る構造である。偶然変動は反復や確率モデルで表せる一方、認識不足は追加測定や仮定の比較を必要とする。区間が狭くても、系統誤差や未測定交絡を含まなければ結論全体の不確実性は小さくならない。
- semantic review: pass（分類軸の射程を限定し、追加Sourceの適用範囲を確認した）
- source: sep-epistemology
  locator: knowledge, justification, and epistemic concepts
  extracted_support: Epistemology studies knowledge and related concepts; knowledge claims and their justification have multiple competing analyses.
- source: ncbi-environmental-uncertainty
  locator: Introduction: statistical variability/heterogeneity and model/parameter uncertainty
  extracted_support: The report distinguishes statistical variability and heterogeneity from model and parameter uncertainty as a context-dependent framework.
- source: nist-measurement-uncertainty
  locator: Sections 1.2, 2, and 5 on measurement uncertainty and uncertainty components
  extracted_support: Measurement uncertainty is evaluated and expressed from available information about the measurement process; components and their treatment depend on how the measured quantity is used in a model.

### uncertainty-practice
研究計画では、既知の変動、未知の仮定、測定限界、代替モデルを別欄に記録する。結論を出せない理由と、追加情報がどの判断を変えるかを明示する。

結論では、確率・区間で表した変動、未確認仮定、測定限界、構造的な未知を分ける。追加研究がどの不確実性を減らし、どの不確実性には効かないかを明記する。
- semantic review: pass（分類軸の射程を限定し、追加Sourceの適用範囲を確認した）
- source: sep-epistemology
  locator: knowledge, justification, and epistemic concepts
  extracted_support: Epistemology studies knowledge and related concepts; knowledge claims and their justification have multiple competing analyses.
- source: ncbi-environmental-uncertainty
  locator: Introduction: statistical variability/heterogeneity and model/parameter uncertainty
  extracted_support: The report distinguishes statistical variability and heterogeneity from model and parameter uncertainty as a context-dependent framework.
- source: nist-measurement-uncertainty
  locator: Sections 1.2, 2, and 5 on measurement uncertainty and uncertainty components
  extracted_support: Measurement uncertainty is evaluated and expressed from available information about the measurement process; components and their treatment depend on how the measured quantity is used in a model.

### uncertainty-boundary
不確実性を確率・区間・シナリオ・質的な留保のどれで表すかは目的と情報構造に依存する。
- semantic review: pass（分類軸の射程を限定し、追加Sourceの適用範囲を確認した）
- source: sep-epistemology
  locator: knowledge, justification, and epistemic concepts
  extracted_support: Epistemology studies knowledge and related concepts; knowledge claims and their justification have multiple competing analyses.
- source: ncbi-environmental-uncertainty
  locator: Introduction: statistical variability/heterogeneity and model/parameter uncertainty
  extracted_support: The report distinguishes statistical variability and heterogeneity from model and parameter uncertainty as a context-dependent framework.
- source: nist-measurement-uncertainty
  locator: Sections 1.2, 2, and 5 on measurement uncertainty and uncertainty components
  extracted_support: Measurement uncertainty is evaluated and expressed from available information about the measurement process; components and their treatment depend on how the measured quantity is used in a model.

## Sources
1. Epistemology（https://plato.stanford.edu/entries/epistemology/）
   - locator: knowledge, justification, and epistemic concepts
   - supports: Epistemology studies knowledge and related concepts; knowledge claims and their justification have multiple competing analyses.
2. Guidelines for Evaluating and Expressing the Uncertainty of NIST Measurement Results（https://www.nist.gov/document/tn1297spdf）
   - locator: Sections 1.2, 2, and 5 on measurement uncertainty and uncertainty components
   - supports: Measurement uncertainty is evaluated and expressed from available information about the measurement process; components and their treatment depend on how the measured quantity is used in a model.
3. Evidence（https://iep.utm.edu/evidence/）
   - locator: overview and sections on justification
   - supports: Evidence is discussed as a relation between a claim or hypothesis and information that bears on its justification; its force depends on relevance, alternatives, and background assumptions.
4. Evidence（https://plato.stanford.edu/entries/evidence/）
   - locator: evidence and hypothesis testing
   - supports: Evidence is examined in relation to hypotheses, confirmation, and the distinction between support for a claim and certainty that the claim is true.
5. Environmental Decisions in the Face of Uncertainty（https://www.ncbi.nlm.nih.gov/books/NBK200850/）
   - locator: Introduction: statistical variability/heterogeneity and model/parameter uncertainty
   - supports: The report distinguishes statistical variability and heterogeneity from model and parameter uncertainty as a context-dependent framework.

## Audit notes
- previous maturity: stub
- maturity: deepened
- duplicate risk: 要確認（近接Concept: belief, inference）
- unresolved claims: none
- source-grounding concerns: none identified

## Human review
- [x] 定義は正確
- [x] Concept固有の説明になっている
- [x] 直感説明は誤解を生まない
- [x] 具体例は妥当
- [x] 近接Conceptとの境界は自然
- [x] 過度な一般化がない
- [x] Sourceが主要主張を支持している
- [x] 独立Conceptとして残す価値がある

Decision: PASS

Comment:

---

# 5. observation — 観察

## Definition
観察は、対象またはその作用について、知覚・装置・実験系を通じて得られる経験的記録である。科学的観察はしばしば装置、分類語彙、サンプリング、校正、理論的期待によって媒介されるため、観察報告とそこからの解釈を分ける必要がある。

観察は世界をそのまま写す窓ではない。対象、観察装置、分類規則、サンプリング、記録形式が組み合わさって観察報告になる。したがって『見えた』という記録と、『それは何を意味するか』という解釈を分離し、観察条件が変わったとき同じ概念を測れているかを再検討する。[1]

## Conceptual structure
観察は、対象またはその作用、観察装置・実験系、分類語彙、記録、解釈の連鎖として成立する。[1]

## Intuition
温度計の数字は観察記録だが、温度という量として読むには装置の校正と測定モデルが要る。観察者が何を探すか、どの信号をノイズとして扱うかも記録の意味に影響する。[1]

## Why it matters for research
観察報告と理論解釈を分け、何が直接記録され何が推論されたかを確認できる。

## Multiple examples
天文学では検出器の信号から天体の性質を推定する。医学では画像所見を診断カテゴリーへ変換する。社会調査では回答を潜在的態度の指標として解釈する。いずれも観察値と対象の同一視はできない。

画像診断では画素の信号、病変らしい所見、診断カテゴリーが別段階である。センサーの閾値を変えると検出数が変わるため、ゼロ件は現象がない証拠とは限らない。観察者が仮説を知っていると分類が変わる場合は、盲検化や観察者間一致が重要になる。[1]

## Common confusions
observationとmeasurementは重なるが、measurementは量・尺度・誤差モデルをより明示する。observation reportは解釈を含みうるが、interpretationはその報告に意味を与える推論である。direct observationも媒介がないことを意味しない。[1]

## Boundaries / limitations
観察だけでは因果方向や未観測過程を一意に決められない。


観察語彙が理論から独立できるか、観察の客観性をどの程度確保できるかは科学哲学の継続的論点である。[1]

## Relations to neighboring concepts
theory-ladennessは観察と理論の関係を示す。evidenceは観察記録が主張に対して果たす役割である。inferenceは観察から未観測の対象や原因へ進む。[1]

## Research Skill connection
現時点で直接接続するResearch Skillはありません。将来、evidence audit・hypothesis appraisal・source appraisalへ接続候補です。

## Major claims and evidence
### observation-core
観察は、対象またはその作用について、知覚・装置・実験系を通じて得られる経験的記録である。科学的観察はしばしば装置、分類語彙、サンプリング、校正、理論的期待によって媒介されるため、観察報告とそこからの解釈を分ける必要がある。

観察は世界をそのまま写す窓ではない。対象、観察装置、分類規則、サンプリング、記録形式が組み合わさって観察報告になる。したがって『見えた』という記録と、『それは何を意味するか』という解釈を分離し、観察条件が変わったとき同じ概念を測れているかを再検討する。
- semantic review: pass（本文とSource locatorの対応を確認した）
- source: sep-observation
  locator: overview and observation reports
  extracted_support: Scientific observation is treated as shaped by instruments, concepts, experimental practice, and the distinction between observation reports and theoretical interpretation.

### observation-practice
論文では観察手順、装置、校正、盲検化、除外基準、観察者間一致を確認する。生データ、観察報告、理論解釈を別々に保存すると再現性が高まる。

研究報告では生データ、前処理、除外、分類、解釈を追跡可能にする。再現性を観察者の人格的中立性に頼らず、校正、プロトコル、複数観察者、監査記録で支える。
- semantic review: pass（本文とSource locatorの対応を確認した）
- source: sep-observation
  locator: overview and observation reports
  extracted_support: Scientific observation is treated as shaped by instruments, concepts, experimental practice, and the distinction between observation reports and theoretical interpretation.

### observation-boundary
観察語彙が理論から独立できるか、観察の客観性をどの程度確保できるかは科学哲学の継続的論点である。
- semantic review: pass（本文とSource locatorの対応を確認した）
- source: sep-observation
  locator: overview and observation reports
  extracted_support: Scientific observation is treated as shaped by instruments, concepts, experimental practice, and the distinction between observation reports and theoretical interpretation.

## Sources
1. Theory and Observation in Science（https://plato.stanford.edu/entries/science-theory-observation/）
   - locator: overview and observation reports
   - supports: Scientific observation is treated as shaped by instruments, concepts, experimental practice, and the distinction between observation reports and theoretical interpretation.

## Audit notes
- previous maturity: stub
- maturity: deepened
- duplicate risk: 要確認（近接Concept: inference, model）
- unresolved claims: none
- source-grounding concerns: none identified

## Human review
- [x] 定義は正確
- [x] Concept固有の説明になっている
- [x] 直感説明は誤解を生まない
- [x] 具体例は妥当
- [x] 近接Conceptとの境界は自然
- [x] 過度な一般化がない
- [x] Sourceが主要主張を支持している
- [x] 独立Conceptとして残す価値がある

Decision: PASS

Comment:

---

# 6. inference — 推論

## Definition
推論は、前提・証拠から結論、予測、説明、判断へ進む過程である。推論の評価には、形式の妥当性、前提の信頼性、証拠の関連性、推論の強さ、背景仮定を含める。推論は結論を生むが、意思決定は価値や損失も含むため同一ではない。

推論は、前提から結論へ移る関係であり、入力データそのものではない。Research OSでは、推論を監査・再利用可能にするため、前提、推論規則、結論、不確実性、失敗条件を分けて記録する。統計推論・因果推論・診断推論は異なる対象と仮定を持つため、同じ『推論』という語だけで保証を共有しない。[1]

## Conceptual structure
推論は、前提・推論規則・結論・信頼度・反証条件の関係である。deduction、induction、abductionは異なる役割を持つ。[1]

## Intuition
観測された差から結論を出すとき、データだけでなく比較対象、測定、選択、モデルを使っている。どの一歩が必要だったかを書き出すと、隠れた仮定や代替説明が見える。[1]

## Why it matters for research
観測された事実、仮定、導かれた結論を分解して、推論の飛躍を発見できる。

## Multiple examples
典型的な統計推論の一例として、標本から母集団の量へ進む。反実仮想的な枠組みでは、観測された関連から介入時の結果を推論する。診断推論は症状から最良の説明候補を比較する。

標本平均から母平均へ進む推論には標本設計とモデルが必要である。観察された関連から治療効果へ進むには交換可能性や時間順序が必要になる。診断では複数疾患が同じ症状を説明できるため、最良候補を一つ選んでも不確実性が残る。[1]

## Common confusions
deductionは真理保存的だが、inductionは一般化、abductionは説明仮説の比較である。explanationは現象を理解する内容、inferenceはそこへ到達する関係や過程である。decisionは推論結果に価値判断を加える。[1]

## Boundaries / limitations
推論の妥当性は前提の真偽と適用範囲に依存する。


推論の強さを確率で統一できるか、説明力や機序を独立の基準とするかは立場により異なる。[1]

## Relations to neighboring concepts
evidenceは推論の入力、observationは経験的入力、deduction・induction・abductionは異なる推論形式である。uncertaintyは推論の強さや残る代替可能性を表す。[1]

## Research Skill connection
現時点で直接接続するResearch Skillはありません。将来、evidence audit・hypothesis appraisal・source appraisalへ接続候補です。

## Major claims and evidence
### inference-core
推論は、前提・証拠から結論、予測、説明、判断へ進む過程である。推論の評価には、形式の妥当性、前提の信頼性、証拠の関連性、推論の強さ、背景仮定を含める。推論は結論を生むが、意思決定は価値や損失も含むため同一ではない。

推論は、前提から結論へ移る関係であり、入力データそのものではない。Research OSでは、推論を監査・再利用可能にするため、前提、推論規則、結論、不確実性、失敗条件を分けて記録する。統計推論・因果推論・診断推論は異なる対象と仮定を持つため、同じ『推論』という語だけで保証を共有しない。
- semantic review: pass（本文とSource locatorの対応を確認した）
- source: sep-argument
  locator: deduction, induction, and abduction
  extracted_support: Deductive, inductive, and abductive arguments differ in the relation between premises and conclusion; abduction concerns explanatory hypotheses and induction extends beyond the premises.

### inference-practice
各主張をpremise、inference rule、conclusion、uncertaintyに分解する。統計解析ではestimand、仮定、推定量、診断を追跡し、因果解釈を関連の記述から分離する。

解析計画をpremise・rule・conclusionに分解し、どの段階で情報が失われたかを確認する。結論がデータの記述、予測、因果主張のどれかを明示し、用途を越えて外挿しない。

ここでのClaim→Evidence→Conclusionの記録はResearch OSの設計規範であり、推論一般の哲学的必要条件だと主張するものではない。
- semantic review: pass（本文とSource locatorの対応を確認した）
- source: sep-argument
  locator: deduction, induction, and abduction
  extracted_support: Deductive, inductive, and abductive arguments differ in the relation between premises and conclusion; abduction concerns explanatory hypotheses and induction extends beyond the premises.

### inference-boundary
推論の強さを確率で統一できるか、説明力や機序を独立の基準とするかは立場により異なる。
- semantic review: pass（本文とSource locatorの対応を確認した）
- source: sep-argument
  locator: deduction, induction, and abduction
  extracted_support: Deductive, inductive, and abductive arguments differ in the relation between premises and conclusion; abduction concerns explanatory hypotheses and induction extends beyond the premises.

## Sources
1. Argument and Argumentation（https://plato.stanford.edu/entries/argument/）
   - locator: deduction, induction, and abduction
   - supports: Deductive, inductive, and abductive arguments differ in the relation between premises and conclusion; abduction concerns explanatory hypotheses and induction extends beyond the premises.
2. Evidence（https://iep.utm.edu/evidence/）
   - locator: overview and sections on justification
   - supports: Evidence is discussed as a relation between a claim or hypothesis and information that bears on its justification; its force depends on relevance, alternatives, and background assumptions.

## Audit notes
- previous maturity: stub
- maturity: deepened
- duplicate risk: 要確認（近接Concept: deduction, induction, abduction）
- unresolved claims: none
- source-grounding concerns: none identified

## Human review
- [x] 定義は正確
- [x] Concept固有の説明になっている
- [x] 直感説明は誤解を生まない
- [x] 具体例は妥当
- [x] 近接Conceptとの境界は自然
- [x] 過度な一般化がない
- [x] Sourceが主要主張を支持している
- [x] 独立Conceptとして残す価値がある

Decision: PASS

Comment:

---

# 7. deduction — 演繹

## Definition
演繹は、妥当な形式のもとで前提が真なら結論も真になる推論である。validityは形式の性質であり、soundness（健全性）は妥当な形式に加えて前提が真であることを要求する。したがって演繹的確実性は、現実についての前提が確立していることとは別である。

演繹の強さは、前提が真なら結論も真になる形式にある。これは現実の前提が真だと保証するものではない。研究では、理論、補助仮定、初期条件、測定規則から予測を導くため、観察との不一致がどの前提に帰属するかを分けて扱う必要がある。[1]

## Conceptual structure
演繹の構造は、前提集合、論理形式、結論、validity、soundnessに分かれる。validityは形式的関係であり、soundnessには前提の真理も必要である。[1]

## Intuition
『すべてのAはB』『xはA』から『xはB』を導くとき、個別データを追加して一般化しているのではなく、前提から論理的に帰結する内容を導いている。[1]

## Why it matters for research
定義・論理・モデルから何が必ず従うかを、経験的にもっともらしい推測と区別できる。

## Multiple examples
数学の定理、論理モデルからの予測、研究プロトコルの包含条件の適用は演繹的構造を持つ。経験科学でも、理論と補助仮定から観察予測を導く段階で演繹が使われる。

『すべての登録対象は条件A』『この対象は登録対象』から条件Aを導くのは演繹である。形式が正しくても、登録記録が誤っていれば現実の結論は保証されない。科学的反証では装置故障や初期条件の誤りも候補になるため、単一の不一致から理論だけを棄却できない。[1]

## Common confusions
valid argumentは結論が現実に真だという意味ではない。確実な形式でも測定誤差や補助仮定が偽ならsoundではない。演繹は前提を増やす方法ではなく、前提から帰結を展開する方法である。[1]

## Boundaries / limitations
現実についての確率的推論や前提自体の正当化は、演繹だけでは扱わない。


経験科学における単純な演繹的反証は、測定・初期条件・補助仮定を含むため、理論単独の失敗と直ちには言えない。[1]

## Relations to neighboring concepts
inferenceの一形式で、inductionやabductionと対照される。falsifiabilityでは理論と補助仮定からrisky predictionを導く段階に関わる。[1]

## Research Skill connection
現時点で直接接続するResearch Skillはありません。将来、evidence audit・hypothesis appraisal・source appraisalへ接続候補です。

## Major claims and evidence
### deduction-core
演繹は、妥当な形式のもとで前提が真なら結論も真になる推論である。validityは形式の性質であり、soundness（健全性）は妥当な形式に加えて前提が真であることを要求する。したがって演繹的確実性は、現実についての前提が確立していることとは別である。

演繹の強さは、前提が真なら結論も真になる形式にある。これは現実の前提が真だと保証するものではない。研究では、理論、補助仮定、初期条件、測定規則から予測を導くため、観察との不一致がどの前提に帰属するかを分けて扱う必要がある。
- semantic review: pass（本文とSource locatorの対応を確認した）
- source: sep-logical-consequence
  locator: logical consequence and validity
  extracted_support: Logical consequence concerns what follows from premises by virtue of logical form or meaning, distinguishing consequence from truth of the premises.

### deduction-practice
理論の予測を明示するとき、主要仮定・補助仮定・観測条件を分ける。予測不一致があった場合、演繹形式ではなく前提や測定を再検討する。

論文の仮説検定では、帰無仮説、デザイン、測定、解析規則を別々の前提として書き出す。validとsound、論理的必然性と経験的確実性を混同しない。
- semantic review: pass（本文とSource locatorの対応を確認した）
- source: sep-logical-consequence
  locator: logical consequence and validity
  extracted_support: Logical consequence concerns what follows from premises by virtue of logical form or meaning, distinguishing consequence from truth of the premises.

### deduction-boundary
経験科学における単純な演繹的反証は、測定・初期条件・補助仮定を含むため、理論単独の失敗と直ちには言えない。
- semantic review: pass（本文とSource locatorの対応を確認した）
- source: sep-logical-consequence
  locator: logical consequence and validity
  extracted_support: Logical consequence concerns what follows from premises by virtue of logical form or meaning, distinguishing consequence from truth of the premises.

## Sources
1. Logical Consequence（https://plato.stanford.edu/entries/logical-consequence/）
   - locator: logical consequence and validity
   - supports: Logical consequence concerns what follows from premises by virtue of logical form or meaning, distinguishing consequence from truth of the premises.
2. Argument and Argumentation（https://plato.stanford.edu/entries/argument/）
   - locator: deduction, induction, and abduction
   - supports: Deductive, inductive, and abductive arguments differ in the relation between premises and conclusion; abduction concerns explanatory hypotheses and induction extends beyond the premises.
3. Karl Popper（https://plato.stanford.edu/entries/popper/）
   - locator: falsifiability and demarcation
   - supports: Falsifiability concerns whether a theory exposes itself to possible empirical failure and is distinct from the fact that a theory has actually been falsified.

## Audit notes
- previous maturity: stub
- maturity: deepened
- duplicate risk: 要確認（近接Concept: induction, abduction）
- unresolved claims: none
- source-grounding concerns: none identified

## Human review
- [x] 定義は正確
- [x] Concept固有の説明になっている
- [x] 直感説明は誤解を生まない
- [x] 具体例は妥当
- [x] 近接Conceptとの境界は自然
- [x] 過度な一般化がない
- [x] Sourceが主要主張を支持している
- [x] 独立Conceptとして残す価値がある

Decision: PASS

Comment:

---

# 8. induction — 帰納

## Definition
帰納は、観察された事例から未観察事例や一般的パターンへ推論を広げる。列挙的帰納、予測、統計的推論の多くは帰納的役割を担うが、統計的推論そのものと帰納を単純に同一視できず、理論のconfirmationなども含めて論じられるが、前提が真でも結論を必然化しない。

帰納は、観察された範囲を越えて一般化・予測するため、研究の多くに不可欠だが必然性を持たない。一般化の強さは事例数だけでなく、対象の代表性、観測条件の多様性、選択機構、競合仮説、将来条件の安定性に依存する。[1]

## Conceptual structure
帰納は、観察済みの事例・データから未観察事例、将来、一般パターンへ移る構造を持つ。[1]

## Intuition
白い白鳥を何羽見ても、全ての白鳥が白いことは論理的には保証されない。ただし標本設計、観測の多様性、競合仮説、安定性の知識によって、一般化の支持度を高めることはできる。[1]

## Why it matters for research
標本から母集団へ、過去の観測から将来へ一般化する際の根拠と限界を明示できる。

## Multiple examples
無作為標本から母集団の平均を推定する。過去の時系列から将来を予測する。複数研究で同じ効果が再現されることを理論の支持として評価する。

無作為標本から母集団へ一般化する場合と、便利な参加者から全人口へ一般化する場合では根拠が違う。過去の予測が当たっても制度や環境が変われば将来予測は弱くなる。境界例として、統計モデルは不確実性を表せても、対象集団の定義不足を自動では解決しない。[1]

## Common confusions
inductionは単なる事例の数え上げではない。representative samplingと便利な事例の列挙は違う。statistical inferenceは帰納的要素を持つが、確率モデル・推定量・誤差評価を含む専門的手続きである。[1]

## Boundaries / limitations
帰納の正当化や将来への適用範囲は、観測設計と背景仮定に依存する。


Humeの問題は、帰納の原理を過去の成功で正当化すると循環になると指摘する。現代の確率的・ベイズ的・反証主義的応答は一致していない。[1]

## Relations to neighboring concepts
deductionは必然的帰結、abductionは最良説明、inductionは未観察への拡張である。uncertaintyは帰納の非必然性を表す。[1]

## Research Skill connection
現時点で直接接続するResearch Skillはありません。将来、evidence audit・hypothesis appraisal・source appraisalへ接続候補です。

## Major claims and evidence
### induction-core
帰納は、観察された事例から未観察事例や一般的パターンへ推論を広げる。列挙的帰納、予測、統計的推論の多くは帰納的役割を担うが、統計的推論そのものと帰納を単純に同一視できず、理論のconfirmationなども含めて論じられるが、前提が真でも結論を必然化しない。

帰納は、観察された範囲を越えて一般化・予測するため、研究の多くに不可欠だが必然性を持たない。一般化の強さは事例数だけでなく、対象の代表性、観測条件の多様性、選択機構、競合仮説、将来条件の安定性に依存する。
- semantic review: pass（本文とSource locatorの対応を確認した）
- source: sep-induction-problem
  locator: problem of induction and observed/unobserved generalization
  extracted_support: The problem of induction concerns the justification of extending claims from observed cases to unobserved cases and future cases.
- source: iep-induction
  locator: confirmation and problem of induction
  extracted_support: Inductive reasoning extends beyond observed cases and therefore does not make its conclusion necessary; the problem of induction concerns how such extension is justified.

### induction-practice
一般化の対象集団、観測範囲、選択バイアス、交換可能性、追加仮定を明示する。過去に合ったから将来も合うとだけ書かず、予測条件の変化を監査する。

研究では一般化の母集団、観測期間、選択基準、輸送可能性を明記する。追試や異なる条件での検証を、単なる事例の追加ではなく、どの代替説明を減らすかで評価する。
- semantic review: pass（本文とSource locatorの対応を確認した）
- source: sep-induction-problem
  locator: problem of induction and observed/unobserved generalization
  extracted_support: The problem of induction concerns the justification of extending claims from observed cases to unobserved cases and future cases.
- source: iep-induction
  locator: confirmation and problem of induction
  extracted_support: Inductive reasoning extends beyond observed cases and therefore does not make its conclusion necessary; the problem of induction concerns how such extension is justified.

### induction-boundary
Humeの問題は、帰納の原理を過去の成功で正当化すると循環になると指摘する。現代の確率的・ベイズ的・反証主義的応答は一致していない。
- semantic review: pass（本文とSource locatorの対応を確認した）
- source: sep-induction-problem
  locator: problem of induction and observed/unobserved generalization
  extracted_support: The problem of induction concerns the justification of extending claims from observed cases to unobserved cases and future cases.
- source: iep-induction
  locator: confirmation and problem of induction
  extracted_support: Inductive reasoning extends beyond observed cases and therefore does not make its conclusion necessary; the problem of induction concerns how such extension is justified.

## Sources
1. The Problem of Induction（https://plato.stanford.edu/entries/induction-problem/）
   - locator: problem of induction and observed/unobserved generalization
   - supports: The problem of induction concerns the justification of extending claims from observed cases to unobserved cases and future cases.
2. Confirmation and Induction（https://iep.utm.edu/confirmation-and-induction/）
   - locator: confirmation and problem of induction
   - supports: Inductive reasoning extends beyond observed cases and therefore does not make its conclusion necessary; the problem of induction concerns how such extension is justified.
3. Argument and Argumentation（https://plato.stanford.edu/entries/argument/）
   - locator: deduction, induction, and abduction
   - supports: Deductive, inductive, and abductive arguments differ in the relation between premises and conclusion; abduction concerns explanatory hypotheses and induction extends beyond the premises.
4. Evidence（https://plato.stanford.edu/entries/evidence/）
   - locator: evidence and hypothesis testing
   - supports: Evidence is examined in relation to hypotheses, confirmation, and the distinction between support for a claim and certainty that the claim is true.

## Audit notes
- previous maturity: stub
- maturity: deepened
- duplicate risk: 要確認（近接Concept: deduction, abduction, uncertainty）
- unresolved claims: none
- source-grounding concerns: none identified

## Human review
- [x] 定義は正確
- [x] Concept固有の説明になっている
- [x] 直感説明は誤解を生まない
- [x] 具体例は妥当
- [x] 近接Conceptとの境界は自然
- [x] 過度な一般化がない
- [x] Sourceが主要主張を支持している
- [x] 独立Conceptとして残す価値がある

Decision: PASS

Comment:

---

# 9. abduction — アブダクション（最良説明への推論）

## Definition
アブダクションは説明的推論を指す。歴史的にはPeirceによる説明仮説の生成、現代ではInference to the Best Explanation（IBE）として競合仮説を評価・選択するという、関連した二つの用法がある。これは仮説生成にも、診断にも使われるが、真理保存的ではない。説明の良さは適合性、単純性、機序、予測力、既知の背景知識などの組み合わせで評価される。

アブダクションは、観察を説明する競合仮説を作り比較する推論である。『最良』は真であることではなく、既知の事実への適合、説明範囲、機序、単純性、予測、補助仮定の少なさなどを総合した暫定評価である。[1]

## Conceptual structure
アブダクションには、Peirceに由来する説明仮説の生成と、現代的なIBEとしての仮説評価・選択という関連するが異なる用法がある。[1]

## Intuition
機械が異常音を出したとき、故障・過負荷・センサー異常を比較する。最も説明的な候補を採用しても、追加検査で覆る可能性があるため、次に何を観測すれば候補を区別できるかまで考える。[1]

## Why it matters for research
研究仮説の形成と競合する説明の比較を、演繹的確実性や単純な一般化と区別できる。

## Multiple examples
臨床診断、異常検知、歴史的事象の説明、科学理論の発見が例である。研究では予想外の結果を、測定エラー・選択・新機序の仮説で比較する。

異常な治療効果を見たとき、真の効果、測定誤差、選択、交絡、偶然を競合説明として並べる。最も物語として魅力的な機序が、予測や測定の点で最良とは限らない。追加観測が複数仮説を区別できるなら、それ自体が有用な研究設計になる。[1]

## Common confusions
abductionはinductionの単なる弱い版ではなく、既存事例の一般化より説明仮説の比較に焦点がある。最良説明は真の説明と同じではなく、相関や適合だけで機序が確定するわけでもない。[1]

## Boundaries / limitations
説明の良さの基準は背景知識・単純性・予測力などに依存し、複数仮説が残りうる。


説明の単純性や美しさを認識論的根拠とみなせるか、最良説明への推論が真理に近づく保証を持つかは争われている。[1]

## Relations to neighboring concepts
inferenceの一形式で、observationからexplanationへ進む。underdeterminationは複数仮説が同じ証拠に適合する問題を示す。inductionは予測的な一般化、deductionは仮説から帰結を導く。[1]

## Research Skill connection
現時点で直接接続するResearch Skillはありません。将来、evidence audit・hypothesis appraisal・source appraisalへ接続候補です。

## Major claims and evidence
### abduction-core
アブダクションは説明的推論を指す。歴史的にはPeirceによる説明仮説の生成、現代ではInference to the Best Explanation（IBE）として競合仮説を評価・選択するという、関連した二つの用法がある。これは仮説生成にも、診断にも使われるが、真理保存的ではない。説明の良さは適合性、単純性、機序、予測力、既知の背景知識などの組み合わせで評価される。

アブダクションは、観察を説明する競合仮説を作り比較する推論である。『最良』は真であることではなく、既知の事実への適合、説明範囲、機序、単純性、予測、補助仮定の少なさなどを総合した暫定評価である。
- semantic review: pass（本文とSource locatorの対応を確認した）
- source: sep-abduction
  locator: modern abduction and supplement on historical Peircean abduction
  extracted_support: Abduction has a modern inference-to-the-best-explanation sense and a distinct historical Peircean sense concerning explanatory hypothesis formation.
- source: sep-argument
  locator: deduction, induction, and abduction
  extracted_support: Deductive, inductive, and abductive arguments differ in the relation between premises and conclusion; abduction concerns explanatory hypotheses and induction extends beyond the premises.

### abduction-practice
競合説明を列挙し、それぞれが説明する事実・説明できない事実・追加検証・補助仮定を記録する。underspecifiedなデータでは結論を一つに固定しない。

各仮説が説明する事実・説明できない事実・必要な補助仮定・区別する観測を表にする。単一の説明へ早く収束せず、データが同定できる範囲とunderdeterminationを明示する。
- semantic review: pass（本文とSource locatorの対応を確認した）
- source: sep-abduction
  locator: modern abduction and supplement on historical Peircean abduction
  extracted_support: Abduction has a modern inference-to-the-best-explanation sense and a distinct historical Peircean sense concerning explanatory hypothesis formation.
- source: sep-argument
  locator: deduction, induction, and abduction
  extracted_support: Deductive, inductive, and abductive arguments differ in the relation between premises and conclusion; abduction concerns explanatory hypotheses and induction extends beyond the premises.

### abduction-boundary
説明の単純性や美しさを認識論的根拠とみなせるか、最良説明への推論が真理に近づく保証を持つかは争われている。
- semantic review: pass（本文とSource locatorの対応を確認した）
- source: sep-abduction
  locator: modern abduction and supplement on historical Peircean abduction
  extracted_support: Abduction has a modern inference-to-the-best-explanation sense and a distinct historical Peircean sense concerning explanatory hypothesis formation.
- source: sep-argument
  locator: deduction, induction, and abduction
  extracted_support: Deductive, inductive, and abductive arguments differ in the relation between premises and conclusion; abduction concerns explanatory hypotheses and induction extends beyond the premises.

## Sources
1. Abduction（https://plato.stanford.edu/archives/spr2024/entries/abduction/）
   - locator: modern abduction and supplement on historical Peircean abduction
   - supports: Abduction has a modern inference-to-the-best-explanation sense and a distinct historical Peircean sense concerning explanatory hypothesis formation.
2. Argument and Argumentation（https://plato.stanford.edu/entries/argument/）
   - locator: deduction, induction, and abduction
   - supports: Deductive, inductive, and abductive arguments differ in the relation between premises and conclusion; abduction concerns explanatory hypotheses and induction extends beyond the premises.
3. Confirmation and Induction（https://iep.utm.edu/confirmation-and-induction/）
   - locator: confirmation and problem of induction
   - supports: Inductive reasoning extends beyond observed cases and therefore does not make its conclusion necessary; the problem of induction concerns how such extension is justified.

## Audit notes
- previous maturity: stub
- maturity: deepened
- duplicate risk: 要確認（近接Concept: induction, model, explanation）
- unresolved claims: none
- source-grounding concerns: none identified

## Human review
- [x] 定義は正確
- [x] Concept固有の説明になっている
- [x] 直感説明は誤解を生まない
- [x] 具体例は妥当
- [x] 近接Conceptとの境界は自然
- [x] 過度な一般化がない
- [x] Sourceが主要主張を支持している
- [x] 独立Conceptとして残す価値がある

Decision: PASS

Comment:

---

# 10. falsifiability — 反証可能性

## Definition
反証可能性は、理論や主張が、ある可能な観察と両立しないため経験的に失敗しうる性質である。Popperはこれを科学と非科学を区別する一つの基準として論じた。反証可能性は反証が実際に起きたことではなく、失敗条件が論理的・経験的に定まっていることを指す。

反証可能性は、主張が何らかの観察結果によって失敗しうるよう、禁止する結果や条件が定まっている性質である。研究設計へ実装する場合には、予測、測定規則、失敗条件を事前に具体化する。しかし反証可能性は真理・有用性・実際の反証を単独で保証しない。[1]

## Conceptual structure
反証可能性は、主張、禁止される観察、テスト条件、測定規則、補助仮定、実際の不一致を区別する。[1]

## Intuition
どんな結果でも説明できる主張は、危険を引き受ける予測をしていない。具体的な条件で失敗する予測を出せば、理論はより厳しいテストにさらされる。[1]

## Why it matters for research
理論がどの観測を禁じ、失敗時にどの主張を再検討するかを明示できる。

## Multiple examples
事前に数値範囲や観測パターンを予測する物理理論は、再現可能な範囲外の測定で問題を露呈しうる。逆に、結果に合わせて後から例外を追加するだけの説明は反証への露出を下げる。

『条件Xでは結果Yの範囲に入る』という予測は、範囲外の再現可能な結果で問題になる。どんな結果でも後付けの例外で説明する主張は危険を引き受けない。境界例では、異常が理論・初期条件・装置・補助仮定のどれを示すかを追加テストで分ける。[1]

## Common confusions
falsifiabilityとfalsificationは違う。反証可能でも反証されたとは限らない。一つの不一致も、測定誤差、初期条件、補助仮定を含むDuhem–Quine的なネットワークのどこが失敗したかを直ちには決めない。[1]

## Boundaries / limitations
反証可能性だけで理論の真理・有用性・科学性の全てを判定できるわけではない。


naive falsificationismは、科学者が単一の反例で理論を直ちに捨てると想定しすぎる。現代科学では、比較証拠・精度・代替理論・研究プログラムの進展と併せて評価される。[1]

## Relations to neighboring concepts
deductionは理論と補助仮定からテスト予測を導く。evidenceは予測との一致・不一致を評価する。uncertaintyは観察や補助仮定の不確実性を保持する。[1]

## Research Skill connection
現時点で直接接続するResearch Skillはありません。将来、evidence audit・hypothesis appraisal・source appraisalへ接続候補です。

## Major claims and evidence
### falsifiability-core
反証可能性は、理論や主張が、ある可能な観察と両立しないため経験的に失敗しうる性質である。Popperはこれを科学と非科学を区別する一つの基準として論じた。反証可能性は反証が実際に起きたことではなく、失敗条件が論理的・経験的に定まっていることを指す。

反証可能性は、主張が何らかの観察結果によって失敗しうるよう、禁止する結果や条件が定まっている性質である。研究設計へ実装する場合には、予測、測定規則、失敗条件を事前に具体化する。しかし反証可能性は真理・有用性・実際の反証を単独で保証しない。
- semantic review: pass（本文とSource locatorの対応を確認した）
- source: sep-popper
  locator: falsifiability and demarcation
  extracted_support: Falsifiability concerns whether a theory exposes itself to possible empirical failure and is distinct from the fact that a theory has actually been falsified.
- source: sep-pseudo-science
  locator: Popper, falsifiability, and demarcation
  extracted_support: Popper proposed falsifiability as a demarcation criterion; historical and methodological qualifications distinguish logical testability from simple rejection.

### falsifiability-practice
研究計画では、理論が禁じる観察、測定の妥当性、失敗時に再検討する仮定を記録する。Research OSで反証可能性を研究設計へ実装する場合には、予測、測定規則、失敗条件を事前に具体化する。これは反証可能性そのものの定義ではなく、運用上の規範である。反証可能性だけで理論の有用性・真理・研究価値を単独判定しない。

研究計画にrisky prediction、観察単位、測定誤差、失敗時の再検討対象を事前登録する。反証可能性を満たすだけで科学的主張を採用せず、代替理論との比較、再現性、説明力も評価する。

事前に予測や許容範囲を定めることは、Research OSで反証可能性を研究条件へ実装する規範であり、Popperの概念そのものと同一ではない。
- semantic review: pass（本文とSource locatorの対応を確認した）
- source: sep-popper
  locator: falsifiability and demarcation
  extracted_support: Falsifiability concerns whether a theory exposes itself to possible empirical failure and is distinct from the fact that a theory has actually been falsified.
- source: sep-pseudo-science
  locator: Popper, falsifiability, and demarcation
  extracted_support: Popper proposed falsifiability as a demarcation criterion; historical and methodological qualifications distinguish logical testability from simple rejection.

### falsifiability-boundary
naive falsificationismは、科学者が単一の反例で理論を直ちに捨てると想定しすぎる。現代科学では、比較証拠・精度・代替理論・研究プログラムの進展と併せて評価される。
- semantic review: pass（本文とSource locatorの対応を確認した）
- source: sep-popper
  locator: falsifiability and demarcation
  extracted_support: Falsifiability concerns whether a theory exposes itself to possible empirical failure and is distinct from the fact that a theory has actually been falsified.
- source: sep-pseudo-science
  locator: Popper, falsifiability, and demarcation
  extracted_support: Popper proposed falsifiability as a demarcation criterion; historical and methodological qualifications distinguish logical testability from simple rejection.

## Sources
1. Karl Popper（https://plato.stanford.edu/entries/popper/）
   - locator: falsifiability and demarcation
   - supports: Falsifiability concerns whether a theory exposes itself to possible empirical failure and is distinct from the fact that a theory has actually been falsified.
2. Science and Pseudo-Science（https://plato.stanford.edu/entries/pseudo-science/）
   - locator: Popper, falsifiability, and demarcation
   - supports: Popper proposed falsifiability as a demarcation criterion; historical and methodological qualifications distinguish logical testability from simple rejection.
3. Theory and Observation in Science（https://plato.stanford.edu/entries/science-theory-observation/）
   - locator: overview and observation reports
   - supports: Scientific observation is treated as shaped by instruments, concepts, experimental practice, and the distinction between observation reports and theoretical interpretation.
4. Argument and Argumentation（https://plato.stanford.edu/entries/argument/）
   - locator: deduction, induction, and abduction
   - supports: Deductive, inductive, and abductive arguments differ in the relation between premises and conclusion; abduction concerns explanatory hypotheses and induction extends beyond the premises.

## Audit notes
- previous maturity: stub
- maturity: deepened
- duplicate risk: 要確認（近接Concept: claim, model, uncertainty）
- unresolved claims: none
- source-grounding concerns: none identified

## Human review
- [x] 定義は正確
- [x] Concept固有の説明になっている
- [x] 直感説明は誤解を生まない
- [x] 具体例は妥当
- [x] 近接Conceptとの境界は自然
- [x] 過度な一般化がない
- [x] Sourceが主要主張を支持している
- [x] 独立Conceptとして残す価値がある

Decision: PASS

Comment:

---

## Batch summary

- Batch: epistemology 1–30 / Review packet A 1–10
- Total concepts processed: 10
- Initially stub: 10
- Initially shallow: 0
- Initially deepened: 0
- Deepened: 10
- Human review: PASS 10/10
- Source-grounded records: 10
- Locator records: 10
- Formal deepened promotion: completed

## Human attention required

none
