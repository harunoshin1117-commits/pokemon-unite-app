# Pokemon Unite App Project Overview

最終更新日: 2026-06-18

## 概要

このリポジトリは、ポケモンユナイトのダメージ計算を行う静的Webアプリです。フレームワークやビルドツールは使わず、`index.html`、`style.css`、複数のJavaScriptファイルだけで構成されています。

作業開始時の入口は [project-map.md](project-map.md) です。目的別に最初に読むファイルを確認し、詳細が必要な場合だけこの overview を参照します。

開発方針として、計算処理はできる限り実戦に近い状況を再現することを優先します。技の使用回数、HP減少、追加ダメージ、将来追加する持ち物・メダル・シールド・倍率補正などは、ゲーム内で起こる順序に近づける方針です。ただし、未確認の仕様は推測で確定せず、検証できた値や挙動から段階的に反映します。

現在の主な機能は以下です。

- 攻撃側ポケモン選択
- 防御側ポケモン選択
- レベル選択
- 技選択
- 通常攻撃のヒット数選択
- 技、ユナイト技の使用回数選択
- 急所ON/OFF
- 通常攻撃の急所発生パターン固定ON/OFF
- 持ち物選択
- 名前付きビルドの複数保存
- 保存済みビルドの一覧表示、内容確認、読み込み、削除
- 防御・特防を考慮した最終ダメージ計算
- 合計ダメージ表示
- 通常攻撃の1ヒットごとの詳細表示
- スマホ向けの1カラム表示
- スマホ向けの結果内訳折りたたみ
- スマホ向けのステータス折りたたみ
- スマホ向けの技エリア2列コンパクト表示
- スマホ向け下部固定タブ

---

## 1. フォルダ構成

```text
ポケモンユナイト/
├─ .git/
├─ docs/
│  ├─ project-overview.md
│  └─ roadmap.md
├─ images/
│  ├─ Cinderace-image.png
│  ├─ Greninja-image.png
│  ├─ muscle-band.png
│  ├─ pikachu-image.png
│  ├─ scope-lens.png
│  └─ wise-glasses.png
├─ js/
│  ├─ app.js
│  ├─ appSelectors.js
│  ├─ build/
│  │  ├─ buildController.js
│  │  ├─ buildRenderer.js
│  │  ├─ buildState.js
│  │  └─ buildStorage.js
│  ├─ damageCalculator.js
│  ├─ domElements.js
│  ├─ heldItemService.js
│  ├─ helditemData.js
│  ├─ mobileTabs.js
│  ├─ pokemonData.js
│  ├─ resultRenderer.js
│  ├─ selectOptions.js
│  ├─ ui.js
│  └─ uiEvents.js
├─ tests/
│  ├─ buildController.test.js
│  ├─ buildRenderer.test.js
│  ├─ buildState.test.js
│  ├─ buildStorage.test.js
│  ├─ damageCalculator.test.js
│  └─ mobileTabs.test.js
├─ index.html
├─ package.json
├─ README.md
└─ style.css
```

`.git/` はGit管理用フォルダです。アプリ本体は `index.html`、`style.css`、`js/`、`images/` で構成されています。`package.json` と `tests/` はNode標準テストの設定とテストコードです。

`docs/roadmap.md` は、思いついた機能や改善案を忘れないように保管するファイルです。記載内容は実装予定や確定仕様を意味しません。

---

## 2. 各ファイルの役割

### index.html

画面構造を定義するファイルです。主な画面要素は以下です。

- 攻撃側ポケモン選択エリア
- ビルド名入力、保存済みビルド一覧、保存・内容確認・読み込み・削除ボタン
- 保存ビルド内容確認モーダル
- 持ち物選択エリア
- 攻撃側ステータス折りたたみボタン
- 攻撃側ステータス表示
- 通常攻撃設定
- 技セット1・技セット2・ユナイト技のドロップダウン設定
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
- `mobile-bottom-tabs`: 攻撃側、受ける側、詳細、結果を切り替えるスマホ専用下部タブ
- `mobile-tab-panel`: タブごとに表示・非表示を切り替える既存エリア

JavaScriptはES Modulesとして読み込まれます。

```html
<script type="module" src="./js/app.js"></script>
```

`app.js` が入口になり、必要なデータ・計算関数・表示関数を `import` します。通常scriptの読み込み順に依存する形から、`import/export` による依存関係へ移行済みです。

現在の主な依存方向は以下です。

- `app.js`
  - `appSelectors.js`
  - `build/buildController.js`
  - `build/buildRenderer.js`
  - `build/buildState.js`
  - `build/buildStorage.js`
  - `pokemonData.js`
  - `helditemData.js`
  - `damageCalculator.js`
  - `domElements.js`
  - `heldItemService.js`
  - `mobileTabs.js`
  - `resultRenderer.js`
  - `selectOptions.js`
  - `ui.js`
  - `uiEvents.js`
- `ui.js`
  - `resultRenderer.js`
- `resultRenderer.js`
  - `damageCalculator.js`

`damageCalculator.js` と `heldItemService.js` は他ファイルを `import` しないため、循環参照は発生していません。

`build/buildStorage.js` は `build/buildState.js` の保存形式バージョンだけを参照し、`localStorage` 内の保存ビルド配列を管理します。

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
- スマホ向け下部固定タブと表示対象パネル
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

`pokemonsList` を `export` します。現在登録されているポケモンは以下です。

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

ピカチュウの `normalAttack` は、通常攻撃ロジックのデータ駆動化として計算用データ形式へ移行済みです。`cycle`、`basic`、`boosted` を持ち、通常攻撃は `attack` と `defense`、強化通常攻撃は `spAttack` と `spDefense` を参照します。`basic` / `boosted` は `referenceStat`、`ratio`、`levelScaling`、`fixedValue`、`defenseReference` を持ちます。他ポケモンの通常攻撃は旧処理を維持しています。

ピカチュウの一部技は、技計算のデータ駆動化を進めるため `damageComponents` 形式へ移行中です。現在は、エレキネット、エレキボール、かみなり、ボルテッカー、10万ボルトが対象です。`damageComponents` では `referenceStat`、`ratio`、`levelScaling`、`fixedValue`、`defenseReference`、`hitCount` を持ちます。技選択UIの値は「使用回数」として扱い、`damageComponents.hitCount` は技1回あたりの内部ヒット数として扱います。旧 `formula` / `formulaPlus` は当面残し、新形式がある技では新形式を優先します。

エレキボールは、本体ダメージとは別に `additionalDamageEffects` / `plusAdditionalDamageEffects` を持ち、相手の減少HPを参照する追加ダメージを表現します。通常版は減少HPの6%、プラス版は8%を参照します。現在の検証方針では「本体rawDamage計算 → 特防補正 → HP減少 → 減少HP参照 → 追加rawDamage計算 → 特防補正 → HP減少」の順番です。`trigger: "afterMainDamage"` は、全 `damageComponents` と全内部ヒットが終わった後に追加効果を実行する意味です。

フルボルトストームは、同一対象へ4ヒットする条件での検証値を `damageComponents` に入れています。複数対象時の対象選択・分散条件は未確認です。

### js/helditemData.js

持ち物データを定義します。

`heldItemsList` を `export` します。現在登録されている持ち物は以下です。

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

### js/appSelectors.js

現在のアプリ状態から必要な値を取り出すための補助関数を `export` します。

現在は、`findMoveByName(pokemon, skillName)`、`getPokemonStatsAtLevel(pokemon, level)`、`getEnemyStats(enemyPokemon, enemyLevel)`、`getHpFromStats(stats)`、`getUniteMove(pokemon)`、`findPokemonById(pokemonsList, pokemonId)` を切り出しています。どれもDOMを直接参照せず、呼び出し側から必要な値を受け取ります。

