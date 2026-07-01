# Project Map

このファイルは、Codex が毎回リポジトリ全体を読み直さず、目的に応じて最初に見る場所を決めるための地図です。
詳細な仕様・履歴・実装メモは [docs/project-overview.md](project-overview.md) を参照してください。
アイデア置き場は [docs/roadmap.md](roadmap.md) です。

## 現在の大方針

1. 計算処理は、できる限り実戦に近い順序を再現する。
2. 未確認のゲーム仕様は推測で確定しない。
3. 人間が検証した値を段階的に `pokemonData.js` へ反映する。
4. UI・計算・保存・描画は、できるだけ役割を分けて小さく変更する。
5. 既存UIと既存計算結果を変える変更は、理由とリスクを確認してから行う。

## 最初に読む順番

1. 今の作業目的に合う行を「目的別入口」から探す。
2. 入口ファイルだけを読む。
3. 詳細が必要になったら `project-overview.md` を読む。
4. 計算やデータに触る場合だけ、該当テストを見る。
5. 全体検索は、対象を絞って `rg` で行う。

## 目的別入口

| 目的 | 最初に見るファイル | 必要なら見るファイル |
| --- | --- | --- |
| 現在の構造を把握する | `docs/project-map.md` | `docs/project-overview.md` |
| 今後のアイデアを確認する | `docs/roadmap.md` | `docs/project-overview.md` |
| 新しいポケモンを追加する | `..\データリサーチ\*.json`, `js/pokemonData.js` | `js/damageCalculator.js`, `tests/damageCalculator.test.js` |
| ポケモンのステータスを直す | `..\データリサーチ\*.json`, `js/pokemonData.js` | `tests/damageCalculator.test.js` |
| 技データを直す | `js/pokemonData.js` | `js/damageCalculator.js`, `tests/damageCalculator.test.js` |
| ピカチュウの研究データを見る | `..\データリサーチ\pikachu-researchData.json` | `docs/project-overview.md` |
| 通常攻撃の計算を直す | `js/damageCalculator.js` | `js/pokemonData.js`, `tests/damageCalculator.test.js` |
| 通常攻撃データ形式を増やす | `js/pokemonData.js`, `js/damageCalculator.js` | `tests/damageCalculator.test.js` |
| 急所固定を直す | `js/app.js` | `js/damageCalculator.js`, `tests/damageCalculator.test.js`, `tests/buildState.test.js` |
| 技ダメージ計算を直す | `js/damageCalculator.js` | `js/pokemonData.js`, `tests/damageCalculator.test.js` |
| `damageComponents` を使う技を増やす | `js/pokemonData.js`, `js/damageCalculator.js` | `tests/damageCalculator.test.js` |
| 追加ダメージ効果を増やす | `js/pokemonData.js`, `js/damageCalculator.js` | `tests/damageCalculator.test.js`, `js/resultRenderer.js` |
| エレキボールを確認する | `js/pokemonData.js`, `js/damageCalculator.js` | `..\データリサーチ\pikachu-researchData.json`, `tests/damageCalculator.test.js` |
| 攻撃順・コンボ機能を考える | `js/damageCalculator.js`, `js/app.js` | `js/resultRenderer.js`, `docs/project-overview.md` |
| 全ポケモンの特殊効果を横断調査する | `..\データリサーチ\mechanics-effects-survey-v3\batch-*`, `docs/special-mechanics-inventory-v3.json` | `docs/special-mechanics-matrix-v3.md`, `docs/special-mechanics-design-notes-v3.md`, 旧調査の `..\データリサーチ\mechanics-effects-survey-v2\batch-*`, `..\データリサーチ\mechanics-survey\batch-*`, 既存の `..\データリサーチ\*-researchData.json` |
| 持ち物データを直す | `js/helditemData.js` | `js/heldItemService.js` |
| 持ち物効果計算を直す | `js/heldItemService.js` | `js/damageCalculator.js`, `tests/damageCalculator.test.js` |
| 保存ビルド機能を直す | `js/build/` | `js/app.js`, `tests/build*.test.js` |
| 保存データの検証を直す | `js/build/buildState.js` | `tests/buildState.test.js` |
| 保存一覧の表示を直す | `js/build/buildRenderer.js` | `tests/buildRenderer.test.js` |
| 保存ボタンや保存イベントを直す | `js/build/buildController.js` | `tests/buildController.test.js`, `js/app.js` |
| localStorage処理を直す | `js/build/buildStorage.js` | `tests/buildStorage.test.js` |
| 結果表示を直す | `js/resultRenderer.js` | `js/app.js`, `style.css` |
| HP表示を直す | `js/resultRenderer.js` | `js/app.js`, `style.css` |
| DOM取得を追加する | `js/domElements.js` | `index.html`, `js/app.js`, `js/ui.js`, `js/uiEvents.js` |
| UI開閉イベントを直す | `js/uiEvents.js` | `js/domElements.js`, `js/app.js` |
| スマホタブを直す | `js/mobileTabs.js` | `tests/mobileTabs.test.js`, `index.html`, `style.css` |
| スマホ表示CSSを直す | `style.css` | `index.html`, `js/mobileTabs.js`, `js/resultRenderer.js` |
| セレクト候補を直す | `js/selectOptions.js` | `js/pokemonData.js`, `js/app.js` |
| app全体の接続を確認する | `js/app.js` | 必要な担当ファイルだけ |
| JS構文チェックをする | `js/*.js` | `node --check js/*.js` |
| 自動テストを確認する | `tests/*.test.js` | `package.json` |

