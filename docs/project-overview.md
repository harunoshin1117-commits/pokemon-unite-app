# Pokemon Unite App Project Overview

## 概要

このリポジトリは、ポケモンユナイトのダメージ計算を行う静的Webアプリです。フレームワークやビルドツールは使わず、`index.html`、`style.css`、複数のJavaScriptファイルだけで構成されています。

現在の主な機能は以下です。

- 攻撃側ポケモン選択
- 防御側ポケモン選択
- レベル選択
- 技選択
- 通常攻撃、技、ユナイト技のヒット数選択
- 急所ON/OFF
- 持ち物選択
- 防御・特防を考慮した最終ダメージ計算
- 合計ダメージ表示
- 通常攻撃の1ヒットごとの詳細表示
- スマホ向けの1カラム表示
- スマホ向けの結果内訳折りたたみ
- スマホ向けのステータス折りたたみ
- スマホ向けの技エリア2列コンパクト表示

---

## 1. フォルダ構成

```text
ポケモンユナイト/
├─ .git/
├─ docs/
│  └─ project-overview.md
├─ images/
│  ├─ Cinderace-image.png
│  ├─ Greninja-image.png
│  ├─ muscle-band.png
│  ├─ pikachu-image.png
│  ├─ scope-lens.png
│  └─ wise-glasses.png
├─ js/
│  ├─ app.js
│  ├─ helditemData.js
│  ├─ pokemonData.js
│  └─ ui.js
├─ index.html
├─ README.md
└─ style.css
```

`.git/` はGit管理用フォルダです。アプリ本体は `index.html`、`style.css`、`js/`、`images/` で構成されています。

---

## 2. 各ファイルの役割

### index.html

画面構造を定義するファイルです。主な画面要素は以下です。

- 攻撃側ポケモン選択エリア
- 持ち物選択エリア
- 攻撃側ステータス折りたたみボタン
- 攻撃側ステータス表示
- 覚える技エリア
- 選んだ技エリア
- 攻撃ボタン
- 防御側ポケモン選択エリア
- 相手ステータス折りたたみボタン
- 通常攻撃詳細ポップアップ
- 計算結果エリア
- 計算結果ヘッダー右上の詳細表示ボタン
- 結果内訳折りたたみボタン
- 持ち物一覧モーダル

現在のHTMLでは、スマホUI用に以下の要素が追加されています。

- `player-stats-toggle`: 攻撃側ステータス開閉ボタン
- `enemy-stats-toggle`: 相手ステータス開閉ボタン
- `damage-result-header`: 計算結果の見出しと詳細表示ボタンを横並びにするヘッダー
- `result-breakdown-card`: 通常攻撃、技1、技2、ユナイト技の内訳カード
- `total-damage-card`: 合計ダメージカード
- `result-breakdown-toggle`: 結果内訳の開閉ボタン

JavaScriptは以下の順番で読み込まれます。

```html
<script src="./js/pokemonData.js"></script>
<script src="./js/helditemData.js"></script>
<script src="./js/ui.js"></script>
<script src="./js/app.js"></script>
```

この順番に依存しています。`ui.js` と `app.js` は、先に読み込まれる `pokemonsList` と `heldItemsList` を前提に動作します。

### style.css

アプリ全体の見た目を担当します。

主な役割は以下です。

- PC向け基本レイアウト
- 攻撃側カード、防御側カード、計算結果カードの見た目
- 持ち物選択欄と持ち物モーダル
- 技一覧と選択済み技欄の見た目
- HPバー
- 通常攻撃詳細ポップアップ
- スマホ向け1カラムレイアウト
- スマホ向け結果表示の合計優先レイアウト
- スマホ向け結果内訳折りたたみ
- スマホ向けステータス折りたたみ
- スマホ向け技エリア2列コンパクト表示
- 計算結果ヘッダー右上の詳細表示ボタン配置

現在は、既存PC表示を大きく崩さないように、スマホ対応の多くを `@media (max-width: 768px)` の追加上書きで実装しています。

### README.md

アプリ概要、公開URL、主な機能、使い方、今後追加したい機能が書かれています。

### docs/project-overview.md

このファイルです。リポジトリの構成、データの流れ、重要な関数、改善点、将来構成案をまとめています。

### images/

画像素材を置くフォルダです。

