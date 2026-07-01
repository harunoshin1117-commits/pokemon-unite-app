# Cinderace v3 Human Review Summary

作成日: 2026-06-25
元調査JSON: C:/Projects/pokemon-unite-app/データリサーチ/mechanics-effects-survey-v3/batch-02/cinderace-effects.json
人間確認JSON: C:/Projects/pokemon-unite-app/データリサーチ/batch-02-human-review-v3-results.json
修正版JSON: C:/Projects/pokemon-unite-app/データリサーチ/mechanics-effects-survey-v3/batch-02/cinderace-v3-reviewed.json

## 集計

- 修正件数: 30
- 削除件数: 5
- 追加件数: 6
- ゲーム内検証待ち件数: 7
- 実装判断待ち件数: 13

## 修正内容一覧

- Blaze / attackSpeedUp: HP50%以下条件、攻撃速度+20%、5秒、30秒CDを明示
- Blaze / criticalRateUp: HP50%以下条件、急所率+10%、5秒、30秒CDを明示
- Blaze / hpThreshold: HP50%以下条件は攻撃速度上昇と急所率上昇だけに関連付ける
- Blaze / stackOrMark: 火種はHP50%以下条件とは無関係。説明文で確定できる付与数・5秒・5スタック消費は残す
- Blaze / wildPokemonRule: 野生ポケモンへの最大HP参照追加ダメージ部分の上限500を明示
- Attack / wildPokemonRule: 通常攻撃の野生ポケモンダメージ上限1000を明示
- Ember / burn: やけど3秒を明示
- Ember / damageOverTime: やけどダメージ3回を明示
- Ember / attackStatChange: やけど付随効果として攻撃・特攻-5%、2秒を明示
- Pyro Ball / burn: やけど3秒を明示
- Pyro Ball / damageOverTime: やけどダメージ3回を明示
- Pyro Ball / attackStatChange: やけど付随効果として攻撃・特攻-5%、2秒を明示
- Blaze Kick / burn: やけど3秒を明示
- Blaze Kick / damageOverTime: やけどダメージ3回を明示
- Blaze Kick / attackStatChange: やけど付随効果として攻撃・特攻-5%、2秒を明示
- Pyro Ball+ / cooldownReduction: 4秒は持続時間ではなく、命中時にFlame ChargeまたはFeintのクールダウンを4秒短縮する即時効果
- Blaze Kick / burn: burn持続時間を3秒へ修正
- Blaze Kick / knockBack: knockBack持続時間0.5秒へ修正
- Blaze Kick / damageOverTime: damageOverTimeは3秒・3回へ修正
- Blaze Kick / criticalGuaranteedOrDisabled: この技本体が必ず急所になる効果として整理
- Blaze Kick / unstoppable: 妨害無効は維持。実装判断待ち
- Blaze Kick / movementDisplacement: formChangeではなく、Blaze Kick後の後方ジャンプとして整理。実装判断待ち
- Flame Charge+ / nextBoostedAttack: この技の後の次の強化通常攻撃が対象
- Feint / invincible: 無敵0.73秒。実装判断待ち
- Feint / movementSpeedUp: 移動速度上昇40%、2秒へ修正。実装判断待ち
- Feint+ / healing: 次の3回の通常攻撃で、与えたダメージの30%分HPを回復。時間制ではなく回数制
- Blazing Bicycle Kick / hpReferenceDamage: 相手の減少HP14%は残し、現在は本体ダメージ反映後HP参照が有力仮説。丸め・防御補正段階はゲーム内検証待ち
- Blazing Bicycle Kick / unstoppable: 妨害無効は維持。実装判断待ち
- Blazing Bicycle Kick / movementSpeedUp: ユナイト技命中時の移動速度10%上昇は維持。実装判断待ち
- Blazing Bicycle Kick Unite Buff / shield: 最大HP20%分のシールド、持続6秒へ整理

## 削除した誤抽出一覧

- Blaze Kick / hindranceResistance: 原文に妨害耐性を得る根拠がないため削除。unstoppableは別効果として維持
- Feint / slow: 相手へslow付与ではなく、自分にかかっている移動速度低下を解除する効果のため削除
- Feint / cleanse: 全状態異常解除と誤解されるため削除し、slow解除に限定した効果として追加
- Feint+ / damageDealtChange: Feint Plus固有の与ダメージ変化ではなく、回復量説明の一部のため削除
- Blazing Bicycle Kick Unite Buff / maxHpChange: 最大HPそのものを変える効果ではなく、最大HP参照のシールド付与のため削除

## 追加した不足効果一覧