`getEnemyStats()` は `appSelectors.js` 側へ追加しましたが、`app.js` 側の同名ラッパー関数は残しています。`enemyLevelSelect.value` の読み取りは `app.js` 側に残し、import時に `selectEnemyStats` という別名を付けて呼び出すことで、既存の呼び出し元を変えずに移行しています。

`getHpFromStats()` は防御側HP取得、`getUniteMove()` はユナイト技取得、`findPokemonById()` は攻撃側・防御側ポケモン選択時のID検索に使います。

状態取得関数の追加移行は当面行いません。`app.js` に残る `getEnemyStats()`、`getEnemyHp()`、`getCurrentPlayerStatus()`、`getActiveHeldItemsForCurrentSelection()` は、DOM値や現在状態と既存サービスをつなぐ小さなラッパーとして維持します。新機能や状態管理変更によって重複や責務上の問題が生じた場合に、必要な範囲だけ再検討します。

### js/build/buildStorage.js

複数の保存ビルドを `localStorage` 内の1つの配列として管理します。

各保存レコードは以下を持ちます。

- `id`
- `name`
- `buildState`
- `createdAt`
- `updatedAt`

現在の公開関数は以下です。

- `getSavedBuilds()`
- `saveBuild(name, buildState)`
- `loadBuild(buildId)`
- `deleteBuild(buildId)`

保存配列が存在しない場合、JSONが壊れている場合、必須項目が不足したレコードが含まれる場合は、安全に空配列または有効なレコードだけを返します。

保存一覧で選択中のレコードは、`内容を見る` ボタンからモーダル表示できます。名前、攻撃側ポケモン、レベル、技セット1・2、ユナイト技、持ち物、通常攻撃ヒット数、技とユナイト技の使用回数、通常攻撃合計ダメージ、急所回数を日本語の `ラベル: 値` 形式で表示します。

### js/build/buildRenderer.js

保存機能のDOM描画を担当します。`localStorage` は直接参照せず、呼び出し側から保存データとDOM参照を受け取ります。

- `renderSavedBuilds(savedBuilds, context)`
  - 保存一覧のoption生成、選択状態の維持、関連ボタンの有効・無効を更新します。
- `renderBuildDetails(savedBuild, buildDetailsContent)`
  - 選択した保存レコードを、日本語の `ラベル: 値` 形式で内容確認モーダルへ描画します。

保存一覧と詳細内容の描画関数は、保存データとDOM参照を受け取るだけです。保存データの取得とイベントからの呼び出しは `buildController.js` が担当し、`app.js` は必要な依存関係を `context` として渡します。

### js/build/buildController.js

保存機能のイベント登録と処理の流れを担当します。`bindBuildEvents(context)` が保存用DOM、状態取得・復元関数、ストレージ関数、描画関数をすべて `context` から受け取ります。

- 保存名の確認と現在状態の保存
- 保存済みビルドの読み込み
- 保存内容モーダルの表示・非表示
- 保存済みビルドの削除
- 初期表示と保存・削除後の一覧再描画

`buildController.js` は `app.js`、`domElements.js`、`buildStorage.js`、`buildRenderer.js` を直接 `import` しません。依存関係を引数で明示することで、偽物のDOMと関数を使ったイベント単体テストを可能にしています。

### js/build/buildState.js

保存形式の生成と通常攻撃データの複製を担当します。

- `createBuildState(sourceState)`
  - `app.js` が集めた現在状態を、`version`付きの保存形式へ変換します。
  - 持ち物スロット、ヒット数、通常攻撃の各ヒット情報を新しいオブジェクト・配列として複製します。
- `cloneNormalAttackData(normalAttackData)`
  - 急所結果を含む通常攻撃データを複製します。
  - 各ヒットに `defenseReference` がある場合は保持します。古い保存データのように存在しない場合も読み込み可能です。
- `normalizeInteger(value, min, max, fallback)`
  - レベルやヒット数を整数へ変換し、指定範囲へ補正します。整数にできない値では既定値を返します。
- `getValidNormalAttackData(normalAttackData, expectedHitCount, criticalEnabled)`
  - 計算バージョン、合計ダメージ、急所回数、各ヒット情報を検証し、有効な場合だけ複製して返します。
  - `defenseReference` は未指定、`defense`、`spDefense` を有効値として扱います。
  - 無効な通常攻撃データは `null` とし、読み込み時に現在の計算処理で再生成します。
- `isValidBuildState(buildState)`
  - 保存形式バージョン、攻撃側、ヒット数、持ち物スロット、急所設定、計算状態などの必須構造を検証します。
  - 復元前、保存前、保存一覧取得時に共通利用します。
- `BUILD_STATE_VERSION`
  - 現在の保存形式バージョンです。
- `NORMAL_ATTACK_CALCULATION_VERSION`
  - 通常攻撃スナップショットの計算バージョンです。

`getCurrentBuildState()` は引き続き `app.js` に残し、DOMと内部状態から現在値を集めます。保存形式への変換、バージョン付与、複製は `createBuildState()` が担当します。

`applyBuildState()` は `isValidBuildState()` をリセット前に実行します。必須構造が壊れたデータでは現在状態を維持し、範囲外の数値は `normalizeInteger()` で補正します。通常攻撃データだけが無効な場合はビルド全体を拒否せず、`getValidNormalAttackData()` が `null` を返して通常攻撃を再計算します。

### js/ui.js

画面更新用の関数を `export` します。

主な関数は以下です。

- `updatePlayerUI()`
  - 攻撃側の技リスト、ステータス、画像、選択済み技の表示を更新します。
  - レベルに応じて習得技、派生技、アップグレード技を表示します。

- `updateEnemyUI()`
  - 防御側ポケモンのステータス表示を更新します。

`ui.js` は `app.js` から渡される状態を使って表示を更新します。画像表示や選択済み技表示には `resultRenderer.js` の関数を `import` しています。

技表示欄、ユナイト技欄、攻撃側・防御側ステータス欄のDOM参照も、`app.js` からcontext経由で受け取ります。`ui.js` に直接の `document.getElementById()` は残っていません。ステータス行の生成には `document.createElement()` を使います。

### js/uiEvents.js

状態更新や再計算を伴わないUI開閉イベントを登録します。

主な責務は以下です。

- 計算結果内訳の開閉とボタン文言更新
- 攻撃側ステータスの開閉
- 防御側ステータスの開閉
- 通常攻撃詳細ポップアップを閉じる処理
- 持ち物モーダルの表示・非表示

`bindUiEvents(context)` が必要なDOM参照を引数で受け取り、初期化時に1回だけイベントを登録します。技選択、持ち物選択、攻撃ボタン、詳細ポップアップを開く処理、セレクトボックスの `change` イベントは状態更新や再計算に関係するため、`app.js` に残しています。

### js/damageCalculator.js

技ダメージ、通常攻撃、最終ダメージに関係する計算補助関数を `export` します。

主な責務は以下です。

- `calculateDamage()` / `calculateDamagePlus()` による技の基礎威力計算
- `isPlusMove()` によるアップグレード技判定
- `getRawDamage()` / `getTotalDamage()` による技威力取得
- `computeFinalDamage()` による防御・特防補正後ダメージ計算
- `computeMoveDamageData()` による技使用回数ごとの本体・追加ダメージ、HP推移の計算
- `calculateNormalAttackDamage()` による通常攻撃のヒット別基礎ダメージ計算
- `computeNormalAttackFinalDamage()` による通常攻撃の防御・特防補正後ダメージ計算

DOM参照やグローバル状態参照は持たず、必要な値は引数で受け取ります。計算結果はES Modules化前と同じにする方針です。