- `pikachu-image.png`: ピカチュウ画像
- `Greninja-image.png`: ゲッコウガ画像
- `Cinderace-image.png`: エースバーン画像
- `scope-lens.png`: ピントレンズ画像
- `muscle-band.png`: 力のハチマキ画像
- `wise-glasses.png`: 物知り眼鏡画像

### js/pokemonData.js

ポケモンごとのマスターデータを定義します。

`pokemonsList` に現在登録されているポケモンは以下です。

- ピカチュウ
- ゲッコウガ
- エースバーン

各ポケモンデータは主に以下を持ちます。

- `id`
- `name`
- `Image`
- `color`
- `skill`
- `stats`

`skill` はレベルごとの技データを持ちます。技名、分類、ダメージ式、派生技、アップグレード技などを表現しています。

`stats` はレベル1から15までのステータスです。

### js/helditemData.js

持ち物データを定義します。

`heldItemsList` に現在登録されている持ち物は以下です。

- ピントレンズ
- 力のハチマキ
- 物知り眼鏡

各持ち物データは主に以下を持ちます。

- `id`
- `name`
- `status`
- `statusEffect`
- `effect`
- `image`
- `explanation`

`status` はステータス加算、`statusEffect` は倍率補正、`effect` はダメージ計算時の追加効果を表します。

### js/ui.js

画面更新用の関数を定義します。

主な関数は以下です。

- `updatePlayerUI()`
  - 攻撃側の技リスト、ステータス、画像、選択済み技の表示を更新します。
  - レベルに応じて習得技、派生技、アップグレード技を表示します。

- `updateEnemyUI()`
  - 防御側ポケモンのステータス表示を更新します。

`ui.js` は `app.js` 側のグローバル変数や関数に依存しています。

### js/app.js

アプリの中心ロジックです。DOM取得、状態管理、イベント登録、ダメージ計算、持ち物効果、表示更新をまとめて担当しています。

主な責務は以下です。

- DOM要素の取得
- 現在選択中の攻撃側・防御側ポケモン管理
- 選択済み技の管理
- 持ち物選択状態の管理
- レベル選択肢、ポケモン選択肢、ヒット数選択肢の生成
- 技クリックイベント
- 持ち物選択イベント
- 攻撃ボタンイベント
- 計算結果表示
- 結果内訳折りたたみ
- ステータス折りたたみ
- 通常攻撃詳細表示
- 攻撃後の計算結果への自動スクロール
- 通常攻撃、技、合計ダメージの計算
- ES Modules化に向けた機能別見出し整理（DOM、状態、イベント、計算、表示、ポップアップ、再描画、ヘルパー）

---

## 3. データの流れ

### 初期表示

1. `pokemonData.js` が `pokemonsList` を定義する。
2. `helditemData.js` が `heldItemsList` を定義する。
3. `ui.js` が `updatePlayerUI()`、`updateEnemyUI()` を定義する。
4. `app.js` がDOM要素を取得する。
5. `currentPokemon` と `enemyPokemon` に初期ポケモンを設定する。
6. `createLevelOptions()` でレベル選択肢を作る。
7. `createPokemonOptions()` でポケモン選択肢を作る。
8. ヒット数選択肢を作る。
9. 通常攻撃以外の技ヒット数は初期値 `1Hits` にする。
10. `updateNormalAttack()` で通常攻撃威力を初期計算する。
11. `updatePlayerUI()` と `updateEnemyUI()` で初期描画する。
12. 計算結果エリアは初期状態では非表示。

### 攻撃側ポケモン変更

1. `pokemon-select` の変更イベントが発火する。
2. `currentPokemon` を `pokemonsList` から再取得する。
3. 選択済み技、ダメージ表示、HPバー、合計ダメージをリセットする。
4. 計算結果エリアを非表示に戻す。
5. 結果内訳の開閉状態を閉じる。
6. 攻撃側画像を更新する。
7. 攻撃側ステータスと技リストを更新する。
8. 通常攻撃威力を再計算する。

### レベル変更

1. 攻撃側レベル変更時は `updatePlayerUI()` を実行する。
2. 防御側レベル変更時は `updateEnemyUI()` を実行する。
3. 通常攻撃威力を再計算する。
4. 選択済み技がある場合は `updateDamageByHitCount()` で威力を更新する。
5. すでに攻撃済みの場合は結果も再計算する。
6. レベル変更だけでは画面上部への自動スクロールはしない。

### 技選択