- Attack Boosted / wildPokemonRule: 強化通常攻撃の野生ポケモンダメージ上限1300を追加
- Flame Charge+ / slow: Flame Charge+の次強化通常攻撃による移動速度30%低下・2秒を追加
- Feint / slowCleanse: slow付与ではなく、少なくともslow解除に限定した効果として再分類
- Feint+ / criticalGuaranteedOrDisabled: Feint+の次3回通常攻撃は急所不可を追加
- Blazing Bicycle Kick Unite Buff / movementSpeedUp: Unite Buffの移動速度30%上昇・6秒を追加
- Blazing Bicycle Kick Unite Buff / attackSpeedUp: Unite Buffの攻撃速度35%上昇・6秒を追加

## ゲーム内検証待ち一覧

- Blaze / stackOrMark: 火種5つ目を付けた攻撃本体と追加ダメージの処理順 / 5つを超える付与が発生した場合の余剰処理 / 発動後にスタックが完全に0へ戻るか / 複数対象ごとに独立して保持されるか / 火種の正確な保持・更新ルール
- Blaze / wildPokemonRule: 防御計算前か後か / 急所時の上限処理 / Blazeの500上限が最大HP参照部分だけに適用されることの実測確認
- Attack / wildPokemonRule: 防御計算前か後か / 急所時の上限処理 / 通常攻撃1000の適用段階
- Attack Boosted / wildPokemonRule: 防御計算前か後か / 急所時の上限処理 / 強化通常攻撃1300の適用段階
- Feint+ / healing: 3回の通常攻撃効果に時間切れがあるか / 空振りで回数を消費するか
- Feint+ / criticalGuaranteedOrDisabled: 3回の通常攻撃効果に時間切れがあるか / 空振りで回数を消費するか
- Blazing Bicycle Kick / hpReferenceDamage: 本体ダメージ反映後HP参照で同条件3回の実測が一致するか / 本体ダメージ後HP参照の場合の丸め処理の段階 / 防御補正を追加ダメージへ適用する段階 / 命中前の自然回復・別攻撃・回復技によるHP変化がどう反映されるか

## 実装判断待ち一覧

- Pyro Ball+ / cooldownReduction: 4秒は持続時間ではなく、命中時にFlame ChargeまたはFeintのクールダウンを4秒短縮する即時効果
- Blaze Kick / knockBack: knockBack持続時間0.5秒へ修正
- Blaze Kick / unstoppable: 妨害無効は維持。実装判断待ち
- Blaze Kick / movementDisplacement: formChangeではなく、Blaze Kick後の後方ジャンプとして整理。実装判断待ち
- Flame Charge+ / nextBoostedAttack: この技の後の次の強化通常攻撃が対象
- Flame Charge+ / slow: Flame Charge+の次強化通常攻撃による移動速度30%低下・2秒を追加
- Feint / invincible: 無敵0.73秒。実装判断待ち
- Feint / movementSpeedUp: 移動速度上昇40%、2秒へ修正。実装判断待ち
- Feint / slowCleanse: slow付与ではなく、少なくともslow解除に限定した効果として再分類
- Blazing Bicycle Kick / unstoppable: 妨害無効は維持。実装判断待ち
- Blazing Bicycle Kick / movementSpeedUp: ユナイト技命中時の移動速度10%上昇は維持。実装判断待ち
- Blazing Bicycle Kick Unite Buff / movementSpeedUp: Unite Buffの移動速度30%上昇・6秒を追加
- Blazing Bicycle Kick Unite Buff / attackSpeedUp: Unite Buffの攻撃速度35%上昇・6秒を追加

## 人間確認メモの反映対応表

| 対象 | 反映内容 |
| --- | --- |
| Blaze attackSpeedUp / criticalRateUp / hpThreshold | HP50%以下条件を攻撃速度+20%・急所率+10%だけへ関連付け |
| Blaze stackOrMark | 火種の確定情報を残し、処理順・余剰・対象別保持などをゲーム内検証待ちへ分類 |
| Blaze wildPokemonRule | 最大HP参照追加ダメージの野生上限500を明示し、適用段階は検証待ち |
| Attack / Attack Boosted | 野生ポケモン上限1000/1300を分離 |
| Ember / Pyro Ball / Blaze Kick | やけど3秒、3回ダメージ、攻撃・特攻-5%・2秒をやけど付随効果として整理 |
| Pyro Ball+ | 4秒を持続時間ではなく即時クールダウン短縮として整理 |
| Blaze Kick | knockBack 0.5秒、burn 3秒、damageOverTime 3回、hindranceResistance削除、急所確定を技本体効果として整理 |
| Flame Charge+ | 次の強化通常攻撃に移動速度30%低下・2秒を追加 |
| Feint | slow付与ではなくslow解除へ再分類。移動速度+40%・2秒、無敵0.73秒を整理 |
| Feint+ | damageDealtChange削除、次3回通常攻撃の30%回復と急所不可を整理 |
| Blazing Bicycle Kick | 減少HP14%は残し、参照タイミングは本体ダメージ反映後HP参照が有力仮説。丸め・防御補正段階は検証待ち |
| Blazing Bicycle Kick Unite Buff | 持続6秒、移動速度+30%、攻撃速度+35%、最大HP20%シールドへ整理し、maxHpChange削除 |