ピカチュウの通常攻撃は、`pokemonData.js` の `normalAttack.basic` / `normalAttack.boosted` データを参照して計算します。`calculateNormalAttackDamage()` は新形式データが渡された場合だけデータ参照で計算し、ピカチュウの式を関数内に直接持ちません。新形式がないポケモンでは従来のポケモン別分岐を使います。`computeNormalAttackFinalDamage()` は各ヒットの `defenseReference` を見て、防御または特防を選びます。古い保存済み通常攻撃データに `defenseReference` がない場合は、ピカチュウの強化通常だけ `spDefense`、それ以外は `defense` として扱います。不正な `defenseReference` はエラーにしてデータ不備を検出します。

技ダメージは、`damageComponents` がある場合だけ新形式を優先して計算します。新形式では画面の選択値を使用回数、`damageComponents.hitCount` を内部ヒット数として扱います。最終ダメージは内部1ヒットごとに防御または特防補正を適用してから、内部ヒット数と使用回数を掛けて合計します。`plusDamageComponents` がある技はプラス時にそちらを使い、式が同じでヒット数だけ変わる技は `plusHitCount` を使います。新形式がない技は従来の `formula` / `formulaPlus` 計算へフォールバックします。`defenseReference` は `defense` または `spDefense` のみ有効で、不正な値はエラーにしてデータ不備を早く検出します。

`computeMoveDamageData()` はDOMやグローバル状態を参照せず、`selectedMove`、`useCount`、`attackerLevel`、`attackerStats`、`enemyState` を引数で受け取る純粋な計算関数です。`enemyState` は `{ maxHp, currentHp, defense, spDefense }` を想定し、`currentHp` が数値なら必ずその値から開始します。`currentHp` が未指定の場合だけ `maxHp` へフォールバックします。関数内では `enemyState`、`attackerStats`、`selectedMove` を直接変更せず、ローカル変数の `currentHp` だけを更新します。

戻り値は、既存表示との互換用に `rawDamage` / `finalDamage` を合計値として持ちつつ、`baseRawDamage`、`baseFinalDamage`、`additionalRawDamage`、`additionalFinalDamage`、`hpBefore`、`hpAfter`、`displayHpAfter`、`sequentialHpAfter`、`useResults` も返します。`useResults` は技の使用回数ごとの内訳です。現在のUIから呼ぶ場合は `currentHp = maxHp` として渡し、`carryHpBetweenUses: true` で使用回数ごとにHPを引き継ぎます。`hpAfter` は当面の既存表示互換として `displayHpAfter` と同じ値を返します。`displayHpAfter` は合計ダメージを開始HPから引いた表示用の残りHP、`sequentialHpAfter` は `carryHpBetweenUses: true` のときに次の攻撃へ引き継げるHPです。攻撃順を選ぶコンボ機能はまだ実装していませんが、将来は前の技の `sequentialHpAfter` を次の技の `enemyState.currentHp` として渡せる設計にしています。

### js/heldItemService.js

持ち物選択状態と持ち物効果を扱う関数を `export` します。

主な責務は以下です。

- `toggleHeldItem()` による `currentHeldItems` 更新
- `applyHeldItemStatus()` によるステータス加算
- `applyHeldItemStatusEffect()` によるステータス倍率補正
- `applyHeldItemEffect()` による通常攻撃への追加効果適用
- `getCurrentStatus()` による現在ステータス取得

`currentHeldItems` はこれまで通り `app.js` 側で持ち物ID配列として管理します。IDから持ち物オブジェクトへの変換は `getActiveHeldItems(heldItemsList, currentHeldItems)` で行います。`scopeLens` の `criticalPlusDamage`、`muscleBand` の `muscleBandDamage`、`wiseGlasses` の `statusEffect` の処理順も変更していません。

### js/domElements.js

画面上のDOM要素取得をまとめて `export` します。

主な責務は以下です。

- レベル選択、ポケモン選択、技表示、持ち物、計算結果、詳細ポップアップなどのDOM参照を取得する
- 技1、技2、ユナイト技、通常攻撃のヒット数セレクトを `hitCountSelects` としてまとめる
- `app.js` の先頭に集中していた `document.getElementById()` / `document.querySelector()` を分離する

イベント処理、状態管理、計算関数、UI表示関数は持たず、DOM参照を提供するだけのファイルです。

### js/selectOptions.js

セレクトボックスの選択肢生成関数を `export` します。

主な責務は以下です。

- `createLevelOptions()` によるレベル選択肢生成
- `createPokemonOptions()` によるポケモン選択肢生成
- `createHitCountOptions()` によるヒット数選択肢生成
- 通常攻撃以外の使用回数初期値を `1回` に設定する

`change` イベント登録や再計算処理は持たず、option生成だけを担当します。ヒット数変更時の `updateNormalAttack()` / `updateDamageByHitCount()` 呼び出しは、状態管理と再計算に近いため `app.js` 側に残しています。

### js/resultRenderer.js

計算結果、HPバー、通常攻撃詳細ポップアップなどのDOM表示関数を `export` します。

主な責務は以下です。

- `renderMoveRawDamage()` / `renderMoveFinalDamage()` による計算済み技ダメージデータの描画
- `showNormalAttackDamage()` / `showNormalAttackFinalDamage()` による通常攻撃表示
- `renderFinalDamageAll()` による合計ダメージ表示
- `updateHpBar()` によるHPバー更新
- `showSkillResult()` / `showHeldItem()` / `showSelectPokemonImage()` による選択状態表示
- `showHitDamagesPopup()` / `showSingleHitDamagesPopup()` による詳細ポップアップ表示
- `resetDamageDisplay()` による表示リセット

`showSkillResult()` のアップグレード表示判定で `damageCalculator.js` の `isPlusMove()` を `import` しています。技ダメージ計算は `app.js` 側で行い、`resultRenderer.js` は渡された計算済みデータをDOMへ描画します。UI構造、表示文言、CSSは変更していません。

技1・技2・ユナイト技は、`app.js` の `buildMoveDamageData()` で `rawDamage`、`finalDamage`、`hpAfter`、`enemyHp` を持つ計算済みデータを作り、`resultRenderer.js` の `renderMoveRawDamage()` / `renderMoveFinalDamage()` で描画します。未選択時は早期returnで `rawDamage`、`finalDamage`、`hpAfter` を `null` にし、既存の未選択表示を維持します。

`showHitDamagesPopup()` は `hitDamage-result` を直接取得しています。DOM参照の完全な集約は未完了であり、`resultRenderer.js` の計算と描画を整理する際の確認対象です。

### js/app.js

ES Modulesの入口です。データ、計算、持ち物処理、表示関数を `import` し、状態管理とイベント登録、各関数への値渡しを担当します。

主な責務は以下です。

- `domElements.js` からDOM参照を受け取る
- `appSelectors.js` を使って現在ポケモンから技データを探す
- 現在選択中の攻撃側・防御側ポケモン管理
- 選択済み技の管理
- 持ち物選択状態の管理
- `selectOptions.js` を使ったレベル選択肢、ポケモン選択肢、ヒット数選択肢の初期生成
- 技ドロップダウンの変更イベント
- 持ち物選択イベント
- 攻撃ボタンイベント
- 状態更新や再計算を伴うイベント登録
- 攻撃後の計算結果への自動スクロール
- `updateNormalAttack()` / `rerenderAfterAttack()` / `attackNormalAttack()` による再計算の入口管理
- `getCurrentBuildState()` による現在のビルド状態の取得
- `applyBuildState()` によるビルド状態の検証・復元

`updateNormalAttack()` と `attackNormalAttack()` は循環参照に近い再描画フローを持つため、挙動維持を優先して `app.js` 側に置いています。

---

## 3. データの流れ

### 初期表示