## 主要ファイル

### ルート

- `index.html`: 既存DOMの置き場所。id/class変更は影響が大きい。
- `style.css`: PC/スマホ共通の見た目。スマホタブや折りたたみ表示もここ。
- `package.json`: テスト実行設定。
- `README.md`: 外向け説明。

### docs

- `docs/project-map.md`: 作業入口の地図。最初に読む。
- `docs/project-overview.md`: 現在の構成、主要関数、設計メモ、再開メモ。
- `docs/roadmap.md`: 思いついたアイデアの保管場所。優先順位や実装決定ではない。
- `docs/pr-description.md`: PR本文のコピー用メモがある場合に使う。

### data research

- `..\データリサーチ\README.md`: 研究データ置き場の説明。
- `..\データリサーチ\pikachu-researchData.json`: ピカチュウの検証候補、出典、確定状況、矛盾点。
- `..\データリサーチ\mechanics-survey\batch-*`: 全ポケモンの特性・通常攻撃・技・ユナイト技の特殊効果をバッチ単位で横断調査するドラフト。
- `..\データリサーチ\mechanics-effects-survey-v2\batch-*`: 全ポケモンの特性・通常攻撃・技・ユナイト技を、ソース単位ではなく効果単位で分解したv2ドラフト。直接ダメージと単純移動は `baseAction` に分ける。
- `..\データリサーチ\mechanics-effects-survey-v3\batch-*`: v2で漏れていた派生技、上位技、Plus効果、強化通常攻撃、Unite Buffを含め、調査対象ソース一覧を作ってから効果単位で分解したv3ドラフト。
- `docs/special-mechanics-inventory.json`: 特殊効果の横断一覧。攻撃順依存、時間管理、相手ごとの状態管理などを機械処理しやすい形で確認する。
- `docs/special-mechanics-matrix.md`: 特殊効果の横断表。人間がざっと比較するためのMarkdown一覧。
- `docs/special-mechanics-design-notes.md`: 横断調査から見える共通設計案と未確認リスクのメモ。
- `docs/special-mechanics-inventory-v2.json`: v2特殊効果の横断一覧。特殊効果0件のソースも残し、効果ごとに `battleState` 必要理由を確認する。
- `docs/special-mechanics-matrix-v2.md`: v2特殊効果の横断表。効果単位で人間レビューしやすくしたMarkdown一覧。
- `docs/special-mechanics-design-notes-v2.md`: v2調査から見える共通設計案と未確認リスクのメモ。
- `docs/special-mechanics-inventory-v3.json`: v3特殊効果の横断一覧。全技ソース、Plus効果、強化通常攻撃、Unite Buff、v2との差分、未取得技チェック結果を含む。
- `docs/special-mechanics-matrix-v3.md`: v3特殊効果の横断表。ポケモンごとのソース数と効果一覧をMarkdownで確認する。
- `docs/special-mechanics-design-notes-v3.md`: v3調査から見えるデータ列挙・Plus効果・強化通常攻撃分離の設計メモ。

### js

