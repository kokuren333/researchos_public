import { readFile } from "node:fs/promises";

const packet = await readFile("docs/reviews/epistemology-review-packet-a.md", "utf8");
const sections = packet.split("\n---\n").slice(1).filter((section) => /^# \d+\./m.test(section));
const errors = [];
for (const section of sections) {
  const id = section.match(/^# \d+\. ([^ ]+)/m)?.[1] ?? "unknown";
  const sourcesBlock = section.split("## Sources")[1]?.split("## Audit notes")[0] ?? "";
  const sourceCount = (sourcesBlock.match(/^\d+\. /gm) ?? []).length;
  const body = section.split("## Sources")[0];
  const citations = [...body.matchAll(/\[(\d+)\]/g)].map((match) => Number(match[1]));
  if (!citations.length) errors.push(`${id}: no inline citations`);
  for (const number of citations) if (number < 1 || number > sourceCount) errors.push(`${id}: citation [${number}] has no local source`);
}
if (sections.length !== 10) errors.push(`expected 10 concept sections, got ${sections.length}`);
if (errors.length) throw new Error(errors.join("\n"));
console.log(`epistemology citations passed: ${sections.length} concepts`);