1. 技リストの技をクリックする。
2. 技名から `+` を取り除く。
3. `findMoveByName()` で現在のポケモンの技データを探す。
4. 技セットに応じて `selectedSkillOne`、`selectedSkillTwo`、`selectedSkillThird` に保存する。
5. `showDamage()` で威力を表示する。
6. `showSkillResult()` で選んだ技欄へ反映する。
7. すでに攻撃済みなら再計算する。
8. 技選択だけでは画面上部への自動スクロールはしない。

### 持ち物選択

1. 持ち物枠をクリックすると、持ち物モーダルを表示する。
2. 持ち物を選ぶと `toggleHeldItem()` が `currentHeldItems` を更新する。
3. `showHeldItem()` で持ち物枠を更新する。
4. モーダルを閉じる。
5. `updatePlayerUI()` でステータスを再表示する。
6. すでに攻撃済みなら再計算する。
7. 持ち物変更だけでは画面上部への自動スクロールはしない。

### 攻撃実行

1. 攻撃ボタンを押す。
2. `damageResult.style.display = "flex"` にして計算結果エリアを表示する。
3. `resultPopup.style.display = "block"` にして詳細表示ボタンを表示する。
4. `hasAttacked = true` にする。
5. `attackNormalAttack()` を実行する。
6. `damageResult.scrollIntoView()` で計算結果エリアを画面上部へ移動する。
7. 通常攻撃、技1、技2、ユナイト技、合計ダメージを表示する。

現在、自動スクロールは攻撃ボタン押下時だけ発生します。技選択、ヒット数変更、急所ON/OFF、持ち物変更では発生しません。攻撃後にユナイト技を選択・解除した場合も、技1・技2と同じように再計算され、結果表示とHPバーが更新されます。 攻撃後の再計算判定は `rerenderAfterAttack()` にまとめています。

### 計算結果表示

PCでは `damage-result` を常時表示します。スマホでは攻撃前は `damage-result` が非表示です。

攻撃後は、PC/スマホともJSが数値とHPバーを更新します。スマホではこのタイミングで `damage-result` も表示されます。

- 計算結果ヘッダー
  - 左: `計算結果`
  - 右: `詳細表示` ボタン
- 合計ダメージカード
- スマホでは初期状態で内訳カードを非表示
- `内訳を見る` ボタンを押すと通常攻撃、技1、技2、ユナイト技のカードを表示
- もう一度押すと `内訳を閉じる`

### 詳細表示

1. 計算結果右上の `詳細表示` ボタンを押す。
2. `updatePopup()` が実行される。
3. 通常攻撃の最終ダメージデータを再計算する。
4. `showHitDamagesPopup()` が1ヒットごとの詳細を表示する。
5. `detail-popup-overlay` が表示され、背景がぼかされる。
6. `閉じる` ボタンで非表示に戻る。

詳細表示では以下が分かります。

- 何Hit目か
- ダメージ
- 通常攻撃か強化通常か
- 急所命中したか

### スマホ表示

スマホ幅ではCSSにより以下の表示になります。

- 全体を1カラム化
- 計算結果を攻撃後に最上部へ表示
- 計算結果は合計ダメージを優先表示
- 内訳は折りたたみ
- 攻撃側ステータスは折りたたみ
- 相手ステータスは折りたたみ
- 覚える技は2列グリッド
- 選んだ技は2列グリッド
- 持ち物枠は3列でカード内に収める

---

## 4. 重要な関数

### 初期化系

- `createLevelOptions(selectElement)`
  - レベル1から15までの選択肢を生成します。

- `createPokemonOptions(selectElement)`
  - `pokemonsList` からポケモン選択肢を生成します。

### UI更新系

- `updatePlayerUI()`
  - 攻撃側の技、ステータス、画像、選択済み技表示を更新します。

- `updateEnemyUI()`
  - 防御側のステータス表示を更新します。

- `showSelectPokemonImage()`
  - 現在の攻撃側ポケモン画像を表示します。

- `updateHpBar(currentHp, maxHp, hpBarElement)`
  - 残りHP割合に応じてHPバーの幅と色を更新します。

### 技ダメージ計算

- `calculateDamage(selectedMove, attackerLevel, attackerStats)`
  - 通常技の基礎威力を計算します。

- `calculateDamagePlus(selectedMove, attackerLevel, attackerStats)`
  - アップグレード後の技威力を計算します。
  - 旧名 `calculateDamagePuls` から修正済みです。