- `js/app.js`: 画面全体の接続役。DOMイベント、状態取得、計算呼び出し、描画呼び出しをつなぐ。
- `js/appSelectors.js`: app内で使う選択・判定系の補助。
- `js/damageCalculator.js`: ダメージ計算の中心。DOMを直接参照しない方針。
- `js/domElements.js`: DOM取得の集約場所。
- `js/helditemData.js`: 持ち物データ。
- `js/heldItemService.js`: 持ち物補正の計算・集計。
- `js/mobileTabs.js`: スマホ下部タブの表示切り替え。
- `js/pokemonData.js`: ポケモン、ステータス、技、通常攻撃、計算用データ。
- `js/resultRenderer.js`: 計算結果の画面表示。
- `js/selectOptions.js`: セレクトボックス候補の生成・更新。
- `js/ui.js`: UI表示補助。
- `js/uiEvents.js`: 状態更新を伴わないUI開閉イベント。

### js/build

- `js/build/buildController.js`: 保存機能のイベント接続。
- `js/build/buildRenderer.js`: 保存一覧・保存内容表示。
- `js/build/buildState.js`: 保存するビルド状態の検証・補正。
- `js/build/buildStorage.js`: localStorageへの保存・取得・削除。

### tests

- `tests/damageCalculator.test.js`: ダメージ計算、通常攻撃、追加ダメージ、HP引き継ぎ。
- `tests/buildState.test.js`: 保存データの検証・補正。
- `tests/buildStorage.test.js`: localStorage保存処理。
- `tests/buildRenderer.test.js`: 保存一覧の表示。
- `tests/buildController.test.js`: 保存UIイベント。
- `tests/mobileTabs.test.js`: スマホタブ切り替え。

## 計算データを見るときの注意

- `pokemonData.js` には旧形式と新形式が混在している。
- 旧形式は `formula` / `formulaPlus` を使う。
- 新形式は `damageComponents` / `plusDamageComponents` / `additionalDamageEffects` を使う。
- ピカチュウの通常攻撃は `normalAttack` の数値データ参照へ移行済み。
- エレキボールは相手の減少HPを参照する追加効果を持つ。
- フルボルトストームは同一対象4ヒット条件での検証値。複数対象時の対象選択・分散条件は未確認。
- 未確認値は `unknown` や `candidate` のまま扱い、確定値としてアプリへ入れない。

## 最小確認範囲

- 計算式を変える: `js/pokemonData.js`, `js/damageCalculator.js`, `tests/damageCalculator.test.js`
- 表示だけ変える: `js/resultRenderer.js`, `style.css`, 必要なら `index.html`
- DOM取得を増やす: `index.html`, `js/domElements.js`, 呼び出し元1つ
- 保存機能を変える: `js/build/` と対応する `tests/build*.test.js`
- スマホタブを変える: `js/mobileTabs.js`, `style.css`, `tests/mobileTabs.test.js`
- ドキュメントだけ変える: `docs/project-map.md`, `docs/project-overview.md`, `docs/roadmap.md`

## テストの目安

- 計算変更後: `npm test -- tests/damageCalculator.test.js`
- 保存機能変更後: `npm test -- tests/buildState.test.js tests/buildStorage.test.js tests/buildRenderer.test.js tests/buildController.test.js`
- スマホタブ変更後: `npm test -- tests/mobileTabs.test.js`
- JS構文だけ確認: `node --check js/*.js`

## 触る前に確認すること

- `app.js` は接続役なので、便利だからといって計算ロジックを増やしすぎない。
- `damageCalculator.js` はDOMやUI入力欄を直接参照しない。
- `resultRenderer.js` は表示担当。計算式を持たせない。
- `pokemonData.js` の数値は、出典や人間の検証状態を確認してから変える。
- `index.html` のid/class変更は、DOM取得・CSS・テストへ影響しやすい。
- 保存データ形式を変える場合は、古いlocalStorageデータの扱いを決める。
- 攻撃順機能は将来予定。現時点の技使用回数とは責務を混ぜすぎない。

## 更新ルール

- 構成、主要関数、保存形式、計算順、データ形式を変えたら `project-overview.md` を更新する。
- 新しい入口ファイルやテストを追加したら、この `project-map.md` も更新する。
- 思いつき段階のアイデアは `roadmap.md` に置き、実装済み仕様と混ぜない。
