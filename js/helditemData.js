const heldItemsList = [
//レベル30固定

    {
        id: "scopeLens",
        name: "ピントレンズ",
        status:{
            criticalRate:6,
        },
        effect:{
            criticalPlusDamage:1.12
        },
      
        image:"./images/scope-lens.png",
        explanation:"急所ダメージ増加"
    },
    {
        id: "muscleBand",
        name: "力のハチマキ",
        status:{
            attack:15
        },
        effect:{
            //特殊要注意
           muscleBandDamage:0.03,
            
        },
        normalAttackSpeed:"7.5%",
       
        image:"./images/muscle-band.png",
        explanation: "通常攻撃時、相手の残りhp依存追加ダメージ"
    },
    {
        id: "wiseGlasses",
        name: "物知り眼鏡",
        status:{
            spAttack:39
        },
        statusEffect:{
            spAttack:1.07
        },
        
        image: "./images/wise-glasses.png",
        explanation:"特攻をさらに7%増加"
    }
]