- `isPlusMove(move, level)`
  - 渡されたレベルでアップグレード技として扱うか判定します。
  - 2026-06-03に `levelSelect.value` の直接参照をやめ、DOM依存を減らしました。

- `getRawDamage(selectedMove)`
  - 通常式とアップグレード式を切り替えて、技の基礎威力を返します。

- `getTotalDamage(selectedMove, hitCount)`
  - 技の基礎威力にヒット数を掛けます。

- `computeFinalDamage(selectedMove, hitCount = 1)`
  - 相手の防御または特防を考慮して、技の最終ダメージを返します。

### 通常攻撃計算

- `calculateNormalAttackDamage()`
  - ポケモン別に通常攻撃と強化通常攻撃を計算します。
  - 各ヒットごとに `damage`、`critical`、`boosted` を持つデータを生成します。

- `computeNormalAttackFinalDamage(normalAttackData)`
  - 通常攻撃の各ヒットに防御または特防を適用して最終ダメージに変換します。

- `showNormalAttackDamage(normalAttackData)`
  - 通常攻撃の基礎威力合計を表示します。

- `showNormalAttackFinalDamage(finalDamageData)`
  - 通常攻撃の最終ダメージ、残りHP、HPバーを表示します。

### 攻撃後の再描画

- `rerenderAfterAttack()`
  - `hasAttacked` が `true` の場合だけ `attackNormalAttack()` を呼びます。
  - 技1、技2、ユナイト技、持ち物、ヒット数変更後の再計算入口を統一します。
### 結果表示

- `attackNormalAttack()`
  - 攻撃時の中心処理です。
  - 通常攻撃、技1、技2、ユナイト技、合計ダメージをまとめて更新します。

- `showDamage(selectedMove, targetElement, hitCount)`
  - 選択中の技威力を表示します。

- `showFinalDamage(selectedMove, damageElement, hpElement, hpBarElement, hitCount)`
  - 技の最終ダメージ、残りHP、HPバーを更新します。

- `computeFinalDamageAll(finalDamageData)`
  - 通常攻撃、技1、技2、ユナイト技の合計ダメージを計算します。

- `showHitDamagesPopup(hitDamages)`
  - 通常攻撃の1ヒットごとの詳細を描画します。

- `showSingleHitDamagesPopup(hitDamage, index)`
  - 1ヒット分の詳細行を作ります。

### 折りたたみ・表示制御

- `resultBreakdownToggle.addEventListener("click", ...)`
  - 計算結果の内訳カードを開閉します。

- `playerStatsToggle.addEventListener("click", ...)`
  - 攻撃側ステータスを開閉します。

- `enemyStatsToggle.addEventListener("click", ...)`
  - 相手ステータスを開閉します。

- `resultPopup.addEventListener("click", ...)`
  - 通常攻撃詳細ポップアップを表示します。

- `closeDetailPopup.addEventListener("click", ...)`
  - 通常攻撃詳細ポップアップを閉じます。

### 持ち物

- `toggleHeldItem(itemId)`
  - 持ち物の選択・解除を切り替えます。

- `showHeldItem(itemId, selectedItem)`
  - 持ち物枠の表示を更新します。

- `applyHeldItemStatus(status)`
  - 持ち物によるステータス加算を適用します。

- `applyHeldItemStatusEffect(status)`
  - 持ち物によるステータス倍率補正を適用します。

- `applyHeldItemEffect(damageData)`
  - 持ち物によるダメージ補正や追加ダメージを適用します。

### ヘルパー

- `findMoveByName(skillName)`
  - 現在のポケモンの技一覧から技名に一致する技データを探します。

- `isCategory(selectedMove)`
  - 技が物理か特殊かを判定します。

- `getCurrentStatus()`
  - 現在レベルのステータスに持ち物補正を適用して返します。

- `resetDamageDisplay(...)`
  - 選択済み技やダメージ表示をリセットします。

---

## 5. 改善点

### app.js の責務が大きい

2026-06-03に、将来の分割準備として `js/app.js` のコメント見出しを `project-overview.md` の分類に寄せました。技選択イベント周辺のインデントも整理済みです。現時点ではファイル分割とES Modules化は未実施です。

`app.js` に以下が集中しています。

- DOM取得
- 状態管理
- イベント登録
- 計算ロジック
- 持ち物効果
- 結果表示
- スマホUI用の開閉処理

