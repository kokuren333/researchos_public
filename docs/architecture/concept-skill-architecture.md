# Concept ↔ Skill architecture

Conceptは再利用可能なdeclarative knowledge primitiveであり、何が意味を持ち、何を説明でき、どこで破綻するかを保持する。Skillはprocedural reasoning primitiveであり、何をどの順に調べ、何を結論してはならず、どんなartifactを出すかを保持する。

ConceptはSkill一覧を手書きしない。Skill metadataの`requires.concepts`をsource of truthとして、build時にmany-to-many graphを生成する。既存Domain内のConcept保存場所は変えず、参照時のglobal IDを`<domain>.<concept-slug>`とする。

Skillは目的・入力・手順・必須checks・output contractを必須とする。Evidence、Inference、Judgment、Unknownを混同せず、AI生成文をEvidenceとして扱わない。

現在は`critically-appraise-paper`のvertical sliceのみ実装している。Workflow layerは将来、Skillを合成するが、Skill内にWorkflow固有状態を埋め込まない。
