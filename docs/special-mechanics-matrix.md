# 特殊効果 横断マトリクス

全ポケモンを対象にしたドラフト調査です。このファイルは比較用であり、実装仕様として確定したものではありません。

調査日: 2026-06-23
出典: https://unite-db.com/pokemon.json を主に使用し、必要に応じてピカチュウ・エースバーン・ゲッコウガの既存ローカル調査ファイルも参照しています。

## 調査対象

- Absol (Speedster)
- Aegislash (All-Rounder)
- Alcremie (Supporter)
- Armarouge (Attacker)
- Articuno (Defender)
- Azumarill (All-Rounder)
- Blastoise (Defender)
- Blaziken (All-Rounder)
- Blissey (Supporter)
- Buzzwole (All-Rounder)
- Ceruledge (All-Rounder)
- Chandelure (Attacker)
- Charizard (All-Rounder)
- Mega Charizard X (All-Rounder)
- Mega Charizard Y (All-Rounder)
- Cinderace (Attacker)
- Clefable (Supporter)
- Comfey (Supporter)
- Cramorant (Attacker)
- Crustle (Defender)
- Darkrai (Speedster)
- Decidueye (Attacker)
- Delphox (Attacker)
- Dhelmise (All-Rounder)
- Dodrio (Speedster)
- Dragapult (Attacker)
- Dragonite (All-Rounder)
- Duraludon (Attacker)
- Eldegoss (Supporter)
- Empoleon (All-Rounder)
- Espeon (Attacker)
- Falinks (All-Rounder)
- Feraligatr (All-Rounder)
- Garchomp (All-Rounder)
- Gardevoir (Attacker)
- Gengar (Speedster)
- Glaceon (Attacker)
- Goodra (Defender)
- Greedent (Defender)
- Greninja (Attacker)
- Gyarados (All-Rounder)
- Mega Gyarados (All-Rounder)
- Ho-Oh (Defender)
- Hoopa (Supporter)
- Inteleon (Attacker)
- Lapras (Defender)
- Latias (Supporter)
- Latios (Attacker)
- Leafeon (Speedster)
- Lucario (All-Rounder)
- Mega Lucario (All-Rounder)
- Machamp (All-Rounder)
- Mamoswine (Defender)
- Meganium (Supporter)
- Meowscarada (Speedster)
- Meowth (Speedster)
- Metagross (All-Rounder)
- Mew (Attacker)
- Mega Mewtwo X (All-Rounder)
- Mega Mewtwo Y (Attacker)
- Mimikyu (All-Rounder)
- Miraidon (Attacker)
- Moltres (All-Rounder)
- Mr. Mime (Supporter)
- Ninetales (Attacker)
- Pawmot (All-Rounder)
- Pikachu (Attacker)
- Psyduck (Supporter)
- Quaquaval (All-Rounder)
- Raichu (Attacker)
- Rapidash (Speedster)
- Sableye (Supporter)
- Scizor (All-Rounder)
- Scyther (All-Rounder)
- Sirfetch'd (All-Rounder)
- Skeledirge (Attacker)
- Slowbro (Defender)
- Snorlax (Defender)
- Suicune (All-Rounder)
- Sylveon (Attacker)
- Talonflame (Speedster)
- Tinkaton (All-Rounder)
- Trevenant (Defender)
- Tsareena (All-Rounder)
- Typhlosion (Attacker)
- Tyranitar (All-Rounder)
- Umbreon (Defender)
- Urshifu (All-Rounder)
- Vaporeon (Defender)
- Venusaur (Attacker)
- Wigglytuff (Supporter)
- Zacian (All-Rounder)
- Zapdos (Attacker)
- Zeraora (Speedster)
- Zoroark (Speedster)

## 集計

- 調査した効果数: 569
- `battleState` が必要そうな効果: 542
- 攻撃順が必要そうな効果: 346
- 時間管理が必要そうな効果: 355
- 対象ごとの個別管理が必要そうな効果: 162
- スタック/ゲージ系の効果: 95
- 回復系の効果: 46
- シールド系の効果: 125

## 一覧表