今後機能を増やすなら、ファイルを分割した方が安全です。

### グローバル変数依存

`pokemonsList`、`heldItemsList`、`currentPokemon`、`selectedSkillOne` などがグローバルに共有されています。ファイル読み込み順にも依存しているため、将来的にはES Modules化して `import/export` に移行するとよいです。

### 計算ロジックとDOM参照が結合している

`computeFinalDamage()` や `getCurrentStatus()` などは、内部でDOMの値を直接参照しています。テストしやすくするなら、計算関数は引数だけで計算できる純粋関数に近づけるのが望ましいです。


### 計算系切り出し候補

2026-06-03時点では、実際のファイル分割はまだ行わず、`js/app.js` 内の計算系関数を切り出し候補として分類しています。

#### すぐ切り出しやすい候補

以下はDOM参照が少なく、引数中心で動かしやすいため、最初の切り出し候補です。

- `calculateDamage(selectedMove, attackerLevel, attackerStats)`
  - 技の通常威力を計算します。
  - `selectedMove.formula` と引数のステータスだけで計算できるため、`damageCalculator.js` に移しやすいです。

- `calculateDamagePlus(selectedMove, attackerLevel, attackerStats)`
  - アップグレード後の技威力を計算します。
  - `calculateDamage()` と同じ構造なので、同じモジュールへまとめやすいです。

- `isCategory(selectedMove)`
  - 物理技かどうかを判定します。
  - DOMに依存していないため、計算補助関数として移しやすいです。

#### 引数化してから切り出す候補

以下は計算処理ですが、現在はDOMやグローバル状態を直接参照しています。先に必要な値を引数で受け取る形へ変えると、安全に切り出せます。

- `isPlusMove(move, level)`
  - 2026-06-03に `levelSelect.value` の直接参照をやめ、呼び出し側から `level` を受け取る形へ変更済みです。
  - DOM依存が減ったため、計算補助関数として切り出しやすくなりました。

- `getRawDamage(selectedMove)`
  - 現在は `levelSelect.value` と `getCurrentStatus()` を内部で参照しています。
  - `getRawDamage(selectedMove, level, status)` にすると、技威力計算として分離できます。

- `getTotalDamage(selectedMove, hitCount)`
  - 現在は `getRawDamage()` 経由でDOM・状態に依存しています。
  - `getTotalDamage(rawDamage, hitCount)` のようにすると、単純な倍率計算として分離できます。

- `computeFinalDamage(selectedMove, hitCount)`
  - 現在は相手レベル、相手ステータス、選択技、ヒット数を内部から取得しています。
  - `computeFinalDamage(rawDamage, selectedMove, enemyStats)` または `computeFinalDamage(rawDamage, category, enemyStats)` にすると切り出しやすいです。

- `calculateNormalAttackDamage()`
  - 現在は `currentPokemon`、`levelSelect`、`hitCountSelects`、`criticalCheck`、`getCurrentStatus()`、`Math.random()` に依存しています。
  - `calculateNormalAttackDamage({ pokemonId, level, hitCount, status, criticalEnabled, random })` のように引数化すると、通常攻撃計算を分離できます。

- `computeNormalAttackFinalDamage(normalAttackData)`
  - 現在は `currentPokemon`、`enemyLevelSelect`、`enemyPokemon` に依存しています。
  - `computeNormalAttackFinalDamage(normalAttackData, pokemonId, enemyStats)` にすると分離できます。

- `applyHeldItemStatus(status)` / `applyHeldItemStatusEffect(status)`
  - 現在は `heldItemsList` と `currentHeldItems` を内部で参照しています。
  - `applyHeldItemStatus(status, activeHeldItems)` のようにすると `heldItemService.js` へ移しやすいです。

- `applyHeldItemEffect(damageData)`
  - 現在は `heldItemsList`、`currentHeldItems`、`enemyLevelSelect`、`enemyPokemon` に依存しています。
  - `applyHeldItemEffect(damageData, activeHeldItems, enemyHp)` にすると、通常攻撃への持ち物効果として分離できます。

- `getCurrentStatus()`
  - 現在は `levelSelect`、`currentPokemon`、持ち物補正関数に依存しています。
  - `getCurrentStatus(baseStats, activeHeldItems)` に近づけると、ステータス計算として分離できます。

#### まだ切り出さない方がよい候補

以下は計算だけでなく表示更新や画面状態変更も担当しているため、今すぐ計算モジュールへ移すと壊れやすいです。