1. `pokemonData.js` が `pokemonsList` を定義する。
2. `helditemData.js` が `heldItemsList` を定義する。
3. `domElements.js` が画面上のDOM要素参照を取得して `export` する。
4. `ui.js` が `updatePlayerUI()`、`updateEnemyUI()` を定義する。
5. `currentPokemon` と `enemyPokemon` に初期ポケモンを設定する。
6. `selectOptions.js` の `createLevelOptions()` でレベル選択肢を作る。
7. `selectOptions.js` の `createPokemonOptions()` でポケモン選択肢を作る。
8. `selectOptions.js` の `createHitCountOptions()` でヒット数選択肢を作る。
9. `uiEvents.js` の `bindUiEvents()` で状態非依存のUI開閉イベントを登録する。
10. `mobileTabs.js` の `bindMobileTabs()` でスマホ下部タブを登録し、攻撃側タブを初期表示にする。
11. 通常攻撃以外の技使用回数は初期値 `1回` にする。
12. `updateNormalAttack()` で通常攻撃威力を初期計算する。
13. `updatePlayerUI()` と `updateEnemyUI()` で初期描画する。
14. PCは主要エリアをすべて表示し、スマホは選択中タブのエリアだけを表示する。

### 攻撃側ポケモン変更

1. `pokemon-select` の変更イベントが発火する。
2. 通常攻撃の急所結果固定を解除する。
3. `currentPokemon` を `pokemonsList` から再取得する。
4. 選択済み技、ダメージ表示、HPバー、合計ダメージをリセットする。
5. PCの計算結果表示を維持し、スマホでは現在選択中のタブを維持する。
6. 結果内訳の開閉状態を閉じる。
7. 攻撃側画像を更新する。
8. 攻撃側ステータスと技ドロップダウンの選択肢を更新する。
9. 通常攻撃威力を再計算する。

### レベル変更

1. 攻撃側レベル変更時は `updatePlayerUI()` を実行し、通常攻撃と選択済み技の威力を再計算する。
2. レベルを下げて選択済み技が通常の解放候補から外れても、選択中の技はドロップダウンへ残して計算を継続する。
3. 現実のレベル条件では使えない技構成も、検証用の条件として維持できる。
4. 防御側レベル変更時は `updateEnemyUI()` を実行する。
5. 防御側レベル変更では通常攻撃の急所判定済みデータを維持し、攻撃済みの場合だけ防御補正後のダメージを再計算する。
6. レベル変更だけでは画面上部への自動スクロールはしない。

### 防御側ポケモン変更

1. `enemyPokemon` と防御側表示を更新する。
2. 通常攻撃の急所判定済みデータは維持する。
3. 攻撃済みの場合は、現在の各ヒット情報を使って通常攻撃、技、合計ダメージを再計算する。

### 技選択

1. 技セット1、技セット2、ユナイト技のドロップダウンを変更する。
2. optionの値には `+` を付けない元の技名を保持し、表示文言だけを現在レベルに合わせる。
3. `appSelectors.js` の `findMoveByName(currentPokemon, skillName)` または `getUniteMove(currentPokemon)` で技データを取得する。
4. 技セットに応じて `selectedSkillOne`、`selectedSkillTwo`、`selectedSkillThird` に保存する。
5. `buildMoveDamageData()` で計算済みデータを作り、`renderMoveRawDamage()` で威力を表示する。
6. すでに攻撃済みなら再計算する。
7. 技選択だけでは画面上部への自動スクロールはしない。

ドロップダウンの `技を選択` を選ぶと選択解除となり、対応する威力、最終ダメージ、残りHP、HPバーを初期表示へ戻します。

選択後にレベルを下げた場合は、選択済み技を自動解除しません。通常の解放候補から外れた技もドロップダウンへ残し、そのレベルの攻撃側ステータスを使って威力を再計算します。

### 持ち物選択

1. 持ち物枠をクリックすると、持ち物モーダルを表示する。
2. 持ち物を選ぶと `toggleHeldItem()` が `currentHeldItems` を更新する。
3. `showHeldItem()` で持ち物枠を更新する。
4. モーダルを閉じる。
5. `updatePlayerUI()` でステータスを再表示する。
6. 通常攻撃を現在の攻撃ステータスで再計算する。急所結果固定中は各ヒットの急所発生パターンを維持する。
7. すでに攻撃済みなら最終ダメージと合計結果も再描画する。
8. 持ち物変更だけでは画面上部への自動スクロールはしない。

### 通常攻撃の急所結果固定

1. 選んだ技の通常攻撃欄で `急所結果を固定` をONにする。
2. 現在の `currentNormalAttackData.hitDamages` から各ヒットの `critical` を配列として保持する。
3. 攻撃側レベル、持ち物、技、技ヒット数、防御側ポケモン、防御側レベルを変更しても、固定配列を使って通常攻撃を再計算する。
4. 固定中も攻撃力、持ち物補正、防御・特防、相手HPなどは現在の条件を使うため、急所位置だけを維持してダメージを比較できる。
5. 固定をOFFにすると固定配列を破棄し、通常の急所抽選で再計算する。
6. 攻撃側ポケモン変更、通常攻撃ヒット数変更、急所ON/OFF変更、オールリセットでは固定を解除する。
7. 保存ビルドには固定ON/OFFも保存し、読み込み時にその状態を復元する。
8. 固定項目が存在しない既存保存データは、従来互換として有効な急所発生パターンを固定ONで復元する。

### 攻撃実行

1. 攻撃ボタンを押す。
2. `damageResult.style.display = "flex"` にして計算結果エリアを表示する。
3. `resultPopup.style.display = "block"` にして詳細表示ボタンを表示する。
4. `hasAttacked = true` にする。
5. `attackNormalAttack()` を実行する。
6. `damageResult.scrollIntoView()` で計算結果エリアを画面上部へ移動する。
7. 通常攻撃、技1、技2、ユナイト技、合計ダメージを表示する。

現在、自動スクロールは攻撃ボタン押下時だけ発生します。技選択、ヒット数変更、急所ON/OFF、持ち物変更では発生しません。攻撃後にユナイト技を選択・解除した場合も、技1・技2と同じように再計算され、結果表示とHPバーが更新されます。攻撃後の再計算判定は `rerenderAfterAttack()` にまとめています。

### 責務分割後の呼び出し関係

現在はES Modulesで責務を分割し、`app.js` を入口として各モジュールを `import` する構成です。

- `app.js`
  - ユーザー操作、状態更新、再計算入口を担当します。
- `appSelectors.js`
  - DOMに依存せず、渡されたデータから技、ステータス、HP、ポケモンを取得する補助関数を担当します。
- `domElements.js`
  - `app.js` が利用するDOM参照をまとめて提供します。
- `selectOptions.js`
  - レベル、ポケモン、ヒット数のoption生成を担当します。変更イベントは持ちません。
- `damageCalculator.js`
  - `app.js` から呼ばれて、技・通常攻撃・防御補正後ダメージを返します。
- `heldItemService.js`
  - `getCurrentStatus()` と `applyHeldItemEffect()` を通じて、持ち物補正を適用します。
- `resultRenderer.js`
  - 計算結果をDOMへ表示し、HPバーや詳細ポップアップを更新します。
- `uiEvents.js`
  - 状態更新や再計算を伴わないUI開閉イベントを登録します。
- `mobileTabs.js`
  - スマホ幅で下部タブ、対象パネル、共有カードの表示クラスを切り替えます。

`updateNormalAttack()` は `calculateNormalAttackDamage()` と `showNormalAttackDamage()` を呼び、攻撃済みなら `rerenderAfterAttack()` 経由で `attackNormalAttack()` を呼びます。この循環に近い再描画フローは挙動維持のため `app.js` に置いています。

### 計算結果表示

PCでは `damage-result` を常時表示します。スマホでは「結果」タブを選んだときだけ `damage-result` を表示します。

攻撃後は、PC/スマホともJSが数値とHPバーを更新します。スマホでは自動的に「結果」タブへ切り替えます。

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
5. タブ表示領域の外にある共通モーダル `detail-popup-overlay` が現在画面の上に表示され、背景がぼかされる。
6. `閉じる` ボタンで非表示に戻る。