## 注意

- このファイルは調査データの人間確認反映であり、アプリ本体実装ではない。
- `pokemonData.js`、計算処理、UI、v1/v2/v3元調査JSONは変更していない。

## 2026-06-28 update: Blazing Bicycle Kick additional verification

- Conditions: Cinderace Lv15 vs Pikachu Lv15. Held items and emblems were blank in the memo. Critical hit is unknown, but likely non-critical.
- Observation 1: From full target HP, Unite move displayed 1490 damage.
- Observation 2: From target HP 4873, Unite move displayed 1632 damage.
- Observation 3: From target HP 3241, Unite move displayed 1795 damage, plus a separate 726 display. The separate 726 is likely Blaze/Flare passive damage.
- Interpretation: The Unite move display is treated as main Unite damage plus the missing-HP additional damage combined into one number.
- HP 4873 check: missing HP = 6300 - 4873 = 1427. 1427 * 14% with defense modifier is about 142. 1490 + 142 = 1632.
- HP 3241 check: missing HP = 6300 - 3241 = 3059. 3059 * 14% with defense modifier is about 305 to 306. 1490 + 305 to 306 = 1795 to 1796, close to the observed 1795.
- If HP after applying main damage were used, the additional damage would be too large. As of 2026-06-28, use HP at hit time before applying main Unite damage as the measured working rule.
- Still needs recheck: rounding order, defense modifier stage, critical-hit interaction, and whether other damage/healing before hit follows the same rule.
- Implementation note: If connected to calculation logic later, use enemy.currentHp at hit time rather than cast-time HP, then apply main damage and additional damage. This update did not connect the rule to calculation code.

## 2026-06-28 update: Blazing Bicycle Kick source formula mismatch

- Source formula is still recorded as main = 247% Atk + 14 x (Level - 1) + 670, execute = 14% of enemy missing HP.
- Measured full-HP damage: Lv9 Cinderace vs Lv15 Pikachu = 1093.
- Measured full-HP damage: Lv15 Cinderace vs Lv15 Pikachu = 1490.
- Current known formula with standard defense correction does not reproduce the measured main damage.
- The measured values appear roughly 10% higher than expected, but the cause is unknown.
- Do not change the source formula yet.
- For in-game reproduction, prefer measured damage while keeping the source formula as unresolved.

## 2026-06-28 update: Blazing Bicycle Kick formula conflict cleanup

- Current sourceFormula cannot reproduce the measured main damage.
- Therefore, if sourceFormula is used, second and later total damage values cannot be reproduced either. The previous HP loss becomes too small, so the missing-HP additional damage also becomes too small.
- When the first measured main damage is used as the base, the increase on later uses is consistent with 14% target missing HP at hit time plus defense modifier.
- Main formula status: conflict / needsCorrection.
- Additional damage formula status: measuredCandidate.
- Additional damage timing status: measuredCandidate.
- Site reproduction needs measured main damage or a measuredFormulaCandidate.
- Do not change sourceFormula yet.

## 2026-06-28 update: Blazing Bicycle Kick measured main and defense check

- Full-HP target checks are treated as main final damage checks because missing-HP additional damage is 0.
- Cinderace Lv15 vs Pikachu Lv15 defense 240: measured 1490, inverse raw 2086.0.
- Cinderace Lv15 vs Greninja Lv15 defense 250: measured 1471, inverse raw about 2083.9.
- Cinderace Lv15 vs Cinderace Lv15 defense 268: measured 1437, inverse raw about 2078.9.
- These three points are broadly consistent with the standard defense formula: final = floor(raw * 600 / (defense + 600)).
- The main problem is likely the sourceFormula raw damage, not the standard defense correction.
- Current sourceFormula raw at Lv15 is 1898, but measured inverse raw is about 2079 to 2086.
- Additional damage validation: 1632 - 1490 = 142 and 1795 - 1490 = 305. These match 14% target missing HP plus defense correction when measured main final damage 1490 is used as the base.
- Therefore: main formula = conflict / needsCorrection, additional damage formula = measuredCandidate, additional damage timing = measuredCandidate.
- Source formula is not changed yet. Site reproduction needs measured main damage or a measuredFormulaCandidate.
