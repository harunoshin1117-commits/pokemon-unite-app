# Pokemon Unite App Project Overview

## 1. フォルダ構成

```text
ポケモンユナイト/
├─ .git/
├─ images/
│  ├─ Cinderace-image.png
│  ├─ Greninja-image.png
│  ├─ pikachu-image.png
│  ├─ muscle-band.png
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

このリポジトリは、ビルドツールやフレームワークを使わない静的Webアプリです。`index.html` を起点に、データ定義ファイル、UI更新ファイル、メインロジックファイルを順番に読み込んで動作します。

## 2. 各ファイルの役割

### index.html

画面構造を定義するファイルです。主な領域は以下です。

- 攻撃側ポケモン選択
- 持ち物選択
- 攻撃側ステータス表示
- 覚える技表示
- 選んだ技とヒット数選択
- 攻撃ボタン、詳細表示ボタン
- 防御側ポケモン選択
- 防御側ステータス表示
- 通常攻撃詳細ポップアップ
- 計算結果表示
- 持ち物選択モーダル

JavaScriptは以下の順番で読み込まれます。

```html
pokemonData.js
helditemData.js
ui.js
app.js
```

この順番に依存しており、`ui.js` と `app.js` は `pokemonData.js`、`helditemData.js` のグローバル変数を前提にしています。

### style.css

アプリ全体の見た目を担当します。主に以下を定義しています。

- 全体レイアウト
- 攻撃側・防御側・結果エリアのカード表示
- 技リスト、選択済み技、ヒット数選択
- 持ち物選択欄と持ち物モーダル
- HPバー
- 詳細表示ポップアップ
- 急所表示やヒット詳細表示

現状はPC横幅を前提にしたレイアウトで、レスポンシブ対応は限定的です。

### README.md

アプリの概要、公開URL、主な機能、使用技術、使い方、今後追加したい機能が書かれています。

### images/

画面表示用の画像素材を置くフォルダです。

- `pikachu-image.png`: ピカチュウ画像
- `Greninja-image.png`: ゲッコウガ画像
- `Cinderace-image.png`: エースバーン画像
- `scope-lens.png`: ピントレンズ画像
- `muscle-band.png`: 力のハチマキ画像
- `wise-glasses.png`: 物知り眼鏡画像

### js/pokemonData.js

ポケモンごとのマスターデータを定義します。`pokemonsList` という配列に、現在は以下のポケモンが登録されています。

- ピカチュウ
- ゲッコウガ
- エースバーン

各ポケモンには主に以下の情報があります。

- `id`
- `name`
- `Image`
- `color`
- `skill`
- `stats`

`skill` はレベルごとの技データを持ち、技名、分類、ダメージ式、アップグレード情報などを含みます。`stats` はレベル1から15までのステータスを持ちます。

### js/helditemData.js

持ち物データを定義します。`heldItemsList` という配列に、現在は以下の持ち物が登録されています。

- ピントレンズ
- 力のハチマキ
- 物知り眼鏡

各持ち物には主に以下の情報があります。

- `id`
- `name`
- `status`
- `statusEffect`
- `effect`
- `image`
- `explanation`

ステータスを直接加算するもの、倍率補正をかけるもの、通常攻撃ダメージに追加効果を与えるものが混在しています。

### js/ui.js

画面更新用の関数を定義します。

- `updatePlayerUI()`
  - 現在の攻撃側ポケモンとレベルに応じて、技リスト、ステータス、画像、選択済み技の表示を更新します。
  - 技の習得レベル、派生技、アップグレード技の表示もここで扱います。

- `updateEnemyUI()`
  - 防御側ポケモンとレベルに応じて、相手ステータス表示を更新します。

このファイルは `app.js` のグローバル変数や関数に依存しています。

### js/app.js

アプリの中心ロジックです。DOM要素の取得、状態管理、イベント登録、ダメージ計算、持ち物効果、結果表示をまとめて担当しています。

主な責務は以下です。

- セレクトボックスの初期化
- 現在の攻撃側・防御側ポケモン状態の保持
- 選択中の技、持ち物、通常攻撃データの保持
- ポケモン選択、レベル変更、技選択、持ち物選択、攻撃、詳細表示のイベント処理
- 通常攻撃ダメージ計算
- 技ダメージ計算
- 防御・特防を考慮した最終ダメージ計算
- HPバー更新
- 持ち物補正の適用

## 3. データの流れ

### 初期表示

1. `pokemonData.js` が `pokemonsList` を定義する。
2. `helditemData.js` が `heldItemsList` を定義する。
3. `ui.js` がUI更新関数を定義する。
4. `app.js` がDOM要素を取得し、状態変数を初期化する。
5. `createLevelOptions()` でレベル選択肢を作る。
6. `createPokemonOptions()` でポケモン選択肢を作る。
7. `updateNormalAttack()` で通常攻撃の初期威力を表示する。
8. `updatePlayerUI()` と `updateEnemyUI()` で画面を初期描画する。

### 攻撃側ポケモン変更

1. `pokemon-select` の変更イベントが発火する。
2. `currentPokemon` が `pokemonsList` から再設定される。
3. 選択済み技、ダメージ表示、HPバー、合計ダメージがリセットされる。
4. `showSelectPokemonImage()` で画像を更新する。
5. `updatePlayerUI()` でステータスと技リストを更新する。
6. `updateNormalAttack()` で通常攻撃威力を再計算する。

### レベル変更

1. `level` または `enemy-level` の変更イベントが発火する。
2. 攻撃側なら `updatePlayerUI()`、防御側なら `updateEnemyUI()` を呼ぶ。
3. `updateNormalAttack()` で通常攻撃の威力を更新する。
4. `updateDamageByHitCount()` で選択済み技の威力表示を更新する。

### 技選択

1. 技リストの `li` をクリックする。
2. 表示テキストから `+` を取り除き、`findMoveByName()` で技データを探す。
3. `selectedSkillOne`、`selectedSkillTwo`、`selectedSkillThird` のいずれかに保存する。
4. `showDamage()` でヒット数込みの威力を表示する。
5. `showSkillResult()` で選択済み技欄に反映する。
6. すでに攻撃済みなら `attackNormalAttack()` を再実行して結果を更新する。

### 持ち物選択

1. 持ち物枠をクリックすると、持ち物モーダルを表示する。
2. 持ち物を選ぶと、`toggleHeldItem()` で `currentHeldItems` を更新する。
3. `showHeldItem()` で持ち物枠の表示を更新する。
4. `updatePlayerUI()` で持ち物補正後のステータスを再表示する。
5. 攻撃済みなら `attackNormalAttack()` を再実行する。

### 攻撃実行

1. 攻撃ボタンを押す。
2. `hasAttacked` が `true` になる。
3. `attackNormalAttack()` が実行される。
4. `computeNormalAttackFinalDamage()` で通常攻撃の最終ダメージを計算する。
5. `applyHeldItemEffect()` で持ち物の追加ダメージや急所ダメージ補正を適用する。
6. `showNormalAttackFinalDamage()` で通常攻撃結果を表示する。
7. `showFinalDamage()` で技1、技2、ユナイト技の結果を表示する。
8. `computeFinalDamageAll()` で合計ダメージと残りHPを表示する。

### 詳細表示

1. 詳細表示ボタンを押す。
2. `updataPopup()` が実行される。
3. 通常攻撃の最終ダメージデータを再計算する。
4. `showHitDamagesPopup()` が1ヒットごとの情報を描画する。
5. `detail-popup-overlay` が表示され、背景がぼかされる。
6. 閉じるボタンで `detail-popup-overlay` を非表示にする。

## 4. 重要な関数

### 初期化・選択肢生成

- `createLevelOptions(selectElement)`
  - レベル1から15までの選択肢を作成します。

- `createPokemonOptions(selectElement)`
  - `pokemonsList` からポケモン選択肢を作成します。

### UI更新

- `updatePlayerUI()`
  - 攻撃側の技、ステータス、画像、選択済み技表示を更新します。

- `updateEnemyUI()`
  - 防御側のステータス表示を更新します。

- `showSelectPokemonImage()`
  - 現在の攻撃側ポケモン画像を表示します。

- `updateHpBar(currentHp, maxHp, hpBarElement)`
  - 残りHP割合に応じてHPバー幅と色を更新します。

### 技ダメージ計算

- `calculateDamage(selectedMove, attackerLevel, attackerStats)`
  - 通常技の基礎威力を計算します。

- `calculateDamagePuls(selectedMove, attackerLevel, attackerStats)`
  - アップグレード後の技威力を計算します。
  - 関数名は `Plus` のタイポと思われます。

- `isPlusMove(move)`
  - 現在レベルでアップグレード技として扱うか判定します。

- `getRawDamage(selectedMove)`
  - 通常式とアップグレード式を切り替えて、技の基礎威力を返します。

- `getTotalDamage(selectedMove, hitCount)`
  - 技の基礎威力にヒット数を掛けます。

- `computeFinalDamage(selectedMove, hitCount = 1)`
  - 相手の防御または特防を考慮して、技の最終ダメージを返します。

### 通常攻撃計算

- `calculateNormalAttackDamage()`
  - ポケモン別に通常攻撃と強化通常攻撃の威力を計算します。
  - 各ヒットごとに `damage`、`critical`、`boosted` を持つデータを作ります。

- `computeNormalAttackFinalDamage(normalAttackData)`
  - 通常攻撃の各ヒットに相手の防御または特防を適用し、最終ダメージに変換します。

- `showNormalAttackDamage(normalAttackData)`
  - 通常攻撃の基礎威力合計を表示します。

- `showNormalAttackFinalDamage(finalDamageData)`
  - 通常攻撃の最終ダメージと残りHPを表示します。

### 結果表示

- `showDamage(selectedMove, targetElement, hitCount)`
  - 選択中の技威力を表示します。

- `showFinalDamage(selectedMove, damageElement, hpElement, hpBarElement, hitCount)`
  - 技の最終ダメージ、残りHP、HPバーを更新します。

- `computeFinalDamageAll(finalDamageData)`
  - 通常攻撃、技1、技2、ユナイト技の合計ダメージを計算します。

- `showHitDamagesPopup(hitDamages)`
  - 通常攻撃の1ヒットごとの詳細を表示します。

- `showSingleHitDamagesPopup(hitDamage, index)`
  - 1ヒット分の詳細行を作成します。

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

## 5. 改善点

### 責務分離

`app.js` にDOM操作、状態管理、イベント登録、計算ロジック、持ち物効果が集中しています。今後機能が増えると変更範囲が広がりやすいため、以下のように分割すると保守しやすくなります。

- 状態管理
- ダメージ計算
- 持ち物効果
- DOM描画
- イベント登録
- データ定義

### グローバル変数依存

現在は `pokemonsList`、`heldItemsList`、`currentPokemon`、`selectedSkillOne` などがグローバルに共有されています。ファイル読み込み順にも依存しているため、将来的にはES Modules化して `import/export` にすると安全です。

### 計算ロジックとDOMの結合

`computeFinalDamage()` や `getCurrentStatus()` は内部でDOMの選択値を直接参照しています。純粋な計算関数に近づけるなら、レベル、ポケモン、持ち物、相手ステータスを引数で渡す形が望ましいです。

### 通常攻撃ロジックの重複

`calculateNormalAttackDamage()` はポケモンごとに似た処理が重複しています。通常攻撃データを `pokemonData.js` 側に持たせ、共通計算関数で処理できる形にすると、ポケモン追加時の負担が減ります。

### 命名の整理

以下のようなタイポや表記揺れがあります。

- `calculateDamagePuls` は `calculateDamagePlus` が自然
- `updataPopup` は `updatePopup` が自然
- `all-reset-bottun` は `all-reset-button` が自然
- `damageTakenPuls` は `damageTakenPlus` または `damageTakenTwo` が自然
- `bassDamage` は `baseDamage` が自然

既存コードへの影響があるため、直す場合は一括で慎重に行う必要があります。

### HTMLのid重複

`hp-ber` が複数箇所で同じ `id` として使われています。HTMLでは `id` はページ内で一意であるべきなので、クラス化するか個別idに分けるとよいです。

### デバッグログ

`console.log()` が多く残っています。開発中は便利ですが、公開版では表示を抑えるか、デバッグフラグ経由にするとよいです。

### リセット処理

オールリセットは `location.reload()` です。状態初期化関数を用意して、画面を再読み込みせずに初期状態へ戻す方が拡張しやすくなります。

### 持ち物のスロット制限

現在の `currentHeldItems` は配列で管理されていますが、3枠それぞれとの対応がやや曖昧です。同じ持ち物の重複制限、スロット別管理、選択解除の扱いを明確にするとよいです。

### データ検証

技データに `formula` がない場合は `null` で処理されています。将来的にポケモンや技を増やすなら、データ形式チェックを追加すると不具合を見つけやすくなります。

### READMEと画面タイトル

READMEは整っていますが、`index.html` の `<title>` は `Document` のままです。公開ページとしてはアプリ名に変更するとよいです。

### レスポンシブ対応

現在のUIはPC横幅での利用を前提にしています。スマホや狭い画面を考えるなら、攻撃側、相手側、結果表示を縦積みにするメディアクエリを追加するとよいです。

## 6. 将来ビルド保存機能を追加する場合の推奨構成

ここでいう「ビルド保存機能」は、選択したポケモン、レベル、技、持ち物、相手設定などを名前付きで保存し、後から呼び出せる機能として想定します。

### まずはlocalStorage保存がおすすめ

現状は静的サイトなので、最初の実装はサーバー不要の `localStorage` が最も自然です。

保存対象の例:

```js
{
  id: "build-001",
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

ビルド保存機能を追加するなら、以下のように段階的に分けると保守しやすいです。

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
- 急所チェック

#### js/services/buildStorage.js

ビルドの保存、取得、更新、削除を担当します。

想定関数:

- `getSavedBuilds()`
- `saveBuild(build)`
- `updateBuild(buildId, build)`
- `deleteBuild(buildId)`
- `loadBuild(buildId)`

最初は `localStorage`、将来的にはGitHub Gist、Firebase、Supabaseなどへ差し替えられるようにします。

#### js/services/damageCalculator.js

DOMに依存しない純粋な計算関数を置きます。

- 技ダメージ計算
- 通常攻撃計算
- 防御・特防計算
- 合計ダメージ計算

入力は状態オブジェクトとデータ、出力は計算結果オブジェクトにすると、テストしやすくなります。

#### js/services/heldItemService.js

持ち物によるステータス補正、倍率補正、追加ダメージを担当します。

#### js/ui/renderBuilds.js

保存済みビルド一覧、保存ボタン、読み込みボタン、削除ボタンなどの表示を担当します。

### UI追加案

既存UIを大きく崩さないなら、以下の追加が自然です。

- 攻撃側エリア上部に「ビルド保存」ボタン
- 「詳細表示」と同じようなポップアップで保存名入力
- 画面上部またはサイドに「保存済みビルド」セレクト
- 読み込み、上書き保存、削除ボタン

### 保存機能追加時の注意点

- 技名だけで保存すると、同名技やデータ変更に弱いので、将来的には技IDを持たせるのが望ましいです。
- 持ち物はスロット単位で保存する方が復元しやすいです。
- 保存データには `version` を入れておくと、データ形式変更時に移行しやすくなります。
- localStorageはブラウザ単位の保存なので、別端末共有が必要ならサーバー側保存が必要です。

### 推奨する実装順

1. 現在の選択状態を `getCurrentBuildState()` として1つのオブジェクトにまとめる。
2. その状態を `applyBuildState(build)` で画面に復元できるようにする。
3. `localStorage` に保存・読み込みする `buildStorage.js` を追加する。
4. 保存・読み込み用の簡単なUIを追加する。
5. 計算ロジックをDOM非依存の関数へ少しずつ分離する。
6. 必要ならES Modules化してファイル間依存を明確にする。

