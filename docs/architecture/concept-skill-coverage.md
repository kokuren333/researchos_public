# Concept ↔ Skill coverage

この監査値はbuild時にSkill metadataから自動生成される`dist/generated/concept-skill-coverage.json`を正とする。

- ConceptはDomain内の保存場所と切り離したglobal ID（`<domain>.<slug>`）で集計する。
- Skillの`requires.concepts`がSkill→Conceptのsource of truthであり、逆引きはbuildで生成する。
- unresolved Conceptはbuild failure、Skill ID重複・重複edgeも将来のvalidatorでfailureにする。
- Skillを使わないConceptはorphanとしてWARN対象だが、Field探索のため存在を許容する。