詳細表示では以下が分かります。

- 何Hit目か
- ダメージ
- 通常攻撃か強化通常か
- 急所命中したか

### スマホ表示

スマホ幅ではCSSにより以下の表示になります。

- 下部固定タブで「攻撃側」「受ける側」「詳細」「結果」を切り替える
- 既存DOMを維持し、`is-mobile-tab-active` クラスで表示・非表示を切り替える
- タブ切り替え後も入力値や選択状態を維持する
- 攻撃側タブにはポケモン・レベル・持ち物・ステータス・通常攻撃・技セット別ドロップダウン・攻撃ボタンを表示する
- 攻撃側ステータスはレベル表示の直下に表示する
- 攻撃側タブ内では、通常攻撃を技設定の先頭に表示する
- 技セット1、技セット2、ユナイト技は、技選択・使用回数・威力を1枚のカード内に縦表示する
- 技名はドロップダウンから選択し、重複していた選択済み技名欄は表示しない
- 攻撃ボタンは技設定の後に表示する
- 詳細タブにはビルド保存欄を表示する
- 攻撃ボタン押下後は「結果」タブへ自動切り替え
- 結果タブの詳細表示は、受ける側タブへ移動せず現在画面の上に表示する
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

- `createPokemonOptions(selectElement, pokemonsList)`
  - `pokemonsList` からポケモン選択肢を生成します。

- `createHitCountOptions(hitCountSelects)`
  - 通常攻撃、技1、技2、ユナイト技の選択肢を生成します。
  - 通常攻撃は `Hits` 表示、通常攻撃以外は `回` 表示にします。
  - 通常攻撃以外の初期値を `1回` に設定します。

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
  - DOMを直接参照せず、レベルを引数で受け取ります。
  - 旧形式の `formulaPlus` には依存せず、`damageComponents` / `plusDamageComponents` 形式の技でも同じ判定を使います。

- `getRawDamage(selectedMove, level, status)`
  - 通常式とアップグレード式を切り替えて、技の基礎威力を返します。
  - 旧形式でプラス判定になっても `formulaPlus` がない場合は、通常式で計算します。

- `getTotalDamage(selectedMove, hitCount, level, status)`
  - 旧形式の技では基礎威力に使用回数を掛けます。
  - `damageComponents` 形式の技では、内部ヒット数を含めた基礎威力合計に使用回数を掛けます。

- `computeFinalDamage(selectedMove, hitCount = 1, attackerLevel, attackerStats, enemyPokemonStats)`
  - 相手の防御または特防を考慮して、技の最終ダメージを返します。
  - `damageComponents` 形式の技では、内部1ヒットごとに防御または特防補正を適用し、内部ヒット数と使用回数を掛けて合計します。

### 通常攻撃計算

- `calculateNormalAttackDamage({ level, pokemonId, hitCount, status, criticalEnabled, criticalPattern, random })`
  - ポケモン別に通常攻撃と強化通常攻撃を計算します。
  - 各ヒットごとに `damage`、`critical`、`boosted` を持つデータを生成します。
  - `criticalPattern` が配列の場合は乱数の代わりに各ヒットの急所真偽を使用します。倍率や丸め処理は通常計算と同じです。

- `computeNormalAttackFinalDamage(normalAttackData, pokemonId, enemyPokemonStats)`
  - 通常攻撃の各ヒットに防御または特防を適用して最終ダメージに変換します。

- `showNormalAttackDamage(normalAttackData)`
  - 通常攻撃の基礎威力合計を表示します。

- `showNormalAttackFinalDamage(finalDamageData)`
  - 通常攻撃の最終ダメージ、残りHP、HPバーを表示します。

### 攻撃後の再描画

- `rerenderAfterAttack()`
  - `hasAttacked` が `true` の場合だけ `attackNormalAttack()` を呼びます。
  - 技1、技2、ユナイト技、持ち物、ヒット数変更後の再計算入口を統一します。

- `releaseNormalAttackCriticalLock()`
  - 保持している通常攻撃の急所発生パターンを破棄し、固定チェックをOFFにします。

### 結果表示

- `attackNormalAttack()`
  - 攻撃時の中心処理です。
  - 通常攻撃、技1、技2、ユナイト技、合計ダメージをまとめて更新します。

- `renderMoveRawDamage(targetElement, moveDamageData)`
  - 計算済み技ダメージデータから技の威力表示を更新します。
  - 現在は技1・技2・ユナイト技で使います。

- `renderMoveFinalDamage(damageElement, hpElement, hpBarElement, moveDamageData)`
  - 計算済み技ダメージデータから最終ダメージ、残りHP、HPバーを更新します。
  - 現在は技1・技2・ユナイト技で使います。

- `renderTotalDamageResult(finalDamageData)`
  - 通常攻撃、技1、技2、ユナイト技の合計ダメージ表示を更新します。

- `showHitDamagesPopup(hitDamages)`
  - 通常攻撃の1ヒットごとの詳細を描画します。

- `showSingleHitDamagesPopup(hitDamage, index)`
  - `resultRenderer.js` 内部で1ヒット分の詳細行を作ります。

### 折りたたみ・表示制御

- `bindUiEvents(context)`
  - 状態更新や再計算を伴わないUI開閉イベントをまとめて登録します。
  - 計算結果内訳、攻撃側・防御側ステータス、詳細ポップアップを閉じる処理、持ち物モーダルの開閉を担当します。

- `resultPopup.addEventListener("click", ...)`
  - 通常攻撃詳細ポップアップを表示します。
  - `updatePopup()` で再計算を行うため、`app.js` に残しています。

### 持ち物

- `toggleHeldItem(selectedItemIds, itemId)`
  - 持ち物の選択・解除を切り替えます。

- `showHeldItem(itemId, selectedItem)`
  - 持ち物枠の表示を更新します。

- `applyHeldItemStatus(status, activeHeldItems)`
  - 持ち物によるステータス加算を適用します。

- `applyHeldItemStatusEffect(status, activeHeldItems)`
  - 持ち物によるステータス倍率補正を適用します。

- `applyHeldItemEffect(damageData, activeHeldItems, enemyHp)`
  - 持ち物によるダメージ補正や追加ダメージを、コピーしたダメージデータへ適用して返します。

### ヘルパー

- `findMoveByName(pokemon, skillName)`
  - 対象ポケモンの技一覧から技名に一致する技データを探します。

- `getPokemonStatsAtLevel(pokemon, level)`
  - 対象ポケモンの指定レベルのステータスを返します。

- `getEnemyStats(enemyPokemon, enemyLevel)`
  - 防御側ポケモンと防御側レベルからステータスを返します。
  - `app.js` 側では `selectEnemyStats` という名前でimportし、同名ラッパーから呼び出します。

- `getHpFromStats(stats)`
  - 渡されたステータスからHPを返します。

- `getUniteMove(pokemon)`
  - 対象ポケモンのユナイト技を返します。

- `findPokemonById(pokemonsList, pokemonId)`
  - ポケモン一覧からIDに一致するポケモンを返します。

- `isCategory(selectedMove)`
  - 技が物理か特殊かを判定します。

- `getCurrentStatus(baseStats, activeHeldItems)`
  - 基礎ステータスと選択中持ち物を受け取り、持ち物補正後のステータスを返します。

- `resetDamageDisplay(...)`
  - 選択済み技やダメージ表示をリセットします。

- `resetAppState()`
  - オールリセット時にページを再読み込みせず、内部状態、フォーム値、持ち物、技・ダメージ表示、HPバー、UI開閉状態を初期化します。
  - 初期ポケモンとステータスを再描画し、通常攻撃データを初期条件で作り直します。

