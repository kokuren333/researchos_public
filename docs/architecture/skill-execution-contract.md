# Skill Execution Contract v0.1

この文書は、Concept と Skill の関係を、型付き入力から構造化結果へ接続する共通契約として固定する。v0.1 は3種類のSkill（因果構造の分類、測定妥当性の評価、統計モデル設計）で検証済みである。

## Common contract

EXECUTABLE Skill は、少なくとも次を定義する。

- typed input contract
- typed output contract
- required Concept references
- explicit procedure
- checks and failure behavior
- missing-information policy
- unknown handling
- one valid execution fixture

入力不足や根拠不足は推測で補完せず、`unknown`、`not-assessable`、`missing_information` のいずれかで明示する。出力では、報告された情報・仮定・推論・判断・未知を混同しない。

推奨フィールドは `assumptions`、`limitations`、`decision_status` だが、全Skillへの強制はしない。`decision_status` は選択・評価型Skillで特に有用であり、理解系・統合系SkillではSkill固有仕様とする。

## Skill-specific contract

Skillごとに次を定義してよい。

- input fields and optionality
- output fields and nested structure
- domain-specific enums
- domain-specific checks
- reasoning procedure

共通契約は、Skill固有の出力形を一つに押し込めない。`identify-confounding` は変数分類、`assess-measurement-validity` は多軸評価、`choose-statistical-model` は候補比較と条件付き判断を使うが、いずれも同じ実行境界（入力・処理・構造化結果・不確実性）を共有する。

## Maturity gate

- `SKELETON`: ID、目的、入出力、Conceptのみ。
- `BASIC`: 手順、checks、output contractまで定義。
- `EXECUTABLE`: 共通契約、失敗時処理、unknown処理、valid fixture、実行検証がある。
- `AUDITED`: EXECUTABLEに加えて、clear / ambiguous / insufficientまたはfailure fixtureと期待値検証がある。AUDITEDを宣言したSkillは専用validationでこれらの存在と通過を要求する。

## v0.1 freeze boundary

v0.1では新しい実行エンジン、LLM provider、Workflow、外部文献検索は含めない。次のWorkflow Contractは、Skill間の出力から入力への明示的なmappingを持つ別仕様として設計する。
