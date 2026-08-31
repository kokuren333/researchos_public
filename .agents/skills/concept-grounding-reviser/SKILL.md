---
name: concept-grounding-reviser
description: Repair a Concept whose semantic grounding audit returns OVERSTATED or UNSUPPORTED, then rerun grounding checks with bounded iteration.
---

# Concept grounding reviser

Use this skill after structural and semantic grounding audits. It owns the meaning-preserving repair; scripts remain responsible for validation and reporting.

## Loop

1. Run the structural grounding audit and the semantic grounding audit.
2. If all results are `SUPPORTED`, stop and report `PASS`.
3. For each `OVERSTATED` or `UNSUPPORTED` result, reread the cited source at its locator and inspect the extracted support.
4. Decide in this order: repair an incomplete locator or extraction; add a directly relevant source only when the claim is necessary; weaken or remove a claim that is unnecessary or unsupported.
5. Update the Evidence Packet, Claim mapping, or Concept prose as appropriate, then rerun both audits.

Stop after three iterations, or after the same issue appears twice without improvement. Report `HUMAN_REVIEW_REQUIRED` in either case. A new structural failure takes priority over semantic revision.

## Non-negotiable rules

- Never invent extracted support, locators, claims, or mappings to obtain PASS.
- Do not add citations merely to hide an unsupported assertion.
- Distinguish a source-backed factual claim from an explicitly labelled teaching example or transfer exercise.
- Keep the Concept `DRAFT` until human review, even when every automated gate passes.

For `measurement.validity`, pay special attention to measurement-error generalisations, downstream causal claims, and claims specific to PHQ-9. Prefer a direct source for necessary claims; otherwise narrow the prose to the evidence actually read.
