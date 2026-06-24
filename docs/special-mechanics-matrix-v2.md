# 特殊効果 横断マトリクス v2

全ポケモンを対象に、説明文を効果単位へ分解したドラフト調査です。直接ダメージと単純移動は `baseAction` に保存し、特殊効果件数には含めません。

調査日: 2026-06-23
出典: https://unite-db.com/pokemon.json

## 集計

- 対象ポケモン数: 95
- 特性・通常攻撃・技・ユナイト技などのソース数: 477
- 特殊効果数: 1107
- 特殊効果0件のソース数: 75
- 旧調査との差分: +538

## カテゴリ別件数

- burn: 19
- poison: 0
- otherStatusConditions: 145
- damageOverTime: 32
- stackOrMark: 77
- selfGauge: 0
- timedBuff: 311
- timedDebuff: 195
- healing: 41
- shield: 124
- nextNormalAttackBoost: 23
- hpCondition: 8
- hpReferenceDamage: 24
- cooldownChange: 57
- formChange: 61
- koAssistLinked: 9
- actionOrderRequired: 279
- timeTrackingRequired: 718
- perTargetStateRequired: 364
- battleStateRequired: 1016
- dedicatedHandlingCandidate: 139

## 効果一覧

| ポケモン | ソース | 効果元 | 効果タイプ | 要約 | 対象 | 持続 | battleState理由 | 確認 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Absol | Super Luck | passive | criticalRateUp | 急所率を上げる。 | self |  | durationOrBuffDebuff | unconfirmed |
| Absol | Attack | normalAttack | defenseStatChange | 防御・特防を変化させる。 | unconfirmed | 2 | durationOrBuffDebuff | unconfirmed |
| Absol | Attack | normalAttack | boostedAttackCycle | 通常攻撃回数により強化攻撃になる。 | unconfirmed | 2 | actionOrderOrCooldown | unconfirmed |
| Absol | Feint | move | attackSpeedUp | 通常攻撃速度を上げる。 | self | 0.5 | durationOrBuffDebuff | unconfirmed |
| Absol | Feint | move | shield | シールドを付与する。 | self |  | durationOrBuffDebuff | unconfirmed |
| Absol | Slash | move | criticalRateUp | 急所率を上げる。 | self |  | durationOrBuffDebuff | unconfirmed |
| Absol | Midnight Slash | uniteMove | knockBack | 相手を押し出す。 | enemy |  |  | unconfirmed |
| Absol | Midnight Slash | uniteMove | unstoppable | 妨害無効になる。 | enemy | 1.15 | durationOrBuffDebuff | unconfirmed |
| Absol | Midnight Slash | uniteMove | untargetableOrStealth | 対象指定されない、またはステルス状態になる。 | enemy | 1.15 | durationOrBuffDebuff | unconfirmed |
| Absol | Midnight Slash | uniteMove | shield | シールドを付与する。 | self |  | durationOrBuffDebuff | unconfirmed |
| Aegislash | No Guard | passive | formChange | フォーム・モード・構えを変化させる。 | self |  | formOrMode | unconfirmed |
| Aegislash | Attack | normalAttack | stun | 行動不能・スタンを付与する。 | enemy | 0.1 | durationOrBuffDebuff | unconfirmed |
| Aegislash | Attack | normalAttack | cooldownReduction | 待ち時間を短縮する。 | unconfirmed | 1 | actionOrderOrCooldown | unconfirmed |
| Aegislash | Attack | normalAttack | healing | HPを回復する。 | self | 1 | hpState | unconfirmed |
| Aegislash | Attack | normalAttack | shield | シールドを付与する。 | enemy | 0.1 | durationOrBuffDebuff | unconfirmed |
| Aegislash | Attack | normalAttack | stackOrMark | スタック、マーク、ゲージを扱う。 | unconfirmed |  | targetStackOrMark | unconfirmed |
| Aegislash | Attack | normalAttack | nextBoostedAttack | 次の通常攻撃または強化攻撃を準備する。 | unconfirmed |  | actionOrderOrCooldown | unconfirmed |
| Aegislash | Attack | normalAttack | boostedAttackCycle | 通常攻撃回数により強化攻撃になる。 | unconfirmed |  | actionOrderOrCooldown | unconfirmed |
| Aegislash | Attack | normalAttack | formChange | フォーム・モード・構えを変化させる。 | enemy | 0.1 | formOrMode | unconfirmed |
| Aegislash | Shadow Sneak | move | stackOrMark | スタック、マーク、ゲージを扱う。 | enemy |  | targetStackOrMark | unconfirmed |
| Aegislash | Shadow Sneak | move | formChange | フォーム・モード・構えを変化させる。 | enemy |  | formOrMode | unconfirmed |
| Aegislash | Iron Defense | move | delayedDamage | 遅延または時間差でダメージを与える。 | unconfirmed | 1 | durationOrBuffDebuff | unconfirmed |
| Aegislash | Iron Defense | move | stackOrMark | スタック、マーク、ゲージを扱う。 | unconfirmed |  | selfStackOrGauge | unconfirmed |
| Aegislash | Coup de Grace | uniteMove | unstoppable | 妨害無効になる。 | self |  | durationOrBuffDebuff | unconfirmed |
| Aegislash | Coup de Grace | uniteMove | cooldownReduction | 待ち時間を短縮する。 | unconfirmed |  | actionOrderOrCooldown | unconfirmed |
| Aegislash | Coup de Grace | uniteMove | shield | シールドを付与する。 | self |  | durationOrBuffDebuff | unconfirmed |
| Aegislash | Coup de Grace | uniteMove | stackOrMark | スタック、マーク、ゲージを扱う。 | enemy |  | targetStackOrMark | unconfirmed |
| Aegislash | Coup de Grace | uniteMove | hpReferenceDamage | 現在HP・最大HP・減少HPなどを参照する。 | enemy |  | hpState | unconfirmed |
| Aegislash | Coup de Grace | uniteMove | koAssistTrigger | KOまたはアシストで発動する。 | enemy |  | koAssistEvent | unconfirmed |
| Alcremie | Aroma Veil | passive | shield | シールドを付与する。 | ally |  | durationOrBuffDebuff | unconfirmed |
| Alcremie | Aroma Veil | passive | stackOrMark | スタック、マーク、ゲージを扱う。 | unconfirmed |  | selfStackOrGauge | unconfirmed |
| Alcremie | Attack | normalAttack | knockUp | 相手を打ち上げる。 | unconfirmed |  |  | unconfirmed |
| Alcremie | Helping Hand | move | shield | シールドを付与する。 | ally | 3 | durationOrBuffDebuff | unconfirmed |
| Alcremie | Charm | move | stackOrMark | スタック、マーク、ゲージを扱う。 | ally |  | targetStackOrMark | unconfirmed |
| Alcremie | Fluffy Cream Supreme | uniteMove | bind | バインドを付与する。 | ally |  | durationOrBuffDebuff | unconfirmed |
| Alcremie | Fluffy Cream Supreme | uniteMove | knockUp | 相手を打ち上げる。 | ally |  |  | unconfirmed |
| Alcremie | Fluffy Cream Supreme | uniteMove | unstoppable | 妨害無効になる。 | self | 6 | durationOrBuffDebuff | unconfirmed |
| Alcremie | Fluffy Cream Supreme | uniteMove | cooldownReduction | 待ち時間を短縮する。 | unconfirmed |  | actionOrderOrCooldown | unconfirmed |
| Alcremie | Fluffy Cream Supreme | uniteMove | healing | HPを回復する。 | ally | 8 | hpState | unconfirmed |
| Alcremie | Fluffy Cream Supreme | uniteMove | shield | シールドを付与する。 | self | 6 | durationOrBuffDebuff | unconfirmed |
| Alcremie | Fluffy Cream Supreme | uniteMove | maxHpChange | 最大HPを変化させる。 | ally | 8 | hpState | unconfirmed |
| Armarouge | Flash Fire | passive | attackStatChange | 攻撃・特攻などのステータスを変化させる。 | enemy | 3 | durationOrBuffDebuff | unconfirmed |
| Armarouge | Flash Fire | passive | nextBoostedAttack | 次の通常攻撃または強化攻撃を準備する。 | enemy | 3 | actionOrderOrCooldown | unconfirmed |
| Armarouge | Attack - Charcadet | normalAttack | boostedAttackCycle | 通常攻撃回数により強化攻撃になる。 | unconfirmed |  | actionOrderOrCooldown | unconfirmed |
| Armarouge | Incinerate | move | damageOverTime | 継続ダメージを与える。 | enemy | 4 | durationOrBuffDebuff | unconfirmed |
| Armarouge | Will-o-Wisp | move | burn | やけどを付与する。 | enemy | 2 | durationOrBuffDebuff | unconfirmed |
| Armarouge | Will-o-Wisp | move | slow | 移動速度を下げる。 | enemy | 2 | durationOrBuffDebuff | unconfirmed |
| Armarouge | Will-o-Wisp | move | nextBoostedAttack | 次の通常攻撃または強化攻撃を準備する。 | unconfirmed |  | actionOrderOrCooldown | unconfirmed |
| Armarouge | Will-o-Wisp | move | boostedAttackCycle | 通常攻撃回数により強化攻撃になる。 | unconfirmed |  | actionOrderOrCooldown | unconfirmed |
| Armarouge | Psykaboom | uniteMove | stun | 行動不能・スタンを付与する。 | enemy | 1.85 | durationOrBuffDebuff | unconfirmed |
| Armarouge | Psykaboom | uniteMove | knockUp | 相手を打ち上げる。 | enemy |  |  | unconfirmed |
| Armarouge | Psykaboom | uniteMove | unstoppable | 妨害無効になる。 | enemy | 1.85 | durationOrBuffDebuff | unconfirmed |
| Armarouge | Psykaboom | uniteMove | cooldownReduction | 待ち時間を短縮する。 | unconfirmed |  | actionOrderOrCooldown | unconfirmed |
| Armarouge | Psykaboom | uniteMove | shield | シールドを付与する。 | self |  | durationOrBuffDebuff | unconfirmed |
| Armarouge | Psykaboom | uniteMove | reuseOrSecondActivation | 再使用・派生・2段目を持つ。 | unconfirmed |  | actionOrderOrCooldown | unconfirmed |
| Articuno | Snow Cloak | passive | freeze | こおり・凍結を付与する。 | unconfirmed | 3 | durationOrBuffDebuff | unconfirmed |
| Articuno | Snow Cloak | passive | slow | 移動速度を下げる。 | unconfirmed | 3 | durationOrBuffDebuff | unconfirmed |
| Articuno | Snow Cloak | passive | stackOrMark | スタック、マーク、ゲージを扱う。 | unconfirmed | 3 | targetStackOrMark | unconfirmed |
| Articuno | Snow Cloak | passive | formChange | フォーム・モード・構えを変化させる。 | self | 4 | formOrMode | unconfirmed |
| Articuno | Attack | normalAttack | slow | 移動速度を下げる。 | enemy | 0.3 | durationOrBuffDebuff | unconfirmed |
| Articuno | Icy Wind | move | freeze | こおり・凍結を付与する。 | enemy |  | durationOrBuffDebuff | unconfirmed |
| Articuno | Icy Wind | move | stackOrMark | スタック、マーク、ゲージを扱う。 | enemy |  | targetStackOrMark | unconfirmed |
| Articuno | Ice Shard | move | freeze | こおり・凍結を付与する。 | enemy |  | durationOrBuffDebuff | unconfirmed |
| Articuno | Ice Shard | move | slow | 移動速度を下げる。 | enemy | 2.5 | durationOrBuffDebuff | unconfirmed |
| Articuno | Ice Shard | move | stackOrMark | スタック、マーク、ゲージを扱う。 | enemy |  | targetStackOrMark | unconfirmed |
| Articuno | Ice Wing Whiteout | uniteMove | unstoppable | 妨害無効になる。 | self |  | durationOrBuffDebuff | unconfirmed |
| Articuno | Ice Wing Whiteout | uniteMove | healing | HPを回復する。 | self |  | hpState | unconfirmed |
| Articuno | Ice Wing Whiteout | uniteMove | shield | シールドを付与する。 | self |  | durationOrBuffDebuff | unconfirmed |
| Articuno | Ice Wing Whiteout | uniteMove | formChange | フォーム・モード・構えを変化させる。 | ally |  | formOrMode | unconfirmed |
| Azumarill | Attack | normalAttack | boostedAttackCycle | 通常攻撃回数により強化攻撃になる。 | enemy |  | actionOrderOrCooldown | unconfirmed |
| Azumarill | Tackle | move | stun | 行動不能・スタンを付与する。 | enemy | 0.5 | durationOrBuffDebuff | unconfirmed |
| Azumarill | Bubble | move | slow | 移動速度を下げる。 | enemy | 2 | durationOrBuffDebuff | unconfirmed |
| Azumarill | Belly Bash | uniteMove | knockUp | 相手を打ち上げる。 | enemy |  |  | unconfirmed |
| Azumarill | Belly Bash | uniteMove | unstoppable | 妨害無効になる。 | self |  | durationOrBuffDebuff | unconfirmed |
| Azumarill | Belly Bash | uniteMove | cooldownReduction | 待ち時間を短縮する。 | unconfirmed |  | actionOrderOrCooldown | unconfirmed |
| Azumarill | Belly Bash | uniteMove | shield | シールドを付与する。 | self | 6 | durationOrBuffDebuff | unconfirmed |
| Azumarill | Belly Bash | uniteMove | hpReferenceDamage | 現在HP・最大HP・減少HPなどを参照する。 | unconfirmed | 6 | hpState | unconfirmed |
| Blastoise | Torrent | passive | attackStatChange | 攻撃・特攻などのステータスを変化させる。 | unconfirmed |  | durationOrBuffDebuff | unconfirmed |
| Blastoise | Torrent | passive | hpThreshold | HP割合条件で発動する。 | self |  | hpState | unconfirmed |
| Blastoise | Attack | normalAttack | slow | 移動速度を下げる。 | enemy | 0.2 | durationOrBuffDebuff | unconfirmed |
| Blastoise | Attack | normalAttack | cooldownReduction | 待ち時間を短縮する。 | unconfirmed | 1 | actionOrderOrCooldown | unconfirmed |
| Blastoise | Attack | normalAttack | boostedAttackCycle | 通常攻撃回数により強化攻撃になる。 | unconfirmed | 1 | actionOrderOrCooldown | unconfirmed |
| Blastoise | Attack | normalAttack | formChange | フォーム・モード・構えを変化させる。 | enemy |  | formOrMode | unconfirmed |
| Blastoise | Water Gun | move | knockBack | 相手を押し出す。 | enemy |  |  | unconfirmed |
| Blastoise | Water Gun | move | slow | 移動速度を下げる。 | enemy | 0.2 | durationOrBuffDebuff | unconfirmed |
| Blastoise | Water Gun | move | formChange | フォーム・モード・構えを変化させる。 | enemy |  | formOrMode | unconfirmed |
| Blastoise | Skull Bash | move | stun | 行動不能・スタンを付与する。 | enemy | 0.5 | durationOrBuffDebuff | unconfirmed |
| Blastoise | Hydro Typhoon | uniteMove | knockUp | 相手を打ち上げる。 | enemy | 1.1 |  | unconfirmed |
| Blastoise | Hydro Typhoon | uniteMove | unstoppable | 妨害無効になる。 | self | 2 | durationOrBuffDebuff | unconfirmed |
| Blastoise | Hydro Typhoon | uniteMove | shield | シールドを付与する。 | self | 2 | durationOrBuffDebuff | unconfirmed |
| Blaziken | Attack | normalAttack | attackSpeedUp | 通常攻撃速度を上げる。 | self |  | durationOrBuffDebuff | unconfirmed |
| Blaziken | Aerial Ace | move | reuseOrSecondActivation | 再使用・派生・2段目を持つ。 | enemy |  | actionOrderOrCooldown | unconfirmed |
| Blaziken | Ember | move | slow | 移動速度を下げる。 | enemy | 1 | durationOrBuffDebuff | unconfirmed |
| Blaziken | Spinning Flame Fist | uniteMove | shield | シールドを付与する。 | self |  | durationOrBuffDebuff | unconfirmed |
| Blaziken | Spinning Flame Fist | uniteMove | formChange | フォーム・モード・構えを変化させる。 | enemy | 4 | formOrMode | unconfirmed |
| Blaziken | Spinning Flame Kick | uniteMove | shield | シールドを付与する。 | self |  | durationOrBuffDebuff | unconfirmed |
| Blaziken | Spinning Flame Kick | uniteMove | formChange | フォーム・モード・構えを変化させる。 | enemy | 4 | formOrMode | unconfirmed |
| Blissey | Attack | normalAttack | nextBoostedAttack | 次の通常攻撃または強化攻撃を準備する。 | unconfirmed |  | actionOrderOrCooldown | unconfirmed |
| Blissey | Attack | normalAttack | boostedAttackCycle | 通常攻撃回数により強化攻撃になる。 | unconfirmed | 6 | actionOrderOrCooldown | unconfirmed |
| Blissey | Pound | move | slow | 移動速度を下げる。 | enemy | 2 | durationOrBuffDebuff | unconfirmed |
| Blissey | Heal Pulse | move | damageOverTime | 継続ダメージを与える。 | ally | 0.5 | durationOrBuffDebuff | unconfirmed |
| Blissey | Heal Pulse | move | attachToAlly | 味方へ付着または移動する。 | ally | 0.5 |  | unconfirmed |
| Blissey | Bliss Assistance | uniteMove | knockUp | 相手を打ち上げる。 | enemy | 0.8 |  | unconfirmed |
| Blissey | Bliss Assistance | uniteMove | unstoppable | 妨害無効になる。 | ally |  | durationOrBuffDebuff | unconfirmed |
| Blissey | Bliss Assistance | uniteMove | attackStatChange | 攻撃・特攻などのステータスを変化させる。 | ally | 6 | durationOrBuffDebuff | unconfirmed |
| Blissey | Bliss Assistance | uniteMove | damageReduction | 受けるダメージを軽減する。 | ally | 6 | durationOrBuffDebuff | unconfirmed |
| Blissey | Bliss Assistance | uniteMove | cooldownReduction | 待ち時間を短縮する。 | unconfirmed |  | actionOrderOrCooldown | unconfirmed |
| Blissey | Bliss Assistance | uniteMove | shield | シールドを付与する。 | self |  | durationOrBuffDebuff | unconfirmed |
| Blissey | Bliss Assistance | uniteMove | attachToAlly | 味方へ付着または移動する。 | ally |  |  | unconfirmed |
| Buzzwole | Beast Boost | passive | movementSpeedUp | 移動速度を上げる。 | enemy | 3 | durationOrBuffDebuff | unconfirmed |
| Buzzwole | Beast Boost | passive | stackOrMark | スタック、マーク、ゲージを扱う。 | unconfirmed | 10 | targetStackOrMark | unconfirmed |
| Buzzwole | Beast Boost | passive | koAssistTrigger | KOまたはアシストで発動する。 | enemy | 3 | koAssistEvent | unconfirmed |
| Buzzwole | Attack | normalAttack | knockUp | 相手を打ち上げる。 | unconfirmed |  |  | unconfirmed |
| Buzzwole | Attack | normalAttack | stackOrMark | スタック、マーク、ゲージを扱う。 | enemy |  | targetStackOrMark | unconfirmed |
| Buzzwole | Attack | normalAttack | boostedAttackCycle | 通常攻撃回数により強化攻撃になる。 | unconfirmed |  | actionOrderOrCooldown | unconfirmed |
| Buzzwole | Mega Punch | move | stackOrMark | スタック、マーク、ゲージを扱う。 | enemy |  | targetStackOrMark | unconfirmed |
| Buzzwole | Fell Stinger | move | stun | 行動不能・スタンを付与する。 | enemy | 2 | durationOrBuffDebuff | unconfirmed |
| Buzzwole | Fell Stinger | move | damageDealtChange | 与ダメージを変化させる。 | unconfirmed |  | durationOrBuffDebuff | unconfirmed |
| Buzzwole | Fell Stinger | move | stackOrMark | スタック、マーク、ゲージを扱う。 | enemy | 2 | targetStackOrMark | unconfirmed |
| Buzzwole | Fell Stinger | move | koAssistTrigger | KOまたはアシストで発動する。 | unconfirmed |  | koAssistEvent | unconfirmed |
| Buzzwole | Ultra Swole Slam | uniteMove | unstoppable | 妨害無効になる。 | self |  | durationOrBuffDebuff | unconfirmed |
| Buzzwole | Ultra Swole Slam | uniteMove | cooldownReduction | 待ち時間を短縮する。 | unconfirmed |  | actionOrderOrCooldown | unconfirmed |
| Buzzwole | Ultra Swole Slam | uniteMove | shield | シールドを付与する。 | self |  | durationOrBuffDebuff | unconfirmed |
| Buzzwole | Ultra Swole Slam | uniteMove | hpReferenceDamage | 現在HP・最大HP・減少HPなどを参照する。 | enemy |  | hpState | unconfirmed |
| Buzzwole | Ultra Swole Slam | uniteMove | wildPokemonRule | 野生ポケモン限定の処理を持つ。 | unconfirmed |  | targetType | unconfirmed |
| Ceruledge | Attack - Charcadet | normalAttack | boostedAttackCycle | 通常攻撃回数により強化攻撃になる。 | unconfirmed |  | actionOrderOrCooldown | unconfirmed |
| Ceruledge | Take Down | move | attackSpeedUp | 通常攻撃速度を上げる。 | self | 3 | durationOrBuffDebuff | unconfirmed |
| Ceruledge | Revenant Rend | uniteMove | stun | 行動不能・スタンを付与する。 | unconfirmed | 0.5 | durationOrBuffDebuff | unconfirmed |
| Ceruledge | Revenant Rend | uniteMove | unstoppable | 妨害無効になる。 | self | 0.5 | durationOrBuffDebuff | unconfirmed |
| Ceruledge | Revenant Rend | uniteMove | damageReduction | 受けるダメージを軽減する。 | unconfirmed | 0.5 | durationOrBuffDebuff | unconfirmed |
| Ceruledge | Revenant Rend | uniteMove | cooldownReduction | 待ち時間を短縮する。 | unconfirmed |  | actionOrderOrCooldown | unconfirmed |
| Ceruledge | Revenant Rend | uniteMove | shield | シールドを付与する。 | self |  | durationOrBuffDebuff | unconfirmed |
| Ceruledge | Revenant Rend | uniteMove | stackOrMark | スタック、マーク、ゲージを扱う。 | enemy | 0.7 | selfStackOrGauge | unconfirmed |
| Chandelure | Infiltrator | passive | defenseStatChange | 防御・特防を変化させる。 | unconfirmed |  | durationOrBuffDebuff | unconfirmed |
| Chandelure | Infiltrator | passive | damageDealtChange | 与ダメージを変化させる。 | unconfirmed |  | durationOrBuffDebuff | unconfirmed |
| Chandelure | Infiltrator | passive | stackOrMark | スタック、マーク、ゲージを扱う。 | unconfirmed |  | selfStackOrGauge | unconfirmed |
| Chandelure | Attack | normalAttack | burn | やけどを付与する。 | enemy | 5 | durationOrBuffDebuff | unconfirmed |
| Chandelure | Attack | normalAttack | slow | 移動速度を下げる。 | enemy | 5 | durationOrBuffDebuff | unconfirmed |
| Chandelure | Ember | move | burn | やけどを付与する。 | unconfirmed | 2 | durationOrBuffDebuff | unconfirmed |
| Chandelure | Ember | move | slow | 移動速度を下げる。 | unconfirmed | 2 | durationOrBuffDebuff | unconfirmed |
| Chandelure | Ember | move | damageOverTime | 継続ダメージを与える。 | unconfirmed | 0.5 | durationOrBuffDebuff | unconfirmed |
| Chandelure | Ember | move | reuseOrSecondActivation | 再使用・派生・2段目を持つ。 | unconfirmed | 5 | actionOrderOrCooldown | unconfirmed |
| Chandelure | Night Shade | move | stun | 行動不能・スタンを付与する。 | unconfirmed | 1 | durationOrBuffDebuff | unconfirmed |
| Chandelure | Night Shade | move | stackOrMark | スタック、マーク、ゲージを扱う。 | unconfirmed | 1 | selfStackOrGauge | unconfirmed |
| Chandelure | Ignite Midnight | uniteMove | shield | シールドを付与する。 | self |  | durationOrBuffDebuff | unconfirmed |
| Chandelure | Ignite Midnight | uniteMove | reuseOrSecondActivation | 再使用・派生・2段目を持つ。 | unconfirmed |  | actionOrderOrCooldown | unconfirmed |
| Charizard | Blaze | passive | criticalRateUp | 急所率を上げる。 | self |  | durationOrBuffDebuff | unconfirmed |
| Charizard | Blaze | passive | hpThreshold | HP割合条件で発動する。 | self |  | hpState | unconfirmed |
| Charizard | Attack | normalAttack | burn | やけどを付与する。 | enemy |  | durationOrBuffDebuff | unconfirmed |
| Charizard | Attack | normalAttack | slow | 移動速度を下げる。 | unconfirmed |  | durationOrBuffDebuff | unconfirmed |
| Charizard | Attack | normalAttack | wildPokemonRule | 野生ポケモン限定の処理を持つ。 | unconfirmed |  | targetType | unconfirmed |
| Charizard | Attack | normalAttack | criticalGuaranteedOrDisabled | 急所確定または急所不可などを持つ。 | unconfirmed |  |  | unconfirmed |
| Charizard | Attack | normalAttack | lifestealOrDamageHeal | 与ダメージに応じて回復する。 | unconfirmed |  | hpState | unconfirmed |
| Charizard | Flame Burst | move | burn | やけどを付与する。 | enemy | 4 | durationOrBuffDebuff | unconfirmed |
| Charizard | Flame Burst | move | movementSpeedUp | 移動速度を上げる。 | self | 3 | durationOrBuffDebuff | unconfirmed |
| Charizard | Flame Burst | move | damageOverTime | 継続ダメージを与える。 | enemy | 4 | durationOrBuffDebuff | unconfirmed |
| Charizard | Flame Burst | move | formChange | フォーム・モード・構えを変化させる。 | enemy | 4 | formOrMode | unconfirmed |
| Charizard | Fire Spin | move | slow | 移動速度を下げる。 | enemy | 5 | durationOrBuffDebuff | unconfirmed |
| Charizard | Fire Spin | move | damageOverTime | 継続ダメージを与える。 | enemy | 5 | durationOrBuffDebuff | unconfirmed |
| Charizard | Fire Spin | move | fieldArea | フィールド・設置範囲を生成する。 | enemy | 5 | durationOrBuffDebuff | unconfirmed |
| Charizard | Fire Spin | move | formChange | フォーム・モード・構えを変化させる。 | enemy |  | formOrMode | unconfirmed |
| Charizard | Seismic Slam | uniteMove | burn | やけどを付与する。 | enemy | 1 | durationOrBuffDebuff | unconfirmed |
| Charizard | Seismic Slam | uniteMove | bind | バインドを付与する。 | enemy |  | durationOrBuffDebuff | unconfirmed |
| Charizard | Seismic Slam | uniteMove | unstoppable | 妨害無効になる。 | enemy |  | durationOrBuffDebuff | unconfirmed |
| Charizard | Seismic Slam | uniteMove | invincible | 無敵になる。 | enemy |  | durationOrBuffDebuff | unconfirmed |
| Charizard | Seismic Slam | uniteMove | hindranceResistance | 妨害耐性を得る。 | self | 10 | durationOrBuffDebuff | unconfirmed |
| Charizard | Seismic Slam | uniteMove | damageDealtChange | 与ダメージを変化させる。 | unconfirmed |  | durationOrBuffDebuff | unconfirmed |
| Charizard | Seismic Slam | uniteMove | healing | HPを回復する。 | self |  | hpState | unconfirmed |
| Charizard | Seismic Slam | uniteMove | shield | シールドを付与する。 | self |  | durationOrBuffDebuff | unconfirmed |
| Charizard | Seismic Slam | uniteMove | hpReferenceDamage | 現在HP・最大HP・減少HPなどを参照する。 | enemy |  | hpState | unconfirmed |
| Charizard | Seismic Slam | uniteMove | formChange | フォーム・モード・構えを変化させる。 | self | 10 | formOrMode | unconfirmed |
| Charizard | Seismic Slam | uniteMove | wallOrTerrain | 壁・地形・草むらなどと相互作用する。 | area |  |  | unconfirmed |
| Charizard | Seismic Slam | uniteMove | lifestealOrDamageHeal | 与ダメージに応じて回復する。 | unconfirmed |  | hpState | unconfirmed |
| Mega Charizard X | Solar Power | passive | burn | やけどを付与する。 | enemy |  | durationOrBuffDebuff | unconfirmed |
| Mega Charizard X | Solar Power | passive | hpReferenceDamage | 現在HP・最大HP・減少HPなどを参照する。 | enemy |  | hpState | unconfirmed |
| Mega Charizard X | Solar Power | passive | wallOrTerrain | 壁・地形・草むらなどと相互作用する。 | area |  |  | unconfirmed |
| Mega Charizard X | Attack | normalAttack | burn | やけどを付与する。 | enemy |  | durationOrBuffDebuff | unconfirmed |
| Mega Charizard X | Attack | normalAttack | slow | 移動速度を下げる。 | unconfirmed |  | durationOrBuffDebuff | unconfirmed |
| Mega Charizard X | Attack | normalAttack | criticalGuaranteedOrDisabled | 急所確定または急所不可などを持つ。 | unconfirmed |  |  | unconfirmed |
| Mega Charizard X | Attack | normalAttack | lifestealOrDamageHeal | 与ダメージに応じて回復する。 | unconfirmed |  | hpState | unconfirmed |
| Mega Charizard X | Flame Burst | move | burn | やけどを付与する。 | enemy | 4 | durationOrBuffDebuff | unconfirmed |
| Mega Charizard X | Flame Burst | move | movementSpeedUp | 移動速度を上げる。 | self | 3 | durationOrBuffDebuff | unconfirmed |
| Mega Charizard X | Flame Burst | move | damageOverTime | 継続ダメージを与える。 | enemy | 4 | durationOrBuffDebuff | unconfirmed |
| Mega Charizard X | Flame Burst | move | formChange | フォーム・モード・構えを変化させる。 | enemy | 4 | formOrMode | unconfirmed |
| Mega Charizard X | Fire Spin | move | slow | 移動速度を下げる。 | enemy | 5 | durationOrBuffDebuff | unconfirmed |
| Mega Charizard X | Fire Spin | move | damageOverTime | 継続ダメージを与える。 | enemy | 5 | durationOrBuffDebuff | unconfirmed |
| Mega Charizard X | Fire Spin | move | fieldArea | フィールド・設置範囲を生成する。 | enemy | 5 | durationOrBuffDebuff | unconfirmed |
| Mega Charizard X | Fire Spin | move | formChange | フォーム・モード・構えを変化させる。 | enemy |  | formOrMode | unconfirmed |
| Mega Charizard X | Seismic Slam | uniteMove | bind | バインドを付与する。 | enemy |  | durationOrBuffDebuff | unconfirmed |
| Mega Charizard X | Seismic Slam | uniteMove | unstoppable | 妨害無効になる。 | enemy |  | durationOrBuffDebuff | unconfirmed |
| Mega Charizard X | Seismic Slam | uniteMove | invincible | 無敵になる。 | enemy |  | durationOrBuffDebuff | unconfirmed |
| Mega Charizard X | Seismic Slam | uniteMove | shield | シールドを付与する。 | self |  | durationOrBuffDebuff | unconfirmed |
| Mega Charizard X | Seismic Slam | uniteMove | hpReferenceDamage | 現在HP・最大HP・減少HPなどを参照する。 | enemy |  | hpState | unconfirmed |
| Mega Charizard X | Seismic Slam | uniteMove | formChange | フォーム・モード・構えを変化させる。 | self |  | formOrMode | unconfirmed |
| Mega Charizard Y | Attack | normalAttack | burn | やけどを付与する。 | enemy |  | durationOrBuffDebuff | unconfirmed |
| Mega Charizard Y | Attack | normalAttack | slow | 移動速度を下げる。 | unconfirmed |  | durationOrBuffDebuff | unconfirmed |
| Mega Charizard Y | Attack | normalAttack | criticalGuaranteedOrDisabled | 急所確定または急所不可などを持つ。 | unconfirmed |  |  | unconfirmed |
| Mega Charizard Y | Attack | normalAttack | lifestealOrDamageHeal | 与ダメージに応じて回復する。 | unconfirmed |  | hpState | unconfirmed |
| Mega Charizard Y | Flame Burst | move | burn | やけどを付与する。 | enemy | 4 | durationOrBuffDebuff | unconfirmed |
| Mega Charizard Y | Flame Burst | move | movementSpeedUp | 移動速度を上げる。 | self | 3 | durationOrBuffDebuff | unconfirmed |
| Mega Charizard Y | Flame Burst | move | damageOverTime | 継続ダメージを与える。 | enemy | 4 | durationOrBuffDebuff | unconfirmed |
| Mega Charizard Y | Flame Burst | move | formChange | フォーム・モード・構えを変化させる。 | enemy | 4 | formOrMode | unconfirmed |
| Mega Charizard Y | Fire Spin | move | slow | 移動速度を下げる。 | enemy | 5 | durationOrBuffDebuff | unconfirmed |
| Mega Charizard Y | Fire Spin | move | damageOverTime | 継続ダメージを与える。 | enemy | 5 | durationOrBuffDebuff | unconfirmed |
| Mega Charizard Y | Fire Spin | move | fieldArea | フィールド・設置範囲を生成する。 | enemy | 5 | durationOrBuffDebuff | unconfirmed |
| Mega Charizard Y | Fire Spin | move | formChange | フォーム・モード・構えを変化させる。 | enemy |  | formOrMode | unconfirmed |
| Mega Charizard Y | Seismic Slam | uniteMove | burn | やけどを付与する。 | enemy | 1 | durationOrBuffDebuff | unconfirmed |
| Mega Charizard Y | Seismic Slam | uniteMove | bind | バインドを付与する。 | enemy |  | durationOrBuffDebuff | unconfirmed |
| Mega Charizard Y | Seismic Slam | uniteMove | unstoppable | 妨害無効になる。 | enemy |  | durationOrBuffDebuff | unconfirmed |
| Mega Charizard Y | Seismic Slam | uniteMove | invincible | 無敵になる。 | enemy |  | durationOrBuffDebuff | unconfirmed |
| Mega Charizard Y | Seismic Slam | uniteMove | hindranceResistance | 妨害耐性を得る。 | self | 15 | durationOrBuffDebuff | unconfirmed |
| Mega Charizard Y | Seismic Slam | uniteMove | damageDealtChange | 与ダメージを変化させる。 | unconfirmed |  | durationOrBuffDebuff | unconfirmed |
| Mega Charizard Y | Seismic Slam | uniteMove | healing | HPを回復する。 | self |  | hpState | unconfirmed |
| Mega Charizard Y | Seismic Slam | uniteMove | shield | シールドを付与する。 | self |  | durationOrBuffDebuff | unconfirmed |
| Mega Charizard Y | Seismic Slam | uniteMove | hpReferenceDamage | 現在HP・最大HP・減少HPなどを参照する。 | enemy |  | hpState | unconfirmed |
| Mega Charizard Y | Seismic Slam | uniteMove | formChange | フォーム・モード・構えを変化させる。 | self | 15 | formOrMode | unconfirmed |
| Mega Charizard Y | Seismic Slam | uniteMove | wallOrTerrain | 壁・地形・草むらなどと相互作用する。 | area |  |  | unconfirmed |
| Mega Charizard Y | Seismic Slam | uniteMove | lifestealOrDamageHeal | 与ダメージに応じて回復する。 | unconfirmed |  | hpState | unconfirmed |
| Cinderace | Blaze | passive | attackSpeedUp | 通常攻撃速度を上げる。 | self | 5 | durationOrBuffDebuff | unconfirmed |
| Cinderace | Blaze | passive | criticalRateUp | 急所率を上げる。 | self | 5 | durationOrBuffDebuff | unconfirmed |
| Cinderace | Blaze | passive | stackOrMark | スタック、マーク、ゲージを扱う。 | enemy | 5 | targetStackOrMark | unconfirmed |
| Cinderace | Blaze | passive | nextBoostedAttack | 次の通常攻撃または強化攻撃を準備する。 | unconfirmed |  | actionOrderOrCooldown | unconfirmed |
| Cinderace | Blaze | passive | boostedAttackCycle | 通常攻撃回数により強化攻撃になる。 | unconfirmed |  | actionOrderOrCooldown | unconfirmed |
| Cinderace | Blaze | passive | hpThreshold | HP割合条件で発動する。 | self | 5 | hpState | unconfirmed |
| Cinderace | Attack | normalAttack | nextBoostedAttack | 次の通常攻撃または強化攻撃を準備する。 | unconfirmed |  | actionOrderOrCooldown | unconfirmed |
| Cinderace | Attack | normalAttack | boostedAttackCycle | 通常攻撃回数により強化攻撃になる。 | unconfirmed |  | actionOrderOrCooldown | unconfirmed |
| Cinderace | Attack | normalAttack | wildPokemonRule | 野生ポケモン限定の処理を持つ。 | unconfirmed |  | targetType | unconfirmed |
| Cinderace | Ember | move | burn | やけどを付与する。 | enemy | 3 | durationOrBuffDebuff | unconfirmed |
| Cinderace | Ember | move | attackStatChange | 攻撃・特攻などのステータスを変化させる。 | enemy | 2 | durationOrBuffDebuff | unconfirmed |
| Cinderace | Ember | move | damageOverTime | 継続ダメージを与える。 | enemy | 3 | durationOrBuffDebuff | unconfirmed |
| Cinderace | Blazing Bicycle Kick | uniteMove | unstoppable | 妨害無効になる。 | self |  | durationOrBuffDebuff | unconfirmed |
| Cinderace | Blazing Bicycle Kick | uniteMove | movementSpeedUp | 移動速度を上げる。 | self | 5 | durationOrBuffDebuff | unconfirmed |
| Cinderace | Blazing Bicycle Kick | uniteMove | shield | シールドを付与する。 | self |  | durationOrBuffDebuff | unconfirmed |
| Cinderace | Blazing Bicycle Kick | uniteMove | hpReferenceDamage | 現在HP・最大HP・減少HPなどを参照する。 | enemy |  | hpState | unconfirmed |
| Clefable | Magic Guard | passive | shield | シールドを付与する。 | ally | 3 | durationOrBuffDebuff | unconfirmed |
| Clefable | Attack | normalAttack | boostedAttackCycle | 通常攻撃回数により強化攻撃になる。 | unconfirmed |  | actionOrderOrCooldown | unconfirmed |
| Clefable | Heal Pulse | move | healing | HPを回復する。 | ally |  | hpState | unconfirmed |
| Clefable | Disarming Voice | move | slow | 移動速度を下げる。 | enemy | 2 | durationOrBuffDebuff | unconfirmed |
| Clefable | Wonder Wish | uniteMove | cooldownReduction | 待ち時間を短縮する。 | unconfirmed |  | actionOrderOrCooldown | unconfirmed |
| Clefable | Wonder Wish | uniteMove | shield | シールドを付与する。 | self |  | durationOrBuffDebuff | unconfirmed |
| Clefable | Wonder Wish | uniteMove | formChange | フォーム・モード・構えを変化させる。 | self | 10 | formOrMode | unconfirmed |
| Comfey | Triage | passive | invincible | 無敵になる。 | self | 0.5 | durationOrBuffDebuff | unconfirmed |
| Comfey | Triage | passive | untargetableOrStealth | 対象指定されない、またはステルス状態になる。 | enemy | 1 | durationOrBuffDebuff | unconfirmed |
| Comfey | Triage | passive | movementSpeedUp | 移動速度を上げる。 | ally |  | durationOrBuffDebuff | unconfirmed |
| Comfey | Triage | passive | healing | HPを回復する。 | self |  | hpState | unconfirmed |
| Comfey | Triage | passive | shield | シールドを付与する。 | ally |  | durationOrBuffDebuff | unconfirmed |
| Comfey | Triage | passive | hpThreshold | HP割合条件で発動する。 | ally |  | hpState | unconfirmed |
| Comfey | Triage | passive | attachToAlly | 味方へ付着または移動する。 | enemy | 1 |  | unconfirmed |
| Comfey | Triage | passive | wallOrTerrain | 壁・地形・草むらなどと相互作用する。 | area | 5 |  | unconfirmed |
| Comfey | Attack | normalAttack | boostedAttackCycle | 通常攻撃回数により強化攻撃になる。 | unconfirmed |  | actionOrderOrCooldown | unconfirmed |
| Comfey | Synthesis | move | shield | シールドを付与する。 | ally |  | durationOrBuffDebuff | unconfirmed |
| Comfey | Synthesis | move | attachToAlly | 味方へ付着または移動する。 | ally |  |  | unconfirmed |
| Comfey | Vine Whip | move | slow | 移動速度を下げる。 | enemy | 2 | durationOrBuffDebuff | unconfirmed |
| Comfey | Vine Whip | move | attachToAlly | 味方へ付着または移動する。 | ally |  |  | unconfirmed |
| Comfey | Flowery Fields Forever | uniteMove | unstoppable | 妨害無効になる。 | self | 6 | durationOrBuffDebuff | unconfirmed |
| Comfey | Flowery Fields Forever | uniteMove | cooldownReduction | 待ち時間を短縮する。 | unconfirmed |  | actionOrderOrCooldown | unconfirmed |
| Comfey | Flowery Fields Forever | uniteMove | healing | HPを回復する。 | self |  | hpState | unconfirmed |
| Comfey | Flowery Fields Forever | uniteMove | shield | シールドを付与する。 | self |  | durationOrBuffDebuff | unconfirmed |
| Comfey | Flowery Fields Forever | uniteMove | damageOverTime | 継続ダメージを与える。 | ally | 0.5 | durationOrBuffDebuff | unconfirmed |
| Comfey | Flowery Fields Forever | uniteMove | attachToAlly | 味方へ付着または移動する。 | ally | 0.5 |  | unconfirmed |
| Comfey | Flowery Fields Forever | uniteMove | wallOrTerrain | 壁・地形・草むらなどと相互作用する。 | area | 6 |  | unconfirmed |
| Cramorant | Gulp Missile | passive | defenseStatChange | 防御・特防を変化させる。 | enemy |  | durationOrBuffDebuff | unconfirmed |
| Cramorant | Gulp Missile | passive | stackOrMark | スタック、マーク、ゲージを扱う。 | enemy |  | targetStackOrMark | unconfirmed |
| Cramorant | Gulp Missile | passive | formChange | フォーム・モード・構えを変化させる。 | self |  | formOrMode | unconfirmed |
| Cramorant | Attack | normalAttack | boostedAttackCycle | 通常攻撃回数により強化攻撃になる。 | unconfirmed |  | actionOrderOrCooldown | unconfirmed |
| Cramorant | Attack | normalAttack | formChange | フォーム・モード・構えを変化させる。 | self |  | formOrMode | unconfirmed |
| Cramorant | Whirlpool | move | slow | 移動速度を下げる。 | unconfirmed |  | durationOrBuffDebuff | unconfirmed |
| Cramorant | Whirlpool | move | damageDealtChange | 与ダメージを変化させる。 | unconfirmed |  | durationOrBuffDebuff | unconfirmed |
| Cramorant | Feather Dance | move | knockUp | 相手を打ち上げる。 | enemy | 4 |  | unconfirmed |
| Cramorant | Gatling Gulp Missile | uniteMove | unstoppable | 妨害無効になる。 | enemy | 6.5 | durationOrBuffDebuff | unconfirmed |
| Cramorant | Gatling Gulp Missile | uniteMove | shield | シールドを付与する。 | self |  | durationOrBuffDebuff | unconfirmed |
| Cramorant | Gatling Gulp Missile | uniteMove | wildPokemonRule | 野生ポケモン限定の処理を持つ。 | enemy | 6.5 | targetType | unconfirmed |
| Crustle | Sturdy | passive | defenseStatChange | 防御・特防を変化させる。 | unconfirmed |  | durationOrBuffDebuff | unconfirmed |
| Crustle | Sturdy | passive | stackOrMark | スタック、マーク、ゲージを扱う。 | unconfirmed |  | selfStackOrGauge | unconfirmed |
| Crustle | Sturdy | passive | hpReferenceDamage | 現在HP・最大HP・減少HPなどを参照する。 | unconfirmed |  | hpState | unconfirmed |
| Crustle | Attack | normalAttack | slow | 移動速度を下げる。 | enemy | 2 | durationOrBuffDebuff | unconfirmed |
| Crustle | Attack | normalAttack | boostedAttackCycle | 通常攻撃回数により強化攻撃になる。 | enemy | 2 | actionOrderOrCooldown | unconfirmed |
| Crustle | Rock Slide | move | stun | 行動不能・スタンを付与する。 | enemy | 1 | durationOrBuffDebuff | unconfirmed |
| Crustle | Fury Cutter | move | damageDealtChange | 与ダメージを変化させる。 | enemy |  | durationOrBuffDebuff | unconfirmed |
| Crustle | Fury Cutter | move | stackOrMark | スタック、マーク、ゲージを扱う。 | enemy | 9 | targetStackOrMark | unconfirmed |
| Crustle | Rubble Rouser | uniteMove | stun | 行動不能・スタンを付与する。 | enemy | 1 | durationOrBuffDebuff | unconfirmed |
| Crustle | Rubble Rouser | uniteMove | unstoppable | 妨害無効になる。 | enemy | 1 | durationOrBuffDebuff | unconfirmed |
| Crustle | Rubble Rouser | uniteMove | shield | シールドを付与する。 | enemy | 1 | durationOrBuffDebuff | unconfirmed |
| Crustle | Rubble Rouser | uniteMove | damageOverTime | 継続ダメージを与える。 | enemy |  | durationOrBuffDebuff | unconfirmed |
| Darkrai | Bad Dreams | passive | sleep | ねむりを付与する。 | enemy |  | durationOrBuffDebuff | unconfirmed |
| Darkrai | Bad Dreams | passive | damageOverTime | 継続ダメージを与える。 | enemy |  | durationOrBuffDebuff | unconfirmed |
| Darkrai | Bad Dreams | passive | stackOrMark | スタック、マーク、ゲージを扱う。 | enemy | 2.7 | targetStackOrMark | unconfirmed |
| Darkrai | Attack | normalAttack | sleep | ねむりを付与する。 | enemy |  | durationOrBuffDebuff | unconfirmed |
| Darkrai | Attack | normalAttack | formChange | フォーム・モード・構えを変化させる。 | enemy |  | formOrMode | unconfirmed |
| Darkrai | Hypnosis | move | sleep | ねむりを付与する。 | enemy | 1 | durationOrBuffDebuff | unconfirmed |
| Darkrai | Hypnosis | move | delayedDamage | 遅延または時間差でダメージを与える。 | enemy | 1 | durationOrBuffDebuff | unconfirmed |
| Darkrai | Calm Mind | move | defenseStatChange | 防御・特防を変化させる。 | unconfirmed | 3 | durationOrBuffDebuff | unconfirmed |
| Darkrai | Worst Nightmare | uniteMove | sleep | ねむりを付与する。 | enemy | 0.5 | durationOrBuffDebuff | unconfirmed |
| Darkrai | Worst Nightmare | uniteMove | unstoppable | 妨害無効になる。 | enemy |  | durationOrBuffDebuff | unconfirmed |
| Darkrai | Worst Nightmare | uniteMove | attackStatChange | 攻撃・特攻などのステータスを変化させる。 | enemy |  | durationOrBuffDebuff | unconfirmed |
| Darkrai | Worst Nightmare | uniteMove | shield | シールドを付与する。 | self |  | durationOrBuffDebuff | unconfirmed |
| Darkrai | Worst Nightmare | uniteMove | damageOverTime | 継続ダメージを与える。 | enemy | 0.5 | durationOrBuffDebuff | unconfirmed |
| Darkrai | Worst Nightmare | uniteMove | stackOrMark | スタック、マーク、ゲージを扱う。 | enemy | 0.5 | targetStackOrMark | unconfirmed |
| Darkrai | Worst Nightmare | uniteMove | hpReferenceDamage | 現在HP・最大HP・減少HPなどを参照する。 | enemy | 0.5 | hpState | unconfirmed |
| Decidueye | Long Reach | passive | damageDealtChange | 与ダメージを変化させる。 | enemy |  | durationOrBuffDebuff | unconfirmed |
| Decidueye | Attack | normalAttack | damageDealtChange | 与ダメージを変化させる。 | unconfirmed |  | durationOrBuffDebuff | unconfirmed |
| Decidueye | Attack | normalAttack | stackOrMark | スタック、マーク、ゲージを扱う。 | unconfirmed |  | selfStackOrGauge | unconfirmed |
| Decidueye | Leafage | move | attackSpeedUp | 通常攻撃速度を上げる。 | self | 3 | durationOrBuffDebuff | unconfirmed |
| Decidueye | Leafage | move | attackStatChange | 攻撃・特攻などのステータスを変化させる。 | unconfirmed | 3 | durationOrBuffDebuff | unconfirmed |
| Decidueye | Astonish | move | slow | 移動速度を下げる。 | enemy |  | durationOrBuffDebuff | unconfirmed |
| Decidueye | Nock Nock | uniteMove | immobilize | 移動不能を付与する。 | unconfirmed |  | durationOrBuffDebuff | unconfirmed |
| Decidueye | Nock Nock | uniteMove | unstoppable | 妨害無効になる。 | self |  | durationOrBuffDebuff | unconfirmed |
| Decidueye | Nock Nock | uniteMove | shield | シールドを付与する。 | self |  | durationOrBuffDebuff | unconfirmed |
| Decidueye | Nock Nock | uniteMove | hpThreshold | HP割合条件で発動する。 | enemy |  | hpState | unconfirmed |
| Decidueye | Nock Nock | uniteMove | hpReferenceDamage | 現在HP・最大HP・減少HPなどを参照する。 | enemy |  | hpState | unconfirmed |
| Delphox | Blaze | passive | hpReferenceDamage | 現在HP・最大HP・減少HPなどを参照する。 | enemy |  | hpState | unconfirmed |
| Delphox | Attack | normalAttack | boostedAttackCycle | 通常攻撃回数により強化攻撃になる。 | unconfirmed |  | actionOrderOrCooldown | unconfirmed |
| Delphox | Will-o-Wisp | move | slow | 移動速度を下げる。 | enemy | 2 | durationOrBuffDebuff | unconfirmed |
| Delphox | Fanciful Fireworks | uniteMove | cooldownReduction | 待ち時間を短縮する。 | unconfirmed |  | actionOrderOrCooldown | unconfirmed |
| Delphox | Fanciful Fireworks | uniteMove | shield | シールドを付与する。 | self |  | durationOrBuffDebuff | unconfirmed |
| Dhelmise | Steelworker | passive | shield | シールドを付与する。 | enemy | 5 | durationOrBuffDebuff | unconfirmed |
| Dhelmise | Steelworker | passive | stackOrMark | スタック、マーク、ゲージを扱う。 | unconfirmed |  | targetStackOrMark | unconfirmed |
| Dhelmise | Payback | move | slow | 移動速度を下げる。 | enemy | 2 | durationOrBuffDebuff | unconfirmed |
| Dhelmise | Bulldoze | move | knockUp | 相手を打ち上げる。 | enemy | 0.5 |  | unconfirmed |
| Dhelmise | Seaweed Snare | uniteMove | stun | 行動不能・スタンを付与する。 | enemy | 0.45 | durationOrBuffDebuff | unconfirmed |
| Dhelmise | Seaweed Snare | uniteMove | knockUp | 相手を打ち上げる。 | enemy | 0.45 |  | unconfirmed |
| Dhelmise | Seaweed Snare | uniteMove | knockBack | 相手を押し出す。 | enemy | 0.7 |  | unconfirmed |
| Dhelmise | Seaweed Snare | uniteMove | damageDealtChange | 与ダメージを変化させる。 | enemy | 0.5 | durationOrBuffDebuff | unconfirmed |
| Dhelmise | Seaweed Snare | uniteMove | cooldownReduction | 待ち時間を短縮する。 | unconfirmed |  | actionOrderOrCooldown | unconfirmed |
| Dhelmise | Seaweed Snare | uniteMove | healing | HPを回復する。 | enemy | 0.5 | hpState | unconfirmed |
| Dhelmise | Seaweed Snare | uniteMove | shield | シールドを付与する。 | self |  | durationOrBuffDebuff | unconfirmed |
| Dhelmise | Seaweed Snare | uniteMove | damageOverTime | 継続ダメージを与える。 | enemy | 0.5 | durationOrBuffDebuff | unconfirmed |
| Dodrio | Run Away | passive | slow | 移動速度を下げる。 | unconfirmed |  | durationOrBuffDebuff | unconfirmed |
| Dodrio | Run Away | passive | movementSpeedUp | 移動速度を上げる。 | enemy |  | durationOrBuffDebuff | unconfirmed |
| Dodrio | Run Away | passive | stackOrMark | スタック、マーク、ゲージを扱う。 | unconfirmed |  | targetStackOrMark | unconfirmed |
| Dodrio | Attack | normalAttack | stackOrMark | スタック、マーク、ゲージを扱う。 | enemy | 1 | targetStackOrMark | unconfirmed |
| Dodrio | Attack | normalAttack | boostedAttackCycle | 通常攻撃回数により強化攻撃になる。 | unconfirmed |  | actionOrderOrCooldown | unconfirmed |
| Dodrio | Peck | move | stackOrMark | スタック、マーク、ゲージを扱う。 | unconfirmed |  | selfStackOrGauge | unconfirmed |
| Dodrio | Quick Attack | move | cooldownReduction | 待ち時間を短縮する。 | enemy | 1.5 | actionOrderOrCooldown | unconfirmed |
| Dodrio | Triple Trample | uniteMove | knockUp | 相手を打ち上げる。 | enemy | 1 |  | unconfirmed |
| Dodrio | Triple Trample | uniteMove | unstoppable | 妨害無効になる。 | self |  | durationOrBuffDebuff | unconfirmed |
| Dodrio | Triple Trample | uniteMove | attackStatChange | 攻撃・特攻などのステータスを変化させる。 | enemy | 1 | durationOrBuffDebuff | unconfirmed |
| Dodrio | Triple Trample | uniteMove | damageDealtChange | 与ダメージを変化させる。 | unconfirmed |  | durationOrBuffDebuff | unconfirmed |
| Dodrio | Triple Trample | uniteMove | shield | シールドを付与する。 | self | 3 | durationOrBuffDebuff | unconfirmed |
| Dodrio | Triple Trample | uniteMove | stackOrMark | スタック、マーク、ゲージを扱う。 | unconfirmed | 3 | targetStackOrMark | unconfirmed |
| Dragapult | Clear Body | passive | pull | 相手を引き寄せる。 | unconfirmed |  |  | unconfirmed |
| Dragapult | Attack | normalAttack | damageOverTime | 継続ダメージを与える。 | unconfirmed | 3 | durationOrBuffDebuff | unconfirmed |
| Dragapult | Attack | normalAttack | stackOrMark | スタック、マーク、ゲージを扱う。 | enemy |  | targetStackOrMark | unconfirmed |
| Dragapult | Attack | normalAttack | formChange | フォーム・モード・構えを変化させる。 | self |  | formOrMode | unconfirmed |
| Dragapult | Astonish | move | slow | 移動速度を下げる。 | enemy |  | durationOrBuffDebuff | unconfirmed |
| Dragapult | Astonish | move | formChange | フォーム・モード・構えを変化させる。 | enemy | 2 | formOrMode | unconfirmed |
| Dragapult | Quick Attack | move | attackSpeedUp | 通常攻撃速度を上げる。 | self | 2 | durationOrBuffDebuff | unconfirmed |
| Dragapult | Dreep and Destroy | uniteMove | shield | シールドを付与する。 | self | 3 | durationOrBuffDebuff | unconfirmed |
| Dragapult | Dreep and Destroy | uniteMove | hpReferenceDamage | 現在HP・最大HP・減少HPなどを参照する。 | enemy |  | hpState | unconfirmed |
| Dragapult | Dreep and Destroy | uniteMove | wildPokemonRule | 野生ポケモン限定の処理を持つ。 | unconfirmed |  | targetType | unconfirmed |
| Dragonite | Marvel Scale | passive | pull | 相手を引き寄せる。 | unconfirmed | 1.5 |  | unconfirmed |
| Dragonite | Marvel Scale | passive | defenseStatChange | 防御・特防を変化させる。 | unconfirmed | 1.5 | durationOrBuffDebuff | unconfirmed |
| Dragonite | Attack - Dratini | normalAttack | boostedAttackCycle | 通常攻撃回数により強化攻撃になる。 | unconfirmed | 1 | actionOrderOrCooldown | unconfirmed |
| Dragonite | Twister | move | slow | 移動速度を下げる。 | enemy | 1 | durationOrBuffDebuff | unconfirmed |
| Dragonite | Dragon Breath | move | pull | 相手を引き寄せる。 | enemy |  |  | unconfirmed |
| Dragonite | Dragon Breath | move | boostedAttackCycle | 通常攻撃回数により強化攻撃になる。 | enemy |  | actionOrderOrCooldown | unconfirmed |
| Dragonite | Draco Impact | uniteMove | knockUp | 相手を打ち上げる。 | enemy | 2 |  | unconfirmed |
| Dragonite | Draco Impact | uniteMove | pull | 相手を引き寄せる。 | unconfirmed |  |  | unconfirmed |
| Dragonite | Draco Impact | uniteMove | unstoppable | 妨害無効になる。 | self |  | durationOrBuffDebuff | unconfirmed |
| Dragonite | Draco Impact | uniteMove | untargetableOrStealth | 対象指定されない、またはステルス状態になる。 | enemy | 2 | durationOrBuffDebuff | unconfirmed |
| Dragonite | Draco Impact | uniteMove | shield | シールドを付与する。 | self |  | durationOrBuffDebuff | unconfirmed |
| Dragonite | Draco Impact | uniteMove | stackOrMark | スタック、マーク、ゲージを扱う。 | unconfirmed |  | targetStackOrMark | unconfirmed |
| Dragonite | Draco Impact | uniteMove | formChange | フォーム・モード・構えを変化させる。 | self |  | formOrMode | unconfirmed |
| Duraludon | Heavy Metal | passive | knockUp | 相手を打ち上げる。 | unconfirmed |  |  | unconfirmed |
| Duraludon | Heavy Metal | passive | knockBack | 相手を押し出す。 | unconfirmed |  |  | unconfirmed |
| Duraludon | Attack | normalAttack | boostedAttackCycle | 通常攻撃回数により強化攻撃になる。 | enemy |  | actionOrderOrCooldown | unconfirmed |
| Duraludon | Laser Focus | move | damageReduction | 受けるダメージを軽減する。 | unconfirmed | 6 | durationOrBuffDebuff | unconfirmed |
| Duraludon | Metal Claw | move | slow | 移動速度を下げる。 | enemy | 2 | durationOrBuffDebuff | unconfirmed |
| Duraludon | Metal Claw | move | nextBoostedAttack | 次の通常攻撃または強化攻撃を準備する。 | unconfirmed |  | actionOrderOrCooldown | unconfirmed |
| Duraludon | Metal Claw | move | boostedAttackCycle | 通常攻撃回数により強化攻撃になる。 | unconfirmed |  | actionOrderOrCooldown | unconfirmed |
| Duraludon | Revolving Ruin | uniteMove | burn | やけどを付与する。 | unconfirmed | 10 | durationOrBuffDebuff | unconfirmed |
| Duraludon | Revolving Ruin | uniteMove | knockBack | 相手を押し出す。 | enemy | 0.5 |  | unconfirmed |
| Duraludon | Revolving Ruin | uniteMove | unstoppable | 妨害無効になる。 | self |  | durationOrBuffDebuff | unconfirmed |
| Duraludon | Revolving Ruin | uniteMove | shield | シールドを付与する。 | enemy | 8 | durationOrBuffDebuff | unconfirmed |
| Duraludon | Revolving Ruin | uniteMove | damageOverTime | 継続ダメージを与える。 | enemy | 0.5 | durationOrBuffDebuff | unconfirmed |
| Duraludon | Revolving Ruin | uniteMove | stackOrMark | スタック、マーク、ゲージを扱う。 | enemy |  | targetStackOrMark | unconfirmed |
| Eldegoss | Cotton Down | passive | slow | 移動速度を下げる。 | enemy | 1.5 | durationOrBuffDebuff | unconfirmed |
| Eldegoss | Cotton Down | passive | healing | HPを回復する。 | self |  | hpState | unconfirmed |
| Eldegoss | Cotton Down | passive | hpReferenceDamage | 現在HP・最大HP・減少HPなどを参照する。 | unconfirmed | 1.5 | hpState | unconfirmed |
| Eldegoss | Attack | normalAttack | attackStatChange | 攻撃・特攻などのステータスを変化させる。 | ally | 3 | durationOrBuffDebuff | unconfirmed |
| Eldegoss | Attack | normalAttack | boostedAttackCycle | 通常攻撃回数により強化攻撃になる。 | enemy | 3 | actionOrderOrCooldown | unconfirmed |
| Eldegoss | Attack | normalAttack | attachToAlly | 味方へ付着または移動する。 | enemy | 3 |  | unconfirmed |
| Eldegoss | Leafage | move | slow | 移動速度を下げる。 | enemy | 2 | durationOrBuffDebuff | unconfirmed |
| Eldegoss | Leafage | move | formChange | フォーム・モード・構えを変化させる。 | enemy | 2 | formOrMode | unconfirmed |
| Eldegoss | Synthesis | move | healing | HPを回復する。 | ally |  | hpState | unconfirmed |
| Eldegoss | Synthesis | move | attachToAlly | 味方へ付着または移動する。 | ally |  |  | unconfirmed |
| Eldegoss | Cotton Cloud Crash | uniteMove | invincible | 無敵になる。 | self | 3 | durationOrBuffDebuff | unconfirmed |
| Eldegoss | Cotton Cloud Crash | uniteMove | shield | シールドを付与する。 | self |  | durationOrBuffDebuff | unconfirmed |
| Eldegoss | Cotton Cloud Crash | uniteMove | reuseOrSecondActivation | 再使用・派生・2段目を持つ。 | ally | 3 | actionOrderOrCooldown | unconfirmed |
| Eldegoss | Cotton Cloud Crash | uniteMove | attachToAlly | 味方へ付着または移動する。 | ally | 3 |  | unconfirmed |
| Eldegoss | Cotton Cloud Crash | uniteMove | wallOrTerrain | 壁・地形・草むらなどと相互作用する。 | area | 3 |  | unconfirmed |
| Empoleon | Torrent | passive | stackOrMark | スタック、マーク、ゲージを扱う。 | enemy |  | targetStackOrMark | unconfirmed |
| Empoleon | Attack | normalAttack | damageDealtChange | 与ダメージを変化させる。 | unconfirmed |  | durationOrBuffDebuff | unconfirmed |
| Empoleon | Attack | normalAttack | healing | HPを回復する。 | self |  | hpState | unconfirmed |
| Empoleon | Attack | normalAttack | stackOrMark | スタック、マーク、ゲージを扱う。 | unconfirmed |  | selfStackOrGauge | unconfirmed |
| Empoleon | Attack | normalAttack | boostedAttackCycle | 通常攻撃回数により強化攻撃になる。 | unconfirmed |  | actionOrderOrCooldown | unconfirmed |
| Empoleon | Attack | normalAttack | lifestealOrDamageHeal | 与ダメージに応じて回復する。 | unconfirmed |  | hpState | unconfirmed |
| Empoleon | Water Gun | move | stackOrMark | スタック、マーク、ゲージを扱う。 | unconfirmed |  | targetStackOrMark | unconfirmed |
| Empoleon | Peck | move | slow | 移動速度を下げる。 | unconfirmed | 2 | durationOrBuffDebuff | unconfirmed |
| Empoleon | Peck | move | stackOrMark | スタック、マーク、ゲージを扱う。 | unconfirmed |  | targetStackOrMark | unconfirmed |
| Empoleon | Sovereign Slide | uniteMove | knockUp | 相手を打ち上げる。 | enemy | 1 |  | unconfirmed |
| Empoleon | Sovereign Slide | uniteMove | slow | 移動速度を下げる。 | enemy | 7 | durationOrBuffDebuff | unconfirmed |
| Empoleon | Sovereign Slide | uniteMove | unstoppable | 妨害無効になる。 | self |  | durationOrBuffDebuff | unconfirmed |
| Empoleon | Sovereign Slide | uniteMove | cooldownReduction | 待ち時間を短縮する。 | unconfirmed |  | actionOrderOrCooldown | unconfirmed |
| Empoleon | Sovereign Slide | uniteMove | shield | シールドを付与する。 | self |  | durationOrBuffDebuff | unconfirmed |
| Empoleon | Sovereign Slide | uniteMove | stackOrMark | スタック、マーク、ゲージを扱う。 | unconfirmed |  | targetStackOrMark | unconfirmed |
| Empoleon | Sovereign Slide | uniteMove | formChange | フォーム・モード・構えを変化させる。 | enemy | 1 | formOrMode | unconfirmed |
| Espeon | Anticipation | passive | slow | 移動速度を下げる。 | unconfirmed |  | durationOrBuffDebuff | unconfirmed |
| Espeon | Attack - Eevee | normalAttack | boostedAttackCycle | 通常攻撃回数により強化攻撃になる。 | unconfirmed |  | actionOrderOrCooldown | unconfirmed |
| Espeon | Growl | move | slow | 移動速度を下げる。 | unconfirmed | 2 | durationOrBuffDebuff | unconfirmed |
| Espeon | Psychic Solare | uniteMove | knockUp | 相手を打ち上げる。 | enemy |  |  | unconfirmed |
| Espeon | Psychic Solare | uniteMove | knockBack | 相手を押し出す。 | enemy |  |  | unconfirmed |
| Espeon | Psychic Solare | uniteMove | unstoppable | 妨害無効になる。 | self |  | durationOrBuffDebuff | unconfirmed |
| Espeon | Psychic Solare | uniteMove | cooldownReduction | 待ち時間を短縮する。 | unconfirmed |  | actionOrderOrCooldown | unconfirmed |
| Espeon | Psychic Solare | uniteMove | shield | シールドを付与する。 | self |  | durationOrBuffDebuff | unconfirmed |
| Espeon | Psychic Solare | uniteMove | delayedDamage | 遅延または時間差でダメージを与える。 | enemy |  | durationOrBuffDebuff | unconfirmed |
| Falinks | Battle Armor | passive | damageReduction | 受けるダメージを軽減する。 | unconfirmed |  | durationOrBuffDebuff | unconfirmed |
| Falinks | Battle Armor | passive | attachToAlly | 味方へ付着または移動する。 | unconfirmed |  |  | unconfirmed |
| Falinks | Attack | normalAttack | slow | 移動速度を下げる。 | enemy | 1 | durationOrBuffDebuff | unconfirmed |
| Falinks | Attack | normalAttack | boostedAttackCycle | 通常攻撃回数により強化攻撃になる。 | unconfirmed |  | actionOrderOrCooldown | unconfirmed |
| Falinks | Tackle | move | nextBoostedAttack | 次の通常攻撃または強化攻撃を準備する。 | unconfirmed |  | actionOrderOrCooldown | unconfirmed |
| Falinks | Tackle | move | boostedAttackCycle | 通常攻撃回数により強化攻撃になる。 | unconfirmed |  | actionOrderOrCooldown | unconfirmed |
| Falinks | Bulk Up | move | defenseStatChange | 防御・特防を変化させる。 | unconfirmed | 3 | durationOrBuffDebuff | unconfirmed |
| Falinks | Dust Devil Formation | uniteMove | slow | 移動速度を下げる。 | enemy | 5 | durationOrBuffDebuff | unconfirmed |
| Falinks | Dust Devil Formation | uniteMove | unstoppable | 妨害無効になる。 | self | 0.25 | durationOrBuffDebuff | unconfirmed |
| Falinks | Dust Devil Formation | uniteMove | damageReduction | 受けるダメージを軽減する。 | unconfirmed |  | durationOrBuffDebuff | unconfirmed |
| Falinks | Dust Devil Formation | uniteMove | shield | シールドを付与する。 | self |  | durationOrBuffDebuff | unconfirmed |
| Falinks | Dust Devil Formation | uniteMove | stackOrMark | スタック、マーク、ゲージを扱う。 | enemy |  | targetStackOrMark | unconfirmed |
| Falinks | Dust Devil Formation | uniteMove | formChange | フォーム・モード・構えを変化させる。 | self | 0.25 | formOrMode | unconfirmed |
| Feraligatr | Bite | move | slow | 移動速度を下げる。 | enemy | 5 | durationOrBuffDebuff | unconfirmed |
| Feraligatr | Scratch | move | stun | 行動不能・スタンを付与する。 | enemy | 0.6 | durationOrBuffDebuff | unconfirmed |
| Feraligatr | Big Jaw Bite | uniteMove | unstoppable | 妨害無効になる。 | self | 15 | durationOrBuffDebuff | unconfirmed |
| Feraligatr | Big Jaw Bite | uniteMove | damageDealtChange | 与ダメージを変化させる。 | unconfirmed |  | durationOrBuffDebuff | unconfirmed |
| Feraligatr | Big Jaw Bite | uniteMove | shield | シールドを付与する。 | self |  | durationOrBuffDebuff | unconfirmed |
| Feraligatr | Big Jaw Bite | uniteMove | stackOrMark | スタック、マーク、ゲージを扱う。 | unconfirmed |  | targetStackOrMark | unconfirmed |
| Feraligatr | Big Jaw Bite | uniteMove | reuseOrSecondActivation | 再使用・派生・2段目を持つ。 | enemy |  | actionOrderOrCooldown | unconfirmed |
| Garchomp | Rough Skin | passive | damageReduction | 受けるダメージを軽減する。 | enemy | 0.6 | durationOrBuffDebuff | unconfirmed |
| Garchomp | Attack | normalAttack | attackSpeedUp | 通常攻撃速度を上げる。 | enemy |  | durationOrBuffDebuff | unconfirmed |
| Garchomp | Attack | normalAttack | stackOrMark | スタック、マーク、ゲージを扱う。 | unconfirmed |  | targetStackOrMark | unconfirmed |
| Garchomp | Attack | normalAttack | boostedAttackCycle | 通常攻撃回数により強化攻撃になる。 | unconfirmed |  | actionOrderOrCooldown | unconfirmed |
| Garchomp | Attack | normalAttack | hpReferenceDamage | 現在HP・最大HP・減少HPなどを参照する。 | enemy |  | hpState | unconfirmed |
| Garchomp | Attack | normalAttack | wildPokemonRule | 野生ポケモン限定の処理を持つ。 | unconfirmed |  | targetType | unconfirmed |
| Garchomp | Attack | normalAttack | lifestealOrDamageHeal | 与ダメージに応じて回復する。 | enemy |  | hpState | unconfirmed |
| Garchomp | Sand Attack | move | slow | 移動速度を下げる。 | enemy | 2 | durationOrBuffDebuff | unconfirmed |
| Garchomp | Sand Attack | move | movementSpeedUp | 移動速度を上げる。 | self |  | durationOrBuffDebuff | unconfirmed |
| Garchomp | Sand Attack | move | attackSpeedUp | 通常攻撃速度を上げる。 | self | 2 | durationOrBuffDebuff | unconfirmed |
| Garchomp | Livid Outrage | uniteMove | stun | 行動不能・スタンを付与する。 | enemy |  | durationOrBuffDebuff | unconfirmed |
| Garchomp | Livid Outrage | uniteMove | knockUp | 相手を打ち上げる。 | enemy | 1 |  | unconfirmed |
| Garchomp | Livid Outrage | uniteMove | slow | 移動速度を下げる。 | enemy | 1 | durationOrBuffDebuff | unconfirmed |
| Garchomp | Livid Outrage | uniteMove | unstoppable | 妨害無効になる。 | self | 5 | durationOrBuffDebuff | unconfirmed |
| Garchomp | Livid Outrage | uniteMove | damageReduction | 受けるダメージを軽減する。 | unconfirmed | 5 | durationOrBuffDebuff | unconfirmed |
| Garchomp | Livid Outrage | uniteMove | shield | シールドを付与する。 | self |  | durationOrBuffDebuff | unconfirmed |
| Gardevoir | Attack | normalAttack | defenseStatChange | 防御・特防を変化させる。 | unconfirmed |  | durationOrBuffDebuff | unconfirmed |
| Gardevoir | Attack | normalAttack | boostedAttackCycle | 通常攻撃回数により強化攻撃になる。 | enemy |  | actionOrderOrCooldown | unconfirmed |
| Gardevoir | Confusion | move | slow | 移動速度を下げる。 | enemy | 1 | durationOrBuffDebuff | unconfirmed |
| Gardevoir | Teleport | move | damageDealtChange | 与ダメージを変化させる。 | unconfirmed |  | durationOrBuffDebuff | unconfirmed |
| Gardevoir | Fairy Singularity | uniteMove | knockBack | 相手を押し出す。 | enemy |  |  | unconfirmed |
| Gardevoir | Fairy Singularity | uniteMove | pull | 相手を引き寄せる。 | enemy |  |  | unconfirmed |
| Gardevoir | Fairy Singularity | uniteMove | damageDealtChange | 与ダメージを変化させる。 | enemy |  | durationOrBuffDebuff | unconfirmed |
| Gardevoir | Fairy Singularity | uniteMove | cooldownReduction | 待ち時間を短縮する。 | unconfirmed |  | actionOrderOrCooldown | unconfirmed |
| Gardevoir | Fairy Singularity | uniteMove | shield | シールドを付与する。 | self |  | durationOrBuffDebuff | unconfirmed |
| Gengar | Levitate | passive | movementSpeedUp | 移動速度を上げる。 | self | 5 | durationOrBuffDebuff | unconfirmed |
| Gengar | Attack | normalAttack | boostedAttackCycle | 通常攻撃回数により強化攻撃になる。 | enemy |  | actionOrderOrCooldown | unconfirmed |
| Gengar | Will-o-Wisp | move | burn | やけどを付与する。 | enemy | 4 | durationOrBuffDebuff | unconfirmed |
| Gengar | Will-o-Wisp | move | attackStatChange | 攻撃・特攻などのステータスを変化させる。 | enemy | 4 | durationOrBuffDebuff | unconfirmed |
| Gengar | Will-o-Wisp | move | damageOverTime | 継続ダメージを与える。 | unconfirmed | 0.5 | durationOrBuffDebuff | unconfirmed |
| Gengar | Lick | move | pull | 相手を引き寄せる。 | enemy |  |  | unconfirmed |
| Gengar | Phantom Ambush | uniteMove | slow | 移動速度を下げる。 | enemy | 1.5 | durationOrBuffDebuff | unconfirmed |
| Gengar | Phantom Ambush | uniteMove | unstoppable | 妨害無効になる。 | self | 7 | durationOrBuffDebuff | unconfirmed |
| Gengar | Phantom Ambush | uniteMove | invincible | 無敵になる。 | enemy | 1.5 | durationOrBuffDebuff | unconfirmed |
| Gengar | Phantom Ambush | uniteMove | shield | シールドを付与する。 | self |  | durationOrBuffDebuff | unconfirmed |
| Gengar | Phantom Ambush | uniteMove | reuseOrSecondActivation | 再使用・派生・2段目を持つ。 | enemy | 1.5 | actionOrderOrCooldown | unconfirmed |
| Glaceon | Run Away | passive | invincible | 無敵になる。 | self | 1 | durationOrBuffDebuff | unconfirmed |
| Glaceon | Attack | normalAttack | boostedAttackCycle | 通常攻撃回数により強化攻撃になる。 | unconfirmed |  | actionOrderOrCooldown | unconfirmed |
| Glaceon | Tail Whip | move | defenseStatChange | 防御・特防を変化させる。 | enemy |  | durationOrBuffDebuff | unconfirmed |
| Glaceon | Tail Whip | move | nextBoostedAttack | 次の通常攻撃または強化攻撃を準備する。 | unconfirmed |  | actionOrderOrCooldown | unconfirmed |
| Glaceon | Tail Whip | move | boostedAttackCycle | 通常攻撃回数により強化攻撃になる。 | unconfirmed |  | actionOrderOrCooldown | unconfirmed |
| Glaceon | Glacial Stage | uniteMove | movementSpeedUp | 移動速度を上げる。 | self | 6 | durationOrBuffDebuff | unconfirmed |
| Glaceon | Glacial Stage | uniteMove | shield | シールドを付与する。 | self |  | durationOrBuffDebuff | unconfirmed |
| Goodra | Gooey | passive | slow | 移動速度を下げる。 | unconfirmed | 6 | durationOrBuffDebuff | unconfirmed |
| Goodra | Gooey | passive | healing | HPを回復する。 | ally | 3 | hpState | unconfirmed |
| Goodra | Gooey | passive | stackOrMark | スタック、マーク、ゲージを扱う。 | unconfirmed | 6 | targetStackOrMark | unconfirmed |
| Goodra | Gooey | passive | wildPokemonRule | 野生ポケモン限定の処理を持つ。 | enemy |  | targetType | unconfirmed |
| Goodra | Gooey | passive | wallOrTerrain | 壁・地形・草むらなどと相互作用する。 | ally | 3 |  | unconfirmed |
| Goodra | Attack | normalAttack | slow | 移動速度を下げる。 | unconfirmed | 0.5 | durationOrBuffDebuff | unconfirmed |
| Goodra | Attack | normalAttack | boostedAttackCycle | 通常攻撃回数により強化攻撃になる。 | unconfirmed |  | actionOrderOrCooldown | unconfirmed |
| Goodra | Attack | normalAttack | formChange | フォーム・モード・構えを変化させる。 | self | 0.5 | formOrMode | unconfirmed |
| Goodra | Bubble | move | slow | 移動速度を下げる。 | enemy | 2 | durationOrBuffDebuff | unconfirmed |
| Goodra | Bubble | move | shield | シールドを付与する。 | self | 3 | durationOrBuffDebuff | unconfirmed |
| Goodra | Bubble | move | reuseOrSecondActivation | 再使用・派生・2段目を持つ。 | enemy | 2 | actionOrderOrCooldown | unconfirmed |
| Goodra | Tackle | move | knockUp | 相手を打ち上げる。 | unconfirmed |  |  | unconfirmed |
| Goodra | Tackle | move | formChange | フォーム・モード・構えを変化させる。 | self |  | formOrMode | unconfirmed |
| Goodra | Right as Rain | uniteMove | shield | シールドを付与する。 | self |  | durationOrBuffDebuff | unconfirmed |
| Greedent | Cheek Pouch | passive | healing | HPを回復する。 | self |  | hpState | unconfirmed |
| Greedent | Attack | normalAttack | boostedAttackCycle | 通常攻撃回数により強化攻撃になる。 | unconfirmed |  | actionOrderOrCooldown | unconfirmed |
| Greedent | Tackle | move | slow | 移動速度を下げる。 | enemy | 1 | durationOrBuffDebuff | unconfirmed |
| Greedent | Defense Curl | move | shield | シールドを付与する。 | self | 3 | durationOrBuffDebuff | unconfirmed |
| Greedent | Berry Belly Flop | uniteMove | knockUp | 相手を打ち上げる。 | enemy | 1 |  | unconfirmed |
| Greedent | Berry Belly Flop | uniteMove | unstoppable | 妨害無効になる。 | self |  | durationOrBuffDebuff | unconfirmed |
| Greedent | Berry Belly Flop | uniteMove | cooldownReduction | 待ち時間を短縮する。 | unconfirmed | 8 | actionOrderOrCooldown | unconfirmed |
| Greedent | Berry Belly Flop | uniteMove | cooldownReset | 待ち時間をリセットする。 | unconfirmed | 8 | actionOrderOrCooldown | unconfirmed |
| Greedent | Berry Belly Flop | uniteMove | healing | HPを回復する。 | enemy |  | hpState | unconfirmed |
| Greedent | Berry Belly Flop | uniteMove | shield | シールドを付与する。 | self |  | durationOrBuffDebuff | unconfirmed |
| Greninja | Torrent | passive | hpThreshold | HP割合条件で発動する。 | self |  | hpState | unconfirmed |
| Greninja | Attack | normalAttack | slow | 移動速度を下げる。 | enemy |  | durationOrBuffDebuff | unconfirmed |
| Greninja | Attack | normalAttack | damageDealtChange | 与ダメージを変化させる。 | enemy |  | durationOrBuffDebuff | unconfirmed |
| Greninja | Attack | normalAttack | boostedAttackCycle | 通常攻撃回数により強化攻撃になる。 | unconfirmed |  | actionOrderOrCooldown | unconfirmed |
| Greninja | Attack | normalAttack | hpReferenceDamage | 現在HP・最大HP・減少HPなどを参照する。 | enemy |  | hpState | unconfirmed |
| Greninja | Attack | normalAttack | wildPokemonRule | 野生ポケモン限定の処理を持つ。 | unconfirmed |  | targetType | unconfirmed |
| Greninja | Bubble | move | slow | 移動速度を下げる。 | enemy | 1 | durationOrBuffDebuff | unconfirmed |
| Greninja | Substitute | move | invincible | 無敵になる。 | self | 3 | durationOrBuffDebuff | unconfirmed |
| Greninja | Substitute | move | defenseStatChange | 防御・特防を変化させる。 | unconfirmed | 3 | durationOrBuffDebuff | unconfirmed |
| Greninja | Substitute | move | cloneOrDecoy | 分身、コピー、身代わりなどを生成する。 | unconfirmed | 3 | durationOrBuffDebuff | unconfirmed |
| Greninja | Waterburst Shuriken | uniteMove | knockUp | 相手を打ち上げる。 | enemy | 2 |  | unconfirmed |
| Greninja | Waterburst Shuriken | uniteMove | slow | 移動速度を下げる。 | enemy |  | durationOrBuffDebuff | unconfirmed |
| Greninja | Waterburst Shuriken | uniteMove | unstoppable | 妨害無効になる。 | self | 2 | durationOrBuffDebuff | unconfirmed |
| Greninja | Waterburst Shuriken | uniteMove | shield | シールドを付与する。 | self |  | durationOrBuffDebuff | unconfirmed |
| Gyarados | Rattled | passive | movementSpeedUp | 移動速度を上げる。 | self | 3 | durationOrBuffDebuff | unconfirmed |
| Gyarados | Rattled | passive | stackOrMark | スタック、マーク、ゲージを扱う。 | enemy |  | targetStackOrMark | unconfirmed |
| Gyarados | Rattled | passive | koAssistTrigger | KOまたはアシストで発動する。 | enemy |  | koAssistEvent | unconfirmed |
| Gyarados | Dragon Current | uniteMove | knockUp | 相手を打ち上げる。 | enemy | 1 |  | unconfirmed |
| Gyarados | Dragon Current | uniteMove | slow | 移動速度を下げる。 | enemy | 4 | durationOrBuffDebuff | unconfirmed |
| Gyarados | Dragon Current | uniteMove | untargetableOrStealth | 対象指定されない、またはステルス状態になる。 | enemy | 4 | durationOrBuffDebuff | unconfirmed |
| Gyarados | Dragon Current | uniteMove | cooldownReduction | 待ち時間を短縮する。 | unconfirmed |  | actionOrderOrCooldown | unconfirmed |
| Gyarados | Dragon Current | uniteMove | shield | シールドを付与する。 | self |  | durationOrBuffDebuff | unconfirmed |
| Gyarados | Dragon Current | uniteMove | damageOverTime | 継続ダメージを与える。 | enemy | 4 | durationOrBuffDebuff | unconfirmed |
| Mega Gyarados | Swift Swim | passive | stackOrMark | スタック、マーク、ゲージを扱う。 | enemy |  | targetStackOrMark | unconfirmed |
| Mega Gyarados | Swift Swim | passive | koAssistTrigger | KOまたはアシストで発動する。 | enemy |  | koAssistEvent | unconfirmed |
| Mega Gyarados | Attack | normalAttack | boostedAttackCycle | 通常攻撃回数により強化攻撃になる。 | unconfirmed |  | actionOrderOrCooldown | unconfirmed |
| Mega Gyarados | Attack | normalAttack | formChange | フォーム・モード・構えを変化させる。 | self |  | formOrMode | unconfirmed |
| Mega Gyarados | Dragon Current | uniteMove | knockUp | 相手を打ち上げる。 | enemy | 2 |  | unconfirmed |
| Mega Gyarados | Dragon Current | uniteMove | slow | 移動速度を下げる。 | enemy | 1 | durationOrBuffDebuff | unconfirmed |
| Mega Gyarados | Dragon Current | uniteMove | untargetableOrStealth | 対象指定されない、またはステルス状態になる。 | enemy | 4 | durationOrBuffDebuff | unconfirmed |
| Mega Gyarados | Dragon Current | uniteMove | cooldownReduction | 待ち時間を短縮する。 | unconfirmed |  | actionOrderOrCooldown | unconfirmed |
| Mega Gyarados | Dragon Current | uniteMove | shield | シールドを付与する。 | self |  | durationOrBuffDebuff | unconfirmed |
| Mega Gyarados | Dragon Current | uniteMove | formChange | フォーム・モード・構えを変化させる。 | self |  | formOrMode | unconfirmed |
| Ho-Oh | Regenerator | passive | shield | シールドを付与する。 | self |  | durationOrBuffDebuff | unconfirmed |
| Ho-Oh | Regenerator | passive | wildPokemonRule | 野生ポケモン限定の処理を持つ。 | enemy | 3 | targetType | unconfirmed |
| Ho-Oh | Attack | normalAttack | slow | 移動速度を下げる。 | unconfirmed |  | durationOrBuffDebuff | unconfirmed |
| Ho-Oh | Attack | normalAttack | healing | HPを回復する。 | self |  | hpState | unconfirmed |
| Ho-Oh | Attack | normalAttack | boostedAttackCycle | 通常攻撃回数により強化攻撃になる。 | enemy |  | actionOrderOrCooldown | unconfirmed |
| Ho-Oh | Safeguard | move | movementSpeedUp | 移動速度を上げる。 | self | 3 | durationOrBuffDebuff | unconfirmed |
| Ho-Oh | Tailwind | move | movementSpeedUp | 移動速度を上げる。 | ally | 0.5 | durationOrBuffDebuff | unconfirmed |
| Ho-Oh | Rekindling Flame | uniteMove | shield | シールドを付与する。 | self |  | durationOrBuffDebuff | unconfirmed |
| Hoopa | Attack | normalAttack | bind | バインドを付与する。 | enemy |  | durationOrBuffDebuff | unconfirmed |
| Hoopa | Attack | normalAttack | boostedAttackCycle | 通常攻撃回数により強化攻撃になる。 | enemy |  | actionOrderOrCooldown | unconfirmed |
| Hoopa | Astonish | move | stun | 行動不能・スタンを付与する。 | enemy | 75 | durationOrBuffDebuff | unconfirmed |
| Hoopa | Confusion | move | slow | 移動速度を下げる。 | enemy | 0.5 | durationOrBuffDebuff | unconfirmed |
| Hoopa | Rings Unbound | uniteMove | bind | バインドを付与する。 | unconfirmed | 0.6 | durationOrBuffDebuff | unconfirmed |
| Hoopa | Rings Unbound | uniteMove | unstoppable | 妨害無効になる。 | self | 0.6 | durationOrBuffDebuff | unconfirmed |
| Hoopa | Rings Unbound | uniteMove | invincible | 無敵になる。 | self | 0.6 | durationOrBuffDebuff | unconfirmed |
| Hoopa | Rings Unbound | uniteMove | cooldownReduction | 待ち時間を短縮する。 | unconfirmed |  | actionOrderOrCooldown | unconfirmed |
| Hoopa | Rings Unbound | uniteMove | shield | シールドを付与する。 | self |  | durationOrBuffDebuff | unconfirmed |
| Hoopa | Rings Unbound | uniteMove | formChange | フォーム・モード・構えを変化させる。 | self | 0.6 | formOrMode | unconfirmed |
| Inteleon | Sniper | passive | slow | 移動速度を下げる。 | unconfirmed |  | durationOrBuffDebuff | unconfirmed |
| Inteleon | Sniper | passive | stackOrMark | スタック、マーク、ゲージを扱う。 | enemy | 1 | targetStackOrMark | unconfirmed |
| Inteleon | Sniper | passive | wallOrTerrain | 壁・地形・草むらなどと相互作用する。 | enemy | 1 |  | unconfirmed |
| Inteleon | Sniper | passive | criticalGuaranteedOrDisabled | 急所確定または急所不可などを持つ。 | ally |  |  | unconfirmed |
| Inteleon | Attack | normalAttack | boostedAttackCycle | 通常攻撃回数により強化攻撃になる。 | unconfirmed |  | actionOrderOrCooldown | unconfirmed |
| Inteleon | Tearful Look | move | attackStatChange | 攻撃・特攻などのステータスを変化させる。 | enemy | 3 | durationOrBuffDebuff | unconfirmed |
| Inteleon | Tearful Look | move | stackOrMark | スタック、マーク、ゲージを扱う。 | unconfirmed | 3 | targetStackOrMark | unconfirmed |
| Inteleon | Azure Spy Vision | uniteMove | shield | シールドを付与する。 | self |  | durationOrBuffDebuff | unconfirmed |
| Inteleon | Azure Spy Vision | uniteMove | stackOrMark | スタック、マーク、ゲージを扱う。 | unconfirmed |  | selfStackOrGauge | unconfirmed |
| Inteleon | Azure Spy Vision | uniteMove | wallOrTerrain | 壁・地形・草むらなどと相互作用する。 | area | 10.5 |  | unconfirmed |
| Lapras | Shell Armor | passive | formChange | フォーム・モード・構えを変化させる。 | self |  | formOrMode | unconfirmed |
| Lapras | Attack | normalAttack | healing | HPを回復する。 | self |  | hpState | unconfirmed |
| Lapras | Attack | normalAttack | boostedAttackCycle | 通常攻撃回数により強化攻撃になる。 | enemy |  | actionOrderOrCooldown | unconfirmed |
| Lapras | Whirlpool | move | damageOverTime | 継続ダメージを与える。 | enemy | 3 | durationOrBuffDebuff | unconfirmed |
| Lapras | Ice Shard | move | freeze | こおり・凍結を付与する。 | unconfirmed | 0.6 | durationOrBuffDebuff | unconfirmed |
| Lapras | Ice Shard | move | knockBack | 相手を押し出す。 | unconfirmed | 0.4 |  | unconfirmed |
| Lapras | Lapras Express | uniteMove | knockUp | 相手を打ち上げる。 | unconfirmed | 1.5 |  | unconfirmed |
| Lapras | Lapras Express | uniteMove | unstoppable | 妨害無効になる。 | self | 15 | durationOrBuffDebuff | unconfirmed |
| Lapras | Lapras Express | uniteMove | shield | シールドを付与する。 | self |  | durationOrBuffDebuff | unconfirmed |
| Lapras | Lapras Express | uniteMove | reuseOrSecondActivation | 再使用・派生・2段目を持つ。 | unconfirmed | 1.5 | actionOrderOrCooldown | unconfirmed |
| Latias | Levitate | passive | unstoppable | 妨害無効になる。 | self | 2 | durationOrBuffDebuff | unconfirmed |
| Latias | Levitate | passive | movementSpeedUp | 移動速度を上げる。 | self | 2 | durationOrBuffDebuff | unconfirmed |
| Latias | Levitate | passive | nextBoostedAttack | 次の通常攻撃または強化攻撃を準備する。 | unconfirmed | 2 | actionOrderOrCooldown | unconfirmed |
| Latias | Confusion | move | slow | 移動速度を下げる。 | enemy | 2 | durationOrBuffDebuff | unconfirmed |
| Latias | Mist Blast | uniteMove | shield | シールドを付与する。 | self |  | durationOrBuffDebuff | unconfirmed |
| Latias | Mist Blast | uniteMove | stackOrMark | スタック、マーク、ゲージを扱う。 | enemy |  | targetStackOrMark | unconfirmed |
| Latios | Levitate | passive | unstoppable | 妨害無効になる。 | self | 2 | durationOrBuffDebuff | unconfirmed |
| Latios | Levitate | passive | movementSpeedUp | 移動速度を上げる。 | self | 2 | durationOrBuffDebuff | unconfirmed |
| Latios | Levitate | passive | nextBoostedAttack | 次の通常攻撃または強化攻撃を準備する。 | unconfirmed | 2 | actionOrderOrCooldown | unconfirmed |
| Latios | Confusion | move | slow | 移動速度を下げる。 | enemy | 2 | durationOrBuffDebuff | unconfirmed |
| Latios | Eon Blast | uniteMove | cooldownReduction | 待ち時間を短縮する。 | unconfirmed |  | actionOrderOrCooldown | unconfirmed |
| Latios | Eon Blast | uniteMove | shield | シールドを付与する。 | self |  | durationOrBuffDebuff | unconfirmed |
| Latios | Eon Blast | uniteMove | stackOrMark | スタック、マーク、ゲージを扱う。 | enemy |  | targetStackOrMark | unconfirmed |
| Leafeon | Attack - Eevee | normalAttack | boostedAttackCycle | 通常攻撃回数により強化攻撃になる。 | unconfirmed |  | actionOrderOrCooldown | unconfirmed |
| Leafeon | Swift | move | damageReduction | 受けるダメージを軽減する。 | unconfirmed |  | durationOrBuffDebuff | unconfirmed |
| Leafeon | Emerald Two-Step | uniteMove | slow | 移動速度を下げる。 | ally | 2 | durationOrBuffDebuff | unconfirmed |
| Leafeon | Emerald Two-Step | uniteMove | unstoppable | 妨害無効になる。 | self |  | durationOrBuffDebuff | unconfirmed |
| Leafeon | Emerald Two-Step | uniteMove | shield | シールドを付与する。 | self |  | durationOrBuffDebuff | unconfirmed |
| Lucario | Steadfast | passive | shield | シールドを付与する。 | self | 5 | durationOrBuffDebuff | unconfirmed |
| Lucario | Steadfast | passive | hpThreshold | HP割合条件で発動する。 | self | 5 | hpState | unconfirmed |
| Lucario | Attack | normalAttack | knockUp | 相手を打ち上げる。 | enemy | 0.5 |  | unconfirmed |
| Lucario | Attack | normalAttack | boostedAttackCycle | 通常攻撃回数により強化攻撃になる。 | unconfirmed |  | actionOrderOrCooldown | unconfirmed |
| Lucario | Attack | normalAttack | formChange | フォーム・モード・構えを変化させる。 | self |  | formOrMode | unconfirmed |
| Lucario | Quick Attack | move | untargetableOrStealth | 対象指定されない、またはステルス状態になる。 | enemy |  | durationOrBuffDebuff | unconfirmed |
| Lucario | Meteor Mash | move | stun | 行動不能・スタンを付与する。 | enemy | 0.4 | durationOrBuffDebuff | unconfirmed |
| Lucario | Aura Cannon | uniteMove | knockBack | 相手を押し出す。 | unconfirmed | 1 |  | unconfirmed |
| Lucario | Aura Cannon | uniteMove | unstoppable | 妨害無効になる。 | self | 0.6 | durationOrBuffDebuff | unconfirmed |
| Lucario | Aura Cannon | uniteMove | damageDealtChange | 与ダメージを変化させる。 | unconfirmed |  | durationOrBuffDebuff | unconfirmed |
| Lucario | Aura Cannon | uniteMove | cooldownReduction | 待ち時間を短縮する。 | unconfirmed |  | actionOrderOrCooldown | unconfirmed |
| Lucario | Aura Cannon | uniteMove | shield | シールドを付与する。 | self |  | durationOrBuffDebuff | unconfirmed |
| Lucario | Aura Cannon | uniteMove | stackOrMark | スタック、マーク、ゲージを扱う。 | enemy |  | targetStackOrMark | unconfirmed |
| Mega Lucario | Attack | normalAttack | knockUp | 相手を打ち上げる。 | enemy | 0.5 |  | unconfirmed |
| Mega Lucario | Attack | normalAttack | boostedAttackCycle | 通常攻撃回数により強化攻撃になる。 | unconfirmed |  | actionOrderOrCooldown | unconfirmed |
| Mega Lucario | Meteor Mash | move | stun | 行動不能・スタンを付与する。 | enemy | 0.4 | durationOrBuffDebuff | unconfirmed |
| Mega Lucario | Aura Cannon | uniteMove | unstoppable | 妨害無効になる。 | enemy |  | durationOrBuffDebuff | unconfirmed |
| Mega Lucario | Aura Cannon | uniteMove | cooldownReduction | 待ち時間を短縮する。 | unconfirmed |  | actionOrderOrCooldown | unconfirmed |
| Mega Lucario | Aura Cannon | uniteMove | shield | シールドを付与する。 | self |  | durationOrBuffDebuff | unconfirmed |
| Mega Lucario | Aura Cannon | uniteMove | formChange | フォーム・モード・構えを変化させる。 | self | 25 | formOrMode | unconfirmed |
| Machamp | Attack | normalAttack | boostedAttackCycle | 通常攻撃回数により強化攻撃になる。 | unconfirmed |  | actionOrderOrCooldown | unconfirmed |
| Machamp | Bulk Up | move | unstoppable | 妨害無効になる。 | ally | 3 | durationOrBuffDebuff | unconfirmed |
| Machamp | Bulk Up | move | movementSpeedUp | 移動速度を上げる。 | self |  | durationOrBuffDebuff | unconfirmed |
| Machamp | Bulk Up | move | boostedAttackCycle | 通常攻撃回数により強化攻撃になる。 | unconfirmed |  | actionOrderOrCooldown | unconfirmed |
| Machamp | Barrage Blow | uniteMove | knockBack | 相手を押し出す。 | enemy | 8 |  | unconfirmed |
| Machamp | Barrage Blow | uniteMove | unstoppable | 妨害無効になる。 | enemy | 8 | durationOrBuffDebuff | unconfirmed |
| Machamp | Barrage Blow | uniteMove | defenseStatChange | 防御・特防を変化させる。 | unconfirmed |  | durationOrBuffDebuff | unconfirmed |
| Machamp | Barrage Blow | uniteMove | shield | シールドを付与する。 | self |  | durationOrBuffDebuff | unconfirmed |
| Machamp | Barrage Blow | uniteMove | reuseOrSecondActivation | 再使用・派生・2段目を持つ。 | enemy |  | actionOrderOrCooldown | unconfirmed |
| Mamoswine | Thick Fat | passive | defenseStatChange | 防御・特防を変化させる。 | unconfirmed | 5 | durationOrBuffDebuff | unconfirmed |
| Mamoswine | Thick Fat | passive | stackOrMark | スタック、マーク、ゲージを扱う。 | unconfirmed | 5 | selfStackOrGauge | unconfirmed |
| Mamoswine | Thick Fat | passive | nextBoostedAttack | 次の通常攻撃または強化攻撃を準備する。 | unconfirmed |  | actionOrderOrCooldown | unconfirmed |
| Mamoswine | Attack | normalAttack | freeze | こおり・凍結を付与する。 | unconfirmed |  | durationOrBuffDebuff | unconfirmed |
| Mamoswine | Attack | normalAttack | boostedAttackCycle | 通常攻撃回数により強化攻撃になる。 | enemy | 0.5 | actionOrderOrCooldown | unconfirmed |
| Mamoswine | Ice Shard | move | freeze | こおり・凍結を付与する。 | enemy | 0.5 | durationOrBuffDebuff | unconfirmed |
| Mamoswine | Ice Shard | move | slow | 移動速度を下げる。 | enemy | 1.5 | durationOrBuffDebuff | unconfirmed |
| Mamoswine | Tackle | move | knockUp | 相手を打ち上げる。 | enemy | 0.5 |  | unconfirmed |
| Mamoswine | Mammoth Mash | uniteMove | knockUp | 相手を打ち上げる。 | enemy | 1.5 |  | unconfirmed |
| Mamoswine | Mammoth Mash | uniteMove | slow | 移動速度を下げる。 | enemy | 0.5 | durationOrBuffDebuff | unconfirmed |
| Mamoswine | Mammoth Mash | uniteMove | unstoppable | 妨害無効になる。 | self |  | durationOrBuffDebuff | unconfirmed |
| Mamoswine | Mammoth Mash | uniteMove | shield | シールドを付与する。 | self |  | durationOrBuffDebuff | unconfirmed |
| Meganium | Overgrow | passive | healing | HPを回復する。 | ally |  | hpState | unconfirmed |
| Meganium | Magical Leaf | move | slow | 移動速度を下げる。 | enemy | 2 | durationOrBuffDebuff | unconfirmed |
| Meganium | Synthesis | move | healing | HPを回復する。 | ally | 3 | hpState | unconfirmed |
| Meganium | Full Bloom Aroma | uniteMove | shield | シールドを付与する。 | self |  | durationOrBuffDebuff | unconfirmed |
| Meganium | Full Bloom Aroma | uniteMove | damageOverTime | 継続ダメージを与える。 | enemy | 0.5 | durationOrBuffDebuff | unconfirmed |
| Meowscarada | Overgrow | passive | untargetableOrStealth | 対象指定されない、またはステルス状態になる。 | unconfirmed | 1.5 | durationOrBuffDebuff | unconfirmed |
| Meowscarada | Overgrow | passive | damageDealtChange | 与ダメージを変化させる。 | unconfirmed | 4 | durationOrBuffDebuff | unconfirmed |
| Meowscarada | Overgrow | passive | healing | HPを回復する。 | self | 4 | hpState | unconfirmed |
| Meowscarada | Leafage | move | damageReduction | 受けるダメージを軽減する。 | enemy |  | durationOrBuffDebuff | unconfirmed |
| Meowscarada | Floral Flourish | uniteMove | slow | 移動速度を下げる。 | unconfirmed |  | durationOrBuffDebuff | unconfirmed |
| Meowscarada | Floral Flourish | uniteMove | invincible | 無敵になる。 | self |  | durationOrBuffDebuff | unconfirmed |
| Meowscarada | Floral Flourish | uniteMove | shield | シールドを付与する。 | self |  | durationOrBuffDebuff | unconfirmed |
| Meowscarada | Floral Flourish | uniteMove | reuseOrSecondActivation | 再使用・派生・2段目を持つ。 | unconfirmed |  | actionOrderOrCooldown | unconfirmed |
| Meowth | Pickup | passive | damageOverTime | 継続ダメージを与える。 | unconfirmed | 3 | durationOrBuffDebuff | unconfirmed |
| Meowth | Pickup | passive | wildPokemonRule | 野生ポケモン限定の処理を持つ。 | unconfirmed | 30 | targetType | unconfirmed |
| Meowth | Pickup | passive | cloneOrDecoy | 分身、コピー、身代わりなどを生成する。 | enemy | 30 | durationOrBuffDebuff | unconfirmed |
| Meowth | Attack | normalAttack | boostedAttackCycle | 通常攻撃回数により強化攻撃になる。 | enemy |  | actionOrderOrCooldown | unconfirmed |
| Meowth | Gold Coin Barrage | uniteMove | slow | 移動速度を下げる。 | unconfirmed |  | durationOrBuffDebuff | unconfirmed |
| Meowth | Gold Coin Barrage | uniteMove | unstoppable | 妨害無効になる。 | enemy |  | durationOrBuffDebuff | unconfirmed |
| Meowth | Gold Coin Barrage | uniteMove | shield | シールドを付与する。 | self |  | durationOrBuffDebuff | unconfirmed |
| Meowth | Gold Coin Barrage | uniteMove | damageOverTime | 継続ダメージを与える。 | ally |  | durationOrBuffDebuff | unconfirmed |
| Metagross | Attack | normalAttack | boostedAttackCycle | 通常攻撃回数により強化攻撃になる。 | unconfirmed |  | actionOrderOrCooldown | unconfirmed |
| Metagross | Iron Defense | move | shield | シールドを付与する。 | self | 5 | durationOrBuffDebuff | unconfirmed |
| Metagross | Compute and Crush | uniteMove | stun | 行動不能・スタンを付与する。 | enemy | 0.8 | durationOrBuffDebuff | unconfirmed |
| Metagross | Compute and Crush | uniteMove | unstoppable | 妨害無効になる。 | enemy |  | durationOrBuffDebuff | unconfirmed |
| Metagross | Compute and Crush | uniteMove | cooldownReduction | 待ち時間を短縮する。 | unconfirmed |  | actionOrderOrCooldown | unconfirmed |
| Metagross | Compute and Crush | uniteMove | shield | シールドを付与する。 | self |  | durationOrBuffDebuff | unconfirmed |
| Metagross | Compute and Crush | uniteMove | stackOrMark | スタック、マーク、ゲージを扱う。 | enemy |  | targetStackOrMark | unconfirmed |
| Metagross | Compute and Crush | uniteMove | hpReferenceDamage | 現在HP・最大HP・減少HPなどを参照する。 | enemy | 0.8 | hpState | unconfirmed |
| Metagross | Compute and Crush | uniteMove | reuseOrSecondActivation | 再使用・派生・2段目を持つ。 | unconfirmed |  | actionOrderOrCooldown | unconfirmed |
| Metagross | Compute and Crush | uniteMove | wallOrTerrain | 壁・地形・草むらなどと相互作用する。 | enemy |  |  | unconfirmed |
| Mew | Synchronize | passive | movementSpeedUp | 移動速度を上げる。 | ally | 2 | durationOrBuffDebuff | unconfirmed |
| Mew | Attack | normalAttack | stackOrMark | スタック、マーク、ゲージを扱う。 | unconfirmed |  | targetStackOrMark | unconfirmed |
| Mew | Attack | normalAttack | nextBoostedAttack | 次の通常攻撃または強化攻撃を準備する。 | enemy | 8 | actionOrderOrCooldown | unconfirmed |
| Mew | Attack | normalAttack | boostedAttackCycle | 通常攻撃回数により強化攻撃になる。 | enemy | 8 | actionOrderOrCooldown | unconfirmed |
| Mew | Attack | normalAttack | wildPokemonRule | 野生ポケモン限定の処理を持つ。 | enemy |  | targetType | unconfirmed |
| Mew | Electro Ball | move | paralysis | まひを付与する。 | enemy | 2 | durationOrBuffDebuff | unconfirmed |
| Mew | Electro Ball | move | slow | 移動速度を下げる。 | enemy | 2 | durationOrBuffDebuff | unconfirmed |
| Mew | Electro Ball | move | attackSpeedDown | 通常攻撃速度を下げる。 | enemy | 2 | durationOrBuffDebuff | unconfirmed |
| Mew | Electro Ball | move | damageDealtChange | 与ダメージを変化させる。 | unconfirmed |  | durationOrBuffDebuff | unconfirmed |
| Mew | Electro Ball | move | hpReferenceDamage | 現在HP・最大HP・減少HPなどを参照する。 | enemy |  | hpState | unconfirmed |
| Mew | Coaching | move | attackSpeedUp | 通常攻撃速度を上げる。 | ally | 3 | durationOrBuffDebuff | unconfirmed |
| Mew | Coaching | move | cooldownReduction | 待ち時間を短縮する。 | ally | 7 | actionOrderOrCooldown | unconfirmed |
| Mew | Coaching | move | shield | シールドを付与する。 | ally | 3 | durationOrBuffDebuff | unconfirmed |
| Mew | Mystical Mirage | uniteMove | unstoppable | 妨害無効になる。 | self | 1 | durationOrBuffDebuff | unconfirmed |
| Mew | Mystical Mirage | uniteMove | invincible | 無敵になる。 | self | 1 | durationOrBuffDebuff | unconfirmed |
| Mew | Mystical Mirage | uniteMove | untargetableOrStealth | 対象指定されない、またはステルス状態になる。 | unconfirmed | 1 | durationOrBuffDebuff | unconfirmed |
| Mew | Mystical Mirage | uniteMove | cooldownReduction | 待ち時間を短縮する。 | unconfirmed |  | actionOrderOrCooldown | unconfirmed |
| Mew | Mystical Mirage | uniteMove | shield | シールドを付与する。 | self |  | durationOrBuffDebuff | unconfirmed |
| Mew | Mystical Mirage | uniteMove | fieldArea | フィールド・設置範囲を生成する。 | area | 5 | durationOrBuffDebuff | unconfirmed |
| Mega Mewtwo X | Pressure | passive | attackStatChange | 攻撃・特攻などのステータスを変化させる。 | unconfirmed |  | durationOrBuffDebuff | unconfirmed |
| Mega Mewtwo X | Pressure | passive | defenseStatChange | 防御・特防を変化させる。 | enemy |  | durationOrBuffDebuff | unconfirmed |
| Mega Mewtwo X | Pressure | passive | stackOrMark | スタック、マーク、ゲージを扱う。 | enemy |  | targetStackOrMark | unconfirmed |
| Mega Mewtwo X | Pressure | passive | formChange | フォーム・モード・構えを変化させる。 | self |  | formOrMode | unconfirmed |
| Mega Mewtwo X | Pressure | passive | koAssistTrigger | KOまたはアシストで発動する。 | unconfirmed |  | koAssistEvent | unconfirmed |
| Mega Mewtwo X | Attack | normalAttack | boostedAttackCycle | 通常攻撃回数により強化攻撃になる。 | unconfirmed |  | actionOrderOrCooldown | unconfirmed |
| Mega Mewtwo X | Attack | normalAttack | formChange | フォーム・モード・構えを変化させる。 | self |  | formOrMode | unconfirmed |
| Mega Mewtwo X | Confusion | move | stun | 行動不能・スタンを付与する。 | enemy | 1 | durationOrBuffDebuff | unconfirmed |
| Mega Mewtwo X | Barrier | move | movementSpeedUp | 移動速度を上げる。 | self |  | durationOrBuffDebuff | unconfirmed |
| Mega Mewtwo X | Barrier | move | shield | シールドを付与する。 | self | 3 | durationOrBuffDebuff | unconfirmed |
| Mega Mewtwo X | Infinite Psyburn | uniteMove | stun | 行動不能・スタンを付与する。 | enemy | 1 | durationOrBuffDebuff | unconfirmed |
| Mega Mewtwo X | Infinite Psyburn | uniteMove | unstoppable | 妨害無効になる。 | enemy |  | durationOrBuffDebuff | unconfirmed |
| Mega Mewtwo X | Infinite Psyburn | uniteMove | defenseStatChange | 防御・特防を変化させる。 | enemy | 1 | durationOrBuffDebuff | unconfirmed |
| Mega Mewtwo X | Infinite Psyburn | uniteMove | cooldownReduction | 待ち時間を短縮する。 | unconfirmed |  | actionOrderOrCooldown | unconfirmed |
| Mega Mewtwo X | Infinite Psyburn | uniteMove | shield | シールドを付与する。 | self |  | durationOrBuffDebuff | unconfirmed |
| Mega Mewtwo X | Infinite Psyburn | uniteMove | delayedDamage | 遅延または時間差でダメージを与える。 | enemy | 1 | durationOrBuffDebuff | unconfirmed |
| Mega Mewtwo Y | Pressure | passive | attackSpeedUp | 通常攻撃速度を上げる。 | self |  | durationOrBuffDebuff | unconfirmed |
| Mega Mewtwo Y | Pressure | passive | attackStatChange | 攻撃・特攻などのステータスを変化させる。 | enemy |  | durationOrBuffDebuff | unconfirmed |
| Mega Mewtwo Y | Pressure | passive | stackOrMark | スタック、マーク、ゲージを扱う。 | enemy |  | targetStackOrMark | unconfirmed |
| Mega Mewtwo Y | Pressure | passive | formChange | フォーム・モード・構えを変化させる。 | self |  | formOrMode | unconfirmed |
| Mega Mewtwo Y | Pressure | passive | koAssistTrigger | KOまたはアシストで発動する。 | unconfirmed |  | koAssistEvent | unconfirmed |
| Mega Mewtwo Y | Attack | normalAttack | slow | 移動速度を下げる。 | enemy |  | durationOrBuffDebuff | unconfirmed |
| Mega Mewtwo Y | Attack | normalAttack | formChange | フォーム・モード・構えを変化させる。 | enemy |  | formOrMode | unconfirmed |
| Mega Mewtwo Y | Confusion | move | stun | 行動不能・スタンを付与する。 | enemy | 1 | durationOrBuffDebuff | unconfirmed |
| Mega Mewtwo Y | Barrier | move | movementSpeedUp | 移動速度を上げる。 | self |  | durationOrBuffDebuff | unconfirmed |
| Mega Mewtwo Y | Barrier | move | shield | シールドを付与する。 | self | 3 | durationOrBuffDebuff | unconfirmed |
| Mega Mewtwo Y | Infinite Psyburn | uniteMove | stun | 行動不能・スタンを付与する。 | enemy | 1 | durationOrBuffDebuff | unconfirmed |
| Mega Mewtwo Y | Infinite Psyburn | uniteMove | unstoppable | 妨害無効になる。 | enemy |  | durationOrBuffDebuff | unconfirmed |
| Mega Mewtwo Y | Infinite Psyburn | uniteMove | defenseStatChange | 防御・特防を変化させる。 | unconfirmed | 3 | durationOrBuffDebuff | unconfirmed |
| Mega Mewtwo Y | Infinite Psyburn | uniteMove | cooldownReduction | 待ち時間を短縮する。 | unconfirmed |  | actionOrderOrCooldown | unconfirmed |
| Mega Mewtwo Y | Infinite Psyburn | uniteMove | shield | シールドを付与する。 | self |  | durationOrBuffDebuff | unconfirmed |
| Mega Mewtwo Y | Infinite Psyburn | uniteMove | delayedDamage | 遅延または時間差でダメージを与える。 | enemy | 1 | durationOrBuffDebuff | unconfirmed |
| Mimikyu | Disguise | passive | stackOrMark | スタック、マーク、ゲージを扱う。 | enemy |  | targetStackOrMark | unconfirmed |
| Mimikyu | Disguise | passive | hpReferenceDamage | 現在HP・最大HP・減少HPなどを参照する。 | enemy | 0.5 | hpState | unconfirmed |
| Mimikyu | Disguise | passive | formChange | フォーム・モード・構えを変化させる。 | enemy | 0.5 | formOrMode | unconfirmed |
| Mimikyu | Disguise | passive | koAssistTrigger | KOまたはアシストで発動する。 | enemy | 25 | koAssistEvent | unconfirmed |
| Mimikyu | Attack | normalAttack | boostedAttackCycle | 通常攻撃回数により強化攻撃になる。 | unconfirmed |  | actionOrderOrCooldown | unconfirmed |
| Mimikyu | Scratch | move | slow | 移動速度を下げる。 | enemy | 2 | durationOrBuffDebuff | unconfirmed |
| Mimikyu | Scratch | move | hpReferenceDamage | 現在HP・最大HP・減少HPなどを参照する。 | enemy | 5 | hpState | unconfirmed |
| Mimikyu | Scratch | move | wildPokemonRule | 野生ポケモン限定の処理を持つ。 | unconfirmed |  | targetType | unconfirmed |
| Mimikyu | Play With Me... | uniteMove | unstoppable | 妨害無効になる。 | self |  | durationOrBuffDebuff | unconfirmed |
| Mimikyu | Play With Me... | uniteMove | cooldownReduction | 待ち時間を短縮する。 | unconfirmed |  | actionOrderOrCooldown | unconfirmed |
| Mimikyu | Play With Me... | uniteMove | shield | シールドを付与する。 | self | 2.8 | durationOrBuffDebuff | unconfirmed |
| Mimikyu | Play With Me... | uniteMove | damageOverTime | 継続ダメージを与える。 | enemy |  | durationOrBuffDebuff | unconfirmed |
| Mimikyu | Play With Me... | uniteMove | stackOrMark | スタック、マーク、ゲージを扱う。 | unconfirmed |  | targetStackOrMark | unconfirmed |
| Miraidon | Hadron Engine | passive | sleep | ねむりを付与する。 | unconfirmed |  | durationOrBuffDebuff | unconfirmed |
| Miraidon | Hadron Engine | passive | healing | HPを回復する。 | ally |  | hpState | unconfirmed |
| Miraidon | Hadron Engine | passive | shield | シールドを付与する。 | ally |  | durationOrBuffDebuff | unconfirmed |
| Miraidon | Hadron Engine | passive | wallOrTerrain | 壁・地形・草むらなどと相互作用する。 | enemy | 10 |  | unconfirmed |
| Miraidon | Thunder Wave | move | paralysis | まひを付与する。 | enemy | 2 | durationOrBuffDebuff | unconfirmed |
| Miraidon | Bright Future Meteor Storm | uniteMove | knockUp | 相手を打ち上げる。 | enemy | 1 |  | unconfirmed |
| Miraidon | Bright Future Meteor Storm | uniteMove | hindranceResistance | 妨害耐性を得る。 | enemy |  | durationOrBuffDebuff | unconfirmed |
| Miraidon | Bright Future Meteor Storm | uniteMove | cooldownReduction | 待ち時間を短縮する。 | unconfirmed |  | actionOrderOrCooldown | unconfirmed |
| Miraidon | Bright Future Meteor Storm | uniteMove | shield | シールドを付与する。 | self |  | durationOrBuffDebuff | unconfirmed |
| Miraidon | Bright Future Meteor Storm | uniteMove | stackOrMark | スタック、マーク、ゲージを扱う。 | unconfirmed |  | targetStackOrMark | unconfirmed |
| Miraidon | Bright Future Meteor Storm | uniteMove | formChange | フォーム・モード・構えを変化させる。 | enemy |  | formOrMode | unconfirmed |
| Moltres | Flame Body | passive | burn | やけどを付与する。 | enemy |  | durationOrBuffDebuff | unconfirmed |
| Moltres | Flame Body | passive | damageOverTime | 継続ダメージを与える。 | unconfirmed | 4 | durationOrBuffDebuff | unconfirmed |
| Moltres | Flame Body | passive | stackOrMark | スタック、マーク、ゲージを扱う。 | enemy |  | targetStackOrMark | unconfirmed |
| Moltres | Attack | normalAttack | boostedAttackCycle | 通常攻撃回数により強化攻撃になる。 | unconfirmed |  | actionOrderOrCooldown | unconfirmed |
| Moltres | Firebird Inferno | uniteMove | burn | やけどを付与する。 | enemy |  | durationOrBuffDebuff | unconfirmed |
| Moltres | Firebird Inferno | uniteMove | unstoppable | 妨害無効になる。 | enemy |  | durationOrBuffDebuff | unconfirmed |
| Moltres | Firebird Inferno | uniteMove | cooldownReduction | 待ち時間を短縮する。 | unconfirmed |  | actionOrderOrCooldown | unconfirmed |
| Moltres | Firebird Inferno | uniteMove | shield | シールドを付与する。 | self |  | durationOrBuffDebuff | unconfirmed |
| Moltres | Firebird Inferno | uniteMove | stackOrMark | スタック、マーク、ゲージを扱う。 | enemy |  | targetStackOrMark | unconfirmed |
| Moltres | Firebird Inferno | uniteMove | wildPokemonRule | 野生ポケモン限定の処理を持つ。 | unconfirmed |  | targetType | unconfirmed |
| Moltres | Firebird Inferno | uniteMove | formChange | フォーム・モード・構えを変化させる。 | enemy | 20 | formOrMode | unconfirmed |
| Moltres | Firebird Inferno | uniteMove | koAssistTrigger | KOまたはアシストで発動する。 | unconfirmed |  | koAssistEvent | unconfirmed |
| Mr. Mime | Filter | passive | damageReduction | 受けるダメージを軽減する。 | unconfirmed |  | durationOrBuffDebuff | unconfirmed |
| Mr. Mime | Filter | passive | nextBoostedAttack | 次の通常攻撃または強化攻撃を準備する。 | unconfirmed |  | actionOrderOrCooldown | unconfirmed |
| Mr. Mime | Attack | normalAttack | knockUp | 相手を打ち上げる。 | enemy | 5 |  | unconfirmed |
| Mr. Mime | Attack | normalAttack | boostedAttackCycle | 通常攻撃回数により強化攻撃になる。 | enemy |  | actionOrderOrCooldown | unconfirmed |
| Mr. Mime | Light Screen | move | stun | 行動不能・スタンを付与する。 | enemy | 0.5 | durationOrBuffDebuff | unconfirmed |
| Mr. Mime | Light Screen | move | knockBack | 相手を押し出す。 | enemy | 0.5 |  | unconfirmed |
| Mr. Mime | Light Screen | move | wallOrTerrain | 壁・地形・草むらなどと相互作用する。 | enemy | 0.5 |  | unconfirmed |
| Mr. Mime | Showtime | uniteMove | stun | 行動不能・スタンを付与する。 | enemy | 0.5 | durationOrBuffDebuff | unconfirmed |
| Mr. Mime | Showtime | uniteMove | unstoppable | 妨害無効になる。 | enemy | 0.5 | durationOrBuffDebuff | unconfirmed |
| Mr. Mime | Showtime | uniteMove | shield | シールドを付与する。 | self |  | durationOrBuffDebuff | unconfirmed |
| Mr. Mime | Showtime | uniteMove | damageOverTime | 継続ダメージを与える。 | enemy |  | durationOrBuffDebuff | unconfirmed |
| Mr. Mime | Showtime | uniteMove | formChange | フォーム・モード・構えを変化させる。 | self |  | formOrMode | unconfirmed |
| Ninetales | Snow Warning | passive | freeze | こおり・凍結を付与する。 | enemy | 1 | durationOrBuffDebuff | unconfirmed |
| Ninetales | Snow Warning | passive | slow | 移動速度を下げる。 | enemy | 75 | durationOrBuffDebuff | unconfirmed |
| Ninetales | Attack | normalAttack | slow | 移動速度を下げる。 | enemy |  | durationOrBuffDebuff | unconfirmed |
| Ninetales | Attack | normalAttack | boostedAttackCycle | 通常攻撃回数により強化攻撃になる。 | unconfirmed |  | actionOrderOrCooldown | unconfirmed |
| Ninetales | Powder Snow | move | slow | 移動速度を下げる。 | enemy | 1 | durationOrBuffDebuff | unconfirmed |
| Ninetales | Icy Wind | move | knockBack | 相手を押し出す。 | unconfirmed |  |  | unconfirmed |
| Ninetales | Icy Wind | move | slow | 移動速度を下げる。 | unconfirmed | 1 | durationOrBuffDebuff | unconfirmed |
| Ninetales | Icy Wind | move | formChange | フォーム・モード・構えを変化させる。 | self |  | formOrMode | unconfirmed |
| Ninetales | Snow Globe | uniteMove | freeze | こおり・凍結を付与する。 | enemy |  | durationOrBuffDebuff | unconfirmed |
| Ninetales | Snow Globe | uniteMove | unstoppable | 妨害無効になる。 | self |  | durationOrBuffDebuff | unconfirmed |
| Ninetales | Snow Globe | uniteMove | damageDealtChange | 与ダメージを変化させる。 | enemy |  | durationOrBuffDebuff | unconfirmed |
| Ninetales | Snow Globe | uniteMove | cooldownReduction | 待ち時間を短縮する。 | unconfirmed |  | actionOrderOrCooldown | unconfirmed |
| Ninetales | Snow Globe | uniteMove | shield | シールドを付与する。 | self |  | durationOrBuffDebuff | unconfirmed |
| Pawmot | Iron Fist | passive | stackOrMark | スタック、マーク、ゲージを扱う。 | unconfirmed |  | targetStackOrMark | unconfirmed |
| Pawmot | Iron Fist | passive | nextBoostedAttack | 次の通常攻撃または強化攻撃を準備する。 | unconfirmed |  | actionOrderOrCooldown | unconfirmed |
| Pawmot | Iron Fist | passive | formChange | フォーム・モード・構えを変化させる。 | self |  | formOrMode | unconfirmed |
| Pawmot | Attack | normalAttack | boostedAttackCycle | 通常攻撃回数により強化攻撃になる。 | enemy |  | actionOrderOrCooldown | unconfirmed |
| Pawmot | Nuzzle | move | paralysis | まひを付与する。 | enemy | 2 | durationOrBuffDebuff | unconfirmed |
| Pawmot | Nuzzle | move | attackSpeedDown | 通常攻撃速度を下げる。 | enemy | 2 | durationOrBuffDebuff | unconfirmed |
| Pawmot | Zip Zap Full-Charge Spark | uniteMove | shield | シールドを付与する。 | self |  | durationOrBuffDebuff | unconfirmed |
| Pawmot | Zip Zap Full-Charge Spark | uniteMove | stackOrMark | スタック、マーク、ゲージを扱う。 | enemy |  | targetStackOrMark | unconfirmed |
| Pawmot | Zip Zap Full-Charge Spark | uniteMove | wildPokemonRule | 野生ポケモン限定の処理を持つ。 | unconfirmed |  | targetType | unconfirmed |
| Pawmot | Zip Zap Full-Charge Spark | uniteMove | formChange | フォーム・モード・構えを変化させる。 | self | 8 | formOrMode | unconfirmed |
| Pikachu | Static | passive | paralysis | まひを付与する。 | enemy | 30 | durationOrBuffDebuff | unconfirmed |
| Pikachu | Static | passive | attackSpeedDown | 通常攻撃速度を下げる。 | enemy | 2.5 | durationOrBuffDebuff | unconfirmed |
| Pikachu | Attack | normalAttack | paralysis | まひを付与する。 | enemy | 1 | durationOrBuffDebuff | unconfirmed |
| Pikachu | Attack | normalAttack | attackSpeedDown | 通常攻撃速度を下げる。 | enemy | 1 | durationOrBuffDebuff | unconfirmed |
| Pikachu | Attack | normalAttack | boostedAttackCycle | 通常攻撃回数により強化攻撃になる。 | enemy |  | actionOrderOrCooldown | unconfirmed |
| Pikachu | Thunder Shock | move | paralysis | まひを付与する。 | enemy | 2 | durationOrBuffDebuff | unconfirmed |
| Pikachu | Thunder Shock | move | attackSpeedDown | 通常攻撃速度を下げる。 | enemy | 2 | durationOrBuffDebuff | unconfirmed |
| Pikachu | Electroweb | move | immobilize | 移動不能を付与する。 | enemy | 1.5 | durationOrBuffDebuff | unconfirmed |
| Pikachu | Thunderstorm | uniteMove | unstoppable | 妨害無効になる。 | self | 3 | durationOrBuffDebuff | unconfirmed |
| Pikachu | Thunderstorm | uniteMove | cooldownReduction | 待ち時間を短縮する。 | unconfirmed |  | actionOrderOrCooldown | unconfirmed |
| Pikachu | Thunderstorm | uniteMove | shield | シールドを付与する。 | self |  | durationOrBuffDebuff | unconfirmed |
| Psyduck | Swift Swim | passive | slow | 移動速度を下げる。 | unconfirmed | 1 | durationOrBuffDebuff | unconfirmed |
| Psyduck | Swift Swim | passive | unstoppable | 妨害無効になる。 | self | 1 | durationOrBuffDebuff | unconfirmed |
| Psyduck | Swift Swim | passive | movementSpeedUp | 移動速度を上げる。 | self | 2 | durationOrBuffDebuff | unconfirmed |
| Psyduck | Swift Swim | passive | damageReduction | 受けるダメージを軽減する。 | ally |  | durationOrBuffDebuff | unconfirmed |
| Psyduck | Swift Swim | passive | damageOverTime | 継続ダメージを与える。 | unconfirmed | 2 | durationOrBuffDebuff | unconfirmed |
| Psyduck | Swift Swim | passive | stackOrMark | スタック、マーク、ゲージを扱う。 | ally |  | targetStackOrMark | unconfirmed |
| Psyduck | Swift Swim | passive | hpReferenceDamage | 現在HP・最大HP・減少HPなどを参照する。 | ally |  | hpState | unconfirmed |
| Psyduck | Confusion | move | stun | 行動不能・スタンを付与する。 | enemy | 1 | durationOrBuffDebuff | unconfirmed |
| Psyduck | Tail Whip | move | slow | 移動速度を下げる。 | enemy |  | durationOrBuffDebuff | unconfirmed |
| Psyduck | Tail Whip | move | defenseStatChange | 防御・特防を変化させる。 | enemy | 2 | durationOrBuffDebuff | unconfirmed |
| Psyduck | Full-Power Psy-ay-ay! | uniteMove | damageDealtChange | 与ダメージを変化させる。 | enemy | 3 | durationOrBuffDebuff | unconfirmed |
| Psyduck | Full-Power Psy-ay-ay! | uniteMove | cooldownReduction | 待ち時間を短縮する。 | unconfirmed |  | actionOrderOrCooldown | unconfirmed |
| Psyduck | Full-Power Psy-ay-ay! | uniteMove | shield | シールドを付与する。 | self |  | durationOrBuffDebuff | unconfirmed |
| Psyduck | Full-Power Psy-ay-ay! | uniteMove | stackOrMark | スタック、マーク、ゲージを扱う。 | unconfirmed |  | targetStackOrMark | unconfirmed |
| Quaquaval | Moxie | passive | movementSpeedUp | 移動速度を上げる。 | enemy | 3 | durationOrBuffDebuff | unconfirmed |
| Quaquaval | Moxie | passive | stackOrMark | スタック、マーク、ゲージを扱う。 | unconfirmed |  | targetStackOrMark | unconfirmed |
| Quaquaval | Moxie | passive | nextBoostedAttack | 次の通常攻撃または強化攻撃を準備する。 | unconfirmed |  | actionOrderOrCooldown | unconfirmed |
| Quaquaval | Attack | normalAttack | shield | シールドを付与する。 | self |  | durationOrBuffDebuff | unconfirmed |
| Quaquaval | Attack | normalAttack | boostedAttackCycle | 通常攻撃回数により強化攻撃になる。 | unconfirmed |  | actionOrderOrCooldown | unconfirmed |
| Quaquaval | Pound | move | slow | 移動速度を下げる。 | enemy | 2 | durationOrBuffDebuff | unconfirmed |
| Quaquaval | Wing Attack | move | shield | シールドを付与する。 | self | 3 | durationOrBuffDebuff | unconfirmed |
| Quaquaval | Carnival Splash | uniteMove | stun | 行動不能・スタンを付与する。 | enemy | 1 | durationOrBuffDebuff | unconfirmed |
| Quaquaval | Carnival Splash | uniteMove | pull | 相手を引き寄せる。 | enemy | 1 |  | unconfirmed |
| Quaquaval | Carnival Splash | uniteMove | unstoppable | 妨害無効になる。 | enemy |  | durationOrBuffDebuff | unconfirmed |
| Quaquaval | Carnival Splash | uniteMove | cooldownReduction | 待ち時間を短縮する。 | unconfirmed |  | actionOrderOrCooldown | unconfirmed |
| Quaquaval | Carnival Splash | uniteMove | shield | シールドを付与する。 | enemy |  | durationOrBuffDebuff | unconfirmed |
| Quaquaval | Carnival Splash | uniteMove | wildPokemonRule | 野生ポケモン限定の処理を持つ。 | unconfirmed |  | targetType | unconfirmed |
| Raichu | Static | passive | paralysis | まひを付与する。 | enemy | 30 | durationOrBuffDebuff | unconfirmed |
| Raichu | Static | passive | attackSpeedUp | 通常攻撃速度を上げる。 | enemy | 2 | durationOrBuffDebuff | unconfirmed |
| Raichu | Attack - Pikachu | normalAttack | paralysis | まひを付与する。 | enemy | 2 | durationOrBuffDebuff | unconfirmed |
| Raichu | Attack - Pikachu | normalAttack | attackSpeedUp | 通常攻撃速度を上げる。 | enemy | 2 | durationOrBuffDebuff | unconfirmed |
| Raichu | Attack - Pikachu | normalAttack | boostedAttackCycle | 通常攻撃回数により強化攻撃になる。 | enemy |  | actionOrderOrCooldown | unconfirmed |
| Raichu | Thunder Shock | move | paralysis | まひを付与する。 | enemy | 2 | durationOrBuffDebuff | unconfirmed |
| Raichu | Thunder Shock | move | attackSpeedUp | 通常攻撃速度を上げる。 | enemy | 2 | durationOrBuffDebuff | unconfirmed |
| Raichu | Thunder Wave | move | paralysis | まひを付与する。 | enemy | 2 | durationOrBuffDebuff | unconfirmed |
| Raichu | Thunder Wave | move | attackSpeedUp | 通常攻撃速度を上げる。 | enemy | 2 | durationOrBuffDebuff | unconfirmed |
| Raichu | Thunderstorm Aerial | uniteMove | slow | 移動速度を下げる。 | enemy | 4 | durationOrBuffDebuff | unconfirmed |
| Raichu | Thunderstorm Aerial | uniteMove | shield | シールドを付与する。 | self |  | durationOrBuffDebuff | unconfirmed |
| Raichu | Thunderstorm Aerial | uniteMove | nextBoostedAttack | 次の通常攻撃または強化攻撃を準備する。 | enemy |  | actionOrderOrCooldown | unconfirmed |
| Raichu | Thunderstorm Aerial | uniteMove | boostedAttackCycle | 通常攻撃回数により強化攻撃になる。 | enemy |  | actionOrderOrCooldown | unconfirmed |
| Rapidash | Pastel Veil | passive | damageDealtChange | 与ダメージを変化させる。 | unconfirmed |  | durationOrBuffDebuff | unconfirmed |
| Rapidash | Pastel Veil | passive | shield | シールドを付与する。 | self |  | durationOrBuffDebuff | unconfirmed |
| Rapidash | Pastel Veil | passive | stackOrMark | スタック、マーク、ゲージを扱う。 | unconfirmed |  | selfStackOrGauge | unconfirmed |
| Rapidash | Pastel Veil | passive | formChange | フォーム・モード・構えを変化させる。 | self |  | formOrMode | unconfirmed |
| Rapidash | Tackle | move | slow | 移動速度を下げる。 | enemy | 2 | durationOrBuffDebuff | unconfirmed |
| Rapidash | Triad Blitz | uniteMove | stun | 行動不能・スタンを付与する。 | enemy | 0.8 | durationOrBuffDebuff | unconfirmed |
| Rapidash | Triad Blitz | uniteMove | unstoppable | 妨害無効になる。 | enemy | 0.8 | durationOrBuffDebuff | unconfirmed |
| Rapidash | Triad Blitz | uniteMove | cooldownReduction | 待ち時間を短縮する。 | unconfirmed |  | actionOrderOrCooldown | unconfirmed |
| Rapidash | Triad Blitz | uniteMove | shield | シールドを付与する。 | self |  | durationOrBuffDebuff | unconfirmed |
| Rapidash | Triad Blitz | uniteMove | reuseOrSecondActivation | 再使用・派生・2段目を持つ。 | unconfirmed | 5.5 | actionOrderOrCooldown | unconfirmed |
| Sableye | Attack | normalAttack | slow | 移動速度を下げる。 | enemy | 2 | durationOrBuffDebuff | unconfirmed |
| Sableye | Attack | normalAttack | boostedAttackCycle | 通常攻撃回数により強化攻撃になる。 | enemy | 2 | actionOrderOrCooldown | unconfirmed |
| Sableye | Thief | move | stun | 行動不能・スタンを付与する。 | enemy | 0.5 | durationOrBuffDebuff | unconfirmed |
| Sableye | Thief | move | slow | 移動速度を下げる。 | unconfirmed | 2 | durationOrBuffDebuff | unconfirmed |
| Sableye | Astonish | move | slow | 移動速度を下げる。 | enemy | 2 | durationOrBuffDebuff | unconfirmed |
| Sableye | Chaos Glower | uniteMove | stun | 行動不能・スタンを付与する。 | enemy | 3 | durationOrBuffDebuff | unconfirmed |
| Sableye | Chaos Glower | uniteMove | unstoppable | 妨害無効になる。 | enemy | 1.2 | durationOrBuffDebuff | unconfirmed |
| Sableye | Chaos Glower | uniteMove | cooldownReduction | 待ち時間を短縮する。 | unconfirmed |  | actionOrderOrCooldown | unconfirmed |
| Sableye | Chaos Glower | uniteMove | shield | シールドを付与する。 | self |  | durationOrBuffDebuff | unconfirmed |
| Scizor | Technician | passive | damageReduction | 受けるダメージを軽減する。 | unconfirmed |  | durationOrBuffDebuff | unconfirmed |
| Scizor | Technician | passive | nextBoostedAttack | 次の通常攻撃または強化攻撃を準備する。 | unconfirmed |  | actionOrderOrCooldown | unconfirmed |
| Scizor | Attack | normalAttack | defenseStatChange | 防御・特防を変化させる。 | enemy | 2 | durationOrBuffDebuff | unconfirmed |
| Scizor | Attack | normalAttack | stackOrMark | スタック、マーク、ゲージを扱う。 | unconfirmed |  | targetStackOrMark | unconfirmed |
| Scizor | Attack | normalAttack | boostedAttackCycle | 通常攻撃回数により強化攻撃になる。 | enemy | 2 | actionOrderOrCooldown | unconfirmed |
| Scizor | Red Illusion Dive | uniteMove | stun | 行動不能・スタンを付与する。 | enemy | 2 | durationOrBuffDebuff | unconfirmed |
| Scizor | Red Illusion Dive | uniteMove | knockBack | 相手を押し出す。 | enemy | 2 |  | unconfirmed |
| Scizor | Red Illusion Dive | uniteMove | slow | 移動速度を下げる。 | enemy | 3 | durationOrBuffDebuff | unconfirmed |
| Scizor | Red Illusion Dive | uniteMove | damageDealtChange | 与ダメージを変化させる。 | enemy | 3 | durationOrBuffDebuff | unconfirmed |
| Scizor | Red Illusion Dive | uniteMove | cooldownReduction | 待ち時間を短縮する。 | unconfirmed |  | actionOrderOrCooldown | unconfirmed |
| Scizor | Red Illusion Dive | uniteMove | shield | シールドを付与する。 | self |  | durationOrBuffDebuff | unconfirmed |
| Scizor | Red Illusion Dive | uniteMove | fieldArea | フィールド・設置範囲を生成する。 | area |  | durationOrBuffDebuff | unconfirmed |
| Scizor | Red Illusion Dive | uniteMove | reuseOrSecondActivation | 再使用・派生・2段目を持つ。 | enemy | 8 | actionOrderOrCooldown | unconfirmed |
| Scizor | Red Illusion Dive | uniteMove | cloneOrDecoy | 分身、コピー、身代わりなどを生成する。 | unconfirmed |  | durationOrBuffDebuff | unconfirmed |
| Scyther | Technician | passive | damageReduction | 受けるダメージを軽減する。 | unconfirmed |  | durationOrBuffDebuff | unconfirmed |
| Scyther | Technician | passive | nextBoostedAttack | 次の通常攻撃または強化攻撃を準備する。 | unconfirmed |  | actionOrderOrCooldown | unconfirmed |
| Scyther | Attack | normalAttack | boostedAttackCycle | 通常攻撃回数により強化攻撃になる。 | unconfirmed | 3 | actionOrderOrCooldown | unconfirmed |
| Scyther | Green Illusion Dive | uniteMove | damageReduction | 受けるダメージを軽減する。 | enemy |  | durationOrBuffDebuff | unconfirmed |
| Scyther | Green Illusion Dive | uniteMove | healing | HPを回復する。 | enemy | 5 | hpState | unconfirmed |
| Scyther | Green Illusion Dive | uniteMove | shield | シールドを付与する。 | self |  | durationOrBuffDebuff | unconfirmed |
| Scyther | Green Illusion Dive | uniteMove | stackOrMark | スタック、マーク、ゲージを扱う。 | enemy | 5 | targetStackOrMark | unconfirmed |
| Scyther | Green Illusion Dive | uniteMove | formChange | フォーム・モード・構えを変化させる。 | enemy |  | formOrMode | unconfirmed |
| Scyther | Green Illusion Dive | uniteMove | reuseOrSecondActivation | 再使用・派生・2段目を持つ。 | enemy | 5 | actionOrderOrCooldown | unconfirmed |
| Scyther | Green Illusion Dive | uniteMove | cloneOrDecoy | 分身、コピー、身代わりなどを生成する。 | enemy |  | durationOrBuffDebuff | unconfirmed |
| Sirfetch'd | Steadfast | passive | shield | シールドを付与する。 | self |  | durationOrBuffDebuff | unconfirmed |
| Sirfetch'd | Steadfast | passive | fieldArea | フィールド・設置範囲を生成する。 | area | 8 | durationOrBuffDebuff | unconfirmed |
| Sirfetch'd | Quick Attack | move | shield | シールドを付与する。 | self | 3 | durationOrBuffDebuff | unconfirmed |
| Sirfetch'd | Lunging Leek Nova Blast | uniteMove | stun | 行動不能・スタンを付与する。 | unconfirmed | 0.4 | durationOrBuffDebuff | unconfirmed |
| Sirfetch'd | Lunging Leek Nova Blast | uniteMove | unstoppable | 妨害無効になる。 | enemy | 1 | durationOrBuffDebuff | unconfirmed |
| Sirfetch'd | Lunging Leek Nova Blast | uniteMove | cooldownReduction | 待ち時間を短縮する。 | unconfirmed |  | actionOrderOrCooldown | unconfirmed |
| Sirfetch'd | Lunging Leek Nova Blast | uniteMove | shield | シールドを付与する。 | self |  | durationOrBuffDebuff | unconfirmed |
| Sirfetch'd | Lunging Leek Nova Blast | uniteMove | stackOrMark | スタック、マーク、ゲージを扱う。 | enemy | 1 | targetStackOrMark | unconfirmed |
| Sirfetch'd | Lunging Leek Nova Blast | uniteMove | formChange | フォーム・モード・構えを変化させる。 | self |  | formOrMode | unconfirmed |
| Sirfetch'd | Lunging Leek Nova Blast | uniteMove | wallOrTerrain | 壁・地形・草むらなどと相互作用する。 | area |  |  | unconfirmed |
| Skeledirge | Attack | normalAttack | boostedAttackCycle | 通常攻撃回数により強化攻撃になる。 | unconfirmed |  | actionOrderOrCooldown | unconfirmed |
| Skeledirge | Rousing Symphony | uniteMove | cooldownReduction | 待ち時間を短縮する。 | unconfirmed |  | actionOrderOrCooldown | unconfirmed |
| Skeledirge | Rousing Symphony | uniteMove | shield | シールドを付与する。 | self |  | durationOrBuffDebuff | unconfirmed |
| Slowbro | Oblivious | passive | slow | 移動速度を下げる。 | unconfirmed | 6 | durationOrBuffDebuff | unconfirmed |
| Slowbro | Oblivious | passive | defenseStatChange | 防御・特防を変化させる。 | enemy | 6 | durationOrBuffDebuff | unconfirmed |
| Slowbro | Oblivious | passive | healing | HPを回復する。 | self | 6 | hpState | unconfirmed |
| Slowbro | Oblivious | passive | fieldArea | フィールド・設置範囲を生成する。 | area | 6 | durationOrBuffDebuff | unconfirmed |
| Slowbro | Oblivious | passive | stackOrMark | スタック、マーク、ゲージを扱う。 | unconfirmed | 5 | targetStackOrMark | unconfirmed |
| Slowbro | Attack | normalAttack | boostedAttackCycle | 通常攻撃回数により強化攻撃になる。 | unconfirmed |  | actionOrderOrCooldown | unconfirmed |
| Slowbro | Water Gun | move | slow | 移動速度を下げる。 | enemy | 1 | durationOrBuffDebuff | unconfirmed |
| Slowbro | Water Gun | move | healing | HPを回復する。 | enemy |  | hpState | unconfirmed |
| Slowbro | Slack Off | move | slow | 移動速度を下げる。 | unconfirmed | 0.5 | durationOrBuffDebuff | unconfirmed |
| Slowbro | Slack Off | move | healing | HPを回復する。 | self | 0.5 | hpState | unconfirmed |
| Slowbro | Slack Off | move | damageOverTime | 継続ダメージを与える。 | unconfirmed | 0.5 | durationOrBuffDebuff | unconfirmed |
| Slowbro | Slowbeam | uniteMove | bind | バインドを付与する。 | ally | 3 | durationOrBuffDebuff | unconfirmed |
| Slowbro | Slowbeam | uniteMove | slow | 移動速度を下げる。 | unconfirmed |  | durationOrBuffDebuff | unconfirmed |
| Slowbro | Slowbeam | uniteMove | unstoppable | 妨害無効になる。 | self |  | durationOrBuffDebuff | unconfirmed |
| Slowbro | Slowbeam | uniteMove | shield | シールドを付与する。 | self |  | durationOrBuffDebuff | unconfirmed |
| Slowbro | Slowbeam | uniteMove | stackOrMark | スタック、マーク、ゲージを扱う。 | unconfirmed |  | targetStackOrMark | unconfirmed |
| Snorlax | Gluttony | passive | movementSpeedUp | 移動速度を上げる。 | self |  | durationOrBuffDebuff | unconfirmed |
| Snorlax | Gluttony | passive | healing | HPを回復する。 | self |  | hpState | unconfirmed |
| Snorlax | Attack | normalAttack | slow | 移動速度を下げる。 | enemy |  | durationOrBuffDebuff | unconfirmed |
| Snorlax | Attack | normalAttack | boostedAttackCycle | 通常攻撃回数により強化攻撃になる。 | enemy | 1 | actionOrderOrCooldown | unconfirmed |
| Snorlax | Tackle | move | nextBoostedAttack | 次の通常攻撃または強化攻撃を準備する。 | unconfirmed |  | actionOrderOrCooldown | unconfirmed |
| Snorlax | Tackle | move | boostedAttackCycle | 通常攻撃回数により強化攻撃になる。 | unconfirmed |  | actionOrderOrCooldown | unconfirmed |
| Snorlax | Rest | move | sleep | ねむりを付与する。 | unconfirmed | 3 | durationOrBuffDebuff | unconfirmed |
| Snorlax | Rest | move | unstoppable | 妨害無効になる。 | self | 3 | durationOrBuffDebuff | unconfirmed |
| Snorlax | Rest | move | wallOrTerrain | 壁・地形・草むらなどと相互作用する。 | enemy |  |  | unconfirmed |
| Snorlax | Power Nap | uniteMove | sleep | ねむりを付与する。 | enemy | 1 | durationOrBuffDebuff | unconfirmed |
| Snorlax | Power Nap | uniteMove | knockUp | 相手を打ち上げる。 | enemy | 1 |  | unconfirmed |
| Snorlax | Power Nap | uniteMove | slow | 移動速度を下げる。 | enemy | 1.5 | durationOrBuffDebuff | unconfirmed |
| Snorlax | Power Nap | uniteMove | unstoppable | 妨害無効になる。 | enemy | 1 | durationOrBuffDebuff | unconfirmed |
| Snorlax | Power Nap | uniteMove | healing | HPを回復する。 | ally |  | hpState | unconfirmed |
| Snorlax | Power Nap | uniteMove | shield | シールドを付与する。 | self |  | durationOrBuffDebuff | unconfirmed |
| Snorlax | Power Nap | uniteMove | damageOverTime | 継続ダメージを与える。 | enemy |  | durationOrBuffDebuff | unconfirmed |
| Snorlax | Power Nap | uniteMove | formChange | フォーム・モード・構えを変化させる。 | enemy | 1 | formOrMode | unconfirmed |
| Snorlax | Power Nap | uniteMove | reuseOrSecondActivation | 再使用・派生・2段目を持つ。 | enemy | 1 | actionOrderOrCooldown | unconfirmed |
| Suicune | Pressure | passive | freeze | こおり・凍結を付与する。 | enemy |  | durationOrBuffDebuff | unconfirmed |
| Suicune | Pressure | passive | damageReduction | 受けるダメージを軽減する。 | enemy |  | durationOrBuffDebuff | unconfirmed |
| Suicune | Pressure | passive | shield | シールドを付与する。 | self | 5 | durationOrBuffDebuff | unconfirmed |
| Suicune | Pressure | passive | stackOrMark | スタック、マーク、ゲージを扱う。 | unconfirmed | 5 | targetStackOrMark | unconfirmed |
| Suicune | Attack | normalAttack | freeze | こおり・凍結を付与する。 | enemy | 0.25 | durationOrBuffDebuff | unconfirmed |
| Suicune | Attack | normalAttack | stackOrMark | スタック、マーク、ゲージを扱う。 | unconfirmed | 5 | targetStackOrMark | unconfirmed |
| Suicune | Water Pulse | move | stackOrMark | スタック、マーク、ゲージを扱う。 | enemy | 3 | targetStackOrMark | unconfirmed |
| Suicune | Avalanche | move | freeze | こおり・凍結を付与する。 | enemy | 1 | durationOrBuffDebuff | unconfirmed |
| Suicune | Avalanche | move | slow | 移動速度を下げる。 | enemy | 1.5 | durationOrBuffDebuff | unconfirmed |
| Suicune | Avalanche | move | delayedDamage | 遅延または時間差でダメージを与える。 | unconfirmed | 1 | durationOrBuffDebuff | unconfirmed |
| Suicune | Endless Ice Spikes | uniteMove | freeze | こおり・凍結を付与する。 | unconfirmed |  | durationOrBuffDebuff | unconfirmed |
| Suicune | Endless Ice Spikes | uniteMove | stun | 行動不能・スタンを付与する。 | unconfirmed |  | durationOrBuffDebuff | unconfirmed |
| Suicune | Endless Ice Spikes | uniteMove | cooldownReduction | 待ち時間を短縮する。 | unconfirmed |  | actionOrderOrCooldown | unconfirmed |
| Suicune | Endless Ice Spikes | uniteMove | shield | シールドを付与する。 | self |  | durationOrBuffDebuff | unconfirmed |
| Suicune | Endless Ice Spikes | uniteMove | delayedDamage | 遅延または時間差でダメージを与える。 | enemy | 2 | durationOrBuffDebuff | unconfirmed |
| Suicune | Endless Ice Spikes | uniteMove | stackOrMark | スタック、マーク、ゲージを扱う。 | unconfirmed |  | targetStackOrMark | unconfirmed |
| Sylveon | Adaptability | passive | attackStatChange | 攻撃・特攻などのステータスを変化させる。 | unconfirmed | 1.5 | durationOrBuffDebuff | unconfirmed |
| Sylveon | Adaptability | passive | stackOrMark | スタック、マーク、ゲージを扱う。 | unconfirmed | 1.5 | selfStackOrGauge | unconfirmed |
| Sylveon | Attack - Eevee | normalAttack | boostedAttackCycle | 通常攻撃回数により強化攻撃になる。 | unconfirmed |  | actionOrderOrCooldown | unconfirmed |
| Sylveon | Baby-Doll Eyes | move | slow | 移動速度を下げる。 | enemy | 1 | durationOrBuffDebuff | unconfirmed |
| Sylveon | Fairy Frolic | uniteMove | invincible | 無敵になる。 | self |  | durationOrBuffDebuff | unconfirmed |
| Sylveon | Fairy Frolic | uniteMove | damageDealtChange | 与ダメージを変化させる。 | enemy |  | durationOrBuffDebuff | unconfirmed |
| Sylveon | Fairy Frolic | uniteMove | cooldownReduction | 待ち時間を短縮する。 | unconfirmed |  | actionOrderOrCooldown | unconfirmed |
| Sylveon | Fairy Frolic | uniteMove | healing | HPを回復する。 | enemy |  | hpState | unconfirmed |
| Sylveon | Fairy Frolic | uniteMove | shield | シールドを付与する。 | self |  | durationOrBuffDebuff | unconfirmed |
| Sylveon | Fairy Frolic | uniteMove | wildPokemonRule | 野生ポケモン限定の処理を持つ。 | unconfirmed |  | targetType | unconfirmed |
| Talonflame | Gale Wings | passive | movementSpeedUp | 移動速度を上げる。 | self |  | durationOrBuffDebuff | unconfirmed |
| Talonflame | Attack | normalAttack | nextBoostedAttack | 次の通常攻撃または強化攻撃を準備する。 | unconfirmed |  | actionOrderOrCooldown | unconfirmed |
| Talonflame | Attack | normalAttack | boostedAttackCycle | 通常攻撃回数により強化攻撃になる。 | enemy |  | actionOrderOrCooldown | unconfirmed |
| Talonflame | Flame Sweep | uniteMove | unstoppable | 妨害無効になる。 | enemy |  | durationOrBuffDebuff | unconfirmed |
| Talonflame | Flame Sweep | uniteMove | damageReduction | 受けるダメージを軽減する。 | enemy |  | durationOrBuffDebuff | unconfirmed |
| Talonflame | Flame Sweep | uniteMove | shield | シールドを付与する。 | self |  | durationOrBuffDebuff | unconfirmed |
| Talonflame | Flame Sweep | uniteMove | formChange | フォーム・モード・構えを変化させる。 | enemy |  | formOrMode | unconfirmed |
| Talonflame | Flame Sweep | uniteMove | wallOrTerrain | 壁・地形・草むらなどと相互作用する。 | area |  |  | unconfirmed |
| Tinkaton | Mold Breaker | passive | damageDealtChange | 与ダメージを変化させる。 | enemy |  | durationOrBuffDebuff | unconfirmed |
| Tinkaton | Mold Breaker | passive | shield | シールドを付与する。 | enemy |  | durationOrBuffDebuff | unconfirmed |
| Tinkaton | Attack | normalAttack | nextBoostedAttack | 次の通常攻撃または強化攻撃を準備する。 | unconfirmed |  | actionOrderOrCooldown | unconfirmed |
| Tinkaton | Attack | normalAttack | boostedAttackCycle | 通常攻撃回数により強化攻撃になる。 | unconfirmed | 12 | actionOrderOrCooldown | unconfirmed |
| Tinkaton | Attack | normalAttack | hpReferenceDamage | 現在HP・最大HP・減少HPなどを参照する。 | unconfirmed | 12 | hpState | unconfirmed |
| Tinkaton | Rock Smash | move | stun | 行動不能・スタンを付与する。 | enemy | 0.15 | durationOrBuffDebuff | unconfirmed |
| Tinkaton | Fairy Wind | move | slow | 移動速度を下げる。 | enemy | 1 | durationOrBuffDebuff | unconfirmed |
| Tinkaton | Kiss Bliss Kaboom | uniteMove | stun | 行動不能・スタンを付与する。 | ally | 1.2 | durationOrBuffDebuff | unconfirmed |
| Tinkaton | Kiss Bliss Kaboom | uniteMove | cooldownReduction | 待ち時間を短縮する。 | unconfirmed |  | actionOrderOrCooldown | unconfirmed |
| Tinkaton | Kiss Bliss Kaboom | uniteMove | shield | シールドを付与する。 | self |  | durationOrBuffDebuff | unconfirmed |
| Trevenant | Natural Cure | passive | cooldownReduction | 待ち時間を短縮する。 | unconfirmed | 1 | actionOrderOrCooldown | unconfirmed |
| Trevenant | Natural Cure | passive | damageOverTime | 継続ダメージを与える。 | unconfirmed | 0.5 | durationOrBuffDebuff | unconfirmed |
| Trevenant | Attack | normalAttack | healing | HPを回復する。 | self |  | hpState | unconfirmed |
| Trevenant | Attack | normalAttack | boostedAttackCycle | 通常攻撃回数により強化攻撃になる。 | enemy |  | actionOrderOrCooldown | unconfirmed |
| Trevenant | Will-o-Wisp | move | burn | やけどを付与する。 | enemy | 3 | durationOrBuffDebuff | unconfirmed |
| Trevenant | Will-o-Wisp | move | attackStatChange | 攻撃・特攻などのステータスを変化させる。 | enemy | 3 | durationOrBuffDebuff | unconfirmed |
| Trevenant | Branch Poke | move | slow | 移動速度を下げる。 | enemy | 2 | durationOrBuffDebuff | unconfirmed |
| Trevenant | Branch Poke | move | healing | HPを回復する。 | enemy | 2 | hpState | unconfirmed |
| Trevenant | Phantom Forest | uniteMove | knockUp | 相手を打ち上げる。 | enemy | 2 |  | unconfirmed |
| Trevenant | Phantom Forest | uniteMove | slow | 移動速度を下げる。 | enemy | 2 | durationOrBuffDebuff | unconfirmed |
| Trevenant | Phantom Forest | uniteMove | unstoppable | 妨害無効になる。 | enemy | 2 | durationOrBuffDebuff | unconfirmed |
| Trevenant | Phantom Forest | uniteMove | shield | シールドを付与する。 | enemy | 6 | durationOrBuffDebuff | unconfirmed |
| Trevenant | Phantom Forest | uniteMove | stackOrMark | スタック、マーク、ゲージを扱う。 | enemy | 2 | targetStackOrMark | unconfirmed |
| Tsareena | Attack | normalAttack | boostedAttackCycle | 通常攻撃回数により強化攻撃になる。 | enemy | 1 | actionOrderOrCooldown | unconfirmed |
| Tsareena | Queen Ascendant | uniteMove | cooldownReduction | 待ち時間を短縮する。 | unconfirmed |  | actionOrderOrCooldown | unconfirmed |
| Tsareena | Queen Ascendant | uniteMove | healing | HPを回復する。 | self |  | hpState | unconfirmed |
| Tsareena | Queen Ascendant | uniteMove | shield | シールドを付与する。 | self |  | durationOrBuffDebuff | unconfirmed |
| Typhlosion | Blaze | passive | damageOverTime | 継続ダメージを与える。 | unconfirmed | 5 | durationOrBuffDebuff | unconfirmed |
| Typhlosion | Attack | normalAttack | boostedAttackCycle | 通常攻撃回数により強化攻撃になる。 | unconfirmed |  | actionOrderOrCooldown | unconfirmed |
| Typhlosion | Ember | move | burn | やけどを付与する。 | enemy | 2 | durationOrBuffDebuff | unconfirmed |
| Typhlosion | Tackle | move | stun | 行動不能・スタンを付与する。 | enemy | 0.5 | durationOrBuffDebuff | unconfirmed |
| Typhlosion | Tackle | move | slow | 移動速度を下げる。 | enemy | 1 | durationOrBuffDebuff | unconfirmed |
| Typhlosion | Tackle | move | shield | シールドを付与する。 | enemy | 1 | durationOrBuffDebuff | unconfirmed |
| Typhlosion | Explosive Heat Haze | uniteMove | unstoppable | 妨害無効になる。 | enemy |  | durationOrBuffDebuff | unconfirmed |
| Typhlosion | Explosive Heat Haze | uniteMove | cooldownReduction | 待ち時間を短縮する。 | unconfirmed |  | actionOrderOrCooldown | unconfirmed |
| Typhlosion | Explosive Heat Haze | uniteMove | shield | シールドを付与する。 | self |  | durationOrBuffDebuff | unconfirmed |
| Typhlosion | Explosive Heat Haze | uniteMove | damageOverTime | 継続ダメージを与える。 | unconfirmed | 4.5 | durationOrBuffDebuff | unconfirmed |
| Tyranitar | Guts | passive | attackStatChange | 攻撃・特攻などのステータスを変化させる。 | unconfirmed | 3 | durationOrBuffDebuff | unconfirmed |
| Tyranitar | Attack | normalAttack | boostedAttackCycle | 通常攻撃回数により強化攻撃になる。 | unconfirmed |  | actionOrderOrCooldown | unconfirmed |
| Tyranitar | Attack | normalAttack | lifestealOrDamageHeal | 与ダメージに応じて回復する。 | unconfirmed |  | hpState | unconfirmed |
| Tyranitar | Bite | move | immobilize | 移動不能を付与する。 | enemy | 0.6 | durationOrBuffDebuff | unconfirmed |
| Tyranitar | Tyrannical Rampage | uniteMove | unstoppable | 妨害無効になる。 | self | 10 | durationOrBuffDebuff | unconfirmed |
| Tyranitar | Tyrannical Rampage | uniteMove | damageReduction | 受けるダメージを軽減する。 | enemy |  | durationOrBuffDebuff | unconfirmed |
| Tyranitar | Tyrannical Rampage | uniteMove | cooldownReduction | 待ち時間を短縮する。 | unconfirmed |  | actionOrderOrCooldown | unconfirmed |
| Tyranitar | Tyrannical Rampage | uniteMove | shield | シールドを付与する。 | self |  | durationOrBuffDebuff | unconfirmed |
| Umbreon | Anticipation | passive | knockUp | 相手を打ち上げる。 | unconfirmed |  |  | unconfirmed |
| Umbreon | Anticipation | passive | knockBack | 相手を押し出す。 | unconfirmed |  |  | unconfirmed |
| Umbreon | Attack | normalAttack | healing | HPを回復する。 | self |  | hpState | unconfirmed |
| Umbreon | Attack | normalAttack | boostedAttackCycle | 通常攻撃回数により強化攻撃になる。 | unconfirmed |  | actionOrderOrCooldown | unconfirmed |
| Umbreon | Attack | normalAttack | hpReferenceDamage | 現在HP・最大HP・減少HPなどを参照する。 | unconfirmed |  | hpState | unconfirmed |
| Umbreon | Swift | move | stackOrMark | スタック、マーク、ゲージを扱う。 | unconfirmed | 4 | selfStackOrGauge | unconfirmed |
| Umbreon | Swift | move | nextBoostedAttack | 次の通常攻撃または強化攻撃を準備する。 | unconfirmed |  | actionOrderOrCooldown | unconfirmed |
| Umbreon | Swift | move | boostedAttackCycle | 通常攻撃回数により強化攻撃になる。 | unconfirmed |  | actionOrderOrCooldown | unconfirmed |
| Umbreon | Fake Tears | move | defenseStatChange | 防御・特防を変化させる。 | unconfirmed | 2 | durationOrBuffDebuff | unconfirmed |
| Umbreon | Fake Tears | move | shield | シールドを付与する。 | self | 4 | durationOrBuffDebuff | unconfirmed |
| Umbreon | Moonlight Prance | uniteMove | stun | 行動不能・スタンを付与する。 | unconfirmed | 1 | durationOrBuffDebuff | unconfirmed |
| Umbreon | Moonlight Prance | uniteMove | slow | 移動速度を下げる。 | enemy | 5 | durationOrBuffDebuff | unconfirmed |
| Umbreon | Moonlight Prance | uniteMove | unstoppable | 妨害無効になる。 | enemy |  | durationOrBuffDebuff | unconfirmed |
| Umbreon | Moonlight Prance | uniteMove | shield | シールドを付与する。 | enemy |  | durationOrBuffDebuff | unconfirmed |
| Urshifu | Attack - Kubfu | normalAttack | boostedAttackCycle | 通常攻撃回数により強化攻撃になる。 | enemy |  | actionOrderOrCooldown | unconfirmed |
| Urshifu | Rock Smash | move | damageReduction | 受けるダメージを軽減する。 | unconfirmed | 2 | durationOrBuffDebuff | unconfirmed |
| Urshifu | Rock Smash | move | delayedDamage | 遅延または時間差でダメージを与える。 | unconfirmed | 2 | durationOrBuffDebuff | unconfirmed |
| Urshifu | Ebon Fist | uniteMove | stun | 行動不能・スタンを付与する。 | enemy |  | durationOrBuffDebuff | unconfirmed |
| Urshifu | Ebon Fist | uniteMove | knockUp | 相手を打ち上げる。 | enemy |  |  | unconfirmed |
| Urshifu | Ebon Fist | uniteMove | knockBack | 相手を押し出す。 | enemy |  |  | unconfirmed |
| Urshifu | Ebon Fist | uniteMove | unstoppable | 妨害無効になる。 | self |  | durationOrBuffDebuff | unconfirmed |
| Urshifu | Ebon Fist | uniteMove | damageReduction | 受けるダメージを軽減する。 | enemy |  | durationOrBuffDebuff | unconfirmed |
| Urshifu | Ebon Fist | uniteMove | cooldownReduction | 待ち時間を短縮する。 | unconfirmed |  | actionOrderOrCooldown | unconfirmed |
| Urshifu | Ebon Fist | uniteMove | shield | シールドを付与する。 | self |  | durationOrBuffDebuff | unconfirmed |
| Urshifu | Flowing Fists | uniteMove | unstoppable | 妨害無効になる。 | enemy | 10 | durationOrBuffDebuff | unconfirmed |
| Urshifu | Flowing Fists | uniteMove | damageReduction | 受けるダメージを軽減する。 | enemy |  | durationOrBuffDebuff | unconfirmed |
| Urshifu | Flowing Fists | uniteMove | cooldownReduction | 待ち時間を短縮する。 | unconfirmed |  | actionOrderOrCooldown | unconfirmed |
| Urshifu | Flowing Fists | uniteMove | shield | シールドを付与する。 | self |  | durationOrBuffDebuff | unconfirmed |
| Urshifu | Flowing Fists | uniteMove | reuseOrSecondActivation | 再使用・派生・2段目を持つ。 | enemy |  | actionOrderOrCooldown | unconfirmed |
| Vaporeon | Attack | normalAttack | boostedAttackCycle | 通常攻撃回数により強化攻撃になる。 | unconfirmed |  | actionOrderOrCooldown | unconfirmed |
| Vaporeon | Swift | move | slow | 移動速度を下げる。 | unconfirmed |  | durationOrBuffDebuff | unconfirmed |
| Vaporeon | Tackle | move | knockBack | 相手を押し出す。 | enemy | 0.25 |  | unconfirmed |
| Vaporeon | Tackle | move | formChange | フォーム・モード・構えを変化させる。 | enemy |  | formOrMode | unconfirmed |
| Vaporeon | Aquamarine Splash | uniteMove | knockUp | 相手を打ち上げる。 | enemy | 1 |  | unconfirmed |
| Vaporeon | Aquamarine Splash | uniteMove | pull | 相手を引き寄せる。 | enemy | 0.3 |  | unconfirmed |
| Vaporeon | Aquamarine Splash | uniteMove | shield | シールドを付与する。 | self |  | durationOrBuffDebuff | unconfirmed |
| Venusaur | Overgrow | passive | damageDealtChange | 与ダメージを変化させる。 | unconfirmed |  | durationOrBuffDebuff | unconfirmed |
| Venusaur | Overgrow | passive | hpThreshold | HP割合条件で発動する。 | self |  | hpState | unconfirmed |
| Venusaur | Attack | normalAttack | stun | 行動不能・スタンを付与する。 | enemy | 0.4 | durationOrBuffDebuff | unconfirmed |
| Venusaur | Attack | normalAttack | pull | 相手を引き寄せる。 | enemy | 0.4 |  | unconfirmed |
| Venusaur | Attack | normalAttack | slow | 移動速度を下げる。 | enemy | 0.4 | durationOrBuffDebuff | unconfirmed |
| Venusaur | Attack | normalAttack | boostedAttackCycle | 通常攻撃回数により強化攻撃になる。 | enemy | 0.4 | actionOrderOrCooldown | unconfirmed |
| Venusaur | Verdant Anger | uniteMove | slow | 移動速度を下げる。 | enemy | 1 | durationOrBuffDebuff | unconfirmed |
| Venusaur | Verdant Anger | uniteMove | unstoppable | 妨害無効になる。 | enemy | 1 | durationOrBuffDebuff | unconfirmed |
| Venusaur | Verdant Anger | uniteMove | cooldownReduction | 待ち時間を短縮する。 | unconfirmed |  | actionOrderOrCooldown | unconfirmed |
| Venusaur | Verdant Anger | uniteMove | shield | シールドを付与する。 | self |  | durationOrBuffDebuff | unconfirmed |
| Wigglytuff | Attack | normalAttack | stun | 行動不能・スタンを付与する。 | enemy | 0.5 | durationOrBuffDebuff | unconfirmed |
| Wigglytuff | Attack | normalAttack | boostedAttackCycle | 通常攻撃回数により強化攻撃になる。 | enemy | 0.5 | actionOrderOrCooldown | unconfirmed |
| Wigglytuff | Pound | move | slow | 移動速度を下げる。 | enemy | 3 | durationOrBuffDebuff | unconfirmed |
| Wigglytuff | Pound | move | formChange | フォーム・モード・構えを変化させる。 | enemy |  | formOrMode | unconfirmed |
| Wigglytuff | Defense Curl | move | knockUp | 相手を打ち上げる。 | enemy | 0.5 |  | unconfirmed |
| Wigglytuff | Defense Curl | move | shield | シールドを付与する。 | enemy | 0.5 | durationOrBuffDebuff | unconfirmed |
| Wigglytuff | Defense Curl | move | formChange | フォーム・モード・構えを変化させる。 | enemy | 0.5 | formOrMode | unconfirmed |
| Wigglytuff | Starlight Recital | uniteMove | unstoppable | 妨害無効になる。 | ally | 3 | durationOrBuffDebuff | unconfirmed |
| Wigglytuff | Starlight Recital | uniteMove | cooldownReduction | 待ち時間を短縮する。 | unconfirmed |  | actionOrderOrCooldown | unconfirmed |
| Wigglytuff | Starlight Recital | uniteMove | healing | HPを回復する。 | ally |  | hpState | unconfirmed |
| Wigglytuff | Starlight Recital | uniteMove | shield | シールドを付与する。 | ally | 3 | durationOrBuffDebuff | unconfirmed |
| Wigglytuff | Starlight Recital | uniteMove | formChange | フォーム・モード・構えを変化させる。 | ally | 3 | formOrMode | unconfirmed |
| Zacian | Attack | normalAttack | formChange | フォーム・モード・構えを変化させる。 | self | 2 | formOrMode | unconfirmed |
| Zacian | Slash | move | slow | 移動速度を下げる。 | unconfirmed | 0.5 | durationOrBuffDebuff | unconfirmed |
| Zacian | Quick Attack | move | stun | 行動不能・スタンを付与する。 | enemy | 1 | durationOrBuffDebuff | unconfirmed |
| Zacian | Sovereign Sword | uniteMove | slow | 移動速度を下げる。 | unconfirmed |  | durationOrBuffDebuff | unconfirmed |
| Zacian | Sovereign Sword | uniteMove | unstoppable | 妨害無効になる。 | self |  | durationOrBuffDebuff | unconfirmed |
| Zacian | Sovereign Sword | uniteMove | damageDealtChange | 与ダメージを変化させる。 | enemy |  | durationOrBuffDebuff | unconfirmed |
| Zacian | Sovereign Sword | uniteMove | cooldownReduction | 待ち時間を短縮する。 | unconfirmed |  | actionOrderOrCooldown | unconfirmed |
| Zacian | Sovereign Sword | uniteMove | shield | シールドを付与する。 | self |  | durationOrBuffDebuff | unconfirmed |
| Zacian | Sovereign Sword | uniteMove | formChange | フォーム・モード・構えを変化させる。 | self |  | formOrMode | unconfirmed |
| Zapdos | Static | passive | paralysis | まひを付与する。 | enemy | 2.5 | durationOrBuffDebuff | unconfirmed |
| Zapdos | Static | passive | slow | 移動速度を下げる。 | enemy | 3 | durationOrBuffDebuff | unconfirmed |
| Zapdos | Static | passive | attackSpeedDown | 通常攻撃速度を下げる。 | enemy | 2.5 | durationOrBuffDebuff | unconfirmed |
| Zapdos | Attack | normalAttack | cooldownReduction | 待ち時間を短縮する。 | enemy | 1 | actionOrderOrCooldown | unconfirmed |
| Zapdos | Discharge | move | paralysis | まひを付与する。 | enemy |  | durationOrBuffDebuff | unconfirmed |
| Zapdos | Discharge | move | attackSpeedDown | 通常攻撃速度を下げる。 | enemy | 2.5 | durationOrBuffDebuff | unconfirmed |
| Zapdos | Discharge | move | stackOrMark | スタック、マーク、ゲージを扱う。 | unconfirmed |  | targetStackOrMark | unconfirmed |
| Zapdos | High-Voltage Siege | uniteMove | paralysis | まひを付与する。 | enemy | 2.5 | durationOrBuffDebuff | unconfirmed |
| Zapdos | High-Voltage Siege | uniteMove | stun | 行動不能・スタンを付与する。 | unconfirmed |  | durationOrBuffDebuff | unconfirmed |
| Zapdos | High-Voltage Siege | uniteMove | pull | 相手を引き寄せる。 | unconfirmed |  |  | unconfirmed |
| Zapdos | High-Voltage Siege | uniteMove | attackSpeedDown | 通常攻撃速度を下げる。 | enemy | 2.5 | durationOrBuffDebuff | unconfirmed |
| Zapdos | High-Voltage Siege | uniteMove | cooldownReduction | 待ち時間を短縮する。 | unconfirmed |  | actionOrderOrCooldown | unconfirmed |
| Zapdos | High-Voltage Siege | uniteMove | shield | シールドを付与する。 | self |  | durationOrBuffDebuff | unconfirmed |
| Zapdos | High-Voltage Siege | uniteMove | formChange | フォーム・モード・構えを変化させる。 | self |  | formOrMode | unconfirmed |
| Zeraora | Volt Absorb | passive | damageReduction | 受けるダメージを軽減する。 | unconfirmed | 4 | durationOrBuffDebuff | unconfirmed |
| Zeraora | Attack | normalAttack | paralysis | まひを付与する。 | enemy |  | durationOrBuffDebuff | unconfirmed |
| Zeraora | Attack | normalAttack | boostedAttackCycle | 通常攻撃回数により強化攻撃になる。 | enemy |  | actionOrderOrCooldown | unconfirmed |
| Zeraora | Attack | normalAttack | hpReferenceDamage | 現在HP・最大HP・減少HPなどを参照する。 | enemy |  | hpState | unconfirmed |
| Zeraora | Agility | move | attackSpeedUp | 通常攻撃速度を上げる。 | self | 3 | durationOrBuffDebuff | unconfirmed |
| Zeraora | Agility | move | formChange | フォーム・モード・構えを変化させる。 | self |  | formOrMode | unconfirmed |
| Zeraora | Slash | move | knockUp | 相手を打ち上げる。 | enemy | 0.5 |  | unconfirmed |
| Zeraora | Plasma Gale | uniteMove | paralysis | まひを付与する。 | enemy | 3 | durationOrBuffDebuff | unconfirmed |
| Zeraora | Plasma Gale | uniteMove | knockUp | 相手を打ち上げる。 | enemy | 0.5 |  | unconfirmed |
| Zeraora | Plasma Gale | uniteMove | unstoppable | 妨害無効になる。 | self | 0.5 | durationOrBuffDebuff | unconfirmed |
| Zeraora | Plasma Gale | uniteMove | damageDealtChange | 与ダメージを変化させる。 | unconfirmed |  | durationOrBuffDebuff | unconfirmed |
| Zeraora | Plasma Gale | uniteMove | cooldownReduction | 待ち時間を短縮する。 | unconfirmed |  | actionOrderOrCooldown | unconfirmed |
| Zeraora | Plasma Gale | uniteMove | shield | シールドを付与する。 | self |  | durationOrBuffDebuff | unconfirmed |
| Zoroark | Illusion | passive | unstoppable | 妨害無効になる。 | self | 0.33 | durationOrBuffDebuff | unconfirmed |
| Zoroark | Illusion | passive | wildPokemonRule | 野生ポケモン限定の処理を持つ。 | enemy |  | targetType | unconfirmed |
| Zoroark | Illusion | passive | formChange | フォーム・モード・構えを変化させる。 | enemy | 15 | formOrMode | unconfirmed |
| Zoroark | Attack | normalAttack | boostedAttackCycle | 通常攻撃回数により強化攻撃になる。 | unconfirmed |  | actionOrderOrCooldown | unconfirmed |
| Zoroark | Fury Swipes | move | reuseOrSecondActivation | 再使用・派生・2段目を持つ。 | unconfirmed | 4 | actionOrderOrCooldown | unconfirmed |
| Zoroark | Nightfall Daze | uniteMove | unstoppable | 妨害無効になる。 | self | 1.33 | durationOrBuffDebuff | unconfirmed |
| Zoroark | Nightfall Daze | uniteMove | shield | シールドを付与する。 | self |  | durationOrBuffDebuff | unconfirmed |