| ポケモン | 効果 | 効果元 | 発動契機 | 状態保持者 | 対象 | スタック | 持続時間 | クールダウン | 攻撃順 | battleState | 確認状態 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Absol | Super Luck | passive | passive condition or always-on effect | self | self | no | no | no | no | no | unconfirmed |
| Absol | Attack | normalAttack | basic attack hit / boosted attack cycle | target | enemy | no | yes | no | yes | yes | unconfirmed |
| Absol | Attack Boosted | boostedAttack | basic attack hit / boosted attack cycle | target | enemy | no | yes | yes | yes | yes | unconfirmed |
| Absol | Feint | move | move hit | self | self | no | yes | yes | no | yes | unconfirmed |
| Absol | Slash | move | Move 2 | target | enemy | no | no | yes | no | yes | unconfirmed |
| Absol | Midnight Slash | uniteMove | unite move use or hit | target | enemy | no | yes | yes | yes | yes | unconfirmed |
| Aegislash | No Guard | passive | passive condition or always-on effect | unconfirmed | unconfirmed | no | no | no | yes | yes | unconfirmed |
| Aegislash | Attack | normalAttack | basic attack hit / boosted attack cycle | target | enemy | yes | yes | yes | yes | yes | unconfirmed |
| Aegislash | Attack Boosted | boostedAttack | basic attack hit / boosted attack cycle | unconfirmed | unconfirmed | yes | yes | yes | yes | yes | unconfirmed |
| Aegislash | Shadow Sneak | move | Move 1 | target | enemy | yes | no | yes | yes | yes | unconfirmed |
| Aegislash | Iron Defense | move | Move 2 | self | self | yes | yes | yes | yes | yes | unconfirmed |
| Aegislash | Coup de Grace | uniteMove | unite move use or hit | target | enemy | yes | yes | yes | no | yes | unconfirmed |
| Alcremie | Aroma Veil | passive | passive condition or always-on effect | unconfirmed | ally | yes | yes | yes | yes | yes | unconfirmed |
| Alcremie | Attack | normalAttack | basic attack hit / boosted attack cycle | unconfirmed | unconfirmed | no | no | no | yes | yes | unconfirmed |
| Alcremie | Attack Boosted | boostedAttack | basic attack hit / boosted attack cycle | unconfirmed | unconfirmed | no | no | yes | yes | yes | unconfirmed |
| Alcremie | Helping Hand | move | Move 1 | self | ally | no | yes | yes | no | yes | unconfirmed |
| Alcremie | Charm | move | Move 2 | target | ally | yes | yes | yes | no | yes | unconfirmed |
| Alcremie | Fluffy Cream Supreme | uniteMove | unite move use or hit | unconfirmed | ally | no | yes | yes | no | yes | unconfirmed |
| Armarouge | Flash Fire | passive | passive condition or always-on effect | self | enemy | no | yes | yes | yes | yes | unconfirmed |
| Armarouge | Attack - Charcadet | normalAttack | basic attack hit / boosted attack cycle | unconfirmed | unconfirmed | no | no | no | yes | yes | unconfirmed |
| Armarouge | Attack - Charcadet Boosted | boostedAttack | basic attack hit / boosted attack cycle | unconfirmed | unconfirmed | no | no | yes | yes | yes | unconfirmed |
| Armarouge | Incinerate | move | Move 1 | self | enemy | no | yes | yes | no | yes | unconfirmed |
| Armarouge | Will-o-Wisp | move | after move use | target | enemy | no | yes | yes | yes | yes | unconfirmed |
| Armarouge | Psykaboom | uniteMove | unite move use or hit | self | enemy | no | yes | yes | yes | yes | unconfirmed |
| Articuno | Snow Cloak | passive | passive condition or always-on effect | self | ally | yes | yes | yes | yes | yes | unconfirmed |
| Articuno | Attack | normalAttack | basic attack hit / boosted attack cycle | target | enemy | no | yes | no | yes | yes | unconfirmed |
| Articuno | Attack Boosted | boostedAttack | basic attack hit / boosted attack cycle | unconfirmed | unconfirmed | no | no | yes | yes | yes | unconfirmed |
| Articuno | Icy Wind | move | Move 1 | self | enemy | yes | yes | yes | no | yes | unconfirmed |
| Articuno | Ice Shard | move | Move 2 | target | enemy | yes | yes | yes | no | yes | unconfirmed |
| Articuno | Ice Wing Whiteout | uniteMove | unite move use or hit | self | ally | no | no | yes | no | yes | unconfirmed |
| Azumarill | Huge Power | passive | passive condition or always-on effect | self | enemy | no | no | no | no | no | unconfirmed |
| Azumarill | Attack | normalAttack | basic attack hit / boosted attack cycle | self | self | no | yes | no | yes | yes | unconfirmed |
| Azumarill | Attack Boosted | boostedAttack | basic attack hit / boosted attack cycle | self | self | no | yes | yes | yes | yes | unconfirmed |
| Azumarill | Tackle | move | Move 1 | unconfirmed | enemy | no | yes | yes | no | yes | unconfirmed |
| Azumarill | Bubble | move | Move 2 | unconfirmed | area | no | yes | yes | no | yes | unconfirmed |
| Azumarill | Belly Bash | uniteMove | unite move use or hit | target | enemy | yes | yes | yes | yes | yes | unconfirmed |
| Blastoise | Torrent | passive | passive condition or always-on effect | self | unconfirmed | no | no | no | no | yes | unconfirmed |
| Blastoise | Attack | normalAttack | basic attack hit / boosted attack cycle | target | enemy | no | yes | yes | yes | yes | unconfirmed |
| Blastoise | Attack Boosted | boostedAttack | basic attack hit / boosted attack cycle | target | unconfirmed | no | yes | yes | yes | yes | unconfirmed |
| Blastoise | Water Gun | move | Move 1 | target | enemy | no | yes | yes | yes | yes | unconfirmed |
| Blastoise | Skull Bash | move | move hit | unconfirmed | enemy | no | yes | yes | yes | yes | unconfirmed |
| Blastoise | Hydro Typhoon | uniteMove | unite move use or hit | self | enemy | no | yes | yes | yes | yes | unconfirmed |
| Blaziken | Blaze | passive | passive condition or always-on effect | self | enemy | no | yes | no | no | yes | unconfirmed |
| Blaziken | Attack | normalAttack | basic attack hit / boosted attack cycle | unconfirmed | area | no | no | no | no | yes | unconfirmed |
| Blaziken | Aerial Ace | move | move hit | unconfirmed | enemy | no | yes | yes | yes | yes | unconfirmed |
| Blaziken | Ember | move | Move 2 | unconfirmed | enemy | no | yes | yes | no | yes | unconfirmed |
| Blaziken | Spinning Flame Fist | uniteMove | unite move use or hit | target | self | no | yes | yes | yes | yes | unconfirmed |
| Blaziken | Spinning Flame Kick | uniteMove | unite move use or hit | target | self | no | yes | yes | yes | yes | unconfirmed |
| Blissey | Natural Cure | passive | passive condition or always-on effect | self | ally | no | yes | yes | yes | yes | unconfirmed |
| Blissey | Attack | normalAttack | basic attack hit / boosted attack cycle | unconfirmed | unconfirmed | no | yes | no | yes | yes | unconfirmed |
| Blissey | Attack Boosted | boostedAttack | basic attack hit / boosted attack cycle | unconfirmed | unconfirmed | no | no | yes | yes | yes | unconfirmed |
| Blissey | Pound | move | move hit | self | enemy | no | yes | yes | no | yes | unconfirmed |
| Blissey | Heal Pulse | move | Move 2 | self | ally | no | yes | yes | no | yes | unconfirmed |
| Blissey | Bliss Assistance | uniteMove | unite move use or hit | target | ally | no | yes | yes | yes | yes | unconfirmed |
| Buzzwole | Beast Boost | passive | passive condition or always-on effect | unconfirmed | enemy | yes | yes | no | no | yes | unconfirmed |
| Buzzwole | Attack | normalAttack | basic attack hit / boosted attack cycle | unconfirmed | enemy | yes | no | no | yes | yes | unconfirmed |
| Buzzwole | Attack Boosted | boostedAttack | basic attack hit / boosted attack cycle | unconfirmed | unconfirmed | no | no | yes | yes | yes | unconfirmed |
| Buzzwole | Mega Punch | move | Move 1 | target | enemy | yes | no | yes | yes | yes | unconfirmed |
| Buzzwole | Fell Stinger | move | Move 2 | self | enemy | yes | yes | yes | no | yes | unconfirmed |
| Buzzwole | Ultra Swole Slam | uniteMove | unite move use or hit | target | enemy | no | yes | yes | yes | yes | unconfirmed |
| Ceruledge | Flame Body | passive | passive condition or always-on effect | self | enemy | no | yes | yes | yes | yes | unconfirmed |
| Ceruledge | Attack - Charcadet | normalAttack | basic attack hit / boosted attack cycle | unconfirmed | unconfirmed | no | no | no | yes | yes | unconfirmed |
| Ceruledge | Attack - Charcadet Boosted | boostedAttack | basic attack hit / boosted attack cycle | unconfirmed | unconfirmed | no | no | yes | yes | yes | unconfirmed |
| Ceruledge | Lava Plume | move | Move 1 | target | self | no | no | yes | yes | yes | unconfirmed |
| Ceruledge | Take Down | move | Move 2 | target | self | no | yes | yes | no | yes | unconfirmed |
| Ceruledge | Revenant Rend | uniteMove | unite move use or hit | target | unconfirmed | yes | yes | yes | yes | yes | unconfirmed |
| Chandelure | Infiltrator | passive | passive condition or always-on effect | self | self | yes | yes | no | no | yes | unconfirmed |
| Chandelure | Attack | normalAttack | basic attack hit / boosted attack cycle | target | unconfirmed | no | yes | no | yes | yes | unconfirmed |
| Chandelure | Attack Boosted | boostedAttack | basic attack hit / boosted attack cycle | unconfirmed | unconfirmed | no | yes | yes | no | yes | unconfirmed |
| Chandelure | Ember | move | Move 1 | unconfirmed | unconfirmed | no | yes | yes | yes | yes | unconfirmed |
| Chandelure | Night Shade | move | Move 2 | unconfirmed | area | yes | yes | yes | yes | yes | unconfirmed |
| Chandelure | Ignite Midnight | uniteMove | unite move use or hit | self | self | no | yes | yes | yes | yes | unconfirmed |
| Charizard | Blaze | passive | passive condition or always-on effect | self | self | no | no | no | no | yes | unconfirmed |
| Charizard | Attack | normalAttack | basic attack hit / boosted attack cycle | self | enemy | no | yes | no | yes | yes | unconfirmed |
| Charizard | Attack Boosted | boostedAttack | basic attack hit / boosted attack cycle | unconfirmed | unconfirmed | no | no | yes | no | no | unconfirmed |
| Charizard | Flame Burst | move | move hit | target | enemy | no | yes | yes | yes | yes | unconfirmed |
| Charizard | Fire Spin | move | after move use | target | enemy | no | yes | yes | yes | yes | unconfirmed |
| Charizard | Seismic Slam | uniteMove | unite move use or hit | target | enemy | no | yes | yes | yes | yes | unconfirmed |
| Mega Charizard X | Solar Power | passive | passive condition or always-on effect | self | enemy | no | yes | no | no | yes | unconfirmed |
| Mega Charizard X | Attack | normalAttack | basic attack hit / boosted attack cycle | self | enemy | no | yes | no | no | yes | unconfirmed |
| Mega Charizard X | Attack Boosted | boostedAttack | basic attack hit / boosted attack cycle | unconfirmed | unconfirmed | no | no | yes | yes | yes | unconfirmed |
| Mega Charizard X | Flame Burst | move | move hit | target | enemy | no | yes | yes | yes | yes | unconfirmed |
| Mega Charizard X | Fire Spin | move | after move use | target | enemy | no | yes | yes | yes | yes | unconfirmed |
| Mega Charizard X | Seismic Slam | uniteMove | unite move use or hit | target | enemy | no | yes | yes | no | yes | unconfirmed |
| Mega Charizard Y | Blaze | passive | passive condition or always-on effect | unconfirmed | unconfirmed | no | yes | no | yes | yes | unconfirmed |
| Mega Charizard Y | Attack | normalAttack | basic attack hit / boosted attack cycle | self | enemy | no | yes | no | no | yes | unconfirmed |
| Mega Charizard Y | Attack Boosted | boostedAttack | basic attack hit / boosted attack cycle | unconfirmed | unconfirmed | no | no | yes | yes | yes | unconfirmed |
| Mega Charizard Y | Flame Burst | move | move hit | target | enemy | no | yes | yes | yes | yes | unconfirmed |
| Mega Charizard Y | Fire Spin | move | Move 2 | target | enemy | no | yes | yes | yes | yes | unconfirmed |
| Mega Charizard Y | Seismic Slam | uniteMove | unite move use or hit | target | enemy | no | yes | yes | no | yes | unconfirmed |
| Cinderace | Blaze | passive | passive condition or always-on effect | target | enemy | yes | yes | yes | yes | yes | unconfirmed |
| Cinderace | Attack | normalAttack | basic attack hit / boosted attack cycle | unconfirmed | unconfirmed | no | no | no | yes | yes | unconfirmed |
| Cinderace | Attack Boosted | boostedAttack | basic attack hit / boosted attack cycle | unconfirmed | unconfirmed | no | no | yes | yes | yes | unconfirmed |
| Cinderace | Ember | move | Move 1 | target | enemy | no | yes | yes | no | yes | unconfirmed |
| Cinderace | Low Sweep | move | Move 2 | unconfirmed | enemy | no | no | yes | no | no | unconfirmed |
| Cinderace | Blazing Bicycle Kick | uniteMove | unite move use or hit | unconfirmed | enemy | yes | yes | yes | no | yes | unconfirmed |
| Clefable | Magic Guard | passive | passive condition or always-on effect | self | ally | no | yes | no | no | yes | unconfirmed |
| Clefable | Attack | normalAttack | basic attack hit / boosted attack cycle | unconfirmed | unconfirmed | no | no | no | yes | yes | unconfirmed |
| Clefable | Attack Boosted | boostedAttack | basic attack hit / boosted attack cycle | unconfirmed | unconfirmed | no | no | yes | yes | yes | unconfirmed |
| Clefable | Heal Pulse | move | Move 1 | self | ally | no | no | yes | no | no | unconfirmed |
| Clefable | Disarming Voice | move | Move 2 | self | self | no | yes | yes | no | yes | unconfirmed |
| Clefable | Wonder Wish | uniteMove | unite move use or hit | unconfirmed | ally | no | yes | yes | yes | yes | unconfirmed |
| Comfey | Triage | passive | passive condition or always-on effect | target | ally | yes | yes | yes | yes | yes | unconfirmed |
| Comfey | Attack | normalAttack | basic attack hit / boosted attack cycle | unconfirmed | unconfirmed | no | no | no | yes | yes | unconfirmed |
| Comfey | Attack Boosted | boostedAttack | basic attack hit / boosted attack cycle | unconfirmed | unconfirmed | no | no | yes | yes | yes | unconfirmed |
| Comfey | Synthesis | move | Move 1 | unconfirmed | ally | no | no | yes | no | yes | unconfirmed |
| Comfey | Vine Whip | move | move hit | unconfirmed | ally | no | yes | yes | no | yes | unconfirmed |
| Comfey | Flowery Fields Forever | uniteMove | unite move use or hit | unconfirmed | area | no | yes | yes | yes | yes | unconfirmed |
| Cramorant | Gulp Missile | passive | passive condition or always-on effect | self | enemy | yes | yes | no | yes | yes | unconfirmed |
| Cramorant | Attack | normalAttack | basic attack hit / boosted attack cycle | target | enemy | no | no | no | yes | yes | unconfirmed |
| Cramorant | Attack Boosted | boostedAttack | basic attack hit / boosted attack cycle | target | enemy | no | no | yes | yes | yes | unconfirmed |
| Cramorant | Whirlpool | move | Move 1 | self | enemy | no | yes | yes | yes | yes | unconfirmed |
| Cramorant | Feather Dance | move | Move 2 | self | enemy | no | yes | yes | no | yes | unconfirmed |
| Cramorant | Gatling Gulp Missile | uniteMove | unite move use or hit | self | enemy | no | yes | yes | yes | yes | unconfirmed |
| Crustle | Sturdy | passive | passive condition or always-on effect | self | self | yes | no | no | no | yes | unconfirmed |
| Crustle | Attack | normalAttack | basic attack hit / boosted attack cycle | unconfirmed | enemy | no | yes | no | yes | yes | unconfirmed |
| Crustle | Attack Boosted | boostedAttack | basic attack hit / boosted attack cycle | unconfirmed | area | no | no | yes | yes | yes | unconfirmed |
| Crustle | Rock Slide | move | move hit | self | enemy | no | yes | yes | no | yes | unconfirmed |
| Crustle | Fury Cutter | move | Move 2 | target | enemy | yes | yes | yes | no | yes | unconfirmed |
| Crustle | Rubble Rouser | uniteMove | unite move use or hit | self | enemy | no | yes | yes | yes | yes | unconfirmed |
| Darkrai | Bad Dreams | passive | passive condition or always-on effect | target | enemy | yes | yes | no | yes | yes | unconfirmed |
| Darkrai | Attack | normalAttack | basic attack hit / boosted attack cycle | target | enemy | no | no | no | yes | yes | unconfirmed |
| Darkrai | Attack Boosted | boostedAttack | basic attack hit / boosted attack cycle | unconfirmed | unconfirmed | no | no | yes | yes | yes | unconfirmed |
| Darkrai | Hypnosis | move | Move 1 | unconfirmed | enemy | no | yes | yes | yes | yes | unconfirmed |
| Darkrai | Calm Mind | move | Move 2 | self | self | no | yes | yes | no | yes | unconfirmed |
| Darkrai | Worst Nightmare | uniteMove | unite move use or hit | target | enemy | yes | yes | yes | no | yes | unconfirmed |
| Decidueye | Long Reach | passive | passive condition or always-on effect | unconfirmed | unconfirmed | no | no | no | no | no | unconfirmed |
| Decidueye | Attack | normalAttack | basic attack hit / boosted attack cycle | unconfirmed | unconfirmed | yes | yes | no | yes | yes | unconfirmed |
| Decidueye | Attack Boosted | boostedAttack | basic attack hit / boosted attack cycle | unconfirmed | unconfirmed | yes | no | yes | yes | yes | unconfirmed |
| Decidueye | Leafage | move | after move use | target | unconfirmed | no | yes | yes | yes | yes | unconfirmed |
| Decidueye | Astonish | move | Move 2 | unconfirmed | unconfirmed | no | no | yes | no | no | unconfirmed |
| Decidueye | Nock Nock | uniteMove | unite move use or hit | target | enemy | no | yes | yes | no | yes | unconfirmed |
| Delphox | Blaze | passive | passive condition or always-on effect | unconfirmed | unconfirmed | no | yes | yes | yes | yes | unconfirmed |
| Delphox | Attack | normalAttack | basic attack hit / boosted attack cycle | unconfirmed | unconfirmed | no | no | no | yes | yes | unconfirmed |
| Delphox | Attack Boosted | boostedAttack | basic attack hit / boosted attack cycle | unconfirmed | unconfirmed | no | no | yes | yes | yes | unconfirmed |
| Delphox | Ember | move | Move 1 | target | self | no | no | yes | no | yes | unconfirmed |
| Delphox | Will-o-Wisp | move | Move 2 | target | ally | no | yes | yes | no | yes | unconfirmed |
| Delphox | Fanciful Fireworks | uniteMove | unite move use or hit | unconfirmed | area | no | yes | yes | yes | yes | unconfirmed |
| Dhelmise | Steelworker | passive | passive condition or always-on effect | self | enemy | yes | yes | yes | yes | yes | unconfirmed |
| Dhelmise | Attack | normalAttack | basic attack hit / boosted attack cycle | self | self | no | no | no | yes | yes | unconfirmed |
| Dhelmise | Attack Boosted | boostedAttack | basic attack hit / boosted attack cycle | unconfirmed | unconfirmed | no | no | yes | yes | yes | unconfirmed |
| Dhelmise | Payback | move | Move 1 | target | enemy | no | yes | yes | no | yes | unconfirmed |
| Dhelmise | Bulldoze | move | Move 2 | self | enemy | no | yes | yes | no | yes | unconfirmed |
| Dhelmise | Seaweed Snare | uniteMove | unite move use or hit | target | enemy | no | yes | yes | no | yes | unconfirmed |
| Dodrio | Run Away | passive | passive condition or always-on effect | self | enemy | yes | yes | no | no | yes | unconfirmed |
| Dodrio | Attack | normalAttack | basic attack hit / boosted attack cycle | self | enemy | yes | yes | yes | yes | yes | unconfirmed |
| Dodrio | Attack Boosted | boostedAttack | basic attack hit / boosted attack cycle | self | enemy | yes | yes | yes | yes | yes | unconfirmed |
| Dodrio | Peck | move | Move 1 | unconfirmed | unconfirmed | yes | no | yes | no | yes | unconfirmed |
| Dodrio | Quick Attack | move | Move 2 | target | enemy | no | yes | yes | no | yes | unconfirmed |
| Dodrio | Triple Trample | uniteMove | unite move use or hit | unconfirmed | enemy | yes | yes | yes | no | yes | unconfirmed |
| Dragapult | Clear Body | passive | passive condition or always-on effect | self | self | no | yes | no | no | yes | unconfirmed |
| Dragapult | Attack | normalAttack | basic attack hit / boosted attack cycle | self | enemy | yes | yes | no | yes | yes | unconfirmed |
| Dragapult | Attack Boosted | boostedAttack | basic attack hit / boosted attack cycle | self | unconfirmed | yes | no | yes | yes | yes | unconfirmed |
| Dragapult | Astonish | move | move hit | unconfirmed | enemy | no | yes | yes | yes | yes | unconfirmed |
| Dragapult | Quick Attack | move | Move 2 | unconfirmed | unconfirmed | no | yes | yes | no | yes | unconfirmed |
| Dragapult | Dreep and Destroy | uniteMove | unite move use or hit | target | enemy | yes | yes | yes | yes | yes | unconfirmed |
| Dragonite | Marvel Scale | passive | passive condition or always-on effect | unconfirmed | unconfirmed | no | yes | no | no | yes | unconfirmed |
| Dragonite | Attack - Dratini | normalAttack | basic attack hit / boosted attack cycle | unconfirmed | unconfirmed | no | yes | yes | yes | yes | unconfirmed |
| Dragonite | Attack - Dratini Boosted | boostedAttack | basic attack hit / boosted attack cycle | unconfirmed | unconfirmed | no | yes | yes | yes | yes | unconfirmed |
| Dragonite | Twister | move | Move 1 | target | unconfirmed | no | yes | yes | no | yes | unconfirmed |
| Dragonite | Dragon Breath | move | move hit | self | enemy | no | no | yes | yes | yes | unconfirmed |
| Dragonite | Draco Impact | uniteMove | unite move use or hit | target | enemy | yes | yes | yes | yes | yes | unconfirmed |
| Duraludon | Heavy Metal | passive | passive condition or always-on effect | unconfirmed | unconfirmed | no | yes | yes | yes | yes | unconfirmed |
| Duraludon | Attack | normalAttack | basic attack hit / boosted attack cycle | target | unconfirmed | no | no | no | yes | yes | unconfirmed |
| Duraludon | Attack Boosted | boostedAttack | basic attack hit / boosted attack cycle | target | unconfirmed | no | no | yes | yes | yes | unconfirmed |
| Duraludon | Laser Focus | move | Move 1 | target | unconfirmed | no | yes | yes | yes | yes | unconfirmed |
| Duraludon | Metal Claw | move | after move use | target | unconfirmed | no | yes | yes | yes | yes | unconfirmed |
| Duraludon | Revolving Ruin | uniteMove | unite move use or hit | target | enemy | yes | yes | yes | yes | yes | unconfirmed |
| Eldegoss | Cotton Down | passive | passive condition or always-on effect | self | enemy | no | yes | yes | yes | yes | unconfirmed |
| Eldegoss | Attack | normalAttack | basic attack hit / boosted attack cycle | target | enemy | no | yes | yes | yes | yes | unconfirmed |
| Eldegoss | Attack Boosted | boostedAttack | basic attack hit / boosted attack cycle | self | enemy | no | no | yes | yes | yes | unconfirmed |
| Eldegoss | Leafage | move | move hit | target | enemy | no | yes | yes | yes | yes | unconfirmed |
| Eldegoss | Synthesis | move | Move 2 | self | ally | no | no | yes | no | no | unconfirmed |
| Eldegoss | Cotton Cloud Crash | uniteMove | unite move use or hit | target | ally | no | yes | yes | yes | yes | unconfirmed |
| Empoleon | Torrent | passive | passive condition or always-on effect | self | enemy | yes | no | no | no | yes | unconfirmed |
| Empoleon | Attack | normalAttack | basic attack hit / boosted attack cycle | self | self | yes | no | no | yes | yes | unconfirmed |
| Empoleon | Attack Boosted | boostedAttack | basic attack hit / boosted attack cycle | unconfirmed | unconfirmed | no | no | yes | yes | yes | unconfirmed |
| Empoleon | Water Gun | move | Move 1 | self | enemy | yes | yes | yes | yes | yes | unconfirmed |
| Empoleon | Peck | move | Move 2 | self | enemy | yes | yes | yes | yes | yes | unconfirmed |
| Empoleon | Sovereign Slide | uniteMove | unite move use or hit | self | enemy | yes | yes | yes | no | yes | unconfirmed |
| Espeon | Anticipation | passive | passive condition or always-on effect | unconfirmed | unconfirmed | no | yes | yes | no | yes | unconfirmed |
| Espeon | Attack - Eevee | normalAttack | basic attack hit / boosted attack cycle | unconfirmed | unconfirmed | no | no | no | yes | yes | unconfirmed |
| Espeon | Attack - Eevee Boosted | boostedAttack | basic attack hit / boosted attack cycle | unconfirmed | unconfirmed | no | no | yes | yes | yes | unconfirmed |
| Espeon | Swift | move | Move 1 | target | enemy | no | no | yes | no | yes | unconfirmed |
| Espeon | Growl | move | Move 2 | unconfirmed | enemy | no | yes | yes | no | yes | unconfirmed |
| Espeon | Psychic Solare | uniteMove | unite move use or hit | unconfirmed | area | no | yes | yes | yes | yes | unconfirmed |
| Falinks | Battle Armor | passive | passive condition or always-on effect | target | enemy | yes | no | no | no | yes | unconfirmed |
| Falinks | Attack | normalAttack | basic attack hit / boosted attack cycle | self | enemy | no | yes | yes | yes | yes | unconfirmed |
| Falinks | Attack Boosted | boostedAttack | basic attack hit / boosted attack cycle | unconfirmed | unconfirmed | no | no | yes | yes | yes | unconfirmed |
| Falinks | Tackle | move | Move 1 | target | self | no | no | yes | yes | yes | unconfirmed |
| Falinks | Bulk Up | move | Move 2 | self | self | no | yes | yes | no | yes | unconfirmed |
| Falinks | Dust Devil Formation | uniteMove | unite move use or hit | target | enemy | yes | yes | yes | yes | yes | unconfirmed |
| Feraligatr | Torrent | passive | passive condition or always-on effect | self | self | no | yes | yes | no | yes | unconfirmed |
| Feraligatr | Attack | normalAttack | basic attack hit / boosted attack cycle | self | enemy | no | no | no | yes | yes | unconfirmed |
| Feraligatr | Attack Boosted | boostedAttack | basic attack hit / boosted attack cycle | unconfirmed | unconfirmed | no | no | yes | yes | yes | unconfirmed |
| Feraligatr | Bite | move | Move 1 | self | enemy | no | yes | yes | yes | yes | unconfirmed |
| Feraligatr | Scratch | move | Move 2 | self | enemy | no | yes | yes | no | yes | unconfirmed |
| Feraligatr | Big Jaw Bite | uniteMove | unite move use or hit | self | ally | yes | yes | yes | yes | yes | unconfirmed |
| Garchomp | Rough Skin | passive | passive condition or always-on effect | unconfirmed | enemy | no | yes | yes | no | yes | unconfirmed |
| Garchomp | Attack | normalAttack | basic attack hit / boosted attack cycle | self | enemy | yes | yes | no | yes | yes | unconfirmed |
| Garchomp | Attack Boosted | boostedAttack | basic attack hit / boosted attack cycle | self | enemy | no | no | yes | yes | yes | unconfirmed |
| Garchomp | Sand Attack | move | move hit | self | enemy | no | yes | yes | no | yes | unconfirmed |
| Garchomp | Bulldoze | move | Move 2 | self | enemy | no | no | yes | no | no | unconfirmed |
| Garchomp | Livid Outrage | uniteMove | unite move use or hit | target | enemy | no | yes | yes | yes | yes | unconfirmed |
| Gardevoir | Synchronize | passive | passive condition or always-on effect | self | enemy | no | yes | yes | yes | yes | unconfirmed |
| Gardevoir | Attack | normalAttack | basic attack hit / boosted attack cycle | unconfirmed | enemy | no | yes | no | yes | yes | unconfirmed |
| Gardevoir | Attack Boosted | boostedAttack | basic attack hit / boosted attack cycle | unconfirmed | area | no | no | yes | yes | yes | unconfirmed |
| Gardevoir | Confusion | move | Move 1 | target | enemy | no | yes | yes | no | yes | unconfirmed |
| Gardevoir | Teleport | move | Move 2 | self | self | no | no | yes | yes | yes | unconfirmed |
| Gardevoir | Fairy Singularity | uniteMove | unite move use or hit | self | enemy | no | yes | yes | no | yes | unconfirmed |
| Gengar | Levitate | passive | passive condition or always-on effect | self | self | no | yes | no | yes | yes | unconfirmed |
| Gengar | Attack | normalAttack | basic attack hit / boosted attack cycle | target | enemy | no | no | no | yes | yes | unconfirmed |
| Gengar | Attack Boosted | boostedAttack | basic attack hit / boosted attack cycle | unconfirmed | enemy | no | no | yes | yes | yes | unconfirmed |
| Gengar | Will-o-Wisp | move | move hit | target | enemy | no | yes | yes | no | yes | unconfirmed |
| Gengar | Lick | move | Move 2 | target | enemy | no | no | yes | yes | yes | unconfirmed |
| Gengar | Phantom Ambush | uniteMove | unite move use or hit | self | enemy | no | yes | yes | yes | yes | unconfirmed |
| Glaceon | Run Away | passive | passive condition or always-on effect | unconfirmed | unconfirmed | no | yes | yes | yes | yes | unconfirmed |
| Glaceon | Attack | normalAttack | basic attack hit / boosted attack cycle | unconfirmed | unconfirmed | no | yes | no | yes | yes | unconfirmed |
| Glaceon | Attack Boosted | boostedAttack | basic attack hit / boosted attack cycle | unconfirmed | unconfirmed | no | yes | yes | yes | yes | unconfirmed |
| Glaceon | Swift | move | Move 1 | target | enemy | no | no | yes | yes | yes | unconfirmed |
| Glaceon | Tail Whip | move | after move use | self | enemy | no | yes | yes | yes | yes | unconfirmed |
| Glaceon | Glacial Stage | uniteMove | unite move use or hit | self | self | no | yes | yes | no | yes | unconfirmed |
| Goodra | Gooey | passive | passive condition or always-on effect | self | ally | yes | yes | yes | yes | yes | unconfirmed |
| Goodra | Attack | normalAttack | basic attack hit / boosted attack cycle | self | self | no | yes | yes | yes | yes | unconfirmed |
| Goodra | Attack Boosted | boostedAttack | basic attack hit / boosted attack cycle | unconfirmed | unconfirmed | no | no | yes | yes | yes | unconfirmed |
| Goodra | Bubble | move | Move 1 | self | enemy | no | yes | yes | yes | yes | unconfirmed |
| Goodra | Tackle | move | move hit | self | self | no | no | yes | no | yes | unconfirmed |
| Goodra | Right as Rain | uniteMove | unite move use or hit | self | ally | no | yes | yes | yes | yes | unconfirmed |
| Greedent | Cheek Pouch | passive | passive condition or always-on effect | unconfirmed | unconfirmed | no | yes | yes | yes | yes | unconfirmed |
| Greedent | Attack | normalAttack | basic attack hit / boosted attack cycle | unconfirmed | unconfirmed | no | no | no | yes | yes | unconfirmed |
| Greedent | Attack Boosted | boostedAttack | basic attack hit / boosted attack cycle | unconfirmed | unconfirmed | no | no | yes | yes | yes | unconfirmed |
| Greedent | Tackle | move | Move 1 | self | self | no | yes | yes | no | yes | unconfirmed |
| Greedent | Defense Curl | move | Move 2 | unconfirmed | unconfirmed | no | yes | yes | no | yes | unconfirmed |
| Greedent | Berry Belly Flop | uniteMove | unite move use or hit | unconfirmed | area | no | yes | yes | no | yes | unconfirmed |
| Greninja | Torrent | passive | passive condition or always-on effect | unconfirmed | unconfirmed | no | no | no | no | yes | unconfirmed |
| Greninja | Attack | normalAttack | basic attack hit / boosted attack cycle | target | enemy | no | yes | yes | yes | yes | unconfirmed |
| Greninja | Attack Boosted | boostedAttack | basic attack hit / boosted attack cycle | unconfirmed | unconfirmed | no | no | yes | yes | yes | unconfirmed |
| Greninja | Bubble | move | move hit | unconfirmed | enemy | no | yes | yes | no | yes | unconfirmed |
| Greninja | Substitute | move | Move 2 | self | self | no | yes | yes | no | yes | unconfirmed |
| Greninja | Waterburst Shuriken | uniteMove | unite move use or hit | self | enemy | no | yes | yes | yes | yes | unconfirmed |
| Gyarados | Rattled | passive | passive condition or always-on effect | unconfirmed | enemy | yes | yes | no | no | yes | unconfirmed |
| Gyarados | Attack - Magikarp | normalAttack | basic attack hit / boosted attack cycle | unconfirmed | unconfirmed | no | no | no | yes | yes | unconfirmed |
| Gyarados | Attack - Magikarp Boosted | boostedAttack | basic attack hit / boosted attack cycle | unconfirmed | unconfirmed | no | no | yes | yes | yes | unconfirmed |
| Gyarados | Flail | move | Move 1 | self | enemy | no | no | yes | no | yes | unconfirmed |
| Gyarados | Splash | move | Move 2 | unconfirmed | unconfirmed | no | yes | yes | no | yes | unconfirmed |
| Gyarados | Dragon Current | uniteMove | unite move use or hit | target | enemy | no | yes | yes | yes | yes | unconfirmed |
| Mega Gyarados | Swift Swim | passive | passive condition or always-on effect | self | enemy | yes | yes | no | no | yes | unconfirmed |
| Mega Gyarados | Attack | normalAttack | basic attack hit / boosted attack cycle | unconfirmed | unconfirmed | no | no | no | yes | yes | unconfirmed |
| Mega Gyarados | Attack Boosted | boostedAttack | basic attack hit / boosted attack cycle | unconfirmed | unconfirmed | no | no | yes | yes | yes | unconfirmed |
| Mega Gyarados | Flail | move | Move 1 | self | enemy | no | no | yes | no | yes | unconfirmed |
| Mega Gyarados | Splash | move | Move 2 | unconfirmed | unconfirmed | no | yes | yes | no | yes | unconfirmed |
| Mega Gyarados | Dragon Current | uniteMove | unite move use or hit | target | enemy | no | yes | yes | yes | yes | unconfirmed |
| Ho-Oh | Regenerator | passive | passive condition or always-on effect | self | ally | no | yes | no | no | yes | unconfirmed |
| Ho-Oh | Attack | normalAttack | basic attack hit / boosted attack cycle | unconfirmed | enemy | no | no | no | yes | yes | unconfirmed |
| Ho-Oh | Attack Boosted | boostedAttack | basic attack hit / boosted attack cycle | unconfirmed | unconfirmed | no | no | yes | yes | yes | unconfirmed |
| Ho-Oh | Safeguard | move | Move 1 | self | self | no | yes | yes | yes | yes | unconfirmed |
| Ho-Oh | Tailwind | move | Move 2 | target | ally | no | yes | yes | yes | yes | unconfirmed |
| Ho-Oh | Rekindling Flame | uniteMove | unite move use or hit | unconfirmed | ally | yes | yes | yes | no | yes | unconfirmed |
| Hoopa | Magician | passive | passive condition or always-on effect | unconfirmed | ally | yes | yes | yes | yes | yes | unconfirmed |
| Hoopa | Attack | normalAttack | basic attack hit / boosted attack cycle | unconfirmed | unconfirmed | no | no | no | yes | yes | unconfirmed |
| Hoopa | Attack Boosted | boostedAttack | basic attack hit / boosted attack cycle | unconfirmed | unconfirmed | no | no | yes | yes | yes | unconfirmed |
| Hoopa | Astonish | move | Move 1 | unconfirmed | area | no | yes | yes | no | no | unconfirmed |
| Hoopa | Confusion | move | Move 2 | unconfirmed | enemy | no | yes | yes | no | yes | unconfirmed |
| Hoopa | Rings Unbound | uniteMove | unite move use or hit | unconfirmed | ally | no | yes | yes | no | yes | unconfirmed |
| Inteleon | Sniper | passive | passive condition or always-on effect | target | ally | yes | yes | no | yes | yes | unconfirmed |
| Inteleon | Attack | normalAttack | basic attack hit / boosted attack cycle | unconfirmed | unconfirmed | no | no | no | yes | yes | unconfirmed |
| Inteleon | Attack Boosted | boostedAttack | basic attack hit / boosted attack cycle | unconfirmed | unconfirmed | no | no | yes | yes | yes | unconfirmed |
| Inteleon | Tearful Look | move | Move 1 | target | enemy | yes | yes | yes | no | yes | unconfirmed |
| Inteleon | Water Gun | move | Move 2 | unconfirmed | enemy | no | no | yes | no | no | unconfirmed |
| Inteleon | Azure Spy Vision | uniteMove | unite move use or hit | unconfirmed | unconfirmed | yes | yes | yes | no | yes | unconfirmed |
| Lapras | Shell Armor | passive | passive condition or always-on effect | unconfirmed | unconfirmed | no | no | no | no | yes | unconfirmed |
| Lapras | Attack | normalAttack | basic attack hit / boosted attack cycle | target | enemy | no | no | no | yes | yes | unconfirmed |
| Lapras | Attack Boosted | boostedAttack | basic attack hit / boosted attack cycle | unconfirmed | unconfirmed | no | no | yes | yes | yes | unconfirmed |
| Lapras | Whirlpool | move | Move 1 | unconfirmed | enemy | no | yes | yes | no | yes | unconfirmed |
| Lapras | Ice Shard | move | move hit | unconfirmed | unconfirmed | no | yes | yes | no | yes | unconfirmed |
| Lapras | Lapras Express | uniteMove | unite move use or hit | self | ally | no | yes | yes | yes | yes | unconfirmed |
| Latias | Levitate | passive | passive condition or always-on effect | self | ally | no | yes | yes | yes | yes | unconfirmed |
| Latias | Attack | normalAttack | basic attack hit / boosted attack cycle | unconfirmed | enemy | no | no | no | yes | yes | unconfirmed |
| Latias | Attack Boosted | boostedAttack | basic attack hit / boosted attack cycle | unconfirmed | unconfirmed | no | no | yes | yes | yes | unconfirmed |
| Latias | Confusion | move | Move 1 | target | enemy | no | yes | yes | no | yes | unconfirmed |
| Latias | Swift | move | Move 2 | unconfirmed | enemy | no | no | yes | no | no | unconfirmed |
| Latias | Mist Blast | uniteMove | unite move use or hit | target | enemy | yes | yes | yes | yes | yes | unconfirmed |
| Latios | Levitate | passive | passive condition or always-on effect | self | ally | no | yes | yes | yes | yes | unconfirmed |
| Latios | Attack | normalAttack | basic attack hit / boosted attack cycle | unconfirmed | enemy | no | no | no | yes | yes | unconfirmed |
| Latios | Attack Boosted | boostedAttack | basic attack hit / boosted attack cycle | unconfirmed | unconfirmed | no | no | yes | yes | yes | unconfirmed |
| Latios | Confusion | move | Move 1 | target | enemy | no | yes | yes | no | yes | unconfirmed |
| Latios | Swift | move | Move 2 | unconfirmed | enemy | no | no | yes | no | no | unconfirmed |
| Latios | Eon Blast | uniteMove | unite move use or hit | target | enemy | yes | yes | yes | yes | yes | unconfirmed |
| Leafeon | Run Away | passive | passive condition or always-on effect | unconfirmed | unconfirmed | no | yes | no | yes | yes | unconfirmed |
| Leafeon | Attack - Eevee | normalAttack | basic attack hit / boosted attack cycle | unconfirmed | unconfirmed | no | no | no | yes | yes | unconfirmed |
| Leafeon | Attack - Eevee Boosted | boostedAttack | basic attack hit / boosted attack cycle | unconfirmed | unconfirmed | no | no | yes | yes | yes | unconfirmed |
| Leafeon | Swift | move | Move 1 | target | unconfirmed | no | yes | yes | no | yes | unconfirmed |
| Leafeon | Quick Attack | move | Move 2 | target | unconfirmed | no | no | yes | no | yes | unconfirmed |
| Leafeon | Emerald Two-Step | uniteMove | unite move use or hit | target | ally | no | yes | yes | yes | yes | unconfirmed |
| Lucario | Steadfast | passive | passive condition or always-on effect | self | self | no | yes | yes | no | yes | unconfirmed |
| Lucario | Attack | normalAttack | basic attack hit / boosted attack cycle | unconfirmed | enemy | no | yes | no | yes | yes | unconfirmed |
| Lucario | Attack Boosted | boostedAttack | basic attack hit / boosted attack cycle | unconfirmed | area | no | no | yes | yes | yes | unconfirmed |
| Lucario | Quick Attack | move | Move 1 | target | enemy | no | no | yes | no | yes | unconfirmed |
| Lucario | Meteor Mash | move | Move 2 | target | enemy | no | yes | yes | yes | yes | unconfirmed |
| Lucario | Aura Cannon | uniteMove | unite move use or hit | target | enemy | yes | yes | yes | yes | yes | unconfirmed |
| Mega Lucario | Justified | passive | passive condition or always-on effect | self | self | no | yes | no | no | yes | unconfirmed |
| Mega Lucario | Attack | normalAttack | basic attack hit / boosted attack cycle | unconfirmed | enemy | no | yes | no | yes | yes | unconfirmed |
| Mega Lucario | Attack Boosted | boostedAttack | basic attack hit / boosted attack cycle | unconfirmed | unconfirmed | no | no | yes | yes | yes | unconfirmed |
| Mega Lucario | Quick Attack | move | Move 1 | target | enemy | no | no | yes | no | yes | unconfirmed |
| Mega Lucario | Meteor Mash | move | Move 2 | target | enemy | no | yes | yes | yes | yes | unconfirmed |
| Mega Lucario | Aura Cannon | uniteMove | unite move use or hit | target | enemy | no | yes | yes | yes | yes | unconfirmed |
| Machamp | Guts | passive | passive condition or always-on effect | unconfirmed | unconfirmed | no | yes | no | no | yes | unconfirmed |
| Machamp | Attack | normalAttack | basic attack hit / boosted attack cycle | unconfirmed | unconfirmed | no | yes | no | yes | yes | unconfirmed |
| Machamp | Attack Boosted | boostedAttack | basic attack hit / boosted attack cycle | unconfirmed | unconfirmed | no | no | yes | yes | yes | unconfirmed |
| Machamp | Karate Chop | move | Move 1 | target | enemy | no | no | yes | no | yes | unconfirmed |
| Machamp | Bulk Up | move | Move 2 | unconfirmed | ally | no | yes | yes | yes | yes | unconfirmed |
| Machamp | Barrage Blow | uniteMove | unite move use or hit | unconfirmed | area | no | yes | yes | yes | yes | unconfirmed |
| Mamoswine | Thick Fat | passive | passive condition or always-on effect | unconfirmed | ally | yes | yes | no | yes | yes | unconfirmed |
| Mamoswine | Attack | normalAttack | basic attack hit / boosted attack cycle | self | enemy | no | yes | no | yes | yes | unconfirmed |
| Mamoswine | Attack Boosted | boostedAttack | basic attack hit / boosted attack cycle | unconfirmed | unconfirmed | no | no | yes | yes | yes | unconfirmed |
| Mamoswine | Ice Shard | move | Move 1 | unconfirmed | enemy | no | yes | yes | no | yes | unconfirmed |
| Mamoswine | Tackle | move | Move 2 | target | unconfirmed | no | yes | yes | no | yes | unconfirmed |
| Mamoswine | Mammoth Mash | uniteMove | unite move use or hit | unconfirmed | area | no | yes | yes | no | yes | unconfirmed |
| Meganium | Overgrow | passive | passive condition or always-on effect | target | ally | no | no | no | no | yes | unconfirmed |
| Meganium | Attack | normalAttack | basic attack hit / boosted attack cycle | self | enemy | no | no | no | yes | yes | unconfirmed |
| Meganium | Attack Boosted | boostedAttack | basic attack hit / boosted attack cycle | unconfirmed | unconfirmed | no | no | yes | yes | yes | unconfirmed |
| Meganium | Magical Leaf | move | Move 1 | target | enemy | no | yes | yes | no | yes | unconfirmed |
| Meganium | Synthesis | move | Move 2 | self | ally | no | yes | yes | no | yes | unconfirmed |
| Meganium | Full Bloom Aroma | uniteMove | unite move use or hit | target | enemy | no | yes | yes | yes | yes | unconfirmed |
| Meowscarada | Overgrow | passive | passive condition or always-on effect | self | self | no | yes | yes | no | yes | unconfirmed |
| Meowscarada | Attack | normalAttack | basic attack hit / boosted attack cycle | target | enemy | no | no | no | yes | yes | unconfirmed |
| Meowscarada | Attack Boosted | boostedAttack | basic attack hit / boosted attack cycle | unconfirmed | unconfirmed | no | no | yes | yes | yes | unconfirmed |
| Meowscarada | Leafage | move | Move 1 | target | enemy | no | yes | yes | no | yes | unconfirmed |
| Meowscarada | Hone Claws | move | Move 2 | unconfirmed | unconfirmed | no | yes | yes | yes | yes | unconfirmed |
| Meowscarada | Floral Flourish | uniteMove | unite move use or hit | self | ally | no | yes | yes | yes | yes | unconfirmed |
| Meowth | Pickup | passive | passive condition or always-on effect | self | enemy | yes | yes | yes | no | yes | unconfirmed |
| Meowth | Attack | normalAttack | basic attack hit / boosted attack cycle | unconfirmed | enemy | no | no | no | yes | yes | unconfirmed |
| Meowth | Attack Boosted | boostedAttack | basic attack hit / boosted attack cycle | unconfirmed | unconfirmed | no | no | yes | yes | yes | unconfirmed |
| Meowth | Scratch | move | Move 1 | self | self | no | no | yes | no | no | unconfirmed |
| Meowth | Feint | move | Move 2 | self | self | no | no | yes | no | no | unconfirmed |
| Meowth | Gold Coin Barrage | uniteMove | unite move use or hit | self | ally | no | yes | yes | no | yes | unconfirmed |
| Metagross | Clear Body | passive | passive condition or always-on effect | unconfirmed | enemy | no | yes | no | no | yes | unconfirmed |
| Metagross | Attack | normalAttack | basic attack hit / boosted attack cycle | target | enemy | no | yes | yes | yes | yes | unconfirmed |
| Metagross | Attack Boosted | boostedAttack | basic attack hit / boosted attack cycle | unconfirmed | unconfirmed | no | no | yes | yes | yes | unconfirmed |
| Metagross | Iron Defense | move | Move 1 | unconfirmed | unconfirmed | no | yes | yes | yes | yes | unconfirmed |
| Metagross | Tackle | move | Move 2 | self | enemy | no | no | yes | no | no | unconfirmed |
| Metagross | Compute and Crush | uniteMove | unite move use or hit | target | enemy | yes | yes | yes | yes | yes | unconfirmed |
| Mew | Synchronize | passive | passive condition or always-on effect | unconfirmed | ally | no | yes | no | no | yes | unconfirmed |
| Mew | Attack | normalAttack | basic attack hit / boosted attack cycle | unconfirmed | enemy | yes | yes | no | yes | yes | unconfirmed |
| Mew | Attack Boosted | boostedAttack | basic attack hit / boosted attack cycle | unconfirmed | unconfirmed | no | no | yes | yes | yes | unconfirmed |
| Mew | Electro Ball | move | Move 1 | unconfirmed | area | no | yes | yes | no | yes | unconfirmed |
| Mew | Coaching | move | Move 2 | unconfirmed | ally | no | yes | yes | no | yes | unconfirmed |
| Mew | Mystical Mirage | uniteMove | unite move use or hit | unconfirmed | ally | no | yes | yes | yes | yes | unconfirmed |
| Mega Mewtwo X | Pressure | passive | passive condition or always-on effect | unconfirmed | enemy | yes | yes | no | yes | yes | unconfirmed |
| Mega Mewtwo X | Attack | normalAttack | basic attack hit / boosted attack cycle | unconfirmed | unconfirmed | no | no | no | yes | yes | unconfirmed |
| Mega Mewtwo X | Attack Boosted | boostedAttack | basic attack hit / boosted attack cycle | unconfirmed | unconfirmed | no | no | yes | yes | yes | unconfirmed |
| Mega Mewtwo X | Confusion | move | Move 1 | unconfirmed | enemy | no | yes | yes | no | yes | unconfirmed |
| Mega Mewtwo X | Barrier | move | Move 2 | unconfirmed | unconfirmed | no | yes | yes | no | yes | unconfirmed |
| Mega Mewtwo X | Infinite Psyburn | uniteMove | unite move use or hit | unconfirmed | enemy | no | yes | yes | yes | yes | unconfirmed |
| Mega Mewtwo Y | Pressure | passive | passive condition or always-on effect | unconfirmed | enemy | yes | yes | no | yes | yes | unconfirmed |
| Mega Mewtwo Y | Attack | normalAttack | basic attack hit / boosted attack cycle | target | enemy | no | no | no | no | yes | unconfirmed |
| Mega Mewtwo Y | Attack Boosted | boostedAttack | basic attack hit / boosted attack cycle | unconfirmed | unconfirmed | no | no | yes | yes | yes | unconfirmed |
| Mega Mewtwo Y | Confusion | move | Move 1 | unconfirmed | enemy | no | yes | yes | no | yes | unconfirmed |
| Mega Mewtwo Y | Barrier | move | Move 2 | unconfirmed | unconfirmed | no | yes | yes | no | yes | unconfirmed |
| Mega Mewtwo Y | Infinite Psyburn | uniteMove | unite move use or hit | unconfirmed | enemy | no | yes | yes | yes | yes | unconfirmed |
| Mimikyu | Disguise | passive | passive condition or always-on effect | unconfirmed | enemy | yes | yes | yes | yes | yes | unconfirmed |
| Mimikyu | Attack | normalAttack | basic attack hit / boosted attack cycle | unconfirmed | area | no | no | no | yes | yes | unconfirmed |
| Mimikyu | Attack Boosted | boostedAttack | basic attack hit / boosted attack cycle | unconfirmed | unconfirmed | no | no | yes | yes | yes | unconfirmed |
| Mimikyu | Astonish | move | Move 1 | target | unconfirmed | no | no | yes | no | yes | unconfirmed |
| Mimikyu | Scratch | move | after move use | target | enemy | no | yes | yes | yes | yes | unconfirmed |
| Mimikyu | Play With Me... | uniteMove | unite move use or hit | self | enemy | yes | yes | yes | yes | yes | unconfirmed |
| Miraidon | Hadron Engine | passive | passive condition or always-on effect | unconfirmed | ally | yes | yes | yes | yes | yes | unconfirmed |
| Miraidon | Attack | normalAttack | basic attack hit / boosted attack cycle | unconfirmed | unconfirmed | no | no | no | yes | yes | unconfirmed |
| Miraidon | Attack Boosted | boostedAttack | basic attack hit / boosted attack cycle | unconfirmed | unconfirmed | no | no | yes | yes | yes | unconfirmed |
| Miraidon | Thunder Shock | move | Move 1 | target | unconfirmed | no | no | yes | no | yes | unconfirmed |
| Miraidon | Thunder Wave | move | Move 2 | unconfirmed | enemy | no | yes | yes | no | yes | unconfirmed |
| Miraidon | Bright Future Meteor Storm | uniteMove | unite move use or hit | target | enemy | yes | yes | yes | no | yes | unconfirmed |
| Moltres | Flame Body | passive | passive condition or always-on effect | target | enemy | yes | yes | no | yes | yes | unconfirmed |
| Moltres | Attack | normalAttack | basic attack hit / boosted attack cycle | target | enemy | no | yes | no | yes | yes | unconfirmed |
| Moltres | Attack Boosted | boostedAttack | basic attack hit / boosted attack cycle | unconfirmed | unconfirmed | no | no | yes | yes | yes | unconfirmed |
| Moltres | Wing Attack | move | Move 1 | self | self | no | no | yes | no | no | unconfirmed |
| Moltres | Incinerate | move | Move 2 | self | self | no | no | yes | no | no | unconfirmed |
| Moltres | Firebird Inferno | uniteMove | unite move use or hit | target | enemy | yes | yes | yes | yes | yes | unconfirmed |
| Mr. Mime | Filter | passive | passive condition or always-on effect | unconfirmed | unconfirmed | no | yes | no | yes | yes | unconfirmed |
| Mr. Mime | Attack | normalAttack | basic attack hit / boosted attack cycle | unconfirmed | unconfirmed | no | yes | no | yes | yes | unconfirmed |
| Mr. Mime | Attack Boosted | boostedAttack | basic attack hit / boosted attack cycle | unconfirmed | unconfirmed | no | no | yes | yes | yes | unconfirmed |
| Mr. Mime | Fake Out | move | Move 1 | target | unconfirmed | no | yes | yes | no | yes | unconfirmed |
| Mr. Mime | Light Screen | move | Move 2 | unconfirmed | enemy | no | yes | yes | no | yes | unconfirmed |
| Mr. Mime | Showtime | uniteMove | unite move use or hit | unconfirmed | area | no | yes | yes | no | yes | unconfirmed |
| Ninetales | Snow Warning | passive | passive condition or always-on effect | target | enemy | no | yes | yes | yes | yes | unconfirmed |
| Ninetales | Attack | normalAttack | basic attack hit / boosted attack cycle | unconfirmed | unconfirmed | no | no | no | yes | yes | unconfirmed |
| Ninetales | Attack Boosted | boostedAttack | basic attack hit / boosted attack cycle | unconfirmed | unconfirmed | no | no | yes | yes | yes | unconfirmed |
| Ninetales | Powder Snow | move | move hit | target | unconfirmed | no | yes | yes | no | yes | unconfirmed |
| Ninetales | Icy Wind | move | move hit | unconfirmed | area | no | yes | yes | no | yes | unconfirmed |
| Ninetales | Snow Globe | uniteMove | unite move use or hit | unconfirmed | area | no | yes | yes | no | yes | unconfirmed |
| Pawmot | Iron Fist | passive | passive condition or always-on effect | target | enemy | yes | yes | no | yes | yes | unconfirmed |
| Pawmot | Attack | normalAttack | basic attack hit / boosted attack cycle | unconfirmed | enemy | no | no | no | yes | yes | unconfirmed |
| Pawmot | Attack Boosted | boostedAttack | basic attack hit / boosted attack cycle | unconfirmed | unconfirmed | no | no | yes | yes | yes | unconfirmed |
| Pawmot | Nuzzle | move | Move 1 | self | enemy | no | yes | yes | yes | yes | unconfirmed |
| Pawmot | Scratch | move | Move 2 | self | enemy | no | no | yes | no | no | unconfirmed |
| Pawmot | Zip Zap Full-Charge Spark | uniteMove | unite move use or hit | target | enemy | yes | yes | yes | yes | yes | unconfirmed |
| Pikachu | Static | passive | passive condition or always-on effect | unconfirmed | enemy | no | yes | yes | yes | yes | unconfirmed |
| Pikachu | Attack | normalAttack | basic attack hit / boosted attack cycle | target | enemy | no | yes | no | yes | yes | unconfirmed |
| Pikachu | Attack Boosted | boostedAttack | basic attack hit / boosted attack cycle | unconfirmed | unconfirmed | no | no | yes | yes | yes | unconfirmed |
| Pikachu | Thunder Shock | move | move hit | unconfirmed | enemy | no | yes | yes | no | yes | unconfirmed |
| Pikachu | Electroweb | move | Move 2 | target | enemy | no | yes | yes | no | yes | unconfirmed |
| Pikachu | Thunderstorm | uniteMove | unite move use or hit | target | enemy | no | yes | yes | no | yes | unconfirmed |
| Psyduck | Swift Swim | passive | passive condition or always-on effect | self | ally | yes | yes | yes | no | yes | unconfirmed |
| Psyduck | Attack | normalAttack | basic attack hit / boosted attack cycle | unconfirmed | unconfirmed | no | no | no | yes | yes | unconfirmed |
| Psyduck | Confusion | move | move hit | unconfirmed | enemy | no | yes | yes | no | yes | unconfirmed |
| Psyduck | Tail Whip | move | Move 2 | unconfirmed | enemy | no | yes | yes | no | yes | unconfirmed |
| Psyduck | Full-Power Psy-ay-ay! | uniteMove | unite move use or hit | self | enemy | yes | yes | yes | yes | yes | unconfirmed |
| Quaquaval | Moxie | passive | passive condition or always-on effect | self | enemy | yes | yes | no | yes | yes | unconfirmed |
| Quaquaval | Attack | normalAttack | basic attack hit / boosted attack cycle | self | enemy | no | no | no | yes | yes | unconfirmed |
| Quaquaval | Attack Boosted | boostedAttack | basic attack hit / boosted attack cycle | unconfirmed | unconfirmed | no | no | yes | yes | yes | unconfirmed |
| Quaquaval | Pound | move | Move 1 | self | enemy | no | yes | yes | no | yes | unconfirmed |
| Quaquaval | Wing Attack | move | Move 2 | self | self | no | yes | yes | no | yes | unconfirmed |
| Quaquaval | Carnival Splash | uniteMove | unite move use or hit | self | enemy | no | yes | yes | no | yes | unconfirmed |
| Raichu | Static | passive | passive condition or always-on effect | unconfirmed | enemy | no | yes | yes | no | yes | unconfirmed |
| Raichu | Attack - Pikachu | normalAttack | basic attack hit / boosted attack cycle | target | enemy | no | yes | no | yes | yes | unconfirmed |
| Raichu | Attack - Pikachu Boosted | boostedAttack | basic attack hit / boosted attack cycle | unconfirmed | unconfirmed | no | no | yes | yes | yes | unconfirmed |
| Raichu | Thunder Shock | move | Move 1 | unconfirmed | enemy | no | yes | yes | no | yes | unconfirmed |
| Raichu | Thunder Wave | move | Move 2 | unconfirmed | enemy | no | yes | yes | no | yes | unconfirmed |
| Raichu | Thunderstorm Aerial | uniteMove | unite move use or hit | self | enemy | no | yes | yes | yes | yes | unconfirmed |
| Rapidash | Pastel Veil | passive | passive condition or always-on effect | self | unconfirmed | yes | no | no | yes | yes | unconfirmed |
| Rapidash | Attack | normalAttack | basic attack hit / boosted attack cycle | target | enemy | no | no | no | no | yes | unconfirmed |
| Rapidash | Attack Boosted | boostedAttack | basic attack hit / boosted attack cycle | unconfirmed | unconfirmed | no | no | yes | yes | yes | unconfirmed |
| Rapidash | Confusion | move | move hit | target | enemy | no | yes | yes | yes | yes | unconfirmed |
| Rapidash | Tackle | move | move hit | self | enemy | no | yes | yes | no | yes | unconfirmed |
| Rapidash | Triad Blitz | uniteMove | unite move use or hit | self | enemy | no | yes | yes | yes | yes | unconfirmed |
| Sableye | Prankster | passive | passive condition or always-on effect | self | enemy | no | yes | no | no | yes | unconfirmed |
| Sableye | Attack | normalAttack | basic attack hit / boosted attack cycle | target | enemy | no | yes | no | yes | yes | unconfirmed |
| Sableye | Attack Boosted | boostedAttack | basic attack hit / boosted attack cycle | self | enemy | no | no | yes | yes | yes | unconfirmed |
| Sableye | Thief | move | move hit | target | enemy | yes | yes | yes | no | yes | unconfirmed |
| Sableye | Astonish | move | move hit | target | enemy | no | yes | yes | no | yes | unconfirmed |
| Sableye | Chaos Glower | uniteMove | unite move use or hit | target | enemy | no | yes | yes | yes | yes | unconfirmed |
| Scizor | Technician | passive | passive condition or always-on effect | self | self | no | yes | yes | yes | yes | unconfirmed |
| Scizor | Attack | normalAttack | basic attack hit / boosted attack cycle | unconfirmed | enemy | yes | yes | no | yes | yes | unconfirmed |
| Scizor | Attack Boosted | boostedAttack | basic attack hit / boosted attack cycle | unconfirmed | unconfirmed | no | no | yes | yes | yes | unconfirmed |
| Scizor | Fury Cutter | move | Move 1 | unconfirmed | unconfirmed | no | no | yes | no | no | unconfirmed |
| Scizor | Quick Attack | move | Move 2 | target | unconfirmed | no | no | yes | no | yes | unconfirmed |
| Scizor | Red Illusion Dive | uniteMove | unite move use or hit | target | enemy | no | yes | yes | yes | yes | unconfirmed |
| Scyther | Technician | passive | passive condition or always-on effect | self | self | no | yes | yes | yes | yes | unconfirmed |
| Scyther | Attack | normalAttack | basic attack hit / boosted attack cycle | unconfirmed | unconfirmed | no | yes | no | yes | yes | unconfirmed |
| Scyther | Attack Boosted | boostedAttack | basic attack hit / boosted attack cycle | unconfirmed | unconfirmed | no | no | yes | yes | yes | unconfirmed |
| Scyther | Fury Cutter | move | Move 1 | unconfirmed | unconfirmed | no | no | yes | no | no | unconfirmed |
| Scyther | Quick Attack | move | Move 2 | target | unconfirmed | no | no | yes | no | yes | unconfirmed |
| Scyther | Green Illusion Dive | uniteMove | unite move use or hit | target | enemy | yes | yes | yes | yes | yes | unconfirmed |
| Sirfetch'd | Steadfast | passive | passive condition or always-on effect | self | enemy | no | yes | no | yes | yes | unconfirmed |
| Sirfetch'd | Attack | normalAttack | basic attack hit / boosted attack cycle | self | self | no | no | no | yes | yes | unconfirmed |
| Sirfetch'd | Dual Wingbeat | move | Move 1 | self | self | no | yes | yes | yes | yes | unconfirmed |
| Sirfetch'd | Quick Attack | move | Move 2 | self | self | no | yes | yes | no | yes | unconfirmed |
| Sirfetch'd | Lunging Leek Nova Blast | uniteMove | unite move use or hit | self | enemy | yes | yes | yes | no | yes | unconfirmed |
| Skeledirge | Blaze | passive | passive condition or always-on effect | self | self | no | yes | yes | yes | yes | unconfirmed |
| Skeledirge | Attack | normalAttack | basic attack hit / boosted attack cycle | target | enemy | no | no | no | yes | yes | unconfirmed |
| Skeledirge | Attack Boosted | boostedAttack | basic attack hit / boosted attack cycle | unconfirmed | unconfirmed | no | no | yes | yes | yes | unconfirmed |
| Skeledirge | Disarming Voice | move | Move 1 | target | enemy | no | no | yes | no | yes | unconfirmed |
| Skeledirge | Roar | move | move hit | self | self | no | yes | yes | no | yes | unconfirmed |
| Skeledirge | Rousing Symphony | uniteMove | unite move use or hit | self | ally | no | yes | yes | yes | yes | unconfirmed |
| Slowbro | Oblivious | passive | passive condition or always-on effect | target | enemy | yes | yes | no | no | yes | unconfirmed |
| Slowbro | Attack | normalAttack | basic attack hit / boosted attack cycle | unconfirmed | enemy | no | yes | no | yes | yes | unconfirmed |
| Slowbro | Attack Boosted | boostedAttack | basic attack hit / boosted attack cycle | unconfirmed | enemy | no | no | yes | yes | yes | unconfirmed |
| Slowbro | Water Gun | move | Move 1 | target | enemy | no | yes | yes | yes | yes | unconfirmed |
| Slowbro | Slack Off | move | Move 2 | self | ally | no | yes | yes | no | yes | unconfirmed |
| Slowbro | Slowbeam | uniteMove | unite move use or hit | self | ally | yes | yes | yes | no | yes | unconfirmed |
| Snorlax | Gluttony | passive | passive condition or always-on effect | unconfirmed | unconfirmed | no | no | no | no | yes | unconfirmed |
| Snorlax | Attack | normalAttack | basic attack hit / boosted attack cycle | unconfirmed | enemy | no | yes | no | yes | yes | unconfirmed |
| Snorlax | Attack Boosted | boostedAttack | basic attack hit / boosted attack cycle | unconfirmed | unconfirmed | no | no | yes | yes | yes | unconfirmed |
| Snorlax | Tackle | move | move hit | target | enemy | no | yes | yes | yes | yes | unconfirmed |
| Snorlax | Rest | move | Move 2 | self | enemy | no | yes | yes | no | yes | unconfirmed |
| Snorlax | Power Nap | uniteMove | unite move use or hit | target | ally | no | yes | yes | yes | yes | unconfirmed |
| Suicune | Pressure | passive | passive condition or always-on effect | target | enemy | yes | yes | no | yes | yes | unconfirmed |
| Suicune | Attack | normalAttack | basic attack hit / boosted attack cycle | unconfirmed | enemy | yes | yes | no | yes | yes | unconfirmed |
| Suicune | Attack Boosted | boostedAttack | basic attack hit / boosted attack cycle | unconfirmed | unconfirmed | no | no | yes | yes | yes | unconfirmed |
| Suicune | Water Pulse | move | move hit | target | enemy | yes | yes | yes | no | yes | unconfirmed |
| Suicune | Avalanche | move | move hit | target | enemy | no | yes | yes | yes | yes | unconfirmed |
| Suicune | Endless Ice Spikes | uniteMove | unite move use or hit | self | enemy | yes | yes | yes | yes | yes | unconfirmed |
| Sylveon | Adaptability | passive | passive condition or always-on effect | unconfirmed | unconfirmed | yes | yes | no | no | yes | unconfirmed |
| Sylveon | Attack - Eevee | normalAttack | basic attack hit / boosted attack cycle | unconfirmed | unconfirmed | no | no | no | yes | yes | unconfirmed |
| Sylveon | Attack - Eevee Boosted | boostedAttack | basic attack hit / boosted attack cycle | unconfirmed | unconfirmed | no | no | yes | yes | yes | unconfirmed |
| Sylveon | Swift | move | Move 1 | unconfirmed | unconfirmed | no | no | yes | no | no | unconfirmed |
| Sylveon | Baby-Doll Eyes | move | move hit | unconfirmed | enemy | no | yes | yes | no | yes | unconfirmed |
| Sylveon | Fairy Frolic | uniteMove | unite move use or hit | unconfirmed | area | no | yes | yes | yes | yes | unconfirmed |
| Talonflame | Gale Wings | passive | passive condition or always-on effect | self | self | no | no | no | no | yes | unconfirmed |
| Talonflame | Attack | normalAttack | basic attack hit / boosted attack cycle | target | enemy | no | no | no | yes | yes | unconfirmed |
| Talonflame | Attack Boosted | boostedAttack | basic attack hit / boosted attack cycle | unconfirmed | area | no | no | yes | yes | yes | unconfirmed |
| Talonflame | Peck | move | Move 1 | target | enemy | no | no | yes | no | yes | unconfirmed |
| Talonflame | Acrobatics | move | after move use | self | enemy | no | no | yes | yes | yes | unconfirmed |
| Talonflame | Flame Sweep | uniteMove | unite move use or hit | self | enemy | no | no | yes | yes | yes | unconfirmed |
| Tinkaton | Mold Breaker | passive | passive condition or always-on effect | target | enemy | no | no | no | yes | yes | unconfirmed |
| Tinkaton | Attack | normalAttack | basic attack hit / boosted attack cycle | self | enemy | no | yes | no | yes | yes | unconfirmed |
| Tinkaton | Attack Boosted | boostedAttack | basic attack hit / boosted attack cycle | unconfirmed | unconfirmed | no | no | yes | yes | yes | unconfirmed |
| Tinkaton | Rock Smash | move | Move 1 | self | enemy | no | yes | yes | no | yes | unconfirmed |
| Tinkaton | Fairy Wind | move | Move 2 | target | enemy | no | yes | yes | no | yes | unconfirmed |
| Tinkaton | Kiss Bliss Kaboom | uniteMove | unite move use or hit | target | ally | no | yes | yes | yes | yes | unconfirmed |
| Trevenant | Natural Cure | passive | passive condition or always-on effect | unconfirmed | enemy | no | yes | yes | no | yes | unconfirmed |
| Trevenant | Attack | normalAttack | basic attack hit / boosted attack cycle | unconfirmed | unconfirmed | no | yes | no | yes | yes | unconfirmed |
| Trevenant | Attack Boosted | boostedAttack | basic attack hit / boosted attack cycle | unconfirmed | unconfirmed | no | no | yes | yes | yes | unconfirmed |
| Trevenant | Will-o-Wisp | move | Move 1 | target | enemy | no | yes | yes | no | yes | unconfirmed |
| Trevenant | Branch Poke | move | Move 2 | unconfirmed | enemy | no | yes | yes | no | yes | unconfirmed |
| Trevenant | Phantom Forest | uniteMove | unite move use or hit | target | ally | yes | yes | yes | no | yes | unconfirmed |
| Tsareena | Oblivious | passive | passive condition or always-on effect | self | self | no | yes | no | no | yes | unconfirmed |
| Tsareena | Attack | normalAttack | basic attack hit / boosted attack cycle | unconfirmed | enemy | no | yes | no | yes | yes | unconfirmed |
| Tsareena | Attack Boosted | boostedAttack | basic attack hit / boosted attack cycle | unconfirmed | enemy | no | yes | yes | yes | yes | unconfirmed |
| Tsareena | Razor Leaf | move | Move 1 | target | enemy | no | no | yes | no | yes | unconfirmed |
| Tsareena | Rapid Spin | move | move hit | self | enemy | no | yes | yes | no | yes | unconfirmed |
| Tsareena | Queen Ascendant | uniteMove | unite move use or hit | unconfirmed | enemy | no | yes | yes | yes | yes | unconfirmed |
| Typhlosion | Blaze | passive | passive condition or always-on effect | self | self | no | yes | yes | yes | yes | unconfirmed |
| Typhlosion | Attack | normalAttack | basic attack hit / boosted attack cycle | target | enemy | no | no | no | yes | yes | unconfirmed |
| Typhlosion | Attack Boosted | boostedAttack | basic attack hit / boosted attack cycle | unconfirmed | unconfirmed | no | no | yes | yes | yes | unconfirmed |
| Typhlosion | Ember | move | Move 1 | target | enemy | no | yes | yes | no | yes | unconfirmed |
| Typhlosion | Tackle | move | move hit | self | enemy | no | yes | yes | yes | yes | unconfirmed |
| Typhlosion | Explosive Heat Haze | uniteMove | unite move use or hit | target | enemy | no | yes | yes | yes | yes | unconfirmed |
| Tyranitar | Guts | passive | passive condition or always-on effect | unconfirmed | unconfirmed | no | yes | yes | yes | yes | unconfirmed |
| Tyranitar | Attack | normalAttack | basic attack hit / boosted attack cycle | unconfirmed | unconfirmed | no | no | no | yes | yes | unconfirmed |
| Tyranitar | Attack Boosted | boostedAttack | basic attack hit / boosted attack cycle | unconfirmed | unconfirmed | no | no | yes | yes | yes | unconfirmed |
| Tyranitar | Bite | move | Move 1 | self | enemy | no | yes | yes | no | yes | unconfirmed |
| Tyranitar | Rock Polish | move | move hit | target | enemy | no | yes | yes | no | yes | unconfirmed |
| Tyranitar | Tyrannical Rampage | uniteMove | unite move use or hit | target | enemy | no | yes | yes | no | yes | unconfirmed |
| Umbreon | Anticipation | passive | passive condition or always-on effect | unconfirmed | unconfirmed | no | yes | yes | yes | yes | unconfirmed |
| Umbreon | Attack | normalAttack | basic attack hit / boosted attack cycle | self | self | no | no | no | yes | yes | unconfirmed |
| Umbreon | Attack Boosted | boostedAttack | basic attack hit / boosted attack cycle | unconfirmed | unconfirmed | no | no | yes | yes | yes | unconfirmed |
| Umbreon | Swift | move | Move 1 | unconfirmed | unconfirmed | yes | yes | yes | yes | yes | unconfirmed |
| Umbreon | Fake Tears | move | Move 2 | unconfirmed | unconfirmed | no | yes | yes | no | yes | unconfirmed |
| Umbreon | Moonlight Prance | uniteMove | unite move use or hit | self | ally | no | yes | yes | yes | yes | unconfirmed |
| Urshifu | Inner Focus | passive | passive condition or always-on effect | unconfirmed | unconfirmed | no | yes | no | no | yes | unconfirmed |
| Urshifu | Attack - Kubfu | normalAttack | basic attack hit / boosted attack cycle | unconfirmed | enemy | no | no | no | yes | yes | unconfirmed |
| Urshifu | Attack - Kubfu Boosted | boostedAttack | basic attack hit / boosted attack cycle | unconfirmed | enemy | no | no | yes | yes | yes | unconfirmed |
| Urshifu | Rock Smash | move | Move 1 | target | enemy | no | yes | yes | yes | yes | unconfirmed |
| Urshifu | Headbutt | move | move hit | self | enemy | no | no | yes | no | no | unconfirmed |
| Urshifu | Ebon Fist | uniteMove | unite move use or hit | target | enemy | no | yes | yes | no | yes | unconfirmed |
| Urshifu | Flowing Fists | uniteMove | unite move use or hit | target | enemy | no | yes | yes | yes | yes | unconfirmed |
| Vaporeon | Run Away | passive | passive condition or always-on effect | self | enemy | no | yes | yes | yes | yes | unconfirmed |
| Vaporeon | Attack | normalAttack | basic attack hit / boosted attack cycle | unconfirmed | unconfirmed | no | no | no | yes | yes | unconfirmed |
| Vaporeon | Attack Boosted | boostedAttack | basic attack hit / boosted attack cycle | unconfirmed | unconfirmed | no | no | yes | yes | yes | unconfirmed |
| Vaporeon | Swift | move | Move 1 | target | enemy | no | yes | yes | no | yes | unconfirmed |
| Vaporeon | Tackle | move | Move 2 | target | enemy | no | yes | yes | no | yes | unconfirmed |
| Vaporeon | Aquamarine Splash | uniteMove | unite move use or hit | self | enemy | no | yes | yes | yes | yes | unconfirmed |
| Venusaur | Overgrow | passive | passive condition or always-on effect | unconfirmed | unconfirmed | no | no | no | no | no | unconfirmed |
| Venusaur | Attack | normalAttack | basic attack hit / boosted attack cycle | unconfirmed | unconfirmed | no | yes | no | yes | yes | unconfirmed |
| Venusaur | Attack Boosted | boostedAttack | basic attack hit / boosted attack cycle | unconfirmed | unconfirmed | no | no | yes | yes | yes | unconfirmed |
| Venusaur | Seed Bomb | move | Move 1 | unconfirmed | area | no | no | yes | no | no | unconfirmed |
| Venusaur | Razor Leaf | move | Move 2 | unconfirmed | area | no | yes | yes | no | no | unconfirmed |
| Venusaur | Verdant Anger | uniteMove | unite move use or hit | unconfirmed | area | no | yes | yes | no | yes | unconfirmed |
| Wigglytuff | Cute Charm | passive | passive condition or always-on effect | unconfirmed | enemy | no | yes | yes | yes | yes | unconfirmed |
| Wigglytuff | Attack | normalAttack | basic attack hit / boosted attack cycle | unconfirmed | unconfirmed | no | yes | no | yes | yes | unconfirmed |
| Wigglytuff | Attack Boosted | boostedAttack | basic attack hit / boosted attack cycle | unconfirmed | unconfirmed | no | no | yes | yes | yes | unconfirmed |
| Wigglytuff | Pound | move | Move 1 | unconfirmed | area | no | yes | yes | no | yes | unconfirmed |
| Wigglytuff | Defense Curl | move | Move 2 | target | self | no | yes | yes | no | yes | unconfirmed |
| Wigglytuff | Starlight Recital | uniteMove | unite move use or hit | self | ally | no | yes | yes | no | yes | unconfirmed |
| Zacian | Intrepid Sword | passive | passive condition or always-on effect | unconfirmed | unconfirmed | yes | yes | yes | yes | yes | unconfirmed |
| Zacian | Attack | normalAttack | basic attack hit / boosted attack cycle | unconfirmed | enemy | no | yes | no | yes | yes | unconfirmed |
| Zacian | Attack Boosted | boostedAttack | basic attack hit / boosted attack cycle | unconfirmed | unconfirmed | no | no | yes | yes | yes | unconfirmed |
| Zacian | Slash | move | Move 1 | target | enemy | yes | yes | yes | no | yes | unconfirmed |
| Zacian | Quick Attack | move | Move 2 | unconfirmed | enemy | yes | yes | yes | no | yes | unconfirmed |
| Zacian | Sovereign Sword | uniteMove | unite move use or hit | target | enemy | yes | yes | yes | no | yes | unconfirmed |
| Zapdos | Static | passive | passive condition or always-on effect | self | enemy | no | yes | yes | yes | yes | unconfirmed |
| Zapdos | Attack | normalAttack | basic attack hit / boosted attack cycle | self | enemy | no | yes | yes | yes | yes | unconfirmed |
| Zapdos | Attack Boosted | boostedAttack | basic attack hit / boosted attack cycle | unconfirmed | unconfirmed | no | no | yes | yes | yes | unconfirmed |
| Zapdos | Thunder Shock | move | move hit | unconfirmed | enemy | no | no | yes | no | no | unconfirmed |
| Zapdos | Discharge | move | Move 2 | self | enemy | yes | yes | yes | no | yes | unconfirmed |
| Zapdos | High-Voltage Siege | uniteMove | unite move use or hit | self | enemy | no | yes | yes | no | yes | unconfirmed |
| Zeraora | Volt Absorb | passive | passive condition or always-on effect | unconfirmed | unconfirmed | no | yes | no | no | yes | unconfirmed |
| Zeraora | Attack | normalAttack | basic attack hit / boosted attack cycle | target | enemy | no | yes | no | yes | yes | unconfirmed |
| Zeraora | Attack Boosted | boostedAttack | basic attack hit / boosted attack cycle | unconfirmed | enemy | no | no | yes | yes | yes | unconfirmed |
| Zeraora | Agility | move | Move 1 | unconfirmed | unconfirmed | no | yes | yes | yes | yes | unconfirmed |
| Zeraora | Slash | move | Move 2 | unconfirmed | enemy | no | yes | yes | no | yes | unconfirmed |
| Zeraora | Plasma Gale | uniteMove | unite move use or hit | target | enemy | no | yes | yes | yes | yes | unconfirmed |
| Zoroark | Illusion | passive | passive condition or always-on effect | target | enemy | no | yes | yes | no | yes | unconfirmed |
| Zoroark | Attack | normalAttack | basic attack hit / boosted attack cycle | unconfirmed | unconfirmed | no | no | no | yes | yes | unconfirmed |
| Zoroark | Attack Boosted | boostedAttack | basic attack hit / boosted attack cycle | unconfirmed | unconfirmed | no | no | yes | yes | yes | unconfirmed |
| Zoroark | Slash | move | Move 1 | target | enemy | no | no | yes | no | yes | unconfirmed |
| Zoroark | Fury Swipes | move | move hit | target | enemy | no | yes | yes | yes | yes | unconfirmed |
| Zoroark | Nightfall Daze | uniteMove | unite move use or hit | target | enemy | no | yes | yes | no | yes | unconfirmed |

## Draft Design Implications

- Many effects require battleState instead of pure one-shot damage calculation.
- Target-specific stacks and marks should likely live under targetState rather than move data.
- Next basic attack / empowered attack effects require action-order processing.
- Duration and cooldown effects require time or event-step modeling before exact simulation.
- Damage formulas can be data-driven, but timing and state transitions should probably be handled by common event processors plus limited dedicated exceptions.

## Notes

- Classifications are draft labels extracted from descriptions and must not be treated as final design.
- Timing, stack overflow, refresh behavior, targeting rules, and rounding require human/game verification unless explicitly stated in the source.
- No application code was changed by this survey.
