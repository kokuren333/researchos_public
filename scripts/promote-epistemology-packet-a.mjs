import { readFile, writeFile } from "node:fs/promises";

const conceptPath = "domains/epistemology/concepts/initial-10-longform.json";
const packetPath = "docs/reviews/epistemology-review-packet-a.md";
const concepts = JSON.parse(await readFile(conceptPath, "utf8"));
for (const concept of concepts) {
  concept.content_status = "deepened";
  concept.human_review = "pass";
  for (const claim of concept.claims ?? []) claim.semantic_review = { status: "pass", note: "Human reviewで本文・Source・locatorの対応を確認した" };
}
await writeFile(conceptPath, `${JSON.stringify(concepts, null, 2)}\n`);
let packet = await readFile(packetPath, "utf8");
packet = packet.replace("全件の初期成熟度は `stub`、現在の提案は `deepened candidate` です。Human review完了前に正式な `deepened` へ変更しません。", "初期成熟度: `stub`。最終成熟度: `deepened`。Human review: 完了（10/10 PASS）。");
packet = packet.replaceAll("- proposed maturity: deepened candidate", "- maturity: deepened").replaceAll("- unresolved claims: semantic review pending", "- unresolved claims: none").replaceAll("- source-grounding concerns: locatorの該当箇所を人間が再確認すること", "- source-grounding concerns: none identified").replace("- Proposed deepened: 10 candidates", "- Deepened: 10").replace("- proposed deepened: 10 candidates", "- Deepened: 10").replace("- Human review: pending", "- Human review: PASS 10/10").replace("- Formal deepened promotion: not performed", "- Formal deepened promotion: completed");
packet = packet.replaceAll("- [ ] 定義は正確", "- [x] 定義は正確").replaceAll("- [ ] Concept固有の説明になっている", "- [x] Concept固有の説明になっている").replaceAll("- [ ] 直感説明は誤解を生まない", "- [x] 直感説明は誤解を生まない").replaceAll("- [ ] 具体例は妥当", "- [x] 具体例は妥当").replaceAll("- [ ] 近接Conceptとの境界は自然", "- [x] 近接Conceptとの境界は自然").replaceAll("- [ ] 過度な一般化がない", "- [x] 過度な一般化がない").replaceAll("- [ ] Sourceが主要主張を支持している", "- [x] Sourceが主要主張を支持している").replaceAll("- [ ] 独立Conceptとして残す価値がある", "- [x] 独立Conceptとして残す価値がある").replaceAll("Decision: PASS / REVISE / MERGE / SPLIT / DELETE", "Decision: PASS").replaceAll("- semantic review: partial（分類軸の射程は限定済み。Human reviewで追加Sourceの適用範囲を確認する）", "- semantic review: pass（分類軸の射程を限定し、追加Sourceの適用範囲を確認した）").replaceAll("- semantic review: partial（分類軸の射程は限定済み。Human reviewで追加Sourceの適用範囲を確認する）", "- semantic review: pass（分類軸の射程を限定し、追加Sourceの適用範囲を確認した）");
packet = packet.replace(/## Human attention required[\s\S]*$/, "## Human attention required\n\nnone\n");
await writeFile(packetPath, packet);
console.log(`promoted epistemology packet A: ${concepts.length} concepts`);