- `computeFinalDamageAll(finalDamageData)`
  - 合計ダメージ計算だけでなく、`takenAll`、`remainingHpAll`、`hpFillAll` を直接更新しています。
  - 先に「合計値を返す関数」と「表示する関数」に分ける必要があります。

- `attackNormalAttack()`
  - 通常攻撃、持ち物効果、技1、技2、ユナイト技、合計表示をまとめて呼び出す実行役です。
  - 分割後も `app.js` 側に残す調整役として扱うのが安全です。

- `showDamage()` / `showFinalDamage()` / `showNormalAttackDamage()` / `showNormalAttackFinalDamage()`
  - DOM表示を担当しているため、計算モジュールではなく表示系モジュールの候補です。

- `updateNormalAttack()` / `rerenderAfterAttack()` / `updateDamageByHitCount()`
  - 状態更新と表示再描画の入口なので、計算系としては切り出さず、分割後の呼び出し側に残すのが安全です。

#### 推奨する次の実装順

1. `calculateDamage()` と `calculateDamagePlus()` を同じ形に整理する。
2. `isPlusMove(move, level)` は対応済み。次は `getRawDamage(selectedMove, level, status)` へ進む。
3. `getRawDamage(selectedMove, level, status)` へ引数化する。
4. `getTotalDamage(rawDamage, hitCount)` のように単純化する。
5. 通常攻撃計算は最後に回し、先に引数設計を固める。

この順番なら、表示UIをほぼ触らずに計算系の分離準備を進められます。


### 次回再開時にやること

2026-06-03時点では、利用制限を考慮してここで作業を止めています。次に再開する場合は、コード分割そのものではなく、まず `getRawDamage()` のDOM依存を減らす小さな変更から進めるのが安全です。

次回の最優先作業は以下です。

1. `getRawDamage(selectedMove)` を `getRawDamage(selectedMove, level, status)` に変更する。
2. `getRawDamage()` 内の `Number(levelSelect.value)` と `getCurrentStatus()` の直接参照をなくす。
3. `getTotalDamage()` や `computeFinalDamage()` など、`getRawDamage()` を呼ぶ側で `level` と `status` を渡す。
4. UI表示や計算式は変えず、DOM依存を外側へ寄せるだけにする。
5. 変更後は `node --check js/app.js` と、技1・技2・ユナイト技の威力表示だけ確認する。

この変更の目的は、`isPlusMove(move, level)` と同じ考え方で、技ダメージ計算を引数中心の形へ近づけることです。ここまでできると、次の段階で `calculateDamage()`、`calculateDamagePlus()`、`isPlusMove()`、`getRawDamage()` を `damageCalculator.js` へ切り出す準備が整います。

### 通常攻撃ロジックがポケモンごとに重複している

`calculateNormalAttackDamage()` はポケモンごとに似た処理が重複しています。通常攻撃の倍率や強化通常の条件を `pokemonData.js` に持たせると、ポケモン追加時の修正量を減らせます。

### 命名のタイポ・表記揺れ

2026-06-03に対応済みです。HTML/CSS/JS/データ定義で参照されていた以下の名前を、意味を変えずに表記だけ統一しました。

- `calculateDamagePuls` → `calculateDamagePlus`
- `updataPopup` → `updatePopup`
- `all-reset-bottun` → `all-reset-button`
- `damageTakenPuls` → `damageTakenPlus`
- `remainingHpPuls` → `remainingHpPlus`
- `damage-taken-puls` → `damage-taken-plus`
- `remaining-hp-puls` → `remaining-hp-plus`
- `bassDamage` → `baseDamage`
- `resurt-p-p` → `result-p-p`

UI表示や計算式の内容は変えず、参照名だけを一括でそろえています。

### HTMLのid重複

2026-06-03に対応済みです。`index.html` のHPバー5箇所から重複していた `id="hp-ber"` を削除し、共通スタイルは既存の `class="hp-ber"` に統一しました。あわせて `js/app.js` の未使用だった `hpBer` のDOM取得も削除しました。

### CSSが追記型になっている

スマホ対応を段階的に追加したため、`style.css` の後半に上書きCSSが増えています。機能としては動きますが、長期的には以下のように整理すると見通しが良くなります。