## 特殊効果0件のソース例

- Azumarill / Huge Power (passive)
- Blaziken / Blaze (passive)
- Blissey / Natural Cure (passive)
- Ceruledge / Flame Body (passive)
- Ceruledge / Lava Plume (move)
- Mega Charizard Y / Blaze (passive)
- Cinderace / Low Sweep (move)
- Delphox / Ember (move)
- Dhelmise / Attack (normalAttack)
- Espeon / Swift (move)
- Feraligatr / Torrent (passive)
- Feraligatr / Attack (normalAttack)
- Garchomp / Bulldoze (move)
- Gardevoir / Synchronize (passive)
- Glaceon / Swift (move)
- Gyarados / Attack - Magikarp (normalAttack)
- Gyarados / Flail (move)
- Gyarados / Splash (move)
- Mega Gyarados / Flail (move)
- Mega Gyarados / Splash (move)
- Hoopa / Magician (passive)
- Inteleon / Water Gun (move)
- Latias / Attack (normalAttack)
- Latias / Swift (move)
- Latios / Attack (normalAttack)
- Latios / Swift (move)
- Leafeon / Run Away (passive)
- Leafeon / Quick Attack (move)
- Mega Lucario / Justified (passive)
- Mega Lucario / Quick Attack (move)
- Machamp / Guts (passive)
- Machamp / Karate Chop (move)
- Meganium / Attack (normalAttack)
- Meowscarada / Attack (normalAttack)
- Meowscarada / Hone Claws (move)
- Meowth / Scratch (move)
- Meowth / Feint (move)
- Metagross / Clear Body (passive)
- Metagross / Tackle (move)
- Mimikyu / Astonish (move)
- Miraidon / Attack (normalAttack)
- Miraidon / Thunder Shock (move)
- Moltres / Wing Attack (move)
- Moltres / Incinerate (move)
- Mr. Mime / Fake Out (move)
- Pawmot / Scratch (move)
- Psyduck / Attack (normalAttack)
- Rapidash / Attack (normalAttack)
- Rapidash / Confusion (move)
- Sableye / Prankster (passive)

## 検証結果

- errors: 0
- warnings: 0
