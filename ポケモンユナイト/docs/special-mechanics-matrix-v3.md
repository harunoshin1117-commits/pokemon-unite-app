# 特殊効果 横断マトリクス v3

v3は、Unite-DB `pokemon.json` の `skills[]`、`skills[].upgrades[]`、強化通常攻撃、Plus/Enhanced効果、Unite Buffを列挙してから、効果単位で特殊効果を抽出したドラフトです。

調査日: 2026-06-25
出典: https://unite-db.com/pokemon.json

## 集計

- 対象ポケモン数: 95
- 調査対象ソース数: 1377
- 特殊効果数: 2653
- 特殊効果0件のソース数: 292
- 未取得技数: 0
- v2から追加されたソース数: 995

## ポケモンごとのソース数

| ポケモン | ソース数 | 特殊効果数 | 未取得 |
| --- | ---: | ---: | ---: |
| Absol | 15 | 36 | 0 |
| Aegislash | 15 | 45 | 0 |
| Alcremie | 15 | 28 | 0 |
| Armarouge | 15 | 30 | 0 |
| Articuno | 11 | 23 | 0 |
| Azumarill | 15 | 26 | 0 |
| Blastoise | 15 | 36 | 0 |
| Blaziken | 17 | 21 | 0 |
| Blissey | 15 | 29 | 0 |
| Buzzwole | 15 | 38 | 0 |
| Ceruledge | 15 | 27 | 0 |
| Chandelure | 15 | 29 | 0 |
| Charizard | 15 | 41 | 0 |
| Mega Charizard X | 11 | 29 | 0 |
| Mega Charizard Y | 11 | 31 | 0 |
| Cinderace | 15 | 39 | 0 |
| Clefable | 15 | 16 | 0 |
| Comfey | 15 | 35 | 0 |
| Cramorant | 15 | 23 | 0 |
| Crustle | 15 | 34 | 0 |
| Darkrai | 15 | 34 | 0 |
| Decidueye | 15 | 28 | 0 |
| Delphox | 15 | 10 | 0 |
| Dhelmise | 15 | 27 | 0 |
| Dodrio | 15 | 41 | 0 |
| Dragapult | 15 | 40 | 0 |
| Dragonite | 15 | 30 | 0 |
| Duraludon | 15 | 46 | 0 |
| Eldegoss | 15 | 32 | 0 |
| Empoleon | 15 | 36 | 0 |
| Espeon | 15 | 25 | 0 |
| Falinks | 15 | 35 | 0 |
| Feraligatr | 11 | 17 | 0 |
| Garchomp | 15 | 42 | 0 |
| Gardevoir | 15 | 21 | 0 |
| Gengar | 15 | 28 | 0 |
| Glaceon | 15 | 25 | 0 |
| Goodra | 15 | 33 | 0 |
| Greedent | 15 | 21 | 0 |
| Greninja | 15 | 29 | 0 |
| Gyarados | 15 | 24 | 0 |
| Mega Gyarados | 11 | 21 | 0 |
| Ho-Oh | 15 | 32 | 0 |
| Hoopa | 15 | 23 | 0 |
| Inteleon | 15 | 24 | 0 |
| Lapras | 15 | 24 | 0 |
| Latias | 15 | 20 | 0 |
| Latios | 15 | 22 | 0 |
| Leafeon | 15 | 18 | 0 |
| Lucario | 15 | 35 | 0 |
| Mega Lucario | 11 | 22 | 0 |
| Machamp | 15 | 33 | 0 |
| Mamoswine | 15 | 31 | 0 |
| Meganium | 11 | 13 | 0 |
| Meowscarada | 15 | 34 | 0 |
| Meowth | 15 | 23 | 0 |
| Metagross | 15 | 23 | 0 |
| Mew | 15 | 38 | 0 |
| Mega Mewtwo X | 15 | 37 | 0 |
| Mega Mewtwo Y | 15 | 35 | 0 |
| Mimikyu | 15 | 33 | 0 |
| Miraidon | 15 | 24 | 0 |
| Moltres | 11 | 18 | 0 |
| Mr. Mime | 15 | 33 | 0 |
| Ninetales | 15 | 28 | 0 |
| Pawmot | 15 | 32 | 0 |
| Pikachu | 15 | 28 | 0 |
| Psyduck | 15 | 34 | 0 |
| Quaquaval | 11 | 18 | 0 |
| Raichu | 15 | 24 | 0 |
| Rapidash | 15 | 21 | 0 |
| Sableye | 15 | 28 | 0 |
| Scizor | 13 | 20 | 0 |
| Scyther | 13 | 18 | 0 |
| Sirfetch'd | 15 | 22 | 0 |
| Skeledirge | 11 | 4 | 0 |
| Slowbro | 15 | 39 | 0 |
| Snorlax | 15 | 36 | 0 |
| Suicune | 15 | 27 | 0 |
| Sylveon | 15 | 25 | 0 |
| Talonflame | 15 | 22 | 0 |
| Tinkaton | 15 | 24 | 0 |
| Trevenant | 15 | 30 | 0 |
| Tsareena | 15 | 15 | 0 |
| Typhlosion | 11 | 18 | 0 |
| Tyranitar | 15 | 25 | 0 |
| Umbreon | 15 | 32 | 0 |
| Urshifu | 17 | 36 | 0 |
| Vaporeon | 15 | 21 | 0 |
| Venusaur | 15 | 27 | 0 |
| Wigglytuff | 15 | 31 | 0 |
| Zacian | 15 | 29 | 0 |
| Zapdos | 11 | 21 | 0 |
| Zeraora | 15 | 35 | 0 |
| Zoroark | 15 | 27 | 0 |

## 効果一覧

| ポケモン | ソース | 種類 | Lv | Plus | 効果タイプ | 要約 | 対象 | 持続 | battleState理由 | 確認 |
| --- | --- | --- | ---: | --- | --- | --- | --- | ---: | --- | --- |
| Absol | Super Luck | passive |  |  | criticalRateUp | 急所率を上げる。 | self |  | durationOrBuffDebuff | unconfirmed |
| Absol | Attack | normalAttack |  |  | defenseStatChange | 防御・特防を変化させる。 | unconfirmed | 2 | durationOrBuffDebuff | unconfirmed |
| Absol | Attack | normalAttack |  |  | boostedAttackCycle | 通常攻撃回数により強化攻撃になる。 | unconfirmed | 2 | actionOrderOrCooldown | unconfirmed |
| Absol | Attack Boosted | boostedAttack |  |  | defenseStatChange | 防御・特防を変化させる。 | enemy | 2 | durationOrBuffDebuff | unconfirmed |
| Absol | Attack Boosted | boostedAttack |  |  | boostedAttackCycle | 通常攻撃回数により強化攻撃になる。 | enemy | 2 | actionOrderOrCooldown | unconfirmed |
| Absol | Feint | initialMove |  |  | attackSpeedUp | 通常攻撃速度を上げる。 | self | 0.5 | durationOrBuffDebuff | unconfirmed |
| Absol | Feint | initialMove |  |  | shield | シールドを付与する。 | self |  | durationOrBuffDebuff | unconfirmed |
| Absol | Night Slash | moveChoice | 5 |  | attackSpeedUp | 通常攻撃速度を上げる。 | self | 0.5 | durationOrBuffDebuff | unconfirmed |
| Absol | Night Slash | moveChoice | 5 |  | criticalRateUp | 急所率を上げる。 | enemy |  | durationOrBuffDebuff | unconfirmed |
| Absol | Night Slash | moveChoice | 5 |  | hpReferenceDamage | 現在HP・最大HP・減少HPなどを参照する。 | enemy |  | hpState | unconfirmed |
| Absol | Night Slash | moveChoice | 5 |  | formChange | フォーム・モード・構えを変化させる。 | self |  | formOrMode | unconfirmed |
| Absol | Night Slash | moveChoice | 5 |  | reuseOrSecondActivation | 再使用・派生・2段目を持つ。 | unconfirmed | 6 | actionOrderOrCooldown | unconfirmed |
| Absol | Night Slash+ | movePlus | 5 | yes | damageDealtChange | 与ダメージを変化させる。 | unconfirmed |  | durationOrBuffDebuff | unconfirmed |
| Absol | Night Slash+ | movePlus | 5 | yes | lifestealOrDamageHeal | 与ダメージに応じて回復する。 | unconfirmed |  | hpState | unconfirmed |
| Absol | Pursuit | moveChoice | 5 |  | cooldownReduction | 待ち時間を短縮する。 | enemy |  | actionOrderOrCooldown | unconfirmed |
| Absol | Pursuit | moveChoice | 5 |  | nextBoostedAttack | 次の通常攻撃または強化攻撃を準備する。 | unconfirmed | 3 | actionOrderOrCooldown | unconfirmed |
| Absol | Slash | initialMove |  |  | criticalRateUp | 急所率を上げる。 | self |  | durationOrBuffDebuff | unconfirmed |
| Absol | Psycho Cut | moveChoice | 7 |  | knockUp | 相手を打ち上げる。 | enemy | 2 |  | unconfirmed |
| Absol | Psycho Cut | moveChoice | 7 |  | damageDealtChange | 与ダメージを変化させる。 | enemy |  | durationOrBuffDebuff | unconfirmed |
| Absol | Psycho Cut | moveChoice | 7 |  | damageOverTime | 継続ダメージを与える。 | enemy | 2 | durationOrBuffDebuff | unconfirmed |
| Absol | Psycho Cut | moveChoice | 7 |  | stackOrMark | スタック、マーク、ゲージを扱う。 | enemy | 5 | targetOrSelfStack | unconfirmed |
| Absol | Psycho Cut | moveChoice | 7 |  | formChange | フォーム・モード・構えを変化させる。 | enemy |  | formOrMode | unconfirmed |
| Absol | Psycho Cut | moveChoice | 7 |  | cleanse | 状態異常や低下効果を解除する。 | self |  | durationOrBuffDebuff | unconfirmed |
| Absol | Psycho Cut+ | movePlus | 7 | yes | movementSpeedUp | 移動速度を上げる。 | enemy |  | durationOrBuffDebuff | unconfirmed |
| Absol | Psycho Cut+ | movePlus | 7 | yes | stackOrMark | スタック、マーク、ゲージを扱う。 | enemy |  | targetOrSelfStack | unconfirmed |
| Absol | Sucker Punch | moveChoice | 7 |  | knockBack | 相手を押し出す。 | enemy |  |  | unconfirmed |
| Absol | Sucker Punch | moveChoice | 7 |  | unstoppable | 妨害無効になる。 | enemy | 1 | durationOrBuffDebuff | unconfirmed |
| Absol | Sucker Punch | moveChoice | 7 |  | delayedDamage | 遅延または時間差でダメージを与える。 | enemy | 1 | durationOrBuffDebuff | unconfirmed |
| Absol | Sucker Punch | moveChoice | 7 |  | stackOrMark | スタック、マーク、ゲージを扱う。 | enemy | 1 | targetOrSelfStack | unconfirmed |
| Absol | Sucker Punch | moveChoice | 7 |  | formChange | フォーム・モード・構えを変化させる。 | enemy | 1 | formOrMode | unconfirmed |
| Absol | Sucker Punch+ | movePlus | 7 | yes | attackSpeedUp | 通常攻撃速度を上げる。 | self | 3 | durationOrBuffDebuff | unconfirmed |
| Absol | Midnight Slash | uniteMove | 9 |  | knockBack | 相手を押し出す。 | enemy |  |  | unconfirmed |
| Absol | Midnight Slash | uniteMove | 9 |  | unstoppable | 妨害無効になる。 | enemy | 1.15 | durationOrBuffDebuff | unconfirmed |
| Absol | Midnight Slash | uniteMove | 9 |  | untargetableOrStealth | 対象指定されない、またはステルス状態になる。 | enemy | 1.15 | durationOrBuffDebuff | unconfirmed |
| Absol | Midnight Slash Unite Buff | uniteBuff | 9 |  | shield | シールドを付与する。 | self |  | durationOrBuffDebuff | unconfirmed |
| Absol | Midnight Slash Unite Buff | uniteBuff | 9 |  | maxHpChange | 最大HPを変化させる。 | unconfirmed |  | hpState | unconfirmed |
| Aegislash | No Guard | passive |  |  | formChange | フォーム・モード・構えを変化させる。 | self |  | formOrMode | unconfirmed |
| Aegislash | Attack | normalAttack |  |  | stun | 行動不能・スタンを付与する。 | enemy | 0.1 | durationOrBuffDebuff | unconfirmed |
| Aegislash | Attack | normalAttack |  |  | cooldownReduction | 待ち時間を短縮する。 | unconfirmed | 1 | actionOrderOrCooldown | unconfirmed |
| Aegislash | Attack | normalAttack |  |  | healing | HPを回復する。 | self | 1 | hpState | unconfirmed |
| Aegislash | Attack | normalAttack |  |  | shield | シールドを付与する。 | enemy | 0.1 | durationOrBuffDebuff | unconfirmed |
| Aegislash | Attack | normalAttack |  |  | stackOrMark | スタック、マーク、ゲージを扱う。 | unconfirmed |  | targetOrSelfStack | unconfirmed |
| Aegislash | Attack | normalAttack |  |  | nextBoostedAttack | 次の通常攻撃または強化攻撃を準備する。 | unconfirmed |  | actionOrderOrCooldown | unconfirmed |
| Aegislash | Attack | normalAttack |  |  | boostedAttackCycle | 通常攻撃回数により強化攻撃になる。 | unconfirmed |  | actionOrderOrCooldown | unconfirmed |
| Aegislash | Attack | normalAttack |  |  | formChange | フォーム・モード・構えを変化させる。 | enemy | 0.1 | formOrMode | unconfirmed |
| Aegislash | Attack Boosted | boostedAttack |  |  | stun | 行動不能・スタンを付与する。 | enemy |  | durationOrBuffDebuff | unconfirmed |
| Aegislash | Attack Boosted | boostedAttack |  |  | healing | HPを回復する。 | enemy |  | hpState | unconfirmed |
| Aegislash | Attack Boosted | boostedAttack |  |  | shield | シールドを付与する。 | enemy |  | durationOrBuffDebuff | unconfirmed |
| Aegislash | Attack Boosted | boostedAttack |  |  | stackOrMark | スタック、マーク、ゲージを扱う。 | unconfirmed |  | targetOrSelfStack | unconfirmed |
| Aegislash | Attack Boosted | boostedAttack |  |  | wildPokemonRule | 野生ポケモン限定の処理を持つ。 | unconfirmed |  | targetType | unconfirmed |
| Aegislash | Attack Boosted | boostedAttack |  |  | formChange | フォーム・モード・構えを変化させる。 | enemy |  | formOrMode | unconfirmed |
| Aegislash | Shadow Sneak | initialMove |  |  | stackOrMark | スタック、マーク、ゲージを扱う。 | enemy |  | targetOrSelfStack | unconfirmed |
| Aegislash | Shadow Sneak | initialMove |  |  | formChange | フォーム・モード・構えを変化させる。 | enemy |  | formOrMode | unconfirmed |
| Aegislash | Sacred Sword | moveChoice | 5 |  | knockUp | 相手を打ち上げる。 | enemy | 0.6 |  | unconfirmed |
| Aegislash | Sacred Sword | moveChoice | 5 |  | damageDealtChange | 与ダメージを変化させる。 | ally |  | durationOrBuffDebuff | unconfirmed |
| Aegislash | Sacred Sword | moveChoice | 5 |  | stackOrMark | スタック、マーク、ゲージを扱う。 | enemy |  | targetOrSelfStack | unconfirmed |
| Aegislash | Sacred Sword | moveChoice | 5 |  | wildPokemonRule | 野生ポケモン限定の処理を持つ。 | enemy |  | targetType | unconfirmed |
| Aegislash | Shadow Claw | moveChoice | 5 |  | knockUp | 相手を打ち上げる。 | enemy | 0.75 |  | unconfirmed |
| Aegislash | Shadow Claw | moveChoice | 5 |  | stackOrMark | スタック、マーク、ゲージを扱う。 | unconfirmed |  | targetOrSelfStack | unconfirmed |
| Aegislash | Shadow Claw+ | movePlus | 5 | yes | criticalRateUp | 急所率を上げる。 | self | 1 | durationOrBuffDebuff | unconfirmed |
| Aegislash | Iron Defense | initialMove |  |  | delayedDamage | 遅延または時間差でダメージを与える。 | unconfirmed | 1 | durationOrBuffDebuff | unconfirmed |
| Aegislash | Iron Defense | initialMove |  |  | stackOrMark | スタック、マーク、ゲージを扱う。 | unconfirmed |  | targetOrSelfStack | unconfirmed |
| Aegislash | Wide Guard | moveChoice | 7 |  | knockBack | 相手を押し出す。 | enemy | 0.6 |  | unconfirmed |
| Aegislash | Wide Guard | moveChoice | 7 |  | slow | 移動速度を下げる。 | enemy | 0.6 | durationOrBuffDebuff | unconfirmed |
| Aegislash | Wide Guard | moveChoice | 7 |  | unstoppable | 妨害無効になる。 | self | 1.2 | durationOrBuffDebuff | unconfirmed |
| Aegislash | Wide Guard | moveChoice | 7 |  | damageReduction | 受けるダメージを軽減する。 | unconfirmed |  | durationOrBuffDebuff | unconfirmed |
| Aegislash | Wide Guard | moveChoice | 7 |  | shield | シールドを付与する。 | self | 1.2 | durationOrBuffDebuff | unconfirmed |
| Aegislash | Wide Guard | moveChoice | 7 |  | stackOrMark | スタック、マーク、ゲージを扱う。 | ally |  | targetOrSelfStack | unconfirmed |
| Aegislash | Wide Guard | moveChoice | 7 |  | formChange | フォーム・モード・構えを変化させる。 | self |  | formOrMode | unconfirmed |
| Aegislash | Wide Guard | moveChoice | 7 |  | reuseOrSecondActivation | 再使用・派生・2段目を持つ。 | unconfirmed |  | actionOrderOrCooldown | unconfirmed |
| Aegislash | Iron Head | moveChoice | 7 |  | shield | シールドを付与する。 | self | 1 | durationOrBuffDebuff | unconfirmed |
| Aegislash | Iron Head | moveChoice | 7 |  | stackOrMark | スタック、マーク、ゲージを扱う。 | ally |  | targetOrSelfStack | unconfirmed |
| Aegislash | Iron Head+ | movePlus | 7 | yes | shield | シールドを付与する。 | self | 3 | durationOrBuffDebuff | unconfirmed |
| Aegislash | Coup de Grace | uniteMove | 9 |  | unstoppable | 妨害無効になる。 | self |  | durationOrBuffDebuff | unconfirmed |
| Aegislash | Coup de Grace | uniteMove | 9 |  | stackOrMark | スタック、マーク、ゲージを扱う。 | enemy |  | targetOrSelfStack | unconfirmed |
| Aegislash | Coup de Grace | uniteMove | 9 |  | hpReferenceDamage | 現在HP・最大HP・減少HPなどを参照する。 | unconfirmed |  | hpState | unconfirmed |
| Aegislash | Coup de Grace | uniteMove | 9 |  | wildPokemonRule | 野生ポケモン限定の処理を持つ。 | unconfirmed |  | targetType | unconfirmed |
| Aegislash | Coup de Grace | uniteMove | 9 |  | koAssistTrigger | KOまたはアシストで発動する。 | enemy |  | koAssistEvent | unconfirmed |
| Aegislash | Coup de Grace Unite Buff | uniteBuff | 9 |  | cooldownReduction | 待ち時間を短縮する。 | unconfirmed |  | actionOrderOrCooldown | unconfirmed |
| Aegislash | Coup de Grace Unite Buff | uniteBuff | 9 |  | shield | シールドを付与する。 | self |  | durationOrBuffDebuff | unconfirmed |
| Aegislash | Coup de Grace Unite Buff | uniteBuff | 9 |  | maxHpChange | 最大HPを変化させる。 | unconfirmed |  | hpState | unconfirmed |
| Alcremie | Aroma Veil | passive |  |  | shield | シールドを付与する。 | ally |  | durationOrBuffDebuff | unconfirmed |
| Alcremie | Aroma Veil | passive |  |  | stackOrMark | スタック、マーク、ゲージを扱う。 | unconfirmed |  | targetOrSelfStack | unconfirmed |
| Alcremie | Attack | normalAttack |  |  | knockUp | 相手を打ち上げる。 | unconfirmed |  |  | unconfirmed |
| Alcremie | Helping Hand | initialMove |  |  | shield | シールドを付与する。 | ally | 3 | durationOrBuffDebuff | unconfirmed |
| Alcremie | Decorate | moveChoice | 4 |  | shield | シールドを付与する。 | ally | 4 | durationOrBuffDebuff | unconfirmed |
| Alcremie | Decorate | moveChoice | 4 |  | stackOrMark | スタック、マーク、ゲージを扱う。 | unconfirmed | 6 | targetOrSelfStack | unconfirmed |
| Alcremie | Decorate+ | movePlus | 4 | yes | shield | シールドを付与する。 | self |  | durationOrBuffDebuff | unconfirmed |
| Alcremie | Recover | moveChoice | 4 |  | movementSpeedUp | 移動速度を上げる。 | ally | 2 | durationOrBuffDebuff | unconfirmed |
| Alcremie | Recover | moveChoice | 4 |  | healing | HPを回復する。 | ally |  | hpState | unconfirmed |
| Alcremie | Recover | moveChoice | 4 |  | stackOrMark | スタック、マーク、ゲージを扱う。 | ally |  | targetOrSelfStack | unconfirmed |
| Alcremie | Charm | initialMove |  |  | stackOrMark | スタック、マーク、ゲージを扱う。 | ally |  | targetOrSelfStack | unconfirmed |
| Alcremie | Dazzling Gleam | moveChoice | 6 |  | stun | 行動不能・スタンを付与する。 | enemy | 0.4 | durationOrBuffDebuff | unconfirmed |
| Alcremie | Dazzling Gleam | moveChoice | 6 |  | slow | 移動速度を下げる。 | unconfirmed |  | durationOrBuffDebuff | unconfirmed |
| Alcremie | Dazzling Gleam | moveChoice | 6 |  | stackOrMark | スタック、マーク、ゲージを扱う。 | enemy | 0.4 | targetOrSelfStack | unconfirmed |
| Alcremie | Sweet Scent | moveChoice | 6 |  | slow | 移動速度を下げる。 | unconfirmed | 3 | durationOrBuffDebuff | unconfirmed |
| Alcremie | Sweet Scent | moveChoice | 6 |  | damageOverTime | 継続ダメージを与える。 | enemy | 0.5 | durationOrBuffDebuff | unconfirmed |
| Alcremie | Sweet Scent | moveChoice | 6 |  | fieldArea | フィールド・設置範囲を生成する。 | area | 3 | durationOrBuffDebuff | unconfirmed |
| Alcremie | Sweet Scent | moveChoice | 6 |  | stackOrMark | スタック、マーク、ゲージを扱う。 | unconfirmed |  | targetOrSelfStack | unconfirmed |
| Alcremie | Sweet Scent+ | movePlus | 6 | yes | slow | 移動速度を下げる。 | unconfirmed | 1.5 | durationOrBuffDebuff | unconfirmed |
| Alcremie | Sweet Scent+ | movePlus | 6 | yes | fieldArea | フィールド・設置範囲を生成する。 | area | 1.5 | durationOrBuffDebuff | unconfirmed |
| Alcremie | Fluffy Cream Supreme | uniteMove | 8 |  | knockUp | 相手を打ち上げる。 | ally |  |  | unconfirmed |
| Alcremie | Fluffy Cream Supreme | uniteMove | 8 |  | unstoppable | 妨害無効になる。 | self | 6 | durationOrBuffDebuff | unconfirmed |
| Alcremie | Fluffy Cream Supreme | uniteMove | 8 |  | healing | HPを回復する。 | ally | 8 | hpState | unconfirmed |
| Alcremie | Fluffy Cream Supreme | uniteMove | 8 |  | shield | シールドを付与する。 | self | 6 | durationOrBuffDebuff | unconfirmed |
| Alcremie | Fluffy Cream Supreme | uniteMove | 8 |  | maxHpChange | 最大HPを変化させる。 | ally | 8 | hpState | unconfirmed |
| Alcremie | Fluffy Cream Supreme Unite Buff | uniteBuff | 8 |  | cooldownReduction | 待ち時間を短縮する。 | unconfirmed |  | actionOrderOrCooldown | unconfirmed |
| Alcremie | Fluffy Cream Supreme Unite Buff | uniteBuff | 8 |  | shield | シールドを付与する。 | self |  | durationOrBuffDebuff | unconfirmed |
| Alcremie | Fluffy Cream Supreme Unite Buff | uniteBuff | 8 |  | maxHpChange | 最大HPを変化させる。 | unconfirmed |  | hpState | unconfirmed |
| Armarouge | Flash Fire | passive |  |  | attackStatChange | 攻撃・特攻などを変化させる。 | enemy | 3 | durationOrBuffDebuff | unconfirmed |
| Armarouge | Flash Fire | passive |  |  | nextBoostedAttack | 次の通常攻撃または強化攻撃を準備する。 | enemy | 3 | actionOrderOrCooldown | unconfirmed |
| Armarouge | Attack - Charcadet | normalAttack |  |  | boostedAttackCycle | 通常攻撃回数により強化攻撃になる。 | unconfirmed |  | actionOrderOrCooldown | unconfirmed |
| Armarouge | Attack - Charcadet Boosted | boostedAttack |  |  | boostedAttackCycle | 通常攻撃回数により強化攻撃になる。 | unconfirmed |  | actionOrderOrCooldown | unconfirmed |
| Armarouge | Incinerate | initialMove |  |  | damageOverTime | 継続ダメージを与える。 | enemy | 4 | durationOrBuffDebuff | unconfirmed |
| Armarouge | Fire Spin | moveChoice | 5 |  | shield | シールドを付与する。 | self |  | durationOrBuffDebuff | unconfirmed |
| Armarouge | Fire Spin | moveChoice | 5 |  | damageOverTime | 継続ダメージを与える。 | enemy | 0.5 | durationOrBuffDebuff | unconfirmed |
| Armarouge | Fire Spin | moveChoice | 5 |  | stackOrMark | スタック、マーク、ゲージを扱う。 | unconfirmed | 6 | targetOrSelfStack | unconfirmed |
| Armarouge | Fire Spin+ | movePlus | 5 | yes | shield | シールドを付与する。 | self |  | durationOrBuffDebuff | unconfirmed |
| Armarouge | Fire Spin+ | movePlus | 5 | yes | stackOrMark | スタック、マーク、ゲージを扱う。 | unconfirmed |  | targetOrSelfStack | unconfirmed |
| Armarouge | Armor Cannon | moveChoice | 5 |  | stun | 行動不能・スタンを付与する。 | enemy | 0.45 | durationOrBuffDebuff | unconfirmed |
| Armarouge | Armor Cannon | moveChoice | 5 |  | defenseStatChange | 防御・特防を変化させる。 | unconfirmed |  | durationOrBuffDebuff | unconfirmed |
| Armarouge | Armor Cannon | moveChoice | 5 |  | formChange | フォーム・モード・構えを変化させる。 | enemy | 0.45 | formOrMode | unconfirmed |
| Armarouge | Will-o-Wisp | initialMove |  |  | burn | やけどを付与する。 | enemy | 2 | durationOrBuffDebuff | unconfirmed |
| Armarouge | Will-o-Wisp | initialMove |  |  | nextBoostedAttack | 次の通常攻撃または強化攻撃を準備する。 | unconfirmed |  | actionOrderOrCooldown | unconfirmed |
| Armarouge | Will-o-Wisp | initialMove |  |  | boostedAttackCycle | 通常攻撃回数により強化攻撃になる。 | unconfirmed |  | actionOrderOrCooldown | unconfirmed |
| Armarouge | Flame Charge | moveChoice | 7 |  | cooldownReduction | 待ち時間を短縮する。 | enemy | 3 | actionOrderOrCooldown | unconfirmed |
| Armarouge | Flame Charge | moveChoice | 7 |  | shield | シールドを付与する。 | enemy | 3 | durationOrBuffDebuff | unconfirmed |
| Armarouge | Flame Charge | moveChoice | 7 |  | stackOrMark | スタック、マーク、ゲージを扱う。 | unconfirmed | 3 | targetOrSelfStack | unconfirmed |
| Armarouge | Psyshock | moveChoice | 7 |  | knockUp | 相手を打ち上げる。 | enemy | 0.7 |  | unconfirmed |
| Armarouge | Psyshock | moveChoice | 7 |  | defenseStatChange | 防御・特防を変化させる。 | enemy | 0.7 | durationOrBuffDebuff | unconfirmed |
| Armarouge | Psyshock | moveChoice | 7 |  | stackOrMark | スタック、マーク、ゲージを扱う。 | unconfirmed | 3 | targetOrSelfStack | unconfirmed |
| Armarouge | Psyshock | moveChoice | 7 |  | formChange | フォーム・モード・構えを変化させる。 | enemy |  | formOrMode | unconfirmed |
| Armarouge | Psykaboom | uniteMove |  |  | stun | 行動不能・スタンを付与する。 | enemy | 1.85 | durationOrBuffDebuff | unconfirmed |
| Armarouge | Psykaboom | uniteMove |  |  | knockUp | 相手を打ち上げる。 | enemy |  |  | unconfirmed |
| Armarouge | Psykaboom | uniteMove |  |  | unstoppable | 妨害無効になる。 | enemy | 1.85 | durationOrBuffDebuff | unconfirmed |
| Armarouge | Psykaboom | uniteMove |  |  | reuseOrSecondActivation | 再使用・派生・2段目を持つ。 | unconfirmed |  | actionOrderOrCooldown | unconfirmed |
| Armarouge | Psykaboom Unite Buff | uniteBuff |  |  | cooldownReduction | 待ち時間を短縮する。 | unconfirmed |  | actionOrderOrCooldown | unconfirmed |
| Armarouge | Psykaboom Unite Buff | uniteBuff |  |  | shield | シールドを付与する。 | self |  | durationOrBuffDebuff | unconfirmed |
| Armarouge | Psykaboom Unite Buff | uniteBuff |  |  | maxHpChange | 最大HPを変化させる。 | unconfirmed |  | hpState | unconfirmed |
| Articuno | Snow Cloak | passive |  |  | freeze | こおり・凍結を付与する。 | unconfirmed | 3 | durationOrBuffDebuff | unconfirmed |
| Articuno | Snow Cloak | passive |  |  | slow | 移動速度を下げる。 | unconfirmed | 3 | durationOrBuffDebuff | unconfirmed |
| Articuno | Snow Cloak | passive |  |  | stackOrMark | スタック、マーク、ゲージを扱う。 | unconfirmed | 3 | targetOrSelfStack | unconfirmed |
| Articuno | Snow Cloak | passive |  |  | formChange | フォーム・モード・構えを変化させる。 | self | 4 | formOrMode | unconfirmed |
| Articuno | Attack | normalAttack |  |  | slow | 移動速度を下げる。 | enemy | 0.3 | durationOrBuffDebuff | unconfirmed |
| Articuno | Icy Wind | initialMove |  |  | freeze | こおり・凍結を付与する。 | enemy |  | durationOrBuffDebuff | unconfirmed |
| Articuno | Icy Wind | initialMove |  |  | stackOrMark | スタック、マーク、ゲージを扱う。 | enemy |  | targetOrSelfStack | unconfirmed |
| Articuno | Blizzard | moveChoice | 5 |  | freeze | こおり・凍結を付与する。 | enemy |  | durationOrBuffDebuff | unconfirmed |
| Articuno | Blizzard | moveChoice | 5 |  | stackOrMark | スタック、マーク、ゲージを扱う。 | enemy |  | targetOrSelfStack | unconfirmed |
| Articuno | Ice Shard | initialMove |  |  | freeze | こおり・凍結を付与する。 | enemy |  | durationOrBuffDebuff | unconfirmed |
| Articuno | Ice Shard | initialMove |  |  | slow | 移動速度を下げる。 | enemy | 2.5 | durationOrBuffDebuff | unconfirmed |
| Articuno | Ice Shard | initialMove |  |  | stackOrMark | スタック、マーク、ゲージを扱う。 | enemy |  | targetOrSelfStack | unconfirmed |
| Articuno | Ice Beam | moveChoice | 7 |  | freeze | こおり・凍結を付与する。 | enemy |  | durationOrBuffDebuff | unconfirmed |
| Articuno | Ice Beam | moveChoice | 7 |  | slow | 移動速度を下げる。 | enemy | 2.5 | durationOrBuffDebuff | unconfirmed |
| Articuno | Ice Beam | moveChoice | 7 |  | stackOrMark | スタック、マーク、ゲージを扱う。 | enemy |  | targetOrSelfStack | unconfirmed |
| Articuno | Ice Beam+ | movePlus | 7 | yes | freeze | こおり・凍結を付与する。 | unconfirmed | 2 | durationOrBuffDebuff | unconfirmed |
| Articuno | Ice Wing Whiteout | uniteMove | 9 |  | unstoppable | 妨害無効になる。 | self |  | durationOrBuffDebuff | unconfirmed |
| Articuno | Ice Wing Whiteout | uniteMove | 9 |  | healing | HPを回復する。 | self |  | hpState | unconfirmed |
| Articuno | Ice Wing Whiteout | uniteMove | 9 |  | shield | シールドを付与する。 | self |  | durationOrBuffDebuff | unconfirmed |
| Articuno | Ice Wing Whiteout | uniteMove | 9 |  | damageOverTime | 継続ダメージを与える。 | unconfirmed |  | durationOrBuffDebuff | unconfirmed |
| Articuno | Ice Wing Whiteout | uniteMove | 9 |  | formChange | フォーム・モード・構えを変化させる。 | ally |  | formOrMode | unconfirmed |
| Articuno | Ice Wing Whiteout Unite Buff | uniteBuff | 9 |  | shield | シールドを付与する。 | self |  | durationOrBuffDebuff | unconfirmed |
| Articuno | Ice Wing Whiteout Unite Buff | uniteBuff | 9 |  | maxHpChange | 最大HPを変化させる。 | unconfirmed |  | hpState | unconfirmed |
| Azumarill | Huge Power | passive |  |  | criticalGuaranteedOrDisabled | 急所確定または急所不可などを持つ。 | enemy |  |  | unconfirmed |
| Azumarill | Attack | normalAttack |  |  | boostedAttackCycle | 通常攻撃回数により強化攻撃になる。 | enemy |  | actionOrderOrCooldown | unconfirmed |
| Azumarill | Attack Boosted | boostedAttack |  |  | boostedAttackCycle | 通常攻撃回数により強化攻撃になる。 | enemy |  | actionOrderOrCooldown | unconfirmed |
| Azumarill | Tackle | initialMove |  |  | stun | 行動不能・スタンを付与する。 | enemy | 0.5 | durationOrBuffDebuff | unconfirmed |
| Azumarill | Play Rough | moveChoice | 6 |  | stun | 行動不能・スタンを付与する。 | enemy | 75 | durationOrBuffDebuff | unconfirmed |
| Azumarill | Play Rough | moveChoice | 6 |  | movementSpeedUp | 移動速度を上げる。 | self |  | durationOrBuffDebuff | unconfirmed |
| Azumarill | Play Rough | moveChoice | 6 |  | nextBoostedAttack | 次の通常攻撃または強化攻撃を準備する。 | unconfirmed | 4 | actionOrderOrCooldown | unconfirmed |
| Azumarill | Play Rough | moveChoice | 6 |  | formChange | フォーム・モード・構えを変化させる。 | enemy | 75 | formOrMode | unconfirmed |
| Azumarill | Play Rough | moveChoice | 6 |  | lifestealOrDamageHeal | 与ダメージに応じて回復する。 | unconfirmed |  | hpState | unconfirmed |
| Azumarill | Play Rough+ | movePlus | 6 | yes | movementSpeedUp | 移動速度を上げる。 | self | 1 | durationOrBuffDebuff | unconfirmed |
| Azumarill | Water Pulse | moveChoice | 6 |  | formChange | フォーム・モード・構えを変化させる。 | self |  | formOrMode | unconfirmed |
| Azumarill | Whirlpool | moveChoice | 4 |  | stackOrMark | スタック、マーク、ゲージを扱う。 | enemy |  | targetOrSelfStack | unconfirmed |
| Azumarill | Whirlpool | moveChoice | 4 |  | wildPokemonRule | 野生ポケモン限定の処理を持つ。 | unconfirmed |  | targetType | unconfirmed |
| Azumarill | Aqua Tail | moveChoice | 4 |  | healing | HPを回復する。 | self |  | hpState | unconfirmed |
| Azumarill | Aqua Tail | moveChoice | 4 |  | shield | シールドを付与する。 | enemy |  | durationOrBuffDebuff | unconfirmed |
| Azumarill | Aqua Tail | moveChoice | 4 |  | formChange | フォーム・モード・構えを変化させる。 | self |  | formOrMode | unconfirmed |
| Azumarill | Aqua Tail | moveChoice | 4 |  | lifestealOrDamageHeal | 与ダメージに応じて回復する。 | unconfirmed |  | hpState | unconfirmed |
| Azumarill | Aqua Tail+ | movePlus | 4 | yes | formChange | フォーム・モード・構えを変化させる。 | self | 0.8 | formOrMode | unconfirmed |
| Azumarill | Belly Bash | uniteMove | 8 |  | knockUp | 相手を打ち上げる。 | enemy |  |  | unconfirmed |
| Azumarill | Belly Bash | uniteMove | 8 |  | unstoppable | 妨害無効になる。 | self |  | durationOrBuffDebuff | unconfirmed |
| Azumarill | Belly Bash | uniteMove | 8 |  | shield | シールドを付与する。 | self | 6 | durationOrBuffDebuff | unconfirmed |
| Azumarill | Belly Bash | uniteMove | 8 |  | hpReferenceDamage | 現在HP・最大HP・減少HPなどを参照する。 | unconfirmed | 6 | hpState | unconfirmed |
| Azumarill | Belly Bash | uniteMove | 8 |  | maxHpChange | 最大HPを変化させる。 | unconfirmed | 6 | hpState | unconfirmed |
| Azumarill | Belly Bash Unite Buff | uniteBuff | 8 |  | cooldownReduction | 待ち時間を短縮する。 | unconfirmed |  | actionOrderOrCooldown | unconfirmed |
| Azumarill | Belly Bash Unite Buff | uniteBuff | 8 |  | shield | シールドを付与する。 | self |  | durationOrBuffDebuff | unconfirmed |
| Azumarill | Belly Bash Unite Buff | uniteBuff | 8 |  | maxHpChange | 最大HPを変化させる。 | unconfirmed |  | hpState | unconfirmed |
| Blastoise | Torrent | passive |  |  | attackStatChange | 攻撃・特攻などを変化させる。 | unconfirmed |  | durationOrBuffDebuff | unconfirmed |
| Blastoise | Torrent | passive |  |  | hpThreshold | HP割合条件で発動する。 | self |  | hpState | unconfirmed |
| Blastoise | Attack | normalAttack |  |  | slow | 移動速度を下げる。 | enemy |  | durationOrBuffDebuff | unconfirmed |
| Blastoise | Attack | normalAttack |  |  | cooldownReduction | 待ち時間を短縮する。 | unconfirmed | 1 | actionOrderOrCooldown | unconfirmed |
| Blastoise | Attack | normalAttack |  |  | boostedAttackCycle | 通常攻撃回数により強化攻撃になる。 | unconfirmed | 1 | actionOrderOrCooldown | unconfirmed |
| Blastoise | Attack | normalAttack |  |  | formChange | フォーム・モード・構えを変化させる。 | self |  | formOrMode | unconfirmed |
| Blastoise | Attack Boosted | boostedAttack |  |  | slow | 移動速度を下げる。 | enemy |  | durationOrBuffDebuff | unconfirmed |
| Blastoise | Attack Boosted | boostedAttack |  |  | formChange | フォーム・モード・構えを変化させる。 | enemy |  | formOrMode | unconfirmed |
| Blastoise | Water Gun | initialMove |  |  | knockBack | 相手を押し出す。 | enemy |  |  | unconfirmed |
| Blastoise | Water Gun | initialMove |  |  | formChange | フォーム・モード・構えを変化させる。 | enemy |  | formOrMode | unconfirmed |
| Blastoise | Hydro Pump | moveChoice | 5 |  | stun | 行動不能・スタンを付与する。 | enemy | 0.1 | durationOrBuffDebuff | unconfirmed |
| Blastoise | Hydro Pump | moveChoice | 5 |  | knockBack | 相手を押し出す。 | enemy |  |  | unconfirmed |
| Blastoise | Hydro Pump | moveChoice | 5 |  | formChange | フォーム・モード・構えを変化させる。 | enemy |  | formOrMode | unconfirmed |
| Blastoise | Hydro Pump+ | movePlus | 5 | yes | damageDealtChange | 与ダメージを変化させる。 | unconfirmed |  | durationOrBuffDebuff | unconfirmed |
| Blastoise | Water Spout | moveChoice | 5 |  | movementSpeedUp | 移動速度を上げる。 | enemy |  | durationOrBuffDebuff | unconfirmed |
| Blastoise | Water Spout | moveChoice | 5 |  | damageOverTime | 継続ダメージを与える。 | enemy | 0.5 | durationOrBuffDebuff | unconfirmed |
| Blastoise | Water Spout+ | movePlus | 5 | yes | damageDealtChange | 与ダメージを変化させる。 | unconfirmed |  | durationOrBuffDebuff | unconfirmed |
| Blastoise | Skull Bash | initialMove |  |  | stun | 行動不能・スタンを付与する。 | enemy | 0.5 | durationOrBuffDebuff | unconfirmed |
| Blastoise | Surf | moveChoice | 7 |  | stun | 行動不能・スタンを付与する。 | enemy | 1.6 | durationOrBuffDebuff | unconfirmed |
| Blastoise | Surf | moveChoice | 7 |  | knockBack | 相手を押し出す。 | enemy | 1.6 |  | unconfirmed |
| Blastoise | Surf | moveChoice | 7 |  | unstoppable | 妨害無効になる。 | self | 1.6 | durationOrBuffDebuff | unconfirmed |
| Blastoise | Surf | moveChoice | 7 |  | hindranceResistance | 妨害耐性を得る。 | self |  | durationOrBuffDebuff | unconfirmed |
| Blastoise | Surf | moveChoice | 7 |  | shield | シールドを付与する。 | self |  | durationOrBuffDebuff | unconfirmed |
| Blastoise | Surf | moveChoice | 7 |  | wallOrTerrain | 壁・地形・草むらなどと相互作用する。 | area |  |  | unconfirmed |
| Blastoise | Surf+ | movePlus | 7 | yes | shield | シールドを付与する。 | self |  | durationOrBuffDebuff | unconfirmed |
| Blastoise | Rapid Spin | moveChoice | 7 |  | pull | 相手を引き寄せる。 | unconfirmed |  |  | unconfirmed |
| Blastoise | Rapid Spin | moveChoice | 7 |  | hindranceResistance | 妨害耐性を得る。 | self |  | durationOrBuffDebuff | unconfirmed |
| Blastoise | Rapid Spin | moveChoice | 7 |  | damageOverTime | 継続ダメージを与える。 | enemy | 0.5 | durationOrBuffDebuff | unconfirmed |
| Blastoise | Rapid Spin | moveChoice | 7 |  | formChange | フォーム・モード・構えを変化させる。 | self | 0.45 | formOrMode | unconfirmed |
| Blastoise | Rapid Spin | moveChoice | 7 |  | reuseOrSecondActivation | 再使用・派生・2段目を持つ。 | unconfirmed | 5 | actionOrderOrCooldown | unconfirmed |
| Blastoise | Rapid Spin+ | movePlus | 7 | yes | defenseStatChange | 防御・特防を変化させる。 | unconfirmed |  | durationOrBuffDebuff | unconfirmed |
| Blastoise | Hydro Typhoon | uniteMove | 9 |  | knockUp | 相手を打ち上げる。 | enemy | 1.1 |  | unconfirmed |
| Blastoise | Hydro Typhoon | uniteMove | 9 |  | unstoppable | 妨害無効になる。 | self | 2 | durationOrBuffDebuff | unconfirmed |
| Blastoise | Hydro Typhoon | uniteMove | 9 |  | shield | シールドを付与する。 | self | 2 | durationOrBuffDebuff | unconfirmed |
| Blastoise | Hydro Typhoon Unite Buff | uniteBuff | 9 |  | shield | シールドを付与する。 | self |  | durationOrBuffDebuff | unconfirmed |
| Blastoise | Hydro Typhoon Unite Buff | uniteBuff | 9 |  | maxHpChange | 最大HPを変化させる。 | unconfirmed |  | hpState | unconfirmed |
| Blaziken | Attack | normalAttack |  |  | attackSpeedUp | 通常攻撃速度を上げる。 | self |  | durationOrBuffDebuff | unconfirmed |
| Blaziken | Aerial Ace | initialMove |  |  | reuseOrSecondActivation | 再使用・派生・2段目を持つ。 | enemy |  | actionOrderOrCooldown | unconfirmed |
| Blaziken | Fire Punch+ | movePlus | 7 | yes | damageDealtChange | 与ダメージを変化させる。 | unconfirmed |  | durationOrBuffDebuff | unconfirmed |
| Blaziken | Overheat | moveChoice | 7 |  | knockBack | 相手を押し出す。 | enemy |  |  | unconfirmed |
| Blaziken | Overheat | moveChoice | 7 |  | stackOrMark | スタック、マーク、ゲージを扱う。 | enemy |  | targetOrSelfStack | unconfirmed |
| Blaziken | Overheat | moveChoice | 7 |  | reuseOrSecondActivation | 再使用・派生・2段目を持つ。 | enemy |  | actionOrderOrCooldown | unconfirmed |
| Blaziken | Overheat+ | movePlus | 7 | yes | damageDealtChange | 与ダメージを変化させる。 | unconfirmed |  | durationOrBuffDebuff | unconfirmed |
| Blaziken | Ember | initialMove |  |  | slow | 移動速度を下げる。 | enemy | 1 | durationOrBuffDebuff | unconfirmed |
| Blaziken | Focus Blast | moveChoice | 5 |  | formChange | フォーム・モード・構えを変化させる。 | enemy | 2 | formOrMode | unconfirmed |
| Blaziken | Blaze Kick | moveChoice | 5 |  | stun | 行動不能・スタンを付与する。 | enemy | 1 | durationOrBuffDebuff | unconfirmed |
| Blaziken | Blaze Kick | moveChoice | 5 |  | knockBack | 相手を押し出す。 | enemy | 2 |  | unconfirmed |
| Blaziken | Blaze Kick | moveChoice | 5 |  | unstoppable | 妨害無効になる。 | self |  | durationOrBuffDebuff | unconfirmed |
| Blaziken | Blaze Kick | moveChoice | 5 |  | wallOrTerrain | 壁・地形・草むらなどと相互作用する。 | enemy | 1 |  | unconfirmed |
| Blaziken | Blaze Kick+ | movePlus | 5 | yes | stun | 行動不能・スタンを付与する。 | unconfirmed | 1.5 | durationOrBuffDebuff | unconfirmed |
| Blaziken | Blaze Kick+ | movePlus | 5 | yes | wallOrTerrain | 壁・地形・草むらなどと相互作用する。 | area | 1.5 |  | unconfirmed |
| Blaziken | Spinning Flame Fist | uniteMove | 8 |  | formChange | フォーム・モード・構えを変化させる。 | enemy | 4 | formOrMode | unconfirmed |
| Blaziken | Spinning Flame Fist Unite Buff | uniteBuff | 8 |  | shield | シールドを付与する。 | self |  | durationOrBuffDebuff | unconfirmed |
| Blaziken | Spinning Flame Fist Unite Buff | uniteBuff | 8 |  | maxHpChange | 最大HPを変化させる。 | unconfirmed |  | hpState | unconfirmed |
| Blaziken | Spinning Flame Kick | uniteMove | 8 |  | formChange | フォーム・モード・構えを変化させる。 | enemy | 4 | formOrMode | unconfirmed |
| Blaziken | Spinning Flame Kick Unite Buff | uniteBuff | 8 |  | shield | シールドを付与する。 | self |  | durationOrBuffDebuff | unconfirmed |
| Blaziken | Spinning Flame Kick Unite Buff | uniteBuff | 8 |  | maxHpChange | 最大HPを変化させる。 | unconfirmed |  | hpState | unconfirmed |
| Blissey | Natural Cure | passive |  |  | cleanse | 状態異常や低下効果を解除する。 | ally | 6 | durationOrBuffDebuff | unconfirmed |
| Blissey | Attack | normalAttack |  |  | nextBoostedAttack | 次の通常攻撃または強化攻撃を準備する。 | unconfirmed |  | actionOrderOrCooldown | unconfirmed |
| Blissey | Attack | normalAttack |  |  | boostedAttackCycle | 通常攻撃回数により強化攻撃になる。 | unconfirmed | 6 | actionOrderOrCooldown | unconfirmed |
| Blissey | Attack Boosted | boostedAttack |  |  | boostedAttackCycle | 通常攻撃回数により強化攻撃になる。 | unconfirmed |  | actionOrderOrCooldown | unconfirmed |
| Blissey | Egg Bomb | moveChoice | 6 |  | knockUp | 相手を打ち上げる。 | enemy | 0.8 |  | unconfirmed |
| Blissey | Egg Bomb | moveChoice | 6 |  | delayedDamage | 遅延または時間差でダメージを与える。 | enemy |  | durationOrBuffDebuff | unconfirmed |
| Blissey | Egg Bomb+ | movePlus | 6 | yes | knockUp | 相手を打ち上げる。 | enemy |  |  | unconfirmed |
| Blissey | Helping Hand | moveChoice | 6 |  | attachToAlly | 味方へ付着または移動する。 | ally | 4 |  | unconfirmed |
| Blissey | Helping Hand+ | movePlus | 6 | yes | attachToAlly | 味方へ付着または移動する。 | ally | 4 |  | unconfirmed |
| Blissey | Heal Pulse | initialMove |  |  | damageOverTime | 継続ダメージを与える。 | ally | 0.5 | durationOrBuffDebuff | unconfirmed |
| Blissey | Heal Pulse | initialMove |  |  | attachToAlly | 味方へ付着または移動する。 | ally | 0.5 |  | unconfirmed |
| Blissey | Soft-Boiled | moveChoice | 4 |  | knockUp | 相手を打ち上げる。 | ally |  |  | unconfirmed |
| Blissey | Soft-Boiled | moveChoice | 4 |  | healing | HPを回復する。 | ally | 1 | hpState | unconfirmed |
| Blissey | Soft-Boiled | moveChoice | 4 |  | attachToAlly | 味方へ付着または移動する。 | ally | 1 |  | unconfirmed |
| Blissey | Safeguard | moveChoice | 4 |  | unstoppable | 妨害無効になる。 | ally | 4 | durationOrBuffDebuff | unconfirmed |
| Blissey | Safeguard | moveChoice | 4 |  | hindranceResistance | 妨害耐性を得る。 | ally |  | durationOrBuffDebuff | unconfirmed |
| Blissey | Safeguard | moveChoice | 4 |  | shield | シールドを付与する。 | ally | 4 | durationOrBuffDebuff | unconfirmed |
| Blissey | Safeguard | moveChoice | 4 |  | attachToAlly | 味方へ付着または移動する。 | ally | 4 |  | unconfirmed |
| Blissey | Safeguard | moveChoice | 4 |  | cleanse | 状態異常や低下効果を解除する。 | ally | 4 | durationOrBuffDebuff | unconfirmed |
| Blissey | Safeguard+ | movePlus | 4 | yes | shield | シールドを付与する。 | self |  | durationOrBuffDebuff | unconfirmed |
| Blissey | Bliss Assistance | uniteMove | 8 |  | knockUp | 相手を打ち上げる。 | enemy | 0.8 |  | unconfirmed |
| Blissey | Bliss Assistance | uniteMove | 8 |  | unstoppable | 妨害無効になる。 | ally |  | durationOrBuffDebuff | unconfirmed |
| Blissey | Bliss Assistance | uniteMove | 8 |  | attackStatChange | 攻撃・特攻などを変化させる。 | ally | 6 | durationOrBuffDebuff | unconfirmed |
| Blissey | Bliss Assistance | uniteMove | 8 |  | damageReduction | 受けるダメージを軽減する。 | ally | 6 | durationOrBuffDebuff | unconfirmed |
| Blissey | Bliss Assistance | uniteMove | 8 |  | shield | シールドを付与する。 | ally |  | durationOrBuffDebuff | unconfirmed |
| Blissey | Bliss Assistance | uniteMove | 8 |  | attachToAlly | 味方へ付着または移動する。 | ally |  |  | unconfirmed |
| Blissey | Bliss Assistance Unite Buff | uniteBuff | 8 |  | cooldownReduction | 待ち時間を短縮する。 | unconfirmed |  | actionOrderOrCooldown | unconfirmed |
| Blissey | Bliss Assistance Unite Buff | uniteBuff | 8 |  | shield | シールドを付与する。 | self |  | durationOrBuffDebuff | unconfirmed |
| Blissey | Bliss Assistance Unite Buff | uniteBuff | 8 |  | maxHpChange | 最大HPを変化させる。 | unconfirmed |  | hpState | unconfirmed |
| Buzzwole | Beast Boost | passive |  |  | movementSpeedUp | 移動速度を上げる。 | enemy | 3 | durationOrBuffDebuff | unconfirmed |
| Buzzwole | Beast Boost | passive |  |  | stackOrMark | スタック、マーク、ゲージを扱う。 | unconfirmed | 10 | targetOrSelfStack | unconfirmed |
| Buzzwole | Beast Boost | passive |  |  | koAssistTrigger | KOまたはアシストで発動する。 | enemy | 3 | koAssistEvent | unconfirmed |
| Buzzwole | Attack | normalAttack |  |  | knockUp | 相手を打ち上げる。 | unconfirmed |  |  | unconfirmed |
| Buzzwole | Attack | normalAttack |  |  | stackOrMark | スタック、マーク、ゲージを扱う。 | enemy |  | targetOrSelfStack | unconfirmed |
| Buzzwole | Attack | normalAttack |  |  | boostedAttackCycle | 通常攻撃回数により強化攻撃になる。 | unconfirmed |  | actionOrderOrCooldown | unconfirmed |
| Buzzwole | Mega Punch | initialMove |  |  | stackOrMark | スタック、マーク、ゲージを扱う。 | enemy |  | targetOrSelfStack | unconfirmed |
| Buzzwole | Lunge | moveChoice | 7 |  | slow | 移動速度を下げる。 | enemy | 2.5 | durationOrBuffDebuff | unconfirmed |
| Buzzwole | Lunge | moveChoice | 7 |  | attackSpeedUp | 通常攻撃速度を上げる。 | self | 2 | durationOrBuffDebuff | unconfirmed |
| Buzzwole | Lunge | moveChoice | 7 |  | stackOrMark | スタック、マーク、ゲージを扱う。 | enemy |  | targetOrSelfStack | unconfirmed |
| Buzzwole | Lunge+ | movePlus | 7 | yes | stackOrMark | スタック、マーク、ゲージを扱う。 | enemy | 2 | targetOrSelfStack | unconfirmed |
| Buzzwole | Smack Down | moveChoice | 7 |  | knockUp | 相手を打ち上げる。 | enemy |  |  | unconfirmed |
| Buzzwole | Smack Down | moveChoice | 7 |  | stackOrMark | スタック、マーク、ゲージを扱う。 | enemy |  | targetOrSelfStack | unconfirmed |
| Buzzwole | Smack Down+ | movePlus | 7 | yes | stackOrMark | スタック、マーク、ゲージを扱う。 | ally |  | targetOrSelfStack | unconfirmed |
| Buzzwole | Fell Stinger | initialMove |  |  | stun | 行動不能・スタンを付与する。 | enemy | 2 | durationOrBuffDebuff | unconfirmed |
| Buzzwole | Fell Stinger | initialMove |  |  | damageDealtChange | 与ダメージを変化させる。 | unconfirmed |  | durationOrBuffDebuff | unconfirmed |
| Buzzwole | Fell Stinger | initialMove |  |  | stackOrMark | スタック、マーク、ゲージを扱う。 | enemy | 2 | targetOrSelfStack | unconfirmed |
| Buzzwole | Fell Stinger | initialMove |  |  | koAssistTrigger | KOまたはアシストで発動する。 | unconfirmed |  | koAssistEvent | unconfirmed |
| Buzzwole | Leech Life | moveChoice | 5 |  | stun | 行動不能・スタンを付与する。 | enemy |  | durationOrBuffDebuff | unconfirmed |
| Buzzwole | Leech Life | moveChoice | 5 |  | unstoppable | 妨害無効になる。 | enemy |  | durationOrBuffDebuff | unconfirmed |
| Buzzwole | Leech Life | moveChoice | 5 |  | damageDealtChange | 与ダメージを変化させる。 | unconfirmed |  | durationOrBuffDebuff | unconfirmed |
| Buzzwole | Leech Life | moveChoice | 5 |  | healing | HPを回復する。 | enemy |  | hpState | unconfirmed |
| Buzzwole | Leech Life | moveChoice | 5 |  | stackOrMark | スタック、マーク、ゲージを扱う。 | unconfirmed |  | targetOrSelfStack | unconfirmed |
| Buzzwole | Leech Life | moveChoice | 5 |  | formChange | フォーム・モード・構えを変化させる。 | enemy |  | formOrMode | unconfirmed |
| Buzzwole | Leech Life+ | movePlus | 5 | yes | damageDealtChange | 与ダメージを変化させる。 | unconfirmed |  | durationOrBuffDebuff | unconfirmed |
| Buzzwole | Leech Life+ | movePlus | 5 | yes | formChange | フォーム・モード・構えを変化させる。 | self |  | formOrMode | unconfirmed |
| Buzzwole | Superpower | moveChoice | 5 |  | unstoppable | 妨害無効になる。 | self |  | durationOrBuffDebuff | unconfirmed |
| Buzzwole | Superpower | moveChoice | 5 |  | damageDealtChange | 与ダメージを変化させる。 | unconfirmed |  | durationOrBuffDebuff | unconfirmed |
| Buzzwole | Superpower | moveChoice | 5 |  | shield | シールドを付与する。 | enemy | 2 | durationOrBuffDebuff | unconfirmed |
| Buzzwole | Superpower | moveChoice | 5 |  | stackOrMark | スタック、マーク、ゲージを扱う。 | unconfirmed |  | targetOrSelfStack | unconfirmed |
| Buzzwole | Superpower+ | movePlus | 5 | yes | cooldownReduction | 待ち時間を短縮する。 | unconfirmed | 3 | actionOrderOrCooldown | unconfirmed |
| Buzzwole | Superpower+ | movePlus | 5 | yes | stackOrMark | スタック、マーク、ゲージを扱う。 | unconfirmed | 3 | targetOrSelfStack | unconfirmed |
| Buzzwole | Ultra Swole Slam | uniteMove | 9 |  | unstoppable | 妨害無効になる。 | self |  | durationOrBuffDebuff | unconfirmed |
| Buzzwole | Ultra Swole Slam | uniteMove | 9 |  | hpReferenceDamage | 現在HP・最大HP・減少HPなどを参照する。 | enemy |  | hpState | unconfirmed |
| Buzzwole | Ultra Swole Slam | uniteMove | 9 |  | wildPokemonRule | 野生ポケモン限定の処理を持つ。 | unconfirmed |  | targetType | unconfirmed |
| Buzzwole | Ultra Swole Slam Unite Buff | uniteBuff | 9 |  | cooldownReduction | 待ち時間を短縮する。 | unconfirmed |  | actionOrderOrCooldown | unconfirmed |
| Buzzwole | Ultra Swole Slam Unite Buff | uniteBuff | 9 |  | shield | シールドを付与する。 | self |  | durationOrBuffDebuff | unconfirmed |
| Buzzwole | Ultra Swole Slam Unite Buff | uniteBuff | 9 |  | maxHpChange | 最大HPを変化させる。 | unconfirmed |  | hpState | unconfirmed |
| Ceruledge | Attack - Charcadet | normalAttack |  |  | boostedAttackCycle | 通常攻撃回数により強化攻撃になる。 | unconfirmed |  | actionOrderOrCooldown | unconfirmed |
| Ceruledge | Attack - Charcadet Boosted | boostedAttack |  |  | boostedAttackCycle | 通常攻撃回数により強化攻撃になる。 | unconfirmed |  | actionOrderOrCooldown | unconfirmed |
| Ceruledge | Bitter Blade | moveChoice | 5 |  | damageDealtChange | 与ダメージを変化させる。 | unconfirmed |  | durationOrBuffDebuff | unconfirmed |
| Ceruledge | Bitter Blade | moveChoice | 5 |  | healing | HPを回復する。 | self |  | hpState | unconfirmed |
| Ceruledge | Bitter Blade | moveChoice | 5 |  | shield | シールドを付与する。 | self | 2 | durationOrBuffDebuff | unconfirmed |
| Ceruledge | Bitter Blade | moveChoice | 5 |  | stackOrMark | スタック、マーク、ゲージを扱う。 | unconfirmed | 2 | targetOrSelfStack | unconfirmed |
| Ceruledge | Bitter Blade | moveChoice | 5 |  | wildPokemonRule | 野生ポケモン限定の処理を持つ。 | unconfirmed |  | targetType | unconfirmed |
| Ceruledge | Bitter Blade | moveChoice | 5 |  | lifestealOrDamageHeal | 与ダメージに応じて回復する。 | unconfirmed |  | hpState | unconfirmed |
| Ceruledge | Bitter Blade+ | movePlus | 5 | yes | damageDealtChange | 与ダメージを変化させる。 | unconfirmed |  | durationOrBuffDebuff | unconfirmed |
| Ceruledge | Psycho Cut | moveChoice | 5 |  | slow | 移動速度を下げる。 | enemy | 3 | durationOrBuffDebuff | unconfirmed |
| Ceruledge | Psycho Cut | moveChoice | 5 |  | cooldownReduction | 待ち時間を短縮する。 | enemy | 0.5 | actionOrderOrCooldown | unconfirmed |
| Ceruledge | Psycho Cut | moveChoice | 5 |  | formChange | フォーム・モード・構えを変化させる。 | enemy | 3 | formOrMode | unconfirmed |
| Ceruledge | Take Down | initialMove |  |  | attackSpeedUp | 通常攻撃速度を上げる。 | self | 3 | durationOrBuffDebuff | unconfirmed |
| Ceruledge | Phantom Force | moveChoice | 7 |  | slow | 移動速度を下げる。 | enemy | 1 | durationOrBuffDebuff | unconfirmed |
| Ceruledge | Phantom Force | moveChoice | 7 |  | cooldownReduction | 待ち時間を短縮する。 | enemy |  | actionOrderOrCooldown | unconfirmed |
| Ceruledge | Phantom Force | moveChoice | 7 |  | shield | シールドを付与する。 | enemy | 1 | durationOrBuffDebuff | unconfirmed |
| Ceruledge | Phantom Force | moveChoice | 7 |  | delayedDamage | 遅延または時間差でダメージを与える。 | enemy | 1 | durationOrBuffDebuff | unconfirmed |
| Ceruledge | Phantom Force | moveChoice | 7 |  | reuseOrSecondActivation | 再使用・派生・2段目を持つ。 | enemy | 1 | actionOrderOrCooldown | unconfirmed |
| Ceruledge | Flame Charge | moveChoice | 7 |  | attackSpeedUp | 通常攻撃速度を上げる。 | self | 3 | durationOrBuffDebuff | unconfirmed |
| Ceruledge | Revenant Rend | uniteMove | 9 |  | stun | 行動不能・スタンを付与する。 | unconfirmed | 0.5 | durationOrBuffDebuff | unconfirmed |
| Ceruledge | Revenant Rend | uniteMove | 9 |  | unstoppable | 妨害無効になる。 | self | 0.5 | durationOrBuffDebuff | unconfirmed |
| Ceruledge | Revenant Rend | uniteMove | 9 |  | damageReduction | 受けるダメージを軽減する。 | unconfirmed | 0.5 | durationOrBuffDebuff | unconfirmed |
| Ceruledge | Revenant Rend | uniteMove | 9 |  | stackOrMark | スタック、マーク、ゲージを扱う。 | enemy | 0.7 | targetOrSelfStack | unconfirmed |
| Ceruledge | Revenant Rend | uniteMove | 9 |  | cleanse | 状態異常や低下効果を解除する。 | self |  | durationOrBuffDebuff | unconfirmed |
| Ceruledge | Revenant Rend Unite Buff | uniteBuff | 9 |  | cooldownReduction | 待ち時間を短縮する。 | unconfirmed |  | actionOrderOrCooldown | unconfirmed |
| Ceruledge | Revenant Rend Unite Buff | uniteBuff | 9 |  | shield | シールドを付与する。 | self |  | durationOrBuffDebuff | unconfirmed |
| Ceruledge | Revenant Rend Unite Buff | uniteBuff | 9 |  | maxHpChange | 最大HPを変化させる。 | unconfirmed |  | hpState | unconfirmed |
| Chandelure | Infiltrator | passive |  |  | defenseStatChange | 防御・特防を変化させる。 | unconfirmed |  | durationOrBuffDebuff | unconfirmed |
| Chandelure | Infiltrator | passive |  |  | damageDealtChange | 与ダメージを変化させる。 | unconfirmed |  | durationOrBuffDebuff | unconfirmed |
| Chandelure | Infiltrator | passive |  |  | stackOrMark | スタック、マーク、ゲージを扱う。 | unconfirmed |  | targetOrSelfStack | unconfirmed |
| Chandelure | Attack | normalAttack |  |  | burn | やけどを付与する。 | enemy | 5 | durationOrBuffDebuff | unconfirmed |
| Chandelure | Attack | normalAttack |  |  | slow | 移動速度を下げる。 | enemy | 5 | durationOrBuffDebuff | unconfirmed |
| Chandelure | Attack Boosted | boostedAttack |  |  | burn | やけどを付与する。 | unconfirmed | 0.5 | durationOrBuffDebuff | unconfirmed |
| Chandelure | Attack Boosted | boostedAttack |  |  | damageOverTime | 継続ダメージを与える。 | unconfirmed | 0.5 | durationOrBuffDebuff | unconfirmed |
| Chandelure | Ember | initialMove |  |  | burn | やけどを付与する。 | unconfirmed | 2 | durationOrBuffDebuff | unconfirmed |
| Chandelure | Ember | initialMove |  |  | slow | 移動速度を下げる。 | unconfirmed | 2 | durationOrBuffDebuff | unconfirmed |
| Chandelure | Ember | initialMove |  |  | damageOverTime | 継続ダメージを与える。 | unconfirmed | 0.5 | durationOrBuffDebuff | unconfirmed |
| Chandelure | Ember | initialMove |  |  | reuseOrSecondActivation | 再使用・派生・2段目を持つ。 | unconfirmed | 5 | actionOrderOrCooldown | unconfirmed |
| Chandelure | Flamethrower | moveChoice | 5 |  | burn | やけどを付与する。 | unconfirmed | 2.5 | durationOrBuffDebuff | unconfirmed |
| Chandelure | Flamethrower | moveChoice | 5 |  | cooldownReduction | 待ち時間を短縮する。 | unconfirmed |  | actionOrderOrCooldown | unconfirmed |
| Chandelure | Flamethrower | moveChoice | 5 |  | damageOverTime | 継続ダメージを与える。 | unconfirmed | 0.5 | durationOrBuffDebuff | unconfirmed |
| Chandelure | Overheat | moveChoice | 5 |  | burn | やけどを付与する。 | unconfirmed | 0.5 | durationOrBuffDebuff | unconfirmed |
| Chandelure | Overheat | moveChoice | 5 |  | knockUp | 相手を打ち上げる。 | unconfirmed |  |  | unconfirmed |
| Chandelure | Overheat | moveChoice | 5 |  | cooldownReduction | 待ち時間を短縮する。 | unconfirmed |  | actionOrderOrCooldown | unconfirmed |
| Chandelure | Overheat | moveChoice | 5 |  | damageOverTime | 継続ダメージを与える。 | unconfirmed | 0.5 | durationOrBuffDebuff | unconfirmed |
| Chandelure | Overheat | moveChoice | 5 |  | reuseOrSecondActivation | 再使用・派生・2段目を持つ。 | unconfirmed |  | actionOrderOrCooldown | unconfirmed |
| Chandelure | Overheat+ | movePlus | 5 | yes | cooldownReduction | 待ち時間を短縮する。 | unconfirmed | 1 | actionOrderOrCooldown | unconfirmed |
| Chandelure | Night Shade | initialMove |  |  | stun | 行動不能・スタンを付与する。 | unconfirmed | 1 | durationOrBuffDebuff | unconfirmed |
| Chandelure | Night Shade | initialMove |  |  | stackOrMark | スタック、マーク、ゲージを扱う。 | unconfirmed | 1 | targetOrSelfStack | unconfirmed |
| Chandelure | Poltergeist | moveChoice | 7 |  | slow | 移動速度を下げる。 | unconfirmed | 1 | durationOrBuffDebuff | unconfirmed |
| Chandelure | Poltergeist+ | movePlus | 7 | yes | slow | 移動速度を下げる。 | unconfirmed | 1 | durationOrBuffDebuff | unconfirmed |
| Chandelure | Imprison | moveChoice | 7 |  | immobilize | 移動不能を付与する。 | enemy | 0.7 | durationOrBuffDebuff | unconfirmed |
| Chandelure | Imprison+ | movePlus | 7 | yes | immobilize | 移動不能を付与する。 | unconfirmed |  | durationOrBuffDebuff | unconfirmed |
| Chandelure | Ignite Midnight | uniteMove | 9 |  | reuseOrSecondActivation | 再使用・派生・2段目を持つ。 | unconfirmed |  | actionOrderOrCooldown | unconfirmed |
| Chandelure | Ignite Midnight Unite Buff | uniteBuff | 9 |  | shield | シールドを付与する。 | self |  | durationOrBuffDebuff | unconfirmed |
| Chandelure | Ignite Midnight Unite Buff | uniteBuff | 9 |  | maxHpChange | 最大HPを変化させる。 | unconfirmed |  | hpState | unconfirmed |
| Charizard | Blaze | passive |  |  | criticalRateUp | 急所率を上げる。 | self |  | durationOrBuffDebuff | unconfirmed |
| Charizard | Blaze | passive |  |  | hpThreshold | HP割合条件で発動する。 | self |  | hpState | unconfirmed |
| Charizard | Attack | normalAttack |  |  | burn | やけどを付与する。 | enemy |  | durationOrBuffDebuff | unconfirmed |
| Charizard | Attack | normalAttack |  |  | slow | 移動速度を下げる。 | unconfirmed |  | durationOrBuffDebuff | unconfirmed |
| Charizard | Attack | normalAttack |  |  | wildPokemonRule | 野生ポケモン限定の処理を持つ。 | unconfirmed |  | targetType | unconfirmed |
| Charizard | Attack | normalAttack |  |  | criticalGuaranteedOrDisabled | 急所確定または急所不可などを持つ。 | unconfirmed |  |  | unconfirmed |
| Charizard | Attack | normalAttack |  |  | lifestealOrDamageHeal | 与ダメージに応じて回復する。 | unconfirmed |  | hpState | unconfirmed |
| Charizard | Attack Boosted | boostedAttack |  |  | lifestealOrDamageHeal | 与ダメージに応じて回復する。 | unconfirmed |  | hpState | unconfirmed |
| Charizard | Flame Burst | initialMove |  |  | burn | やけどを付与する。 | enemy | 4 | durationOrBuffDebuff | unconfirmed |
| Charizard | Flame Burst | initialMove |  |  | movementSpeedUp | 移動速度を上げる。 | self | 3 | durationOrBuffDebuff | unconfirmed |
| Charizard | Flame Burst | initialMove |  |  | damageOverTime | 継続ダメージを与える。 | enemy | 4 | durationOrBuffDebuff | unconfirmed |
| Charizard | Flame Burst | initialMove |  |  | formChange | フォーム・モード・構えを変化させる。 | enemy | 4 | formOrMode | unconfirmed |
| Charizard | Flamethrower | moveChoice | 5 |  | burn | やけどを付与する。 | enemy | 4 | durationOrBuffDebuff | unconfirmed |
| Charizard | Flamethrower | moveChoice | 5 |  | movementSpeedUp | 移動速度を上げる。 | self | 3 | durationOrBuffDebuff | unconfirmed |
| Charizard | Flamethrower | moveChoice | 5 |  | damageOverTime | 継続ダメージを与える。 | enemy | 4 | durationOrBuffDebuff | unconfirmed |
| Charizard | Flamethrower+ | movePlus | 5 | yes | burn | やけどを付与する。 | unconfirmed |  | durationOrBuffDebuff | unconfirmed |
| Charizard | Fire Punch | moveChoice | 5 |  | burn | やけどを付与する。 | enemy | 4 | durationOrBuffDebuff | unconfirmed |
| Charizard | Fire Punch | moveChoice | 5 |  | knockBack | 相手を押し出す。 | enemy |  |  | unconfirmed |
| Charizard | Fire Punch | moveChoice | 5 |  | damageOverTime | 継続ダメージを与える。 | enemy | 4 | durationOrBuffDebuff | unconfirmed |
| Charizard | Fire Spin | initialMove |  |  | damageOverTime | 継続ダメージを与える。 | enemy | 5 | durationOrBuffDebuff | unconfirmed |
| Charizard | Fire Spin | initialMove |  |  | fieldArea | フィールド・設置範囲を生成する。 | enemy | 5 | durationOrBuffDebuff | unconfirmed |
| Charizard | Fire Spin | initialMove |  |  | formChange | フォーム・モード・構えを変化させる。 | enemy |  | formOrMode | unconfirmed |
| Charizard | Fire Blast | moveChoice | 7 |  | burn | やけどを付与する。 | enemy |  | durationOrBuffDebuff | unconfirmed |
| Charizard | Fire Blast | moveChoice | 7 |  | damageOverTime | 継続ダメージを与える。 | enemy | 5 | durationOrBuffDebuff | unconfirmed |
| Charizard | Fire Blast | moveChoice | 7 |  | formChange | フォーム・モード・構えを変化させる。 | enemy |  | formOrMode | unconfirmed |
| Charizard | Fire Blast+ | movePlus | 7 | yes | damageOverTime | 継続ダメージを与える。 | unconfirmed |  | durationOrBuffDebuff | unconfirmed |
| Charizard | Flare Blitz | moveChoice | 7 |  | knockUp | 相手を打ち上げる。 | enemy | 5 |  | unconfirmed |
| Charizard | Flare Blitz | moveChoice | 7 |  | shield | シールドを付与する。 | enemy | 5 | durationOrBuffDebuff | unconfirmed |
| Charizard | Flare Blitz+ | movePlus | 7 | yes | knockUp | 相手を打ち上げる。 | enemy |  |  | unconfirmed |
| Charizard | Seismic Slam | uniteMove | 9 |  | burn | やけどを付与する。 | enemy | 1 | durationOrBuffDebuff | unconfirmed |
| Charizard | Seismic Slam | uniteMove | 9 |  | unstoppable | 妨害無効になる。 | enemy |  | durationOrBuffDebuff | unconfirmed |
| Charizard | Seismic Slam | uniteMove | 9 |  | invincible | 無敵になる。 | enemy |  | durationOrBuffDebuff | unconfirmed |
| Charizard | Seismic Slam | uniteMove | 9 |  | hindranceResistance | 妨害耐性を得る。 | self | 10 | durationOrBuffDebuff | unconfirmed |
| Charizard | Seismic Slam | uniteMove | 9 |  | damageDealtChange | 与ダメージを変化させる。 | unconfirmed |  | durationOrBuffDebuff | unconfirmed |
| Charizard | Seismic Slam | uniteMove | 9 |  | healing | HPを回復する。 | self |  | hpState | unconfirmed |
| Charizard | Seismic Slam | uniteMove | 9 |  | hpReferenceDamage | 現在HP・最大HP・減少HPなどを参照する。 | enemy |  | hpState | unconfirmed |
| Charizard | Seismic Slam | uniteMove | 9 |  | formChange | フォーム・モード・構えを変化させる。 | self | 10 | formOrMode | unconfirmed |
| Charizard | Seismic Slam | uniteMove | 9 |  | wallOrTerrain | 壁・地形・草むらなどと相互作用する。 | area |  |  | unconfirmed |
| Charizard | Seismic Slam | uniteMove | 9 |  | lifestealOrDamageHeal | 与ダメージに応じて回復する。 | unconfirmed |  | hpState | unconfirmed |
| Charizard | Seismic Slam Unite Buff | uniteBuff | 9 |  | shield | シールドを付与する。 | self |  | durationOrBuffDebuff | unconfirmed |
| Charizard | Seismic Slam Unite Buff | uniteBuff | 9 |  | maxHpChange | 最大HPを変化させる。 | unconfirmed |  | hpState | unconfirmed |
| Mega Charizard X | Solar Power | passive |  |  | burn | やけどを付与する。 | enemy |  | durationOrBuffDebuff | unconfirmed |
| Mega Charizard X | Solar Power | passive |  |  | hpReferenceDamage | 現在HP・最大HP・減少HPなどを参照する。 | enemy |  | hpState | unconfirmed |
| Mega Charizard X | Solar Power | passive |  |  | wallOrTerrain | 壁・地形・草むらなどと相互作用する。 | area |  |  | unconfirmed |
| Mega Charizard X | Attack | normalAttack |  |  | burn | やけどを付与する。 | enemy |  | durationOrBuffDebuff | unconfirmed |
| Mega Charizard X | Attack | normalAttack |  |  | slow | 移動速度を下げる。 | unconfirmed |  | durationOrBuffDebuff | unconfirmed |
| Mega Charizard X | Attack | normalAttack |  |  | criticalGuaranteedOrDisabled | 急所確定または急所不可などを持つ。 | unconfirmed |  |  | unconfirmed |
| Mega Charizard X | Attack | normalAttack |  |  | lifestealOrDamageHeal | 与ダメージに応じて回復する。 | unconfirmed |  | hpState | unconfirmed |
| Mega Charizard X | Flame Burst | initialMove |  |  | burn | やけどを付与する。 | enemy | 4 | durationOrBuffDebuff | unconfirmed |
| Mega Charizard X | Flame Burst | initialMove |  |  | movementSpeedUp | 移動速度を上げる。 | self | 3 | durationOrBuffDebuff | unconfirmed |
| Mega Charizard X | Flame Burst | initialMove |  |  | damageOverTime | 継続ダメージを与える。 | enemy | 4 | durationOrBuffDebuff | unconfirmed |
| Mega Charizard X | Flame Burst | initialMove |  |  | formChange | フォーム・モード・構えを変化させる。 | enemy | 4 | formOrMode | unconfirmed |
| Mega Charizard X | Fire Punch | moveChoice | 5 |  | burn | やけどを付与する。 | enemy | 4 | durationOrBuffDebuff | unconfirmed |
| Mega Charizard X | Fire Punch | moveChoice | 5 |  | damageOverTime | 継続ダメージを与える。 | enemy | 4 | durationOrBuffDebuff | unconfirmed |
| Mega Charizard X | Fire Punch | moveChoice | 5 |  | formChange | フォーム・モード・構えを変化させる。 | enemy |  | formOrMode | unconfirmed |
| Mega Charizard X | Fire Punch+ | movePlus | 5 | yes | burn | やけどを付与する。 | unconfirmed |  | durationOrBuffDebuff | unconfirmed |
| Mega Charizard X | Fire Spin | initialMove |  |  | damageOverTime | 継続ダメージを与える。 | enemy | 5 | durationOrBuffDebuff | unconfirmed |
| Mega Charizard X | Fire Spin | initialMove |  |  | fieldArea | フィールド・設置範囲を生成する。 | enemy | 5 | durationOrBuffDebuff | unconfirmed |
| Mega Charizard X | Fire Spin | initialMove |  |  | formChange | フォーム・モード・構えを変化させる。 | enemy |  | formOrMode | unconfirmed |
| Mega Charizard X | Flare Blitz | moveChoice | 7 |  | knockUp | 相手を打ち上げる。 | enemy | 5 |  | unconfirmed |
| Mega Charizard X | Flare Blitz | moveChoice | 7 |  | cooldownReduction | 待ち時間を短縮する。 | enemy |  | actionOrderOrCooldown | unconfirmed |
| Mega Charizard X | Flare Blitz | moveChoice | 7 |  | shield | シールドを付与する。 | enemy | 5 | durationOrBuffDebuff | unconfirmed |
| Mega Charizard X | Flare Blitz | moveChoice | 7 |  | formChange | フォーム・モード・構えを変化させる。 | enemy |  | formOrMode | unconfirmed |
| Mega Charizard X | Flare Blitz+ | movePlus | 7 | yes | knockUp | 相手を打ち上げる。 | enemy |  |  | unconfirmed |
| Mega Charizard X | Seismic Slam | uniteMove | 9 |  | unstoppable | 妨害無効になる。 | enemy |  | durationOrBuffDebuff | unconfirmed |
| Mega Charizard X | Seismic Slam | uniteMove | 9 |  | invincible | 無敵になる。 | enemy |  | durationOrBuffDebuff | unconfirmed |
| Mega Charizard X | Seismic Slam | uniteMove | 9 |  | hpReferenceDamage | 現在HP・最大HP・減少HPなどを参照する。 | enemy |  | hpState | unconfirmed |
| Mega Charizard X | Seismic Slam | uniteMove | 9 |  | formChange | フォーム・モード・構えを変化させる。 | self |  | formOrMode | unconfirmed |
| Mega Charizard X | Seismic Slam Unite Buff | uniteBuff | 9 |  | shield | シールドを付与する。 | self |  | durationOrBuffDebuff | unconfirmed |
| Mega Charizard X | Seismic Slam Unite Buff | uniteBuff | 9 |  | maxHpChange | 最大HPを変化させる。 | unconfirmed |  | hpState | unconfirmed |
| Mega Charizard Y | Attack | normalAttack |  |  | burn | やけどを付与する。 | enemy |  | durationOrBuffDebuff | unconfirmed |
| Mega Charizard Y | Attack | normalAttack |  |  | slow | 移動速度を下げる。 | unconfirmed |  | durationOrBuffDebuff | unconfirmed |
| Mega Charizard Y | Attack | normalAttack |  |  | criticalGuaranteedOrDisabled | 急所確定または急所不可などを持つ。 | unconfirmed |  |  | unconfirmed |
| Mega Charizard Y | Attack | normalAttack |  |  | lifestealOrDamageHeal | 与ダメージに応じて回復する。 | unconfirmed |  | hpState | unconfirmed |
| Mega Charizard Y | Flame Burst | initialMove |  |  | burn | やけどを付与する。 | enemy | 4 | durationOrBuffDebuff | unconfirmed |
| Mega Charizard Y | Flame Burst | initialMove |  |  | movementSpeedUp | 移動速度を上げる。 | self | 3 | durationOrBuffDebuff | unconfirmed |
| Mega Charizard Y | Flame Burst | initialMove |  |  | damageOverTime | 継続ダメージを与える。 | enemy | 4 | durationOrBuffDebuff | unconfirmed |
| Mega Charizard Y | Flame Burst | initialMove |  |  | formChange | フォーム・モード・構えを変化させる。 | enemy | 4 | formOrMode | unconfirmed |
| Mega Charizard Y | Flamethrower | moveChoice | 5 |  | burn | やけどを付与する。 | enemy | 4 | durationOrBuffDebuff | unconfirmed |
| Mega Charizard Y | Flamethrower | moveChoice | 5 |  | movementSpeedUp | 移動速度を上げる。 | self | 3 | durationOrBuffDebuff | unconfirmed |
| Mega Charizard Y | Flamethrower | moveChoice | 5 |  | damageOverTime | 継続ダメージを与える。 | enemy | 4 | durationOrBuffDebuff | unconfirmed |
| Mega Charizard Y | Flamethrower | moveChoice | 5 |  | formChange | フォーム・モード・構えを変化させる。 | self | 3 | formOrMode | unconfirmed |
| Mega Charizard Y | Flamethrower+ | movePlus | 5 | yes | burn | やけどを付与する。 | unconfirmed |  | durationOrBuffDebuff | unconfirmed |
| Mega Charizard Y | Fire Spin | initialMove |  |  | damageOverTime | 継続ダメージを与える。 | enemy | 5 | durationOrBuffDebuff | unconfirmed |
| Mega Charizard Y | Fire Spin | initialMove |  |  | fieldArea | フィールド・設置範囲を生成する。 | enemy | 5 | durationOrBuffDebuff | unconfirmed |
| Mega Charizard Y | Fire Spin | initialMove |  |  | formChange | フォーム・モード・構えを変化させる。 | enemy |  | formOrMode | unconfirmed |
| Mega Charizard Y | Fire Blast | moveChoice | 7 |  | damageOverTime | 継続ダメージを与える。 | enemy | 5 | durationOrBuffDebuff | unconfirmed |
| Mega Charizard Y | Fire Blast | moveChoice | 7 |  | formChange | フォーム・モード・構えを変化させる。 | enemy |  | formOrMode | unconfirmed |
| Mega Charizard Y | Fire Blast+ | movePlus | 7 | yes | damageOverTime | 継続ダメージを与える。 | unconfirmed |  | durationOrBuffDebuff | unconfirmed |
| Mega Charizard Y | Seismic Slam | uniteMove | 9 |  | burn | やけどを付与する。 | enemy | 1 | durationOrBuffDebuff | unconfirmed |
| Mega Charizard Y | Seismic Slam | uniteMove | 9 |  | unstoppable | 妨害無効になる。 | enemy |  | durationOrBuffDebuff | unconfirmed |
| Mega Charizard Y | Seismic Slam | uniteMove | 9 |  | invincible | 無敵になる。 | enemy |  | durationOrBuffDebuff | unconfirmed |
| Mega Charizard Y | Seismic Slam | uniteMove | 9 |  | hindranceResistance | 妨害耐性を得る。 | self | 15 | durationOrBuffDebuff | unconfirmed |
| Mega Charizard Y | Seismic Slam | uniteMove | 9 |  | damageDealtChange | 与ダメージを変化させる。 | unconfirmed |  | durationOrBuffDebuff | unconfirmed |
| Mega Charizard Y | Seismic Slam | uniteMove | 9 |  | healing | HPを回復する。 | self |  | hpState | unconfirmed |
| Mega Charizard Y | Seismic Slam | uniteMove | 9 |  | hpReferenceDamage | 現在HP・最大HP・減少HPなどを参照する。 | enemy |  | hpState | unconfirmed |
| Mega Charizard Y | Seismic Slam | uniteMove | 9 |  | formChange | フォーム・モード・構えを変化させる。 | self | 15 | formOrMode | unconfirmed |
| Mega Charizard Y | Seismic Slam | uniteMove | 9 |  | wallOrTerrain | 壁・地形・草むらなどと相互作用する。 | area |  |  | unconfirmed |
| Mega Charizard Y | Seismic Slam | uniteMove | 9 |  | lifestealOrDamageHeal | 与ダメージに応じて回復する。 | unconfirmed |  | hpState | unconfirmed |
| Mega Charizard Y | Seismic Slam Unite Buff | uniteBuff | 9 |  | shield | シールドを付与する。 | self |  | durationOrBuffDebuff | unconfirmed |
| Mega Charizard Y | Seismic Slam Unite Buff | uniteBuff | 9 |  | maxHpChange | 最大HPを変化させる。 | unconfirmed |  | hpState | unconfirmed |
| Cinderace | Blaze | passive |  |  | attackSpeedUp | 通常攻撃速度を上げる。 | self | 5 | durationOrBuffDebuff | unconfirmed |
| Cinderace | Blaze | passive |  |  | criticalRateUp | 急所率を上げる。 | self | 5 | durationOrBuffDebuff | unconfirmed |
| Cinderace | Blaze | passive |  |  | stackOrMark | スタック、マーク、ゲージを扱う。 | enemy | 5 | targetOrSelfStack | unconfirmed |
| Cinderace | Blaze | passive |  |  | nextBoostedAttack | 次の通常攻撃または強化攻撃を準備する。 | unconfirmed |  | actionOrderOrCooldown | unconfirmed |
| Cinderace | Blaze | passive |  |  | boostedAttackCycle | 通常攻撃回数により強化攻撃になる。 | unconfirmed |  | actionOrderOrCooldown | unconfirmed |
| Cinderace | Blaze | passive |  |  | hpThreshold | HP割合条件で発動する。 | self | 5 | hpState | unconfirmed |
| Cinderace | Blaze | passive |  |  | wildPokemonRule | 野生ポケモン限定の処理を持つ。 | enemy |  | targetType | unconfirmed |
| Cinderace | Attack | normalAttack |  |  | nextBoostedAttack | 次の通常攻撃または強化攻撃を準備する。 | unconfirmed |  | actionOrderOrCooldown | unconfirmed |
| Cinderace | Attack | normalAttack |  |  | boostedAttackCycle | 通常攻撃回数により強化攻撃になる。 | unconfirmed |  | actionOrderOrCooldown | unconfirmed |
| Cinderace | Attack | normalAttack |  |  | wildPokemonRule | 野生ポケモン限定の処理を持つ。 | unconfirmed |  | targetType | unconfirmed |
| Cinderace | Attack Boosted | boostedAttack |  |  | boostedAttackCycle | 通常攻撃回数により強化攻撃になる。 | unconfirmed |  | actionOrderOrCooldown | unconfirmed |
| Cinderace | Ember | initialMove |  |  | burn | やけどを付与する。 | enemy | 3 | durationOrBuffDebuff | unconfirmed |
| Cinderace | Ember | initialMove |  |  | attackStatChange | 攻撃・特攻などを変化させる。 | enemy | 2 | durationOrBuffDebuff | unconfirmed |
| Cinderace | Ember | initialMove |  |  | damageOverTime | 継続ダメージを与える。 | enemy | 3 | durationOrBuffDebuff | unconfirmed |
| Cinderace | Pyro Ball | moveChoice | 7 |  | burn | やけどを付与する。 | enemy | 3 | durationOrBuffDebuff | unconfirmed |
| Cinderace | Pyro Ball | moveChoice | 7 |  | attackStatChange | 攻撃・特攻などを変化させる。 | enemy | 2 | durationOrBuffDebuff | unconfirmed |
| Cinderace | Pyro Ball | moveChoice | 7 |  | damageOverTime | 継続ダメージを与える。 | enemy | 3 | durationOrBuffDebuff | unconfirmed |
| Cinderace | Pyro Ball+ | movePlus | 7 | yes | cooldownReduction | 待ち時間を短縮する。 | unconfirmed | 4 | actionOrderOrCooldown | unconfirmed |
| Cinderace | Blaze Kick | moveChoice | 7 |  | burn | やけどを付与する。 | enemy | 0.5 | durationOrBuffDebuff | unconfirmed |
| Cinderace | Blaze Kick | moveChoice | 7 |  | knockBack | 相手を押し出す。 | enemy |  |  | unconfirmed |
| Cinderace | Blaze Kick | moveChoice | 7 |  | unstoppable | 妨害無効になる。 | self | 0.5 | durationOrBuffDebuff | unconfirmed |
| Cinderace | Blaze Kick | moveChoice | 7 |  | hindranceResistance | 妨害耐性を得る。 | self |  | durationOrBuffDebuff | unconfirmed |
| Cinderace | Blaze Kick | moveChoice | 7 |  | attackStatChange | 攻撃・特攻などを変化させる。 | enemy | 2 | durationOrBuffDebuff | unconfirmed |
| Cinderace | Blaze Kick | moveChoice | 7 |  | damageOverTime | 継続ダメージを与える。 | enemy | 0.5 | durationOrBuffDebuff | unconfirmed |
| Cinderace | Blaze Kick | moveChoice | 7 |  | formChange | フォーム・モード・構えを変化させる。 | self | 0.5 | formOrMode | unconfirmed |
| Cinderace | Blaze Kick | moveChoice | 7 |  | criticalGuaranteedOrDisabled | 急所確定または急所不可などを持つ。 | enemy | 0.5 |  | unconfirmed |
| Cinderace | Blaze Kick+ | movePlus | 7 | yes | attackSpeedUp | 通常攻撃速度を上げる。 | self | 3 | durationOrBuffDebuff | unconfirmed |
| Cinderace | Flame Charge+ | movePlus | 8 | yes | nextBoostedAttack | 次の通常攻撃または強化攻撃を準備する。 | enemy | 2 | actionOrderOrCooldown | unconfirmed |
| Cinderace | Feint | moveChoice | 8 |  | slow | 移動速度を下げる。 | unconfirmed | 0.73 | durationOrBuffDebuff | unconfirmed |
| Cinderace | Feint | moveChoice | 8 |  | invincible | 無敵になる。 | self | 0.73 | durationOrBuffDebuff | unconfirmed |
| Cinderace | Feint | moveChoice | 8 |  | movementSpeedUp | 移動速度を上げる。 | self | 0.73 | durationOrBuffDebuff | unconfirmed |
| Cinderace | Feint | moveChoice | 8 |  | cleanse | 状態異常や低下効果を解除する。 | self | 0.73 | durationOrBuffDebuff | unconfirmed |
| Cinderace | Feint+ | movePlus | 8 | yes | damageDealtChange | 与ダメージを変化させる。 | unconfirmed |  | durationOrBuffDebuff | unconfirmed |
| Cinderace | Feint+ | movePlus | 8 | yes | healing | HPを回復する。 | self |  | hpState | unconfirmed |
| Cinderace | Blazing Bicycle Kick | uniteMove | 9 |  | unstoppable | 妨害無効になる。 | self |  | durationOrBuffDebuff | unconfirmed |
| Cinderace | Blazing Bicycle Kick | uniteMove | 9 |  | movementSpeedUp | 移動速度を上げる。 | self | 5 | durationOrBuffDebuff | unconfirmed |
| Cinderace | Blazing Bicycle Kick | uniteMove | 9 |  | hpReferenceDamage | 現在HP・最大HP・減少HPなどを参照する。 | enemy |  | hpState | unconfirmed |
| Cinderace | Blazing Bicycle Kick Unite Buff | uniteBuff | 9 |  | shield | シールドを付与する。 | self |  | durationOrBuffDebuff | unconfirmed |
| Cinderace | Blazing Bicycle Kick Unite Buff | uniteBuff | 9 |  | maxHpChange | 最大HPを変化させる。 | unconfirmed |  | hpState | unconfirmed |
| Clefable | Magic Guard | passive |  |  | shield | シールドを付与する。 | ally | 3 | durationOrBuffDebuff | unconfirmed |
| Clefable | Attack | normalAttack |  |  | boostedAttackCycle | 通常攻撃回数により強化攻撃になる。 | unconfirmed |  | actionOrderOrCooldown | unconfirmed |
| Clefable | Heal Pulse | initialMove |  |  | healing | HPを回復する。 | ally |  | hpState | unconfirmed |
| Clefable | Moonlight | moveChoice | 4 |  | movementSpeedUp | 移動速度を上げる。 | self |  | durationOrBuffDebuff | unconfirmed |
| Clefable | Moonlight | moveChoice | 4 |  | healing | HPを回復する。 | ally | 3 | hpState | unconfirmed |
| Clefable | Draining Kiss | moveChoice | 4 |  | damageDealtChange | 与ダメージを変化させる。 | ally |  | durationOrBuffDebuff | unconfirmed |
| Clefable | Draining Kiss+ | movePlus | 4 | yes | damageDealtChange | 与ダメージを変化させる。 | unconfirmed |  | durationOrBuffDebuff | unconfirmed |
| Clefable | Gravity | moveChoice | 6 |  | stun | 行動不能・スタンを付与する。 | enemy | 1 | durationOrBuffDebuff | unconfirmed |
| Clefable | Gravity | moveChoice | 6 |  | stackOrMark | スタック、マーク、ゲージを扱う。 | enemy |  | targetOrSelfStack | unconfirmed |
| Clefable | Follow Me | moveChoice | 6 |  | shield | シールドを付与する。 | self | 3 | durationOrBuffDebuff | unconfirmed |
| Clefable | Follow Me+ | movePlus | 6 | yes | defenseStatChange | 防御・特防を変化させる。 | unconfirmed | 3 | durationOrBuffDebuff | unconfirmed |
| Clefable | Wonder Wish | uniteMove | 8 |  | hpReferenceDamage | 現在HP・最大HP・減少HPなどを参照する。 | unconfirmed |  | hpState | unconfirmed |
| Clefable | Wonder Wish | uniteMove | 8 |  | formChange | フォーム・モード・構えを変化させる。 | self | 10 | formOrMode | unconfirmed |
| Clefable | Wonder Wish Unite Buff | uniteBuff | 8 |  | cooldownReduction | 待ち時間を短縮する。 | unconfirmed |  | actionOrderOrCooldown | unconfirmed |
| Clefable | Wonder Wish Unite Buff | uniteBuff | 8 |  | shield | シールドを付与する。 | self |  | durationOrBuffDebuff | unconfirmed |
| Clefable | Wonder Wish Unite Buff | uniteBuff | 8 |  | maxHpChange | 最大HPを変化させる。 | unconfirmed |  | hpState | unconfirmed |
| Comfey | Triage | passive |  |  | invincible | 無敵になる。 | self | 0.5 | durationOrBuffDebuff | unconfirmed |
| Comfey | Triage | passive |  |  | untargetableOrStealth | 対象指定されない、またはステルス状態になる。 | enemy | 1 | durationOrBuffDebuff | unconfirmed |
| Comfey | Triage | passive |  |  | movementSpeedUp | 移動速度を上げる。 | ally |  | durationOrBuffDebuff | unconfirmed |
| Comfey | Triage | passive |  |  | healing | HPを回復する。 | self |  | hpState | unconfirmed |
| Comfey | Triage | passive |  |  | shield | シールドを付与する。 | ally |  | durationOrBuffDebuff | unconfirmed |
| Comfey | Triage | passive |  |  | hpThreshold | HP割合条件で発動する。 | ally |  | hpState | unconfirmed |
| Comfey | Triage | passive |  |  | attachToAlly | 味方へ付着または移動する。 | enemy | 1 |  | unconfirmed |
| Comfey | Triage | passive |  |  | wallOrTerrain | 壁・地形・草むらなどと相互作用する。 | area | 5 |  | unconfirmed |
| Comfey | Attack | normalAttack |  |  | boostedAttackCycle | 通常攻撃回数により強化攻撃になる。 | unconfirmed |  | actionOrderOrCooldown | unconfirmed |
| Comfey | Synthesis | initialMove |  |  | shield | シールドを付与する。 | ally |  | durationOrBuffDebuff | unconfirmed |
| Comfey | Synthesis | initialMove |  |  | attachToAlly | 味方へ付着または移動する。 | ally |  |  | unconfirmed |
| Comfey | Floral Healing | moveChoice | 4 |  | healing | HPを回復する。 | ally | 5 | hpState | unconfirmed |
| Comfey | Floral Healing | moveChoice | 4 |  | shield | シールドを付与する。 | ally | 5 | durationOrBuffDebuff | unconfirmed |
| Comfey | Floral Healing | moveChoice | 4 |  | attachToAlly | 味方へ付着または移動する。 | ally |  |  | unconfirmed |
| Comfey | Floral Healing+ | movePlus | 4 | yes | attachToAlly | 味方へ付着または移動する。 | ally | 2 |  | unconfirmed |
| Comfey | Sweet Kiss | moveChoice | 4 |  | stun | 行動不能・スタンを付与する。 | unconfirmed |  | durationOrBuffDebuff | unconfirmed |
| Comfey | Sweet Kiss | moveChoice | 4 |  | shield | シールドを付与する。 | ally |  | durationOrBuffDebuff | unconfirmed |
| Comfey | Sweet Kiss | moveChoice | 4 |  | attachToAlly | 味方へ付着または移動する。 | ally | 2.5 |  | unconfirmed |
| Comfey | Sweet Kiss+ | movePlus | 4 | yes | attachToAlly | 味方へ付着または移動する。 | ally | 2 |  | unconfirmed |
| Comfey | Vine Whip | initialMove |  |  | attachToAlly | 味方へ付着または移動する。 | ally |  |  | unconfirmed |
| Comfey | Magical Leaf | moveChoice | 6 |  | stun | 行動不能・スタンを付与する。 | enemy | 0.5 | durationOrBuffDebuff | unconfirmed |
| Comfey | Magical Leaf | moveChoice | 6 |  | stackOrMark | スタック、マーク、ゲージを扱う。 | enemy | 4 | targetOrSelfStack | unconfirmed |
| Comfey | Magical Leaf | moveChoice | 6 |  | attachToAlly | 味方へ付着または移動する。 | ally |  |  | unconfirmed |
| Comfey | Magical Leaf | moveChoice | 6 |  | wallOrTerrain | 壁・地形・草むらなどと相互作用する。 | enemy | 1 |  | unconfirmed |
| Comfey | Grass Knot | moveChoice | 6 |  | immobilize | 移動不能を付与する。 | enemy |  | durationOrBuffDebuff | unconfirmed |
| Comfey | Grass Knot | moveChoice | 6 |  | pull | 相手を引き寄せる。 | enemy |  |  | unconfirmed |
| Comfey | Grass Knot | moveChoice | 6 |  | attachToAlly | 味方へ付着または移動する。 | ally |  |  | unconfirmed |
| Comfey | Flowery Fields Forever | uniteMove | 8 |  | unstoppable | 妨害無効になる。 | self | 6 | durationOrBuffDebuff | unconfirmed |
| Comfey | Flowery Fields Forever | uniteMove | 8 |  | healing | HPを回復する。 | self |  | hpState | unconfirmed |
| Comfey | Flowery Fields Forever | uniteMove | 8 |  | damageOverTime | 継続ダメージを与える。 | ally | 0.5 | durationOrBuffDebuff | unconfirmed |
| Comfey | Flowery Fields Forever | uniteMove | 8 |  | attachToAlly | 味方へ付着または移動する。 | ally | 0.5 |  | unconfirmed |
| Comfey | Flowery Fields Forever | uniteMove | 8 |  | wallOrTerrain | 壁・地形・草むらなどと相互作用する。 | area | 6 |  | unconfirmed |
| Comfey | Flowery Fields Forever Unite Buff | uniteBuff | 8 |  | cooldownReduction | 待ち時間を短縮する。 | unconfirmed |  | actionOrderOrCooldown | unconfirmed |
| Comfey | Flowery Fields Forever Unite Buff | uniteBuff | 8 |  | shield | シールドを付与する。 | self |  | durationOrBuffDebuff | unconfirmed |
| Comfey | Flowery Fields Forever Unite Buff | uniteBuff | 8 |  | maxHpChange | 最大HPを変化させる。 | unconfirmed |  | hpState | unconfirmed |
| Cramorant | Gulp Missile | passive |  |  | defenseStatChange | 防御・特防を変化させる。 | enemy |  | durationOrBuffDebuff | unconfirmed |
| Cramorant | Gulp Missile | passive |  |  | stackOrMark | スタック、マーク、ゲージを扱う。 | enemy |  | targetOrSelfStack | unconfirmed |
| Cramorant | Gulp Missile | passive |  |  | formChange | フォーム・モード・構えを変化させる。 | self |  | formOrMode | unconfirmed |
| Cramorant | Attack | normalAttack |  |  | boostedAttackCycle | 通常攻撃回数により強化攻撃になる。 | unconfirmed |  | actionOrderOrCooldown | unconfirmed |
| Cramorant | Attack | normalAttack |  |  | formChange | フォーム・モード・構えを変化させる。 | self |  | formOrMode | unconfirmed |
| Cramorant | Attack Boosted | boostedAttack |  |  | boostedAttackCycle | 通常攻撃回数により強化攻撃になる。 | unconfirmed |  | actionOrderOrCooldown | unconfirmed |
| Cramorant | Whirlpool | initialMove |  |  | slow | 移動速度を下げる。 | unconfirmed |  | durationOrBuffDebuff | unconfirmed |
| Cramorant | Whirlpool | initialMove |  |  | damageDealtChange | 与ダメージを変化させる。 | unconfirmed |  | durationOrBuffDebuff | unconfirmed |
| Cramorant | Surf | moveChoice | 6 |  | stun | 行動不能・スタンを付与する。 | enemy | 0.8 | durationOrBuffDebuff | unconfirmed |
| Cramorant | Surf | moveChoice | 6 |  | pull | 相手を引き寄せる。 | enemy | 0.8 |  | unconfirmed |
| Cramorant | Surf | moveChoice | 6 |  | formChange | フォーム・モード・構えを変化させる。 | enemy | 0.8 | formOrMode | unconfirmed |
| Cramorant | Surf+ | movePlus | 6 | yes | slow | 移動速度を下げる。 | enemy |  | durationOrBuffDebuff | unconfirmed |
| Cramorant | Dive | moveChoice | 6 |  | unstoppable | 妨害無効になる。 | enemy | 0.5 | durationOrBuffDebuff | unconfirmed |
| Cramorant | Dive | moveChoice | 6 |  | nextBoostedAttack | 次の通常攻撃または強化攻撃を準備する。 | unconfirmed | 5 | actionOrderOrCooldown | unconfirmed |
| Cramorant | Dive | moveChoice | 6 |  | wildPokemonRule | 野生ポケモン限定の処理を持つ。 | unconfirmed |  | targetType | unconfirmed |
| Cramorant | Feather Dance | initialMove |  |  | knockUp | 相手を打ち上げる。 | enemy | 4 |  | unconfirmed |
| Cramorant | Hurricane | moveChoice | 4 |  | knockUp | 相手を打ち上げる。 | enemy | 0.5 |  | unconfirmed |
| Cramorant | Air Slash | moveChoice | 4 |  | cooldownReduction | 待ち時間を短縮する。 | unconfirmed | 0.8 | actionOrderOrCooldown | unconfirmed |
| Cramorant | Air Slash | moveChoice | 4 |  | formChange | フォーム・モード・構えを変化させる。 | self |  | formOrMode | unconfirmed |
| Cramorant | Gatling Gulp Missile | uniteMove | 9 |  | unstoppable | 妨害無効になる。 | enemy | 6.5 | durationOrBuffDebuff | unconfirmed |
| Cramorant | Gatling Gulp Missile | uniteMove | 9 |  | wildPokemonRule | 野生ポケモン限定の処理を持つ。 | enemy | 6.5 | targetType | unconfirmed |
| Cramorant | Gatling Gulp Missile Unite Buff | uniteBuff | 9 |  | shield | シールドを付与する。 | self |  | durationOrBuffDebuff | unconfirmed |
| Cramorant | Gatling Gulp Missile Unite Buff | uniteBuff | 9 |  | maxHpChange | 最大HPを変化させる。 | unconfirmed |  | hpState | unconfirmed |
| Crustle | Sturdy | passive |  |  | defenseStatChange | 防御・特防を変化させる。 | unconfirmed |  | durationOrBuffDebuff | unconfirmed |
| Crustle | Sturdy | passive |  |  | stackOrMark | スタック、マーク、ゲージを扱う。 | unconfirmed |  | targetOrSelfStack | unconfirmed |
| Crustle | Sturdy | passive |  |  | hpReferenceDamage | 現在HP・最大HP・減少HPなどを参照する。 | unconfirmed |  | hpState | unconfirmed |
| Crustle | Attack | normalAttack |  |  | slow | 移動速度を下げる。 | enemy |  | durationOrBuffDebuff | unconfirmed |
| Crustle | Attack | normalAttack |  |  | boostedAttackCycle | 通常攻撃回数により強化攻撃になる。 | enemy | 2 | actionOrderOrCooldown | unconfirmed |
| Crustle | Attack Boosted | boostedAttack |  |  | slow | 移動速度を下げる。 | enemy |  | durationOrBuffDebuff | unconfirmed |
| Crustle | Attack Boosted | boostedAttack |  |  | boostedAttackCycle | 通常攻撃回数により強化攻撃になる。 | unconfirmed |  | actionOrderOrCooldown | unconfirmed |
| Crustle | Rock Slide | initialMove |  |  | stun | 行動不能・スタンを付与する。 | enemy | 1 | durationOrBuffDebuff | unconfirmed |
| Crustle | Rock Tomb | moveChoice | 4 |  | slow | 移動速度を下げる。 | enemy | 2 | durationOrBuffDebuff | unconfirmed |
| Crustle | Rock Tomb | moveChoice | 4 |  | fieldArea | フィールド・設置範囲を生成する。 | area | 3 | durationOrBuffDebuff | unconfirmed |
| Crustle | Rock Tomb | moveChoice | 4 |  | wallOrTerrain | 壁・地形・草むらなどと相互作用する。 | area | 3 |  | unconfirmed |
| Crustle | Shell Smash | moveChoice | 4 |  | unstoppable | 妨害無効になる。 | self | 0.8 | durationOrBuffDebuff | unconfirmed |
| Crustle | Shell Smash | moveChoice | 4 |  | movementSpeedUp | 移動速度を上げる。 | self | 1 | durationOrBuffDebuff | unconfirmed |
| Crustle | Shell Smash | moveChoice | 4 |  | attackStatChange | 攻撃・特攻などを変化させる。 | unconfirmed | 0.8 | durationOrBuffDebuff | unconfirmed |
| Crustle | Shell Smash | moveChoice | 4 |  | defenseStatChange | 防御・特防を変化させる。 | unconfirmed | 0.8 | durationOrBuffDebuff | unconfirmed |
| Crustle | Shell Smash+ | movePlus | 4 | yes | attackStatChange | 攻撃・特攻などを変化させる。 | unconfirmed |  | durationOrBuffDebuff | unconfirmed |
| Crustle | Shell Smash+ | movePlus | 4 | yes | defenseStatChange | 防御・特防を変化させる。 | unconfirmed |  | durationOrBuffDebuff | unconfirmed |
| Crustle | Fury Cutter | initialMove |  |  | damageDealtChange | 与ダメージを変化させる。 | enemy |  | durationOrBuffDebuff | unconfirmed |
| Crustle | Fury Cutter | initialMove |  |  | stackOrMark | スタック、マーク、ゲージを扱う。 | enemy | 9 | targetOrSelfStack | unconfirmed |
| Crustle | Stealth Rock | moveChoice | 6 |  | knockUp | 相手を打ち上げる。 | unconfirmed |  |  | unconfirmed |
| Crustle | Stealth Rock | moveChoice | 6 |  | slow | 移動速度を下げる。 | enemy |  | durationOrBuffDebuff | unconfirmed |
| Crustle | Stealth Rock | moveChoice | 6 |  | damageOverTime | 継続ダメージを与える。 | enemy | 0.5 | durationOrBuffDebuff | unconfirmed |
| Crustle | Stealth Rock | moveChoice | 6 |  | formChange | フォーム・モード・構えを変化させる。 | enemy |  | formOrMode | unconfirmed |
| Crustle | Stealth Rock | moveChoice | 6 |  | wallOrTerrain | 壁・地形・草むらなどと相互作用する。 | enemy |  |  | unconfirmed |
| Crustle | Stealth Rock+ | movePlus | 6 | yes | fieldArea | フィールド・設置範囲を生成する。 | area | 1 | durationOrBuffDebuff | unconfirmed |
| Crustle | X-Scissor | moveChoice | 6 |  | stun | 行動不能・スタンを付与する。 | enemy | 1.5 | durationOrBuffDebuff | unconfirmed |
| Crustle | X-Scissor | moveChoice | 6 |  | knockBack | 相手を押し出す。 | enemy | 1.5 |  | unconfirmed |
| Crustle | X-Scissor | moveChoice | 6 |  | wallOrTerrain | 壁・地形・草むらなどと相互作用する。 | enemy | 1.5 |  | unconfirmed |
| Crustle | Rubble Rouser | uniteMove | 9 |  | stun | 行動不能・スタンを付与する。 | enemy | 1 | durationOrBuffDebuff | unconfirmed |
| Crustle | Rubble Rouser | uniteMove | 9 |  | unstoppable | 妨害無効になる。 | enemy | 1 | durationOrBuffDebuff | unconfirmed |
| Crustle | Rubble Rouser | uniteMove | 9 |  | shield | シールドを付与する。 | enemy | 1 | durationOrBuffDebuff | unconfirmed |
| Crustle | Rubble Rouser | uniteMove | 9 |  | damageOverTime | 継続ダメージを与える。 | enemy |  | durationOrBuffDebuff | unconfirmed |
| Crustle | Rubble Rouser Unite Buff | uniteBuff | 9 |  | shield | シールドを付与する。 | self |  | durationOrBuffDebuff | unconfirmed |
| Crustle | Rubble Rouser Unite Buff | uniteBuff | 9 |  | maxHpChange | 最大HPを変化させる。 | unconfirmed |  | hpState | unconfirmed |
| Darkrai | Bad Dreams | passive |  |  | sleep | ねむりを付与する。 | enemy |  | durationOrBuffDebuff | unconfirmed |
| Darkrai | Bad Dreams | passive |  |  | damageOverTime | 継続ダメージを与える。 | enemy |  | durationOrBuffDebuff | unconfirmed |
| Darkrai | Bad Dreams | passive |  |  | stackOrMark | スタック、マーク、ゲージを扱う。 | enemy | 2.7 | targetOrSelfStack | unconfirmed |
| Darkrai | Attack | normalAttack |  |  | sleep | ねむりを付与する。 | enemy |  | durationOrBuffDebuff | unconfirmed |
| Darkrai | Attack | normalAttack |  |  | formChange | フォーム・モード・構えを変化させる。 | enemy |  | formOrMode | unconfirmed |
| Darkrai | Attack Boosted | boostedAttack |  |  | damageDealtChange | 与ダメージを変化させる。 | unconfirmed |  | durationOrBuffDebuff | unconfirmed |
| Darkrai | Hypnosis | initialMove |  |  | sleep | ねむりを付与する。 | enemy | 1 | durationOrBuffDebuff | unconfirmed |
| Darkrai | Hypnosis | initialMove |  |  | delayedDamage | 遅延または時間差でダメージを与える。 | enemy | 1 | durationOrBuffDebuff | unconfirmed |
| Darkrai | Dark Void | moveChoice | 5 |  | sleep | ねむりを付与する。 | enemy | 2 | durationOrBuffDebuff | unconfirmed |
| Darkrai | Dark Void | moveChoice | 5 |  | knockUp | 相手を打ち上げる。 | enemy |  |  | unconfirmed |
| Darkrai | Dark Void | moveChoice | 5 |  | stackOrMark | スタック、マーク、ゲージを扱う。 | unconfirmed | 5 | targetOrSelfStack | unconfirmed |
| Darkrai | Dark Void+ | movePlus | 5 | yes | slow | 移動速度を下げる。 | enemy | 3 | durationOrBuffDebuff | unconfirmed |
| Darkrai | Dark Void+ | movePlus | 5 | yes | stackOrMark | スタック、マーク、ゲージを扱う。 | enemy | 3 | targetOrSelfStack | unconfirmed |
| Darkrai | Shadow Claw | moveChoice | 5 |  | sleep | ねむりを付与する。 | enemy | 2 | durationOrBuffDebuff | unconfirmed |
| Darkrai | Shadow Claw | moveChoice | 5 |  | slow | 移動速度を下げる。 | enemy | 3 | durationOrBuffDebuff | unconfirmed |
| Darkrai | Shadow Claw | moveChoice | 5 |  | stackOrMark | スタック、マーク、ゲージを扱う。 | enemy | 3 | targetOrSelfStack | unconfirmed |
| Darkrai | Shadow Claw | moveChoice | 5 |  | reuseOrSecondActivation | 再使用・派生・2段目を持つ。 | unconfirmed |  | actionOrderOrCooldown | unconfirmed |
| Darkrai | Shadow Claw+ | movePlus | 5 | yes | damageDealtChange | 与ダメージを変化させる。 | unconfirmed |  | durationOrBuffDebuff | unconfirmed |
| Darkrai | Calm Mind | initialMove |  |  | defenseStatChange | 防御・特防を変化させる。 | unconfirmed | 3 | durationOrBuffDebuff | unconfirmed |
| Darkrai | Nasty Plot | moveChoice | 7 |  | stackOrMark | スタック、マーク、ゲージを扱う。 | unconfirmed | 7 | targetOrSelfStack | unconfirmed |
| Darkrai | Nasty Plot | moveChoice | 7 |  | formChange | フォーム・モード・構えを変化させる。 | self | 7 | formOrMode | unconfirmed |
| Darkrai | Nasty Plot+ | movePlus | 7 | yes | sleep | ねむりを付与する。 | enemy |  | durationOrBuffDebuff | unconfirmed |
| Darkrai | Dark Pulse | moveChoice | 7 |  | damageReduction | 受けるダメージを軽減する。 | enemy |  | durationOrBuffDebuff | unconfirmed |
| Darkrai | Dark Pulse | moveChoice | 7 |  | stackOrMark | スタック、マーク、ゲージを扱う。 | enemy |  | targetOrSelfStack | unconfirmed |
| Darkrai | Dark Pulse | moveChoice | 7 |  | reuseOrSecondActivation | 再使用・派生・2段目を持つ。 | enemy | 4 | actionOrderOrCooldown | unconfirmed |
| Darkrai | Dark Pulse+ | movePlus | 7 | yes | shield | シールドを付与する。 | self |  | durationOrBuffDebuff | unconfirmed |
| Darkrai | Worst Nightmare | uniteMove | 9 |  | sleep | ねむりを付与する。 | enemy | 0.5 | durationOrBuffDebuff | unconfirmed |
| Darkrai | Worst Nightmare | uniteMove | 9 |  | unstoppable | 妨害無効になる。 | enemy |  | durationOrBuffDebuff | unconfirmed |
| Darkrai | Worst Nightmare | uniteMove | 9 |  | attackStatChange | 攻撃・特攻などを変化させる。 | enemy |  | durationOrBuffDebuff | unconfirmed |
| Darkrai | Worst Nightmare | uniteMove | 9 |  | damageOverTime | 継続ダメージを与える。 | enemy | 0.5 | durationOrBuffDebuff | unconfirmed |
| Darkrai | Worst Nightmare | uniteMove | 9 |  | stackOrMark | スタック、マーク、ゲージを扱う。 | enemy | 0.5 | targetOrSelfStack | unconfirmed |
| Darkrai | Worst Nightmare | uniteMove | 9 |  | hpReferenceDamage | 現在HP・最大HP・減少HPなどを参照する。 | enemy | 0.5 | hpState | unconfirmed |
| Darkrai | Worst Nightmare Unite Buff | uniteBuff | 9 |  | shield | シールドを付与する。 | self |  | durationOrBuffDebuff | unconfirmed |
| Darkrai | Worst Nightmare Unite Buff | uniteBuff | 9 |  | maxHpChange | 最大HPを変化させる。 | unconfirmed |  | hpState | unconfirmed |
| Decidueye | Long Reach | passive |  |  | damageDealtChange | 与ダメージを変化させる。 | enemy |  | durationOrBuffDebuff | unconfirmed |
| Decidueye | Attack | normalAttack |  |  | damageDealtChange | 与ダメージを変化させる。 | unconfirmed |  | durationOrBuffDebuff | unconfirmed |
| Decidueye | Attack | normalAttack |  |  | stackOrMark | スタック、マーク、ゲージを扱う。 | unconfirmed |  | targetOrSelfStack | unconfirmed |
| Decidueye | Attack Boosted | boostedAttack |  |  | damageDealtChange | 与ダメージを変化させる。 | unconfirmed |  | durationOrBuffDebuff | unconfirmed |
| Decidueye | Attack Boosted | boostedAttack |  |  | stackOrMark | スタック、マーク、ゲージを扱う。 | unconfirmed |  | targetOrSelfStack | unconfirmed |
| Decidueye | Leafage | initialMove |  |  | attackSpeedUp | 通常攻撃速度を上げる。 | self | 3 | durationOrBuffDebuff | unconfirmed |
| Decidueye | Leafage | initialMove |  |  | attackStatChange | 攻撃・特攻などを変化させる。 | unconfirmed | 3 | durationOrBuffDebuff | unconfirmed |
| Decidueye | Razor Leaf+ | movePlus | 7 | yes | hpReferenceDamage | 現在HP・最大HP・減少HPなどを参照する。 | enemy |  | hpState | unconfirmed |
| Decidueye | Spirit Shackle | moveChoice | 7 |  | slow | 移動速度を下げる。 | unconfirmed | 1.3 | durationOrBuffDebuff | unconfirmed |
| Decidueye | Spirit Shackle | moveChoice | 7 |  | damageDealtChange | 与ダメージを変化させる。 | unconfirmed | 1.3 | durationOrBuffDebuff | unconfirmed |
| Decidueye | Spirit Shackle | moveChoice | 7 |  | formChange | フォーム・モード・構えを変化させる。 | self |  | formOrMode | unconfirmed |
| Decidueye | Spirit Shackle+ | movePlus | 7 | yes | damageDealtChange | 与ダメージを変化させる。 | enemy |  | durationOrBuffDebuff | unconfirmed |
| Decidueye | Spirit Shackle+ | movePlus | 7 | yes | hpReferenceDamage | 現在HP・最大HP・減少HPなどを参照する。 | enemy |  | hpState | unconfirmed |
| Decidueye | Astonish | initialMove |  |  | slow | 移動速度を下げる。 | enemy |  | durationOrBuffDebuff | unconfirmed |
| Decidueye | Leaf Storm | moveChoice | 8 |  | stun | 行動不能・スタンを付与する。 | enemy | 1 | durationOrBuffDebuff | unconfirmed |
| Decidueye | Leaf Storm | moveChoice | 8 |  | knockBack | 相手を押し出す。 | enemy | 1 |  | unconfirmed |
| Decidueye | Leaf Storm | moveChoice | 8 |  | slow | 移動速度を下げる。 | enemy | 2.5 | durationOrBuffDebuff | unconfirmed |
| Decidueye | Shadow Sneak | moveChoice | 8 |  | untargetableOrStealth | 対象指定されない、またはステルス状態になる。 | enemy |  | durationOrBuffDebuff | unconfirmed |
| Decidueye | Shadow Sneak | moveChoice | 8 |  | defenseStatChange | 防御・特防を変化させる。 | ally | 1 | durationOrBuffDebuff | unconfirmed |
| Decidueye | Shadow Sneak | moveChoice | 8 |  | damageOverTime | 継続ダメージを与える。 | enemy | 5 | durationOrBuffDebuff | unconfirmed |
| Decidueye | Shadow Sneak | moveChoice | 8 |  | wildPokemonRule | 野生ポケモン限定の処理を持つ。 | enemy |  | targetType | unconfirmed |
| Decidueye | Nock Nock | uniteMove | 9 |  | immobilize | 移動不能を付与する。 | unconfirmed |  | durationOrBuffDebuff | unconfirmed |
| Decidueye | Nock Nock | uniteMove | 9 |  | unstoppable | 妨害無効になる。 | self |  | durationOrBuffDebuff | unconfirmed |
| Decidueye | Nock Nock | uniteMove | 9 |  | hindranceResistance | 妨害耐性を得る。 | self |  | durationOrBuffDebuff | unconfirmed |
| Decidueye | Nock Nock | uniteMove | 9 |  | hpThreshold | HP割合条件で発動する。 | enemy |  | hpState | unconfirmed |
| Decidueye | Nock Nock | uniteMove | 9 |  | hpReferenceDamage | 現在HP・最大HP・減少HPなどを参照する。 | enemy |  | hpState | unconfirmed |
| Decidueye | Nock Nock Unite Buff | uniteBuff | 9 |  | shield | シールドを付与する。 | self |  | durationOrBuffDebuff | unconfirmed |
| Decidueye | Nock Nock Unite Buff | uniteBuff | 9 |  | maxHpChange | 最大HPを変化させる。 | unconfirmed |  | hpState | unconfirmed |
| Delphox | Blaze | passive |  |  | hpReferenceDamage | 現在HP・最大HP・減少HPなどを参照する。 | enemy |  | hpState | unconfirmed |
| Delphox | Attack | normalAttack |  |  | boostedAttackCycle | 通常攻撃回数により強化攻撃になる。 | unconfirmed |  | actionOrderOrCooldown | unconfirmed |
| Delphox | Attack Boosted | boostedAttack |  |  | boostedAttackCycle | 通常攻撃回数により強化攻撃になる。 | unconfirmed |  | actionOrderOrCooldown | unconfirmed |
| Delphox | Mystical Fire+ | movePlus | 6 | yes | cooldownReduction | 待ち時間を短縮する。 | unconfirmed | 1 | actionOrderOrCooldown | unconfirmed |
| Delphox | Fire Spin | moveChoice | 7 |  | stun | 行動不能・スタンを付与する。 | enemy | 1 | durationOrBuffDebuff | unconfirmed |
| Delphox | Fire Spin+ | movePlus | 7 | yes | damageDealtChange | 与ダメージを変化させる。 | unconfirmed | 3 | durationOrBuffDebuff | unconfirmed |
| Delphox | Fanciful Fireworks | uniteMove | 9 |  | cleanse | 状態異常や低下効果を解除する。 | self | 1.75 | durationOrBuffDebuff | unconfirmed |
| Delphox | Fanciful Fireworks Unite Buff | uniteBuff | 9 |  | cooldownReduction | 待ち時間を短縮する。 | unconfirmed |  | actionOrderOrCooldown | unconfirmed |
| Delphox | Fanciful Fireworks Unite Buff | uniteBuff | 9 |  | shield | シールドを付与する。 | self |  | durationOrBuffDebuff | unconfirmed |
| Delphox | Fanciful Fireworks Unite Buff | uniteBuff | 9 |  | maxHpChange | 最大HPを変化させる。 | unconfirmed |  | hpState | unconfirmed |
| Dhelmise | Steelworker | passive |  |  | shield | シールドを付与する。 | enemy | 5 | durationOrBuffDebuff | unconfirmed |
| Dhelmise | Steelworker | passive |  |  | stackOrMark | スタック、マーク、ゲージを扱う。 | unconfirmed |  | targetOrSelfStack | unconfirmed |
| Dhelmise | Payback | initialMove |  |  | slow | 移動速度を下げる。 | enemy | 2 | durationOrBuffDebuff | unconfirmed |
| Dhelmise | Power Whip | moveChoice | 5 |  | stun | 行動不能・スタンを付与する。 | enemy | 0.5 | durationOrBuffDebuff | unconfirmed |
| Dhelmise | Power Whip | moveChoice | 5 |  | slow | 移動速度を下げる。 | ally | 2 | durationOrBuffDebuff | unconfirmed |
| Dhelmise | Power Whip | moveChoice | 5 |  | shield | シールドを付与する。 | ally | 2 | durationOrBuffDebuff | unconfirmed |
| Dhelmise | Power Whip+ | movePlus | 5 | yes | stun | 行動不能・スタンを付与する。 | enemy | 1 | durationOrBuffDebuff | unconfirmed |
| Dhelmise | Whirlpool | moveChoice | 5 |  | pull | 相手を引き寄せる。 | enemy | 2 |  | unconfirmed |
| Dhelmise | Whirlpool | moveChoice | 5 |  | slow | 移動速度を下げる。 | ally | 2 | durationOrBuffDebuff | unconfirmed |
| Dhelmise | Whirlpool | moveChoice | 5 |  | cooldownReduction | 待ち時間を短縮する。 | unconfirmed | 0.8 | actionOrderOrCooldown | unconfirmed |
| Dhelmise | Bulldoze | initialMove |  |  | knockUp | 相手を打ち上げる。 | enemy | 0.5 |  | unconfirmed |
| Dhelmise | Anchor Shot | moveChoice | 7 |  | stun | 行動不能・スタンを付与する。 | unconfirmed | 0.6 | durationOrBuffDebuff | unconfirmed |
| Dhelmise | Anchor Shot | moveChoice | 7 |  | knockUp | 相手を打ち上げる。 | enemy |  |  | unconfirmed |
| Dhelmise | Anchor Shot | moveChoice | 7 |  | pull | 相手を引き寄せる。 | enemy |  |  | unconfirmed |
| Dhelmise | Anchor Shot+ | movePlus | 7 | yes | stun | 行動不能・スタンを付与する。 | enemy | 0.8 | durationOrBuffDebuff | unconfirmed |
| Dhelmise | Heavy Slam | moveChoice | 7 |  | stun | 行動不能・スタンを付与する。 | enemy | 0.5 | durationOrBuffDebuff | unconfirmed |
| Dhelmise | Heavy Slam | moveChoice | 7 |  | slow | 移動速度を下げる。 | enemy | 2 | durationOrBuffDebuff | unconfirmed |
| Dhelmise | Heavy Slam+ | movePlus | 7 | yes | stun | 行動不能・スタンを付与する。 | enemy | 0.5 | durationOrBuffDebuff | unconfirmed |
| Dhelmise | Seaweed Snare | uniteMove | 9 |  | stun | 行動不能・スタンを付与する。 | enemy | 0.45 | durationOrBuffDebuff | unconfirmed |
| Dhelmise | Seaweed Snare | uniteMove | 9 |  | knockUp | 相手を打ち上げる。 | enemy | 0.45 |  | unconfirmed |
| Dhelmise | Seaweed Snare | uniteMove | 9 |  | knockBack | 相手を押し出す。 | enemy | 0.7 |  | unconfirmed |
| Dhelmise | Seaweed Snare | uniteMove | 9 |  | damageDealtChange | 与ダメージを変化させる。 | enemy | 0.5 | durationOrBuffDebuff | unconfirmed |
| Dhelmise | Seaweed Snare | uniteMove | 9 |  | healing | HPを回復する。 | enemy | 0.5 | hpState | unconfirmed |
| Dhelmise | Seaweed Snare | uniteMove | 9 |  | damageOverTime | 継続ダメージを与える。 | enemy | 0.5 | durationOrBuffDebuff | unconfirmed |
| Dhelmise | Seaweed Snare Unite Buff | uniteBuff | 9 |  | cooldownReduction | 待ち時間を短縮する。 | unconfirmed |  | actionOrderOrCooldown | unconfirmed |
| Dhelmise | Seaweed Snare Unite Buff | uniteBuff | 9 |  | shield | シールドを付与する。 | self |  | durationOrBuffDebuff | unconfirmed |
| Dhelmise | Seaweed Snare Unite Buff | uniteBuff | 9 |  | maxHpChange | 最大HPを変化させる。 | unconfirmed |  | hpState | unconfirmed |
| Dodrio | Run Away | passive |  |  | slow | 移動速度を下げる。 | unconfirmed |  | durationOrBuffDebuff | unconfirmed |
| Dodrio | Run Away | passive |  |  | movementSpeedUp | 移動速度を上げる。 | enemy |  | durationOrBuffDebuff | unconfirmed |
| Dodrio | Run Away | passive |  |  | stackOrMark | スタック、マーク、ゲージを扱う。 | unconfirmed |  | targetOrSelfStack | unconfirmed |
| Dodrio | Attack | normalAttack |  |  | stackOrMark | スタック、マーク、ゲージを扱う。 | enemy | 1 | targetOrSelfStack | unconfirmed |
| Dodrio | Attack | normalAttack |  |  | boostedAttackCycle | 通常攻撃回数により強化攻撃になる。 | unconfirmed |  | actionOrderOrCooldown | unconfirmed |
| Dodrio | Attack Boosted | boostedAttack |  |  | stackOrMark | スタック、マーク、ゲージを扱う。 | unconfirmed |  | targetOrSelfStack | unconfirmed |
| Dodrio | Attack Boosted | boostedAttack |  |  | boostedAttackCycle | 通常攻撃回数により強化攻撃になる。 | unconfirmed |  | actionOrderOrCooldown | unconfirmed |
| Dodrio | Peck | initialMove |  |  | stackOrMark | スタック、マーク、ゲージを扱う。 | unconfirmed |  | targetOrSelfStack | unconfirmed |
| Dodrio | Tri Attack | moveChoice | 5 |  | burn | やけどを付与する。 | unconfirmed | 2 | durationOrBuffDebuff | unconfirmed |
| Dodrio | Tri Attack | moveChoice | 5 |  | paralysis | まひを付与する。 | unconfirmed | 2 | durationOrBuffDebuff | unconfirmed |
| Dodrio | Tri Attack | moveChoice | 5 |  | freeze | こおり・凍結を付与する。 | unconfirmed | 2 | durationOrBuffDebuff | unconfirmed |
| Dodrio | Tri Attack | moveChoice | 5 |  | healing | HPを回復する。 | self |  | hpState | unconfirmed |
| Dodrio | Tri Attack | moveChoice | 5 |  | stackOrMark | スタック、マーク、ゲージを扱う。 | unconfirmed |  | targetOrSelfStack | unconfirmed |
| Dodrio | Tri Attack | moveChoice | 5 |  | nextBoostedAttack | 次の通常攻撃または強化攻撃を準備する。 | unconfirmed |  | actionOrderOrCooldown | unconfirmed |
| Dodrio | Tri Attack+ | movePlus | 5 | yes | cooldownReduction | 待ち時間を短縮する。 | unconfirmed |  | actionOrderOrCooldown | unconfirmed |
| Dodrio | Tri Attack+ | movePlus | 5 | yes | healing | HPを回復する。 | self |  | hpState | unconfirmed |
| Dodrio | Tri Attack+ | movePlus | 5 | yes | stackOrMark | スタック、マーク、ゲージを扱う。 | ally | 1 | targetOrSelfStack | unconfirmed |
| Dodrio | Tri Attack+ | movePlus | 5 | yes | nextBoostedAttack | 次の通常攻撃または強化攻撃を準備する。 | unconfirmed |  | actionOrderOrCooldown | unconfirmed |
| Dodrio | Drill Peck | moveChoice | 5 |  | damageReduction | 受けるダメージを軽減する。 | unconfirmed |  | durationOrBuffDebuff | unconfirmed |
| Dodrio | Drill Peck | moveChoice | 5 |  | stackOrMark | スタック、マーク、ゲージを扱う。 | enemy |  | targetOrSelfStack | unconfirmed |
| Dodrio | Drill Peck+ | movePlus | 5 | yes | damageDealtChange | 与ダメージを変化させる。 | unconfirmed | 2 | durationOrBuffDebuff | unconfirmed |
| Dodrio | Quick Attack | initialMove |  |  | cooldownReduction | 待ち時間を短縮する。 | enemy | 1.5 | actionOrderOrCooldown | unconfirmed |
| Dodrio | Agility | moveChoice | 7 |  | hindranceResistance | 妨害耐性を得る。 | self | 0.5 | durationOrBuffDebuff | unconfirmed |
| Dodrio | Agility | moveChoice | 7 |  | movementSpeedUp | 移動速度を上げる。 | self | 4 | durationOrBuffDebuff | unconfirmed |
| Dodrio | Agility | moveChoice | 7 |  | stackOrMark | スタック、マーク、ゲージを扱う。 | unconfirmed | 0.5 | targetOrSelfStack | unconfirmed |
| Dodrio | Agility+ | movePlus | 7 | yes | stackOrMark | スタック、マーク、ゲージを扱う。 | unconfirmed |  | targetOrSelfStack | unconfirmed |
| Dodrio | Jump Kick | moveChoice | 7 |  | stun | 行動不能・スタンを付与する。 | enemy | 0.5 | durationOrBuffDebuff | unconfirmed |
| Dodrio | Jump Kick | moveChoice | 7 |  | slow | 移動速度を下げる。 | enemy | 0.5 | durationOrBuffDebuff | unconfirmed |
| Dodrio | Jump Kick | moveChoice | 7 |  | cooldownReduction | 待ち時間を短縮する。 | enemy | 3 | actionOrderOrCooldown | unconfirmed |
| Dodrio | Jump Kick | moveChoice | 7 |  | stackOrMark | スタック、マーク、ゲージを扱う。 | enemy | 0.5 | targetOrSelfStack | unconfirmed |
| Dodrio | Jump Kick+ | movePlus | 7 | yes | stun | 行動不能・スタンを付与する。 | enemy | 0.6 | durationOrBuffDebuff | unconfirmed |
| Dodrio | Triple Trample | uniteMove | 9 |  | knockUp | 相手を打ち上げる。 | enemy | 1 |  | unconfirmed |
| Dodrio | Triple Trample | uniteMove | 9 |  | unstoppable | 妨害無効になる。 | self |  | durationOrBuffDebuff | unconfirmed |
| Dodrio | Triple Trample | uniteMove | 9 |  | hindranceResistance | 妨害耐性を得る。 | self |  | durationOrBuffDebuff | unconfirmed |
| Dodrio | Triple Trample | uniteMove | 9 |  | attackStatChange | 攻撃・特攻などを変化させる。 | enemy | 1 | durationOrBuffDebuff | unconfirmed |
| Dodrio | Triple Trample | uniteMove | 9 |  | damageDealtChange | 与ダメージを変化させる。 | unconfirmed |  | durationOrBuffDebuff | unconfirmed |
| Dodrio | Triple Trample | uniteMove | 9 |  | shield | シールドを付与する。 | self | 3 | durationOrBuffDebuff | unconfirmed |
| Dodrio | Triple Trample | uniteMove | 9 |  | stackOrMark | スタック、マーク、ゲージを扱う。 | unconfirmed | 3 | targetOrSelfStack | unconfirmed |
| Dodrio | Triple Trample | uniteMove | 9 |  | maxHpChange | 最大HPを変化させる。 | unconfirmed | 3 | hpState | unconfirmed |
| Dodrio | Triple Trample Unite Buff | uniteBuff | 9 |  | shield | シールドを付与する。 | self |  | durationOrBuffDebuff | unconfirmed |
| Dodrio | Triple Trample Unite Buff | uniteBuff | 9 |  | maxHpChange | 最大HPを変化させる。 | unconfirmed |  | hpState | unconfirmed |
| Dragapult | Clear Body | passive |  |  | pull | 相手を引き寄せる。 | unconfirmed |  |  | unconfirmed |
| Dragapult | Attack | normalAttack |  |  | damageOverTime | 継続ダメージを与える。 | unconfirmed | 3 | durationOrBuffDebuff | unconfirmed |
| Dragapult | Attack | normalAttack |  |  | stackOrMark | スタック、マーク、ゲージを扱う。 | enemy |  | targetOrSelfStack | unconfirmed |
| Dragapult | Attack | normalAttack |  |  | formChange | フォーム・モード・構えを変化させる。 | self |  | formOrMode | unconfirmed |
| Dragapult | Attack Boosted | boostedAttack |  |  | stackOrMark | スタック、マーク、ゲージを扱う。 | unconfirmed |  | targetOrSelfStack | unconfirmed |
| Dragapult | Attack Boosted | boostedAttack |  |  | formChange | フォーム・モード・構えを変化させる。 | self |  | formOrMode | unconfirmed |
| Dragapult | Astonish | initialMove |  |  | formChange | フォーム・モード・構えを変化させる。 | enemy | 2 | formOrMode | unconfirmed |
| Dragapult | Dragon Breath | moveChoice | 7 |  | burn | やけどを付与する。 | enemy | 3 | durationOrBuffDebuff | unconfirmed |
| Dragapult | Dragon Breath | moveChoice | 7 |  | pull | 相手を引き寄せる。 | unconfirmed |  |  | unconfirmed |
| Dragapult | Dragon Breath | moveChoice | 7 |  | damageOverTime | 継続ダメージを与える。 | enemy | 3 | durationOrBuffDebuff | unconfirmed |
| Dragapult | Dragon Breath+ | movePlus | 7 | yes | burn | やけどを付与する。 | unconfirmed |  | durationOrBuffDebuff | unconfirmed |
| Dragapult | Dragon Breath+ | movePlus | 7 | yes | slow | 移動速度を下げる。 | unconfirmed |  | durationOrBuffDebuff | unconfirmed |
| Dragapult | Shadow Ball | moveChoice | 7 |  | pull | 相手を引き寄せる。 | unconfirmed |  |  | unconfirmed |
| Dragapult | Shadow Ball | moveChoice | 7 |  | damageDealtChange | 与ダメージを変化させる。 | unconfirmed |  | durationOrBuffDebuff | unconfirmed |
| Dragapult | Shadow Ball | moveChoice | 7 |  | healing | HPを回復する。 | self |  | hpState | unconfirmed |
| Dragapult | Shadow Ball | moveChoice | 7 |  | stackOrMark | スタック、マーク、ゲージを扱う。 | enemy | 5 | targetOrSelfStack | unconfirmed |
| Dragapult | Shadow Ball | moveChoice | 7 |  | formChange | フォーム・モード・構えを変化させる。 | self |  | formOrMode | unconfirmed |
| Dragapult | Shadow Ball+ | movePlus | 7 | yes | stackOrMark | スタック、マーク、ゲージを扱う。 | unconfirmed |  | targetOrSelfStack | unconfirmed |
| Dragapult | Quick Attack | initialMove |  |  | attackSpeedUp | 通常攻撃速度を上げる。 | self | 2 | durationOrBuffDebuff | unconfirmed |
| Dragapult | Dragon Dance | moveChoice | 5 |  | pull | 相手を引き寄せる。 | unconfirmed |  |  | unconfirmed |
| Dragapult | Dragon Dance | moveChoice | 5 |  | invincible | 無敵になる。 | self |  | durationOrBuffDebuff | unconfirmed |
| Dragapult | Dragon Dance | moveChoice | 5 |  | attackSpeedUp | 通常攻撃速度を上げる。 | enemy |  | durationOrBuffDebuff | unconfirmed |
| Dragapult | Dragon Dance | moveChoice | 5 |  | damageReduction | 受けるダメージを軽減する。 | enemy |  | durationOrBuffDebuff | unconfirmed |
| Dragapult | Dragon Dance | moveChoice | 5 |  | cooldownReduction | 待ち時間を短縮する。 | enemy |  | actionOrderOrCooldown | unconfirmed |
| Dragapult | Dragon Dance | moveChoice | 5 |  | cooldownReset | 待ち時間をリセットする。 | enemy |  | actionOrderOrCooldown | unconfirmed |
| Dragapult | Dragon Dance | moveChoice | 5 |  | formChange | フォーム・モード・構えを変化させる。 | self |  | formOrMode | unconfirmed |
| Dragapult | Dragon Dance | moveChoice | 5 |  | reuseOrSecondActivation | 再使用・派生・2段目を持つ。 | unconfirmed |  | actionOrderOrCooldown | unconfirmed |
| Dragapult | Dragon Dance | moveChoice | 5 |  | koAssistTrigger | KOまたはアシストで発動する。 | enemy |  | koAssistEvent | unconfirmed |
| Dragapult | Dragon Dance+ | movePlus | 5 | yes | damageDealtChange | 与ダメージを変化させる。 | unconfirmed |  | durationOrBuffDebuff | unconfirmed |
| Dragapult | Dragon Dance+ | movePlus | 5 | yes | healing | HPを回復する。 | self |  | hpState | unconfirmed |
| Dragapult | Phantom Force | moveChoice | 5 |  | pull | 相手を引き寄せる。 | enemy |  |  | unconfirmed |
| Dragapult | Phantom Force | moveChoice | 5 |  | attackSpeedUp | 通常攻撃速度を上げる。 | self | 3 | durationOrBuffDebuff | unconfirmed |
| Dragapult | Phantom Force | moveChoice | 5 |  | attackStatChange | 攻撃・特攻などを変化させる。 | enemy |  | durationOrBuffDebuff | unconfirmed |
| Dragapult | Phantom Force | moveChoice | 5 |  | cooldownReset | 待ち時間をリセットする。 | enemy |  | actionOrderOrCooldown | unconfirmed |
| Dragapult | Phantom Force | moveChoice | 5 |  | stackOrMark | スタック、マーク、ゲージを扱う。 | unconfirmed | 6 | targetOrSelfStack | unconfirmed |
| Dragapult | Phantom Force | moveChoice | 5 |  | koAssistTrigger | KOまたはアシストで発動する。 | enemy |  | koAssistEvent | unconfirmed |
| Dragapult | Dreep and Destroy | uniteMove | 9 |  | hpReferenceDamage | 現在HP・最大HP・減少HPなどを参照する。 | enemy |  | hpState | unconfirmed |
| Dragapult | Dreep and Destroy | uniteMove | 9 |  | wildPokemonRule | 野生ポケモン限定の処理を持つ。 | unconfirmed |  | targetType | unconfirmed |
| Dragapult | Dreep and Destroy Unite Buff | uniteBuff | 9 |  | shield | シールドを付与する。 | self | 3 | durationOrBuffDebuff | unconfirmed |
| Dragapult | Dreep and Destroy Unite Buff | uniteBuff | 9 |  | maxHpChange | 最大HPを変化させる。 | unconfirmed | 3 | hpState | unconfirmed |
| Dragonite | Marvel Scale | passive |  |  | pull | 相手を引き寄せる。 | unconfirmed | 1.5 |  | unconfirmed |
| Dragonite | Marvel Scale | passive |  |  | defenseStatChange | 防御・特防を変化させる。 | unconfirmed | 1.5 | durationOrBuffDebuff | unconfirmed |
| Dragonite | Attack - Dratini | normalAttack |  |  | boostedAttackCycle | 通常攻撃回数により強化攻撃になる。 | unconfirmed | 1 | actionOrderOrCooldown | unconfirmed |
| Dragonite | Attack - Dratini Boosted | boostedAttack |  |  | boostedAttackCycle | 通常攻撃回数により強化攻撃になる。 | unconfirmed | 1 | actionOrderOrCooldown | unconfirmed |
| Dragonite | Twister | initialMove |  |  | slow | 移動速度を下げる。 | enemy | 1 | durationOrBuffDebuff | unconfirmed |
| Dragonite | Dragon Dance | moveChoice | 5 |  | movementSpeedUp | 移動速度を上げる。 | self | 4.5 | durationOrBuffDebuff | unconfirmed |
| Dragonite | Dragon Dance | moveChoice | 5 |  | stackOrMark | スタック、マーク、ゲージを扱う。 | unconfirmed |  | targetOrSelfStack | unconfirmed |
| Dragonite | Dragon Dance+ | movePlus | 5 | yes | pull | 相手を引き寄せる。 | enemy | 4.5 |  | unconfirmed |
| Dragonite | Extreme Speed | moveChoice | 5 |  | knockUp | 相手を打ち上げる。 | enemy | 2 |  | unconfirmed |
| Dragonite | Extreme Speed | moveChoice | 5 |  | slow | 移動速度を下げる。 | enemy | 2 | durationOrBuffDebuff | unconfirmed |
| Dragonite | Extreme Speed+ | movePlus | 5 | yes | pull | 相手を引き寄せる。 | unconfirmed |  |  | unconfirmed |
| Dragonite | Dragon Breath | initialMove |  |  | pull | 相手を引き寄せる。 | enemy |  |  | unconfirmed |
| Dragonite | Dragon Breath | initialMove |  |  | boostedAttackCycle | 通常攻撃回数により強化攻撃になる。 | enemy |  | actionOrderOrCooldown | unconfirmed |
| Dragonite | Hyper Beam | moveChoice | 8 |  | pull | 相手を引き寄せる。 | unconfirmed |  |  | unconfirmed |
| Dragonite | Hyper Beam | moveChoice | 8 |  | delayedDamage | 遅延または時間差でダメージを与える。 | enemy |  | durationOrBuffDebuff | unconfirmed |
| Dragonite | Hyper Beam | moveChoice | 8 |  | stackOrMark | スタック、マーク、ゲージを扱う。 | unconfirmed |  | targetOrSelfStack | unconfirmed |
| Dragonite | Hyper Beam | moveChoice | 8 |  | hpReferenceDamage | 現在HP・最大HP・減少HPなどを参照する。 | unconfirmed |  | hpState | unconfirmed |
| Dragonite | Hyper Beam | moveChoice | 8 |  | wildPokemonRule | 野生ポケモン限定の処理を持つ。 | unconfirmed |  | targetType | unconfirmed |
| Dragonite | Outrage | moveChoice | 8 |  | stun | 行動不能・スタンを付与する。 | unconfirmed | 7 | durationOrBuffDebuff | unconfirmed |
| Dragonite | Outrage | moveChoice | 8 |  | pull | 相手を引き寄せる。 | ally | 5.5 |  | unconfirmed |
| Dragonite | Outrage | moveChoice | 8 |  | attackSpeedUp | 通常攻撃速度を上げる。 | ally | 5.5 | durationOrBuffDebuff | unconfirmed |
| Dragonite | Outrage+ | movePlus | 8 | yes | pull | 相手を引き寄せる。 | unconfirmed | 5.5 |  | unconfirmed |
| Dragonite | Draco Impact | uniteMove | 9 |  | knockUp | 相手を打ち上げる。 | enemy | 2 |  | unconfirmed |
| Dragonite | Draco Impact | uniteMove | 9 |  | pull | 相手を引き寄せる。 | unconfirmed |  |  | unconfirmed |
| Dragonite | Draco Impact | uniteMove | 9 |  | unstoppable | 妨害無効になる。 | self |  | durationOrBuffDebuff | unconfirmed |
| Dragonite | Draco Impact | uniteMove | 9 |  | untargetableOrStealth | 対象指定されない、またはステルス状態になる。 | enemy | 2 | durationOrBuffDebuff | unconfirmed |
| Dragonite | Draco Impact | uniteMove | 9 |  | stackOrMark | スタック、マーク、ゲージを扱う。 | unconfirmed |  | targetOrSelfStack | unconfirmed |
| Dragonite | Draco Impact | uniteMove | 9 |  | formChange | フォーム・モード・構えを変化させる。 | self |  | formOrMode | unconfirmed |
| Dragonite | Draco Impact Unite Buff | uniteBuff | 9 |  | shield | シールドを付与する。 | self |  | durationOrBuffDebuff | unconfirmed |
| Dragonite | Draco Impact Unite Buff | uniteBuff | 9 |  | maxHpChange | 最大HPを変化させる。 | unconfirmed |  | hpState | unconfirmed |
| Duraludon | Heavy Metal | passive |  |  | knockUp | 相手を打ち上げる。 | unconfirmed |  |  | unconfirmed |
| Duraludon | Heavy Metal | passive |  |  | knockBack | 相手を押し出す。 | unconfirmed |  |  | unconfirmed |
| Duraludon | Attack | normalAttack |  |  | boostedAttackCycle | 通常攻撃回数により強化攻撃になる。 | enemy |  | actionOrderOrCooldown | unconfirmed |
| Duraludon | Attack Boosted | boostedAttack |  |  | boostedAttackCycle | 通常攻撃回数により強化攻撃になる。 | enemy |  | actionOrderOrCooldown | unconfirmed |
| Duraludon | Attack Boosted | boostedAttack |  |  | hpReferenceDamage | 現在HP・最大HP・減少HPなどを参照する。 | ally |  | hpState | unconfirmed |
| Duraludon | Attack Boosted | boostedAttack |  |  | wildPokemonRule | 野生ポケモン限定の処理を持つ。 | unconfirmed |  | targetType | unconfirmed |
| Duraludon | Attack Boosted | boostedAttack |  |  | criticalGuaranteedOrDisabled | 急所確定または急所不可などを持つ。 | ally |  |  | unconfirmed |
| Duraludon | Laser Focus | initialMove |  |  | damageReduction | 受けるダメージを軽減する。 | unconfirmed | 6 | durationOrBuffDebuff | unconfirmed |
| Duraludon | Flash Cannon | moveChoice | 5 |  | pull | 相手を引き寄せる。 | enemy | 1 |  | unconfirmed |
| Duraludon | Flash Cannon | moveChoice | 5 |  | attackSpeedUp | 通常攻撃速度を上げる。 | self |  | durationOrBuffDebuff | unconfirmed |
| Duraludon | Flash Cannon | moveChoice | 5 |  | wildPokemonRule | 野生ポケモン限定の処理を持つ。 | unconfirmed |  | targetType | unconfirmed |
| Duraludon | Flash Cannon | moveChoice | 5 |  | formChange | フォーム・モード・構えを変化させる。 | self | 6 | formOrMode | unconfirmed |
| Duraludon | Flash Cannon+ | movePlus | 5 | yes | stun | 行動不能・スタンを付与する。 | enemy | 1 | durationOrBuffDebuff | unconfirmed |
| Duraludon | Dragon Pulse | moveChoice | 5 |  | pull | 相手を引き寄せる。 | enemy |  |  | unconfirmed |
| Duraludon | Dragon Pulse | moveChoice | 5 |  | slow | 移動速度を下げる。 | unconfirmed |  | durationOrBuffDebuff | unconfirmed |
| Duraludon | Dragon Pulse | moveChoice | 5 |  | cooldownReduction | 待ち時間を短縮する。 | enemy | 8 | actionOrderOrCooldown | unconfirmed |
| Duraludon | Dragon Pulse | moveChoice | 5 |  | stackOrMark | スタック、マーク、ゲージを扱う。 | unconfirmed |  | targetOrSelfStack | unconfirmed |
| Duraludon | Dragon Pulse | moveChoice | 5 |  | formChange | フォーム・モード・構えを変化させる。 | self |  | formOrMode | unconfirmed |
| Duraludon | Dragon Pulse | moveChoice | 5 |  | attachToAlly | 味方へ付着または移動する。 | enemy |  |  | unconfirmed |
| Duraludon | Dragon Pulse | moveChoice | 5 |  | koAssistTrigger | KOまたはアシストで発動する。 | enemy | 8 | koAssistEvent | unconfirmed |
| Duraludon | Dragon Pulse | moveChoice | 5 |  | cleanse | 状態異常や低下効果を解除する。 | enemy | 5 | durationOrBuffDebuff | unconfirmed |
| Duraludon | Dragon Pulse+ | movePlus | 5 | yes | koAssistTrigger | KOまたはアシストで発動する。 | enemy |  | koAssistEvent | unconfirmed |
| Duraludon | Metal Claw | initialMove |  |  | nextBoostedAttack | 次の通常攻撃または強化攻撃を準備する。 | unconfirmed |  | actionOrderOrCooldown | unconfirmed |
| Duraludon | Metal Claw | initialMove |  |  | boostedAttackCycle | 通常攻撃回数により強化攻撃になる。 | unconfirmed |  | actionOrderOrCooldown | unconfirmed |
| Duraludon | Dragon Tail | moveChoice | 7 |  | knockBack | 相手を押し出す。 | enemy | 0.5 |  | unconfirmed |
| Duraludon | Dragon Tail | moveChoice | 7 |  | nextBoostedAttack | 次の通常攻撃または強化攻撃を準備する。 | unconfirmed |  | actionOrderOrCooldown | unconfirmed |
| Duraludon | Dragon Tail | moveChoice | 7 |  | boostedAttackCycle | 通常攻撃回数により強化攻撃になる。 | unconfirmed |  | actionOrderOrCooldown | unconfirmed |
| Duraludon | Dragon Tail | moveChoice | 7 |  | formChange | フォーム・モード・構えを変化させる。 | enemy | 0.5 | formOrMode | unconfirmed |
| Duraludon | Dragon Tail | moveChoice | 7 |  | wallOrTerrain | 壁・地形・草むらなどと相互作用する。 | area |  |  | unconfirmed |
| Duraludon | Dragon Tail+ | movePlus | 7 | yes | stackOrMark | スタック、マーク、ゲージを扱う。 | unconfirmed | 5 | targetOrSelfStack | unconfirmed |
| Duraludon | Stealth Rock | moveChoice | 7 |  | immobilize | 移動不能を付与する。 | enemy | 1 | durationOrBuffDebuff | unconfirmed |
| Duraludon | Stealth Rock | moveChoice | 7 |  | slow | 移動速度を下げる。 | enemy | 2 | durationOrBuffDebuff | unconfirmed |
| Duraludon | Stealth Rock | moveChoice | 7 |  | untargetableOrStealth | 対象指定されない、またはステルス状態になる。 | unconfirmed | 60 | durationOrBuffDebuff | unconfirmed |
| Duraludon | Stealth Rock | moveChoice | 7 |  | shield | シールドを付与する。 | self | 3 | durationOrBuffDebuff | unconfirmed |
| Duraludon | Stealth Rock | moveChoice | 7 |  | damageOverTime | 継続ダメージを与える。 | enemy | 2 | durationOrBuffDebuff | unconfirmed |
| Duraludon | Stealth Rock | moveChoice | 7 |  | stackOrMark | スタック、マーク、ゲージを扱う。 | enemy | 2 | targetOrSelfStack | unconfirmed |
| Duraludon | Stealth Rock | moveChoice | 7 |  | nextBoostedAttack | 次の通常攻撃または強化攻撃を準備する。 | unconfirmed |  | actionOrderOrCooldown | unconfirmed |
| Duraludon | Stealth Rock | moveChoice | 7 |  | boostedAttackCycle | 通常攻撃回数により強化攻撃になる。 | unconfirmed |  | actionOrderOrCooldown | unconfirmed |
| Duraludon | Revolving Ruin | uniteMove | 9 |  | burn | やけどを付与する。 | unconfirmed | 10 | durationOrBuffDebuff | unconfirmed |
| Duraludon | Revolving Ruin | uniteMove | 9 |  | knockBack | 相手を押し出す。 | enemy | 0.5 |  | unconfirmed |
| Duraludon | Revolving Ruin | uniteMove | 9 |  | unstoppable | 妨害無効になる。 | self |  | durationOrBuffDebuff | unconfirmed |
| Duraludon | Revolving Ruin | uniteMove | 9 |  | shield | シールドを付与する。 | enemy | 8 | durationOrBuffDebuff | unconfirmed |
| Duraludon | Revolving Ruin | uniteMove | 9 |  | damageOverTime | 継続ダメージを与える。 | enemy | 0.5 | durationOrBuffDebuff | unconfirmed |
| Duraludon | Revolving Ruin | uniteMove | 9 |  | stackOrMark | スタック、マーク、ゲージを扱う。 | enemy |  | targetOrSelfStack | unconfirmed |
| Duraludon | Revolving Ruin Unite Buff | uniteBuff | 9 |  | shield | シールドを付与する。 | self |  | durationOrBuffDebuff | unconfirmed |
| Duraludon | Revolving Ruin Unite Buff | uniteBuff | 9 |  | maxHpChange | 最大HPを変化させる。 | unconfirmed |  | hpState | unconfirmed |
| Eldegoss | Cotton Down | passive |  |  | slow | 移動速度を下げる。 | enemy | 1.5 | durationOrBuffDebuff | unconfirmed |
| Eldegoss | Cotton Down | passive |  |  | healing | HPを回復する。 | self |  | hpState | unconfirmed |
| Eldegoss | Cotton Down | passive |  |  | hpReferenceDamage | 現在HP・最大HP・減少HPなどを参照する。 | unconfirmed | 1.5 | hpState | unconfirmed |
| Eldegoss | Attack | normalAttack |  |  | attackStatChange | 攻撃・特攻などを変化させる。 | ally | 3 | durationOrBuffDebuff | unconfirmed |
| Eldegoss | Attack | normalAttack |  |  | boostedAttackCycle | 通常攻撃回数により強化攻撃になる。 | enemy | 3 | actionOrderOrCooldown | unconfirmed |
| Eldegoss | Attack | normalAttack |  |  | attachToAlly | 味方へ付着または移動する。 | enemy | 3 |  | unconfirmed |
| Eldegoss | Attack Boosted | boostedAttack |  |  | boostedAttackCycle | 通常攻撃回数により強化攻撃になる。 | enemy |  | actionOrderOrCooldown | unconfirmed |
| Eldegoss | Attack Boosted | boostedAttack |  |  | attachToAlly | 味方へ付着または移動する。 | enemy |  |  | unconfirmed |
| Eldegoss | Leafage | initialMove |  |  | formChange | フォーム・モード・構えを変化させる。 | enemy | 2 | formOrMode | unconfirmed |
| Eldegoss | Pollen Puff | moveChoice | 4 |  | knockUp | 相手を打ち上げる。 | unconfirmed | 0.5 |  | unconfirmed |
| Eldegoss | Pollen Puff | moveChoice | 4 |  | healing | HPを回復する。 | ally |  | hpState | unconfirmed |
| Eldegoss | Pollen Puff | moveChoice | 4 |  | delayedDamage | 遅延または時間差でダメージを与える。 | unconfirmed | 1 | durationOrBuffDebuff | unconfirmed |
| Eldegoss | Pollen Puff | moveChoice | 4 |  | attachToAlly | 味方へ付着または移動する。 | unconfirmed | 0.5 |  | unconfirmed |
| Eldegoss | Pollen Puff+ | movePlus | 4 | yes | damageOverTime | 継続ダメージを与える。 | enemy | 0.5 | durationOrBuffDebuff | unconfirmed |
| Eldegoss | Pollen Puff+ | movePlus | 4 | yes | attachToAlly | 味方へ付着または移動する。 | ally | 2 |  | unconfirmed |
| Eldegoss | Leaf Tornado | moveChoice | 4 |  | movementSpeedUp | 移動速度を上げる。 | ally | 2 | durationOrBuffDebuff | unconfirmed |
| Eldegoss | Leaf Tornado | moveChoice | 4 |  | formChange | フォーム・モード・構えを変化させる。 | enemy |  | formOrMode | unconfirmed |
| Eldegoss | Leaf Tornado | moveChoice | 4 |  | attachToAlly | 味方へ付着または移動する。 | ally | 2 |  | unconfirmed |
| Eldegoss | Synthesis | initialMove |  |  | healing | HPを回復する。 | ally |  | hpState | unconfirmed |
| Eldegoss | Synthesis | initialMove |  |  | attachToAlly | 味方へ付着または移動する。 | ally |  |  | unconfirmed |
| Eldegoss | Cotton Guard | moveChoice | 6 |  | shield | シールドを付与する。 | ally | 3 | durationOrBuffDebuff | unconfirmed |
| Eldegoss | Cotton Guard | moveChoice | 6 |  | attachToAlly | 味方へ付着または移動する。 | ally | 3 |  | unconfirmed |
| Eldegoss | Cotton Guard+ | movePlus | 6 | yes | attachToAlly | 味方へ付着または移動する。 | ally | 2 |  | unconfirmed |
| Eldegoss | Cotton Spore | moveChoice | 6 |  | knockUp | 相手を打ち上げる。 | enemy | 0.5 |  | unconfirmed |
| Eldegoss | Cotton Spore+ | movePlus | 6 | yes | defenseStatChange | 防御・特防を変化させる。 | unconfirmed | 2 | durationOrBuffDebuff | unconfirmed |
| Eldegoss | Cotton Spore+ | movePlus | 6 | yes | damageReduction | 受けるダメージを軽減する。 | unconfirmed |  | durationOrBuffDebuff | unconfirmed |
| Eldegoss | Cotton Cloud Crash | uniteMove | 9 |  | invincible | 無敵になる。 | self | 3 | durationOrBuffDebuff | unconfirmed |
| Eldegoss | Cotton Cloud Crash | uniteMove | 9 |  | reuseOrSecondActivation | 再使用・派生・2段目を持つ。 | ally | 3 | actionOrderOrCooldown | unconfirmed |
| Eldegoss | Cotton Cloud Crash | uniteMove | 9 |  | attachToAlly | 味方へ付着または移動する。 | ally | 3 |  | unconfirmed |
| Eldegoss | Cotton Cloud Crash | uniteMove | 9 |  | wallOrTerrain | 壁・地形・草むらなどと相互作用する。 | area | 3 |  | unconfirmed |
| Eldegoss | Cotton Cloud Crash Unite Buff | uniteBuff | 9 |  | shield | シールドを付与する。 | self |  | durationOrBuffDebuff | unconfirmed |
| Eldegoss | Cotton Cloud Crash Unite Buff | uniteBuff | 9 |  | maxHpChange | 最大HPを変化させる。 | unconfirmed |  | hpState | unconfirmed |
| Empoleon | Torrent | passive |  |  | stackOrMark | スタック、マーク、ゲージを扱う。 | enemy |  | targetOrSelfStack | unconfirmed |
| Empoleon | Attack | normalAttack |  |  | damageDealtChange | 与ダメージを変化させる。 | unconfirmed |  | durationOrBuffDebuff | unconfirmed |
| Empoleon | Attack | normalAttack |  |  | healing | HPを回復する。 | self |  | hpState | unconfirmed |
| Empoleon | Attack | normalAttack |  |  | stackOrMark | スタック、マーク、ゲージを扱う。 | unconfirmed |  | targetOrSelfStack | unconfirmed |
| Empoleon | Attack | normalAttack |  |  | boostedAttackCycle | 通常攻撃回数により強化攻撃になる。 | unconfirmed |  | actionOrderOrCooldown | unconfirmed |
| Empoleon | Attack | normalAttack |  |  | lifestealOrDamageHeal | 与ダメージに応じて回復する。 | unconfirmed |  | hpState | unconfirmed |
| Empoleon | Water Gun | initialMove |  |  | stackOrMark | スタック、マーク、ゲージを扱う。 | unconfirmed |  | targetOrSelfStack | unconfirmed |
| Empoleon | Hydro Cannon | moveChoice | 7 |  | stun | 行動不能・スタンを付与する。 | enemy | 0.5 | durationOrBuffDebuff | unconfirmed |
| Empoleon | Hydro Cannon | moveChoice | 7 |  | healing | HPを回復する。 | enemy | 3 | hpState | unconfirmed |
| Empoleon | Hydro Cannon | moveChoice | 7 |  | damageOverTime | 継続ダメージを与える。 | enemy | 3 | durationOrBuffDebuff | unconfirmed |
| Empoleon | Hydro Cannon | moveChoice | 7 |  | stackOrMark | スタック、マーク、ゲージを扱う。 | unconfirmed |  | targetOrSelfStack | unconfirmed |
| Empoleon | Whirlpool | moveChoice | 7 |  | knockUp | 相手を打ち上げる。 | enemy | 0.6 |  | unconfirmed |
| Empoleon | Whirlpool | moveChoice | 7 |  | unstoppable | 妨害無効になる。 | enemy | 1 | durationOrBuffDebuff | unconfirmed |
| Empoleon | Whirlpool | moveChoice | 7 |  | damageDealtChange | 与ダメージを変化させる。 | enemy |  | durationOrBuffDebuff | unconfirmed |
| Empoleon | Whirlpool | moveChoice | 7 |  | healing | HPを回復する。 | enemy |  | hpState | unconfirmed |
| Empoleon | Whirlpool | moveChoice | 7 |  | stackOrMark | スタック、マーク、ゲージを扱う。 | unconfirmed |  | targetOrSelfStack | unconfirmed |
| Empoleon | Whirlpool | moveChoice | 7 |  | wildPokemonRule | 野生ポケモン限定の処理を持つ。 | enemy |  | targetType | unconfirmed |
| Empoleon | Whirlpool+ | movePlus | 7 | yes | damageDealtChange | 与ダメージを変化させる。 | unconfirmed |  | durationOrBuffDebuff | unconfirmed |
| Empoleon | Whirlpool+ | movePlus | 7 | yes | healing | HPを回復する。 | self |  | hpState | unconfirmed |
| Empoleon | Whirlpool+ | movePlus | 7 | yes | wildPokemonRule | 野生ポケモン限定の処理を持つ。 | unconfirmed |  | targetType | unconfirmed |
| Empoleon | Peck | initialMove |  |  | slow | 移動速度を下げる。 | unconfirmed | 2 | durationOrBuffDebuff | unconfirmed |
| Empoleon | Peck | initialMove |  |  | stackOrMark | スタック、マーク、ゲージを扱う。 | unconfirmed |  | targetOrSelfStack | unconfirmed |
| Empoleon | Metal Claw | moveChoice | 5 |  | shield | シールドを付与する。 | self | 3 | durationOrBuffDebuff | unconfirmed |
| Empoleon | Metal Claw | moveChoice | 5 |  | stackOrMark | スタック、マーク、ゲージを扱う。 | unconfirmed |  | targetOrSelfStack | unconfirmed |
| Empoleon | Metal Claw+ | movePlus | 5 | yes | shield | シールドを付与する。 | self |  | durationOrBuffDebuff | unconfirmed |
| Empoleon | Aqua Jet | moveChoice | 5 |  | attackSpeedUp | 通常攻撃速度を上げる。 | enemy | 5 | durationOrBuffDebuff | unconfirmed |
| Empoleon | Aqua Jet | moveChoice | 5 |  | defenseStatChange | 防御・特防を変化させる。 | unconfirmed | 3 | durationOrBuffDebuff | unconfirmed |
| Empoleon | Aqua Jet | moveChoice | 5 |  | stackOrMark | スタック、マーク、ゲージを扱う。 | unconfirmed |  | targetOrSelfStack | unconfirmed |
| Empoleon | Sovereign Slide | uniteMove | 9 |  | knockUp | 相手を打ち上げる。 | enemy | 1 |  | unconfirmed |
| Empoleon | Sovereign Slide | uniteMove | 9 |  | slow | 移動速度を下げる。 | enemy | 7 | durationOrBuffDebuff | unconfirmed |
| Empoleon | Sovereign Slide | uniteMove | 9 |  | unstoppable | 妨害無効になる。 | self |  | durationOrBuffDebuff | unconfirmed |
| Empoleon | Sovereign Slide | uniteMove | 9 |  | stackOrMark | スタック、マーク、ゲージを扱う。 | unconfirmed |  | targetOrSelfStack | unconfirmed |
| Empoleon | Sovereign Slide | uniteMove | 9 |  | formChange | フォーム・モード・構えを変化させる。 | enemy | 1 | formOrMode | unconfirmed |
| Empoleon | Sovereign Slide Unite Buff | uniteBuff | 9 |  | cooldownReduction | 待ち時間を短縮する。 | unconfirmed |  | actionOrderOrCooldown | unconfirmed |
| Empoleon | Sovereign Slide Unite Buff | uniteBuff | 9 |  | shield | シールドを付与する。 | self |  | durationOrBuffDebuff | unconfirmed |
| Empoleon | Sovereign Slide Unite Buff | uniteBuff | 9 |  | maxHpChange | 最大HPを変化させる。 | unconfirmed |  | hpState | unconfirmed |
| Espeon | Anticipation | passive |  |  | slow | 移動速度を下げる。 | unconfirmed |  | durationOrBuffDebuff | unconfirmed |
| Espeon | Anticipation | passive |  |  | hindranceResistance | 妨害耐性を得る。 | self | 35 | durationOrBuffDebuff | unconfirmed |
| Espeon | Attack - Eevee | normalAttack |  |  | boostedAttackCycle | 通常攻撃回数により強化攻撃になる。 | unconfirmed |  | actionOrderOrCooldown | unconfirmed |
| Espeon | Attack - Eevee Boosted | boostedAttack |  |  | boostedAttackCycle | 通常攻撃回数により強化攻撃になる。 | unconfirmed |  | actionOrderOrCooldown | unconfirmed |
| Espeon | Psyshock | moveChoice | 4 |  | stun | 行動不能・スタンを付与する。 | enemy | 1.25 | durationOrBuffDebuff | unconfirmed |
| Espeon | Stored Power | moveChoice | 4 |  | movementSpeedUp | 移動速度を上げる。 | self | 1.2 | durationOrBuffDebuff | unconfirmed |
| Espeon | Psybeam | moveChoice | 6 |  | stun | 行動不能・スタンを付与する。 | enemy |  | durationOrBuffDebuff | unconfirmed |
| Espeon | Psybeam | moveChoice | 6 |  | slow | 移動速度を下げる。 | enemy |  | durationOrBuffDebuff | unconfirmed |
| Espeon | Psybeam | moveChoice | 6 |  | hpReferenceDamage | 現在HP・最大HP・減少HPなどを参照する。 | enemy |  | hpState | unconfirmed |
| Espeon | Psybeam | moveChoice | 6 |  | wildPokemonRule | 野生ポケモン限定の処理を持つ。 | enemy |  | targetType | unconfirmed |
| Espeon | Psybeam | moveChoice | 6 |  | formChange | フォーム・モード・構えを変化させる。 | enemy |  | formOrMode | unconfirmed |
| Espeon | Psybeam+ | movePlus | 6 | yes | stun | 行動不能・スタンを付与する。 | enemy |  | durationOrBuffDebuff | unconfirmed |
| Espeon | Psybeam+ | movePlus | 6 | yes | wildPokemonRule | 野生ポケモン限定の処理を持つ。 | unconfirmed |  | targetType | unconfirmed |
| Espeon | Future Sight | moveChoice | 6 |  | cooldownReduction | 待ち時間を短縮する。 | enemy |  | actionOrderOrCooldown | unconfirmed |
| Espeon | Future Sight | moveChoice | 6 |  | healing | HPを回復する。 | self |  | hpState | unconfirmed |
| Espeon | Future Sight | moveChoice | 6 |  | hpReferenceDamage | 現在HP・最大HP・減少HPなどを参照する。 | enemy |  | hpState | unconfirmed |
| Espeon | Future Sight | moveChoice | 6 |  | wildPokemonRule | 野生ポケモン限定の処理を持つ。 | unconfirmed |  | targetType | unconfirmed |
| Espeon | Future Sight | moveChoice | 6 |  | cleanse | 状態異常や低下効果を解除する。 | self |  | durationOrBuffDebuff | unconfirmed |
| Espeon | Psychic Solare | uniteMove | 8 |  | knockUp | 相手を打ち上げる。 | enemy |  |  | unconfirmed |
| Espeon | Psychic Solare | uniteMove | 8 |  | knockBack | 相手を押し出す。 | enemy |  |  | unconfirmed |
| Espeon | Psychic Solare | uniteMove | 8 |  | unstoppable | 妨害無効になる。 | self |  | durationOrBuffDebuff | unconfirmed |
| Espeon | Psychic Solare | uniteMove | 8 |  | delayedDamage | 遅延または時間差でダメージを与える。 | enemy |  | durationOrBuffDebuff | unconfirmed |
| Espeon | Psychic Solare Unite Buff | uniteBuff | 8 |  | cooldownReduction | 待ち時間を短縮する。 | unconfirmed |  | actionOrderOrCooldown | unconfirmed |
| Espeon | Psychic Solare Unite Buff | uniteBuff | 8 |  | shield | シールドを付与する。 | self |  | durationOrBuffDebuff | unconfirmed |
| Espeon | Psychic Solare Unite Buff | uniteBuff | 8 |  | maxHpChange | 最大HPを変化させる。 | unconfirmed |  | hpState | unconfirmed |
| Falinks | Battle Armor | passive |  |  | damageReduction | 受けるダメージを軽減する。 | unconfirmed |  | durationOrBuffDebuff | unconfirmed |
| Falinks | Battle Armor | passive |  |  | formChange | フォーム・モード・構えを変化させる。 | self |  | formOrMode | unconfirmed |
| Falinks | Battle Armor | passive |  |  | attachToAlly | 味方へ付着または移動する。 | unconfirmed |  |  | unconfirmed |
| Falinks | Attack | normalAttack |  |  | slow | 移動速度を下げる。 | enemy | 1 | durationOrBuffDebuff | unconfirmed |
| Falinks | Attack | normalAttack |  |  | boostedAttackCycle | 通常攻撃回数により強化攻撃になる。 | unconfirmed |  | actionOrderOrCooldown | unconfirmed |
| Falinks | Tackle | initialMove |  |  | nextBoostedAttack | 次の通常攻撃または強化攻撃を準備する。 | unconfirmed |  | actionOrderOrCooldown | unconfirmed |
| Falinks | Tackle | initialMove |  |  | boostedAttackCycle | 通常攻撃回数により強化攻撃になる。 | unconfirmed |  | actionOrderOrCooldown | unconfirmed |
| Falinks | Megahorn | moveChoice | 4 |  | knockUp | 相手を打ち上げる。 | enemy | 0.25 |  | unconfirmed |
| Falinks | Megahorn | moveChoice | 4 |  | shield | シールドを付与する。 | self | 3.5 | durationOrBuffDebuff | unconfirmed |
| Falinks | Megahorn | moveChoice | 4 |  | formChange | フォーム・モード・構えを変化させる。 | self | 1 | formOrMode | unconfirmed |
| Falinks | Megahorn+ | movePlus | 4 | yes | shield | シールドを付与する。 | self |  | durationOrBuffDebuff | unconfirmed |
| Falinks | Iron Head | moveChoice | 4 |  | stun | 行動不能・スタンを付与する。 | unconfirmed | 0.33 | durationOrBuffDebuff | unconfirmed |
| Falinks | Iron Head | moveChoice | 4 |  | knockUp | 相手を打ち上げる。 | unconfirmed | 0.33 |  | unconfirmed |
| Falinks | Iron Head | moveChoice | 4 |  | knockBack | 相手を押し出す。 | enemy |  |  | unconfirmed |
| Falinks | Iron Head | moveChoice | 4 |  | slow | 移動速度を下げる。 | enemy | 1.5 | durationOrBuffDebuff | unconfirmed |
| Falinks | Iron Head | moveChoice | 4 |  | shield | シールドを付与する。 | enemy | 1.5 | durationOrBuffDebuff | unconfirmed |
| Falinks | Iron Head | moveChoice | 4 |  | formChange | フォーム・モード・構えを変化させる。 | self |  | formOrMode | unconfirmed |
| Falinks | Iron Head+ | movePlus | 4 | yes | hpReferenceDamage | 現在HP・最大HP・減少HPなどを参照する。 | enemy |  | hpState | unconfirmed |
| Falinks | Bulk Up | initialMove |  |  | defenseStatChange | 防御・特防を変化させる。 | unconfirmed | 3 | durationOrBuffDebuff | unconfirmed |
| Falinks | No Retreat | moveChoice | 6 |  | slow | 移動速度を下げる。 | unconfirmed |  | durationOrBuffDebuff | unconfirmed |
| Falinks | No Retreat | moveChoice | 6 |  | unstoppable | 妨害無効になる。 | enemy | 0.4 | durationOrBuffDebuff | unconfirmed |
| Falinks | No Retreat | moveChoice | 6 |  | attackStatChange | 攻撃・特攻などを変化させる。 | unconfirmed |  | durationOrBuffDebuff | unconfirmed |
| Falinks | No Retreat | moveChoice | 6 |  | damageReduction | 受けるダメージを軽減する。 | unconfirmed |  | durationOrBuffDebuff | unconfirmed |
| Falinks | No Retreat | moveChoice | 6 |  | formChange | フォーム・モード・構えを変化させる。 | enemy | 0.4 | formOrMode | unconfirmed |
| Falinks | No Retreat+ | movePlus | 6 | yes | damageReduction | 受けるダメージを軽減する。 | unconfirmed |  | durationOrBuffDebuff | unconfirmed |
| Falinks | No Retreat+ | movePlus | 6 | yes | formChange | フォーム・モード・構えを変化させる。 | self |  | formOrMode | unconfirmed |
| Falinks | Beat Up | moveChoice | 6 |  | formChange | フォーム・モード・構えを変化させる。 | enemy | 5 | formOrMode | unconfirmed |
| Falinks | Beat Up+ | movePlus | 6 | yes | healing | HPを回復する。 | self |  | hpState | unconfirmed |
| Falinks | Dust Devil Formation | uniteMove | 9 |  | slow | 移動速度を下げる。 | enemy | 5 | durationOrBuffDebuff | unconfirmed |
| Falinks | Dust Devil Formation | uniteMove | 9 |  | unstoppable | 妨害無効になる。 | self | 0.25 | durationOrBuffDebuff | unconfirmed |
| Falinks | Dust Devil Formation | uniteMove | 9 |  | damageReduction | 受けるダメージを軽減する。 | unconfirmed |  | durationOrBuffDebuff | unconfirmed |
| Falinks | Dust Devil Formation | uniteMove | 9 |  | stackOrMark | スタック、マーク、ゲージを扱う。 | enemy |  | targetOrSelfStack | unconfirmed |
| Falinks | Dust Devil Formation | uniteMove | 9 |  | formChange | フォーム・モード・構えを変化させる。 | self | 0.25 | formOrMode | unconfirmed |
| Falinks | Dust Devil Formation Unite Buff | uniteBuff | 9 |  | shield | シールドを付与する。 | self |  | durationOrBuffDebuff | unconfirmed |
| Falinks | Dust Devil Formation Unite Buff | uniteBuff | 9 |  | maxHpChange | 最大HPを変化させる。 | unconfirmed |  | hpState | unconfirmed |
| Feraligatr | Bite | initialMove |  |  | slow | 移動速度を下げる。 | enemy | 5 | durationOrBuffDebuff | unconfirmed |
| Feraligatr | Crunch | moveChoice | 5 |  | slow | 移動速度を下げる。 | enemy | 3 | durationOrBuffDebuff | unconfirmed |
| Feraligatr | Crunch | moveChoice | 5 |  | stackOrMark | スタック、マーク、ゲージを扱う。 | enemy | 5 | targetOrSelfStack | unconfirmed |
| Feraligatr | Scratch | initialMove |  |  | stun | 行動不能・スタンを付与する。 | enemy | 0.6 | durationOrBuffDebuff | unconfirmed |
| Feraligatr | Waterfall | moveChoice | 7 |  | stun | 行動不能・スタンを付与する。 | enemy | 0.2 | durationOrBuffDebuff | unconfirmed |
| Feraligatr | Waterfall | moveChoice | 7 |  | knockUp | 相手を打ち上げる。 | enemy | 0.45 |  | unconfirmed |
| Feraligatr | Waterfall | moveChoice | 7 |  | shield | シールドを付与する。 | self | 3 | durationOrBuffDebuff | unconfirmed |
| Feraligatr | Waterfall | moveChoice | 7 |  | wildPokemonRule | 野生ポケモン限定の処理を持つ。 | enemy |  | targetType | unconfirmed |
| Feraligatr | Waterfall | moveChoice | 7 |  | formChange | フォーム・モード・構えを変化させる。 | enemy | 0.45 | formOrMode | unconfirmed |
| Feraligatr | Waterfall | moveChoice | 7 |  | wallOrTerrain | 壁・地形・草むらなどと相互作用する。 | ally |  |  | unconfirmed |
| Feraligatr | Waterfall+ | movePlus | 7 | yes | knockUp | 相手を打ち上げる。 | enemy | 0.45 |  | unconfirmed |
| Feraligatr | Big Jaw Bite | uniteMove | 9 |  | unstoppable | 妨害無効になる。 | self | 15 | durationOrBuffDebuff | unconfirmed |
| Feraligatr | Big Jaw Bite | uniteMove | 9 |  | damageDealtChange | 与ダメージを変化させる。 | unconfirmed |  | durationOrBuffDebuff | unconfirmed |
| Feraligatr | Big Jaw Bite | uniteMove | 9 |  | stackOrMark | スタック、マーク、ゲージを扱う。 | unconfirmed |  | targetOrSelfStack | unconfirmed |
| Feraligatr | Big Jaw Bite | uniteMove | 9 |  | reuseOrSecondActivation | 再使用・派生・2段目を持つ。 | enemy |  | actionOrderOrCooldown | unconfirmed |
| Feraligatr | Big Jaw Bite Unite Buff | uniteBuff | 9 |  | shield | シールドを付与する。 | self |  | durationOrBuffDebuff | unconfirmed |
| Feraligatr | Big Jaw Bite Unite Buff | uniteBuff | 9 |  | maxHpChange | 最大HPを変化させる。 | unconfirmed |  | hpState | unconfirmed |
| Garchomp | Rough Skin | passive |  |  | damageReduction | 受けるダメージを軽減する。 | enemy | 0.6 | durationOrBuffDebuff | unconfirmed |
| Garchomp | Attack | normalAttack |  |  | attackSpeedUp | 通常攻撃速度を上げる。 | enemy |  | durationOrBuffDebuff | unconfirmed |
| Garchomp | Attack | normalAttack |  |  | stackOrMark | スタック、マーク、ゲージを扱う。 | unconfirmed |  | targetOrSelfStack | unconfirmed |
| Garchomp | Attack | normalAttack |  |  | boostedAttackCycle | 通常攻撃回数により強化攻撃になる。 | unconfirmed |  | actionOrderOrCooldown | unconfirmed |
| Garchomp | Attack | normalAttack |  |  | hpReferenceDamage | 現在HP・最大HP・減少HPなどを参照する。 | enemy |  | hpState | unconfirmed |
| Garchomp | Attack | normalAttack |  |  | wildPokemonRule | 野生ポケモン限定の処理を持つ。 | unconfirmed |  | targetType | unconfirmed |
| Garchomp | Attack | normalAttack |  |  | lifestealOrDamageHeal | 与ダメージに応じて回復する。 | enemy |  | hpState | unconfirmed |
| Garchomp | Attack Boosted | boostedAttack |  |  | attackSpeedUp | 通常攻撃速度を上げる。 | enemy |  | durationOrBuffDebuff | unconfirmed |
| Garchomp | Attack Boosted | boostedAttack |  |  | boostedAttackCycle | 通常攻撃回数により強化攻撃になる。 | unconfirmed |  | actionOrderOrCooldown | unconfirmed |
| Garchomp | Sand Attack | initialMove |  |  | slow | 移動速度を下げる。 | enemy |  | durationOrBuffDebuff | unconfirmed |
| Garchomp | Sand Attack | initialMove |  |  | movementSpeedUp | 移動速度を上げる。 | self |  | durationOrBuffDebuff | unconfirmed |
| Garchomp | Sand Attack | initialMove |  |  | attackSpeedUp | 通常攻撃速度を上げる。 | self | 2 | durationOrBuffDebuff | unconfirmed |
| Garchomp | Dig | moveChoice | 5 |  | knockUp | 相手を打ち上げる。 | enemy | 4 |  | unconfirmed |
| Garchomp | Dig | moveChoice | 5 |  | untargetableOrStealth | 対象指定されない、またはステルス状態になる。 | enemy |  | durationOrBuffDebuff | unconfirmed |
| Garchomp | Dig | moveChoice | 5 |  | defenseStatChange | 防御・特防を変化させる。 | enemy |  | durationOrBuffDebuff | unconfirmed |
| Garchomp | Dig | moveChoice | 5 |  | formChange | フォーム・モード・構えを変化させる。 | enemy |  | formOrMode | unconfirmed |
| Garchomp | Dig | moveChoice | 5 |  | wallOrTerrain | 壁・地形・草むらなどと相互作用する。 | enemy |  |  | unconfirmed |
| Garchomp | Dig+ | movePlus | 5 | yes | knockUp | 相手を打ち上げる。 | unconfirmed | 1 |  | unconfirmed |
| Garchomp | Dig+ | movePlus | 5 | yes | damageReduction | 受けるダメージを軽減する。 | unconfirmed |  | durationOrBuffDebuff | unconfirmed |
| Garchomp | Dragon Rush | moveChoice | 5 |  | stun | 行動不能・スタンを付与する。 | enemy |  | durationOrBuffDebuff | unconfirmed |
| Garchomp | Dragon Rush | moveChoice | 5 |  | knockUp | 相手を打ち上げる。 | enemy |  |  | unconfirmed |
| Garchomp | Dragon Rush | moveChoice | 5 |  | pull | 相手を引き寄せる。 | enemy | 0.9 |  | unconfirmed |
| Garchomp | Dragon Rush | moveChoice | 5 |  | slow | 移動速度を下げる。 | enemy |  | durationOrBuffDebuff | unconfirmed |
| Garchomp | Dragon Rush | moveChoice | 5 |  | damageReduction | 受けるダメージを軽減する。 | enemy | 0.9 | durationOrBuffDebuff | unconfirmed |
| Garchomp | Dragon Rush | moveChoice | 5 |  | formChange | フォーム・モード・構えを変化させる。 | enemy |  | formOrMode | unconfirmed |
| Garchomp | Dragon Rush+ | movePlus | 5 | yes | knockBack | 相手を押し出す。 | enemy |  |  | unconfirmed |
| Garchomp | Dragon Rush+ | movePlus | 5 | yes | pull | 相手を引き寄せる。 | unconfirmed |  |  | unconfirmed |
| Garchomp | Dragon Rush+ | movePlus | 5 | yes | unstoppable | 妨害無効になる。 | self |  | durationOrBuffDebuff | unconfirmed |
| Garchomp | Dragon Rush+ | movePlus | 5 | yes | formChange | フォーム・モード・構えを変化させる。 | enemy |  | formOrMode | unconfirmed |
| Garchomp | Dragon Claw | moveChoice | 7 |  | knockUp | 相手を打ち上げる。 | enemy |  |  | unconfirmed |
| Garchomp | Dragon Claw | moveChoice | 7 |  | knockBack | 相手を押し出す。 | enemy |  |  | unconfirmed |
| Garchomp | Dragon Claw | moveChoice | 7 |  | pull | 相手を引き寄せる。 | unconfirmed | 2 |  | unconfirmed |
| Garchomp | Dragon Claw | moveChoice | 7 |  | slow | 移動速度を下げる。 | enemy | 2 | durationOrBuffDebuff | unconfirmed |
| Garchomp | Dragon Claw | moveChoice | 7 |  | attackSpeedUp | 通常攻撃速度を上げる。 | self |  | durationOrBuffDebuff | unconfirmed |
| Garchomp | Dragon Claw+ | movePlus | 7 | yes | damageDealtChange | 与ダメージを変化させる。 | unconfirmed |  | durationOrBuffDebuff | unconfirmed |
| Garchomp | Livid Outrage | uniteMove | 9 |  | stun | 行動不能・スタンを付与する。 | enemy |  | durationOrBuffDebuff | unconfirmed |
| Garchomp | Livid Outrage | uniteMove | 9 |  | knockUp | 相手を打ち上げる。 | enemy | 1 |  | unconfirmed |
| Garchomp | Livid Outrage | uniteMove | 9 |  | slow | 移動速度を下げる。 | enemy | 1 | durationOrBuffDebuff | unconfirmed |
| Garchomp | Livid Outrage | uniteMove | 9 |  | unstoppable | 妨害無効になる。 | self | 5 | durationOrBuffDebuff | unconfirmed |
| Garchomp | Livid Outrage | uniteMove | 9 |  | damageReduction | 受けるダメージを軽減する。 | unconfirmed | 5 | durationOrBuffDebuff | unconfirmed |
| Garchomp | Livid Outrage Unite Buff | uniteBuff | 9 |  | shield | シールドを付与する。 | self |  | durationOrBuffDebuff | unconfirmed |
| Garchomp | Livid Outrage Unite Buff | uniteBuff | 9 |  | maxHpChange | 最大HPを変化させる。 | unconfirmed |  | hpState | unconfirmed |
| Gardevoir | Attack | normalAttack |  |  | defenseStatChange | 防御・特防を変化させる。 | unconfirmed |  | durationOrBuffDebuff | unconfirmed |
| Gardevoir | Attack | normalAttack |  |  | boostedAttackCycle | 通常攻撃回数により強化攻撃になる。 | enemy |  | actionOrderOrCooldown | unconfirmed |
| Gardevoir | Attack Boosted | boostedAttack |  |  | defenseStatChange | 防御・特防を変化させる。 | unconfirmed |  | durationOrBuffDebuff | unconfirmed |
| Gardevoir | Attack Boosted | boostedAttack |  |  | boostedAttackCycle | 通常攻撃回数により強化攻撃になる。 | unconfirmed |  | actionOrderOrCooldown | unconfirmed |
| Gardevoir | Psychic | moveChoice | 7 |  | slow | 移動速度を下げる。 | enemy | 1 | durationOrBuffDebuff | unconfirmed |
| Gardevoir | Psychic | moveChoice | 7 |  | defenseStatChange | 防御・特防を変化させる。 | unconfirmed |  | durationOrBuffDebuff | unconfirmed |
| Gardevoir | Psychic | moveChoice | 7 |  | damageOverTime | 継続ダメージを与える。 | enemy | 1 | durationOrBuffDebuff | unconfirmed |
| Gardevoir | Psychic | moveChoice | 7 |  | stackOrMark | スタック、マーク、ゲージを扱う。 | unconfirmed |  | targetOrSelfStack | unconfirmed |
| Gardevoir | Psychic | moveChoice | 7 |  | formChange | フォーム・モード・構えを変化させる。 | enemy |  | formOrMode | unconfirmed |
| Gardevoir | Moonblast | moveChoice | 7 |  | stun | 行動不能・スタンを付与する。 | enemy | 1.6 | durationOrBuffDebuff | unconfirmed |
| Gardevoir | Moonblast | moveChoice | 7 |  | formChange | フォーム・モード・構えを変化させる。 | self |  | formOrMode | unconfirmed |
| Gardevoir | Moonblast+ | movePlus | 7 | yes | shield | シールドを付与する。 | self | 3 | durationOrBuffDebuff | unconfirmed |
| Gardevoir | Teleport | initialMove |  |  | damageDealtChange | 与ダメージを変化させる。 | unconfirmed |  | durationOrBuffDebuff | unconfirmed |
| Gardevoir | Psyshock | moveChoice | 5 |  | cooldownReduction | 待ち時間を短縮する。 | enemy |  | actionOrderOrCooldown | unconfirmed |
| Gardevoir | Future Sight | moveChoice | 5 |  | movementSpeedUp | 移動速度を上げる。 | enemy | 1.5 | durationOrBuffDebuff | unconfirmed |
| Gardevoir | Fairy Singularity | uniteMove | 9 |  | knockBack | 相手を押し出す。 | enemy |  |  | unconfirmed |
| Gardevoir | Fairy Singularity | uniteMove | 9 |  | pull | 相手を引き寄せる。 | enemy |  |  | unconfirmed |
| Gardevoir | Fairy Singularity | uniteMove | 9 |  | damageDealtChange | 与ダメージを変化させる。 | enemy |  | durationOrBuffDebuff | unconfirmed |
| Gardevoir | Fairy Singularity Unite Buff | uniteBuff | 9 |  | cooldownReduction | 待ち時間を短縮する。 | unconfirmed |  | actionOrderOrCooldown | unconfirmed |
| Gardevoir | Fairy Singularity Unite Buff | uniteBuff | 9 |  | shield | シールドを付与する。 | self |  | durationOrBuffDebuff | unconfirmed |
| Gardevoir | Fairy Singularity Unite Buff | uniteBuff | 9 |  | maxHpChange | 最大HPを変化させる。 | unconfirmed |  | hpState | unconfirmed |
| Gengar | Levitate | passive |  |  | movementSpeedUp | 移動速度を上げる。 | self | 5 | durationOrBuffDebuff | unconfirmed |
| Gengar | Attack | normalAttack |  |  | boostedAttackCycle | 通常攻撃回数により強化攻撃になる。 | enemy |  | actionOrderOrCooldown | unconfirmed |
| Gengar | Attack Boosted | boostedAttack |  |  | boostedAttackCycle | 通常攻撃回数により強化攻撃になる。 | enemy |  | actionOrderOrCooldown | unconfirmed |
| Gengar | Will-o-Wisp | initialMove |  |  | burn | やけどを付与する。 | enemy | 4 | durationOrBuffDebuff | unconfirmed |
| Gengar | Will-o-Wisp | initialMove |  |  | attackStatChange | 攻撃・特攻などを変化させる。 | enemy | 4 | durationOrBuffDebuff | unconfirmed |
| Gengar | Will-o-Wisp | initialMove |  |  | damageOverTime | 継続ダメージを与える。 | unconfirmed | 0.5 | durationOrBuffDebuff | unconfirmed |
| Gengar | Shadow Ball | moveChoice | 7 |  | defenseStatChange | 防御・特防を変化させる。 | enemy | 1 | durationOrBuffDebuff | unconfirmed |
| Gengar | Sludge Bomb | moveChoice | 7 |  | poison | どくを付与する。 | enemy | 5 | durationOrBuffDebuff | unconfirmed |
| Gengar | Sludge Bomb | moveChoice | 7 |  | attackStatChange | 攻撃・特攻などを変化させる。 | enemy | 5 | durationOrBuffDebuff | unconfirmed |
| Gengar | Sludge Bomb | moveChoice | 7 |  | damageOverTime | 継続ダメージを与える。 | unconfirmed | 0.5 | durationOrBuffDebuff | unconfirmed |
| Gengar | Sludge Bomb | moveChoice | 7 |  | wildPokemonRule | 野生ポケモン限定の処理を持つ。 | unconfirmed |  | targetType | unconfirmed |
| Gengar | Sludge Bomb+ | movePlus | 7 | yes | poison | どくを付与する。 | unconfirmed | 6 | durationOrBuffDebuff | unconfirmed |
| Gengar | Sludge Bomb+ | movePlus | 7 | yes | attackStatChange | 攻撃・特攻などを変化させる。 | unconfirmed | 6 | durationOrBuffDebuff | unconfirmed |
| Gengar | Lick | initialMove |  |  | pull | 相手を引き寄せる。 | enemy |  |  | unconfirmed |
| Gengar | Dream Eater | moveChoice | 5 |  | sleep | ねむりを付与する。 | enemy | 1 | durationOrBuffDebuff | unconfirmed |
| Gengar | Dream Eater | moveChoice | 5 |  | stackOrMark | スタック、マーク、ゲージを扱う。 | enemy | 1 | targetOrSelfStack | unconfirmed |
| Gengar | Dream Eater | moveChoice | 5 |  | reuseOrSecondActivation | 再使用・派生・2段目を持つ。 | enemy | 5 | actionOrderOrCooldown | unconfirmed |
| Gengar | Dream Eater | moveChoice | 5 |  | koAssistTrigger | KOまたはアシストで発動する。 | enemy |  | koAssistEvent | unconfirmed |
| Gengar | Dream Eater+ | movePlus | 5 | yes | damageDealtChange | 与ダメージを変化させる。 | unconfirmed |  | durationOrBuffDebuff | unconfirmed |
| Gengar | Hex | moveChoice | 5 |  | invincible | 無敵になる。 | enemy |  | durationOrBuffDebuff | unconfirmed |
| Gengar | Hex | moveChoice | 5 |  | damageDealtChange | 与ダメージを変化させる。 | enemy |  | durationOrBuffDebuff | unconfirmed |
| Gengar | Hex | moveChoice | 5 |  | cooldownReduction | 待ち時間を短縮する。 | enemy |  | actionOrderOrCooldown | unconfirmed |
| Gengar | Phantom Ambush | uniteMove | 9 |  | slow | 移動速度を下げる。 | enemy |  | durationOrBuffDebuff | unconfirmed |
| Gengar | Phantom Ambush | uniteMove | 9 |  | unstoppable | 妨害無効になる。 | self | 7 | durationOrBuffDebuff | unconfirmed |
| Gengar | Phantom Ambush | uniteMove | 9 |  | invincible | 無敵になる。 | enemy | 1.5 | durationOrBuffDebuff | unconfirmed |
| Gengar | Phantom Ambush | uniteMove | 9 |  | reuseOrSecondActivation | 再使用・派生・2段目を持つ。 | enemy | 1.5 | actionOrderOrCooldown | unconfirmed |
| Gengar | Phantom Ambush Unite Buff | uniteBuff | 9 |  | shield | シールドを付与する。 | self |  | durationOrBuffDebuff | unconfirmed |
| Gengar | Phantom Ambush Unite Buff | uniteBuff | 9 |  | maxHpChange | 最大HPを変化させる。 | unconfirmed |  | hpState | unconfirmed |
| Glaceon | Run Away | passive |  |  | invincible | 無敵になる。 | self | 1 | durationOrBuffDebuff | unconfirmed |
| Glaceon | Attack | normalAttack |  |  | boostedAttackCycle | 通常攻撃回数により強化攻撃になる。 | unconfirmed |  | actionOrderOrCooldown | unconfirmed |
| Glaceon | Attack Boosted | boostedAttack |  |  | boostedAttackCycle | 通常攻撃回数により強化攻撃になる。 | unconfirmed |  | actionOrderOrCooldown | unconfirmed |
| Glaceon | Icicle Spear | moveChoice | 4 |  | freeze | こおり・凍結を付与する。 | unconfirmed | 2 | durationOrBuffDebuff | unconfirmed |
| Glaceon | Icicle Spear | moveChoice | 4 |  | cooldownReduction | 待ち時間を短縮する。 | unconfirmed | 2 | actionOrderOrCooldown | unconfirmed |
| Glaceon | Icicle Spear+ | movePlus | 4 | yes | hpReferenceDamage | 現在HP・最大HP・減少HPなどを参照する。 | enemy |  | hpState | unconfirmed |
| Glaceon | Icicle Spear+ | movePlus | 4 | yes | wildPokemonRule | 野生ポケモン限定の処理を持つ。 | unconfirmed |  | targetType | unconfirmed |
| Glaceon | Icy Wind | moveChoice | 4 |  | slow | 移動速度を下げる。 | enemy | 1 | durationOrBuffDebuff | unconfirmed |
| Glaceon | Icy Wind | moveChoice | 4 |  | stackOrMark | スタック、マーク、ゲージを扱う。 | enemy | 1 | targetOrSelfStack | unconfirmed |
| Glaceon | Icy Wind | moveChoice | 4 |  | nextBoostedAttack | 次の通常攻撃または強化攻撃を準備する。 | enemy | 5 | actionOrderOrCooldown | unconfirmed |
| Glaceon | Icy Wind | moveChoice | 4 |  | formChange | フォーム・モード・構えを変化させる。 | self |  | formOrMode | unconfirmed |
| Glaceon | Icy Wind+ | movePlus | 4 | yes | hpReferenceDamage | 現在HP・最大HP・減少HPなどを参照する。 | enemy |  | hpState | unconfirmed |
| Glaceon | Icy Wind+ | movePlus | 4 | yes | wildPokemonRule | 野生ポケモン限定の処理を持つ。 | unconfirmed |  | targetType | unconfirmed |
| Glaceon | Tail Whip | initialMove |  |  | defenseStatChange | 防御・特防を変化させる。 | enemy |  | durationOrBuffDebuff | unconfirmed |
| Glaceon | Tail Whip | initialMove |  |  | nextBoostedAttack | 次の通常攻撃または強化攻撃を準備する。 | unconfirmed |  | actionOrderOrCooldown | unconfirmed |
| Glaceon | Tail Whip | initialMove |  |  | boostedAttackCycle | 通常攻撃回数により強化攻撃になる。 | unconfirmed |  | actionOrderOrCooldown | unconfirmed |
| Glaceon | Ice Shard | moveChoice | 6 |  | attackSpeedUp | 通常攻撃速度を上げる。 | self | 1 | durationOrBuffDebuff | unconfirmed |
| Glaceon | Ice Shard | moveChoice | 6 |  | nextBoostedAttack | 次の通常攻撃または強化攻撃を準備する。 | unconfirmed | 0.5 | actionOrderOrCooldown | unconfirmed |
| Glaceon | Freeze Dry | moveChoice | 6 |  | freeze | こおり・凍結を付与する。 | unconfirmed | 2.5 | durationOrBuffDebuff | unconfirmed |
| Glaceon | Freeze Dry | moveChoice | 6 |  | slow | 移動速度を下げる。 | enemy | 3 | durationOrBuffDebuff | unconfirmed |
| Glaceon | Freeze Dry | moveChoice | 6 |  | attackStatChange | 攻撃・特攻などを変化させる。 | enemy |  | durationOrBuffDebuff | unconfirmed |
| Glaceon | Freeze Dry | moveChoice | 6 |  | formChange | フォーム・モード・構えを変化させる。 | enemy |  | formOrMode | unconfirmed |
| Glaceon | Glacial Stage | uniteMove | 8 |  | movementSpeedUp | 移動速度を上げる。 | self | 6 | durationOrBuffDebuff | unconfirmed |
| Glaceon | Glacial Stage Unite Buff | uniteBuff | 8 |  | shield | シールドを付与する。 | self |  | durationOrBuffDebuff | unconfirmed |
| Glaceon | Glacial Stage Unite Buff | uniteBuff | 8 |  | maxHpChange | 最大HPを変化させる。 | unconfirmed |  | hpState | unconfirmed |
| Goodra | Gooey | passive |  |  | slow | 移動速度を下げる。 | unconfirmed | 6 | durationOrBuffDebuff | unconfirmed |
| Goodra | Gooey | passive |  |  | healing | HPを回復する。 | ally | 3 | hpState | unconfirmed |
| Goodra | Gooey | passive |  |  | stackOrMark | スタック、マーク、ゲージを扱う。 | unconfirmed | 6 | targetOrSelfStack | unconfirmed |
| Goodra | Gooey | passive |  |  | hpReferenceDamage | 現在HP・最大HP・減少HPなどを参照する。 | unconfirmed |  | hpState | unconfirmed |
| Goodra | Gooey | passive |  |  | wildPokemonRule | 野生ポケモン限定の処理を持つ。 | enemy |  | targetType | unconfirmed |
| Goodra | Gooey | passive |  |  | wallOrTerrain | 壁・地形・草むらなどと相互作用する。 | ally | 3 |  | unconfirmed |
| Goodra | Attack | normalAttack |  |  | slow | 移動速度を下げる。 | unconfirmed | 0.5 | durationOrBuffDebuff | unconfirmed |
| Goodra | Attack | normalAttack |  |  | boostedAttackCycle | 通常攻撃回数により強化攻撃になる。 | unconfirmed |  | actionOrderOrCooldown | unconfirmed |
| Goodra | Attack | normalAttack |  |  | formChange | フォーム・モード・構えを変化させる。 | self | 0.5 | formOrMode | unconfirmed |
| Goodra | Attack Boosted | boostedAttack |  |  | hpReferenceDamage | 現在HP・最大HP・減少HPなどを参照する。 | unconfirmed |  | hpState | unconfirmed |
| Goodra | Attack Boosted | boostedAttack |  |  | wildPokemonRule | 野生ポケモン限定の処理を持つ。 | unconfirmed |  | targetType | unconfirmed |
| Goodra | Bubble | initialMove |  |  | slow | 移動速度を下げる。 | enemy | 2 | durationOrBuffDebuff | unconfirmed |
| Goodra | Bubble | initialMove |  |  | shield | シールドを付与する。 | self | 3 | durationOrBuffDebuff | unconfirmed |
| Goodra | Bubble | initialMove |  |  | reuseOrSecondActivation | 再使用・派生・2段目を持つ。 | enemy | 2 | actionOrderOrCooldown | unconfirmed |
| Goodra | Muddy Water | moveChoice | 5 |  | defenseStatChange | 防御・特防を変化させる。 | enemy | 3 | durationOrBuffDebuff | unconfirmed |
| Goodra | Muddy Water | moveChoice | 5 |  | stackOrMark | スタック、マーク、ゲージを扱う。 | unconfirmed |  | targetOrSelfStack | unconfirmed |
| Goodra | Muddy Water+ | movePlus | 5 | yes | defenseStatChange | 防御・特防を変化させる。 | enemy |  | durationOrBuffDebuff | unconfirmed |
| Goodra | Dragon Pulse | moveChoice | 5 |  | slow | 移動速度を下げる。 | enemy |  | durationOrBuffDebuff | unconfirmed |
| Goodra | Dragon Pulse | moveChoice | 5 |  | damageDealtChange | 与ダメージを変化させる。 | enemy |  | durationOrBuffDebuff | unconfirmed |
| Goodra | Dragon Pulse | moveChoice | 5 |  | hpReferenceDamage | 現在HP・最大HP・減少HPなどを参照する。 | unconfirmed |  | hpState | unconfirmed |
| Goodra | Dragon Pulse+ | movePlus | 5 | yes | hpReferenceDamage | 現在HP・最大HP・減少HPなどを参照する。 | unconfirmed |  | hpState | unconfirmed |
| Goodra | Tackle | initialMove |  |  | knockUp | 相手を打ち上げる。 | unconfirmed |  |  | unconfirmed |
| Goodra | Tackle | initialMove |  |  | formChange | フォーム・モード・構えを変化させる。 | self |  | formOrMode | unconfirmed |
| Goodra | Power Whip | moveChoice | 8 |  | pull | 相手を引き寄せる。 | unconfirmed |  |  | unconfirmed |
| Goodra | Power Whip | moveChoice | 8 |  | slow | 移動速度を下げる。 | unconfirmed | 3 | durationOrBuffDebuff | unconfirmed |
| Goodra | Power Whip | moveChoice | 8 |  | damageOverTime | 継続ダメージを与える。 | unconfirmed | 3 | durationOrBuffDebuff | unconfirmed |
| Goodra | Acid Spray | moveChoice | 8 |  | knockUp | 相手を打ち上げる。 | enemy | 0.75 |  | unconfirmed |
| Goodra | Acid Spray | moveChoice | 8 |  | slow | 移動速度を下げる。 | enemy | 3 | durationOrBuffDebuff | unconfirmed |
| Goodra | Acid Spray | moveChoice | 8 |  | damageOverTime | 継続ダメージを与える。 | enemy | 3 | durationOrBuffDebuff | unconfirmed |
| Goodra | Acid Spray | moveChoice | 8 |  | stackOrMark | スタック、マーク、ゲージを扱う。 | enemy | 0.75 | targetOrSelfStack | unconfirmed |
| Goodra | Acid Spray | moveChoice | 8 |  | reuseOrSecondActivation | 再使用・派生・2段目を持つ。 | enemy | 5 | actionOrderOrCooldown | unconfirmed |
| Goodra | Right as Rain Unite Buff | uniteBuff | 9 |  | shield | シールドを付与する。 | self |  | durationOrBuffDebuff | unconfirmed |
| Goodra | Right as Rain Unite Buff | uniteBuff | 9 |  | maxHpChange | 最大HPを変化させる。 | unconfirmed |  | hpState | unconfirmed |
| Greedent | Cheek Pouch | passive |  |  | healing | HPを回復する。 | self |  | hpState | unconfirmed |
| Greedent | Attack | normalAttack |  |  | boostedAttackCycle | 通常攻撃回数により強化攻撃になる。 | unconfirmed |  | actionOrderOrCooldown | unconfirmed |
| Greedent | Attack Boosted | boostedAttack |  |  | boostedAttackCycle | 通常攻撃回数により強化攻撃になる。 | unconfirmed |  | actionOrderOrCooldown | unconfirmed |
| Greedent | Belch | moveChoice | 7 |  | damageOverTime | 継続ダメージを与える。 | enemy | 2 | durationOrBuffDebuff | unconfirmed |
| Greedent | Defense Curl | initialMove |  |  | shield | シールドを付与する。 | self | 3 | durationOrBuffDebuff | unconfirmed |
| Greedent | Stuff Cheeks | moveChoice | 5 |  | movementSpeedUp | 移動速度を上げる。 | self | 6 | durationOrBuffDebuff | unconfirmed |
| Greedent | Stuff Cheeks | moveChoice | 5 |  | healing | HPを回復する。 | self |  | hpState | unconfirmed |
| Greedent | Stuff Cheeks | moveChoice | 5 |  | shield | シールドを付与する。 | self | 5 | durationOrBuffDebuff | unconfirmed |
| Greedent | Covet | moveChoice | 5 |  | knockUp | 相手を打ち上げる。 | enemy | 6.1 |  | unconfirmed |
| Greedent | Covet | moveChoice | 5 |  | unstoppable | 妨害無効になる。 | enemy |  | durationOrBuffDebuff | unconfirmed |
| Greedent | Covet | moveChoice | 5 |  | hindranceResistance | 妨害耐性を得る。 | enemy | 6.1 | durationOrBuffDebuff | unconfirmed |
| Greedent | Covet | moveChoice | 5 |  | movementSpeedUp | 移動速度を上げる。 | self | 1 | durationOrBuffDebuff | unconfirmed |
| Greedent | Covet | moveChoice | 5 |  | stackOrMark | スタック、マーク、ゲージを扱う。 | unconfirmed | 1 | targetOrSelfStack | unconfirmed |
| Greedent | Covet+ | movePlus | 5 | yes | damageDealtChange | 与ダメージを変化させる。 | unconfirmed |  | durationOrBuffDebuff | unconfirmed |
| Greedent | Berry Belly Flop | uniteMove | 9 |  | knockUp | 相手を打ち上げる。 | enemy | 1 |  | unconfirmed |
| Greedent | Berry Belly Flop | uniteMove | 9 |  | unstoppable | 妨害無効になる。 | self |  | durationOrBuffDebuff | unconfirmed |
| Greedent | Berry Belly Flop | uniteMove | 9 |  | cooldownReduction | 待ち時間を短縮する。 | unconfirmed | 8 | actionOrderOrCooldown | unconfirmed |
| Greedent | Berry Belly Flop | uniteMove | 9 |  | cooldownReset | 待ち時間をリセットする。 | unconfirmed | 8 | actionOrderOrCooldown | unconfirmed |
| Greedent | Berry Belly Flop | uniteMove | 9 |  | healing | HPを回復する。 | enemy |  | hpState | unconfirmed |
| Greedent | Berry Belly Flop Unite Buff | uniteBuff | 9 |  | shield | シールドを付与する。 | self |  | durationOrBuffDebuff | unconfirmed |
| Greedent | Berry Belly Flop Unite Buff | uniteBuff | 9 |  | maxHpChange | 最大HPを変化させる。 | unconfirmed |  | hpState | unconfirmed |
| Greninja | Torrent | passive |  |  | hpThreshold | HP割合条件で発動する。 | self |  | hpState | unconfirmed |
| Greninja | Attack | normalAttack |  |  | slow | 移動速度を下げる。 | enemy |  | durationOrBuffDebuff | unconfirmed |
| Greninja | Attack | normalAttack |  |  | damageDealtChange | 与ダメージを変化させる。 | enemy |  | durationOrBuffDebuff | unconfirmed |
| Greninja | Attack | normalAttack |  |  | boostedAttackCycle | 通常攻撃回数により強化攻撃になる。 | unconfirmed |  | actionOrderOrCooldown | unconfirmed |
| Greninja | Attack | normalAttack |  |  | hpReferenceDamage | 現在HP・最大HP・減少HPなどを参照する。 | enemy |  | hpState | unconfirmed |
| Greninja | Attack | normalAttack |  |  | wildPokemonRule | 野生ポケモン限定の処理を持つ。 | unconfirmed |  | targetType | unconfirmed |
| Greninja | Attack Boosted | boostedAttack |  |  | slow | 移動速度を下げる。 | enemy |  | durationOrBuffDebuff | unconfirmed |
| Greninja | Attack Boosted | boostedAttack |  |  | damageDealtChange | 与ダメージを変化させる。 | enemy |  | durationOrBuffDebuff | unconfirmed |
| Greninja | Attack Boosted | boostedAttack |  |  | boostedAttackCycle | 通常攻撃回数により強化攻撃になる。 | unconfirmed |  | actionOrderOrCooldown | unconfirmed |
| Greninja | Attack Boosted | boostedAttack |  |  | hpReferenceDamage | 現在HP・最大HP・減少HPなどを参照する。 | enemy |  | hpState | unconfirmed |
| Greninja | Water Shuriken | moveChoice | 7 |  | knockUp | 相手を打ち上げる。 | enemy | 3 |  | unconfirmed |
| Greninja | Water Shuriken | moveChoice | 7 |  | movementSpeedUp | 移動速度を上げる。 | self | 3 | durationOrBuffDebuff | unconfirmed |
| Greninja | Water Shuriken+ | movePlus | 7 | yes | knockUp | 相手を打ち上げる。 | unconfirmed |  |  | unconfirmed |
| Greninja | Surf | moveChoice | 7 |  | damageDealtChange | 与ダメージを変化させる。 | enemy |  | durationOrBuffDebuff | unconfirmed |
| Greninja | Surf | moveChoice | 7 |  | cooldownReset | 待ち時間をリセットする。 | enemy |  | actionOrderOrCooldown | unconfirmed |
| Greninja | Surf | moveChoice | 7 |  | wildPokemonRule | 野生ポケモン限定の処理を持つ。 | unconfirmed |  | targetType | unconfirmed |
| Greninja | Surf | moveChoice | 7 |  | koAssistTrigger | KOまたはアシストで発動する。 | enemy |  | koAssistEvent | unconfirmed |
| Greninja | Substitute | initialMove |  |  | invincible | 無敵になる。 | self | 3 | durationOrBuffDebuff | unconfirmed |
| Greninja | Substitute | initialMove |  |  | defenseStatChange | 防御・特防を変化させる。 | unconfirmed | 3 | durationOrBuffDebuff | unconfirmed |
| Greninja | Substitute | initialMove |  |  | cloneOrDecoy | 分身、コピー、身代わりなどを生成する。 | unconfirmed | 3 | durationOrBuffDebuff | unconfirmed |
| Greninja | Double Team | moveChoice | 5 |  | unstoppable | 妨害無効になる。 | ally | 3 | durationOrBuffDebuff | unconfirmed |
| Greninja | Double Team | moveChoice | 5 |  | defenseStatChange | 防御・特防を変化させる。 | ally | 3 | durationOrBuffDebuff | unconfirmed |
| Greninja | Double Team | moveChoice | 5 |  | cloneOrDecoy | 分身、コピー、身代わりなどを生成する。 | ally | 3 | durationOrBuffDebuff | unconfirmed |
| Greninja | Smokescreen | moveChoice | 5 |  | unstoppable | 妨害無効になる。 | self | 2 | durationOrBuffDebuff | unconfirmed |
| Greninja | Smokescreen | moveChoice | 5 |  | movementSpeedUp | 移動速度を上げる。 | self |  | durationOrBuffDebuff | unconfirmed |
| Greninja | Waterburst Shuriken | uniteMove | 9 |  | knockUp | 相手を打ち上げる。 | enemy | 2 |  | unconfirmed |
| Greninja | Waterburst Shuriken | uniteMove | 9 |  | unstoppable | 妨害無効になる。 | self | 2 | durationOrBuffDebuff | unconfirmed |
| Greninja | Waterburst Shuriken Unite Buff | uniteBuff | 9 |  | shield | シールドを付与する。 | self |  | durationOrBuffDebuff | unconfirmed |
| Greninja | Waterburst Shuriken Unite Buff | uniteBuff | 9 |  | maxHpChange | 最大HPを変化させる。 | unconfirmed |  | hpState | unconfirmed |
| Gyarados | Rattled | passive |  |  | movementSpeedUp | 移動速度を上げる。 | self | 3 | durationOrBuffDebuff | unconfirmed |
| Gyarados | Rattled | passive |  |  | stackOrMark | スタック、マーク、ゲージを扱う。 | enemy |  | targetOrSelfStack | unconfirmed |
| Gyarados | Rattled | passive |  |  | koAssistTrigger | KOまたはアシストで発動する。 | enemy |  | koAssistEvent | unconfirmed |
| Gyarados | Dragon Breath | moveChoice | 7 |  | paralysis | まひを付与する。 | enemy | 3 | durationOrBuffDebuff | unconfirmed |
| Gyarados | Dragon Breath | moveChoice | 7 |  | attackSpeedUp | 通常攻撃速度を上げる。 | enemy | 3 | durationOrBuffDebuff | unconfirmed |
| Gyarados | Dragon Breath+ | movePlus | 7 | yes | damageDealtChange | 与ダメージを変化させる。 | unconfirmed |  | durationOrBuffDebuff | unconfirmed |
| Gyarados | Aqua Tail | moveChoice | 7 |  | unstoppable | 妨害無効になる。 | self | 1.5 | durationOrBuffDebuff | unconfirmed |
| Gyarados | Aqua Tail | moveChoice | 7 |  | damageDealtChange | 与ダメージを変化させる。 | unconfirmed | 0.5 | durationOrBuffDebuff | unconfirmed |
| Gyarados | Aqua Tail+ | movePlus | 7 | yes | hpReferenceDamage | 現在HP・最大HP・減少HPなどを参照する。 | enemy |  | hpState | unconfirmed |
| Gyarados | Aqua Tail+ | movePlus | 7 | yes | wildPokemonRule | 野生ポケモン限定の処理を持つ。 | unconfirmed |  | targetType | unconfirmed |
| Gyarados | Waterfall | moveChoice | 7 |  | knockUp | 相手を打ち上げる。 | enemy | 0.45 |  | unconfirmed |
| Gyarados | Waterfall | moveChoice | 7 |  | pull | 相手を引き寄せる。 | unconfirmed | 2 |  | unconfirmed |
| Gyarados | Waterfall | moveChoice | 7 |  | shield | シールドを付与する。 | enemy | 2 | durationOrBuffDebuff | unconfirmed |
| Gyarados | Bounce | moveChoice | 7 |  | knockUp | 相手を打ち上げる。 | enemy | 5 |  | unconfirmed |
| Gyarados | Bounce | moveChoice | 7 |  | unstoppable | 妨害無効になる。 | self | 2.4 | durationOrBuffDebuff | unconfirmed |
| Gyarados | Bounce | moveChoice | 7 |  | shield | シールドを付与する。 | enemy | 5 | durationOrBuffDebuff | unconfirmed |
| Gyarados | Bounce+ | movePlus | 7 | yes | shield | シールドを付与する。 | self |  | durationOrBuffDebuff | unconfirmed |
| Gyarados | Dragon Current | uniteMove | 9 |  | knockUp | 相手を打ち上げる。 | enemy | 1 |  | unconfirmed |
| Gyarados | Dragon Current | uniteMove | 9 |  | untargetableOrStealth | 対象指定されない、またはステルス状態になる。 | enemy | 4 | durationOrBuffDebuff | unconfirmed |
| Gyarados | Dragon Current | uniteMove | 9 |  | movementSpeedUp | 移動速度を上げる。 | self | 4 | durationOrBuffDebuff | unconfirmed |
| Gyarados | Dragon Current | uniteMove | 9 |  | damageOverTime | 継続ダメージを与える。 | enemy | 4 | durationOrBuffDebuff | unconfirmed |
| Gyarados | Dragon Current Unite Buff | uniteBuff | 9 |  | cooldownReduction | 待ち時間を短縮する。 | unconfirmed |  | actionOrderOrCooldown | unconfirmed |
| Gyarados | Dragon Current Unite Buff | uniteBuff | 9 |  | shield | シールドを付与する。 | self |  | durationOrBuffDebuff | unconfirmed |
| Gyarados | Dragon Current Unite Buff | uniteBuff | 9 |  | maxHpChange | 最大HPを変化させる。 | unconfirmed |  | hpState | unconfirmed |
| Mega Gyarados | Swift Swim | passive |  |  | stackOrMark | スタック、マーク、ゲージを扱う。 | enemy |  | targetOrSelfStack | unconfirmed |
| Mega Gyarados | Swift Swim | passive |  |  | koAssistTrigger | KOまたはアシストで発動する。 | enemy |  | koAssistEvent | unconfirmed |
| Mega Gyarados | Attack | normalAttack |  |  | boostedAttackCycle | 通常攻撃回数により強化攻撃になる。 | unconfirmed |  | actionOrderOrCooldown | unconfirmed |
| Mega Gyarados | Attack | normalAttack |  |  | formChange | フォーム・モード・構えを変化させる。 | self |  | formOrMode | unconfirmed |
| Mega Gyarados | Dragon Breath | moveChoice | 7 |  | paralysis | まひを付与する。 | enemy | 3 | durationOrBuffDebuff | unconfirmed |
| Mega Gyarados | Dragon Breath | moveChoice | 7 |  | unstoppable | 妨害無効になる。 | enemy |  | durationOrBuffDebuff | unconfirmed |
| Mega Gyarados | Dragon Breath | moveChoice | 7 |  | attackSpeedUp | 通常攻撃速度を上げる。 | enemy | 3 | durationOrBuffDebuff | unconfirmed |
| Mega Gyarados | Dragon Breath | moveChoice | 7 |  | formChange | フォーム・モード・構えを変化させる。 | enemy |  | formOrMode | unconfirmed |
| Mega Gyarados | Dragon Breath+ | movePlus | 7 | yes | damageDealtChange | 与ダメージを変化させる。 | unconfirmed |  | durationOrBuffDebuff | unconfirmed |
| Mega Gyarados | Waterfall | moveChoice | 7 |  | knockUp | 相手を打ち上げる。 | enemy | 0.45 |  | unconfirmed |
| Mega Gyarados | Waterfall | moveChoice | 7 |  | pull | 相手を引き寄せる。 | unconfirmed | 2 |  | unconfirmed |
| Mega Gyarados | Waterfall | moveChoice | 7 |  | shield | シールドを付与する。 | enemy | 2 | durationOrBuffDebuff | unconfirmed |
| Mega Gyarados | Waterfall | moveChoice | 7 |  | formChange | フォーム・モード・構えを変化させる。 | self |  | formOrMode | unconfirmed |
| Mega Gyarados | Dragon Current | uniteMove | 9 |  | knockUp | 相手を打ち上げる。 | enemy | 2 |  | unconfirmed |
| Mega Gyarados | Dragon Current | uniteMove | 9 |  | slow | 移動速度を下げる。 | enemy | 1 | durationOrBuffDebuff | unconfirmed |
| Mega Gyarados | Dragon Current | uniteMove | 9 |  | untargetableOrStealth | 対象指定されない、またはステルス状態になる。 | enemy | 4 | durationOrBuffDebuff | unconfirmed |
| Mega Gyarados | Dragon Current | uniteMove | 9 |  | movementSpeedUp | 移動速度を上げる。 | self | 4 | durationOrBuffDebuff | unconfirmed |
| Mega Gyarados | Dragon Current | uniteMove | 9 |  | formChange | フォーム・モード・構えを変化させる。 | self |  | formOrMode | unconfirmed |
| Mega Gyarados | Dragon Current Unite Buff | uniteBuff | 9 |  | cooldownReduction | 待ち時間を短縮する。 | unconfirmed |  | actionOrderOrCooldown | unconfirmed |
| Mega Gyarados | Dragon Current Unite Buff | uniteBuff | 9 |  | shield | シールドを付与する。 | self |  | durationOrBuffDebuff | unconfirmed |
| Mega Gyarados | Dragon Current Unite Buff | uniteBuff | 9 |  | maxHpChange | 最大HPを変化させる。 | unconfirmed |  | hpState | unconfirmed |
| Ho-Oh | Regenerator | passive |  |  | shield | シールドを付与する。 | self |  | durationOrBuffDebuff | unconfirmed |
| Ho-Oh | Regenerator | passive |  |  | wildPokemonRule | 野生ポケモン限定の処理を持つ。 | enemy | 3 | targetType | unconfirmed |
| Ho-Oh | Attack | normalAttack |  |  | slow | 移動速度を下げる。 | unconfirmed |  | durationOrBuffDebuff | unconfirmed |
| Ho-Oh | Attack | normalAttack |  |  | healing | HPを回復する。 | self |  | hpState | unconfirmed |
| Ho-Oh | Attack | normalAttack |  |  | boostedAttackCycle | 通常攻撃回数により強化攻撃になる。 | enemy |  | actionOrderOrCooldown | unconfirmed |
| Ho-Oh | Safeguard | initialMove |  |  | movementSpeedUp | 移動速度を上げる。 | self | 3 | durationOrBuffDebuff | unconfirmed |
| Ho-Oh | Sacred Fire | moveChoice | 7 |  | burn | やけどを付与する。 | unconfirmed | 0.6 | durationOrBuffDebuff | unconfirmed |
| Ho-Oh | Sacred Fire | moveChoice | 7 |  | stun | 行動不能・スタンを付与する。 | unconfirmed | 0.6 | durationOrBuffDebuff | unconfirmed |
| Ho-Oh | Sacred Fire | moveChoice | 7 |  | movementSpeedUp | 移動速度を上げる。 | self |  | durationOrBuffDebuff | unconfirmed |
| Ho-Oh | Sacred Fire | moveChoice | 7 |  | attackStatChange | 攻撃・特攻などを変化させる。 | unconfirmed |  | durationOrBuffDebuff | unconfirmed |
| Ho-Oh | Sacred Fire | moveChoice | 7 |  | reuseOrSecondActivation | 再使用・派生・2段目を持つ。 | unconfirmed |  | actionOrderOrCooldown | unconfirmed |
| Ho-Oh | Sacred Fire | moveChoice | 7 |  | wallOrTerrain | 壁・地形・草むらなどと相互作用する。 | area |  |  | unconfirmed |
| Ho-Oh | Sacred Fire+ | movePlus | 7 | yes | burn | やけどを付与する。 | unconfirmed |  | durationOrBuffDebuff | unconfirmed |
| Ho-Oh | Fire Spin | moveChoice | 7 |  | stun | 行動不能・スタンを付与する。 | ally | 0.6 | durationOrBuffDebuff | unconfirmed |
| Ho-Oh | Fire Spin | moveChoice | 7 |  | slow | 移動速度を下げる。 | unconfirmed |  | durationOrBuffDebuff | unconfirmed |
| Ho-Oh | Fire Spin | moveChoice | 7 |  | shield | シールドを付与する。 | ally |  | durationOrBuffDebuff | unconfirmed |
| Ho-Oh | Fire Spin | moveChoice | 7 |  | damageOverTime | 継続ダメージを与える。 | enemy | 0.5 | durationOrBuffDebuff | unconfirmed |
| Ho-Oh | Fire Spin | moveChoice | 7 |  | reuseOrSecondActivation | 再使用・派生・2段目を持つ。 | enemy | 4 | actionOrderOrCooldown | unconfirmed |
| Ho-Oh | Fire Spin+ | movePlus | 7 | yes | shield | シールドを付与する。 | ally |  | durationOrBuffDebuff | unconfirmed |
| Ho-Oh | Tailwind | initialMove |  |  | movementSpeedUp | 移動速度を上げる。 | ally | 0.5 | durationOrBuffDebuff | unconfirmed |
| Ho-Oh | Flamethrower | moveChoice | 5 |  | burn | やけどを付与する。 | enemy | 3 | durationOrBuffDebuff | unconfirmed |
| Ho-Oh | Flamethrower | moveChoice | 5 |  | knockUp | 相手を打ち上げる。 | enemy |  |  | unconfirmed |
| Ho-Oh | Flamethrower | moveChoice | 5 |  | slow | 移動速度を下げる。 | enemy | 0.25 | durationOrBuffDebuff | unconfirmed |
| Ho-Oh | Flamethrower | moveChoice | 5 |  | healing | HPを回復する。 | enemy |  | hpState | unconfirmed |
| Ho-Oh | Sky Attack | moveChoice | 5 |  | burn | やけどを付与する。 | enemy | 4.5 | durationOrBuffDebuff | unconfirmed |
| Ho-Oh | Sky Attack | moveChoice | 5 |  | slow | 移動速度を下げる。 | enemy | 0.5 | durationOrBuffDebuff | unconfirmed |
| Ho-Oh | Sky Attack | moveChoice | 5 |  | damageOverTime | 継続ダメージを与える。 | enemy | 0.5 | durationOrBuffDebuff | unconfirmed |
| Ho-Oh | Sky Attack | moveChoice | 5 |  | reuseOrSecondActivation | 再使用・派生・2段目を持つ。 | unconfirmed |  | actionOrderOrCooldown | unconfirmed |
| Ho-Oh | Sky Attack+ | movePlus | 5 | yes | burn | やけどを付与する。 | ally |  | durationOrBuffDebuff | unconfirmed |
| Ho-Oh | Sky Attack+ | movePlus | 5 | yes | healing | HPを回復する。 | ally |  | hpState | unconfirmed |
| Ho-Oh | Rekindling Flame Unite Buff | uniteBuff | 9 |  | shield | シールドを付与する。 | self |  | durationOrBuffDebuff | unconfirmed |
| Ho-Oh | Rekindling Flame Unite Buff | uniteBuff | 9 |  | maxHpChange | 最大HPを変化させる。 | unconfirmed |  | hpState | unconfirmed |
| Hoopa | Attack | normalAttack |  |  | boostedAttackCycle | 通常攻撃回数により強化攻撃になる。 | enemy |  | actionOrderOrCooldown | unconfirmed |
| Hoopa | Attack Boosted | boostedAttack |  |  | boostedAttackCycle | 通常攻撃回数により強化攻撃になる。 | enemy |  | actionOrderOrCooldown | unconfirmed |
| Hoopa | Astonish | initialMove |  |  | stun | 行動不能・スタンを付与する。 | enemy | 75 | durationOrBuffDebuff | unconfirmed |
| Hoopa | Phantom Force | moveChoice | 6 |  | slow | 移動速度を下げる。 | enemy | 2 | durationOrBuffDebuff | unconfirmed |
| Hoopa | Phantom Force | moveChoice | 6 |  | healing | HPを回復する。 | ally |  | hpState | unconfirmed |
| Hoopa | Phantom Force+ | movePlus | 6 | yes | invincible | 無敵になる。 | self | 6 | durationOrBuffDebuff | unconfirmed |
| Hoopa | Shadow Ball | moveChoice | 6 |  | stun | 行動不能・スタンを付与する。 | enemy | 4 | durationOrBuffDebuff | unconfirmed |
| Hoopa | Shadow Ball | moveChoice | 6 |  | slow | 移動速度を下げる。 | enemy |  | durationOrBuffDebuff | unconfirmed |
| Hoopa | Shadow Ball | moveChoice | 6 |  | defenseStatChange | 防御・特防を変化させる。 | unconfirmed | 3 | durationOrBuffDebuff | unconfirmed |
| Hoopa | Confusion | initialMove |  |  | slow | 移動速度を下げる。 | enemy | 0.5 | durationOrBuffDebuff | unconfirmed |
| Hoopa | Hyperspace Hole+ | movePlus | 4 | yes | movementSpeedUp | 移動速度を上げる。 | ally |  | durationOrBuffDebuff | unconfirmed |
| Hoopa | Trick | moveChoice | 4 |  | movementSpeedUp | 移動速度を上げる。 | self |  | durationOrBuffDebuff | unconfirmed |
| Hoopa | Trick | moveChoice | 4 |  | damageDealtChange | 与ダメージを変化させる。 | ally |  | durationOrBuffDebuff | unconfirmed |
| Hoopa | Trick | moveChoice | 4 |  | shield | シールドを付与する。 | ally | 3 | durationOrBuffDebuff | unconfirmed |
| Hoopa | Trick | moveChoice | 4 |  | formChange | フォーム・モード・構えを変化させる。 | ally | 7 | formOrMode | unconfirmed |
| Hoopa | Trick+ | movePlus | 4 | yes | damageDealtChange | 与ダメージを変化させる。 | ally |  | durationOrBuffDebuff | unconfirmed |
| Hoopa | Trick+ | movePlus | 4 | yes | healing | HPを回復する。 | ally |  | hpState | unconfirmed |
| Hoopa | Rings Unbound | uniteMove | 9 |  | unstoppable | 妨害無効になる。 | self | 0.6 | durationOrBuffDebuff | unconfirmed |
| Hoopa | Rings Unbound | uniteMove | 9 |  | invincible | 無敵になる。 | self | 0.6 | durationOrBuffDebuff | unconfirmed |
| Hoopa | Rings Unbound | uniteMove | 9 |  | formChange | フォーム・モード・構えを変化させる。 | self | 0.6 | formOrMode | unconfirmed |
| Hoopa | Rings Unbound Unite Buff | uniteBuff | 9 |  | cooldownReduction | 待ち時間を短縮する。 | unconfirmed |  | actionOrderOrCooldown | unconfirmed |
| Hoopa | Rings Unbound Unite Buff | uniteBuff | 9 |  | shield | シールドを付与する。 | self |  | durationOrBuffDebuff | unconfirmed |
| Hoopa | Rings Unbound Unite Buff | uniteBuff | 9 |  | maxHpChange | 最大HPを変化させる。 | unconfirmed |  | hpState | unconfirmed |
| Inteleon | Sniper | passive |  |  | slow | 移動速度を下げる。 | unconfirmed |  | durationOrBuffDebuff | unconfirmed |
| Inteleon | Sniper | passive |  |  | stackOrMark | スタック、マーク、ゲージを扱う。 | enemy | 1 | targetOrSelfStack | unconfirmed |
| Inteleon | Sniper | passive |  |  | wallOrTerrain | 壁・地形・草むらなどと相互作用する。 | enemy | 1 |  | unconfirmed |
| Inteleon | Sniper | passive |  |  | criticalGuaranteedOrDisabled | 急所確定または急所不可などを持つ。 | ally |  |  | unconfirmed |
| Inteleon | Attack | normalAttack |  |  | boostedAttackCycle | 通常攻撃回数により強化攻撃になる。 | unconfirmed |  | actionOrderOrCooldown | unconfirmed |
| Inteleon | Attack Boosted | boostedAttack |  |  | boostedAttackCycle | 通常攻撃回数により強化攻撃になる。 | unconfirmed |  | actionOrderOrCooldown | unconfirmed |
| Inteleon | Tearful Look | initialMove |  |  | attackStatChange | 攻撃・特攻などを変化させる。 | enemy | 3 | durationOrBuffDebuff | unconfirmed |
| Inteleon | Tearful Look | initialMove |  |  | stackOrMark | スタック、マーク、ゲージを扱う。 | unconfirmed | 3 | targetOrSelfStack | unconfirmed |
| Inteleon | Fell Stinger | moveChoice | 5 |  | pull | 相手を引き寄せる。 | unconfirmed |  |  | unconfirmed |
| Inteleon | Fell Stinger | moveChoice | 5 |  | cooldownReduction | 待ち時間を短縮する。 | unconfirmed |  | actionOrderOrCooldown | unconfirmed |
| Inteleon | Fell Stinger | moveChoice | 5 |  | stackOrMark | スタック、マーク、ゲージを扱う。 | unconfirmed |  | targetOrSelfStack | unconfirmed |
| Inteleon | Fell Stinger | moveChoice | 5 |  | wallOrTerrain | 壁・地形・草むらなどと相互作用する。 | area |  |  | unconfirmed |
| Inteleon | Acrobatics | moveChoice | 5 |  | cooldownReduction | 待ち時間を短縮する。 | unconfirmed |  | actionOrderOrCooldown | unconfirmed |
| Inteleon | Acrobatics | moveChoice | 5 |  | stackOrMark | スタック、マーク、ゲージを扱う。 | unconfirmed |  | targetOrSelfStack | unconfirmed |
| Inteleon | Acrobatics | moveChoice | 5 |  | wallOrTerrain | 壁・地形・草むらなどと相互作用する。 | area |  |  | unconfirmed |
| Inteleon | Acrobatics+ | movePlus | 5 | yes | formChange | フォーム・モード・構えを変化させる。 | self |  | formOrMode | unconfirmed |
| Inteleon | Snipe Shot | moveChoice | 7 |  | defenseStatChange | 防御・特防を変化させる。 | ally | 6 | durationOrBuffDebuff | unconfirmed |
| Inteleon | Snipe Shot | moveChoice | 7 |  | formChange | フォーム・モード・構えを変化させる。 | self |  | formOrMode | unconfirmed |
| Inteleon | Snipe Shot+ | movePlus | 7 | yes | cooldownReduction | 待ち時間を短縮する。 | unconfirmed | 1 | actionOrderOrCooldown | unconfirmed |
| Inteleon | Liquidation | moveChoice | 7 |  | slow | 移動速度を下げる。 | unconfirmed | 1.7 | durationOrBuffDebuff | unconfirmed |
| Inteleon | Azure Spy Vision | uniteMove | 9 |  | stackOrMark | スタック、マーク、ゲージを扱う。 | unconfirmed |  | targetOrSelfStack | unconfirmed |
| Inteleon | Azure Spy Vision | uniteMove | 9 |  | wallOrTerrain | 壁・地形・草むらなどと相互作用する。 | area | 10.5 |  | unconfirmed |
| Inteleon | Azure Spy Vision Unite Buff | uniteBuff | 9 |  | shield | シールドを付与する。 | self |  | durationOrBuffDebuff | unconfirmed |
| Inteleon | Azure Spy Vision Unite Buff | uniteBuff | 9 |  | maxHpChange | 最大HPを変化させる。 | unconfirmed |  | hpState | unconfirmed |
| Lapras | Shell Armor | passive |  |  | formChange | フォーム・モード・構えを変化させる。 | self |  | formOrMode | unconfirmed |
| Lapras | Attack | normalAttack |  |  | healing | HPを回復する。 | self |  | hpState | unconfirmed |
| Lapras | Attack | normalAttack |  |  | boostedAttackCycle | 通常攻撃回数により強化攻撃になる。 | enemy |  | actionOrderOrCooldown | unconfirmed |
| Lapras | Whirlpool | initialMove |  |  | damageOverTime | 継続ダメージを与える。 | enemy | 3 | durationOrBuffDebuff | unconfirmed |
| Lapras | Water Pulse | moveChoice | 5 |  | nextBoostedAttack | 次の通常攻撃または強化攻撃を準備する。 | unconfirmed |  | actionOrderOrCooldown | unconfirmed |
| Lapras | Water Pulse | moveChoice | 5 |  | boostedAttackCycle | 通常攻撃回数により強化攻撃になる。 | unconfirmed |  | actionOrderOrCooldown | unconfirmed |
| Lapras | Perish Song+ | movePlus | 5 | yes | boostedAttackCycle | 通常攻撃回数により強化攻撃になる。 | unconfirmed |  | actionOrderOrCooldown | unconfirmed |
| Lapras | Perish Song+ | movePlus | 5 | yes | hpReferenceDamage | 現在HP・最大HP・減少HPなどを参照する。 | unconfirmed |  | hpState | unconfirmed |
| Lapras | Ice Shard | initialMove |  |  | freeze | こおり・凍結を付与する。 | unconfirmed | 0.6 | durationOrBuffDebuff | unconfirmed |
| Lapras | Ice Shard | initialMove |  |  | knockBack | 相手を押し出す。 | unconfirmed | 0.4 |  | unconfirmed |
| Lapras | Bubble Beam | moveChoice | 7 |  | stun | 行動不能・スタンを付与する。 | unconfirmed | 1 | durationOrBuffDebuff | unconfirmed |
| Lapras | Bubble Beam | moveChoice | 7 |  | slow | 移動速度を下げる。 | unconfirmed | 3 | durationOrBuffDebuff | unconfirmed |
| Lapras | Bubble Beam | moveChoice | 7 |  | shield | シールドを付与する。 | self | 4 | durationOrBuffDebuff | unconfirmed |
| Lapras | Bubble Beam | moveChoice | 7 |  | formChange | フォーム・モード・構えを変化させる。 | self | 3 | formOrMode | unconfirmed |
| Lapras | Bubble Beam+ | movePlus | 7 | yes | shield | シールドを付与する。 | self |  | durationOrBuffDebuff | unconfirmed |
| Lapras | Ice Beam | moveChoice | 7 |  | freeze | こおり・凍結を付与する。 | unconfirmed | 0.4 | durationOrBuffDebuff | unconfirmed |
| Lapras | Ice Beam | moveChoice | 7 |  | movementSpeedUp | 移動速度を上げる。 | self | 0.5 | durationOrBuffDebuff | unconfirmed |
| Lapras | Ice Beam | moveChoice | 7 |  | stackOrMark | スタック、マーク、ゲージを扱う。 | unconfirmed | 0.4 | targetOrSelfStack | unconfirmed |
| Lapras | Ice Beam+ | movePlus | 7 | yes | freeze | こおり・凍結を付与する。 | unconfirmed | 1.5 | durationOrBuffDebuff | unconfirmed |
| Lapras | Lapras Express | uniteMove | 9 |  | knockUp | 相手を打ち上げる。 | unconfirmed | 1.5 |  | unconfirmed |
| Lapras | Lapras Express | uniteMove | 9 |  | unstoppable | 妨害無効になる。 | self | 15 | durationOrBuffDebuff | unconfirmed |
| Lapras | Lapras Express | uniteMove | 9 |  | reuseOrSecondActivation | 再使用・派生・2段目を持つ。 | unconfirmed | 1.5 | actionOrderOrCooldown | unconfirmed |
| Lapras | Lapras Express Unite Buff | uniteBuff | 9 |  | shield | シールドを付与する。 | self |  | durationOrBuffDebuff | unconfirmed |
| Lapras | Lapras Express Unite Buff | uniteBuff | 9 |  | maxHpChange | 最大HPを変化させる。 | unconfirmed |  | hpState | unconfirmed |
| Latias | Levitate | passive |  |  | unstoppable | 妨害無効になる。 | self | 2 | durationOrBuffDebuff | unconfirmed |
| Latias | Levitate | passive |  |  | movementSpeedUp | 移動速度を上げる。 | self | 2 | durationOrBuffDebuff | unconfirmed |
| Latias | Levitate | passive |  |  | nextBoostedAttack | 次の通常攻撃または強化攻撃を準備する。 | unconfirmed | 2 | actionOrderOrCooldown | unconfirmed |
| Latias | Mist Ball | moveChoice | 6 |  | slow | 移動速度を下げる。 | enemy | 2 | durationOrBuffDebuff | unconfirmed |
| Latias | Mist Ball | moveChoice | 6 |  | stackOrMark | スタック、マーク、ゲージを扱う。 | enemy | 2 | targetOrSelfStack | unconfirmed |
| Latias | Mist Ball | moveChoice | 6 |  | reuseOrSecondActivation | 再使用・派生・2段目を持つ。 | unconfirmed | 0.9 | actionOrderOrCooldown | unconfirmed |
| Latias | Mist Ball+ | movePlus | 6 | yes | stackOrMark | スタック、マーク、ゲージを扱う。 | unconfirmed | 3 | targetOrSelfStack | unconfirmed |
| Latias | Dragon Cheer | moveChoice | 6 |  | shield | シールドを付与する。 | ally | 3 | durationOrBuffDebuff | unconfirmed |
| Latias | Dragon Cheer | moveChoice | 6 |  | reuseOrSecondActivation | 再使用・派生・2段目を持つ。 | ally | 3 | actionOrderOrCooldown | unconfirmed |
| Latias | Dragon Cheer+ | movePlus | 6 | yes | shield | シールドを付与する。 | self |  | durationOrBuffDebuff | unconfirmed |
| Latias | Dragon Pulse | moveChoice | 4 |  | slow | 移動速度を下げる。 | unconfirmed |  | durationOrBuffDebuff | unconfirmed |
| Latias | Dragon Pulse | moveChoice | 4 |  | wildPokemonRule | 野生ポケモン限定の処理を持つ。 | unconfirmed |  | targetType | unconfirmed |
| Latias | Dragon Pulse+ | movePlus | 4 | yes | slow | 移動速度を下げる。 | enemy | 2 | durationOrBuffDebuff | unconfirmed |
| Latias | Dragon Breath | moveChoice | 4 |  | slow | 移動速度を下げる。 | enemy | 3 | durationOrBuffDebuff | unconfirmed |
| Latias | Dragon Breath | moveChoice | 4 |  | defenseStatChange | 防御・特防を変化させる。 | enemy |  | durationOrBuffDebuff | unconfirmed |
| Latias | Dragon Breath | moveChoice | 4 |  | wildPokemonRule | 野生ポケモン限定の処理を持つ。 | unconfirmed |  | targetType | unconfirmed |
| Latias | Dragon Breath+ | movePlus | 4 | yes | slow | 移動速度を下げる。 | unconfirmed | 3 | durationOrBuffDebuff | unconfirmed |
| Latias | Mist Blast | uniteMove | 8 |  | stackOrMark | スタック、マーク、ゲージを扱う。 | enemy |  | targetOrSelfStack | unconfirmed |
| Latias | Mist Blast Unite Buff | uniteBuff | 8 |  | shield | シールドを付与する。 | self |  | durationOrBuffDebuff | unconfirmed |
| Latias | Mist Blast Unite Buff | uniteBuff | 8 |  | maxHpChange | 最大HPを変化させる。 | unconfirmed |  | hpState | unconfirmed |
| Latios | Levitate | passive |  |  | unstoppable | 妨害無効になる。 | self | 2 | durationOrBuffDebuff | unconfirmed |
| Latios | Levitate | passive |  |  | movementSpeedUp | 移動速度を上げる。 | self | 2 | durationOrBuffDebuff | unconfirmed |
| Latios | Levitate | passive |  |  | nextBoostedAttack | 次の通常攻撃または強化攻撃を準備する。 | unconfirmed | 2 | actionOrderOrCooldown | unconfirmed |
| Latios | Luster Purge | moveChoice | 7 |  | stackOrMark | スタック、マーク、ゲージを扱う。 | unconfirmed | 3 | targetOrSelfStack | unconfirmed |
| Latios | Luster Purge | moveChoice | 7 |  | reuseOrSecondActivation | 再使用・派生・2段目を持つ。 | ally | 0.85 | actionOrderOrCooldown | unconfirmed |
| Latios | Luster Purge | moveChoice | 7 |  | cleanse | 状態異常や低下効果を解除する。 | self |  | durationOrBuffDebuff | unconfirmed |
| Latios | Luster Purge+ | movePlus | 7 | yes | stackOrMark | スタック、マーク、ゲージを扱う。 | unconfirmed | 6 | targetOrSelfStack | unconfirmed |
| Latios | Telekinesis | moveChoice | 7 |  | stun | 行動不能・スタンを付与する。 | enemy | 1 | durationOrBuffDebuff | unconfirmed |
| Latios | Telekinesis | moveChoice | 7 |  | knockUp | 相手を打ち上げる。 | unconfirmed |  |  | unconfirmed |
| Latios | Telekinesis | moveChoice | 7 |  | pull | 相手を引き寄せる。 | enemy | 0.7 |  | unconfirmed |
| Latios | Telekinesis | moveChoice | 7 |  | stackOrMark | スタック、マーク、ゲージを扱う。 | enemy | 4 | targetOrSelfStack | unconfirmed |
| Latios | Telekinesis | moveChoice | 7 |  | formChange | フォーム・モード・構えを変化させる。 | enemy | 0.7 | formOrMode | unconfirmed |
| Latios | Telekinesis | moveChoice | 7 |  | reuseOrSecondActivation | 再使用・派生・2段目を持つ。 | enemy | 2 | actionOrderOrCooldown | unconfirmed |
| Latios | Telekinesis | moveChoice | 7 |  | cleanse | 状態異常や低下効果を解除する。 | self |  | durationOrBuffDebuff | unconfirmed |
| Latios | Dragon Pulse | moveChoice | 5 |  | wildPokemonRule | 野生ポケモン限定の処理を持つ。 | unconfirmed |  | targetType | unconfirmed |
| Latios | Dragon Pulse+ | movePlus | 5 | yes | hpReferenceDamage | 現在HP・最大HP・減少HPなどを参照する。 | enemy |  | hpState | unconfirmed |
| Latios | Draco Meteor | moveChoice | 5 |  | wildPokemonRule | 野生ポケモン限定の処理を持つ。 | unconfirmed |  | targetType | unconfirmed |
| Latios | Draco Meteor+ | movePlus | 5 | yes | hpReferenceDamage | 現在HP・最大HP・減少HPなどを参照する。 | enemy |  | hpState | unconfirmed |
| Latios | Eon Blast | uniteMove | 9 |  | stackOrMark | スタック、マーク、ゲージを扱う。 | enemy |  | targetOrSelfStack | unconfirmed |
| Latios | Eon Blast Unite Buff | uniteBuff | 9 |  | cooldownReduction | 待ち時間を短縮する。 | unconfirmed |  | actionOrderOrCooldown | unconfirmed |
| Latios | Eon Blast Unite Buff | uniteBuff | 9 |  | shield | シールドを付与する。 | self |  | durationOrBuffDebuff | unconfirmed |
| Latios | Eon Blast Unite Buff | uniteBuff | 9 |  | maxHpChange | 最大HPを変化させる。 | unconfirmed |  | hpState | unconfirmed |
| Leafeon | Attack - Eevee | normalAttack |  |  | boostedAttackCycle | 通常攻撃回数により強化攻撃になる。 | unconfirmed |  | actionOrderOrCooldown | unconfirmed |
| Leafeon | Attack - Eevee Boosted | boostedAttack |  |  | boostedAttackCycle | 通常攻撃回数により強化攻撃になる。 | unconfirmed |  | actionOrderOrCooldown | unconfirmed |
| Leafeon | Swift | initialMove |  |  | damageReduction | 受けるダメージを軽減する。 | unconfirmed |  | durationOrBuffDebuff | unconfirmed |
| Leafeon | Razor Leaf | moveChoice | 4 |  | damageReduction | 受けるダメージを軽減する。 | unconfirmed | 1 | durationOrBuffDebuff | unconfirmed |
| Leafeon | Razor Leaf | moveChoice | 4 |  | shield | シールドを付与する。 | self | 0.5 | durationOrBuffDebuff | unconfirmed |
| Leafeon | Razor Leaf+ | movePlus | 4 | yes | shield | シールドを付与する。 | self |  | durationOrBuffDebuff | unconfirmed |
| Leafeon | Solar Blade | moveChoice | 4 |  | stackOrMark | スタック、マーク、ゲージを扱う。 | unconfirmed |  | targetOrSelfStack | unconfirmed |
| Leafeon | Solar Blade | moveChoice | 4 |  | reuseOrSecondActivation | 再使用・派生・2段目を持つ。 | unconfirmed |  | actionOrderOrCooldown | unconfirmed |
| Leafeon | Solar Blade+ | movePlus | 4 | yes | damageReduction | 受けるダメージを軽減する。 | unconfirmed |  | durationOrBuffDebuff | unconfirmed |
| Leafeon | Aerial Ace | moveChoice | 6 |  | damageOverTime | 継続ダメージを与える。 | unconfirmed | 0.5 | durationOrBuffDebuff | unconfirmed |
| Leafeon | Aerial Ace+ | movePlus | 6 | yes | cooldownReduction | 待ち時間を短縮する。 | unconfirmed | 0.5 | actionOrderOrCooldown | unconfirmed |
| Leafeon | Leaf Blade | moveChoice | 6 |  | slow | 移動速度を下げる。 | enemy | 2 | durationOrBuffDebuff | unconfirmed |
| Leafeon | Leaf Blade | moveChoice | 6 |  | stackOrMark | スタック、マーク、ゲージを扱う。 | enemy | 1.2 | targetOrSelfStack | unconfirmed |
| Leafeon | Leaf Blade+ | movePlus | 6 | yes | fieldArea | フィールド・設置範囲を生成する。 | enemy | 1.2 | durationOrBuffDebuff | unconfirmed |
| Leafeon | Emerald Two-Step | uniteMove | 8 |  | slow | 移動速度を下げる。 | ally | 2 | durationOrBuffDebuff | unconfirmed |
| Leafeon | Emerald Two-Step | uniteMove | 8 |  | unstoppable | 妨害無効になる。 | self |  | durationOrBuffDebuff | unconfirmed |
| Leafeon | Emerald Two-Step Unite Buff | uniteBuff | 8 |  | shield | シールドを付与する。 | self |  | durationOrBuffDebuff | unconfirmed |
| Leafeon | Emerald Two-Step Unite Buff | uniteBuff | 8 |  | maxHpChange | 最大HPを変化させる。 | unconfirmed |  | hpState | unconfirmed |
| Lucario | Steadfast | passive |  |  | shield | シールドを付与する。 | self | 5 | durationOrBuffDebuff | unconfirmed |
| Lucario | Steadfast | passive |  |  | hpThreshold | HP割合条件で発動する。 | self | 5 | hpState | unconfirmed |
| Lucario | Attack | normalAttack |  |  | knockUp | 相手を打ち上げる。 | enemy | 0.5 |  | unconfirmed |
| Lucario | Attack | normalAttack |  |  | boostedAttackCycle | 通常攻撃回数により強化攻撃になる。 | unconfirmed |  | actionOrderOrCooldown | unconfirmed |
| Lucario | Attack | normalAttack |  |  | formChange | フォーム・モード・構えを変化させる。 | self |  | formOrMode | unconfirmed |
| Lucario | Attack Boosted | boostedAttack |  |  | knockUp | 相手を打ち上げる。 | enemy |  |  | unconfirmed |
| Lucario | Attack Boosted | boostedAttack |  |  | boostedAttackCycle | 通常攻撃回数により強化攻撃になる。 | unconfirmed |  | actionOrderOrCooldown | unconfirmed |
| Lucario | Attack Boosted | boostedAttack |  |  | formChange | フォーム・モード・構えを変化させる。 | self |  | formOrMode | unconfirmed |
| Lucario | Quick Attack | initialMove |  |  | untargetableOrStealth | 対象指定されない、またはステルス状態になる。 | enemy |  | durationOrBuffDebuff | unconfirmed |
| Lucario | Extreme Speed | moveChoice | 5 |  | cooldownReset | 待ち時間をリセットする。 | enemy |  | actionOrderOrCooldown | unconfirmed |
| Lucario | Extreme Speed | moveChoice | 5 |  | stackOrMark | スタック、マーク、ゲージを扱う。 | enemy | 10 | targetOrSelfStack | unconfirmed |
| Lucario | Power-Up Punch | moveChoice | 5 |  | slow | 移動速度を下げる。 | unconfirmed |  | durationOrBuffDebuff | unconfirmed |
| Lucario | Power-Up Punch | moveChoice | 5 |  | damageReduction | 受けるダメージを軽減する。 | unconfirmed | 4 | durationOrBuffDebuff | unconfirmed |
| Lucario | Power-Up Punch | moveChoice | 5 |  | cooldownReduction | 待ち時間を短縮する。 | unconfirmed |  | actionOrderOrCooldown | unconfirmed |
| Lucario | Power-Up Punch | moveChoice | 5 |  | delayedDamage | 遅延または時間差でダメージを与える。 | unconfirmed | 1 | durationOrBuffDebuff | unconfirmed |
| Lucario | Power-Up Punch | moveChoice | 5 |  | nextBoostedAttack | 次の通常攻撃または強化攻撃を準備する。 | unconfirmed |  | actionOrderOrCooldown | unconfirmed |
| Lucario | Power-Up Punch | moveChoice | 5 |  | boostedAttackCycle | 通常攻撃回数により強化攻撃になる。 | unconfirmed |  | actionOrderOrCooldown | unconfirmed |
| Lucario | Power-Up Punch | moveChoice | 5 |  | hpReferenceDamage | 現在HP・最大HP・減少HPなどを参照する。 | enemy | 0.5 | hpState | unconfirmed |
| Lucario | Power-Up Punch | moveChoice | 5 |  | wildPokemonRule | 野生ポケモン限定の処理を持つ。 | unconfirmed |  | targetType | unconfirmed |
| Lucario | Power-Up Punch+ | movePlus | 5 | yes | unstoppable | 妨害無効になる。 | self |  | durationOrBuffDebuff | unconfirmed |
| Lucario | Power-Up Punch+ | movePlus | 5 | yes | hindranceResistance | 妨害耐性を得る。 | self |  | durationOrBuffDebuff | unconfirmed |
| Lucario | Meteor Mash | initialMove |  |  | stun | 行動不能・スタンを付与する。 | enemy | 0.4 | durationOrBuffDebuff | unconfirmed |
| Lucario | Bone Rush | moveChoice | 7 |  | stun | 行動不能・スタンを付与する。 | enemy | 0.4 | durationOrBuffDebuff | unconfirmed |
| Lucario | Bone Rush | moveChoice | 7 |  | knockUp | 相手を打ち上げる。 | enemy | 0.4 |  | unconfirmed |
| Lucario | Bone Rush | moveChoice | 7 |  | stackOrMark | スタック、マーク、ゲージを扱う。 | enemy |  | targetOrSelfStack | unconfirmed |
| Lucario | Bone Rush | moveChoice | 7 |  | formChange | フォーム・モード・構えを変化させる。 | enemy | 0.4 | formOrMode | unconfirmed |
| Lucario | Bone Rush | moveChoice | 7 |  | reuseOrSecondActivation | 再使用・派生・2段目を持つ。 | enemy | 3 | actionOrderOrCooldown | unconfirmed |
| Lucario | Close Combat | moveChoice | 7 |  | unstoppable | 妨害無効になる。 | self | 1.4 | durationOrBuffDebuff | unconfirmed |
| Lucario | Aura Cannon | uniteMove | 9 |  | knockBack | 相手を押し出す。 | unconfirmed | 1 |  | unconfirmed |
| Lucario | Aura Cannon | uniteMove | 9 |  | unstoppable | 妨害無効になる。 | self | 0.6 | durationOrBuffDebuff | unconfirmed |
| Lucario | Aura Cannon | uniteMove | 9 |  | damageDealtChange | 与ダメージを変化させる。 | unconfirmed |  | durationOrBuffDebuff | unconfirmed |
| Lucario | Aura Cannon | uniteMove | 9 |  | stackOrMark | スタック、マーク、ゲージを扱う。 | enemy |  | targetOrSelfStack | unconfirmed |
| Lucario | Aura Cannon Unite Buff | uniteBuff | 9 |  | cooldownReduction | 待ち時間を短縮する。 | unconfirmed |  | actionOrderOrCooldown | unconfirmed |
| Lucario | Aura Cannon Unite Buff | uniteBuff | 9 |  | shield | シールドを付与する。 | self |  | durationOrBuffDebuff | unconfirmed |
| Lucario | Aura Cannon Unite Buff | uniteBuff | 9 |  | maxHpChange | 最大HPを変化させる。 | unconfirmed |  | hpState | unconfirmed |
| Mega Lucario | Attack | normalAttack |  |  | knockUp | 相手を打ち上げる。 | enemy | 0.5 |  | unconfirmed |
| Mega Lucario | Attack | normalAttack |  |  | boostedAttackCycle | 通常攻撃回数により強化攻撃になる。 | unconfirmed |  | actionOrderOrCooldown | unconfirmed |
| Mega Lucario | Power-Up Punch | moveChoice | 5 |  | knockUp | 相手を打ち上げる。 | enemy | 0.4 |  | unconfirmed |
| Mega Lucario | Power-Up Punch | moveChoice | 5 |  | slow | 移動速度を下げる。 | unconfirmed | 4 | durationOrBuffDebuff | unconfirmed |
| Mega Lucario | Power-Up Punch | moveChoice | 5 |  | damageReduction | 受けるダメージを軽減する。 | unconfirmed | 4 | durationOrBuffDebuff | unconfirmed |
| Mega Lucario | Power-Up Punch | moveChoice | 5 |  | cooldownReduction | 待ち時間を短縮する。 | unconfirmed | 1 | actionOrderOrCooldown | unconfirmed |
| Mega Lucario | Power-Up Punch | moveChoice | 5 |  | delayedDamage | 遅延または時間差でダメージを与える。 | unconfirmed | 4 | durationOrBuffDebuff | unconfirmed |
| Mega Lucario | Power-Up Punch | moveChoice | 5 |  | hpReferenceDamage | 現在HP・最大HP・減少HPなどを参照する。 | enemy | 0.5 | hpState | unconfirmed |
| Mega Lucario | Power-Up Punch | moveChoice | 5 |  | formChange | フォーム・モード・構えを変化させる。 | self |  | formOrMode | unconfirmed |
| Mega Lucario | Power-Up Punch+ | movePlus | 5 | yes | unstoppable | 妨害無効になる。 | self |  | durationOrBuffDebuff | unconfirmed |
| Mega Lucario | Meteor Mash | initialMove |  |  | stun | 行動不能・スタンを付与する。 | enemy | 0.4 | durationOrBuffDebuff | unconfirmed |
| Mega Lucario | Close Combat | moveChoice | 7 |  | slow | 移動速度を下げる。 | enemy | 0.4 | durationOrBuffDebuff | unconfirmed |
| Mega Lucario | Close Combat | moveChoice | 7 |  | unstoppable | 妨害無効になる。 | enemy |  | durationOrBuffDebuff | unconfirmed |
| Mega Lucario | Close Combat | moveChoice | 7 |  | cooldownReduction | 待ち時間を短縮する。 | enemy | 1 | actionOrderOrCooldown | unconfirmed |
| Mega Lucario | Close Combat | moveChoice | 7 |  | healing | HPを回復する。 | self |  | hpState | unconfirmed |
| Mega Lucario | Close Combat | moveChoice | 7 |  | nextBoostedAttack | 次の通常攻撃または強化攻撃を準備する。 | enemy | 5 | actionOrderOrCooldown | unconfirmed |
| Mega Lucario | Close Combat | moveChoice | 7 |  | formChange | フォーム・モード・構えを変化させる。 | self |  | formOrMode | unconfirmed |
| Mega Lucario | Aura Cannon | uniteMove | 9 |  | unstoppable | 妨害無効になる。 | enemy |  | durationOrBuffDebuff | unconfirmed |
| Mega Lucario | Aura Cannon | uniteMove | 9 |  | formChange | フォーム・モード・構えを変化させる。 | self | 25 | formOrMode | unconfirmed |
| Mega Lucario | Aura Cannon Unite Buff | uniteBuff | 9 |  | cooldownReduction | 待ち時間を短縮する。 | unconfirmed |  | actionOrderOrCooldown | unconfirmed |
| Mega Lucario | Aura Cannon Unite Buff | uniteBuff | 9 |  | shield | シールドを付与する。 | self |  | durationOrBuffDebuff | unconfirmed |
| Mega Lucario | Aura Cannon Unite Buff | uniteBuff | 9 |  | maxHpChange | 最大HPを変化させる。 | unconfirmed |  | hpState | unconfirmed |
| Machamp | Attack | normalAttack |  |  | boostedAttackCycle | 通常攻撃回数により強化攻撃になる。 | unconfirmed |  | actionOrderOrCooldown | unconfirmed |
| Machamp | Attack Boosted | boostedAttack |  |  | boostedAttackCycle | 通常攻撃回数により強化攻撃になる。 | unconfirmed |  | actionOrderOrCooldown | unconfirmed |
| Machamp | Close Combat | moveChoice | 7 |  | unstoppable | 妨害無効になる。 | self |  | durationOrBuffDebuff | unconfirmed |
| Machamp | Close Combat | moveChoice | 7 |  | hindranceResistance | 妨害耐性を得る。 | self |  | durationOrBuffDebuff | unconfirmed |
| Machamp | Close Combat+ | movePlus | 7 | yes | damageDealtChange | 与ダメージを変化させる。 | enemy |  | durationOrBuffDebuff | unconfirmed |
| Machamp | Cross Chop | moveChoice | 7 |  | criticalRateUp | 急所率を上げる。 | self | 3 | durationOrBuffDebuff | unconfirmed |
| Machamp | Cross Chop+ | movePlus | 7 | yes | stackOrMark | スタック、マーク、ゲージを扱う。 | enemy |  | targetOrSelfStack | unconfirmed |
| Machamp | Bulk Up | initialMove |  |  | unstoppable | 妨害無効になる。 | ally | 3 | durationOrBuffDebuff | unconfirmed |
| Machamp | Bulk Up | initialMove |  |  | hindranceResistance | 妨害耐性を得る。 | self |  | durationOrBuffDebuff | unconfirmed |
| Machamp | Bulk Up | initialMove |  |  | movementSpeedUp | 移動速度を上げる。 | self |  | durationOrBuffDebuff | unconfirmed |
| Machamp | Bulk Up | initialMove |  |  | boostedAttackCycle | 通常攻撃回数により強化攻撃になる。 | unconfirmed |  | actionOrderOrCooldown | unconfirmed |
| Machamp | Dynamic Punch | moveChoice | 5 |  | stun | 行動不能・スタンを付与する。 | enemy | 0.5 | durationOrBuffDebuff | unconfirmed |
| Machamp | Dynamic Punch | moveChoice | 5 |  | slow | 移動速度を下げる。 | enemy | 0.5 | durationOrBuffDebuff | unconfirmed |
| Machamp | Dynamic Punch | moveChoice | 5 |  | unstoppable | 妨害無効になる。 | enemy | 0.5 | durationOrBuffDebuff | unconfirmed |
| Machamp | Dynamic Punch | moveChoice | 5 |  | hindranceResistance | 妨害耐性を得る。 | self |  | durationOrBuffDebuff | unconfirmed |
| Machamp | Dynamic Punch | moveChoice | 5 |  | attackSpeedUp | 通常攻撃速度を上げる。 | self |  | durationOrBuffDebuff | unconfirmed |
| Machamp | Dynamic Punch | moveChoice | 5 |  | attackStatChange | 攻撃・特攻などを変化させる。 | unconfirmed | 5 | durationOrBuffDebuff | unconfirmed |
| Machamp | Dynamic Punch | moveChoice | 5 |  | nextBoostedAttack | 次の通常攻撃または強化攻撃を準備する。 | unconfirmed |  | actionOrderOrCooldown | unconfirmed |
| Machamp | Dynamic Punch | moveChoice | 5 |  | boostedAttackCycle | 通常攻撃回数により強化攻撃になる。 | unconfirmed |  | actionOrderOrCooldown | unconfirmed |
| Machamp | Dynamic Punch+ | movePlus | 5 | yes | slow | 移動速度を下げる。 | unconfirmed |  | durationOrBuffDebuff | unconfirmed |
| Machamp | Dynamic Punch+ | movePlus | 5 | yes | movementSpeedUp | 移動速度を上げる。 | self |  | durationOrBuffDebuff | unconfirmed |
| Machamp | Submission | moveChoice | 5 |  | stun | 行動不能・スタンを付与する。 | enemy |  | durationOrBuffDebuff | unconfirmed |
| Machamp | Submission | moveChoice | 5 |  | unstoppable | 妨害無効になる。 | self | 5 | durationOrBuffDebuff | unconfirmed |
| Machamp | Submission | moveChoice | 5 |  | hindranceResistance | 妨害耐性を得る。 | self |  | durationOrBuffDebuff | unconfirmed |
| Machamp | Submission | moveChoice | 5 |  | movementSpeedUp | 移動速度を上げる。 | self |  | durationOrBuffDebuff | unconfirmed |
| Machamp | Submission | moveChoice | 5 |  | nextBoostedAttack | 次の通常攻撃または強化攻撃を準備する。 | unconfirmed | 5 | actionOrderOrCooldown | unconfirmed |
| Machamp | Submission+ | movePlus | 5 | yes | criticalRateUp | 急所率を上げる。 | self |  | durationOrBuffDebuff | unconfirmed |
| Machamp | Barrage Blow | uniteMove | 9 |  | knockBack | 相手を押し出す。 | enemy | 8 |  | unconfirmed |
| Machamp | Barrage Blow | uniteMove | 9 |  | unstoppable | 妨害無効になる。 | enemy | 8 | durationOrBuffDebuff | unconfirmed |
| Machamp | Barrage Blow | uniteMove | 9 |  | defenseStatChange | 防御・特防を変化させる。 | unconfirmed |  | durationOrBuffDebuff | unconfirmed |
| Machamp | Barrage Blow | uniteMove | 9 |  | reuseOrSecondActivation | 再使用・派生・2段目を持つ。 | enemy |  | actionOrderOrCooldown | unconfirmed |
| Machamp | Barrage Blow Unite Buff | uniteBuff | 9 |  | shield | シールドを付与する。 | self |  | durationOrBuffDebuff | unconfirmed |
| Machamp | Barrage Blow Unite Buff | uniteBuff | 9 |  | maxHpChange | 最大HPを変化させる。 | unconfirmed |  | hpState | unconfirmed |
| Mamoswine | Thick Fat | passive |  |  | defenseStatChange | 防御・特防を変化させる。 | unconfirmed | 5 | durationOrBuffDebuff | unconfirmed |
| Mamoswine | Thick Fat | passive |  |  | stackOrMark | スタック、マーク、ゲージを扱う。 | unconfirmed | 5 | targetOrSelfStack | unconfirmed |
| Mamoswine | Thick Fat | passive |  |  | nextBoostedAttack | 次の通常攻撃または強化攻撃を準備する。 | unconfirmed |  | actionOrderOrCooldown | unconfirmed |
| Mamoswine | Attack | normalAttack |  |  | freeze | こおり・凍結を付与する。 | unconfirmed |  | durationOrBuffDebuff | unconfirmed |
| Mamoswine | Attack | normalAttack |  |  | boostedAttackCycle | 通常攻撃回数により強化攻撃になる。 | enemy | 0.5 | actionOrderOrCooldown | unconfirmed |
| Mamoswine | Attack Boosted | boostedAttack |  |  | freeze | こおり・凍結を付与する。 | enemy |  | durationOrBuffDebuff | unconfirmed |
| Mamoswine | Attack Boosted | boostedAttack |  |  | boostedAttackCycle | 通常攻撃回数により強化攻撃になる。 | enemy |  | actionOrderOrCooldown | unconfirmed |
| Mamoswine | Ice Shard | initialMove |  |  | freeze | こおり・凍結を付与する。 | enemy | 0.5 | durationOrBuffDebuff | unconfirmed |
| Mamoswine | Icicle Crash | moveChoice | 5 |  | freeze | こおり・凍結を付与する。 | enemy | 1 | durationOrBuffDebuff | unconfirmed |
| Mamoswine | Icicle Crash | moveChoice | 5 |  | delayedDamage | 遅延または時間差でダメージを与える。 | enemy | 1 | durationOrBuffDebuff | unconfirmed |
| Mamoswine | Icicle Crash | moveChoice | 5 |  | nextBoostedAttack | 次の通常攻撃または強化攻撃を準備する。 | unconfirmed |  | actionOrderOrCooldown | unconfirmed |
| Mamoswine | Icicle Crash+ | movePlus | 5 | yes | stun | 行動不能・スタンを付与する。 | enemy | 2 | durationOrBuffDebuff | unconfirmed |
| Mamoswine | Ice Fang | moveChoice | 5 |  | freeze | こおり・凍結を付与する。 | enemy | 1 | durationOrBuffDebuff | unconfirmed |
| Mamoswine | Ice Fang | moveChoice | 5 |  | stun | 行動不能・スタンを付与する。 | enemy |  | durationOrBuffDebuff | unconfirmed |
| Mamoswine | Ice Fang | moveChoice | 5 |  | knockUp | 相手を打ち上げる。 | enemy | 1 |  | unconfirmed |
| Mamoswine | Ice Fang | moveChoice | 5 |  | nextBoostedAttack | 次の通常攻撃または強化攻撃を準備する。 | unconfirmed |  | actionOrderOrCooldown | unconfirmed |
| Mamoswine | Ice Fang+ | movePlus | 5 | yes | freeze | こおり・凍結を付与する。 | enemy |  | durationOrBuffDebuff | unconfirmed |
| Mamoswine | Tackle | initialMove |  |  | knockUp | 相手を打ち上げる。 | enemy | 0.5 |  | unconfirmed |
| Mamoswine | High Horsepower | moveChoice | 7 |  | freeze | こおり・凍結を付与する。 | enemy |  | durationOrBuffDebuff | unconfirmed |
| Mamoswine | High Horsepower | moveChoice | 7 |  | stun | 行動不能・スタンを付与する。 | enemy | 0.35 | durationOrBuffDebuff | unconfirmed |
| Mamoswine | High Horsepower | moveChoice | 7 |  | knockBack | 相手を押し出す。 | enemy |  |  | unconfirmed |
| Mamoswine | High Horsepower | moveChoice | 7 |  | damageDealtChange | 与ダメージを変化させる。 | enemy |  | durationOrBuffDebuff | unconfirmed |
| Mamoswine | High Horsepower+ | movePlus | 7 | yes | stun | 行動不能・スタンを付与する。 | enemy | 2 | durationOrBuffDebuff | unconfirmed |
| Mamoswine | Earthquake | moveChoice | 7 |  | pull | 相手を引き寄せる。 | enemy |  |  | unconfirmed |
| Mamoswine | Earthquake+ | movePlus | 7 | yes | pull | 相手を引き寄せる。 | enemy | 2.5 |  | unconfirmed |
| Mamoswine | Mammoth Mash | uniteMove | 9 |  | knockUp | 相手を打ち上げる。 | enemy | 1.5 |  | unconfirmed |
| Mamoswine | Mammoth Mash | uniteMove | 9 |  | slow | 移動速度を下げる。 | enemy | 0.5 | durationOrBuffDebuff | unconfirmed |
| Mamoswine | Mammoth Mash | uniteMove | 9 |  | unstoppable | 妨害無効になる。 | self |  | durationOrBuffDebuff | unconfirmed |
| Mamoswine | Mammoth Mash | uniteMove | 9 |  | hindranceResistance | 妨害耐性を得る。 | enemy |  | durationOrBuffDebuff | unconfirmed |
| Mamoswine | Mammoth Mash Unite Buff | uniteBuff | 9 |  | shield | シールドを付与する。 | self |  | durationOrBuffDebuff | unconfirmed |
| Mamoswine | Mammoth Mash Unite Buff | uniteBuff | 9 |  | maxHpChange | 最大HPを変化させる。 | unconfirmed |  | hpState | unconfirmed |
| Meganium | Overgrow | passive |  |  | healing | HPを回復する。 | ally |  | hpState | unconfirmed |
| Meganium | Magical Leaf | initialMove |  |  | slow | 移動速度を下げる。 | enemy | 2 | durationOrBuffDebuff | unconfirmed |
| Meganium | Grass Knot | moveChoice | 5 |  | delayedDamage | 遅延または時間差でダメージを与える。 | enemy | 2 | durationOrBuffDebuff | unconfirmed |
| Meganium | Grass Knot+ | movePlus | 5 | yes | cooldownReduction | 待ち時間を短縮する。 | unconfirmed | 1 | actionOrderOrCooldown | unconfirmed |
| Meganium | Synthesis | initialMove |  |  | healing | HPを回復する。 | ally | 3 | hpState | unconfirmed |
| Meganium | Petal Blizzard | moveChoice | 7 |  | slow | 移動速度を下げる。 | ally | 2 | durationOrBuffDebuff | unconfirmed |
| Meganium | Petal Blizzard | moveChoice | 7 |  | healing | HPを回復する。 | ally | 2 | hpState | unconfirmed |
| Meganium | Petal Blizzard | moveChoice | 7 |  | damageOverTime | 継続ダメージを与える。 | enemy | 2 | durationOrBuffDebuff | unconfirmed |
| Meganium | Petal Blizzard | moveChoice | 7 |  | formChange | フォーム・モード・構えを変化させる。 | self |  | formOrMode | unconfirmed |
| Meganium | Petal Blizzard+ | movePlus | 7 | yes | healing | HPを回復する。 | self |  | hpState | unconfirmed |
| Meganium | Full Bloom Aroma | uniteMove | 7 |  | damageOverTime | 継続ダメージを与える。 | enemy | 0.5 | durationOrBuffDebuff | unconfirmed |
| Meganium | Full Bloom Aroma Unite Buff | uniteBuff | 7 |  | shield | シールドを付与する。 | self |  | durationOrBuffDebuff | unconfirmed |
| Meganium | Full Bloom Aroma Unite Buff | uniteBuff | 7 |  | maxHpChange | 最大HPを変化させる。 | unconfirmed |  | hpState | unconfirmed |
| Meowscarada | Overgrow | passive |  |  | untargetableOrStealth | 対象指定されない、またはステルス状態になる。 | unconfirmed | 1.5 | durationOrBuffDebuff | unconfirmed |
| Meowscarada | Overgrow | passive |  |  | damageDealtChange | 与ダメージを変化させる。 | unconfirmed | 4 | durationOrBuffDebuff | unconfirmed |
| Meowscarada | Overgrow | passive |  |  | healing | HPを回復する。 | self | 4 | hpState | unconfirmed |
| Meowscarada | Leafage | initialMove |  |  | damageReduction | 受けるダメージを軽減する。 | enemy |  | durationOrBuffDebuff | unconfirmed |
| Meowscarada | Flower Trick | moveChoice | 6 |  | cooldownReset | 待ち時間をリセットする。 | enemy |  | actionOrderOrCooldown | unconfirmed |
| Meowscarada | Flower Trick | moveChoice | 6 |  | hpReferenceDamage | 現在HP・最大HP・減少HPなどを参照する。 | enemy |  | hpState | unconfirmed |
| Meowscarada | Flower Trick | moveChoice | 6 |  | wildPokemonRule | 野生ポケモン限定の処理を持つ。 | unconfirmed |  | targetType | unconfirmed |
| Meowscarada | Flower Trick | moveChoice | 6 |  | reuseOrSecondActivation | 再使用・派生・2段目を持つ。 | unconfirmed |  | actionOrderOrCooldown | unconfirmed |
| Meowscarada | Flower Trick | moveChoice | 6 |  | attachToAlly | 味方へ付着または移動する。 | enemy | 5 |  | unconfirmed |
| Meowscarada | Flower Trick | moveChoice | 6 |  | koAssistTrigger | KOまたはアシストで発動する。 | enemy |  | koAssistEvent | unconfirmed |
| Meowscarada | Flower Trick+ | movePlus | 6 | yes | movementSpeedUp | 移動速度を上げる。 | self | 3 | durationOrBuffDebuff | unconfirmed |
| Meowscarada | Night Slash | moveChoice | 6 |  | knockUp | 相手を打ち上げる。 | enemy | 5 |  | unconfirmed |
| Meowscarada | Night Slash | moveChoice | 6 |  | cooldownReduction | 待ち時間を短縮する。 | enemy | 0.5 | actionOrderOrCooldown | unconfirmed |
| Meowscarada | Night Slash | moveChoice | 6 |  | healing | HPを回復する。 | enemy | 0.5 | hpState | unconfirmed |
| Meowscarada | Night Slash | moveChoice | 6 |  | stackOrMark | スタック、マーク、ゲージを扱う。 | enemy | 5 | targetOrSelfStack | unconfirmed |
| Meowscarada | Night Slash+ | movePlus | 6 | yes | stackOrMark | スタック、マーク、ゲージを扱う。 | enemy |  | targetOrSelfStack | unconfirmed |
| Meowscarada | Double Team | moveChoice | 7 |  | stun | 行動不能・スタンを付与する。 | enemy | 0.8 | durationOrBuffDebuff | unconfirmed |
| Meowscarada | Double Team | moveChoice | 7 |  | damageOverTime | 継続ダメージを与える。 | unconfirmed | 3 | durationOrBuffDebuff | unconfirmed |
| Meowscarada | Double Team | moveChoice | 7 |  | reuseOrSecondActivation | 再使用・派生・2段目を持つ。 | enemy | 0.8 | actionOrderOrCooldown | unconfirmed |
| Meowscarada | Double Team | moveChoice | 7 |  | cloneOrDecoy | 分身、コピー、身代わりなどを生成する。 | unconfirmed | 3.3 | durationOrBuffDebuff | unconfirmed |
| Meowscarada | Double Team+ | movePlus | 7 | yes | cloneOrDecoy | 分身、コピー、身代わりなどを生成する。 | unconfirmed | 4.6 | durationOrBuffDebuff | unconfirmed |
| Meowscarada | Trailblaze | moveChoice | 7 |  | paralysis | まひを付与する。 | enemy | 2 | durationOrBuffDebuff | unconfirmed |
| Meowscarada | Trailblaze | moveChoice | 7 |  | movementSpeedUp | 移動速度を上げる。 | enemy | 4 | durationOrBuffDebuff | unconfirmed |
| Meowscarada | Trailblaze | moveChoice | 7 |  | attackSpeedUp | 通常攻撃速度を上げる。 | enemy | 4 | durationOrBuffDebuff | unconfirmed |
| Meowscarada | Trailblaze | moveChoice | 7 |  | cooldownReset | 待ち時間をリセットする。 | enemy |  | actionOrderOrCooldown | unconfirmed |
| Meowscarada | Trailblaze | moveChoice | 7 |  | damageOverTime | 継続ダメージを与える。 | enemy | 4 | durationOrBuffDebuff | unconfirmed |
| Meowscarada | Trailblaze | moveChoice | 7 |  | wallOrTerrain | 壁・地形・草むらなどと相互作用する。 | area |  |  | unconfirmed |
| Meowscarada | Trailblaze | moveChoice | 7 |  | koAssistTrigger | KOまたはアシストで発動する。 | enemy |  | koAssistEvent | unconfirmed |
| Meowscarada | Trailblaze+ | movePlus | 7 | yes | shield | シールドを付与する。 | self |  | durationOrBuffDebuff | unconfirmed |
| Meowscarada | Floral Flourish | uniteMove | 9 |  | slow | 移動速度を下げる。 | unconfirmed |  | durationOrBuffDebuff | unconfirmed |
| Meowscarada | Floral Flourish | uniteMove | 9 |  | invincible | 無敵になる。 | self |  | durationOrBuffDebuff | unconfirmed |
| Meowscarada | Floral Flourish | uniteMove | 9 |  | reuseOrSecondActivation | 再使用・派生・2段目を持つ。 | unconfirmed |  | actionOrderOrCooldown | unconfirmed |
| Meowscarada | Floral Flourish Unite Buff | uniteBuff | 9 |  | shield | シールドを付与する。 | self |  | durationOrBuffDebuff | unconfirmed |
| Meowscarada | Floral Flourish Unite Buff | uniteBuff | 9 |  | maxHpChange | 最大HPを変化させる。 | unconfirmed |  | hpState | unconfirmed |
| Meowth | Pickup | passive |  |  | damageOverTime | 継続ダメージを与える。 | unconfirmed | 3 | durationOrBuffDebuff | unconfirmed |
| Meowth | Pickup | passive |  |  | wildPokemonRule | 野生ポケモン限定の処理を持つ。 | unconfirmed | 30 | targetType | unconfirmed |
| Meowth | Pickup | passive |  |  | cloneOrDecoy | 分身、コピー、身代わりなどを生成する。 | enemy | 30 | durationOrBuffDebuff | unconfirmed |
| Meowth | Attack | normalAttack |  |  | boostedAttackCycle | 通常攻撃回数により強化攻撃になる。 | enemy |  | actionOrderOrCooldown | unconfirmed |
| Meowth | Pay Day | moveChoice | 5 |  | slow | 移動速度を下げる。 | enemy | 1.5 | durationOrBuffDebuff | unconfirmed |
| Meowth | Pay Day | moveChoice | 5 |  | cooldownReduction | 待ち時間を短縮する。 | unconfirmed | 4 | actionOrderOrCooldown | unconfirmed |
| Meowth | Pay Day+ | movePlus | 5 | yes | damageDealtChange | 与ダメージを変化させる。 | unconfirmed |  | durationOrBuffDebuff | unconfirmed |
| Meowth | Fury Swipes | moveChoice | 5 |  | stun | 行動不能・スタンを付与する。 | enemy | 0.8 | durationOrBuffDebuff | unconfirmed |
| Meowth | Fury Swipes | moveChoice | 5 |  | shield | シールドを付与する。 | self | 5 | durationOrBuffDebuff | unconfirmed |
| Meowth | Fury Swipes | moveChoice | 5 |  | stackOrMark | スタック、マーク、ゲージを扱う。 | enemy | 5 | targetOrSelfStack | unconfirmed |
| Meowth | Fury Swipes+ | movePlus | 5 | yes | damageDealtChange | 与ダメージを変化させる。 | unconfirmed |  | durationOrBuffDebuff | unconfirmed |
| Meowth | Feint Attack | moveChoice | 7 |  | stun | 行動不能・スタンを付与する。 | enemy | 0.6 | durationOrBuffDebuff | unconfirmed |
| Meowth | Feint Attack | moveChoice | 7 |  | shield | シールドを付与する。 | self | 3 | durationOrBuffDebuff | unconfirmed |
| Meowth | Feint Attack | moveChoice | 7 |  | stackOrMark | スタック、マーク、ゲージを扱う。 | unconfirmed |  | targetOrSelfStack | unconfirmed |
| Meowth | Feint Attack | moveChoice | 7 |  | nextBoostedAttack | 次の通常攻撃または強化攻撃を準備する。 | unconfirmed |  | actionOrderOrCooldown | unconfirmed |
| Meowth | Feint Attack | moveChoice | 7 |  | boostedAttackCycle | 通常攻撃回数により強化攻撃になる。 | unconfirmed |  | actionOrderOrCooldown | unconfirmed |
| Meowth | Feint Attack+ | movePlus | 7 | yes | shield | シールドを付与する。 | self |  | durationOrBuffDebuff | unconfirmed |
| Meowth | Assurance | moveChoice | 7 |  | healing | HPを回復する。 | self |  | hpState | unconfirmed |
| Meowth | Assurance | moveChoice | 7 |  | stackOrMark | スタック、マーク、ゲージを扱う。 | enemy | 5 | targetOrSelfStack | unconfirmed |
| Meowth | Gold Coin Barrage | uniteMove | 9 |  | slow | 移動速度を下げる。 | unconfirmed |  | durationOrBuffDebuff | unconfirmed |
| Meowth | Gold Coin Barrage | uniteMove | 9 |  | unstoppable | 妨害無効になる。 | enemy |  | durationOrBuffDebuff | unconfirmed |
| Meowth | Gold Coin Barrage Unite Buff | uniteBuff | 9 |  | shield | シールドを付与する。 | self |  | durationOrBuffDebuff | unconfirmed |
| Meowth | Gold Coin Barrage Unite Buff | uniteBuff | 9 |  | maxHpChange | 最大HPを変化させる。 | unconfirmed |  | hpState | unconfirmed |
| Metagross | Attack | normalAttack |  |  | boostedAttackCycle | 通常攻撃回数により強化攻撃になる。 | unconfirmed |  | actionOrderOrCooldown | unconfirmed |
| Metagross | Iron Defense | initialMove |  |  | shield | シールドを付与する。 | self | 5 | durationOrBuffDebuff | unconfirmed |
| Metagross | Meteor Mash | moveChoice | 5 |  | slow | 移動速度を下げる。 | enemy | 3 | durationOrBuffDebuff | unconfirmed |
| Metagross | Meteor Mash | moveChoice | 5 |  | shield | シールドを付与する。 | enemy | 3 | durationOrBuffDebuff | unconfirmed |
| Metagross | Meteor Mash | moveChoice | 5 |  | stackOrMark | スタック、マーク、ゲージを扱う。 | enemy |  | targetOrSelfStack | unconfirmed |
| Metagross | Meteor Mash+ | movePlus | 5 | yes | healing | HPを回復する。 | self |  | hpState | unconfirmed |
| Metagross | Gyro Ball | moveChoice | 5 |  | shield | シールドを付与する。 | enemy | 4 | durationOrBuffDebuff | unconfirmed |
| Metagross | Gyro Ball | moveChoice | 5 |  | stackOrMark | スタック、マーク、ゲージを扱う。 | enemy |  | targetOrSelfStack | unconfirmed |
| Metagross | Gyro Ball | moveChoice | 5 |  | wildPokemonRule | 野生ポケモン限定の処理を持つ。 | enemy |  | targetType | unconfirmed |
| Metagross | Gyro Ball+ | movePlus | 5 | yes | healing | HPを回復する。 | self |  | hpState | unconfirmed |
| Metagross | Gyro Ball+ | movePlus | 5 | yes | shield | シールドを付与する。 | self |  | durationOrBuffDebuff | unconfirmed |
| Metagross | Zen Headbutt | moveChoice | 7 |  | knockUp | 相手を打ち上げる。 | enemy | 0.8 |  | unconfirmed |
| Metagross | Magnet Rise | moveChoice | 7 |  | wallOrTerrain | 壁・地形・草むらなどと相互作用する。 | enemy |  |  | unconfirmed |
| Metagross | Compute and Crush | uniteMove | 9 |  | stun | 行動不能・スタンを付与する。 | enemy | 0.8 | durationOrBuffDebuff | unconfirmed |
| Metagross | Compute and Crush | uniteMove | 9 |  | unstoppable | 妨害無効になる。 | enemy |  | durationOrBuffDebuff | unconfirmed |
| Metagross | Compute and Crush | uniteMove | 9 |  | shield | シールドを付与する。 | enemy |  | durationOrBuffDebuff | unconfirmed |
| Metagross | Compute and Crush | uniteMove | 9 |  | stackOrMark | スタック、マーク、ゲージを扱う。 | enemy |  | targetOrSelfStack | unconfirmed |
| Metagross | Compute and Crush | uniteMove | 9 |  | hpReferenceDamage | 現在HP・最大HP・減少HPなどを参照する。 | enemy | 0.8 | hpState | unconfirmed |
| Metagross | Compute and Crush | uniteMove | 9 |  | reuseOrSecondActivation | 再使用・派生・2段目を持つ。 | unconfirmed |  | actionOrderOrCooldown | unconfirmed |
| Metagross | Compute and Crush | uniteMove | 9 |  | wallOrTerrain | 壁・地形・草むらなどと相互作用する。 | enemy |  |  | unconfirmed |
| Metagross | Compute and Crush Unite Buff | uniteBuff | 9 |  | cooldownReduction | 待ち時間を短縮する。 | unconfirmed |  | actionOrderOrCooldown | unconfirmed |
| Metagross | Compute and Crush Unite Buff | uniteBuff | 9 |  | shield | シールドを付与する。 | self |  | durationOrBuffDebuff | unconfirmed |
| Metagross | Compute and Crush Unite Buff | uniteBuff | 9 |  | maxHpChange | 最大HPを変化させる。 | unconfirmed |  | hpState | unconfirmed |
| Mew | Synchronize | passive |  |  | movementSpeedUp | 移動速度を上げる。 | ally | 2 | durationOrBuffDebuff | unconfirmed |
| Mew | Attack | normalAttack |  |  | stackOrMark | スタック、マーク、ゲージを扱う。 | unconfirmed |  | targetOrSelfStack | unconfirmed |
| Mew | Attack | normalAttack |  |  | nextBoostedAttack | 次の通常攻撃または強化攻撃を準備する。 | enemy | 8 | actionOrderOrCooldown | unconfirmed |
| Mew | Attack | normalAttack |  |  | boostedAttackCycle | 通常攻撃回数により強化攻撃になる。 | enemy | 8 | actionOrderOrCooldown | unconfirmed |
| Mew | Attack | normalAttack |  |  | wildPokemonRule | 野生ポケモン限定の処理を持つ。 | enemy |  | targetType | unconfirmed |
| Mew | Electro Ball | initialMove |  |  | paralysis | まひを付与する。 | enemy | 2 | durationOrBuffDebuff | unconfirmed |
| Mew | Electro Ball | initialMove |  |  | slow | 移動速度を下げる。 | enemy | 2 | durationOrBuffDebuff | unconfirmed |
| Mew | Electro Ball | initialMove |  |  | attackSpeedDown | 通常攻撃速度を下げる。 | enemy | 2 | durationOrBuffDebuff | unconfirmed |
| Mew | Electro Ball | initialMove |  |  | damageDealtChange | 与ダメージを変化させる。 | unconfirmed |  | durationOrBuffDebuff | unconfirmed |
| Mew | Electro Ball | initialMove |  |  | hpReferenceDamage | 現在HP・最大HP・減少HPなどを参照する。 | enemy |  | hpState | unconfirmed |
| Mew | Electro Ball | initialMove |  |  | wildPokemonRule | 野生ポケモン限定の処理を持つ。 | unconfirmed |  | targetType | unconfirmed |
| Mew | Solar Beam | moveChoice | 1 |  | damageDealtChange | 与ダメージを変化させる。 | unconfirmed |  | durationOrBuffDebuff | unconfirmed |
| Mew | Solar Beam | moveChoice | 1 |  | damageOverTime | 継続ダメージを与える。 | enemy |  | durationOrBuffDebuff | unconfirmed |
| Mew | Solar Beam | moveChoice | 1 |  | stackOrMark | スタック、マーク、ゲージを扱う。 | enemy |  | targetOrSelfStack | unconfirmed |
| Mew | Surf | moveChoice | 1 |  | stun | 行動不能・スタンを付与する。 | enemy | 0.5 | durationOrBuffDebuff | unconfirmed |
| Mew | Surf | moveChoice | 1 |  | hindranceResistance | 妨害耐性を得る。 | self | 3 | durationOrBuffDebuff | unconfirmed |
| Mew | Surf | moveChoice | 1 |  | shield | シールドを付与する。 | self | 3 | durationOrBuffDebuff | unconfirmed |
| Mew | Surf | moveChoice | 1 |  | stackOrMark | スタック、マーク、ゲージを扱う。 | enemy |  | targetOrSelfStack | unconfirmed |
| Mew | Surf | moveChoice | 1 |  | formChange | フォーム・モード・構えを変化させる。 | self |  | formOrMode | unconfirmed |
| Mew | Surf | moveChoice | 1 |  | attachToAlly | 味方へ付着または移動する。 | unconfirmed |  |  | unconfirmed |
| Mew | Surf+ | movePlus | 1 | yes | shield | シールドを付与する。 | self |  | durationOrBuffDebuff | unconfirmed |
| Mew | Coaching | initialMove |  |  | attackSpeedUp | 通常攻撃速度を上げる。 | ally | 3 | durationOrBuffDebuff | unconfirmed |
| Mew | Coaching | initialMove |  |  | cooldownReduction | 待ち時間を短縮する。 | ally | 7 | actionOrderOrCooldown | unconfirmed |
| Mew | Coaching | initialMove |  |  | shield | シールドを付与する。 | ally | 3 | durationOrBuffDebuff | unconfirmed |
| Mew | Light Screen | moveChoice | 3 |  | knockBack | 相手を押し出す。 | enemy | 4 |  | unconfirmed |
| Mew | Light Screen | moveChoice | 3 |  | pull | 相手を引き寄せる。 | unconfirmed | 4 |  | unconfirmed |
| Mew | Light Screen | moveChoice | 3 |  | damageReduction | 受けるダメージを軽減する。 | enemy |  | durationOrBuffDebuff | unconfirmed |
| Mew | Light Screen | moveChoice | 3 |  | reuseOrSecondActivation | 再使用・派生・2段目を持つ。 | unconfirmed | 4 | actionOrderOrCooldown | unconfirmed |
| Mew | Light Screen | moveChoice | 3 |  | wallOrTerrain | 壁・地形・草むらなどと相互作用する。 | enemy | 4 |  | unconfirmed |
| Mew | Light Screen+ | movePlus | 3 | yes | wallOrTerrain | 壁・地形・草むらなどと相互作用する。 | area |  |  | unconfirmed |
| Mew | Agility+ | movePlus | 3 | yes | formChange | フォーム・モード・構えを変化させる。 | self |  | formOrMode | unconfirmed |
| Mew | Mystical Mirage | uniteMove | 8 |  | unstoppable | 妨害無効になる。 | self | 1 | durationOrBuffDebuff | unconfirmed |
| Mew | Mystical Mirage | uniteMove | 8 |  | invincible | 無敵になる。 | self | 1 | durationOrBuffDebuff | unconfirmed |
| Mew | Mystical Mirage | uniteMove | 8 |  | untargetableOrStealth | 対象指定されない、またはステルス状態になる。 | unconfirmed | 1 | durationOrBuffDebuff | unconfirmed |
| Mew | Mystical Mirage | uniteMove | 8 |  | fieldArea | フィールド・設置範囲を生成する。 | area | 5 | durationOrBuffDebuff | unconfirmed |
| Mew | Mystical Mirage Unite Buff | uniteBuff | 8 |  | cooldownReduction | 待ち時間を短縮する。 | unconfirmed |  | actionOrderOrCooldown | unconfirmed |
| Mew | Mystical Mirage Unite Buff | uniteBuff | 8 |  | shield | シールドを付与する。 | self |  | durationOrBuffDebuff | unconfirmed |
| Mew | Mystical Mirage Unite Buff | uniteBuff | 8 |  | maxHpChange | 最大HPを変化させる。 | unconfirmed |  | hpState | unconfirmed |
| Mega Mewtwo X | Pressure | passive |  |  | attackStatChange | 攻撃・特攻などを変化させる。 | unconfirmed |  | durationOrBuffDebuff | unconfirmed |
| Mega Mewtwo X | Pressure | passive |  |  | defenseStatChange | 防御・特防を変化させる。 | enemy |  | durationOrBuffDebuff | unconfirmed |
| Mega Mewtwo X | Pressure | passive |  |  | stackOrMark | スタック、マーク、ゲージを扱う。 | enemy |  | targetOrSelfStack | unconfirmed |
| Mega Mewtwo X | Pressure | passive |  |  | formChange | フォーム・モード・構えを変化させる。 | self |  | formOrMode | unconfirmed |
| Mega Mewtwo X | Pressure | passive |  |  | koAssistTrigger | KOまたはアシストで発動する。 | unconfirmed |  | koAssistEvent | unconfirmed |
| Mega Mewtwo X | Attack | normalAttack |  |  | boostedAttackCycle | 通常攻撃回数により強化攻撃になる。 | unconfirmed |  | actionOrderOrCooldown | unconfirmed |
| Mega Mewtwo X | Attack | normalAttack |  |  | formChange | フォーム・モード・構えを変化させる。 | self |  | formOrMode | unconfirmed |
| Mega Mewtwo X | Attack Boosted | boostedAttack |  |  | boostedAttackCycle | 通常攻撃回数により強化攻撃になる。 | unconfirmed |  | actionOrderOrCooldown | unconfirmed |
| Mega Mewtwo X | Attack Boosted | boostedAttack |  |  | formChange | フォーム・モード・構えを変化させる。 | self |  | formOrMode | unconfirmed |
| Mega Mewtwo X | Confusion | initialMove |  |  | stun | 行動不能・スタンを付与する。 | enemy | 1 | durationOrBuffDebuff | unconfirmed |
| Mega Mewtwo X | Future Sight | moveChoice | 5 |  | stun | 行動不能・スタンを付与する。 | enemy | 0.75 | durationOrBuffDebuff | unconfirmed |
| Mega Mewtwo X | Future Sight | moveChoice | 5 |  | pull | 相手を引き寄せる。 | enemy | 0.75 |  | unconfirmed |
| Mega Mewtwo X | Future Sight | moveChoice | 5 |  | damageDealtChange | 与ダメージを変化させる。 | enemy |  | durationOrBuffDebuff | unconfirmed |
| Mega Mewtwo X | Psystrike | moveChoice | 5 |  | knockUp | 相手を打ち上げる。 | enemy | 0.6 |  | unconfirmed |
| Mega Mewtwo X | Psystrike | moveChoice | 5 |  | knockBack | 相手を押し出す。 | enemy |  |  | unconfirmed |
| Mega Mewtwo X | Psystrike | moveChoice | 5 |  | unstoppable | 妨害無効になる。 | enemy | 1 | durationOrBuffDebuff | unconfirmed |
| Mega Mewtwo X | Psystrike | moveChoice | 5 |  | damageReduction | 受けるダメージを軽減する。 | unconfirmed |  | durationOrBuffDebuff | unconfirmed |
| Mega Mewtwo X | Psystrike | moveChoice | 5 |  | stackOrMark | スタック、マーク、ゲージを扱う。 | enemy | 1 | targetOrSelfStack | unconfirmed |
| Mega Mewtwo X | Psystrike+ | movePlus | 5 | yes | stackOrMark | スタック、マーク、ゲージを扱う。 | enemy | 1 | targetOrSelfStack | unconfirmed |
| Mega Mewtwo X | Barrier | initialMove |  |  | movementSpeedUp | 移動速度を上げる。 | self |  | durationOrBuffDebuff | unconfirmed |
| Mega Mewtwo X | Barrier | initialMove |  |  | shield | シールドを付与する。 | self | 3 | durationOrBuffDebuff | unconfirmed |
| Mega Mewtwo X | Recover | moveChoice | 7 |  | movementSpeedUp | 移動速度を上げる。 | enemy |  | durationOrBuffDebuff | unconfirmed |
| Mega Mewtwo X | Recover | moveChoice | 7 |  | damageReduction | 受けるダメージを軽減する。 | enemy |  | durationOrBuffDebuff | unconfirmed |
| Mega Mewtwo X | Recover | moveChoice | 7 |  | healing | HPを回復する。 | enemy |  | hpState | unconfirmed |
| Mega Mewtwo X | Recover | moveChoice | 7 |  | shield | シールドを付与する。 | self | 3 | durationOrBuffDebuff | unconfirmed |
| Mega Mewtwo X | Recover | moveChoice | 7 |  | stackOrMark | スタック、マーク、ゲージを扱う。 | unconfirmed |  | targetOrSelfStack | unconfirmed |
| Mega Mewtwo X | Recover+ | movePlus | 7 | yes | damageReduction | 受けるダメージを軽減する。 | unconfirmed |  | durationOrBuffDebuff | unconfirmed |
| Mega Mewtwo X | Teleport | moveChoice | 7 |  | movementSpeedUp | 移動速度を上げる。 | self | 5 | durationOrBuffDebuff | unconfirmed |
| Mega Mewtwo X | Teleport | moveChoice | 7 |  | stackOrMark | スタック、マーク、ゲージを扱う。 | unconfirmed | 5 | targetOrSelfStack | unconfirmed |
| Mega Mewtwo X | Teleport+ | movePlus | 7 | yes | damageDealtChange | 与ダメージを変化させる。 | unconfirmed |  | durationOrBuffDebuff | unconfirmed |
| Mega Mewtwo X | Infinite Psyburn | uniteMove | 9 |  | stun | 行動不能・スタンを付与する。 | enemy | 1 | durationOrBuffDebuff | unconfirmed |
| Mega Mewtwo X | Infinite Psyburn | uniteMove | 9 |  | unstoppable | 妨害無効になる。 | enemy |  | durationOrBuffDebuff | unconfirmed |
| Mega Mewtwo X | Infinite Psyburn | uniteMove | 9 |  | defenseStatChange | 防御・特防を変化させる。 | enemy | 1 | durationOrBuffDebuff | unconfirmed |
| Mega Mewtwo X | Infinite Psyburn | uniteMove | 9 |  | delayedDamage | 遅延または時間差でダメージを与える。 | enemy | 1 | durationOrBuffDebuff | unconfirmed |
| Mega Mewtwo X | Infinite Psyburn Unite Buff | uniteBuff | 9 |  | cooldownReduction | 待ち時間を短縮する。 | unconfirmed |  | actionOrderOrCooldown | unconfirmed |
| Mega Mewtwo X | Infinite Psyburn Unite Buff | uniteBuff | 9 |  | shield | シールドを付与する。 | self |  | durationOrBuffDebuff | unconfirmed |
| Mega Mewtwo X | Infinite Psyburn Unite Buff | uniteBuff | 9 |  | maxHpChange | 最大HPを変化させる。 | unconfirmed |  | hpState | unconfirmed |
| Mega Mewtwo Y | Pressure | passive |  |  | attackSpeedUp | 通常攻撃速度を上げる。 | self |  | durationOrBuffDebuff | unconfirmed |
| Mega Mewtwo Y | Pressure | passive |  |  | attackStatChange | 攻撃・特攻などを変化させる。 | enemy |  | durationOrBuffDebuff | unconfirmed |
| Mega Mewtwo Y | Pressure | passive |  |  | stackOrMark | スタック、マーク、ゲージを扱う。 | enemy |  | targetOrSelfStack | unconfirmed |
| Mega Mewtwo Y | Pressure | passive |  |  | formChange | フォーム・モード・構えを変化させる。 | self |  | formOrMode | unconfirmed |
| Mega Mewtwo Y | Pressure | passive |  |  | koAssistTrigger | KOまたはアシストで発動する。 | unconfirmed |  | koAssistEvent | unconfirmed |
| Mega Mewtwo Y | Attack | normalAttack |  |  | slow | 移動速度を下げる。 | enemy |  | durationOrBuffDebuff | unconfirmed |
| Mega Mewtwo Y | Attack | normalAttack |  |  | formChange | フォーム・モード・構えを変化させる。 | enemy |  | formOrMode | unconfirmed |
| Mega Mewtwo Y | Confusion | initialMove |  |  | stun | 行動不能・スタンを付与する。 | enemy | 1 | durationOrBuffDebuff | unconfirmed |
| Mega Mewtwo Y | Future Sight | moveChoice | 5 |  | stun | 行動不能・スタンを付与する。 | enemy | 0.5 | durationOrBuffDebuff | unconfirmed |
| Mega Mewtwo Y | Future Sight | moveChoice | 5 |  | knockBack | 相手を押し出す。 | enemy | 0.5 |  | unconfirmed |
| Mega Mewtwo Y | Psystrike | moveChoice | 5 |  | knockUp | 相手を打ち上げる。 | enemy | 0.6 |  | unconfirmed |
| Mega Mewtwo Y | Psystrike | moveChoice | 5 |  | knockBack | 相手を押し出す。 | enemy |  |  | unconfirmed |
| Mega Mewtwo Y | Psystrike | moveChoice | 5 |  | unstoppable | 妨害無効になる。 | enemy | 1 | durationOrBuffDebuff | unconfirmed |
| Mega Mewtwo Y | Psystrike | moveChoice | 5 |  | stackOrMark | スタック、マーク、ゲージを扱う。 | enemy | 1 | targetOrSelfStack | unconfirmed |
| Mega Mewtwo Y | Psystrike | moveChoice | 5 |  | formChange | フォーム・モード・構えを変化させる。 | enemy |  | formOrMode | unconfirmed |
| Mega Mewtwo Y | Psystrike+ | movePlus | 5 | yes | stackOrMark | スタック、マーク、ゲージを扱う。 | enemy | 1 | targetOrSelfStack | unconfirmed |
| Mega Mewtwo Y | Barrier | initialMove |  |  | movementSpeedUp | 移動速度を上げる。 | self |  | durationOrBuffDebuff | unconfirmed |
| Mega Mewtwo Y | Barrier | initialMove |  |  | shield | シールドを付与する。 | self | 3 | durationOrBuffDebuff | unconfirmed |
| Mega Mewtwo Y | Recover | moveChoice | 7 |  | movementSpeedUp | 移動速度を上げる。 | self |  | durationOrBuffDebuff | unconfirmed |
| Mega Mewtwo Y | Recover | moveChoice | 7 |  | damageDealtChange | 与ダメージを変化させる。 | unconfirmed |  | durationOrBuffDebuff | unconfirmed |
| Mega Mewtwo Y | Recover | moveChoice | 7 |  | healing | HPを回復する。 | self |  | hpState | unconfirmed |
| Mega Mewtwo Y | Recover | moveChoice | 7 |  | shield | シールドを付与する。 | self | 3 | durationOrBuffDebuff | unconfirmed |
| Mega Mewtwo Y | Recover | moveChoice | 7 |  | stackOrMark | スタック、マーク、ゲージを扱う。 | unconfirmed | 3 | targetOrSelfStack | unconfirmed |
| Mega Mewtwo Y | Recover+ | movePlus | 7 | yes | damageDealtChange | 与ダメージを変化させる。 | unconfirmed |  | durationOrBuffDebuff | unconfirmed |
| Mega Mewtwo Y | Recover+ | movePlus | 7 | yes | lifestealOrDamageHeal | 与ダメージに応じて回復する。 | unconfirmed |  | hpState | unconfirmed |
| Mega Mewtwo Y | Teleport | moveChoice | 7 |  | movementSpeedUp | 移動速度を上げる。 | self | 2 | durationOrBuffDebuff | unconfirmed |
| Mega Mewtwo Y | Teleport | moveChoice | 7 |  | stackOrMark | スタック、マーク、ゲージを扱う。 | unconfirmed | 2 | targetOrSelfStack | unconfirmed |
| Mega Mewtwo Y | Teleport+ | movePlus | 7 | yes | damageDealtChange | 与ダメージを変化させる。 | unconfirmed |  | durationOrBuffDebuff | unconfirmed |
| Mega Mewtwo Y | Infinite Psyburn | uniteMove | 9 |  | stun | 行動不能・スタンを付与する。 | enemy | 1 | durationOrBuffDebuff | unconfirmed |
| Mega Mewtwo Y | Infinite Psyburn | uniteMove | 9 |  | unstoppable | 妨害無効になる。 | enemy |  | durationOrBuffDebuff | unconfirmed |
| Mega Mewtwo Y | Infinite Psyburn | uniteMove | 9 |  | defenseStatChange | 防御・特防を変化させる。 | unconfirmed | 3 | durationOrBuffDebuff | unconfirmed |
| Mega Mewtwo Y | Infinite Psyburn | uniteMove | 9 |  | delayedDamage | 遅延または時間差でダメージを与える。 | enemy | 1 | durationOrBuffDebuff | unconfirmed |
| Mega Mewtwo Y | Infinite Psyburn Unite Buff | uniteBuff | 9 |  | cooldownReduction | 待ち時間を短縮する。 | unconfirmed |  | actionOrderOrCooldown | unconfirmed |
| Mega Mewtwo Y | Infinite Psyburn Unite Buff | uniteBuff | 9 |  | shield | シールドを付与する。 | self |  | durationOrBuffDebuff | unconfirmed |
| Mega Mewtwo Y | Infinite Psyburn Unite Buff | uniteBuff | 9 |  | maxHpChange | 最大HPを変化させる。 | unconfirmed |  | hpState | unconfirmed |
| Mimikyu | Disguise | passive |  |  | stackOrMark | スタック、マーク、ゲージを扱う。 | enemy |  | targetOrSelfStack | unconfirmed |
| Mimikyu | Disguise | passive |  |  | hpReferenceDamage | 現在HP・最大HP・減少HPなどを参照する。 | enemy | 0.5 | hpState | unconfirmed |
| Mimikyu | Disguise | passive |  |  | formChange | フォーム・モード・構えを変化させる。 | enemy | 0.5 | formOrMode | unconfirmed |
| Mimikyu | Disguise | passive |  |  | koAssistTrigger | KOまたはアシストで発動する。 | enemy | 25 | koAssistEvent | unconfirmed |
| Mimikyu | Attack | normalAttack |  |  | boostedAttackCycle | 通常攻撃回数により強化攻撃になる。 | unconfirmed |  | actionOrderOrCooldown | unconfirmed |
| Mimikyu | Play Rough | moveChoice | 5 |  | slow | 移動速度を下げる。 | enemy | 1 | durationOrBuffDebuff | unconfirmed |
| Mimikyu | Play Rough | moveChoice | 5 |  | invincible | 無敵になる。 | enemy | 1 | durationOrBuffDebuff | unconfirmed |
| Mimikyu | Play Rough | moveChoice | 5 |  | damageReduction | 受けるダメージを軽減する。 | unconfirmed |  | durationOrBuffDebuff | unconfirmed |
| Mimikyu | Shadow Claw | moveChoice | 5 |  | cooldownReduction | 待ち時間を短縮する。 | enemy | 1 | actionOrderOrCooldown | unconfirmed |
| Mimikyu | Shadow Claw | moveChoice | 5 |  | stackOrMark | スタック、マーク、ゲージを扱う。 | enemy | 1.5 | targetOrSelfStack | unconfirmed |
| Mimikyu | Shadow Claw | moveChoice | 5 |  | reuseOrSecondActivation | 再使用・派生・2段目を持つ。 | enemy | 1 | actionOrderOrCooldown | unconfirmed |
| Mimikyu | Shadow Claw+ | movePlus | 5 | yes | hpReferenceDamage | 現在HP・最大HP・減少HPなどを参照する。 | unconfirmed |  | hpState | unconfirmed |
| Mimikyu | Shadow Claw+ | movePlus | 5 | yes | wildPokemonRule | 野生ポケモン限定の処理を持つ。 | unconfirmed |  | targetType | unconfirmed |
| Mimikyu | Scratch | initialMove |  |  | hpReferenceDamage | 現在HP・最大HP・減少HPなどを参照する。 | enemy | 5 | hpState | unconfirmed |
| Mimikyu | Scratch | initialMove |  |  | wildPokemonRule | 野生ポケモン限定の処理を持つ。 | unconfirmed |  | targetType | unconfirmed |
| Mimikyu | Shadow Sneak | moveChoice | 7 |  | cooldownReset | 待ち時間をリセットする。 | enemy |  | actionOrderOrCooldown | unconfirmed |
| Mimikyu | Shadow Sneak | moveChoice | 7 |  | healing | HPを回復する。 | enemy |  | hpState | unconfirmed |
| Mimikyu | Shadow Sneak | moveChoice | 7 |  | stackOrMark | スタック、マーク、ゲージを扱う。 | enemy | 3 | targetOrSelfStack | unconfirmed |
| Mimikyu | Shadow Sneak | moveChoice | 7 |  | hpReferenceDamage | 現在HP・最大HP・減少HPなどを参照する。 | enemy |  | hpState | unconfirmed |
| Mimikyu | Shadow Sneak | moveChoice | 7 |  | wildPokemonRule | 野生ポケモン限定の処理を持つ。 | unconfirmed |  | targetType | unconfirmed |
| Mimikyu | Shadow Sneak | moveChoice | 7 |  | formChange | フォーム・モード・構えを変化させる。 | enemy | 3 | formOrMode | unconfirmed |
| Mimikyu | Shadow Sneak | moveChoice | 7 |  | reuseOrSecondActivation | 再使用・派生・2段目を持つ。 | enemy | 0.25 | actionOrderOrCooldown | unconfirmed |
| Mimikyu | Shadow Sneak | moveChoice | 7 |  | wallOrTerrain | 壁・地形・草むらなどと相互作用する。 | area |  |  | unconfirmed |
| Mimikyu | Trick Room | moveChoice | 7 |  | slow | 移動速度を下げる。 | unconfirmed |  | durationOrBuffDebuff | unconfirmed |
| Mimikyu | Trick Room | moveChoice | 7 |  | damageReduction | 受けるダメージを軽減する。 | enemy |  | durationOrBuffDebuff | unconfirmed |
| Mimikyu | Trick Room | moveChoice | 7 |  | formChange | フォーム・モード・構えを変化させる。 | self |  | formOrMode | unconfirmed |
| Mimikyu | Play With Me... | uniteMove | 9 |  | unstoppable | 妨害無効になる。 | self |  | durationOrBuffDebuff | unconfirmed |
| Mimikyu | Play With Me... | uniteMove | 9 |  | shield | シールドを付与する。 | self | 2.8 | durationOrBuffDebuff | unconfirmed |
| Mimikyu | Play With Me... | uniteMove | 9 |  | damageOverTime | 継続ダメージを与える。 | enemy |  | durationOrBuffDebuff | unconfirmed |
| Mimikyu | Play With Me... | uniteMove | 9 |  | stackOrMark | スタック、マーク、ゲージを扱う。 | unconfirmed |  | targetOrSelfStack | unconfirmed |
| Mimikyu | Play With Me... Unite Buff | uniteBuff | 9 |  | cooldownReduction | 待ち時間を短縮する。 | unconfirmed |  | actionOrderOrCooldown | unconfirmed |
| Mimikyu | Play With Me... Unite Buff | uniteBuff | 9 |  | shield | シールドを付与する。 | self |  | durationOrBuffDebuff | unconfirmed |
| Mimikyu | Play With Me... Unite Buff | uniteBuff | 9 |  | maxHpChange | 最大HPを変化させる。 | unconfirmed |  | hpState | unconfirmed |
| Miraidon | Hadron Engine | passive |  |  | sleep | ねむりを付与する。 | unconfirmed |  | durationOrBuffDebuff | unconfirmed |
| Miraidon | Hadron Engine | passive |  |  | healing | HPを回復する。 | ally |  | hpState | unconfirmed |
| Miraidon | Hadron Engine | passive |  |  | shield | シールドを付与する。 | ally |  | durationOrBuffDebuff | unconfirmed |
| Miraidon | Hadron Engine | passive |  |  | wallOrTerrain | 壁・地形・草むらなどと相互作用する。 | enemy | 10 |  | unconfirmed |
| Miraidon | Charge Beam | moveChoice | 5 |  | hindranceResistance | 妨害耐性を得る。 | enemy | 10 | durationOrBuffDebuff | unconfirmed |
| Miraidon | Charge Beam | moveChoice | 5 |  | attackStatChange | 攻撃・特攻などを変化させる。 | enemy | 6 | durationOrBuffDebuff | unconfirmed |
| Miraidon | Charge Beam | moveChoice | 5 |  | stackOrMark | スタック、マーク、ゲージを扱う。 | unconfirmed | 6 | targetOrSelfStack | unconfirmed |
| Miraidon | Charge Beam | moveChoice | 5 |  | formChange | フォーム・モード・構えを変化させる。 | enemy | 10 | formOrMode | unconfirmed |
| Miraidon | Charge Beam+ | movePlus | 5 | yes | cooldownReduction | 待ち時間を短縮する。 | unconfirmed | 0.5 | actionOrderOrCooldown | unconfirmed |
| Miraidon | Electro Drift | moveChoice | 5 |  | hpReferenceDamage | 現在HP・最大HP・減少HPなどを参照する。 | enemy |  | hpState | unconfirmed |
| Miraidon | Electro Drift+ | movePlus | 5 | yes | cooldownReduction | 待ち時間を短縮する。 | unconfirmed | 4 | actionOrderOrCooldown | unconfirmed |
| Miraidon | Thunder Wave | initialMove |  |  | paralysis | まひを付与する。 | enemy | 2 | durationOrBuffDebuff | unconfirmed |
| Miraidon | Thunder | moveChoice | 7 |  | slow | 移動速度を下げる。 | enemy |  | durationOrBuffDebuff | unconfirmed |
| Miraidon | Thunder+ | movePlus | 7 | yes | slow | 移動速度を下げる。 | unconfirmed |  | durationOrBuffDebuff | unconfirmed |
| Miraidon | Parabolic Charge | moveChoice | 7 |  | slow | 移動速度を下げる。 | enemy | 2 | durationOrBuffDebuff | unconfirmed |
| Miraidon | Parabolic Charge | moveChoice | 7 |  | healing | HPを回復する。 | enemy |  | hpState | unconfirmed |
| Miraidon | Parabolic Charge+ | movePlus | 7 | yes | shield | シールドを付与する。 | self |  | durationOrBuffDebuff | unconfirmed |
| Miraidon | Bright Future Meteor Storm | uniteMove | 9 |  | knockUp | 相手を打ち上げる。 | enemy | 1 |  | unconfirmed |
| Miraidon | Bright Future Meteor Storm | uniteMove | 9 |  | hindranceResistance | 妨害耐性を得る。 | enemy |  | durationOrBuffDebuff | unconfirmed |
| Miraidon | Bright Future Meteor Storm | uniteMove | 9 |  | stackOrMark | スタック、マーク、ゲージを扱う。 | unconfirmed |  | targetOrSelfStack | unconfirmed |
| Miraidon | Bright Future Meteor Storm | uniteMove | 9 |  | formChange | フォーム・モード・構えを変化させる。 | enemy |  | formOrMode | unconfirmed |
| Miraidon | Bright Future Meteor Storm Unite Buff | uniteBuff | 9 |  | cooldownReduction | 待ち時間を短縮する。 | unconfirmed |  | actionOrderOrCooldown | unconfirmed |
| Miraidon | Bright Future Meteor Storm Unite Buff | uniteBuff | 9 |  | shield | シールドを付与する。 | self |  | durationOrBuffDebuff | unconfirmed |
| Miraidon | Bright Future Meteor Storm Unite Buff | uniteBuff | 9 |  | maxHpChange | 最大HPを変化させる。 | unconfirmed |  | hpState | unconfirmed |
| Moltres | Flame Body | passive |  |  | burn | やけどを付与する。 | enemy |  | durationOrBuffDebuff | unconfirmed |
| Moltres | Flame Body | passive |  |  | damageOverTime | 継続ダメージを与える。 | unconfirmed | 4 | durationOrBuffDebuff | unconfirmed |
| Moltres | Flame Body | passive |  |  | stackOrMark | スタック、マーク、ゲージを扱う。 | enemy |  | targetOrSelfStack | unconfirmed |
| Moltres | Flame Body | passive |  |  | cleanse | 状態異常や低下効果を解除する。 | self |  | durationOrBuffDebuff | unconfirmed |
| Moltres | Attack | normalAttack |  |  | boostedAttackCycle | 通常攻撃回数により強化攻撃になる。 | unconfirmed |  | actionOrderOrCooldown | unconfirmed |
| Moltres | Sky Attack | moveChoice | 7 |  | stackOrMark | スタック、マーク、ゲージを扱う。 | unconfirmed | 4 | targetOrSelfStack | unconfirmed |
| Moltres | Sky Attack+ | movePlus | 7 | yes | shield | シールドを付与する。 | self | 3 | durationOrBuffDebuff | unconfirmed |
| Moltres | Heat Wave | moveChoice | 5 |  | healing | HPを回復する。 | self | 2 | hpState | unconfirmed |
| Moltres | Heat Wave | moveChoice | 5 |  | damageOverTime | 継続ダメージを与える。 | unconfirmed | 2 | durationOrBuffDebuff | unconfirmed |
| Moltres | Firebird Inferno | uniteMove | 9 |  | burn | やけどを付与する。 | enemy |  | durationOrBuffDebuff | unconfirmed |
| Moltres | Firebird Inferno | uniteMove | 9 |  | unstoppable | 妨害無効になる。 | enemy |  | durationOrBuffDebuff | unconfirmed |
| Moltres | Firebird Inferno | uniteMove | 9 |  | stackOrMark | スタック、マーク、ゲージを扱う。 | enemy |  | targetOrSelfStack | unconfirmed |
| Moltres | Firebird Inferno | uniteMove | 9 |  | wildPokemonRule | 野生ポケモン限定の処理を持つ。 | unconfirmed |  | targetType | unconfirmed |
| Moltres | Firebird Inferno | uniteMove | 9 |  | formChange | フォーム・モード・構えを変化させる。 | enemy | 20 | formOrMode | unconfirmed |
| Moltres | Firebird Inferno | uniteMove | 9 |  | koAssistTrigger | KOまたはアシストで発動する。 | unconfirmed |  | koAssistEvent | unconfirmed |
| Moltres | Firebird Inferno Unite Buff | uniteBuff | 9 |  | cooldownReduction | 待ち時間を短縮する。 | unconfirmed |  | actionOrderOrCooldown | unconfirmed |
| Moltres | Firebird Inferno Unite Buff | uniteBuff | 9 |  | shield | シールドを付与する。 | self |  | durationOrBuffDebuff | unconfirmed |
| Moltres | Firebird Inferno Unite Buff | uniteBuff | 9 |  | maxHpChange | 最大HPを変化させる。 | unconfirmed |  | hpState | unconfirmed |
| Mr. Mime | Filter | passive |  |  | damageReduction | 受けるダメージを軽減する。 | unconfirmed |  | durationOrBuffDebuff | unconfirmed |
| Mr. Mime | Filter | passive |  |  | nextBoostedAttack | 次の通常攻撃または強化攻撃を準備する。 | unconfirmed |  | actionOrderOrCooldown | unconfirmed |
| Mr. Mime | Attack | normalAttack |  |  | knockUp | 相手を打ち上げる。 | enemy | 5 |  | unconfirmed |
| Mr. Mime | Attack | normalAttack |  |  | boostedAttackCycle | 通常攻撃回数により強化攻撃になる。 | enemy |  | actionOrderOrCooldown | unconfirmed |
| Mr. Mime | Attack Boosted | boostedAttack |  |  | knockUp | 相手を打ち上げる。 | enemy |  |  | unconfirmed |
| Mr. Mime | Attack Boosted | boostedAttack |  |  | boostedAttackCycle | 通常攻撃回数により強化攻撃になる。 | enemy |  | actionOrderOrCooldown | unconfirmed |
| Mr. Mime | Confusion | moveChoice | 4 |  | stun | 行動不能・スタンを付与する。 | enemy | 1.5 | durationOrBuffDebuff | unconfirmed |
| Mr. Mime | Confusion | moveChoice | 4 |  | knockBack | 相手を押し出す。 | enemy |  |  | unconfirmed |
| Mr. Mime | Confusion | moveChoice | 4 |  | unstoppable | 妨害無効になる。 | enemy |  | durationOrBuffDebuff | unconfirmed |
| Mr. Mime | Confusion | moveChoice | 4 |  | wallOrTerrain | 壁・地形・草むらなどと相互作用する。 | enemy | 1.5 |  | unconfirmed |
| Mr. Mime | Psychic | moveChoice | 4 |  | stun | 行動不能・スタンを付与する。 | enemy | 1 | durationOrBuffDebuff | unconfirmed |
| Mr. Mime | Psychic | moveChoice | 4 |  | defenseStatChange | 防御・特防を変化させる。 | enemy | 1 | durationOrBuffDebuff | unconfirmed |
| Mr. Mime | Psychic | moveChoice | 4 |  | stackOrMark | スタック、マーク、ゲージを扱う。 | enemy | 3 | targetOrSelfStack | unconfirmed |
| Mr. Mime | Psychic | moveChoice | 4 |  | wallOrTerrain | 壁・地形・草むらなどと相互作用する。 | enemy |  |  | unconfirmed |
| Mr. Mime | Psychic+ | movePlus | 4 | yes | slow | 移動速度を下げる。 | ally |  | durationOrBuffDebuff | unconfirmed |
| Mr. Mime | Light Screen | initialMove |  |  | stun | 行動不能・スタンを付与する。 | enemy | 0.5 | durationOrBuffDebuff | unconfirmed |
| Mr. Mime | Light Screen | initialMove |  |  | knockBack | 相手を押し出す。 | enemy | 0.5 |  | unconfirmed |
| Mr. Mime | Light Screen | initialMove |  |  | wallOrTerrain | 壁・地形・草むらなどと相互作用する。 | enemy | 0.5 |  | unconfirmed |
| Mr. Mime | Barrier | moveChoice | 6 |  | stun | 行動不能・スタンを付与する。 | enemy | 0.5 | durationOrBuffDebuff | unconfirmed |
| Mr. Mime | Barrier | moveChoice | 6 |  | knockBack | 相手を押し出す。 | enemy | 0.5 |  | unconfirmed |
| Mr. Mime | Barrier | moveChoice | 6 |  | wallOrTerrain | 壁・地形・草むらなどと相互作用する。 | enemy | 0.5 |  | unconfirmed |
| Mr. Mime | Power Swap | moveChoice | 6 |  | slow | 移動速度を下げる。 | enemy |  | durationOrBuffDebuff | unconfirmed |
| Mr. Mime | Power Swap | moveChoice | 6 |  | defenseStatChange | 防御・特防を変化させる。 | ally |  | durationOrBuffDebuff | unconfirmed |
| Mr. Mime | Power Swap | moveChoice | 6 |  | healing | HPを回復する。 | self | 0.5 | hpState | unconfirmed |
| Mr. Mime | Power Swap | moveChoice | 6 |  | damageOverTime | 継続ダメージを与える。 | enemy |  | durationOrBuffDebuff | unconfirmed |
| Mr. Mime | Power Swap | moveChoice | 6 |  | cleanse | 状態異常や低下効果を解除する。 | self |  | durationOrBuffDebuff | unconfirmed |
| Mr. Mime | Power Swap+ | movePlus | 6 | yes | damageDealtChange | 与ダメージを変化させる。 | ally |  | durationOrBuffDebuff | unconfirmed |
| Mr. Mime | Showtime | uniteMove | 9 |  | stun | 行動不能・スタンを付与する。 | enemy | 0.5 | durationOrBuffDebuff | unconfirmed |
| Mr. Mime | Showtime | uniteMove | 9 |  | unstoppable | 妨害無効になる。 | enemy | 0.5 | durationOrBuffDebuff | unconfirmed |
| Mr. Mime | Showtime | uniteMove | 9 |  | damageOverTime | 継続ダメージを与える。 | enemy |  | durationOrBuffDebuff | unconfirmed |
| Mr. Mime | Showtime | uniteMove | 9 |  | formChange | フォーム・モード・構えを変化させる。 | self |  | formOrMode | unconfirmed |
| Mr. Mime | Showtime Unite Buff | uniteBuff | 9 |  | shield | シールドを付与する。 | self |  | durationOrBuffDebuff | unconfirmed |
| Mr. Mime | Showtime Unite Buff | uniteBuff | 9 |  | maxHpChange | 最大HPを変化させる。 | unconfirmed |  | hpState | unconfirmed |
| Ninetales | Snow Warning | passive |  |  | freeze | こおり・凍結を付与する。 | enemy | 1 | durationOrBuffDebuff | unconfirmed |
| Ninetales | Attack | normalAttack |  |  | slow | 移動速度を下げる。 | enemy |  | durationOrBuffDebuff | unconfirmed |
| Ninetales | Attack | normalAttack |  |  | boostedAttackCycle | 通常攻撃回数により強化攻撃になる。 | unconfirmed |  | actionOrderOrCooldown | unconfirmed |
| Ninetales | Attack Boosted | boostedAttack |  |  | slow | 移動速度を下げる。 | enemy |  | durationOrBuffDebuff | unconfirmed |
| Ninetales | Attack Boosted | boostedAttack |  |  | boostedAttackCycle | 通常攻撃回数により強化攻撃になる。 | unconfirmed |  | actionOrderOrCooldown | unconfirmed |
| Ninetales | Avalanche | moveChoice | 4 |  | formChange | フォーム・モード・構えを変化させる。 | enemy |  | formOrMode | unconfirmed |
| Ninetales | Avalanche | moveChoice | 4 |  | wallOrTerrain | 壁・地形・草むらなどと相互作用する。 | enemy |  |  | unconfirmed |
| Ninetales | Dazzling Gleam | moveChoice | 4 |  | stun | 行動不能・スタンを付与する。 | enemy | 8 | durationOrBuffDebuff | unconfirmed |
| Ninetales | Dazzling Gleam+ | movePlus | 4 | yes | stun | 行動不能・スタンを付与する。 | unconfirmed | 1 | durationOrBuffDebuff | unconfirmed |
| Ninetales | Dazzling Gleam+ | movePlus | 4 | yes | damageDealtChange | 与ダメージを変化させる。 | unconfirmed |  | durationOrBuffDebuff | unconfirmed |
| Ninetales | Icy Wind | initialMove |  |  | knockBack | 相手を押し出す。 | unconfirmed |  |  | unconfirmed |
| Ninetales | Icy Wind | initialMove |  |  | slow | 移動速度を下げる。 | unconfirmed | 1 | durationOrBuffDebuff | unconfirmed |
| Ninetales | Icy Wind | initialMove |  |  | formChange | フォーム・モード・構えを変化させる。 | self |  | formOrMode | unconfirmed |
| Ninetales | Blizzard | moveChoice | 6 |  | knockBack | 相手を押し出す。 | enemy | 4 |  | unconfirmed |
| Ninetales | Blizzard | moveChoice | 6 |  | slow | 移動速度を下げる。 | enemy | 0.5 | durationOrBuffDebuff | unconfirmed |
| Ninetales | Blizzard | moveChoice | 6 |  | damageOverTime | 継続ダメージを与える。 | enemy | 0.5 | durationOrBuffDebuff | unconfirmed |
| Ninetales | Blizzard | moveChoice | 6 |  | wallOrTerrain | 壁・地形・草むらなどと相互作用する。 | enemy | 4 |  | unconfirmed |
| Ninetales | Aurora Veil | moveChoice | 6 |  | movementSpeedUp | 移動速度を上げる。 | self |  | durationOrBuffDebuff | unconfirmed |
| Ninetales | Aurora Veil | moveChoice | 6 |  | damageReduction | 受けるダメージを軽減する。 | ally |  | durationOrBuffDebuff | unconfirmed |
| Ninetales | Aurora Veil | moveChoice | 6 |  | healing | HPを回復する。 | ally |  | hpState | unconfirmed |
| Ninetales | Aurora Veil | moveChoice | 6 |  | formChange | フォーム・モード・構えを変化させる。 | self | 5 | formOrMode | unconfirmed |
| Ninetales | Aurora Veil+ | movePlus | 6 | yes | damageReduction | 受けるダメージを軽減する。 | unconfirmed | 2 | durationOrBuffDebuff | unconfirmed |
| Ninetales | Snow Globe | uniteMove | 9 |  | freeze | こおり・凍結を付与する。 | enemy |  | durationOrBuffDebuff | unconfirmed |
| Ninetales | Snow Globe | uniteMove | 9 |  | unstoppable | 妨害無効になる。 | self |  | durationOrBuffDebuff | unconfirmed |
| Ninetales | Snow Globe | uniteMove | 9 |  | damageDealtChange | 与ダメージを変化させる。 | enemy |  | durationOrBuffDebuff | unconfirmed |
| Ninetales | Snow Globe Unite Buff | uniteBuff | 9 |  | cooldownReduction | 待ち時間を短縮する。 | unconfirmed |  | actionOrderOrCooldown | unconfirmed |
| Ninetales | Snow Globe Unite Buff | uniteBuff | 9 |  | shield | シールドを付与する。 | self |  | durationOrBuffDebuff | unconfirmed |
| Ninetales | Snow Globe Unite Buff | uniteBuff | 9 |  | maxHpChange | 最大HPを変化させる。 | unconfirmed |  | hpState | unconfirmed |
| Pawmot | Iron Fist | passive |  |  | stackOrMark | スタック、マーク、ゲージを扱う。 | unconfirmed |  | targetOrSelfStack | unconfirmed |
| Pawmot | Iron Fist | passive |  |  | nextBoostedAttack | 次の通常攻撃または強化攻撃を準備する。 | unconfirmed |  | actionOrderOrCooldown | unconfirmed |
| Pawmot | Iron Fist | passive |  |  | formChange | フォーム・モード・構えを変化させる。 | self |  | formOrMode | unconfirmed |
| Pawmot | Attack | normalAttack |  |  | boostedAttackCycle | 通常攻撃回数により強化攻撃になる。 | enemy |  | actionOrderOrCooldown | unconfirmed |
| Pawmot | Nuzzle | initialMove |  |  | paralysis | まひを付与する。 | enemy | 2 | durationOrBuffDebuff | unconfirmed |
| Pawmot | Nuzzle | initialMove |  |  | attackSpeedDown | 通常攻撃速度を下げる。 | enemy | 2 | durationOrBuffDebuff | unconfirmed |
| Pawmot | Thunder Punch | moveChoice | 5 |  | slow | 移動速度を下げる。 | enemy | 2 | durationOrBuffDebuff | unconfirmed |
| Pawmot | Thunder Punch | moveChoice | 5 |  | formChange | フォーム・モード・構えを変化させる。 | self |  | formOrMode | unconfirmed |
| Pawmot | Thunder Punch+ | movePlus | 5 | yes | damageDealtChange | 与ダメージを変化させる。 | unconfirmed |  | durationOrBuffDebuff | unconfirmed |
| Pawmot | Supercell Slam | moveChoice | 5 |  | slow | 移動速度を下げる。 | enemy | 3.5 | durationOrBuffDebuff | unconfirmed |
| Pawmot | Supercell Slam | moveChoice | 5 |  | unstoppable | 妨害無効になる。 | enemy | 3.5 | durationOrBuffDebuff | unconfirmed |
| Pawmot | Supercell Slam | moveChoice | 5 |  | shield | シールドを付与する。 | enemy | 3.5 | durationOrBuffDebuff | unconfirmed |
| Pawmot | Supercell Slam | moveChoice | 5 |  | hpReferenceDamage | 現在HP・最大HP・減少HPなどを参照する。 | unconfirmed |  | hpState | unconfirmed |
| Pawmot | Supercell Slam | moveChoice | 5 |  | formChange | フォーム・モード・構えを変化させる。 | self |  | formOrMode | unconfirmed |
| Pawmot | Supercell Slam | moveChoice | 5 |  | reuseOrSecondActivation | 再使用・派生・2段目を持つ。 | unconfirmed |  | actionOrderOrCooldown | unconfirmed |
| Pawmot | Supercell Slam+ | movePlus | 5 | yes | slow | 移動速度を下げる。 | unconfirmed | 2 | durationOrBuffDebuff | unconfirmed |
| Pawmot | Supercell Slam+ | movePlus | 5 | yes | damageDealtChange | 与ダメージを変化させる。 | unconfirmed |  | durationOrBuffDebuff | unconfirmed |
| Pawmot | Supercell Slam+ | movePlus | 5 | yes | formChange | フォーム・モード・構えを変化させる。 | self |  | formOrMode | unconfirmed |
| Pawmot | Volt Switch | moveChoice | 7 |  | movementSpeedUp | 移動速度を上げる。 | self | 3 | durationOrBuffDebuff | unconfirmed |
| Pawmot | Volt Switch | moveChoice | 7 |  | formChange | フォーム・モード・構えを変化させる。 | self | 3 | formOrMode | unconfirmed |
| Pawmot | Mach Punch | moveChoice | 7 |  | stun | 行動不能・スタンを付与する。 | enemy | 0.6 | durationOrBuffDebuff | unconfirmed |
| Pawmot | Mach Punch | moveChoice | 7 |  | knockBack | 相手を押し出す。 | enemy |  |  | unconfirmed |
| Pawmot | Mach Punch | moveChoice | 7 |  | cooldownReduction | 待ち時間を短縮する。 | unconfirmed | 0.5 | actionOrderOrCooldown | unconfirmed |
| Pawmot | Mach Punch | moveChoice | 7 |  | formChange | フォーム・モード・構えを変化させる。 | enemy |  | formOrMode | unconfirmed |
| Pawmot | Mach Punch+ | movePlus | 7 | yes | stun | 行動不能・スタンを付与する。 | enemy | 1 | durationOrBuffDebuff | unconfirmed |
| Pawmot | Mach Punch+ | movePlus | 7 | yes | damageDealtChange | 与ダメージを変化させる。 | unconfirmed |  | durationOrBuffDebuff | unconfirmed |
| Pawmot | Mach Punch+ | movePlus | 7 | yes | formChange | フォーム・モード・構えを変化させる。 | self |  | formOrMode | unconfirmed |
| Pawmot | Zip Zap Full-Charge Spark | uniteMove | 9 |  | stackOrMark | スタック、マーク、ゲージを扱う。 | enemy |  | targetOrSelfStack | unconfirmed |
| Pawmot | Zip Zap Full-Charge Spark | uniteMove | 9 |  | wildPokemonRule | 野生ポケモン限定の処理を持つ。 | unconfirmed |  | targetType | unconfirmed |
| Pawmot | Zip Zap Full-Charge Spark | uniteMove | 9 |  | formChange | フォーム・モード・構えを変化させる。 | self | 8 | formOrMode | unconfirmed |
| Pawmot | Zip Zap Full-Charge Spark Unite Buff | uniteBuff | 9 |  | shield | シールドを付与する。 | self |  | durationOrBuffDebuff | unconfirmed |
| Pawmot | Zip Zap Full-Charge Spark Unite Buff | uniteBuff | 9 |  | maxHpChange | 最大HPを変化させる。 | unconfirmed |  | hpState | unconfirmed |
| Pikachu | Static | passive |  |  | paralysis | まひを付与する。 | enemy | 30 | durationOrBuffDebuff | unconfirmed |
| Pikachu | Static | passive |  |  | attackSpeedDown | 通常攻撃速度を下げる。 | enemy | 2.5 | durationOrBuffDebuff | unconfirmed |
| Pikachu | Attack | normalAttack |  |  | paralysis | まひを付与する。 | enemy | 1 | durationOrBuffDebuff | unconfirmed |
| Pikachu | Attack | normalAttack |  |  | attackSpeedDown | 通常攻撃速度を下げる。 | enemy | 1 | durationOrBuffDebuff | unconfirmed |
| Pikachu | Attack | normalAttack |  |  | boostedAttackCycle | 通常攻撃回数により強化攻撃になる。 | enemy |  | actionOrderOrCooldown | unconfirmed |
| Pikachu | Attack Boosted | boostedAttack |  |  | paralysis | まひを付与する。 | enemy |  | durationOrBuffDebuff | unconfirmed |
| Pikachu | Attack Boosted | boostedAttack |  |  | boostedAttackCycle | 通常攻撃回数により強化攻撃になる。 | unconfirmed |  | actionOrderOrCooldown | unconfirmed |
| Pikachu | Thunder Shock | initialMove |  |  | paralysis | まひを付与する。 | enemy | 2 | durationOrBuffDebuff | unconfirmed |
| Pikachu | Thunder Shock | initialMove |  |  | slow | 移動速度を下げる。 | enemy |  | durationOrBuffDebuff | unconfirmed |
| Pikachu | Thunder Shock | initialMove |  |  | attackSpeedDown | 通常攻撃速度を下げる。 | enemy | 2 | durationOrBuffDebuff | unconfirmed |
| Pikachu | Electro Ball | moveChoice | 4 |  | paralysis | まひを付与する。 | enemy | 2 | durationOrBuffDebuff | unconfirmed |
| Pikachu | Electro Ball | moveChoice | 4 |  | attackSpeedDown | 通常攻撃速度を下げる。 | enemy | 2 | durationOrBuffDebuff | unconfirmed |
| Pikachu | Electro Ball | moveChoice | 4 |  | hpReferenceDamage | 現在HP・最大HP・減少HPなどを参照する。 | unconfirmed |  | hpState | unconfirmed |
| Pikachu | Electro Ball | moveChoice | 4 |  | wildPokemonRule | 野生ポケモン限定の処理を持つ。 | unconfirmed |  | targetType | unconfirmed |
| Pikachu | Electro Ball+ | movePlus | 4 | yes | hpReferenceDamage | 現在HP・最大HP・減少HPなどを参照する。 | enemy |  | hpState | unconfirmed |
| Pikachu | Thunder | moveChoice | 4 |  | damageOverTime | 継続ダメージを与える。 | enemy | 0.5 | durationOrBuffDebuff | unconfirmed |
| Pikachu | Thunder+ | movePlus | 4 | yes | damageOverTime | 継続ダメージを与える。 | enemy | 2.5 | durationOrBuffDebuff | unconfirmed |
| Pikachu | Electroweb | initialMove |  |  | immobilize | 移動不能を付与する。 | enemy | 1.5 | durationOrBuffDebuff | unconfirmed |
| Pikachu | Volt Tackle | moveChoice | 6 |  | knockUp | 相手を打ち上げる。 | enemy | 1.4 |  | unconfirmed |
| Pikachu | Volt Tackle | moveChoice | 6 |  | unstoppable | 妨害無効になる。 | self | 1.4 | durationOrBuffDebuff | unconfirmed |
| Pikachu | Volt Tackle | moveChoice | 6 |  | movementSpeedUp | 移動速度を上げる。 | self | 2 | durationOrBuffDebuff | unconfirmed |
| Pikachu | Volt Tackle | moveChoice | 6 |  | damageOverTime | 継続ダメージを与える。 | unconfirmed | 2 | durationOrBuffDebuff | unconfirmed |
| Pikachu | Volt Tackle | moveChoice | 6 |  | formChange | フォーム・モード・構えを変化させる。 | self | 2 | formOrMode | unconfirmed |
| Pikachu | Thunderbolt | moveChoice | 6 |  | stun | 行動不能・スタンを付与する。 | enemy | 1.25 | durationOrBuffDebuff | unconfirmed |
| Pikachu | Thunderstorm | uniteMove | 9 |  | unstoppable | 妨害無効になる。 | self | 3 | durationOrBuffDebuff | unconfirmed |
| Pikachu | Thunderstorm Unite Buff | uniteBuff | 9 |  | cooldownReduction | 待ち時間を短縮する。 | unconfirmed |  | actionOrderOrCooldown | unconfirmed |
| Pikachu | Thunderstorm Unite Buff | uniteBuff | 9 |  | shield | シールドを付与する。 | self |  | durationOrBuffDebuff | unconfirmed |
| Pikachu | Thunderstorm Unite Buff | uniteBuff | 9 |  | maxHpChange | 最大HPを変化させる。 | unconfirmed |  | hpState | unconfirmed |
| Psyduck | Swift Swim | passive |  |  | unstoppable | 妨害無効になる。 | self | 1 | durationOrBuffDebuff | unconfirmed |
| Psyduck | Swift Swim | passive |  |  | movementSpeedUp | 移動速度を上げる。 | self | 2 | durationOrBuffDebuff | unconfirmed |
| Psyduck | Swift Swim | passive |  |  | damageReduction | 受けるダメージを軽減する。 | ally |  | durationOrBuffDebuff | unconfirmed |
| Psyduck | Swift Swim | passive |  |  | damageOverTime | 継続ダメージを与える。 | unconfirmed | 2 | durationOrBuffDebuff | unconfirmed |
| Psyduck | Swift Swim | passive |  |  | stackOrMark | スタック、マーク、ゲージを扱う。 | ally |  | targetOrSelfStack | unconfirmed |
| Psyduck | Swift Swim | passive |  |  | hpReferenceDamage | 現在HP・最大HP・減少HPなどを参照する。 | ally |  | hpState | unconfirmed |
| Psyduck | Swift Swim | passive |  |  | cleanse | 状態異常や低下効果を解除する。 | self | 1 | durationOrBuffDebuff | unconfirmed |
| Psyduck | Confusion | initialMove |  |  | stun | 行動不能・スタンを付与する。 | enemy | 1 | durationOrBuffDebuff | unconfirmed |
| Psyduck | Surf | moveChoice | 4 |  | knockBack | 相手を押し出す。 | enemy | 0.5 |  | unconfirmed |
| Psyduck | Surf | moveChoice | 4 |  | movementSpeedUp | 移動速度を上げる。 | self | 0.6 | durationOrBuffDebuff | unconfirmed |
| Psyduck | Surf | moveChoice | 4 |  | damageOverTime | 継続ダメージを与える。 | ally | 3 | durationOrBuffDebuff | unconfirmed |
| Psyduck | Surf | moveChoice | 4 |  | reuseOrSecondActivation | 再使用・派生・2段目を持つ。 | unconfirmed | 0.6 | actionOrderOrCooldown | unconfirmed |
| Psyduck | Surf+ | movePlus | 4 | yes | damageDealtChange | 与ダメージを変化させる。 | enemy | 2.5 | durationOrBuffDebuff | unconfirmed |
| Psyduck | Bubble Beam | moveChoice | 4 |  | stun | 行動不能・スタンを付与する。 | enemy | 0.5 | durationOrBuffDebuff | unconfirmed |
| Psyduck | Bubble Beam | moveChoice | 4 |  | slow | 移動速度を下げる。 | enemy | 0.5 | durationOrBuffDebuff | unconfirmed |
| Psyduck | Bubble Beam | moveChoice | 4 |  | damageDealtChange | 与ダメージを変化させる。 | unconfirmed |  | durationOrBuffDebuff | unconfirmed |
| Psyduck | Bubble Beam | moveChoice | 4 |  | stackOrMark | スタック、マーク、ゲージを扱う。 | enemy | 5 | targetOrSelfStack | unconfirmed |
| Psyduck | Bubble Beam | moveChoice | 4 |  | attachToAlly | 味方へ付着または移動する。 | enemy | 5 |  | unconfirmed |
| Psyduck | Tail Whip | initialMove |  |  | defenseStatChange | 防御・特防を変化させる。 | enemy | 2 | durationOrBuffDebuff | unconfirmed |
| Psyduck | Disable | moveChoice | 6 |  | stun | 行動不能・スタンを付与する。 | enemy | 0.2 | durationOrBuffDebuff | unconfirmed |
| Psyduck | Disable | moveChoice | 6 |  | stackOrMark | スタック、マーク、ゲージを扱う。 | enemy | 5 | targetOrSelfStack | unconfirmed |
| Psyduck | Disable+ | movePlus | 6 | yes | stun | 行動不能・スタンを付与する。 | unconfirmed | 0.5 | durationOrBuffDebuff | unconfirmed |
| Psyduck | Psychic | moveChoice | 6 |  | stun | 行動不能・スタンを付与する。 | enemy | 0.6 | durationOrBuffDebuff | unconfirmed |
| Psyduck | Psychic | moveChoice | 6 |  | pull | 相手を引き寄せる。 | enemy | 2 |  | unconfirmed |
| Psyduck | Psychic | moveChoice | 6 |  | delayedDamage | 遅延または時間差でダメージを与える。 | enemy | 2 | durationOrBuffDebuff | unconfirmed |
| Psyduck | Psychic | moveChoice | 6 |  | stackOrMark | スタック、マーク、ゲージを扱う。 | enemy | 2 | targetOrSelfStack | unconfirmed |
| Psyduck | Psychic | moveChoice | 6 |  | formChange | フォーム・モード・構えを変化させる。 | enemy | 2 | formOrMode | unconfirmed |
| Psyduck | Psychic | moveChoice | 6 |  | reuseOrSecondActivation | 再使用・派生・2段目を持つ。 | enemy | 2 | actionOrderOrCooldown | unconfirmed |
| Psyduck | Psychic+ | movePlus | 6 | yes | defenseStatChange | 防御・特防を変化させる。 | enemy | 2 | durationOrBuffDebuff | unconfirmed |
| Psyduck | Full-Power Psy-ay-ay! | uniteMove | 8 |  | damageDealtChange | 与ダメージを変化させる。 | enemy | 3 | durationOrBuffDebuff | unconfirmed |
| Psyduck | Full-Power Psy-ay-ay! | uniteMove | 8 |  | stackOrMark | スタック、マーク、ゲージを扱う。 | unconfirmed |  | targetOrSelfStack | unconfirmed |
| Psyduck | Full-Power Psy-ay-ay! Unite Buff | uniteBuff | 8 |  | cooldownReduction | 待ち時間を短縮する。 | unconfirmed |  | actionOrderOrCooldown | unconfirmed |
| Psyduck | Full-Power Psy-ay-ay! Unite Buff | uniteBuff | 8 |  | shield | シールドを付与する。 | self |  | durationOrBuffDebuff | unconfirmed |
| Psyduck | Full-Power Psy-ay-ay! Unite Buff | uniteBuff | 8 |  | maxHpChange | 最大HPを変化させる。 | unconfirmed |  | hpState | unconfirmed |
| Quaquaval | Moxie | passive |  |  | movementSpeedUp | 移動速度を上げる。 | enemy | 3 | durationOrBuffDebuff | unconfirmed |
| Quaquaval | Moxie | passive |  |  | stackOrMark | スタック、マーク、ゲージを扱う。 | unconfirmed |  | targetOrSelfStack | unconfirmed |
| Quaquaval | Moxie | passive |  |  | nextBoostedAttack | 次の通常攻撃または強化攻撃を準備する。 | unconfirmed |  | actionOrderOrCooldown | unconfirmed |
| Quaquaval | Attack | normalAttack |  |  | shield | シールドを付与する。 | self |  | durationOrBuffDebuff | unconfirmed |
| Quaquaval | Attack | normalAttack |  |  | boostedAttackCycle | 通常攻撃回数により強化攻撃になる。 | unconfirmed |  | actionOrderOrCooldown | unconfirmed |
| Quaquaval | Pound | initialMove |  |  | slow | 移動速度を下げる。 | enemy | 2 | durationOrBuffDebuff | unconfirmed |
| Quaquaval | Low Sweep | moveChoice | 5 |  | slow | 移動速度を下げる。 | enemy | 1 | durationOrBuffDebuff | unconfirmed |
| Quaquaval | Wing Attack | initialMove |  |  | shield | シールドを付与する。 | self | 3 | durationOrBuffDebuff | unconfirmed |
| Quaquaval | Liquidation+ | movePlus | 7 | yes | healing | HPを回復する。 | self |  | hpState | unconfirmed |
| Quaquaval | Liquidation+ | movePlus | 7 | yes | shield | シールドを付与する。 | self |  | durationOrBuffDebuff | unconfirmed |
| Quaquaval | Carnival Splash | uniteMove | 9 |  | stun | 行動不能・スタンを付与する。 | enemy | 1 | durationOrBuffDebuff | unconfirmed |
| Quaquaval | Carnival Splash | uniteMove | 9 |  | pull | 相手を引き寄せる。 | enemy | 1 |  | unconfirmed |
| Quaquaval | Carnival Splash | uniteMove | 9 |  | unstoppable | 妨害無効になる。 | enemy |  | durationOrBuffDebuff | unconfirmed |
| Quaquaval | Carnival Splash | uniteMove | 9 |  | shield | シールドを付与する。 | enemy |  | durationOrBuffDebuff | unconfirmed |
| Quaquaval | Carnival Splash | uniteMove | 9 |  | wildPokemonRule | 野生ポケモン限定の処理を持つ。 | unconfirmed |  | targetType | unconfirmed |
| Quaquaval | Carnival Splash Unite Buff | uniteBuff | 9 |  | cooldownReduction | 待ち時間を短縮する。 | unconfirmed |  | actionOrderOrCooldown | unconfirmed |
| Quaquaval | Carnival Splash Unite Buff | uniteBuff | 9 |  | shield | シールドを付与する。 | self |  | durationOrBuffDebuff | unconfirmed |
| Quaquaval | Carnival Splash Unite Buff | uniteBuff | 9 |  | maxHpChange | 最大HPを変化させる。 | unconfirmed |  | hpState | unconfirmed |
| Raichu | Static | passive |  |  | paralysis | まひを付与する。 | enemy | 30 | durationOrBuffDebuff | unconfirmed |
| Raichu | Static | passive |  |  | attackSpeedUp | 通常攻撃速度を上げる。 | enemy | 2 | durationOrBuffDebuff | unconfirmed |
| Raichu | Attack - Pikachu | normalAttack |  |  | paralysis | まひを付与する。 | enemy | 2 | durationOrBuffDebuff | unconfirmed |
| Raichu | Attack - Pikachu | normalAttack |  |  | attackSpeedUp | 通常攻撃速度を上げる。 | enemy | 2 | durationOrBuffDebuff | unconfirmed |
| Raichu | Attack - Pikachu | normalAttack |  |  | boostedAttackCycle | 通常攻撃回数により強化攻撃になる。 | enemy |  | actionOrderOrCooldown | unconfirmed |
| Raichu | Thunder Shock | initialMove |  |  | paralysis | まひを付与する。 | enemy | 2 | durationOrBuffDebuff | unconfirmed |
| Raichu | Thunder Shock | initialMove |  |  | attackSpeedUp | 通常攻撃速度を上げる。 | enemy | 2 | durationOrBuffDebuff | unconfirmed |
| Raichu | Stored Power | moveChoice | 5 |  | attackSpeedUp | 通常攻撃速度を上げる。 | self | 5 | durationOrBuffDebuff | unconfirmed |
| Raichu | Stored Power+ | movePlus | 5 | yes | defenseStatChange | 防御・特防を変化させる。 | enemy | 3 | durationOrBuffDebuff | unconfirmed |
| Raichu | Electro Ball | moveChoice | 5 |  | fieldArea | フィールド・設置範囲を生成する。 | enemy | 30 | durationOrBuffDebuff | unconfirmed |
| Raichu | Electro Ball+ | movePlus | 5 | yes | damageOverTime | 継続ダメージを与える。 | enemy | 0.5 | durationOrBuffDebuff | unconfirmed |
| Raichu | Thunder Wave | initialMove |  |  | paralysis | まひを付与する。 | enemy | 2 | durationOrBuffDebuff | unconfirmed |
| Raichu | Thunder Wave | initialMove |  |  | attackSpeedUp | 通常攻撃速度を上げる。 | enemy | 2 | durationOrBuffDebuff | unconfirmed |
| Raichu | Thunderbolt | moveChoice | 7 |  | paralysis | まひを付与する。 | enemy | 0.5 | durationOrBuffDebuff | unconfirmed |
| Raichu | Thunderbolt | moveChoice | 7 |  | attackSpeedUp | 通常攻撃速度を上げる。 | enemy | 2 | durationOrBuffDebuff | unconfirmed |
| Raichu | Thunderbolt+ | movePlus | 7 | yes | paralysis | まひを付与する。 | enemy | 1 | durationOrBuffDebuff | unconfirmed |
| Raichu | Thunderbolt+ | movePlus | 7 | yes | immobilize | 移動不能を付与する。 | enemy | 1 | durationOrBuffDebuff | unconfirmed |
| Raichu | Psychic | moveChoice | 7 |  | pull | 相手を引き寄せる。 | unconfirmed |  |  | unconfirmed |
| Raichu | Psychic | moveChoice | 7 |  | slow | 移動速度を下げる。 | enemy | 3 | durationOrBuffDebuff | unconfirmed |
| Raichu | Psychic+ | movePlus | 7 | yes | damageOverTime | 継続ダメージを与える。 | enemy | 0.5 | durationOrBuffDebuff | unconfirmed |
| Raichu | Thunderstorm Aerial | uniteMove | 9 |  | nextBoostedAttack | 次の通常攻撃または強化攻撃を準備する。 | enemy |  | actionOrderOrCooldown | unconfirmed |
| Raichu | Thunderstorm Aerial | uniteMove | 9 |  | boostedAttackCycle | 通常攻撃回数により強化攻撃になる。 | enemy |  | actionOrderOrCooldown | unconfirmed |
| Raichu | Thunderstorm Aerial Unite Buff | uniteBuff | 9 |  | shield | シールドを付与する。 | self |  | durationOrBuffDebuff | unconfirmed |
| Raichu | Thunderstorm Aerial Unite Buff | uniteBuff | 9 |  | maxHpChange | 最大HPを変化させる。 | unconfirmed |  | hpState | unconfirmed |
| Rapidash | Pastel Veil | passive |  |  | damageDealtChange | 与ダメージを変化させる。 | unconfirmed |  | durationOrBuffDebuff | unconfirmed |
| Rapidash | Pastel Veil | passive |  |  | shield | シールドを付与する。 | self |  | durationOrBuffDebuff | unconfirmed |
| Rapidash | Pastel Veil | passive |  |  | stackOrMark | スタック、マーク、ゲージを扱う。 | unconfirmed |  | targetOrSelfStack | unconfirmed |
| Rapidash | Pastel Veil | passive |  |  | formChange | フォーム・モード・構えを変化させる。 | self |  | formOrMode | unconfirmed |
| Rapidash | Dazzling Gleam | moveChoice | 5 |  | delayedDamage | 遅延または時間差でダメージを与える。 | enemy |  | durationOrBuffDebuff | unconfirmed |
| Rapidash | Dazzling Gleam | moveChoice | 5 |  | stackOrMark | スタック、マーク、ゲージを扱う。 | enemy | 5.5 | targetOrSelfStack | unconfirmed |
| Rapidash | Dazzling Gleam | moveChoice | 5 |  | wildPokemonRule | 野生ポケモン限定の処理を持つ。 | enemy | 5.5 | targetType | unconfirmed |
| Rapidash | Fairy Wind | moveChoice | 5 |  | knockUp | 相手を打ち上げる。 | enemy | 0.8 |  | unconfirmed |
| Rapidash | Fairy Wind | moveChoice | 5 |  | reuseOrSecondActivation | 再使用・派生・2段目を持つ。 | unconfirmed |  | actionOrderOrCooldown | unconfirmed |
| Rapidash | Smart Strike | moveChoice | 7 |  | stun | 行動不能・スタンを付与する。 | enemy | 1 | durationOrBuffDebuff | unconfirmed |
| Rapidash | Smart Strike+ | movePlus | 7 | yes | stackOrMark | スタック、マーク、ゲージを扱う。 | unconfirmed |  | targetOrSelfStack | unconfirmed |
| Rapidash | Agility | moveChoice | 7 |  | damageOverTime | 継続ダメージを与える。 | unconfirmed | 0.5 | durationOrBuffDebuff | unconfirmed |
| Rapidash | Agility+ | movePlus | 7 | yes | movementSpeedUp | 移動速度を上げる。 | self | 0.5 | durationOrBuffDebuff | unconfirmed |
| Rapidash | Agility+ | movePlus | 7 | yes | damageOverTime | 継続ダメージを与える。 | unconfirmed | 0.5 | durationOrBuffDebuff | unconfirmed |
| Rapidash | Agility+ | movePlus | 7 | yes | hpReferenceDamage | 現在HP・最大HP・減少HPなどを参照する。 | unconfirmed | 0.5 | hpState | unconfirmed |
| Rapidash | Triad Blitz | uniteMove | 9 |  | stun | 行動不能・スタンを付与する。 | enemy | 0.8 | durationOrBuffDebuff | unconfirmed |
| Rapidash | Triad Blitz | uniteMove | 9 |  | unstoppable | 妨害無効になる。 | enemy | 0.8 | durationOrBuffDebuff | unconfirmed |
| Rapidash | Triad Blitz | uniteMove | 9 |  | reuseOrSecondActivation | 再使用・派生・2段目を持つ。 | unconfirmed | 5.5 | actionOrderOrCooldown | unconfirmed |
| Rapidash | Triad Blitz Unite Buff | uniteBuff | 9 |  | cooldownReduction | 待ち時間を短縮する。 | unconfirmed |  | actionOrderOrCooldown | unconfirmed |
| Rapidash | Triad Blitz Unite Buff | uniteBuff | 9 |  | shield | シールドを付与する。 | self |  | durationOrBuffDebuff | unconfirmed |
| Rapidash | Triad Blitz Unite Buff | uniteBuff | 9 |  | maxHpChange | 最大HPを変化させる。 | unconfirmed |  | hpState | unconfirmed |
| Sableye | Attack | normalAttack |  |  | boostedAttackCycle | 通常攻撃回数により強化攻撃になる。 | enemy | 2 | actionOrderOrCooldown | unconfirmed |
| Sableye | Attack Boosted | boostedAttack |  |  | boostedAttackCycle | 通常攻撃回数により強化攻撃になる。 | enemy |  | actionOrderOrCooldown | unconfirmed |
| Sableye | Thief | initialMove |  |  | stun | 行動不能・スタンを付与する。 | enemy | 0.5 | durationOrBuffDebuff | unconfirmed |
| Sableye | Thief | initialMove |  |  | slow | 移動速度を下げる。 | unconfirmed | 2 | durationOrBuffDebuff | unconfirmed |
| Sableye | Knock Off | moveChoice | 4 |  | stun | 行動不能・スタンを付与する。 | enemy | 0.4 | durationOrBuffDebuff | unconfirmed |
| Sableye | Knock Off | moveChoice | 4 |  | knockUp | 相手を打ち上げる。 | enemy |  |  | unconfirmed |
| Sableye | Knock Off | moveChoice | 4 |  | knockBack | 相手を押し出す。 | enemy | 6 |  | unconfirmed |
| Sableye | Knock Off | moveChoice | 4 |  | damageReduction | 受けるダメージを軽減する。 | unconfirmed |  | durationOrBuffDebuff | unconfirmed |
| Sableye | Knock Off | moveChoice | 4 |  | wildPokemonRule | 野生ポケモン限定の処理を持つ。 | enemy |  | targetType | unconfirmed |
| Sableye | Knock Off | moveChoice | 4 |  | reuseOrSecondActivation | 再使用・派生・2段目を持つ。 | enemy | 6 | actionOrderOrCooldown | unconfirmed |
| Sableye | Knock Off+ | movePlus | 4 | yes | movementSpeedUp | 移動速度を上げる。 | self | 5 | durationOrBuffDebuff | unconfirmed |
| Sableye | Knock Off+ | movePlus | 4 | yes | healing | HPを回復する。 | self |  | hpState | unconfirmed |
| Sableye | Shadow Sneak | moveChoice | 4 |  | stun | 行動不能・スタンを付与する。 | unconfirmed | 2 | durationOrBuffDebuff | unconfirmed |
| Sableye | Shadow Sneak | moveChoice | 4 |  | immobilize | 移動不能を付与する。 | unconfirmed | 2 | durationOrBuffDebuff | unconfirmed |
| Sableye | Shadow Sneak | moveChoice | 4 |  | delayedDamage | 遅延または時間差でダメージを与える。 | unconfirmed | 2 | durationOrBuffDebuff | unconfirmed |
| Sableye | Shadow Sneak+ | movePlus | 4 | yes | healing | HPを回復する。 | ally |  | hpState | unconfirmed |
| Sableye | Shadow Sneak+ | movePlus | 4 | yes | damageOverTime | 継続ダメージを与える。 | unconfirmed | 0.5 | durationOrBuffDebuff | unconfirmed |
| Sableye | Feint Attack | moveChoice | 6 |  | knockUp | 相手を打ち上げる。 | unconfirmed |  |  | unconfirmed |
| Sableye | Feint Attack | moveChoice | 6 |  | damageOverTime | 継続ダメージを与える。 | enemy | 4 | durationOrBuffDebuff | unconfirmed |
| Sableye | Feint Attack+ | movePlus | 6 | yes | damageOverTime | 継続ダメージを与える。 | ally |  | durationOrBuffDebuff | unconfirmed |
| Sableye | Confuse Ray | moveChoice | 6 |  | stun | 行動不能・スタンを付与する。 | enemy |  | durationOrBuffDebuff | unconfirmed |
| Sableye | Confuse Ray | moveChoice | 6 |  | wildPokemonRule | 野生ポケモン限定の処理を持つ。 | unconfirmed |  | targetType | unconfirmed |
| Sableye | Confuse Ray | moveChoice | 6 |  | koAssistTrigger | KOまたはアシストで発動する。 | enemy |  | koAssistEvent | unconfirmed |
| Sableye | Chaos Glower | uniteMove | 8 |  | stun | 行動不能・スタンを付与する。 | enemy | 3 | durationOrBuffDebuff | unconfirmed |
| Sableye | Chaos Glower | uniteMove | 8 |  | unstoppable | 妨害無効になる。 | enemy | 1.2 | durationOrBuffDebuff | unconfirmed |
| Sableye | Chaos Glower Unite Buff | uniteBuff | 8 |  | cooldownReduction | 待ち時間を短縮する。 | unconfirmed |  | actionOrderOrCooldown | unconfirmed |
| Sableye | Chaos Glower Unite Buff | uniteBuff | 8 |  | shield | シールドを付与する。 | self |  | durationOrBuffDebuff | unconfirmed |
| Sableye | Chaos Glower Unite Buff | uniteBuff | 8 |  | maxHpChange | 最大HPを変化させる。 | unconfirmed |  | hpState | unconfirmed |
| Scizor | Technician | passive |  |  | damageReduction | 受けるダメージを軽減する。 | unconfirmed |  | durationOrBuffDebuff | unconfirmed |
| Scizor | Technician | passive |  |  | nextBoostedAttack | 次の通常攻撃または強化攻撃を準備する。 | unconfirmed |  | actionOrderOrCooldown | unconfirmed |
| Scizor | Attack | normalAttack |  |  | defenseStatChange | 防御・特防を変化させる。 | enemy | 2 | durationOrBuffDebuff | unconfirmed |
| Scizor | Attack | normalAttack |  |  | stackOrMark | スタック、マーク、ゲージを扱う。 | unconfirmed |  | targetOrSelfStack | unconfirmed |
| Scizor | Attack | normalAttack |  |  | boostedAttackCycle | 通常攻撃回数により強化攻撃になる。 | enemy | 2 | actionOrderOrCooldown | unconfirmed |
| Scizor | Bullet Punch | moveChoice | 5 |  | reuseOrSecondActivation | 再使用・派生・2段目を持つ。 | unconfirmed | 8 | actionOrderOrCooldown | unconfirmed |
| Scizor | Bullet Punch+ | movePlus | 5 | yes | shield | シールドを付与する。 | enemy | 3 | durationOrBuffDebuff | unconfirmed |
| Scizor | Double Hit | moveChoice | 7 |  | stackOrMark | スタック、マーク、ゲージを扱う。 | enemy |  | targetOrSelfStack | unconfirmed |
| Scizor | Double Hit | moveChoice | 7 |  | cleanse | 状態異常や低下効果を解除する。 | self |  | durationOrBuffDebuff | unconfirmed |
| Scizor | Swords Dance | moveChoice | 7 |  | formChange | フォーム・モード・構えを変化させる。 | self | 5 | formOrMode | unconfirmed |
| Scizor | Red Illusion Dive | uniteMove | 9 |  | stun | 行動不能・スタンを付与する。 | enemy | 2 | durationOrBuffDebuff | unconfirmed |
| Scizor | Red Illusion Dive | uniteMove | 9 |  | knockBack | 相手を押し出す。 | enemy | 2 |  | unconfirmed |
| Scizor | Red Illusion Dive | uniteMove | 9 |  | slow | 移動速度を下げる。 | enemy | 3 | durationOrBuffDebuff | unconfirmed |
| Scizor | Red Illusion Dive | uniteMove | 9 |  | damageDealtChange | 与ダメージを変化させる。 | enemy | 3 | durationOrBuffDebuff | unconfirmed |
| Scizor | Red Illusion Dive | uniteMove | 9 |  | fieldArea | フィールド・設置範囲を生成する。 | area |  | durationOrBuffDebuff | unconfirmed |
| Scizor | Red Illusion Dive | uniteMove | 9 |  | reuseOrSecondActivation | 再使用・派生・2段目を持つ。 | enemy | 8 | actionOrderOrCooldown | unconfirmed |
| Scizor | Red Illusion Dive | uniteMove | 9 |  | cloneOrDecoy | 分身、コピー、身代わりなどを生成する。 | unconfirmed |  | durationOrBuffDebuff | unconfirmed |
| Scizor | Red Illusion Dive Unite Buff | uniteBuff | 9 |  | cooldownReduction | 待ち時間を短縮する。 | unconfirmed |  | actionOrderOrCooldown | unconfirmed |
| Scizor | Red Illusion Dive Unite Buff | uniteBuff | 9 |  | shield | シールドを付与する。 | self |  | durationOrBuffDebuff | unconfirmed |
| Scizor | Red Illusion Dive Unite Buff | uniteBuff | 9 |  | maxHpChange | 最大HPを変化させる。 | unconfirmed |  | hpState | unconfirmed |
| Scyther | Technician | passive |  |  | damageReduction | 受けるダメージを軽減する。 | unconfirmed |  | durationOrBuffDebuff | unconfirmed |
| Scyther | Technician | passive |  |  | nextBoostedAttack | 次の通常攻撃または強化攻撃を準備する。 | unconfirmed |  | actionOrderOrCooldown | unconfirmed |
| Scyther | Attack | normalAttack |  |  | boostedAttackCycle | 通常攻撃回数により強化攻撃になる。 | unconfirmed | 3 | actionOrderOrCooldown | unconfirmed |
| Scyther | Dual Wingbeat | moveChoice | 5 |  | hpReferenceDamage | 現在HP・最大HP・減少HPなどを参照する。 | enemy |  | hpState | unconfirmed |
| Scyther | Dual Wingbeat | moveChoice | 5 |  | wildPokemonRule | 野生ポケモン限定の処理を持つ。 | unconfirmed |  | targetType | unconfirmed |
| Scyther | Dual Wingbeat | moveChoice | 5 |  | reuseOrSecondActivation | 再使用・派生・2段目を持つ。 | enemy |  | actionOrderOrCooldown | unconfirmed |
| Scyther | Dual Wingbeat+ | movePlus | 5 | yes | damageDealtChange | 与ダメージを変化させる。 | unconfirmed |  | durationOrBuffDebuff | unconfirmed |
| Scyther | Double Hit | moveChoice | 7 |  | stackOrMark | スタック、マーク、ゲージを扱う。 | enemy |  | targetOrSelfStack | unconfirmed |
| Scyther | Double Hit | moveChoice | 7 |  | cleanse | 状態異常や低下効果を解除する。 | self |  | durationOrBuffDebuff | unconfirmed |
| Scyther | Swords Dance | moveChoice | 7 |  | formChange | フォーム・モード・構えを変化させる。 | self | 5 | formOrMode | unconfirmed |
| Scyther | Green Illusion Dive | uniteMove | 9 |  | damageReduction | 受けるダメージを軽減する。 | enemy |  | durationOrBuffDebuff | unconfirmed |
| Scyther | Green Illusion Dive | uniteMove | 9 |  | healing | HPを回復する。 | enemy | 5 | hpState | unconfirmed |
| Scyther | Green Illusion Dive | uniteMove | 9 |  | stackOrMark | スタック、マーク、ゲージを扱う。 | enemy | 5 | targetOrSelfStack | unconfirmed |
| Scyther | Green Illusion Dive | uniteMove | 9 |  | formChange | フォーム・モード・構えを変化させる。 | enemy |  | formOrMode | unconfirmed |
| Scyther | Green Illusion Dive | uniteMove | 9 |  | reuseOrSecondActivation | 再使用・派生・2段目を持つ。 | enemy | 5 | actionOrderOrCooldown | unconfirmed |
| Scyther | Green Illusion Dive | uniteMove | 9 |  | cloneOrDecoy | 分身、コピー、身代わりなどを生成する。 | enemy |  | durationOrBuffDebuff | unconfirmed |
| Scyther | Green Illusion Dive Unite Buff | uniteBuff | 9 |  | shield | シールドを付与する。 | self |  | durationOrBuffDebuff | unconfirmed |
| Scyther | Green Illusion Dive Unite Buff | uniteBuff | 9 |  | maxHpChange | 最大HPを変化させる。 | unconfirmed |  | hpState | unconfirmed |
| Sirfetch'd | Steadfast | passive |  |  | shield | シールドを付与する。 | self |  | durationOrBuffDebuff | unconfirmed |
| Sirfetch'd | Steadfast | passive |  |  | fieldArea | フィールド・設置範囲を生成する。 | area | 8 | durationOrBuffDebuff | unconfirmed |
| Sirfetch'd | Fury Cutter | moveChoice | 5 |  | stun | 行動不能・スタンを付与する。 | enemy | 0.75 | durationOrBuffDebuff | unconfirmed |
| Sirfetch'd | Leaf Blade | moveChoice | 5 |  | knockUp | 相手を打ち上げる。 | enemy | 10 |  | unconfirmed |
| Sirfetch'd | Quick Attack | initialMove |  |  | shield | シールドを付与する。 | self | 3 | durationOrBuffDebuff | unconfirmed |
| Sirfetch'd | Brutal Swing | moveChoice | 7 |  | knockUp | 相手を打ち上げる。 | enemy |  |  | unconfirmed |
| Sirfetch'd | Brutal Swing | moveChoice | 7 |  | slow | 移動速度を下げる。 | unconfirmed | 1.5 | durationOrBuffDebuff | unconfirmed |
| Sirfetch'd | Brutal Swing | moveChoice | 7 |  | shield | シールドを付与する。 | self | 4 | durationOrBuffDebuff | unconfirmed |
| Sirfetch'd | Brutal Swing | moveChoice | 7 |  | damageOverTime | 継続ダメージを与える。 | unconfirmed | 0.5 | durationOrBuffDebuff | unconfirmed |
| Sirfetch'd | Brutal Swing | moveChoice | 7 |  | reuseOrSecondActivation | 再使用・派生・2段目を持つ。 | unconfirmed | 1.5 | actionOrderOrCooldown | unconfirmed |
| Sirfetch'd | Brutal Swing+ | movePlus | 7 | yes | shield | シールドを付与する。 | self |  | durationOrBuffDebuff | unconfirmed |
| Sirfetch'd | Detect | moveChoice | 7 |  | slow | 移動速度を下げる。 | unconfirmed | 2.5 | durationOrBuffDebuff | unconfirmed |
| Sirfetch'd | Detect | moveChoice | 7 |  | damageReduction | 受けるダメージを軽減する。 | unconfirmed | 0.6 | durationOrBuffDebuff | unconfirmed |
| Sirfetch'd | Detect | moveChoice | 7 |  | shield | シールドを付与する。 | self | 0.6 | durationOrBuffDebuff | unconfirmed |
| Sirfetch'd | Lunging Leek Nova Blast | uniteMove | 9 |  | stun | 行動不能・スタンを付与する。 | unconfirmed | 0.4 | durationOrBuffDebuff | unconfirmed |
| Sirfetch'd | Lunging Leek Nova Blast | uniteMove | 9 |  | unstoppable | 妨害無効になる。 | enemy | 1 | durationOrBuffDebuff | unconfirmed |
| Sirfetch'd | Lunging Leek Nova Blast | uniteMove | 9 |  | stackOrMark | スタック、マーク、ゲージを扱う。 | enemy | 1 | targetOrSelfStack | unconfirmed |
| Sirfetch'd | Lunging Leek Nova Blast | uniteMove | 9 |  | formChange | フォーム・モード・構えを変化させる。 | self |  | formOrMode | unconfirmed |
| Sirfetch'd | Lunging Leek Nova Blast | uniteMove | 9 |  | wallOrTerrain | 壁・地形・草むらなどと相互作用する。 | area |  |  | unconfirmed |
| Sirfetch'd | Lunging Leek Nova Blast Unite Buff | uniteBuff | 9 |  | cooldownReduction | 待ち時間を短縮する。 | unconfirmed |  | actionOrderOrCooldown | unconfirmed |
| Sirfetch'd | Lunging Leek Nova Blast Unite Buff | uniteBuff | 9 |  | shield | シールドを付与する。 | self |  | durationOrBuffDebuff | unconfirmed |
| Sirfetch'd | Lunging Leek Nova Blast Unite Buff | uniteBuff | 9 |  | maxHpChange | 最大HPを変化させる。 | unconfirmed |  | hpState | unconfirmed |
| Skeledirge | Attack | normalAttack |  |  | boostedAttackCycle | 通常攻撃回数により強化攻撃になる。 | unconfirmed |  | actionOrderOrCooldown | unconfirmed |
| Skeledirge | Rousing Symphony Unite Buff | uniteBuff | 9 |  | cooldownReduction | 待ち時間を短縮する。 | unconfirmed |  | actionOrderOrCooldown | unconfirmed |
| Skeledirge | Rousing Symphony Unite Buff | uniteBuff | 9 |  | shield | シールドを付与する。 | self |  | durationOrBuffDebuff | unconfirmed |
| Skeledirge | Rousing Symphony Unite Buff | uniteBuff | 9 |  | maxHpChange | 最大HPを変化させる。 | unconfirmed |  | hpState | unconfirmed |
| Slowbro | Oblivious | passive |  |  | slow | 移動速度を下げる。 | unconfirmed | 6 | durationOrBuffDebuff | unconfirmed |
| Slowbro | Oblivious | passive |  |  | defenseStatChange | 防御・特防を変化させる。 | enemy | 6 | durationOrBuffDebuff | unconfirmed |
| Slowbro | Oblivious | passive |  |  | healing | HPを回復する。 | self | 6 | hpState | unconfirmed |
| Slowbro | Oblivious | passive |  |  | fieldArea | フィールド・設置範囲を生成する。 | area | 6 | durationOrBuffDebuff | unconfirmed |
| Slowbro | Oblivious | passive |  |  | stackOrMark | スタック、マーク、ゲージを扱う。 | unconfirmed | 5 | targetOrSelfStack | unconfirmed |
| Slowbro | Attack | normalAttack |  |  | boostedAttackCycle | 通常攻撃回数により強化攻撃になる。 | unconfirmed |  | actionOrderOrCooldown | unconfirmed |
| Slowbro | Attack Boosted | boostedAttack |  |  | boostedAttackCycle | 通常攻撃回数により強化攻撃になる。 | unconfirmed |  | actionOrderOrCooldown | unconfirmed |
| Slowbro | Water Gun | initialMove |  |  | slow | 移動速度を下げる。 | enemy | 1 | durationOrBuffDebuff | unconfirmed |
| Slowbro | Water Gun | initialMove |  |  | healing | HPを回復する。 | enemy |  | hpState | unconfirmed |
| Slowbro | Scald | moveChoice | 4 |  | burn | やけどを付与する。 | enemy | 0.5 | durationOrBuffDebuff | unconfirmed |
| Slowbro | Scald | moveChoice | 4 |  | slow | 移動速度を下げる。 | enemy | 0.5 | durationOrBuffDebuff | unconfirmed |
| Slowbro | Scald | moveChoice | 4 |  | healing | HPを回復する。 | enemy |  | hpState | unconfirmed |
| Slowbro | Scald | moveChoice | 4 |  | formChange | フォーム・モード・構えを変化させる。 | enemy |  | formOrMode | unconfirmed |
| Slowbro | Surf | moveChoice | 4 |  | knockUp | 相手を打ち上げる。 | enemy | 4 |  | unconfirmed |
| Slowbro | Surf | moveChoice | 4 |  | slow | 移動速度を下げる。 | enemy | 4 | durationOrBuffDebuff | unconfirmed |
| Slowbro | Surf | moveChoice | 4 |  | healing | HPを回復する。 | enemy |  | hpState | unconfirmed |
| Slowbro | Surf+ | movePlus | 4 | yes | knockUp | 相手を打ち上げる。 | enemy | 75 |  | unconfirmed |
| Slowbro | Slack Off | initialMove |  |  | slow | 移動速度を下げる。 | unconfirmed | 0.5 | durationOrBuffDebuff | unconfirmed |
| Slowbro | Slack Off | initialMove |  |  | healing | HPを回復する。 | self | 0.5 | hpState | unconfirmed |
| Slowbro | Slack Off | initialMove |  |  | damageOverTime | 継続ダメージを与える。 | unconfirmed | 0.5 | durationOrBuffDebuff | unconfirmed |
| Slowbro | Amnesia | moveChoice | 6 |  | slow | 移動速度を下げる。 | unconfirmed | 4 | durationOrBuffDebuff | unconfirmed |
| Slowbro | Amnesia | moveChoice | 6 |  | unstoppable | 妨害無効になる。 | self | 4 | durationOrBuffDebuff | unconfirmed |
| Slowbro | Amnesia | moveChoice | 6 |  | hindranceResistance | 妨害耐性を得る。 | self |  | durationOrBuffDebuff | unconfirmed |
| Slowbro | Amnesia | moveChoice | 6 |  | damageDealtChange | 与ダメージを変化させる。 | unconfirmed |  | durationOrBuffDebuff | unconfirmed |
| Slowbro | Amnesia | moveChoice | 6 |  | healing | HPを回復する。 | self | 4 | hpState | unconfirmed |
| Slowbro | Amnesia+ | movePlus | 6 | yes | slow | 移動速度を下げる。 | unconfirmed |  | durationOrBuffDebuff | unconfirmed |
| Slowbro | Amnesia+ | movePlus | 6 | yes | attackStatChange | 攻撃・特攻などを変化させる。 | unconfirmed |  | durationOrBuffDebuff | unconfirmed |
| Slowbro | Amnesia+ | movePlus | 6 | yes | defenseStatChange | 防御・特防を変化させる。 | unconfirmed |  | durationOrBuffDebuff | unconfirmed |
| Slowbro | Telekinesis | moveChoice | 6 |  | pull | 相手を引き寄せる。 | enemy |  |  | unconfirmed |
| Slowbro | Telekinesis | moveChoice | 6 |  | slow | 移動速度を下げる。 | enemy | 2.3 | durationOrBuffDebuff | unconfirmed |
| Slowbro | Telekinesis | moveChoice | 6 |  | healing | HPを回復する。 | enemy | 2.3 | hpState | unconfirmed |
| Slowbro | Telekinesis | moveChoice | 6 |  | reuseOrSecondActivation | 再使用・派生・2段目を持つ。 | enemy |  | actionOrderOrCooldown | unconfirmed |
| Slowbro | Slowbeam | uniteMove | 9 |  | slow | 移動速度を下げる。 | unconfirmed |  | durationOrBuffDebuff | unconfirmed |
| Slowbro | Slowbeam | uniteMove | 9 |  | unstoppable | 妨害無効になる。 | self |  | durationOrBuffDebuff | unconfirmed |
| Slowbro | Slowbeam | uniteMove | 9 |  | hindranceResistance | 妨害耐性を得る。 | self |  | durationOrBuffDebuff | unconfirmed |
| Slowbro | Slowbeam | uniteMove | 9 |  | shield | シールドを付与する。 | self |  | durationOrBuffDebuff | unconfirmed |
| Slowbro | Slowbeam | uniteMove | 9 |  | stackOrMark | スタック、マーク、ゲージを扱う。 | unconfirmed |  | targetOrSelfStack | unconfirmed |
| Slowbro | Slowbeam Unite Buff | uniteBuff | 9 |  | shield | シールドを付与する。 | self |  | durationOrBuffDebuff | unconfirmed |
| Slowbro | Slowbeam Unite Buff | uniteBuff | 9 |  | maxHpChange | 最大HPを変化させる。 | unconfirmed |  | hpState | unconfirmed |
| Snorlax | Gluttony | passive |  |  | movementSpeedUp | 移動速度を上げる。 | self |  | durationOrBuffDebuff | unconfirmed |
| Snorlax | Gluttony | passive |  |  | healing | HPを回復する。 | self |  | hpState | unconfirmed |
| Snorlax | Attack | normalAttack |  |  | slow | 移動速度を下げる。 | enemy |  | durationOrBuffDebuff | unconfirmed |
| Snorlax | Attack | normalAttack |  |  | boostedAttackCycle | 通常攻撃回数により強化攻撃になる。 | enemy | 1 | actionOrderOrCooldown | unconfirmed |
| Snorlax | Attack Boosted | boostedAttack |  |  | slow | 移動速度を下げる。 | enemy |  | durationOrBuffDebuff | unconfirmed |
| Snorlax | Attack Boosted | boostedAttack |  |  | boostedAttackCycle | 通常攻撃回数により強化攻撃になる。 | unconfirmed |  | actionOrderOrCooldown | unconfirmed |
| Snorlax | Tackle | initialMove |  |  | nextBoostedAttack | 次の通常攻撃または強化攻撃を準備する。 | unconfirmed |  | actionOrderOrCooldown | unconfirmed |
| Snorlax | Tackle | initialMove |  |  | boostedAttackCycle | 通常攻撃回数により強化攻撃になる。 | unconfirmed |  | actionOrderOrCooldown | unconfirmed |
| Snorlax | Heavy Slam | moveChoice | 5 |  | knockUp | 相手を打ち上げる。 | enemy | 1 |  | unconfirmed |
| Snorlax | Flail | moveChoice | 5 |  | damageOverTime | 継続ダメージを与える。 | unconfirmed | 3 | durationOrBuffDebuff | unconfirmed |
| Snorlax | Flail+ | movePlus | 5 | yes | damageDealtChange | 与ダメージを変化させる。 | unconfirmed |  | durationOrBuffDebuff | unconfirmed |
| Snorlax | Rest | initialMove |  |  | sleep | ねむりを付与する。 | unconfirmed | 3 | durationOrBuffDebuff | unconfirmed |
| Snorlax | Rest | initialMove |  |  | unstoppable | 妨害無効になる。 | self | 3 | durationOrBuffDebuff | unconfirmed |
| Snorlax | Rest | initialMove |  |  | wallOrTerrain | 壁・地形・草むらなどと相互作用する。 | enemy |  |  | unconfirmed |
| Snorlax | Block | moveChoice | 7 |  | stun | 行動不能・スタンを付与する。 | enemy | 0.45 | durationOrBuffDebuff | unconfirmed |
| Snorlax | Block | moveChoice | 7 |  | knockBack | 相手を押し出す。 | enemy | 0.45 |  | unconfirmed |
| Snorlax | Block | moveChoice | 7 |  | slow | 移動速度を下げる。 | unconfirmed | 4 | durationOrBuffDebuff | unconfirmed |
| Snorlax | Block | moveChoice | 7 |  | unstoppable | 妨害無効になる。 | self | 4 | durationOrBuffDebuff | unconfirmed |
| Snorlax | Block | moveChoice | 7 |  | shield | シールドを付与する。 | self | 3.5 | durationOrBuffDebuff | unconfirmed |
| Snorlax | Block | moveChoice | 7 |  | wallOrTerrain | 壁・地形・草むらなどと相互作用する。 | area | 4 |  | unconfirmed |
| Snorlax | Block+ | movePlus | 7 | yes | knockBack | 相手を押し出す。 | enemy | 0.5 |  | unconfirmed |
| Snorlax | Block+ | movePlus | 7 | yes | defenseStatChange | 防御・特防を変化させる。 | enemy | 0.5 | durationOrBuffDebuff | unconfirmed |
| Snorlax | Block+ | movePlus | 7 | yes | damageOverTime | 継続ダメージを与える。 | enemy | 0.5 | durationOrBuffDebuff | unconfirmed |
| Snorlax | Block+ | movePlus | 7 | yes | wallOrTerrain | 壁・地形・草むらなどと相互作用する。 | area |  |  | unconfirmed |
| Snorlax | Yawn | moveChoice | 7 |  | sleep | ねむりを付与する。 | enemy | 2.5 | durationOrBuffDebuff | unconfirmed |
| Snorlax | Yawn+ | movePlus | 7 | yes | sleep | ねむりを付与する。 | enemy | 3 | durationOrBuffDebuff | unconfirmed |
| Snorlax | Power Nap | uniteMove | 9 |  | sleep | ねむりを付与する。 | enemy | 1 | durationOrBuffDebuff | unconfirmed |
| Snorlax | Power Nap | uniteMove | 9 |  | knockUp | 相手を打ち上げる。 | enemy | 1 |  | unconfirmed |
| Snorlax | Power Nap | uniteMove | 9 |  | unstoppable | 妨害無効になる。 | enemy | 1 | durationOrBuffDebuff | unconfirmed |
| Snorlax | Power Nap | uniteMove | 9 |  | hindranceResistance | 妨害耐性を得る。 | ally |  | durationOrBuffDebuff | unconfirmed |
| Snorlax | Power Nap | uniteMove | 9 |  | healing | HPを回復する。 | ally |  | hpState | unconfirmed |
| Snorlax | Power Nap | uniteMove | 9 |  | damageOverTime | 継続ダメージを与える。 | enemy |  | durationOrBuffDebuff | unconfirmed |
| Snorlax | Power Nap | uniteMove | 9 |  | formChange | フォーム・モード・構えを変化させる。 | enemy | 1 | formOrMode | unconfirmed |
| Snorlax | Power Nap | uniteMove | 9 |  | reuseOrSecondActivation | 再使用・派生・2段目を持つ。 | enemy | 1 | actionOrderOrCooldown | unconfirmed |
| Snorlax | Power Nap Unite Buff | uniteBuff | 9 |  | shield | シールドを付与する。 | self |  | durationOrBuffDebuff | unconfirmed |
| Snorlax | Power Nap Unite Buff | uniteBuff | 9 |  | maxHpChange | 最大HPを変化させる。 | unconfirmed |  | hpState | unconfirmed |
| Suicune | Pressure | passive |  |  | freeze | こおり・凍結を付与する。 | enemy |  | durationOrBuffDebuff | unconfirmed |
| Suicune | Pressure | passive |  |  | damageReduction | 受けるダメージを軽減する。 | enemy |  | durationOrBuffDebuff | unconfirmed |
| Suicune | Pressure | passive |  |  | shield | シールドを付与する。 | self | 5 | durationOrBuffDebuff | unconfirmed |
| Suicune | Pressure | passive |  |  | stackOrMark | スタック、マーク、ゲージを扱う。 | unconfirmed | 5 | targetOrSelfStack | unconfirmed |
| Suicune | Attack | normalAttack |  |  | freeze | こおり・凍結を付与する。 | enemy | 0.25 | durationOrBuffDebuff | unconfirmed |
| Suicune | Attack | normalAttack |  |  | stackOrMark | スタック、マーク、ゲージを扱う。 | unconfirmed | 5 | targetOrSelfStack | unconfirmed |
| Suicune | Water Pulse | initialMove |  |  | stackOrMark | スタック、マーク、ゲージを扱う。 | enemy | 3 | targetOrSelfStack | unconfirmed |
| Suicune | Whirlpool | moveChoice | 5 |  | pull | 相手を引き寄せる。 | enemy | 1 |  | unconfirmed |
| Suicune | Whirlpool | moveChoice | 5 |  | slow | 移動速度を下げる。 | enemy | 1 | durationOrBuffDebuff | unconfirmed |
| Suicune | Whirlpool | moveChoice | 5 |  | stackOrMark | スタック、マーク、ゲージを扱う。 | enemy | 3 | targetOrSelfStack | unconfirmed |
| Suicune | Whirlpool | moveChoice | 5 |  | reuseOrSecondActivation | 再使用・派生・2段目を持つ。 | unconfirmed | 4 | actionOrderOrCooldown | unconfirmed |
| Suicune | Surf | moveChoice | 5 |  | stackOrMark | スタック、マーク、ゲージを扱う。 | enemy | 3 | targetOrSelfStack | unconfirmed |
| Suicune | Avalanche | initialMove |  |  | freeze | こおり・凍結を付与する。 | enemy | 1 | durationOrBuffDebuff | unconfirmed |
| Suicune | Avalanche | initialMove |  |  | delayedDamage | 遅延または時間差でダメージを与える。 | unconfirmed | 1 | durationOrBuffDebuff | unconfirmed |
| Suicune | Ice Beam | moveChoice | 7 |  | freeze | こおり・凍結を付与する。 | enemy | 1 | durationOrBuffDebuff | unconfirmed |
| Suicune | Ice Beam | moveChoice | 7 |  | delayedDamage | 遅延または時間差でダメージを与える。 | unconfirmed | 1 | durationOrBuffDebuff | unconfirmed |
| Suicune | Icy Wind | moveChoice | 7 |  | freeze | こおり・凍結を付与する。 | enemy | 1 | durationOrBuffDebuff | unconfirmed |
| Suicune | Icy Wind | moveChoice | 7 |  | delayedDamage | 遅延または時間差でダメージを与える。 | unconfirmed | 1 | durationOrBuffDebuff | unconfirmed |
| Suicune | Icy Wind | moveChoice | 7 |  | formChange | フォーム・モード・構えを変化させる。 | enemy | 3 | formOrMode | unconfirmed |
| Suicune | Endless Ice Spikes | uniteMove | 9 |  | freeze | こおり・凍結を付与する。 | unconfirmed |  | durationOrBuffDebuff | unconfirmed |
| Suicune | Endless Ice Spikes | uniteMove | 9 |  | stun | 行動不能・スタンを付与する。 | unconfirmed |  | durationOrBuffDebuff | unconfirmed |
| Suicune | Endless Ice Spikes | uniteMove | 9 |  | delayedDamage | 遅延または時間差でダメージを与える。 | enemy | 2 | durationOrBuffDebuff | unconfirmed |
| Suicune | Endless Ice Spikes | uniteMove | 9 |  | stackOrMark | スタック、マーク、ゲージを扱う。 | unconfirmed |  | targetOrSelfStack | unconfirmed |
| Suicune | Endless Ice Spikes | uniteMove | 9 |  | cleanse | 状態異常や低下効果を解除する。 | self |  | durationOrBuffDebuff | unconfirmed |
| Suicune | Endless Ice Spikes Unite Buff | uniteBuff | 9 |  | cooldownReduction | 待ち時間を短縮する。 | unconfirmed |  | actionOrderOrCooldown | unconfirmed |
| Suicune | Endless Ice Spikes Unite Buff | uniteBuff | 9 |  | shield | シールドを付与する。 | self |  | durationOrBuffDebuff | unconfirmed |
| Suicune | Endless Ice Spikes Unite Buff | uniteBuff | 9 |  | maxHpChange | 最大HPを変化させる。 | unconfirmed |  | hpState | unconfirmed |
| Sylveon | Adaptability | passive |  |  | attackStatChange | 攻撃・特攻などを変化させる。 | unconfirmed | 1.5 | durationOrBuffDebuff | unconfirmed |
| Sylveon | Adaptability | passive |  |  | stackOrMark | スタック、マーク、ゲージを扱う。 | unconfirmed | 1.5 | targetOrSelfStack | unconfirmed |
| Sylveon | Attack - Eevee | normalAttack |  |  | boostedAttackCycle | 通常攻撃回数により強化攻撃になる。 | unconfirmed |  | actionOrderOrCooldown | unconfirmed |
| Sylveon | Attack - Eevee Boosted | boostedAttack |  |  | boostedAttackCycle | 通常攻撃回数により強化攻撃になる。 | unconfirmed |  | actionOrderOrCooldown | unconfirmed |
| Sylveon | Mystical Fire | moveChoice | 4 |  | attackStatChange | 攻撃・特攻などを変化させる。 | enemy | 1 | durationOrBuffDebuff | unconfirmed |
| Sylveon | Mystical Fire | moveChoice | 4 |  | stackOrMark | スタック、マーク、ゲージを扱う。 | unconfirmed | 1 | targetOrSelfStack | unconfirmed |
| Sylveon | Mystical Fire | moveChoice | 4 |  | wildPokemonRule | 野生ポケモン限定の処理を持つ。 | enemy |  | targetType | unconfirmed |
| Sylveon | Hyper Voice | moveChoice | 4 |  | defenseStatChange | 防御・特防を変化させる。 | unconfirmed | 1.5 | durationOrBuffDebuff | unconfirmed |
| Sylveon | Hyper Voice | moveChoice | 4 |  | damageDealtChange | 与ダメージを変化させる。 | enemy |  | durationOrBuffDebuff | unconfirmed |
| Sylveon | Hyper Voice+ | movePlus | 4 | yes | slow | 移動速度を下げる。 | unconfirmed |  | durationOrBuffDebuff | unconfirmed |
| Sylveon | Draining Kiss | moveChoice | 6 |  | healing | HPを回復する。 | self |  | hpState | unconfirmed |
| Sylveon | Draining Kiss+ | movePlus | 6 | yes | healing | HPを回復する。 | self |  | hpState | unconfirmed |
| Sylveon | Calm Mind | moveChoice | 6 |  | movementSpeedUp | 移動速度を上げる。 | self |  | durationOrBuffDebuff | unconfirmed |
| Sylveon | Calm Mind | moveChoice | 6 |  | attackStatChange | 攻撃・特攻などを変化させる。 | unconfirmed | 3 | durationOrBuffDebuff | unconfirmed |
| Sylveon | Calm Mind | moveChoice | 6 |  | defenseStatChange | 防御・特防を変化させる。 | unconfirmed |  | durationOrBuffDebuff | unconfirmed |
| Sylveon | Calm Mind+ | movePlus | 6 | yes | shield | シールドを付与する。 | self | 3 | durationOrBuffDebuff | unconfirmed |
| Sylveon | Calm Mind+ | movePlus | 6 | yes | formChange | フォーム・モード・構えを変化させる。 | self | 3 | formOrMode | unconfirmed |
| Sylveon | Fairy Frolic | uniteMove | 8 |  | invincible | 無敵になる。 | self |  | durationOrBuffDebuff | unconfirmed |
| Sylveon | Fairy Frolic | uniteMove | 8 |  | damageDealtChange | 与ダメージを変化させる。 | enemy |  | durationOrBuffDebuff | unconfirmed |
| Sylveon | Fairy Frolic | uniteMove | 8 |  | healing | HPを回復する。 | enemy |  | hpState | unconfirmed |
| Sylveon | Fairy Frolic | uniteMove | 8 |  | shield | シールドを付与する。 | self |  | durationOrBuffDebuff | unconfirmed |
| Sylveon | Fairy Frolic | uniteMove | 8 |  | wildPokemonRule | 野生ポケモン限定の処理を持つ。 | unconfirmed |  | targetType | unconfirmed |
| Sylveon | Fairy Frolic Unite Buff | uniteBuff | 8 |  | cooldownReduction | 待ち時間を短縮する。 | unconfirmed |  | actionOrderOrCooldown | unconfirmed |
| Sylveon | Fairy Frolic Unite Buff | uniteBuff | 8 |  | shield | シールドを付与する。 | self |  | durationOrBuffDebuff | unconfirmed |
| Sylveon | Fairy Frolic Unite Buff | uniteBuff | 8 |  | maxHpChange | 最大HPを変化させる。 | unconfirmed |  | hpState | unconfirmed |
| Talonflame | Gale Wings | passive |  |  | movementSpeedUp | 移動速度を上げる。 | self |  | durationOrBuffDebuff | unconfirmed |
| Talonflame | Attack | normalAttack |  |  | nextBoostedAttack | 次の通常攻撃または強化攻撃を準備する。 | unconfirmed |  | actionOrderOrCooldown | unconfirmed |
| Talonflame | Attack | normalAttack |  |  | boostedAttackCycle | 通常攻撃回数により強化攻撃になる。 | enemy |  | actionOrderOrCooldown | unconfirmed |
| Talonflame | Attack Boosted | boostedAttack |  |  | nextBoostedAttack | 次の通常攻撃または強化攻撃を準備する。 | unconfirmed |  | actionOrderOrCooldown | unconfirmed |
| Talonflame | Attack Boosted | boostedAttack |  |  | boostedAttackCycle | 通常攻撃回数により強化攻撃になる。 | enemy |  | actionOrderOrCooldown | unconfirmed |
| Talonflame | Fly | moveChoice | 7 |  | untargetableOrStealth | 対象指定されない、またはステルス状態になる。 | enemy | 3 | durationOrBuffDebuff | unconfirmed |
| Talonflame | Fly | moveChoice | 7 |  | cooldownReduction | 待ち時間を短縮する。 | enemy |  | actionOrderOrCooldown | unconfirmed |
| Talonflame | Fly | moveChoice | 7 |  | nextBoostedAttack | 次の通常攻撃または強化攻撃を準備する。 | unconfirmed |  | actionOrderOrCooldown | unconfirmed |
| Talonflame | Fly | moveChoice | 7 |  | boostedAttackCycle | 通常攻撃回数により強化攻撃になる。 | unconfirmed |  | actionOrderOrCooldown | unconfirmed |
| Talonflame | Fly | moveChoice | 7 |  | reuseOrSecondActivation | 再使用・派生・2段目を持つ。 | enemy | 3 | actionOrderOrCooldown | unconfirmed |
| Talonflame | Fly+ | movePlus | 7 | yes | knockUp | 相手を打ち上げる。 | enemy | 0.4 |  | unconfirmed |
| Talonflame | Brave Bird | moveChoice | 7 |  | unstoppable | 妨害無効になる。 | enemy |  | durationOrBuffDebuff | unconfirmed |
| Talonflame | Brave Bird | moveChoice | 7 |  | stackOrMark | スタック、マーク、ゲージを扱う。 | enemy | 4 | targetOrSelfStack | unconfirmed |
| Talonflame | Brave Bird | moveChoice | 7 |  | hpReferenceDamage | 現在HP・最大HP・減少HPなどを参照する。 | enemy |  | hpState | unconfirmed |
| Talonflame | Brave Bird | moveChoice | 7 |  | formChange | フォーム・モード・構えを変化させる。 | self |  | formOrMode | unconfirmed |
| Talonflame | Brave Bird+ | movePlus | 7 | yes | damageReduction | 受けるダメージを軽減する。 | enemy | 5 | durationOrBuffDebuff | unconfirmed |
| Talonflame | Flame Sweep | uniteMove | 9 |  | unstoppable | 妨害無効になる。 | enemy |  | durationOrBuffDebuff | unconfirmed |
| Talonflame | Flame Sweep | uniteMove | 9 |  | damageReduction | 受けるダメージを軽減する。 | enemy |  | durationOrBuffDebuff | unconfirmed |
| Talonflame | Flame Sweep | uniteMove | 9 |  | formChange | フォーム・モード・構えを変化させる。 | enemy |  | formOrMode | unconfirmed |
| Talonflame | Flame Sweep | uniteMove | 9 |  | wallOrTerrain | 壁・地形・草むらなどと相互作用する。 | area |  |  | unconfirmed |
| Talonflame | Flame Sweep Unite Buff | uniteBuff | 9 |  | shield | シールドを付与する。 | self |  | durationOrBuffDebuff | unconfirmed |
| Talonflame | Flame Sweep Unite Buff | uniteBuff | 9 |  | maxHpChange | 最大HPを変化させる。 | unconfirmed |  | hpState | unconfirmed |
| Tinkaton | Mold Breaker | passive |  |  | damageDealtChange | 与ダメージを変化させる。 | enemy |  | durationOrBuffDebuff | unconfirmed |
| Tinkaton | Mold Breaker | passive |  |  | shield | シールドを付与する。 | enemy |  | durationOrBuffDebuff | unconfirmed |
| Tinkaton | Attack | normalAttack |  |  | nextBoostedAttack | 次の通常攻撃または強化攻撃を準備する。 | unconfirmed |  | actionOrderOrCooldown | unconfirmed |
| Tinkaton | Attack | normalAttack |  |  | boostedAttackCycle | 通常攻撃回数により強化攻撃になる。 | unconfirmed | 12 | actionOrderOrCooldown | unconfirmed |
| Tinkaton | Attack | normalAttack |  |  | hpReferenceDamage | 現在HP・最大HP・減少HPなどを参照する。 | unconfirmed | 12 | hpState | unconfirmed |
| Tinkaton | Attack Boosted | boostedAttack |  |  | hpReferenceDamage | 現在HP・最大HP・減少HPなどを参照する。 | unconfirmed |  | hpState | unconfirmed |
| Tinkaton | Rock Smash | initialMove |  |  | stun | 行動不能・スタンを付与する。 | enemy | 0.15 | durationOrBuffDebuff | unconfirmed |
| Tinkaton | Gigaton Hammer | moveChoice | 7 |  | knockUp | 相手を打ち上げる。 | enemy | 1.95 |  | unconfirmed |
| Tinkaton | Gigaton Hammer | moveChoice | 7 |  | slow | 移動速度を下げる。 | enemy | 1.95 | durationOrBuffDebuff | unconfirmed |
| Tinkaton | Gigaton Hammer | moveChoice | 7 |  | unstoppable | 妨害無効になる。 | enemy | 1.95 | durationOrBuffDebuff | unconfirmed |
| Tinkaton | Gigaton Hammer | moveChoice | 7 |  | delayedDamage | 遅延または時間差でダメージを与える。 | enemy | 1.95 | durationOrBuffDebuff | unconfirmed |
| Tinkaton | Smack Down | moveChoice | 7 |  | slow | 移動速度を下げる。 | enemy | 2.4 | durationOrBuffDebuff | unconfirmed |
| Tinkaton | Smack Down | moveChoice | 7 |  | damageOverTime | 継続ダメージを与える。 | enemy | 2.4 | durationOrBuffDebuff | unconfirmed |
| Tinkaton | Ice Hammer | moveChoice | 5 |  | attackStatChange | 攻撃・特攻などを変化させる。 | enemy | 2.5 | durationOrBuffDebuff | unconfirmed |
| Tinkaton | Ice Hammer | moveChoice | 5 |  | damageOverTime | 継続ダメージを与える。 | enemy | 2.5 | durationOrBuffDebuff | unconfirmed |
| Tinkaton | Ice Hammer+ | movePlus | 5 | yes | attackStatChange | 攻撃・特攻などを変化させる。 | enemy |  | durationOrBuffDebuff | unconfirmed |
| Tinkaton | Thief | moveChoice | 5 |  | defenseStatChange | 防御・特防を変化させる。 | enemy | 5 | durationOrBuffDebuff | unconfirmed |
| Tinkaton | Thief | moveChoice | 5 |  | delayedDamage | 遅延または時間差でダメージを与える。 | enemy | 2 | durationOrBuffDebuff | unconfirmed |
| Tinkaton | Thief | moveChoice | 5 |  | nextBoostedAttack | 次の通常攻撃または強化攻撃を準備する。 | enemy | 2 | actionOrderOrCooldown | unconfirmed |
| Tinkaton | Thief+ | movePlus | 5 | yes | defenseStatChange | 防御・特防を変化させる。 | enemy |  | durationOrBuffDebuff | unconfirmed |
| Tinkaton | Kiss Bliss Kaboom | uniteMove | 9 |  | stun | 行動不能・スタンを付与する。 | ally | 1.2 | durationOrBuffDebuff | unconfirmed |
| Tinkaton | Kiss Bliss Kaboom Unite Buff | uniteBuff | 9 |  | cooldownReduction | 待ち時間を短縮する。 | unconfirmed |  | actionOrderOrCooldown | unconfirmed |
| Tinkaton | Kiss Bliss Kaboom Unite Buff | uniteBuff | 9 |  | shield | シールドを付与する。 | self |  | durationOrBuffDebuff | unconfirmed |
| Tinkaton | Kiss Bliss Kaboom Unite Buff | uniteBuff | 9 |  | maxHpChange | 最大HPを変化させる。 | unconfirmed |  | hpState | unconfirmed |
| Trevenant | Natural Cure | passive |  |  | cooldownReduction | 待ち時間を短縮する。 | unconfirmed | 1 | actionOrderOrCooldown | unconfirmed |
| Trevenant | Natural Cure | passive |  |  | damageOverTime | 継続ダメージを与える。 | unconfirmed | 0.5 | durationOrBuffDebuff | unconfirmed |
| Trevenant | Attack | normalAttack |  |  | healing | HPを回復する。 | self |  | hpState | unconfirmed |
| Trevenant | Attack | normalAttack |  |  | boostedAttackCycle | 通常攻撃回数により強化攻撃になる。 | enemy |  | actionOrderOrCooldown | unconfirmed |
| Trevenant | Will-o-Wisp | initialMove |  |  | burn | やけどを付与する。 | enemy | 3 | durationOrBuffDebuff | unconfirmed |
| Trevenant | Will-o-Wisp | initialMove |  |  | attackStatChange | 攻撃・特攻などを変化させる。 | enemy | 3 | durationOrBuffDebuff | unconfirmed |
| Trevenant | Wood Hammer | moveChoice | 5 |  | stun | 行動不能・スタンを付与する。 | enemy | 0.5 | durationOrBuffDebuff | unconfirmed |
| Trevenant | Wood Hammer | moveChoice | 5 |  | pull | 相手を引き寄せる。 | enemy | 0.5 |  | unconfirmed |
| Trevenant | Curse | moveChoice | 5 |  | stun | 行動不能・スタンを付与する。 | unconfirmed | 0.6 | durationOrBuffDebuff | unconfirmed |
| Trevenant | Curse | moveChoice | 5 |  | slow | 移動速度を下げる。 | unconfirmed |  | durationOrBuffDebuff | unconfirmed |
| Trevenant | Curse | moveChoice | 5 |  | cooldownReduction | 待ち時間を短縮する。 | unconfirmed | 0.6 | actionOrderOrCooldown | unconfirmed |
| Trevenant | Curse | moveChoice | 5 |  | damageOverTime | 継続ダメージを与える。 | enemy | 6 | durationOrBuffDebuff | unconfirmed |
| Trevenant | Curse | moveChoice | 5 |  | stackOrMark | スタック、マーク、ゲージを扱う。 | unconfirmed | 0.6 | targetOrSelfStack | unconfirmed |
| Trevenant | Branch Poke | initialMove |  |  | healing | HPを回復する。 | enemy | 2 | hpState | unconfirmed |
| Trevenant | Horn Leech | moveChoice | 7 |  | knockUp | 相手を打ち上げる。 | enemy | 0.75 |  | unconfirmed |
| Trevenant | Horn Leech | moveChoice | 7 |  | knockBack | 相手を押し出す。 | enemy | 0.75 |  | unconfirmed |
| Trevenant | Horn Leech | moveChoice | 7 |  | unstoppable | 妨害無効になる。 | enemy |  | durationOrBuffDebuff | unconfirmed |
| Trevenant | Horn Leech | moveChoice | 7 |  | hpReferenceDamage | 現在HP・最大HP・減少HPなどを参照する。 | enemy |  | hpState | unconfirmed |
| Trevenant | Horn Leech+ | movePlus | 7 | yes | movementSpeedUp | 移動速度を上げる。 | self | 1.5 | durationOrBuffDebuff | unconfirmed |
| Trevenant | Pain Split | moveChoice | 7 |  | damageDealtChange | 与ダメージを変化させる。 | unconfirmed |  | durationOrBuffDebuff | unconfirmed |
| Trevenant | Pain Split | moveChoice | 7 |  | healing | HPを回復する。 | self |  | hpState | unconfirmed |
| Trevenant | Pain Split | moveChoice | 7 |  | damageOverTime | 継続ダメージを与える。 | enemy | 0.5 | durationOrBuffDebuff | unconfirmed |
| Trevenant | Pain Split | moveChoice | 7 |  | hpThreshold | HP割合条件で発動する。 | enemy | 0.5 | hpState | unconfirmed |
| Trevenant | Pain Split | moveChoice | 7 |  | hpReferenceDamage | 現在HP・最大HP・減少HPなどを参照する。 | enemy | 0.5 | hpState | unconfirmed |
| Trevenant | Phantom Forest | uniteMove | 9 |  | knockUp | 相手を打ち上げる。 | enemy | 2 |  | unconfirmed |
| Trevenant | Phantom Forest | uniteMove | 9 |  | unstoppable | 妨害無効になる。 | enemy | 2 | durationOrBuffDebuff | unconfirmed |
| Trevenant | Phantom Forest | uniteMove | 9 |  | shield | シールドを付与する。 | enemy | 6 | durationOrBuffDebuff | unconfirmed |
| Trevenant | Phantom Forest | uniteMove | 9 |  | stackOrMark | スタック、マーク、ゲージを扱う。 | enemy | 2 | targetOrSelfStack | unconfirmed |
| Trevenant | Phantom Forest Unite Buff | uniteBuff | 9 |  | shield | シールドを付与する。 | self |  | durationOrBuffDebuff | unconfirmed |
| Trevenant | Phantom Forest Unite Buff | uniteBuff | 9 |  | maxHpChange | 最大HPを変化させる。 | unconfirmed |  | hpState | unconfirmed |
| Tsareena | Attack | normalAttack |  |  | boostedAttackCycle | 通常攻撃回数により強化攻撃になる。 | enemy | 1 | actionOrderOrCooldown | unconfirmed |
| Tsareena | Attack Boosted | boostedAttack |  |  | boostedAttackCycle | 通常攻撃回数により強化攻撃になる。 | enemy | 1 | actionOrderOrCooldown | unconfirmed |
| Tsareena | Triple Axel | moveChoice | 5 |  | attackSpeedUp | 通常攻撃速度を上げる。 | self |  | durationOrBuffDebuff | unconfirmed |
| Tsareena | Triple Axel | moveChoice | 5 |  | damageDealtChange | 与ダメージを変化させる。 | unconfirmed |  | durationOrBuffDebuff | unconfirmed |
| Tsareena | Triple Axel | moveChoice | 5 |  | healing | HPを回復する。 | enemy |  | hpState | unconfirmed |
| Tsareena | Stomp | moveChoice | 5 |  | stun | 行動不能・スタンを付与する。 | enemy | 0.2 | durationOrBuffDebuff | unconfirmed |
| Tsareena | Stomp | moveChoice | 5 |  | healing | HPを回復する。 | enemy |  | hpState | unconfirmed |
| Tsareena | Trop Kick | moveChoice | 6 |  | shield | シールドを付与する。 | self | 3 | durationOrBuffDebuff | unconfirmed |
| Tsareena | Trop Kick | moveChoice | 6 |  | formChange | フォーム・モード・構えを変化させる。 | enemy |  | formOrMode | unconfirmed |
| Tsareena | Grassy Glide | moveChoice | 6 |  | slow | 移動速度を下げる。 | enemy |  | durationOrBuffDebuff | unconfirmed |
| Tsareena | Grassy Glide | moveChoice | 6 |  | shield | シールドを付与する。 | self | 3 | durationOrBuffDebuff | unconfirmed |
| Tsareena | Queen Ascendant | uniteMove | 9 |  | healing | HPを回復する。 | self |  | hpState | unconfirmed |
| Tsareena | Queen Ascendant Unite Buff | uniteBuff | 9 |  | cooldownReduction | 待ち時間を短縮する。 | unconfirmed |  | actionOrderOrCooldown | unconfirmed |
| Tsareena | Queen Ascendant Unite Buff | uniteBuff | 9 |  | shield | シールドを付与する。 | self |  | durationOrBuffDebuff | unconfirmed |
| Tsareena | Queen Ascendant Unite Buff | uniteBuff | 9 |  | maxHpChange | 最大HPを変化させる。 | unconfirmed |  | hpState | unconfirmed |
| Typhlosion | Blaze | passive |  |  | damageOverTime | 継続ダメージを与える。 | unconfirmed | 5 | durationOrBuffDebuff | unconfirmed |
| Typhlosion | Attack | normalAttack |  |  | boostedAttackCycle | 通常攻撃回数により強化攻撃になる。 | unconfirmed |  | actionOrderOrCooldown | unconfirmed |
| Typhlosion | Ember | initialMove |  |  | burn | やけどを付与する。 | enemy | 2 | durationOrBuffDebuff | unconfirmed |
| Typhlosion | Tackle | initialMove |  |  | stun | 行動不能・スタンを付与する。 | enemy | 0.5 | durationOrBuffDebuff | unconfirmed |
| Typhlosion | Tackle | initialMove |  |  | slow | 移動速度を下げる。 | enemy | 1 | durationOrBuffDebuff | unconfirmed |
| Typhlosion | Tackle | initialMove |  |  | shield | シールドを付与する。 | enemy | 1 | durationOrBuffDebuff | unconfirmed |
| Typhlosion | Flame Wheel | moveChoice | 5 |  | stun | 行動不能・スタンを付与する。 | enemy | 0.45 | durationOrBuffDebuff | unconfirmed |
| Typhlosion | Flame Wheel | moveChoice | 5 |  | knockUp | 相手を打ち上げる。 | enemy | 0.5 |  | unconfirmed |
| Typhlosion | Flame Wheel | moveChoice | 5 |  | slow | 移動速度を下げる。 | enemy | 1 | durationOrBuffDebuff | unconfirmed |
| Typhlosion | Flame Wheel | moveChoice | 5 |  | unstoppable | 妨害無効になる。 | enemy | 0.45 | durationOrBuffDebuff | unconfirmed |
| Typhlosion | Flame Wheel | moveChoice | 5 |  | shield | シールドを付与する。 | enemy | 0.45 | durationOrBuffDebuff | unconfirmed |
| Typhlosion | Flame Wheel | moveChoice | 5 |  | wallOrTerrain | 壁・地形・草むらなどと相互作用する。 | enemy | 1 |  | unconfirmed |
| Typhlosion | Flame Wheel+ | movePlus | 5 | yes | shield | シールドを付与する。 | self |  | durationOrBuffDebuff | unconfirmed |
| Typhlosion | Explosive Heat Haze | uniteMove | 9 |  | unstoppable | 妨害無効になる。 | enemy |  | durationOrBuffDebuff | unconfirmed |
| Typhlosion | Explosive Heat Haze | uniteMove | 9 |  | damageOverTime | 継続ダメージを与える。 | unconfirmed | 4.5 | durationOrBuffDebuff | unconfirmed |
| Typhlosion | Explosive Heat Haze Unite Buff | uniteBuff | 9 |  | cooldownReduction | 待ち時間を短縮する。 | unconfirmed |  | actionOrderOrCooldown | unconfirmed |
| Typhlosion | Explosive Heat Haze Unite Buff | uniteBuff | 9 |  | shield | シールドを付与する。 | self |  | durationOrBuffDebuff | unconfirmed |
| Typhlosion | Explosive Heat Haze Unite Buff | uniteBuff | 9 |  | maxHpChange | 最大HPを変化させる。 | unconfirmed |  | hpState | unconfirmed |
| Tyranitar | Guts | passive |  |  | attackStatChange | 攻撃・特攻などを変化させる。 | unconfirmed | 3 | durationOrBuffDebuff | unconfirmed |
| Tyranitar | Attack | normalAttack |  |  | boostedAttackCycle | 通常攻撃回数により強化攻撃になる。 | unconfirmed |  | actionOrderOrCooldown | unconfirmed |
| Tyranitar | Attack | normalAttack |  |  | lifestealOrDamageHeal | 与ダメージに応じて回復する。 | unconfirmed |  | hpState | unconfirmed |
| Tyranitar | Attack Boosted | boostedAttack |  |  | boostedAttackCycle | 通常攻撃回数により強化攻撃になる。 | unconfirmed |  | actionOrderOrCooldown | unconfirmed |
| Tyranitar | Bite | initialMove |  |  | immobilize | 移動不能を付与する。 | enemy | 0.6 | durationOrBuffDebuff | unconfirmed |
| Tyranitar | Dark Pulse | moveChoice | 5 |  | immobilize | 移動不能を付与する。 | enemy | 0.6 | durationOrBuffDebuff | unconfirmed |
| Tyranitar | Dark Pulse | moveChoice | 5 |  | hpReferenceDamage | 現在HP・最大HP・減少HPなどを参照する。 | enemy | 0.6 | hpState | unconfirmed |
| Tyranitar | Ancient Power | moveChoice | 9 |  | stun | 行動不能・スタンを付与する。 | enemy | 1 | durationOrBuffDebuff | unconfirmed |
| Tyranitar | Ancient Power | moveChoice | 9 |  | hindranceResistance | 妨害耐性を得る。 | self | 4 | durationOrBuffDebuff | unconfirmed |
| Tyranitar | Ancient Power | moveChoice | 9 |  | movementSpeedUp | 移動速度を上げる。 | self | 4 | durationOrBuffDebuff | unconfirmed |
| Tyranitar | Ancient Power | moveChoice | 9 |  | damageDealtChange | 与ダメージを変化させる。 | enemy | 8 | durationOrBuffDebuff | unconfirmed |
| Tyranitar | Ancient Power | moveChoice | 9 |  | shield | シールドを付与する。 | self | 4 | durationOrBuffDebuff | unconfirmed |
| Tyranitar | Ancient Power | moveChoice | 9 |  | stackOrMark | スタック、マーク、ゲージを扱う。 | unconfirmed | 4 | targetOrSelfStack | unconfirmed |
| Tyranitar | Ancient Power+ | movePlus | 9 | yes | shield | シールドを付与する。 | self |  | durationOrBuffDebuff | unconfirmed |
| Tyranitar | Sand Tomb | moveChoice | 9 |  | stun | 行動不能・スタンを付与する。 | enemy | 1.5 | durationOrBuffDebuff | unconfirmed |
| Tyranitar | Sand Tomb | moveChoice | 9 |  | pull | 相手を引き寄せる。 | enemy |  |  | unconfirmed |
| Tyranitar | Sand Tomb | moveChoice | 9 |  | damageReduction | 受けるダメージを軽減する。 | enemy |  | durationOrBuffDebuff | unconfirmed |
| Tyranitar | Sand Tomb | moveChoice | 9 |  | shield | シールドを付与する。 | enemy |  | durationOrBuffDebuff | unconfirmed |
| Tyranitar | Sand Tomb | moveChoice | 9 |  | damageOverTime | 継続ダメージを与える。 | enemy | 0.5 | durationOrBuffDebuff | unconfirmed |
| Tyranitar | Sand Tomb | moveChoice | 9 |  | reuseOrSecondActivation | 再使用・派生・2段目を持つ。 | enemy |  | actionOrderOrCooldown | unconfirmed |
| Tyranitar | Tyrannical Rampage | uniteMove | 9 |  | unstoppable | 妨害無効になる。 | self | 10 | durationOrBuffDebuff | unconfirmed |
| Tyranitar | Tyrannical Rampage | uniteMove | 9 |  | damageReduction | 受けるダメージを軽減する。 | enemy |  | durationOrBuffDebuff | unconfirmed |
| Tyranitar | Tyrannical Rampage Unite Buff | uniteBuff | 9 |  | cooldownReduction | 待ち時間を短縮する。 | unconfirmed |  | actionOrderOrCooldown | unconfirmed |
| Tyranitar | Tyrannical Rampage Unite Buff | uniteBuff | 9 |  | shield | シールドを付与する。 | self |  | durationOrBuffDebuff | unconfirmed |
| Tyranitar | Tyrannical Rampage Unite Buff | uniteBuff | 9 |  | maxHpChange | 最大HPを変化させる。 | unconfirmed |  | hpState | unconfirmed |
| Umbreon | Anticipation | passive |  |  | knockUp | 相手を打ち上げる。 | unconfirmed |  |  | unconfirmed |
| Umbreon | Anticipation | passive |  |  | knockBack | 相手を押し出す。 | unconfirmed |  |  | unconfirmed |
| Umbreon | Attack | normalAttack |  |  | healing | HPを回復する。 | self |  | hpState | unconfirmed |
| Umbreon | Attack | normalAttack |  |  | boostedAttackCycle | 通常攻撃回数により強化攻撃になる。 | unconfirmed |  | actionOrderOrCooldown | unconfirmed |
| Umbreon | Attack | normalAttack |  |  | hpReferenceDamage | 現在HP・最大HP・減少HPなどを参照する。 | unconfirmed |  | hpState | unconfirmed |
| Umbreon | Attack Boosted | boostedAttack |  |  | hpReferenceDamage | 現在HP・最大HP・減少HPなどを参照する。 | unconfirmed |  | hpState | unconfirmed |
| Umbreon | Swift | initialMove |  |  | stackOrMark | スタック、マーク、ゲージを扱う。 | unconfirmed | 4 | targetOrSelfStack | unconfirmed |
| Umbreon | Swift | initialMove |  |  | nextBoostedAttack | 次の通常攻撃または強化攻撃を準備する。 | unconfirmed |  | actionOrderOrCooldown | unconfirmed |
| Umbreon | Swift | initialMove |  |  | boostedAttackCycle | 通常攻撃回数により強化攻撃になる。 | unconfirmed |  | actionOrderOrCooldown | unconfirmed |
| Umbreon | Mean Look | moveChoice | 4 |  | slow | 移動速度を下げる。 | enemy | 2 | durationOrBuffDebuff | unconfirmed |
| Umbreon | Mean Look | moveChoice | 4 |  | cleanse | 状態異常や低下効果を解除する。 | self |  | durationOrBuffDebuff | unconfirmed |
| Umbreon | Foul Play | moveChoice | 4 |  | slow | 移動速度を下げる。 | unconfirmed | 2.5 | durationOrBuffDebuff | unconfirmed |
| Umbreon | Foul Play | moveChoice | 4 |  | reuseOrSecondActivation | 再使用・派生・2段目を持つ。 | enemy | 6 | actionOrderOrCooldown | unconfirmed |
| Umbreon | Foul Play+ | movePlus | 4 | yes | boostedAttackCycle | 通常攻撃回数により強化攻撃になる。 | unconfirmed |  | actionOrderOrCooldown | unconfirmed |
| Umbreon | Fake Tears | initialMove |  |  | defenseStatChange | 防御・特防を変化させる。 | unconfirmed | 2 | durationOrBuffDebuff | unconfirmed |
| Umbreon | Fake Tears | initialMove |  |  | shield | シールドを付与する。 | self | 4 | durationOrBuffDebuff | unconfirmed |
| Umbreon | Wish | moveChoice | 6 |  | damageReduction | 受けるダメージを軽減する。 | unconfirmed | 2 | durationOrBuffDebuff | unconfirmed |
| Umbreon | Wish | moveChoice | 6 |  | healing | HPを回復する。 | self | 2 | hpState | unconfirmed |
| Umbreon | Wish+ | movePlus | 6 | yes | damageReduction | 受けるダメージを軽減する。 | unconfirmed |  | durationOrBuffDebuff | unconfirmed |
| Umbreon | Wish+ | movePlus | 6 | yes | healing | HPを回復する。 | self |  | hpState | unconfirmed |
| Umbreon | Snarl | moveChoice | 6 |  | stun | 行動不能・スタンを付与する。 | enemy | 0.7 | durationOrBuffDebuff | unconfirmed |
| Umbreon | Snarl | moveChoice | 6 |  | slow | 移動速度を下げる。 | unconfirmed |  | durationOrBuffDebuff | unconfirmed |
| Umbreon | Snarl | moveChoice | 6 |  | attackStatChange | 攻撃・特攻などを変化させる。 | enemy | 1.5 | durationOrBuffDebuff | unconfirmed |
| Umbreon | Snarl | moveChoice | 6 |  | shield | シールドを付与する。 | self | 2 | durationOrBuffDebuff | unconfirmed |
| Umbreon | Snarl | moveChoice | 6 |  | maxHpChange | 最大HPを変化させる。 | unconfirmed |  | hpState | unconfirmed |
| Umbreon | Snarl+ | movePlus | 6 | yes | stun | 行動不能・スタンを付与する。 | unconfirmed | 1 | durationOrBuffDebuff | unconfirmed |
| Umbreon | Moonlight Prance | uniteMove | 8 |  | stun | 行動不能・スタンを付与する。 | unconfirmed | 1 | durationOrBuffDebuff | unconfirmed |
| Umbreon | Moonlight Prance | uniteMove | 8 |  | slow | 移動速度を下げる。 | enemy | 5 | durationOrBuffDebuff | unconfirmed |
| Umbreon | Moonlight Prance | uniteMove | 8 |  | unstoppable | 妨害無効になる。 | enemy |  | durationOrBuffDebuff | unconfirmed |
| Umbreon | Moonlight Prance | uniteMove | 8 |  | shield | シールドを付与する。 | enemy |  | durationOrBuffDebuff | unconfirmed |
| Umbreon | Moonlight Prance Unite Buff | uniteBuff | 8 |  | shield | シールドを付与する。 | self |  | durationOrBuffDebuff | unconfirmed |
| Umbreon | Moonlight Prance Unite Buff | uniteBuff | 8 |  | maxHpChange | 最大HPを変化させる。 | unconfirmed |  | hpState | unconfirmed |
| Urshifu | Attack - Kubfu | normalAttack |  |  | boostedAttackCycle | 通常攻撃回数により強化攻撃になる。 | enemy |  | actionOrderOrCooldown | unconfirmed |
| Urshifu | Attack - Kubfu Boosted | boostedAttack |  |  | boostedAttackCycle | 通常攻撃回数により強化攻撃になる。 | enemy |  | actionOrderOrCooldown | unconfirmed |
| Urshifu | Rock Smash | initialMove |  |  | damageReduction | 受けるダメージを軽減する。 | unconfirmed | 2 | durationOrBuffDebuff | unconfirmed |
| Urshifu | Rock Smash | initialMove |  |  | delayedDamage | 遅延または時間差でダメージを与える。 | unconfirmed | 2 | durationOrBuffDebuff | unconfirmed |
| Urshifu | Wicked Blow | moveChoice | 5 |  | knockBack | 相手を押し出す。 | enemy |  |  | unconfirmed |
| Urshifu | Wicked Blow | moveChoice | 5 |  | slow | 移動速度を下げる。 | unconfirmed | 2.5 | durationOrBuffDebuff | unconfirmed |
| Urshifu | Wicked Blow | moveChoice | 5 |  | unstoppable | 妨害無効になる。 | self | 2.5 | durationOrBuffDebuff | unconfirmed |
| Urshifu | Wicked Blow | moveChoice | 5 |  | damageReduction | 受けるダメージを軽減する。 | unconfirmed | 2.5 | durationOrBuffDebuff | unconfirmed |
| Urshifu | Wicked Blow | moveChoice | 5 |  | delayedDamage | 遅延または時間差でダメージを与える。 | unconfirmed | 2.5 | durationOrBuffDebuff | unconfirmed |
| Urshifu | Wicked Blow | moveChoice | 5 |  | hpReferenceDamage | 現在HP・最大HP・減少HPなどを参照する。 | enemy |  | hpState | unconfirmed |
| Urshifu | Wicked Blow | moveChoice | 5 |  | wildPokemonRule | 野生ポケモン限定の処理を持つ。 | unconfirmed |  | targetType | unconfirmed |
| Urshifu | Wicked Blow+ | movePlus | 5 | yes | stun | 行動不能・スタンを付与する。 | enemy |  | durationOrBuffDebuff | unconfirmed |
| Urshifu | Wicked Blow+ | movePlus | 5 | yes | knockBack | 相手を押し出す。 | enemy |  |  | unconfirmed |
| Urshifu | Wicked Blow+ | movePlus | 5 | yes | damageReduction | 受けるダメージを軽減する。 | unconfirmed |  | durationOrBuffDebuff | unconfirmed |
| Urshifu | Surging Strikes | moveChoice | 5 |  | knockUp | 相手を打ち上げる。 | enemy |  |  | unconfirmed |
| Urshifu | Surging Strikes+ | movePlus | 5 | yes | damageReduction | 受けるダメージを軽減する。 | unconfirmed |  | durationOrBuffDebuff | unconfirmed |
| Urshifu | Throat Chop | moveChoice | 7 |  | stun | 行動不能・スタンを付与する。 | enemy | 0.7 | durationOrBuffDebuff | unconfirmed |
| Urshifu | Throat Chop | moveChoice | 7 |  | knockUp | 相手を打ち上げる。 | enemy |  |  | unconfirmed |
| Urshifu | Throat Chop | moveChoice | 7 |  | boostedAttackCycle | 通常攻撃回数により強化攻撃になる。 | unconfirmed |  | actionOrderOrCooldown | unconfirmed |
| Urshifu | Throat Chop | moveChoice | 7 |  | criticalGuaranteedOrDisabled | 急所確定または急所不可などを持つ。 | enemy |  |  | unconfirmed |
| Urshifu | Liquidation | moveChoice | 7 |  | defenseStatChange | 防御・特防を変化させる。 | enemy | 3 | durationOrBuffDebuff | unconfirmed |
| Urshifu | Liquidation | moveChoice | 7 |  | shield | シールドを付与する。 | enemy | 3 | durationOrBuffDebuff | unconfirmed |
| Urshifu | Ebon Fist | uniteMove | 9 |  | stun | 行動不能・スタンを付与する。 | enemy |  | durationOrBuffDebuff | unconfirmed |
| Urshifu | Ebon Fist | uniteMove | 9 |  | knockUp | 相手を打ち上げる。 | enemy |  |  | unconfirmed |
| Urshifu | Ebon Fist | uniteMove | 9 |  | knockBack | 相手を押し出す。 | enemy |  |  | unconfirmed |
| Urshifu | Ebon Fist | uniteMove | 9 |  | unstoppable | 妨害無効になる。 | self |  | durationOrBuffDebuff | unconfirmed |
| Urshifu | Ebon Fist | uniteMove | 9 |  | damageReduction | 受けるダメージを軽減する。 | enemy |  | durationOrBuffDebuff | unconfirmed |
| Urshifu | Ebon Fist Unite Buff | uniteBuff | 9 |  | cooldownReduction | 待ち時間を短縮する。 | unconfirmed |  | actionOrderOrCooldown | unconfirmed |
| Urshifu | Ebon Fist Unite Buff | uniteBuff | 9 |  | shield | シールドを付与する。 | self |  | durationOrBuffDebuff | unconfirmed |
| Urshifu | Ebon Fist Unite Buff | uniteBuff | 9 |  | maxHpChange | 最大HPを変化させる。 | unconfirmed |  | hpState | unconfirmed |
| Urshifu | Flowing Fists | uniteMove | 9 |  | unstoppable | 妨害無効になる。 | enemy | 10 | durationOrBuffDebuff | unconfirmed |
| Urshifu | Flowing Fists | uniteMove | 9 |  | damageReduction | 受けるダメージを軽減する。 | enemy |  | durationOrBuffDebuff | unconfirmed |
| Urshifu | Flowing Fists | uniteMove | 9 |  | reuseOrSecondActivation | 再使用・派生・2段目を持つ。 | enemy |  | actionOrderOrCooldown | unconfirmed |
| Urshifu | Flowing Fists Unite Buff | uniteBuff | 9 |  | cooldownReduction | 待ち時間を短縮する。 | unconfirmed |  | actionOrderOrCooldown | unconfirmed |
| Urshifu | Flowing Fists Unite Buff | uniteBuff | 9 |  | shield | シールドを付与する。 | self |  | durationOrBuffDebuff | unconfirmed |
| Urshifu | Flowing Fists Unite Buff | uniteBuff | 9 |  | maxHpChange | 最大HPを変化させる。 | unconfirmed |  | hpState | unconfirmed |
| Vaporeon | Attack | normalAttack |  |  | boostedAttackCycle | 通常攻撃回数により強化攻撃になる。 | unconfirmed |  | actionOrderOrCooldown | unconfirmed |
| Vaporeon | Attack Boosted | boostedAttack |  |  | boostedAttackCycle | 通常攻撃回数により強化攻撃になる。 | unconfirmed |  | actionOrderOrCooldown | unconfirmed |
| Vaporeon | Swift | initialMove |  |  | slow | 移動速度を下げる。 | unconfirmed |  | durationOrBuffDebuff | unconfirmed |
| Vaporeon | Hydro Pump | moveChoice | 4 |  | knockBack | 相手を押し出す。 | enemy | 0.1 |  | unconfirmed |
| Vaporeon | Hydro Pump | moveChoice | 4 |  | slow | 移動速度を下げる。 | unconfirmed |  | durationOrBuffDebuff | unconfirmed |
| Vaporeon | Muddy Water | moveChoice | 4 |  | knockUp | 相手を打ち上げる。 | enemy | 1 |  | unconfirmed |
| Vaporeon | Muddy Water | moveChoice | 4 |  | slow | 移動速度を下げる。 | enemy | 1 | durationOrBuffDebuff | unconfirmed |
| Vaporeon | Muddy Water+ | movePlus | 4 | yes | slow | 移動速度を下げる。 | unconfirmed | 1 | durationOrBuffDebuff | unconfirmed |
| Vaporeon | Tackle | initialMove |  |  | knockBack | 相手を押し出す。 | enemy | 0.25 |  | unconfirmed |
| Vaporeon | Tackle | initialMove |  |  | formChange | フォーム・モード・構えを変化させる。 | enemy |  | formOrMode | unconfirmed |
| Vaporeon | Aqua Ring | moveChoice | 6 |  | healing | HPを回復する。 | ally | 1.5 | hpState | unconfirmed |
| Vaporeon | Aqua Ring | moveChoice | 6 |  | damageOverTime | 継続ダメージを与える。 | ally | 1.5 | durationOrBuffDebuff | unconfirmed |
| Vaporeon | Flip Turn | moveChoice | 6 |  | movementSpeedUp | 移動速度を上げる。 | self | 3 | durationOrBuffDebuff | unconfirmed |
| Vaporeon | Flip Turn | moveChoice | 6 |  | damageReduction | 受けるダメージを軽減する。 | unconfirmed | 3 | durationOrBuffDebuff | unconfirmed |
| Vaporeon | Flip Turn | moveChoice | 6 |  | shield | シールドを付与する。 | enemy | 3 | durationOrBuffDebuff | unconfirmed |
| Vaporeon | Flip Turn | moveChoice | 6 |  | reuseOrSecondActivation | 再使用・派生・2段目を持つ。 | enemy | 3 | actionOrderOrCooldown | unconfirmed |
| Vaporeon | Flip Turn+ | movePlus | 6 | yes | damageReduction | 受けるダメージを軽減する。 | unconfirmed |  | durationOrBuffDebuff | unconfirmed |
| Vaporeon | Aquamarine Splash | uniteMove | 8 |  | knockUp | 相手を打ち上げる。 | enemy | 1 |  | unconfirmed |
| Vaporeon | Aquamarine Splash | uniteMove | 8 |  | pull | 相手を引き寄せる。 | enemy | 0.3 |  | unconfirmed |
| Vaporeon | Aquamarine Splash Unite Buff | uniteBuff | 8 |  | shield | シールドを付与する。 | self |  | durationOrBuffDebuff | unconfirmed |
| Vaporeon | Aquamarine Splash Unite Buff | uniteBuff | 8 |  | maxHpChange | 最大HPを変化させる。 | unconfirmed |  | hpState | unconfirmed |
| Venusaur | Overgrow | passive |  |  | damageDealtChange | 与ダメージを変化させる。 | unconfirmed |  | durationOrBuffDebuff | unconfirmed |
| Venusaur | Overgrow | passive |  |  | hpThreshold | HP割合条件で発動する。 | self |  | hpState | unconfirmed |
| Venusaur | Attack | normalAttack |  |  | stun | 行動不能・スタンを付与する。 | enemy | 0.4 | durationOrBuffDebuff | unconfirmed |
| Venusaur | Attack | normalAttack |  |  | pull | 相手を引き寄せる。 | enemy | 0.4 |  | unconfirmed |
| Venusaur | Attack | normalAttack |  |  | slow | 移動速度を下げる。 | enemy | 0.4 | durationOrBuffDebuff | unconfirmed |
| Venusaur | Attack | normalAttack |  |  | boostedAttackCycle | 通常攻撃回数により強化攻撃になる。 | enemy | 0.4 | actionOrderOrCooldown | unconfirmed |
| Venusaur | Attack Boosted | boostedAttack |  |  | pull | 相手を引き寄せる。 | enemy |  |  | unconfirmed |
| Venusaur | Attack Boosted | boostedAttack |  |  | boostedAttackCycle | 通常攻撃回数により強化攻撃になる。 | unconfirmed |  | actionOrderOrCooldown | unconfirmed |
| Venusaur | Sludge Bomb | moveChoice | 5 |  | poison | どくを付与する。 | enemy | 2 | durationOrBuffDebuff | unconfirmed |
| Venusaur | Sludge Bomb | moveChoice | 5 |  | slow | 移動速度を下げる。 | enemy | 2 | durationOrBuffDebuff | unconfirmed |
| Venusaur | Sludge Bomb | moveChoice | 5 |  | defenseStatChange | 防御・特防を変化させる。 | unconfirmed | 2 | durationOrBuffDebuff | unconfirmed |
| Venusaur | Sludge Bomb | moveChoice | 5 |  | damageOverTime | 継続ダメージを与える。 | enemy | 0.5 | durationOrBuffDebuff | unconfirmed |
| Venusaur | Sludge Bomb | moveChoice | 5 |  | stackOrMark | スタック、マーク、ゲージを扱う。 | enemy | 2 | targetOrSelfStack | unconfirmed |
| Venusaur | Giga Drain | moveChoice | 5 |  | damageReduction | 受けるダメージを軽減する。 | unconfirmed | 2.5 | durationOrBuffDebuff | unconfirmed |
| Venusaur | Giga Drain | moveChoice | 5 |  | healing | HPを回復する。 | enemy |  | hpState | unconfirmed |
| Venusaur | Giga Drain+ | movePlus | 5 | yes | healing | HPを回復する。 | self |  | hpState | unconfirmed |
| Venusaur | Solar Beam | moveChoice | 7 |  | wildPokemonRule | 野生ポケモン限定の処理を持つ。 | unconfirmed |  | targetType | unconfirmed |
| Venusaur | Solar Beam+ | movePlus | 7 | yes | cooldownReduction | 待ち時間を短縮する。 | unconfirmed | 0.6 | actionOrderOrCooldown | unconfirmed |
| Venusaur | Petal Dance | moveChoice | 7 |  | slow | 移動速度を下げる。 | unconfirmed | 0.5 | durationOrBuffDebuff | unconfirmed |
| Venusaur | Petal Dance | moveChoice | 7 |  | movementSpeedUp | 移動速度を上げる。 | enemy | 4.8 | durationOrBuffDebuff | unconfirmed |
| Venusaur | Petal Dance | moveChoice | 7 |  | cooldownReduction | 待ち時間を短縮する。 | enemy |  | actionOrderOrCooldown | unconfirmed |
| Venusaur | Petal Dance | moveChoice | 7 |  | damageOverTime | 継続ダメージを与える。 | unconfirmed | 0.5 | durationOrBuffDebuff | unconfirmed |
| Venusaur | Verdant Anger | uniteMove | 9 |  | slow | 移動速度を下げる。 | enemy | 1 | durationOrBuffDebuff | unconfirmed |
| Venusaur | Verdant Anger | uniteMove | 9 |  | unstoppable | 妨害無効になる。 | enemy | 1 | durationOrBuffDebuff | unconfirmed |
| Venusaur | Verdant Anger Unite Buff | uniteBuff | 9 |  | cooldownReduction | 待ち時間を短縮する。 | unconfirmed |  | actionOrderOrCooldown | unconfirmed |
| Venusaur | Verdant Anger Unite Buff | uniteBuff | 9 |  | shield | シールドを付与する。 | self |  | durationOrBuffDebuff | unconfirmed |
| Venusaur | Verdant Anger Unite Buff | uniteBuff | 9 |  | maxHpChange | 最大HPを変化させる。 | unconfirmed |  | hpState | unconfirmed |
| Wigglytuff | Attack | normalAttack |  |  | stun | 行動不能・スタンを付与する。 | enemy | 0.5 | durationOrBuffDebuff | unconfirmed |
| Wigglytuff | Attack | normalAttack |  |  | boostedAttackCycle | 通常攻撃回数により強化攻撃になる。 | enemy | 0.5 | actionOrderOrCooldown | unconfirmed |
| Wigglytuff | Attack Boosted | boostedAttack |  |  | boostedAttackCycle | 通常攻撃回数により強化攻撃になる。 | enemy |  | actionOrderOrCooldown | unconfirmed |
| Wigglytuff | Pound | initialMove |  |  | slow | 移動速度を下げる。 | enemy | 3 | durationOrBuffDebuff | unconfirmed |
| Wigglytuff | Pound | initialMove |  |  | formChange | フォーム・モード・構えを変化させる。 | enemy |  | formOrMode | unconfirmed |
| Wigglytuff | Double Slap | moveChoice | 6 |  | slow | 移動速度を下げる。 | enemy | 1.5 | durationOrBuffDebuff | unconfirmed |
| Wigglytuff | Double Slap | moveChoice | 6 |  | formChange | フォーム・モード・構えを変化させる。 | enemy |  | formOrMode | unconfirmed |
| Wigglytuff | Dazzling Gleam+ | movePlus | 6 | yes | slow | 移動速度を下げる。 | enemy | 1 | durationOrBuffDebuff | unconfirmed |
| Wigglytuff | Defense Curl | initialMove |  |  | knockUp | 相手を打ち上げる。 | enemy | 0.5 |  | unconfirmed |
| Wigglytuff | Defense Curl | initialMove |  |  | shield | シールドを付与する。 | enemy | 0.5 | durationOrBuffDebuff | unconfirmed |
| Wigglytuff | Defense Curl | initialMove |  |  | formChange | フォーム・モード・構えを変化させる。 | enemy | 0.5 | formOrMode | unconfirmed |
| Wigglytuff | Defense Curl | initialMove |  |  | maxHpChange | 最大HPを変化させる。 | enemy | 0.5 | hpState | unconfirmed |
| Wigglytuff | Rollout | moveChoice | 4 |  | knockUp | 相手を打ち上げる。 | unconfirmed | 0.5 |  | unconfirmed |
| Wigglytuff | Rollout | moveChoice | 4 |  | unstoppable | 妨害無効になる。 | self | 0.5 | durationOrBuffDebuff | unconfirmed |
| Wigglytuff | Rollout | moveChoice | 4 |  | shield | シールドを付与する。 | self | 2.5 | durationOrBuffDebuff | unconfirmed |
| Wigglytuff | Rollout | moveChoice | 4 |  | formChange | フォーム・モード・構えを変化させる。 | self |  | formOrMode | unconfirmed |
| Wigglytuff | Rollout | moveChoice | 4 |  | maxHpChange | 最大HPを変化させる。 | unconfirmed | 2.5 | hpState | unconfirmed |
| Wigglytuff | Rollout+ | movePlus | 4 | yes | knockUp | 相手を打ち上げる。 | enemy | 0.7 |  | unconfirmed |
| Wigglytuff | Sing | moveChoice | 4 |  | sleep | ねむりを付与する。 | enemy | 1.5 | durationOrBuffDebuff | unconfirmed |
| Wigglytuff | Sing | moveChoice | 4 |  | slow | 移動速度を下げる。 | enemy | 2 | durationOrBuffDebuff | unconfirmed |
| Wigglytuff | Sing | moveChoice | 4 |  | defenseStatChange | 防御・特防を変化させる。 | enemy | 1.5 | durationOrBuffDebuff | unconfirmed |
| Wigglytuff | Sing+ | movePlus | 4 | yes | sleep | ねむりを付与する。 | enemy | 1.75 | durationOrBuffDebuff | unconfirmed |
| Wigglytuff | Sing+ | movePlus | 4 | yes | defenseStatChange | 防御・特防を変化させる。 | enemy | 1.75 | durationOrBuffDebuff | unconfirmed |
| Wigglytuff | Starlight Recital | uniteMove | 8 |  | unstoppable | 妨害無効になる。 | ally | 3 | durationOrBuffDebuff | unconfirmed |
| Wigglytuff | Starlight Recital | uniteMove | 8 |  | hindranceResistance | 妨害耐性を得る。 | ally |  | durationOrBuffDebuff | unconfirmed |
| Wigglytuff | Starlight Recital | uniteMove | 8 |  | healing | HPを回復する。 | ally |  | hpState | unconfirmed |
| Wigglytuff | Starlight Recital | uniteMove | 8 |  | shield | シールドを付与する。 | ally | 3 | durationOrBuffDebuff | unconfirmed |
| Wigglytuff | Starlight Recital | uniteMove | 8 |  | formChange | フォーム・モード・構えを変化させる。 | ally | 3 | formOrMode | unconfirmed |
| Wigglytuff | Starlight Recital Unite Buff | uniteBuff | 8 |  | cooldownReduction | 待ち時間を短縮する。 | unconfirmed |  | actionOrderOrCooldown | unconfirmed |
| Wigglytuff | Starlight Recital Unite Buff | uniteBuff | 8 |  | shield | シールドを付与する。 | self |  | durationOrBuffDebuff | unconfirmed |
| Wigglytuff | Starlight Recital Unite Buff | uniteBuff | 8 |  | maxHpChange | 最大HPを変化させる。 | unconfirmed |  | hpState | unconfirmed |
| Zacian | Attack | normalAttack |  |  | slow | 移動速度を下げる。 | enemy | 1 | durationOrBuffDebuff | unconfirmed |
| Zacian | Attack | normalAttack |  |  | healing | HPを回復する。 | enemy | 1 | hpState | unconfirmed |
| Zacian | Attack | normalAttack |  |  | formChange | フォーム・モード・構えを変化させる。 | self | 2 | formOrMode | unconfirmed |
| Zacian | Attack Boosted | boostedAttack |  |  | slow | 移動速度を下げる。 | enemy | 1 | durationOrBuffDebuff | unconfirmed |
| Zacian | Attack Boosted | boostedAttack |  |  | healing | HPを回復する。 | enemy | 1 | hpState | unconfirmed |
| Zacian | Attack Boosted | boostedAttack |  |  | hpReferenceDamage | 現在HP・最大HP・減少HPなどを参照する。 | enemy | 1 | hpState | unconfirmed |
| Zacian | Attack Boosted | boostedAttack |  |  | wildPokemonRule | 野生ポケモン限定の処理を持つ。 | enemy | 1 | targetType | unconfirmed |
| Zacian | Slash | initialMove |  |  | slow | 移動速度を下げる。 | unconfirmed | 0.5 | durationOrBuffDebuff | unconfirmed |
| Zacian | Metal Claw | moveChoice | 5 |  | slow | 移動速度を下げる。 | unconfirmed | 3 | durationOrBuffDebuff | unconfirmed |
| Zacian | Metal Claw | moveChoice | 5 |  | attackSpeedUp | 通常攻撃速度を上げる。 | enemy | 4 | durationOrBuffDebuff | unconfirmed |
| Zacian | Metal Claw | moveChoice | 5 |  | formChange | フォーム・モード・構えを変化させる。 | self | 3 | formOrMode | unconfirmed |
| Zacian | Sacred Sword | moveChoice | 5 |  | stun | 行動不能・スタンを付与する。 | enemy | 1.5 | durationOrBuffDebuff | unconfirmed |
| Zacian | Sacred Sword | moveChoice | 5 |  | slow | 移動速度を下げる。 | enemy | 3 | durationOrBuffDebuff | unconfirmed |
| Zacian | Sacred Sword | moveChoice | 5 |  | unstoppable | 妨害無効になる。 | self |  | durationOrBuffDebuff | unconfirmed |
| Zacian | Sacred Sword | moveChoice | 5 |  | attackStatChange | 攻撃・特攻などを変化させる。 | enemy | 3 | durationOrBuffDebuff | unconfirmed |
| Zacian | Sacred Sword | moveChoice | 5 |  | damageDealtChange | 与ダメージを変化させる。 | enemy | 3 | durationOrBuffDebuff | unconfirmed |
| Zacian | Quick Attack | initialMove |  |  | stun | 行動不能・スタンを付与する。 | enemy | 1 | durationOrBuffDebuff | unconfirmed |
| Zacian | Agility | moveChoice | 7 |  | shield | シールドを付与する。 | self |  | durationOrBuffDebuff | unconfirmed |
| Zacian | Agility+ | movePlus | 7 | yes | movementSpeedUp | 移動速度を上げる。 | self |  | durationOrBuffDebuff | unconfirmed |
| Zacian | Play Rough | moveChoice | 7 |  | stun | 行動不能・スタンを付与する。 | unconfirmed | 0.25 | durationOrBuffDebuff | unconfirmed |
| Zacian | Play Rough | moveChoice | 7 |  | damageReduction | 受けるダメージを軽減する。 | enemy | 3 | durationOrBuffDebuff | unconfirmed |
| Zacian | Play Rough+ | movePlus | 7 | yes | stun | 行動不能・スタンを付与する。 | unconfirmed | 0.75 | durationOrBuffDebuff | unconfirmed |
| Zacian | Sovereign Sword | uniteMove | 9 |  | slow | 移動速度を下げる。 | unconfirmed |  | durationOrBuffDebuff | unconfirmed |
| Zacian | Sovereign Sword | uniteMove | 9 |  | unstoppable | 妨害無効になる。 | self |  | durationOrBuffDebuff | unconfirmed |
| Zacian | Sovereign Sword | uniteMove | 9 |  | damageDealtChange | 与ダメージを変化させる。 | enemy |  | durationOrBuffDebuff | unconfirmed |
| Zacian | Sovereign Sword | uniteMove | 9 |  | formChange | フォーム・モード・構えを変化させる。 | self |  | formOrMode | unconfirmed |
| Zacian | Sovereign Sword Unite Buff | uniteBuff | 9 |  | cooldownReduction | 待ち時間を短縮する。 | unconfirmed |  | actionOrderOrCooldown | unconfirmed |
| Zacian | Sovereign Sword Unite Buff | uniteBuff | 9 |  | shield | シールドを付与する。 | self |  | durationOrBuffDebuff | unconfirmed |
| Zacian | Sovereign Sword Unite Buff | uniteBuff | 9 |  | maxHpChange | 最大HPを変化させる。 | unconfirmed |  | hpState | unconfirmed |
| Zapdos | Static | passive |  |  | paralysis | まひを付与する。 | enemy | 2.5 | durationOrBuffDebuff | unconfirmed |
| Zapdos | Static | passive |  |  | slow | 移動速度を下げる。 | enemy | 3 | durationOrBuffDebuff | unconfirmed |
| Zapdos | Static | passive |  |  | attackSpeedDown | 通常攻撃速度を下げる。 | enemy | 2.5 | durationOrBuffDebuff | unconfirmed |
| Zapdos | Attack | normalAttack |  |  | cooldownReduction | 待ち時間を短縮する。 | enemy | 1 | actionOrderOrCooldown | unconfirmed |
| Zapdos | Thunderbolt | moveChoice | 5 |  | paralysis | まひを付与する。 | enemy | 2.5 | durationOrBuffDebuff | unconfirmed |
| Zapdos | Thunderbolt | moveChoice | 5 |  | attackSpeedDown | 通常攻撃速度を下げる。 | enemy | 2.5 | durationOrBuffDebuff | unconfirmed |
| Zapdos | Discharge | initialMove |  |  | paralysis | まひを付与する。 | enemy |  | durationOrBuffDebuff | unconfirmed |
| Zapdos | Discharge | initialMove |  |  | attackSpeedDown | 通常攻撃速度を下げる。 | enemy | 2.5 | durationOrBuffDebuff | unconfirmed |
| Zapdos | Discharge | initialMove |  |  | stackOrMark | スタック、マーク、ゲージを扱う。 | unconfirmed |  | targetOrSelfStack | unconfirmed |
| Zapdos | Zap Cannon | moveChoice | 7 |  | stun | 行動不能・スタンを付与する。 | enemy | 0.3 | durationOrBuffDebuff | unconfirmed |
| Zapdos | Zap Cannon | moveChoice | 7 |  | damageDealtChange | 与ダメージを変化させる。 | unconfirmed |  | durationOrBuffDebuff | unconfirmed |
| Zapdos | Zap Cannon | moveChoice | 7 |  | formChange | フォーム・モード・構えを変化させる。 | self |  | formOrMode | unconfirmed |
| Zapdos | Zap Cannon+ | movePlus | 7 | yes | stun | 行動不能・スタンを付与する。 | enemy |  | durationOrBuffDebuff | unconfirmed |
| Zapdos | High-Voltage Siege | uniteMove | 9 |  | paralysis | まひを付与する。 | enemy | 2.5 | durationOrBuffDebuff | unconfirmed |
| Zapdos | High-Voltage Siege | uniteMove | 9 |  | stun | 行動不能・スタンを付与する。 | unconfirmed |  | durationOrBuffDebuff | unconfirmed |
| Zapdos | High-Voltage Siege | uniteMove | 9 |  | pull | 相手を引き寄せる。 | unconfirmed |  |  | unconfirmed |
| Zapdos | High-Voltage Siege | uniteMove | 9 |  | attackSpeedDown | 通常攻撃速度を下げる。 | enemy | 2.5 | durationOrBuffDebuff | unconfirmed |
| Zapdos | High-Voltage Siege | uniteMove | 9 |  | formChange | フォーム・モード・構えを変化させる。 | self |  | formOrMode | unconfirmed |
| Zapdos | High-Voltage Siege Unite Buff | uniteBuff | 9 |  | cooldownReduction | 待ち時間を短縮する。 | unconfirmed |  | actionOrderOrCooldown | unconfirmed |
| Zapdos | High-Voltage Siege Unite Buff | uniteBuff | 9 |  | shield | シールドを付与する。 | self |  | durationOrBuffDebuff | unconfirmed |
| Zapdos | High-Voltage Siege Unite Buff | uniteBuff | 9 |  | maxHpChange | 最大HPを変化させる。 | unconfirmed |  | hpState | unconfirmed |
| Zeraora | Volt Absorb | passive |  |  | damageReduction | 受けるダメージを軽減する。 | unconfirmed | 4 | durationOrBuffDebuff | unconfirmed |
| Zeraora | Attack | normalAttack |  |  | paralysis | まひを付与する。 | enemy |  | durationOrBuffDebuff | unconfirmed |
| Zeraora | Attack | normalAttack |  |  | boostedAttackCycle | 通常攻撃回数により強化攻撃になる。 | enemy |  | actionOrderOrCooldown | unconfirmed |
| Zeraora | Attack | normalAttack |  |  | hpReferenceDamage | 現在HP・最大HP・減少HPなどを参照する。 | enemy |  | hpState | unconfirmed |
| Zeraora | Attack Boosted | boostedAttack |  |  | paralysis | まひを付与する。 | enemy |  | durationOrBuffDebuff | unconfirmed |
| Zeraora | Attack Boosted | boostedAttack |  |  | boostedAttackCycle | 通常攻撃回数により強化攻撃になる。 | enemy |  | actionOrderOrCooldown | unconfirmed |
| Zeraora | Agility | initialMove |  |  | attackSpeedUp | 通常攻撃速度を上げる。 | self | 3 | durationOrBuffDebuff | unconfirmed |
| Zeraora | Agility | initialMove |  |  | formChange | フォーム・モード・構えを変化させる。 | self |  | formOrMode | unconfirmed |
| Zeraora | Volt Switch | moveChoice | 5 |  | attackSpeedUp | 通常攻撃速度を上げる。 | self | 3 | durationOrBuffDebuff | unconfirmed |
| Zeraora | Volt Switch | moveChoice | 5 |  | stackOrMark | スタック、マーク、ゲージを扱う。 | unconfirmed | 3 | targetOrSelfStack | unconfirmed |
| Zeraora | Volt Switch | moveChoice | 5 |  | formChange | フォーム・モード・構えを変化させる。 | enemy |  | formOrMode | unconfirmed |
| Zeraora | Volt Switch | moveChoice | 5 |  | reuseOrSecondActivation | 再使用・派生・2段目を持つ。 | enemy | 3 | actionOrderOrCooldown | unconfirmed |
| Zeraora | Spark | moveChoice | 5 |  | unstoppable | 妨害無効になる。 | ally | 0.2 | durationOrBuffDebuff | unconfirmed |
| Zeraora | Spark | moveChoice | 5 |  | reuseOrSecondActivation | 再使用・派生・2段目を持つ。 | unconfirmed | 4 | actionOrderOrCooldown | unconfirmed |
| Zeraora | Spark+ | movePlus | 5 | yes | healing | HPを回復する。 | enemy |  | hpState | unconfirmed |
| Zeraora | Spark+ | movePlus | 5 | yes | hpReferenceDamage | 現在HP・最大HP・減少HPなどを参照する。 | enemy |  | hpState | unconfirmed |
| Zeraora | Spark+ | movePlus | 5 | yes | formChange | フォーム・モード・構えを変化させる。 | enemy |  | formOrMode | unconfirmed |
| Zeraora | Slash | initialMove |  |  | knockUp | 相手を打ち上げる。 | enemy | 0.5 |  | unconfirmed |
| Zeraora | Discharge | moveChoice | 7 |  | paralysis | まひを付与する。 | enemy | 1 | durationOrBuffDebuff | unconfirmed |
| Zeraora | Discharge | moveChoice | 7 |  | stun | 行動不能・スタンを付与する。 | enemy | 1 | durationOrBuffDebuff | unconfirmed |
| Zeraora | Discharge | moveChoice | 7 |  | pull | 相手を引き寄せる。 | enemy | 1 |  | unconfirmed |
| Zeraora | Discharge | moveChoice | 7 |  | shield | シールドを付与する。 | self | 3 | durationOrBuffDebuff | unconfirmed |
| Zeraora | Wild Charge | moveChoice | 7 |  | untargetableOrStealth | 対象指定されない、またはステルス状態になる。 | enemy |  | durationOrBuffDebuff | unconfirmed |
| Zeraora | Wild Charge | moveChoice | 7 |  | damageReduction | 受けるダメージを軽減する。 | enemy | 5 | durationOrBuffDebuff | unconfirmed |
| Zeraora | Wild Charge | moveChoice | 7 |  | stackOrMark | スタック、マーク、ゲージを扱う。 | enemy | 5 | targetOrSelfStack | unconfirmed |
| Zeraora | Wild Charge | moveChoice | 7 |  | hpReferenceDamage | 現在HP・最大HP・減少HPなどを参照する。 | unconfirmed |  | hpState | unconfirmed |
| Zeraora | Wild Charge | moveChoice | 7 |  | formChange | フォーム・モード・構えを変化させる。 | self |  | formOrMode | unconfirmed |
| Zeraora | Wild Charge+ | movePlus | 7 | yes | damageReduction | 受けるダメージを軽減する。 | enemy |  | durationOrBuffDebuff | unconfirmed |
| Zeraora | Plasma Gale | uniteMove | 9 |  | paralysis | まひを付与する。 | enemy | 3 | durationOrBuffDebuff | unconfirmed |
| Zeraora | Plasma Gale | uniteMove | 9 |  | knockUp | 相手を打ち上げる。 | enemy | 0.5 |  | unconfirmed |
| Zeraora | Plasma Gale | uniteMove | 9 |  | unstoppable | 妨害無効になる。 | self | 0.5 | durationOrBuffDebuff | unconfirmed |
| Zeraora | Plasma Gale | uniteMove | 9 |  | damageDealtChange | 与ダメージを変化させる。 | unconfirmed |  | durationOrBuffDebuff | unconfirmed |
| Zeraora | Plasma Gale Unite Buff | uniteBuff | 9 |  | cooldownReduction | 待ち時間を短縮する。 | unconfirmed |  | actionOrderOrCooldown | unconfirmed |
| Zeraora | Plasma Gale Unite Buff | uniteBuff | 9 |  | shield | シールドを付与する。 | self |  | durationOrBuffDebuff | unconfirmed |
| Zeraora | Plasma Gale Unite Buff | uniteBuff | 9 |  | maxHpChange | 最大HPを変化させる。 | unconfirmed |  | hpState | unconfirmed |
| Zoroark | Illusion | passive |  |  | unstoppable | 妨害無効になる。 | self | 0.33 | durationOrBuffDebuff | unconfirmed |
| Zoroark | Illusion | passive |  |  | wildPokemonRule | 野生ポケモン限定の処理を持つ。 | enemy |  | targetType | unconfirmed |
| Zoroark | Illusion | passive |  |  | formChange | フォーム・モード・構えを変化させる。 | enemy | 15 | formOrMode | unconfirmed |
| Zoroark | Illusion | passive |  |  | cleanse | 状態異常や低下効果を解除する。 | self | 0.33 | durationOrBuffDebuff | unconfirmed |
| Zoroark | Attack | normalAttack |  |  | boostedAttackCycle | 通常攻撃回数により強化攻撃になる。 | unconfirmed |  | actionOrderOrCooldown | unconfirmed |
| Zoroark | Attack Boosted | boostedAttack |  |  | boostedAttackCycle | 通常攻撃回数により強化攻撃になる。 | unconfirmed |  | actionOrderOrCooldown | unconfirmed |
| Zoroark | Shadow Claw | moveChoice | 7 |  | stun | 行動不能・スタンを付与する。 | enemy | 0.05 | durationOrBuffDebuff | unconfirmed |
| Zoroark | Shadow Claw | moveChoice | 7 |  | knockUp | 相手を打ち上げる。 | unconfirmed | 0.4 |  | unconfirmed |
| Zoroark | Shadow Claw+ | movePlus | 7 | yes | knockUp | 相手を打ち上げる。 | unconfirmed | 0.5 |  | unconfirmed |
| Zoroark | Fury Swipes | initialMove |  |  | reuseOrSecondActivation | 再使用・派生・2段目を持つ。 | unconfirmed | 4 | actionOrderOrCooldown | unconfirmed |
| Zoroark | Night Slash | moveChoice | 5 |  | invincible | 無敵になる。 | enemy | 1.4 | durationOrBuffDebuff | unconfirmed |
| Zoroark | Night Slash | moveChoice | 5 |  | healing | HPを回復する。 | self |  | hpState | unconfirmed |
| Zoroark | Night Slash | moveChoice | 5 |  | nextBoostedAttack | 次の通常攻撃または強化攻撃を準備する。 | unconfirmed |  | actionOrderOrCooldown | unconfirmed |
| Zoroark | Night Slash | moveChoice | 5 |  | hpReferenceDamage | 現在HP・最大HP・減少HPなどを参照する。 | unconfirmed |  | hpState | unconfirmed |
| Zoroark | Night Slash | moveChoice | 5 |  | wildPokemonRule | 野生ポケモン限定の処理を持つ。 | unconfirmed |  | targetType | unconfirmed |
| Zoroark | Night Slash | moveChoice | 5 |  | formChange | フォーム・モード・構えを変化させる。 | self |  | formOrMode | unconfirmed |
| Zoroark | Night Slash | moveChoice | 5 |  | cleanse | 状態異常や低下効果を解除する。 | enemy | 1.4 | durationOrBuffDebuff | unconfirmed |
| Zoroark | Feint Attack | moveChoice | 5 |  | unstoppable | 妨害無効になる。 | enemy | 0.5 | durationOrBuffDebuff | unconfirmed |
| Zoroark | Feint Attack | moveChoice | 5 |  | stackOrMark | スタック、マーク、ゲージを扱う。 | unconfirmed | 3 | targetOrSelfStack | unconfirmed |
| Zoroark | Feint Attack | moveChoice | 5 |  | hpReferenceDamage | 現在HP・最大HP・減少HPなどを参照する。 | unconfirmed |  | hpState | unconfirmed |
| Zoroark | Feint Attack | moveChoice | 5 |  | wildPokemonRule | 野生ポケモン限定の処理を持つ。 | unconfirmed |  | targetType | unconfirmed |
| Zoroark | Feint Attack | moveChoice | 5 |  | formChange | フォーム・モード・構えを変化させる。 | enemy |  | formOrMode | unconfirmed |
| Zoroark | Feint Attack | moveChoice | 5 |  | reuseOrSecondActivation | 再使用・派生・2段目を持つ。 | unconfirmed | 3 | actionOrderOrCooldown | unconfirmed |
| Zoroark | Nightfall Daze | uniteMove | 9 |  | unstoppable | 妨害無効になる。 | self | 1.33 | durationOrBuffDebuff | unconfirmed |
| Zoroark | Nightfall Daze | uniteMove | 9 |  | hindranceResistance | 妨害耐性を得る。 | self |  | durationOrBuffDebuff | unconfirmed |
| Zoroark | Nightfall Daze Unite Buff | uniteBuff | 9 |  | shield | シールドを付与する。 | self |  | durationOrBuffDebuff | unconfirmed |
| Zoroark | Nightfall Daze Unite Buff | uniteBuff | 9 |  | maxHpChange | 最大HPを変化させる。 | unconfirmed |  | hpState | unconfirmed |