2026-06-03に一部対応済みです。未使用だった `.select-pokemons`、`.critical-boosted-color`、`.normal-color` と、古い落下アニメーション用の `.hit-damage` / `@keyframes hitDamageFall` と、前側に重複していた `.boosted-color` / `.critical-color` を削除しました。PCで最終ダメージリザルトを常時表示する方針があるため、`.damage-result` の表示制御は今回は整理対象から外しています。あわせてスマホ持ち物CSSを整理済みです。前側の横スクロール設計を削除し、後ろ側の3列グリッド設計へ `.held-items-select` / `.held-items` / `.held-item` / `.slot-image` のスマホ指定を集約しました。 続けて、スマホ基本レイアウトとスマホ持ち物グリッドのCSSブロックが分かるようにコメント見出しを整理しました。 さらに、結果表示・内訳折りたたみ・詳細表示ボタンのCSSを `mobile result display` 周辺にまとめ、結果表示まわりを追いやすくしました。PCでは計算結果エリアを常時表示し、スマホでは攻撃前だけ非表示になるように表示方針を分けました。 2026-06-03に、通常攻撃詳細は `.detail-popup` 内の `#hitDamage-result` へ表示する設計になっていることを確認し、旧ポップアップ用の `#hitDamage-result { position: fixed; top/right/z-index... }` は削除済みです。あわせて `.detail-popup #hitDamage-result` から `position: static` と `z-index: auto` の打ち消し指定も不要になったため削除済みです。さらに、JSで生成される `.hit-damage` の共通スタイルは残し、`.detail-popup .hit-damage` は詳細ポップアップ内だけに必要な差分指定へ整理済みです。スマホ結果表示では、順番依存だった `.detail-damage-result > div:nth-child(5)` の指定を削除し、既存の `.total-damage-card` 指定へ寄せました。`order: -2` は `.total-damage-card` 側に残しているため、合計ダメージを先頭寄りに見せる表示は維持しています。

- base layout
- components
- modals
- results
- mobile overrides

### `:has()` の利用

スマホのステータス開閉表示でCSSの `:has()` を使っています。近年の主要ブラウザでは動作しますが、古いブラウザ対応を強く意識するなら、JSでボタン側にも `is-open` クラスを付ける方式にするとより安全です。

### デバッグログ

2026-06-03に対応済みです。`js/app.js` に残っていた開発中の `console.log()` は削除し、公開版のコンソール出力を整理しました。

### リセット処理

オールリセットは `location.reload()` です。状態初期化関数を作り、ページ再読み込みなしで初期化できるようにすると拡張しやすくなります。

### 持ち物スロット管理

現在の `currentHeldItems` は選択中持ち物IDの配列です。スロットごとの対応、同じ持ち物の重複可否、解除動作を明確にすると、将来の保存機能やUI改善がしやすくなります。

### レスポンシブUIの次の改善

現在は大きなスクロール量を減らすため、以下を実装済みです。

- 結果表示を攻撃後だけ表示
- 合計ダメージ優先
- 内訳折りたたみ
- ステータス折りたたみ
- 技エリア2列化

次に改善するなら、持ち物選択をさらにコンパクト化し、必要なときだけ開く形にするとよいです。

---

## 6. 将来ビルド保存機能を追加する場合の推奨構成

ここでいう「ビルド保存機能」は、選択したポケモン、レベル、技、持ち物、相手設定、ヒット数、急所設定などを保存し、後から呼び出せる機能として想定します。

### 最初はlocalStorage保存がおすすめ

このアプリは静的サイトなので、最初の保存機能は `localStorage` が自然です。サーバーやログインなしで実装できます。

保存対象の例は以下です。

```js
{
  id: "build-001",
  version: 1,
  name: "ゲッコウガ火力確認",
  attackerPokemonId: "Greninja",
  attackerLevel: 15,
  enemyPokemonId: "Cinderace",
  enemyLevel: 15,
  selectedSkillOneName: "あわ",
  selectedSkillTwoName: "みがわり",
  selectedUniteName: "極大水手裏剣",
  hitCounts: {
    normalAttack: 3,
    skillOne: 1,
    skillTwo: 1,
    unite: 1
  },
  heldItemIds: ["scopeLens", "muscleBand"],
  criticalEnabled: true,
  createdAt: "2026-06-02T00:00:00.000Z",
  updatedAt: "2026-06-02T00:00:00.000Z"
}
```

### 推奨フォルダ構成

保存機能を入れるなら、段階的に以下のような構成へ移行するのがおすすめです。

