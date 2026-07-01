# AI Workflow

このファイルは、Codex や ChatGPT にこのリポジトリを読ませるときの作業ルールです。
最初から全ファイルを読ませず、目的に応じて必要なファイルだけ確認するための入口として使います。

## 最初に読む順番

1. `README.md`
2. `docs/project-map.md`
3. `docs/current-status.md`
4. 必要になった場合だけ `docs/project-overview.md`
5. アイデア確認が目的なら `docs/roadmap.md`
6. Git管理ルートや外側フォルダの扱いを確認する場合は `docs/repository-layout-plan.md`
7. 外側ルート用 `.gitignore` の方針を確認する場合は `docs/root-gitignore-plan.md`

`docs/project-overview.md` は詳しい履歴と構造メモです。長いため、通常は `project-map` と `current-status` を読んでから、必要な章だけ参照してください。

## 作業前の基本ルール

- 最初からリポジトリ全体を再帰的に読まない。
- 目的別の入口は `docs/project-map.md` で確認する。
- 実装前に、変更箇所、理由、影響範囲、リスクを簡潔に整理する。
- 変更は小さく進める。
- UI変更、計算変更、保存形式変更を無関係に混ぜない。
- 大きな設計変更、削除、ファイル移動、保存形式変更の前は確認する。
- 既存UI、既存計算結果、保存データへの影響を必ず確認する。
- 構成や主要関数を変更した場合は、関連ドキュメントも更新する。

## データの扱い

このプロジェクトでは、調査データとアプリ実装データを分けて扱います。

- `js/pokemonData.js`
  - アプリが実際に参照するデータ。
  - 原則として、確認済みまたは採用判断済みの値だけを入れる。

- `../データリサーチ/`
  - 調査、候補、実測、矛盾、不明点を残す場所。
  - `candidate` や `unresolved` を確定値として扱わない。

- `../人間確認用/`
  - ゲーム内検証メモや、人間が確認した実測値を記録する場所。

現時点では Git 管理ルートが `ポケモンユナイト/` のため、GitHub からは外側の `データリサーチ/` や `人間確認用/` が見えない場合があります。GitHub 上だけでレビューする場合は、この点に注意してください。
Git管理ルートを外側へ広げる案は `docs/repository-layout-plan.md` にまとめています。
動画解析ツール関連は今回のGitHubリポジトリには含めない方針です。動画、切り抜き画像、仮想環境、`tools/damage-video-review/` は原則としてGit管理対象から外します。
`tools/` は、軽量な補助スクリプトや説明ファイルだけをGit管理候補にします。動画解析ツールや生成物を含む重いフォルダは含めません。

## 信頼状態の目安

調査データやメモでは、値の状態をできるだけ明示します。

- `confirmed`: 人間確認済み、または公式の具体値で確認済み。
- `measured`: ゲーム内で実測済み。
- `candidate`: 出典がある採用候補。
- `measuredCandidate`: 実測とは整合するが、まだ全体仕様として確定していない。
- `unverified`: 未検証。
- `hypothesis`: 仮説。
- `conflict`: ソース間、または実測と候補式の間に矛盾あり。
- `unresolved`: 原因未確定。
- `needsRecheck`: 再検証が必要。

未検証の値を、確定値のように `pokemonData.js` へ入れないでください。

## 計算処理を触るとき

主に確認するファイル:

- `js/damageCalculator.js`
- `js/pokemonData.js`
- `js/resultRenderer.js`
- `tests/damageCalculator.test.js`
- 関連する調査JSON

注意点:

- 計算関数から DOM を直接参照しない。
- `pokemonData.js` のステータス確認は、行番号ではなく `id` で対象ポケモンを特定する。
- 通常攻撃、技、追加ダメージ、HP減少、シールド、倍率補正は、実戦の処理順に近づける方針。
- 未確認の丸め順や処理順は、仮説として記録し、確定扱いしない。
- 既存計算結果が変わる場合は、なぜ変わるのかを必ず説明する。

ステータス確認は専用コマンドを使います。

```bash
npm run stats -- Pikachu 13
npm run stats -- Cinderace 15
npm run stats -- Greninja 15
```

## UIを触るとき

主に確認するファイル:

- `index.html`
- `style.css`
- `js/domElements.js`
- `js/app.js`
- `js/ui.js`
- `js/uiEvents.js`
- `js/mobileTabs.js`

注意点:

- 既存の `id` / `class` を不用意に削除・改名しない。
- PC、タブレット、スマホの表示を分けて確認する。
- スマホ表示では横はみ出しを特に確認する。
- 表示だけの変更と計算ロジック変更を混ぜない。
- DOM取得を追加する場合は、原則 `js/domElements.js` に集約する。

## 保存機能を触るとき

主に確認するファイル:

- `js/build/buildState.js`
- `js/build/buildStorage.js`
- `js/build/buildRenderer.js`
- `js/build/buildController.js`
- `js/app.js`
- `tests/build*.test.js`

注意点:

- 保存形式には `version` を持たせる。
- 古い保存データの扱いを決めずに保存形式を壊さない。
- 急所固定や通常攻撃データの再抽選に注意する。
- 防御側を保存対象にするかどうかは、目的を確認してから判断する。

## 調査データを触るとき

主に確認する場所:

- `../データリサーチ/*.json`
- `../データリサーチ/human-reviews/`
- `docs/special-mechanics-*.md`
- `docs/special-mechanics-*.json`

注意点:

- 推測で unknown を埋めない。
- 各値に出典、検証状態、人間確認の有無を残す。
- ソース間で食い違う場合は、片方を勝手に採用せず conflict として残す。
- アプリ反映は、調査ファイルの整理とは別作業として扱う。

## 推奨テスト

変更内容に応じて、必要なものだけ実行します。

```bash
npm test
node --check js/*.js
npm run stats -- Pikachu 13
```

計算処理を変えた場合は、最低限 `tests/damageCalculator.test.js` を確認してください。
保存機能を変えた場合は `tests/build*.test.js` を確認してください。
スマホタブを変えた場合は `tests/mobileTabs.test.js` を確認してください。

## レビュー時に見る観点

- 変更範囲は依頼内容に収まっているか。
- 計算結果が変わる変更か、表示だけの変更か。
- 未確認データを確定扱いしていないか。
- `pokemonData.js` と調査JSONの役割が混ざっていないか。
- PC、タブレット、スマホのいずれかで表示が崩れないか。
- 保存データ、急所固定、通常攻撃データの再生成に影響がないか。

## 完了報告の形

作業後は、短くても以下を報告します。

- 変更したファイル
- 変更理由
- 確認したこと
- 影響範囲
- 残っているリスク
- 次に改善するならどこか