- `getCurrentBuildState()`
  - 現在の攻撃側ポケモン、レベル、技、持ち物スロット、攻撃回数、急所設定をDOMと内部状態から集めます。
  - 集めた値を `build/buildState.js` の `createBuildState()` に渡し、`version: 2` のプレーンオブジェクトとして返します。
  - 防御側ポケモンと防御側レベルは保存対象に含めません。
  - 急所判定済みの通常攻撃データと攻撃済み状態も `calculationState` にコピーして含めます。通常攻撃データには `calculationVersion: 1` を付けます。
  - `normalAttackCriticalLocked` に急所結果固定のON/OFFを保存します。
  - 最終ダメージなど再計算できる結果や、モーダルなどの一時的な表示状態は含めません。

- `applyBuildState(build)`
  - `getCurrentBuildState()` と同じ形式の状態を受け取り、内部状態と画面へ復元します。
  - 読み込み前に選択されていた防御側ポケモンと防御側レベルを維持します。
  - 現行の保存バージョンであることを `resetAppState()` より前に確認し、無効なデータでは現在の画面と内部状態を変更しません。
  - 有効な保存バージョンでは `resetAppState()` を実行し、ID、技名、数値、通常攻撃データを検証・補正した後、既存の更新処理で再描画します。
  - 対応する `calculationVersion` の通常攻撃データがある場合は急所判定を再実行せず、保存済みの各ヒット情報から結果を復元します。
  - `normalAttackCriticalLocked` を参照して固定チェックと内部の固定パターンを復元します。項目がない既存データは固定ONとして扱います。
  - 保存済み通常攻撃データが使用できない場合も、通常攻撃を再生成した後、その各ヒットを使って保存時の固定ON/OFFを復元します。

---

## 動作確認チェックリスト

JavaScriptの責務や依存関係を変更した場合は、以下を確認します。

- `node --test`
- `node --check js/app.js`
- `node --check js/appSelectors.js`
- `node --check js/domElements.js`
- `node --check js/selectOptions.js`
- `node --check js/damageCalculator.js`
- `node --check js/heldItemService.js`
- `node --check js/resultRenderer.js`
- `node --check js/uiEvents.js`
- `node --check js/mobileTabs.js`
- 画面を開いたときにコンソールエラーが出ない
- 攻撃ボタンで通常攻撃・技1・技2・ユナイト技・合計ダメージが表示される
- 詳細表示ボタンで通常攻撃1ヒットごとの情報が表示される
- ピントレンズ、力のハチマキ、物知り眼鏡を選んでもエラーが出ない
- レベル変更後に技の `+` 表示と威力表示が維持される
- スマホ幅で合計ダメージ優先表示と内訳折りたたみが維持される
- スマホ幅で4タブを切り替えて入力状態が維持される
- スマホ幅で攻撃後に結果タブへ切り替わる
- PC幅で下部タブが表示されず、主要エリアが従来どおり表示される

現在のアプリ用JavaScriptは16ファイル構成です。変更後は、変更対象と依存先の `node --check` を実行し、ブラウザ上の操作確認は影響範囲に応じて上記チェックリストから選びます。

Node標準のテスト機能を使うため、外部ライブラリは追加していません。`tests/buildStorage.test.js` では複数保存、読み込み、削除、旧バージョン除外、壊れたJSONを確認します。`tests/damageCalculator.test.js` では通常攻撃の急所パターン固定、攻撃力変更後の急所位置維持、乱数利用、急所OFF、急所回数を確認します。

`tests/buildRenderer.test.js` では保存データがない場合の操作無効化、保存一覧と選択状態、保存内容の日本語表示項目を確認します。

`tests/buildController.test.js` では初期一覧描画、保存、読み込み、内容表示とモーダル開閉、削除イベントを確認します。

`tests/buildState.test.js` では現在状態から保存形式への変換、データ複製、整数補正、通常攻撃データ検証、保存データ全体の必須構造検証を確認します。

`tests/mobileTabs.test.js` ではスマホ幅でのタブ・パネル・共有カードの切り替えと、PC幅で状態を変更しないことを確認します。

2026-06-04のマージ前レビューで、未使用だった `itemModal`、`currentSelectedMove`、旧急所ポップアップ関数を削除しました。その後、未使用だったHTMLの `critical-popup` とCSSの旧急所ポップアップ表示・アニメーションも削除しました。現在使っている通常攻撃詳細表示の `critical-color` は残しています。

---

## 5. 改善点

### app.js の責務が大きい

`app.js` からデータ、計算、持ち物処理、DOM取得、option生成、値取得補助は分割済みですが、まだ以下が集中しています。

- DOM参照を使った画面制御
- セレクトボックス変更時の再計算イベント
- 状態管理
- イベント登録
- 計算・表示モジュールの呼び出し調整

状態更新を伴わないUI開閉イベントは `uiEvents.js` へ分離済みです。技選択、持ち物選択、攻撃ボタン、詳細ポップアップを開く処理、`change` イベントは再計算や状態更新に強く依存するため、引き続き `app.js` に残します。

### 状態取得関数は現状維持

`appSelectors.js` への主要な値取得処理の分離は完了とします。`app.js` に残る状態取得ラッパーは、現在のDOM値や選択状態を既存モジュールへ渡す役割があるため、現時点では移行しません。

今後、状態オブジェクトの導入、保存機能、同じ取得処理の重複など具体的な必要性が生じた場合に限り、移行先と計算結果への影響を確認して個別に整理します。

### resultRenderer.js の残タスク

技1・技2・ユナイト技の個別表示は、`app.js` 側で `buildMoveDamageData()` を使って計算済みデータを作り、`resultRenderer.js` は渡されたデータを描画する形へ移行済みです。

合計表示の `renderFinalDamageAll()` も、通常攻撃の最終ダメージデータと、技1・技2・ユナイト技の計算済みデータを受け取って足し算する形へ移行済みです。

また、`showHitDamagesPopup()` は `hitDamage-result` を直接取得しています。計算と描画の分離を進める際に、DOM参照も `domElements.js` またはcontext引数へ寄せる候補です。

### 通常攻撃ロジックがポケモンごとに重複している

`calculateNormalAttackDamage()` はポケモンごとに似た処理が重複しています。ピカチュウだけは `pokemonData.js` の `normalAttack` データ参照へ実験移行済みです。通常攻撃の倍率、強化通常の条件、急所可否などを他ポケモンにも広げると、ポケモン追加時の修正量を減らせます。

計算結果が変わる可能性があるため、これはDOM整理やイベント分割より後に行います。

### CSSが追記型になっている

未使用CSSや一部の重複は整理済みですが、PC基本スタイルと複数のスマホ向け `@media (max-width: 768px)` 上書きが離れている箇所は残っています。

今後整理する場合は、見た目を変えずに対象コンポーネントを1つずつ選び、基本指定とスマホ上書きを近い単位で確認します。全体フォーマットや広範囲な並べ替えは最後にまとめて行います。

### `:has()` の利用

スマホのステータス開閉表示でCSSの `:has()` を使っています。近年の主要ブラウザでは動作しますが、古いブラウザ対応を強く意識するなら、JSでボタン側にも `is-open` クラスを付ける方式にするとより安全です。

### リセット処理

オールリセットは `resetAppState()` で明示的に初期化します。

主な初期化対象は以下です。

- 攻撃側・防御側ポケモンとレベル
- 選択技と通常攻撃データ
- 持ち物選択状態と持ち物スロット
- ヒット数と急所設定
- 技、通常攻撃、合計ダメージ表示
- HPバー
- 結果内訳と攻撃側・防御側ステータスの開閉状態
- 詳細ポップアップと持ち物モーダル
- PC・スマホごとの計算結果エリア初期表示

ページ再読み込みに依存しないため、将来のビルド読み込みや状態復元処理へつなげやすい構成です。

