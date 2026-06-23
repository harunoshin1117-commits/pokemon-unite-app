export const pokemonsList = [
    {
        id:"Pikachu",
        name:"ピカチュウ",
        Image:"./images/pikachu-image.png",
        normalAttack:{
                        description: "3回目の攻撃は強化攻撃になり、相手をまひさせる",
                        cycle: 3,
                        basic: {
                            referenceStat: "attack",
                            ratio: 1,
                            levelScaling: 0,
                            fixedValue: 0,
                            defenseReference: "defense"
                        },
                        boosted: {
                            referenceStat: "spAttack",
                            ratio: 0.38,
                            levelScaling: 10,
                            fixedValue: 200,
                            defenseReference: "spDefense"
                        }
                       
                    
                    },

        skill:{
            1:[{
                name:"電気ショック",
                category:"special",
                formula:{
                    scaling:"spAttack",
                    ratio:0.75,
                    levelScaling:21,
                    baseDamage:390
                },
                damageComponents: [{
                    id: "main",
                    type: "standard",
                    referenceStat: "spAttack",
                    ratio: 0.75,
                    levelScaling: 21,
                    fixedValue: 390,
                    defenseReference: "spDefense",
                    hitCount: 1
                }] },
               {
                name:"エレキネット",
                  category:"special",
                formula:{
                    scaling:"spAttack",
                    ratio:0.36,
                    levelScaling:11,
                    baseDamage:350
                },
                damageComponents: [{
                    id: "main",
                    type: "standard",
                    referenceStat: "spAttack",
                    ratio: 0.36,
                    levelScaling: 11,
                    fixedValue: 350,
                    defenseReference: "spDefense",
                    hitCount: 1
                }]
               }],
            4:[{
                name:"エレキボール",
                  category:"special",
                  replace:true,
                formula:{
                    scaling:"spAttack",
                    ratio:0.80,
                    levelScaling:24,
                    baseDamage:420
                },
                formulaPlus:{
                    scaling:"spAttack",
                    ratio:0.86,
                    levelScaling:28,
                    baseDamage:480
                },
                damageComponents: [{
                    id: "main",
                    type: "standard",
                    referenceStat: "spAttack",
                    ratio: 0.84,
                    levelScaling: 25,
                    fixedValue: 441,
                    defenseReference: "spDefense",
                    hitCount: 1
                }],
                additionalDamageEffects: [{
                    id: "missingHp",
                    type: "targetMissingHp",
                    trigger: "afterMainDamage",
                    referenceStat: "targetMissingHp",
                    ratio: 0.06,
                    levelScaling: 0,
                    fixedValue: 0,
                    defenseReference: "spDefense",
                    hitCount: 1
                }],
                plusDamageComponents: [{
                    id: "main",
                    type: "standard",
                    referenceStat: "spAttack",
                    ratio: 0.9,
                    levelScaling: 29,
                    fixedValue: 504,
                    defenseReference: "spDefense",
                    hitCount: 1
                }],
                plusAdditionalDamageEffects: [{
                    id: "missingHp",
                    type: "targetMissingHp",
                    trigger: "afterMainDamage",
                    referenceStat: "targetMissingHp",
                    ratio: 0.08,
                    levelScaling: 0,
                    fixedValue: 0,
                    defenseReference: "spDefense",
                    hitCount: 1
                }],
                upgradeLevel:11
                },
                {
                    name:"かみなり",
                      category:"special",
                    formula:{
                        scaling:"spAttack",
                        ratio:0.209,
                        levelScaling:5,
                        baseDamage:218
                    },
                    formulaPlus:{
                         scaling:"spAttack",
                        ratio:0.209,
                        levelScaling:5,
                        baseDamage:218
                    },
                    damageComponents: [{
                        id: "perHit",
                        type: "standard",
                        referenceStat: "spAttack",
                        ratio: 0.209,
                        levelScaling: 5,
                        fixedValue: 218,
                        defenseReference: "spDefense",
                        hitCount: 5,
                        plusHitCount: 7
                    }],
                    upgradeLevel:11
                }],
            6:[{
                name:"ボルトテッカー",
                  category:"special",
                  replaceSecond:true,
                formula:{
                    scaling:"spAttack",
                    ratio:0.15,
                    levelScaling:3,
                    baseDamage:150
                },formulaPlus:{
                     scaling:"spAttack",
                    ratio:0.15,
                    levelScaling:3,
                    baseDamage:150
                },
                damageComponents: [{
                    id: "perHit",
                    type: "standard",
                    referenceStat: "spAttack",
                    ratio: 0.16,
                    levelScaling: 3,
                    fixedValue: 162,
                    defenseReference: "spDefense",
                    hitCount: 5
                }],
                upgradeLevel:13
             },
                {
                    name:"10万ボルト",
                      category:"special",
                    formula:{
                        scaling:"spAttack",
                        ratio:0.50,
                        levelScaling:12,
                        baseDamage:500
                    },
                    formulaPlus:{
                        scaling:"spAttack",
                        ratio:0.59,
                        levelScaling:14,
                        baseDamage:600
                    },
                    damageComponents: [{
                        id: "main",
                        type: "standard",
                        referenceStat: "spAttack",
                        ratio: 0.55,
                        levelScaling: 13,
                        fixedValue: 550,
                        defenseReference: "spDefense",
                        hitCount: 1
                    }],
                    plusDamageComponents: [{
                        id: "main",
                        type: "standard",
                        referenceStat: "spAttack",
                        ratio: 0.65,
                        levelScaling: 15,
                        fixedValue: 660,
                        defenseReference: "spDefense",
                        hitCount: 1
                    }],
                    upgradeLevel:13
                }],
            9:[{
                name:"フルボルトストーム",
                  category:"special",
                formula:{
                    scaling:"spAttack",
                    ratio:0.451,
                    levelScaling:9,
                    baseDamage:450
                },
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
            }]
        },

         stats: {
    1: {
      hp: 3292,
      attack: 134,
      defense: 35,
      spAttack: 50,
      spDefense: 27,
      criticalRate: 0,
    
    },

    2: {
      hp: 3399,
      attack: 140,
      defense: 42,
      spAttack: 82,
      spDefense: 33,
      criticalRate: 0,
    
    },

    3: {
      hp: 3517,
      attack: 146,
      defense: 50,
      spAttack: 117,
      spDefense: 40,
      criticalRate: 0,
     
    },

    4: {
      hp: 3646,
      attack: 153,
      defense: 59,
      spAttack: 156,
      spDefense: 47,
      criticalRate: 0,
     
    },

    5: {
      hp: 3788,
      attack: 160,
      defense: 69,
      spAttack: 199,
      spDefense: 55,
      criticalRate: 0,
      
    },

    6: {
      hp: 3945,
      attack: 168,
      defense: 80,
      spAttack: 246,
      spDefense: 64,
      criticalRate: 0,
      
    },

    7: {
      hp: 4117,
      attack: 177,
      defense: 92,
      spAttack: 298,
      spDefense: 74,
      criticalRate: 0,
      
    },

    8: {
      hp: 4307,
      attack: 187,
      defense: 105,
      spAttack: 355,
      spDefense: 85,
      criticalRate: 0,
      
    },

    9: {
      hp: 4516,
      attack: 198,
      defense: 119,
      spAttack: 418,
      spDefense: 97,
      criticalRate: 0,
      
    },

    10: {
      hp: 4747,
      attack: 210,
      defense: 135,
      spAttack: 487,
      spDefense: 110,
      criticalRate: 0,
      
    },

    11: {
      hp: 5001,
      attack: 223,
      defense: 152,
      spAttack: 563,
      spDefense: 125,
      criticalRate: 0,
      
    },

    12: {
      hp: 5280,
      attack: 237,
      defense: 171,
      spAttack: 647,
      spDefense: 141,
      criticalRate: 0,
      
    },

    13: {
      hp: 5588,
      attack: 253,
      defense: 192,
      spAttack: 740,
      spDefense: 159,
      criticalRate: 0,
    
    },

    14: {
      hp: 5927,
      attack: 271,
      defense: 215,
      spAttack: 842,
      spDefense: 179,
      criticalRate: 0,
    
    },

    15: {
      hp: 6300,
      attack: 290,
      defense: 240,
      spAttack: 954,
      spDefense: 200,
      criticalRate: 0,
    
    }
         },
         color: "yellow"

    },
    {
        id:"Greninja",
        name:"ゲッコウガ",
        Image:"./images/Greninja-image.png",
        normalAttack:{},
        skill:{

            1:[
                {
                name:"あわ",
                category:"physical",

                formula:{
                    scaling:"attack",
                    ratio:1.13,
                    levelScaling:7,
                    baseDamage:208
                }
                },

                {
                name:"みがわり",
                category:"status"
                }
            ],

            5:[
                {
                name:"かげぶんしん",
                category:"status",
                replace:true,
                formulaPlus:null,
                upgradeLevel:11
                },

                {
                name:"えんまく",
                category:"status",
                replace:true,
                formulaPlus:null,
                upgradeLevel:11
                }
            ],

            7:[
                {
                name:"みずしゅりけん",
                 category:"physical",
                 replaceSecond:true,

                formula:{
                    scaling:"attack",
                    ratio:1.35,
                    levelScaling:8,
                    baseDamage:210
                },

                healingFormula:{
                    scaling:"attack",
                    ratio:0.15,
                    levelScaling:2,
                    baseDamage:25
                },
                formulaPlus:{
                    scaling:"attack",
                    ratio:1.35,
                    levelScaling:8,
                    baseDamage:210
                },
                upgradeLevel:13
                },

                {
                name:"なみのり",
                 category:"physical",

                formula:{
                    scaling:"attack",
                    ratio:1.80,
                    levelScaling:8,
                    baseDamage:330
                },

                bonusFormula:{
                    scaling:"attack",
                    ratio:0.90,
                    levelScaling:4,
                    baseDamage:165
                },

                healingFormula:{
                    scaling:"attack",
                    ratio:0.41,
                    levelScaling:5,
                    baseDamage:75
                },

                healingFormulaPlus:{
                    scaling:"attack",
                    ratio:0.49,
                    levelScaling:6,
                    baseDamage:138
                },
                formulaPlus:{
                    scaling:"attack",
                    ratio:1.35,
                    levelScaling:8,
                    baseDamage:210
                },
                upgradeLevel:13
                }
            ],

            9:[
                {
                name:"極大水手裏剣",
                 category:"physical",

                formula:{
                    scaling:"attack",
                    ratio:2.20,
                    levelScaling:11,
                    baseDamage:420
                }
                }
            ]
            },
        stats: {

    1:{
        hp:3200,
        attack:146,
        defense:50,
        spAttack:20,
        spDefense:64,
        criticalRate:0
    },

    2:{
        hp:3240,
        attack:151,
        defense:53,
        spAttack:21,
        spDefense:67,
        criticalRate:0
    },

    3:{
        hp:3288,
        attack:157,
        defense:56,
        spAttack:23,
        spDefense:70,
        criticalRate:0
    },

    4:{
        hp:3346,
        attack:164,
        defense:60,
        spAttack:25,
        spDefense:73,
        criticalRate:0
    },

    5:{
        hp:3556,
        attack:191,
        defense:75,
        spAttack:32,
        spDefense:86,
        criticalRate:15
    },

    6:{
        hp:3639,
        attack:202,
        defense:81,
        spAttack:35,
        spDefense:92,
        criticalRate:15
    },

    7:{
        hp:4019,
        attack:250,
        defense:108,
        spAttack:49,
        spDefense:116,
        criticalRate:15
    },

    8:{
        hp:4139,
        attack:265,
        defense:117,
        spAttack:53,
        spDefense:123,
        criticalRate:15
    },

    9:{
        hp:4283,
        attack:283,
        defense:127,
        spAttack:58,
        spDefense:132,
        criticalRate:30
    },

    10:{
        hp:4456,
        attack:305,
        defense:139,
        spAttack:64,
        spDefense:143,
        criticalRate:30
    },

    11:{
        hp:4664,
        attack:331,
        defense:154,
        spAttack:74,
        spDefense:156,
        criticalRate:30
    },

    12:{
        hp:4913,
        attack:363,
        defense:172,
        spAttack:80,
        spDefense:172,
        criticalRate:30
    },

    13:{
        hp:5211,
        attack:401,
        defense:193,
        spAttack:91,
        spDefense:190,
        criticalRate:30
    },

    14:{
        hp:5570,
        attack:446,
        defense:219,
        spAttack:104,
        spDefense:213,
        criticalRate:30
    },

    15:{
        hp:6000,
        attack:500,
        defense:250,
        spAttack:119,
        spDefense:240,
        criticalRate:30
    }

            },
        color:"#00bfff"
    },

    {
        id:"Cinderace",
        name:"エースバーン",
        Image:"./images/Cinderace-image.png",
        normalAttack:{
            description: "3回目の攻撃は強化攻撃になり、わざ使用後も次の通常攻撃が強化攻撃になる",
            cycle: 3,
            cycleLength: 3,
            boostedTriggers: [
                {
                    type: "attackCycle",
                    every: 3
                },
                {
                    type: "afterMove",
                    appliesTo: "nextNormalAttack",
                    persistsUntilUsed: true
                }
            ],
            wildPokemonDamageCaps: {
                basic: 1000,
                boosted: 1300
            },
            basic: {
                referenceStat: "attack",
                ratio: 1,
                levelScaling: 0,
                fixedValue: 0,
                defenseReference: "defense"
            },
            boosted: {
                referenceStat: "attack",
                ratio: 1.4,
                levelScaling: 0,
                fixedValue: 0,
                defenseReference: "defense"
            }
        },
        skill:{
            1:[
                {
                    name:"ひのこ",
                    category:"physical",
                    formula:{
                        scaling:"attack",
                        ratio:1.15,
                        levelScaling:8,
                        baseDamage:155
                    }
                },

                {
                    name:"ローキック",
                    category:"physical",
                    formula:{
                        scaling:"attack",
                        ratio:0.36,
                        levelScaling:3,
                        baseDamage:100
                    }
                }
            ],

            7:[
                {
                    name:"かえんボール",
                    category:"physical",
                    replace:true,

                    formula:{
                        scaling:"attack",
                        ratio:3.45,
                        levelScaling:32,
                        baseDamage:820
                    },

                    formulaPlus:{
                        scaling:"attack",
                        ratio:3.45,
                        levelScaling:32,
                        baseDamage:820
                    },

                    upgradeLevel:11
                },

                {
                    name:"ブレイズキック",
                    category:"physical",

                    formula:{
                        scaling:"attack",
                        ratio:0.48,
                        levelScaling:4,
                        baseDamage:120
                    },

                    formulaPlus:{
                        scaling:"attack",
                        ratio:0.48,
                        levelScaling:4,
                        baseDamage:120
                    },

                    upgradeLevel:11
                }
            ],

            8:[
                {
                    name:"かえんチャージ",
                    category:"physical",
                    replaceSecond:true,

                    formula:{
                        scaling:"attack",
                        ratio:0.47,
                        levelScaling:3,
                        baseDamage:130
                    },

                    formulaPlus:{
                        scaling:"attack",
                        ratio:0.47,
                        levelScaling:3,
                        baseDamage:130
                    },

                    upgradeLevel:13
                },

                {
                    name:"フェイント",
                    category:"physical",
                    formula:null,
                    formulaPlus:null,
                    upgradeLevel:13
                }
            ],

            9:[
                {
                    name:"ブレイジングバイシクルキック",
                    category:"physical",

                    formula:{
                        scaling:"attack",
                        ratio:2.47,
                        levelScaling:14,
                        baseDamage:670
                    }
                }
            ]
        },

        passiveEffects: [
            {
                id: "cinderace-blaze",
                name: "もうか",
                lowHpBuff: {
                    trigger: {
                        type: "selfHpRatioAtOrBelow",
                        value: 0.5
                    },
                    durationSeconds: 5,
                    cooldownSeconds: 30,
                    effects: {
                        criticalRateBonus: 10,
                        autoAttackSpeedBonus: 20
                    }
                },
                cinderStacks: {
                    targetStackId: "cinder",
                    durationSeconds: 5,
                    stacksByAttackType: {
                        normalAttack: 1,
                        boostedNormalAttack: 2,
                        move: 2
                    },
                    triggerStacks: 5,
                    consumeStacksOnTrigger: true
                },
                flareDamage: {
                    type: "attackAndTargetMaxHpLevelScaling",
                    referenceStat: "attack",
                    attackRatio: 0.9,
                    targetMaxHpLevelScalingRatio: 0.007,
                    fixedValue: 25,
                    damageType: "physical",
                    defenseReference: "defense",
                    wildPokemonMaxHpDamageCap: 500
                },
                implementationStatus: "dataOnly"
            }
        ],

        stats:{
            1:{
                hp:3000,
                attack:135,
                defense:50,
                spAttack:20,
                spDefense:30,
                criticalRate:0
            },

            2:{
                hp:3043,
                attack:140,
                defense:53,
                spAttack:21,
                spDefense:33,
                criticalRate:0
            },

            3:{
                hp:3095,
                attack:145,
                defense:57,
                spAttack:23,
                spDefense:36,
                criticalRate:0
            },

            4:{
                hp:3157,
                attack:151,
                defense:62,
                spAttack:25,
                spDefense:40,
                criticalRate:0
            },

            5:{
                hp:3382,
                attack:174,
                defense:78,
                spAttack:32,
                spDefense:55,
                criticalRate:15
            },

            6:{
                hp:3471,
                attack:183,
                defense:84,
                spAttack:35,
                spDefense:61,
                criticalRate:15
            },

            7:{
                hp:3878,
                attack:221,
                defense:114,
                spAttack:49,
                spDefense:88,
                criticalRate:15
            },

            8:{
                hp:4007,
                attack:233,
                defense:123,
                spAttack:53,
                spDefense:97,
                criticalRate:15
            },

            9:{
                hp:4161,
                attack:247,
                defense:134,
                spAttack:58,
                spDefense:107,
               criticalRate:30
            },

            10:{
                hp:4346,
                attack:264,
                defense:147,
                spAttack:64,
                spDefense:119,
               criticalRate:30
            },

            11:{
                hp:4568,
                attack:284,
                defense:163,
                spAttack:71,
                spDefense:134,
               criticalRate:30
            },

            12:{
                hp:4835,
                attack:309,
                defense:182,
                spAttack:80,
                spDefense:152,
               criticalRate:30
            },

            13:{
                hp:5155,
                attack:339,
                defense:206,
                spAttack:91,
                spDefense:175,
               criticalRate:30
            },

            14:{
                hp:5539,
                attack:375,
                defense:235,
                spAttack:104,
                spDefense:201,
               criticalRate:30
            },

            15:{
                hp:6000,
                attack:418,
                defense:268,
                spAttack:119,
                spDefense:232,
               criticalRate:30
            }
        },

        color:"#ff6b35"
    }
]