```text
ポケモンユナイト/
├─ index.html
├─ style.css
├─ images/
├─ js/
│  ├─ app.js
│  ├─ data/
│  │  ├─ pokemonData.js
│  │  └─ helditemData.js
│  ├─ state/
│  │  └─ battleState.js
│  ├─ services/
│  │  ├─ damageCalculator.js
│  │  ├─ heldItemService.js
│  │  └─ buildStorage.js
│  ├─ ui/
│  │  ├─ renderPlayer.js
│  │  ├─ renderEnemy.js
│  │  ├─ renderResults.js
│  │  └─ renderBuilds.js
│  └─ events/
│     └─ bindEvents.js
└─ docs/
   └─ project-overview.md
```

### 各モジュールの役割案

#### js/state/battleState.js

現在の選択状態を1つのオブジェクトとして管理します。

- 攻撃側ポケモン
- 攻撃側レベル
- 防御側ポケモン
- 防御側レベル
- 選択中の技
- ヒット数
- 持ち物
- 急所ON/OFF
- 結果内訳の開閉状態
- ステータスの開閉状態

#### js/services/buildStorage.js

ビルドの保存、取得、更新、削除を担当します。

想定関数:

- `getSavedBuilds()`
- `saveBuild(build)`
- `updateBuild(buildId, build)`
- `deleteBuild(buildId)`
- `loadBuild(buildId)`

最初は `localStorage` を使い、将来的にFirebaseやSupabaseなどへ差し替えられるようにします。

#### js/services/damageCalculator.js

DOMに依存しない純粋な計算関数を置きます。

- 通常攻撃計算
- 技ダメージ計算
- 防御・特防補正
- 持ち物込みの最終ダメージ
- 合計ダメージ

#### js/services/heldItemService.js

持ち物によるステータス加算、倍率補正、ダメージ追加効果を担当します。

#### js/ui/renderResults.js

計算結果、合計ダメージ、内訳カード、詳細表示ボタン、詳細ポップアップを描画します。

#### js/ui/renderBuilds.js

保存済みビルド一覧、保存ボタン、読み込みボタン、削除ボタンなどを描画します。

### UI追加案

既存UIを大きく崩さないなら、保存機能は以下のように追加するのが自然です。

- 攻撃側エリア上部に `ビルド保存` ボタン
- `保存済みビルド` セレクト
- `読み込み`、`上書き保存`、`削除` ボタン
- 保存名入力はモーダルまたはポップアップ

スマホでは、保存済みビルド一覧も折りたたみまたはモーダル化するとスクロール量を抑えられます。

### 保存機能追加時の注意点

- 技名だけで保存すると、同名技やデータ変更に弱いため、将来的には技IDを持たせるのが望ましいです。
- 持ち物はスロット単位で保存した方が復元しやすいです。
- 保存データには `version` を入れておくと、データ形式変更時に移行しやすくなります。
- localStorageはブラウザ単位の保存なので、端末間共有が必要ならサーバー保存が必要です。
- 保存したビルドを読み込むときは、画面表示だけでなく `currentPokemon`、`enemyPokemon`、`selectedSkillOne` などの内部状態も必ず復元する必要があります。

### 推奨実装順

1. 現在の選択状態を `getCurrentBuildState()` で1つのオブジェクトにまとめる。
2. `applyBuildState(build)` で画面と内部状態を復元できるようにする。
3. `localStorage` 用の `buildStorage.js` を作る。
4. 保存、読み込み、削除の最小UIを追加する。
5. 計算ロジックをDOM非依存の関数へ少しずつ分離する。
6. 必要に応じてES Modules化する。

---

## 現在のスマホUI変更まとめ

最近追加されたスマホ向け改善は以下です。

1. スマホ1カラム化
2. 計算結果を攻撃後のみ表示
3. 攻撃後に計算結果へ自動スクロール
4. 計算結果の合計ダメージ優先表示
5. 結果内訳の折りたたみ
6. 詳細表示ボタンを計算結果右上へ移動
7. 通常攻撃詳細ポップアップ
8. 攻撃側ステータス折りたたみ
9. 相手ステータス折りたたみ
10. 覚える技の2列コンパクト表示
11. 選んだ技の2列コンパクト表示
12. 持ち物3枠をスマホ幅に収める調整

現時点の次の改善候補は、持ち物選択エリアの折りたたみまたはモーダル中心化です。