### 持ち物スロット管理

現在の `currentHeldItems` は選択中持ち物IDの配列です。スロットごとの対応、同じ持ち物の重複可否、解除動作を明確にすると、将来の保存機能やUI改善がしやすくなります。

### 将来機能を含む計算順

メダル、受ける側持ち物、受ける側メダル、シールド、共鳴ガード、倍率補正を追加するときは、以下の順序を実装基準とします。

1. 攻撃側基本ステータス
2. 攻撃側持ち物・メダル
3. 技の元ダメージ
4. 防御側持ち物・メダル
5. 防御・特防計算
6. 与ダメージ・被ダメージ倍率
7. シールド消費
8. HP減少
9. 結果表示

現在はこのすべてが実装済みという意味ではありません。新機能追加時はこの順序を崩さず、各段階の丸め位置、倍率の適用対象、シールドとHPの値を分けて扱います。共鳴ガードなどで生成されたシールドも、HPへ直接加算せずシールド値として処理します。

### レスポンシブUIの次の改善

現在のスマホ表示は下部固定タブ、合計ダメージ優先、内訳・ステータス折りたたみ、技エリア2列化まで対応しています。

次に改善するなら、持ち物選択を必要なときだけ開く折りたたみまたはモーダル中心の設計が候補です。UI変更になるため、実装前に設計を確認します。

### 推奨する次の実装順

1. 通常攻撃の急所結果固定を実ブラウザで確認する。
2. 固定中に攻撃側レベル、持ち物、技、防御側ポケモン、防御側レベルを変更し、急所位置が維持されてダメージだけ更新されることを確認する。
3. 攻撃側ポケモン、通常攻撃ヒット数、急所設定、オールリセットで固定が解除されることを確認する。
4. 保存機能の追加作り込みは再開指示があるまで停止する。
5. 通常攻撃ロジックのデータ駆動化を検討する。

状態取得関数の追加移行は、この順序には含めません。上記作業や新機能で必要になった場合だけ実施します。

### 次回再開時にやること

次回は、通常攻撃の `急所結果を固定` をONにし、条件変更後も各ヒットの急所位置が維持されることを実ブラウザで確認します。

攻撃側ポケモン、通常攻撃ヒット数、急所設定、オールリセット時の固定解除も確認します。保存機能の追加作り込みは行いません。

---

## 6. ビルド保存機能の推奨構成

ここでいう「ビルド保存機能」は、攻撃側のポケモン、レベル、技、持ち物、ヒット数、急所設定に加え、再現が難しいランダムな計算状態を保存し、後から同じ攻撃条件を呼び出せるスナップショット機能です。防御側は保存せず、読み込み後も自由に変更して比較できます。

### 最初はlocalStorage保存がおすすめ

このアプリは静的サイトなので、最初の保存機能は `localStorage` が自然です。サーバーやログインなしで実装できます。

実装済みのビルド状態は以下の形式です。

```js
{
  version: 2,
  attacker: {
    pokemonId: "Greninja",
    level: 15,
    skillOneName: "かげぶんしん",
    skillTwoName: "みずしゅりけん",
    uniteMoveName: "極大水手裏剣",
    heldItemSlots: ["scopeLens", "muscleBand", null]
  },
  hitCounts: {
    normalAttack: 3,
    skillOne: 2,
    skillTwo: 3,
    unite: 2
  },
  criticalEnabled: true,
  calculationState: {
    normalAttackData: {
      calculationVersion: 1,
      totalDamage: 1935,
      criticalCount: 1,
      hitDamages: [
        {
          damage: 450,
          critical: false,
          boosted: false
        },
        {
          damage: 900,
          critical: true,
          boosted: false
        },
        {
          damage: 585,
          critical: false,
          boosted: true
        }
      ]
    },
    normalAttackCriticalLocked: true,
    hasAttacked: true
  }
}
```

この形式は `getCurrentBuildState()` と `applyBuildState()` で取得・復元できます。防御側は保存せず、読み込み時点で画面に選択されている防御側を維持します。通常攻撃の最終ダメージは保存せず、急所判定済みの各ヒット情報と現在の防御側・持ち物設定から再計算します。未対応または欠落した `calculationVersion` の通常攻撃データは使用せず、現在の計算処理で再計算します。

### 保存機能の現在の構成

保存機能は `js/build/` にまとめています。

```text
js/build/
├─ buildController.js
├─ buildRenderer.js
├─ buildState.js
└─ buildStorage.js
```

`app.js` は現在値の収集と画面への復元、`buildState.js` は保存形式の生成・複製、`buildStorage.js` は永続化、`buildRenderer.js` は描画、`buildController.js` はイベント連携を担当します。

保存形式の現行バージョンは `buildState.js` の `BUILD_STATE_VERSION` で一元管理します。`getSavedBuilds()` は現行バージョン以外の保存レコードを一覧から除外し、除外が発生した場合は有効なレコードだけを `localStorage` へ保存し直します。

### UI追加案

既存UIを大きく崩さない形で、以下を実装済みです。

- 攻撃側エリア上部の保存名入力
- `保存済みビルド` セレクト
- `保存`、`内容を見る`、`読み込み`、`削除` ボタン
- 保存、読み込み、削除結果のメッセージ
- 選択中ビルドの保存内容を表示するモーダル

スマホでは入力、一覧、ボタンを折り返し、既存カード幅に収めます。

### 保存機能追加時の注意点

- 技名だけで保存すると、同名技やデータ変更に弱いため、将来的には技IDを持たせるのが望ましいです。
- 持ち物はスロット単位で保存した方が復元しやすいです。
- 保存データには `version` を入れておくと、データ形式変更時に移行しやすくなります。
- localStorageはブラウザ単位の保存なので、端末間共有が必要ならサーバー保存が必要です。
- 保存したビルドを読み込むときは、画面表示だけでなく `currentPokemon`、`selectedSkillOne` など攻撃側の内部状態も必ず復元します。`enemyPokemon` は読み込み前の状態を維持します。
- 保存ビルドは攻撃側スナップショットとして扱い、防御側ポケモンと防御側レベルは保存しません。
- 防御側変更時は `currentNormalAttackData` を作り直さず、防御補正後の結果だけ再計算します。
- 急所判定など再実行すると変わる値は `calculationState` に保存し、復元時は有効性を検証してから使用します。
- 急所結果固定のON/OFFは `normalAttackCriticalLocked` として保存し、読み込み時に復元します。
- 通常攻撃データには `calculationVersion` を付け、対応するバージョンだけ保存結果を復元します。
- 計算式やマスターデータ変更後も保存時の通常攻撃データが復元されるため、将来は「保存結果を表示」と「現在の式で再計算」を区別する余地があります。

### 推奨実装順

1. `getCurrentBuildState()` で現在の選択状態を取得する。実装・往復確認済み。
2. `createBuildState()` で保存形式への変換と複製を行う。実装・テスト済み。
3. `applyBuildState(build)` で画面と内部状態を復元する。実装・往復確認済み。
4. `buildStorage.js` で複数保存、取得、削除を行う。実装・テスト済み。
5. `buildRenderer.js` と `buildController.js` で保存UIを管理する。実装・テスト済み。
6. 保存データの検証・補正を段階的に `buildState.js` へ集約する。

---

## 7. 改善履歴

この章は完了済みの改善を保管する場所です。未完了の課題は `5. 改善点` に記載します。

### HTML・命名・不要コード整理

- HTMLのHPバー5箇所に重複していた `id="hp-ber"` を削除し、共通クラスへ統一しました。
- HTML、CSS、JavaScript、データ定義のタイポと表記揺れを修正しました。
- 開発中の `console.log()` を削除しました。
- 未使用だった `itemModal`、`currentSelectedMove`、旧急所ポップアップ関数を削除しました。
- 未使用だったHTMLの `critical-popup` と旧急所ポップアップ用CSS・アニメーションを削除しました。

