# Claude Review Workflow

このフォルダは、Codexが作った設計案・差分・UI案をClaude無料版へ貼ってレビューしてもらうための半自動ワークフローです。

Claude無料版は実装担当ではなく、外部レビュー担当・設計相談相手として使います。Claude Web UIの自動操作はしません。

## ファイル構成

- `claude-review-context.md`: プロジェクト前提、設計方針、レビュー観点。
- `claude-review-request-template.md`: 用途別のClaude依頼テンプレート。
- `generated/claude-review-request.md`: スクリプトが生成する貼り付け用レビュー依頼文。
- `generated/claude-response.md`: Claudeの回答を保存する候補ファイル。必要に応じて手動で作成します。

## 基本の流れ

1. Codexが差分を作る。
2. `npm run review:claude-pack` を実行する。
3. `docs/ai-review/generated/claude-review-request.md` をClaude無料版に貼る。
4. UI/UXレビューの場合は、`generated/claude-review-request.md` と一緒にスクリーンショットをClaude無料版へ貼る。
5. Claudeの回答を `docs/ai-review/generated/claude-response.md` などに保存する。
6. Codexにその回答を読ませて、必要な修正案を作らせる。

## コマンド

現在の未コミット差分をレビュー用にまとめる:

```bash
npm run review:claude-pack
```

指定ブランチとの差分をまとめる:

```bash
npm run review:claude-pack -- main
```

用途を指定する:

```bash
npm run review:claude-pack -- --type design
npm run review:claude-pack -- --type pr
npm run review:claude-pack -- --type ui
```

指定ブランチと用途を両方指定する:

```bash
npm run review:claude-pack -- main --type pr
```

## 用途

### design

API設計、データ構造、責務分離、将来拡張性を相談する用途です。

Claudeには、`battleState` / `pokemonData` / `damageCalculator` の責務分離、例外処理の増え方、将来100体以上へ広げるときの破綻リスクを見てもらいます。

### pr

Codexが作った変更やPRをレビューしてもらう用途です。デフォルトはこの用途です。

Claudeには、変更がやりすぎていないか、既存方針に反していないか、責務分離が崩れていないか、テストが追認だけになっていないかを見てもらいます。

### ui

UI/UXレビュー用です。スクリーンショットは自動添付しません。ユーザーがClaude無料版へ手動で貼ります。

Claudeには、初見で何をすればいいか分かるか、情報量が多すぎないか、ボタン名・項目名・表示順が自然か、スマホで操作しやすいかを見てもらいます。

## 注意

- Claudeには実装コードを書かせません。
- 大量コードを丸ごと貼らず、変更要約・重要差分・確認観点を中心にします。
- 未確認仕様や候補値は、確定実装として扱わせないでください。
- Claudeの回答はそのまま実装指示にせず、Codexに読ませて修正方針を整理してから反映します。
