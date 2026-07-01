# PR Descriptions

このファイルは、PR本文をコピーしやすい形で一時保管する場所です。

運用ルール:

- PR本文は最大3件まで保管します。
- 新しいPR本文を追加して4件になる場合は、一番古いPR本文を削除して3件に戻します。
- 各PR本文は `<details>` で折りたたみ、コピーしたい本文だけを開ける形にします。
- 実際のPR本文に貼る場合は、対象PRの中身だけをコピーします。

---

## PR 1 - フルボルトストーム damageComponents 移行

<details>
<summary>コピー用PR本文</summary>

## Summary
ピカチュウのユナイト技「フルボルトストーム」を `damageComponents` 形式へ移行しました。

これにより、検証済みの「同一対象へ4ヒットする条件」のダメージを、旧 `formula` ではなく新形式データから計算できるようになります。
UI、保存形式、他ポケモン、他技には変更を加えていません。

## Changes

<details>
<summary>js/pokemonData.js</summary>

- ピカチュウの `フルボルトストーム` に `damageComponents` を追加しました。
- 旧 `formula` は削除せず、移行中の互換用として残しています。
- 新しく追加した `damageComponents` は以下の内容です。

```js
damageComponents: [{
    id: "perHit",
    type: "standard",
    referenceStat: "spAttack",
    ratio: 0.49,
    levelScaling: 10,
    fixedValue: 486,
    defenseReference: "spDefense",
    hitCount: 4
}]
```

- 計算内容:
  - 参照ステータス: `spAttack`
  - 防御参照: `spDefense`
  - 1ヒットあたりの式: `49% SpAtk + 10 x (Level - 1) + 486`
  - ヒット数: `4`
  - 対象条件: 同一対象へ4ヒットする場合

</details>

</details>

<details>
<summary>tests/damageCalculator.test.js</summary>

- ピカチュウの `damageComponents` 実測一致テストに `フルボルトストーム` を追加しました。
- Lv9ピカチュウ同士の条件で、以下を確認します。

```js
{
    moveName: "フルボルトストーム",
    level: 9,
    expectedRawDamage: 3080,
    expectedFinalDamage: 2648
}
```

- 期待値の意味:
  - `expectedRawDamage: 3080`
    - 1ヒットあたりの基礎威力 `770`
    - `770 x 4 = 3080`
  - `expectedFinalDamage: 2648`
    - 1ヒットあたりの最終ダメージ `662`
    - `662 x 4 = 2648`

</details>

<details>
<summary>docs/project-overview.md</summary>

- フルボルトストームの実装条件を追記しました。
- 追記内容:
  - フルボルトストームは、同一対象へ4ヒットする条件での検証値を `damageComponents` に入れている
  - 複数対象時の対象選択・分散条件は未確認

- この追記により、今後レビューや再開時に「なぜ4ヒット固定で入っているのか」が分かるようにしています。

</details>

## Verification

<details>
<summary>実行した確認</summary>

以下を実行しました。

```bash
git diff --name-only
git diff
node --check js/pokemonData.js
node --check tests/damageCalculator.test.js
node --test tests/damageCalculator.test.js
node --test tests/*.test.js
```

</details>

<details>
<summary>確認結果</summary>

- `js/pokemonData.js` の構文チェック成功
- `tests/damageCalculator.test.js` の構文チェック成功
- `tests/damageCalculator.test.js`
  - 26件すべて成功
- `tests/*.test.js`
  - 49件すべて成功

</details>

## Notes

<details>
<summary>レビューしてほしい点</summary>

- `フルボルトストーム` の `damageComponents` が、同一対象4ヒット条件として妥当か
- `hitCount: 4` をデータ側に固定していることが、現在の仕様として問題ないか
- 旧 `formula` を残したまま新形式を優先する移行方針が妥当か

</details>

<details>
<summary>未対応・懸念</summary>

- 複数対象時の対象選択・分散条件は未確認です。
- 実戦で必ず同一対象へ4ヒットするとは限らない可能性があります。
- 今回の実装は、あくまで「同一対象へ4ヒットした場合」の検証値です。
- 旧 `formula` はまだ残っています。ピカチュウ全技の新形式移行が完了した後、削除または `legacyFormula` 化を検討します。

</details>

<details>
<summary>影響範囲</summary>

- 影響あり:
  - ピカチュウのユナイト技「フルボルトストーム」の計算
  - ピカチュウの `damageComponents` 実測一致テスト
  - `project-overview.md` の説明

- 影響なし:
  - UI
  - 保存形式
  - 通常攻撃
  - エレキボール追加ダメージ
  - 他ポケモン
  - 他の技
  - HTML
  - CSS

</details>

## Changed Files

<details>
<summary>git diff --name-only</summary>

```text
docs/project-overview.md
js/pokemonData.js
tests/damageCalculator.test.js
```

</details>

## Diff

<details>
<summary>docs/project-overview.md</summary>

```diff
diff --git a/docs/project-overview.md b/docs/project-overview.md
index c50df56..ca36cd8 100644
--- a/docs/project-overview.md
+++ b/docs/project-overview.md
@@ -223,6 +223,8 @@ JavaScriptはES Modulesとして読み込まれます。
 
 エレキボールは、本体ダメージとは別に `additionalDamageEffects` / `plusAdditionalDamageEffects` を持ち、相手の減少HPを参照する追加ダメージを表現します。通常版は減少HPの6%、プラス版は8%を参照します。現在の検証方針では「本体rawDamage計算 → 特防補正 → HP減少 → 減少HP参照 → 追加rawDamage計算 → 特防補正 → HP減少」の順番です。`trigger: "afterMainDamage"` は、全 `damageComponents` と全内部ヒットが終わった後に追加効果を実行する意味です。
 
+フルボルトストームは、同一対象へ4ヒットする条件での検証値を `damageComponents` に入れています。複数対象時の対象選択・分散条件は未確認です。
+
 ### js/helditemData.js
```

</details>

<details>
<summary>js/pokemonData.js</summary>

```diff
diff --git a/js/pokemonData.js b/js/pokemonData.js
index ff9b394..d23cc09 100644
--- a/js/pokemonData.js
+++ b/js/pokemonData.js
@@ -224,7 +224,17 @@ export const pokemonsList = [
                     ratio:0.451,
                     levelScaling:9,
                     baseDamage:450
-                }
+                },
+                damageComponents: [{
+                    id: "perHit",
+                    type: "standard",
+                    referenceStat: "spAttack",
+                    ratio: 0.49,
+                    levelScaling: 10,
+                    fixedValue: 486,
+                    defenseReference: "spDefense",
+                    hitCount: 4
+                }]
             }]
         },
```

</details>

<details>
<summary>tests/damageCalculator.test.js</summary>

```diff
diff --git a/tests/damageCalculator.test.js b/tests/damageCalculator.test.js
index 4a4b7ec..2672805 100644
--- a/tests/damageCalculator.test.js
+++ b/tests/damageCalculator.test.js
@@ -365,6 +365,12 @@ test("ピカチュウのdamageComponents技が実測値と一致する", () => {
             level: 13,
             expectedRawDamage: 1321,
             expectedFinalDamage: 1044
+        },
+        {
+            moveName: "フルボルトストーム",
+            level: 9,
+            expectedRawDamage: 3080,
+            expectedFinalDamage: 2648
         }
     ];
```

</details>