### JavaScript責務分割

- JavaScriptをES Modulesへ移行し、`index.html` から `app.js` を `type="module"` で読み込む構成にしました。
- 計算処理を `damageCalculator.js`、持ち物処理を `heldItemService.js`、結果描画を `resultRenderer.js`、基本UI更新を `ui.js` へ分割しました。
- `damageCalculator.js` と `heldItemService.js` の主要関数からDOM参照とグローバル状態参照を減らし、必要値を引数で受け取る形へ変更しました。
- `applyHeldItemEffect()` は元の `damageData` を直接変更せず、コピーへ効果を適用して返す形に変更しました。
- `domElements.js` を追加し、`app.js` 先頭のDOM取得を分離しました。
- `selectOptions.js` を追加し、レベル、ポケモン、ヒット数のoption生成を分離しました。ヒット数の `change` イベントは `app.js` に残しています。
- `appSelectors.js` を追加し、DOMに依存しない値取得処理を分離しました。
- 技表示欄6個を `domElements.js` に追加し、ユナイト技欄と攻撃側・防御側ステータス欄を含むDOM参照を、`app.js` からcontext経由で `ui.js` に渡す形へ統一しました。
- `ui.js` から直接の `document.getElementById()` を削除しました。
- `uiEvents.js` を追加し、計算結果内訳、攻撃側・防御側ステータス、詳細ポップアップを閉じる処理、持ち物モーダルの開閉イベントを `app.js` から分離しました。
- `uiEvents.js` のイベント登録は `bindUiEvents(context)` にまとめ、状態更新や再計算を伴うイベントは `app.js` に残しました。
- 技1・技2・ユナイト技の威力表示と最終ダメージ表示を、`buildMoveDamageData()` で作った計算済みデータ経由へ移行しました。
- `resultRenderer.js` に `renderMoveRawDamage()` と `renderMoveFinalDamage()` を追加し、個別表示では `getTotalDamage()` / `computeFinalDamage()` を描画関数内で呼ばない形にしました。
- 合計ダメージ表示も、通常攻撃の最終ダメージデータと技1・技2・ユナイト技の計算済みデータを足し算する形へ変更しました。
- 未使用になった `resultRenderer.js` の `showDamage()` / `showFinalDamage()` と、それらに紐づく `getTotalDamage()` / `computeFinalDamage()` importを削除しました。
- オールリセットを `location.reload()` から `resetAppState()` に変更し、内部状態と画面表示をページ再読み込みなしで初期化する形にしました。
- 詳細ポップアップの内容も初期化できるよう、`hitDamageResult` のDOM参照を `domElements.js` に追加しました。
- `getCurrentBuildState()` を追加し、現在のビルド状態をプレーンオブジェクトとして取得できるようにしました。
- `applyBuildState()` を追加し、取得した状態を検証・補正しながら内部状態と画面へ復元できるようにしました。
- 持ち物はスロット位置を維持して保存し、空きスロットも `null` として往復できるようにしました。
- ブラウザ上で「状態取得 → 全リセット → 状態復元」の一致と、復元後の技ダメージ計算を確認しました。
- 通常攻撃の急所判定済みデータと攻撃済み状態を `calculationState` に追加し、復元時に急所を再抽選しないスナップショット形式へ拡張しました。
- 通常攻撃スナップショットへ `calculationVersion: 1` を追加し、対応バージョンだけを復元対象にしました。
- 通常攻撃欄へ `急所結果を固定` を追加し、各ヒットの急所発生パターンだけを維持したまま攻撃条件と防御条件を比較できるようにしました。
- 攻撃側ポケモン、通常攻撃ヒット数、急所設定、オールリセット時は固定を解除するようにしました。
- 保存状態に `normalAttackCriticalLocked` を追加し、保存時の急所結果固定ON/OFFを読み込み時に復元するようにしました。
- 急所結果固定の復元を通常攻撃データの検証結果から分離し、保存済み計算データが使えない場合も再生成後の急所パターンを固定できるようにしました。
- `buildStorage.js` を追加し、複数の保存ビルドを `localStorage` 内の配列として管理するようにしました。
- 保存名入力、保存済みビルド一覧、保存、読み込み、削除の最小UIを追加しました。
- 保存レコードを `id`、`name`、`buildState`、`createdAt`、`updatedAt` の形式へ統一しました。
- 保存形式を `version: 2` に更新し、防御側ポケモンと防御側レベルを保存対象から外しました。
- ビルド読み込み時は現在の防御側を維持し、防御側変更時も急所判定済み通常攻撃データを再抽選しないようにしました。
- 保存機能欄へ `内容を見る` ボタンと保存ビルド内容確認モーダルを追加し、選択中ビルドの各項目を `label: value` 形式で確認できるようにしました。
- 保存関連の `buildController.js`、`buildRenderer.js`、`buildStorage.js` を `js/build/` へ移動しました。
- `js/build/buildState.js` を追加し、保存形式と通常攻撃計算のバージョン、通常攻撃データの複製、`createBuildState()` による保存形式生成をまとめました。
- `getCurrentBuildState()` はDOMと内部状態から値を集め、保存形式への変換と複製を `createBuildState()` に任せる形へ変更しました。
- ピカチュウのエレキボールを `damageComponents` と `additionalDamageEffects` 形式へ移行し、本体ダメージ後の減少HPを参照する追加ダメージを計算できるようにしました。
- `computeMoveDamageData()` を追加し、技使用回数ごとの本体ダメージ、追加ダメージ、HP推移を `useResults` として返す形にしました。現在のUIでは満タンHPから計算を開始し、使用回数間では `carryHpBetweenUses: true` でHPを引き継ぎます。`hpAfter` は当面既存表示互換のため残し、意味を明確にした `displayHpAfter` と `sequentialHpAfter` を追加しました。将来の攻撃順機能では前の技の `sequentialHpAfter` を使って、次の技の `currentHp` へ渡せるようにしています。

現在の `appSelectors.js` には以下があります。

- `findMoveByName()`
- `getPokemonStatsAtLevel()`
- `getEnemyStats()`
- `getHpFromStats()`
- `getUniteMove()`
- `findPokemonById()`

### 再計算・結果表示改善

- 攻撃後の再計算判定を `rerenderAfterAttack()` にまとめました。
- 技、ヒット数、急所、持ち物、レベル変更では不要な自動スクロールを発生させず、攻撃ボタン押下時だけ計算結果へ移動する形にしました。
- PCでは計算結果を常時表示し、スマホでは結果タブで表示する方針へ変更しました。
- ユナイト技を選択解除して再選択した場合も、攻撃後の結果とHPバーが再計算されるようにしました。
- 通常攻撃の1ヒットごとの詳細表示と、詳細ポップアップの開閉を追加しました。

### CSS整理

- 未使用CSS、古い落下アニメーション、重複していた色指定を削除しました。
- スマホ持ち物表示を3列グリッドへ統一し、横スクロール用の古い指定を削除しました。
- スマホの結果表示、内訳折りたたみ、詳細表示ボタン周辺のCSSをまとめました。
- 旧ポップアップ用の `#hitDamage-result` 固定配置を削除しました。
- 詳細ポップアップ内の `.hit-damage` は共通指定と差分指定へ整理しました。
- 順番依存だった `.detail-damage-result > div:nth-child(5)` を削除し、`.total-damage-card` で指定する形に変更しました。

### スマホUI改善履歴

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
13. 攻撃側、受ける側、詳細、結果の下部固定タブ
14. 攻撃ボタン押下後の結果タブ自動切り替え
15. 攻撃側タブ内の通常攻撃優先、技セット別の縦カード配置

今後の改善候補は履歴には追加せず、`5. 改善点` と「推奨する次の実装順」で管理します。

