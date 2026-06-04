// =========================

// Damage calculation helpers

// =========================

// 通常scriptとして読み込み、既存のグローバル状態参照と計算結果は維持する。



function calculateDamage(selectedMove,attackerLevel,attackerStats){
    
    
    const formula = selectedMove.formula;
    
    const scalingStat = attackerStats[formula.scaling];

    const damage =scalingStat * formula.ratio + formula.levelScaling * (attackerLevel-1) + formula.baseDamage;
    return Math.floor(damage);
}

function calculateDamagePlus(selectedMove,attackerLevel,attackerStats){
    
    const formula = selectedMove.formulaPlus;
    const scalingStat = attackerStats[formula.scaling];

    const damage = scalingStat * formula.ratio + formula.levelScaling * (attackerLevel-1) + formula.baseDamage;
    return Math.floor(damage);
}

function computeFinalDamage(selectedMove,hitCount = 1){

        const rawDamage = getTotalDamage(selectedMove,hitCount)   
    
        if(rawDamage === null){
            return null;
        }

        const enemyLevel = Number(enemyLevelSelect.value);
        const enemyPokemonStats = enemyPokemon.stats[enemyLevel];

        let finalDamage;
        const defense = enemyPokemonStats.defense;
        const spDefense = enemyPokemonStats.spDefense;
       
      if(isCategory(selectedMove)){

        finalDamage = 
        rawDamage *
            (
                1-
                    (defense/
                        (defense + 600)
                    )
            )
      }else{

         finalDamage = 
        rawDamage *
            (
                1-
                    (spDefense/
                        (spDefense + 600)
                    )
            );
        
      }
      return Math.floor(finalDamage);
    
    
        
}

function calculateNormalAttackDamage(){
    
    const level =Number(levelSelect.value);
    const selectPokemon = currentPokemon.id;
    
    const hitCount = Number(hitCountSelects.normalAttack.value);
    const status = getCurrentStatus();
    const atk = status.attack;
    const spAtk = status.spAttack;
    const critical = status.criticalRate;
   

    if(selectPokemon === "Pikachu" ){

        const basicDamage = 1 * atk;
        const boostedDamage = 0.38 * spAtk + 10 * (level - 1) +200;
        let totalDamage = 0;
        let criticalCount = 0;
        let hitDamages = [];
       for(let i = 1;i <= hitCount;i++){

            let damage;
            let isCritical = false;
            //　強化攻撃判定
            if(i%3 === 0){
                
                damage = boostedDamage;

            }else{

                damage = basicDamage;

       }
       if(criticalCheck.checked){
        //急所判定
       isCritical = Math.random() <critical/100;
        //急所なら二倍（今回だけ）
        if(isCritical){
            criticalCount++;
            damage *= 2
        }
       }
        hitDamages.push({
            damage:Math.floor(damage),
            critical: isCritical,
            boosted:i%3 === 0
        });
        totalDamage += damage;
    }
        

       
      
        const totalNormalAttackDamage = Math.floor(totalDamage);


        return {
            totalDamage: totalNormalAttackDamage,
            criticalCount: criticalCount,
            hitDamages};

    }if(selectPokemon === "Greninja"){
         
        const basicDamage = 1 * atk;

        const boostedDamage = 1.30 * atk;  


        let totalDamage = 0;
        let criticalCount = 0;
        let hitDamages = [];
        for(let i = 1;i <= hitCount;i++){
             
            let damage = 0;
             let isCritical = false;
            if(i%3 === 0){
                damage = boostedDamage;
            }else{
                damage = basicDamage;
            }

            if(criticalCheck.checked){
                
                 isCritical = Math.random() < critical/100;
                
                if(isCritical){
                    criticalCount++;
                    damage *= 2;
                }
            }
            hitDamages.push({
                damage:Math.floor(damage),
                critical:isCritical,
                boosted:i%3 === 0
            });
            totalDamage += damage;
        }
      
        
        const totalNormalAttackDamage = Math.floor(totalDamage);
        
        //normalAttackDamage.textContent = "威力:" + Math.floor(allNormalDamageG);

        return {
            totalDamage: totalNormalAttackDamage,
            criticalCount: criticalCount,
            hitDamages};

    }if(selectPokemon === "Cinderace"){

        const basicDamage = 1 * atk;
        const boostedDamage = 1.40 * atk;

        let totalDamage = 0;
        let criticalCount = 0;
        let hitDamages = [];
        for(let i = 1; i <= hitCount; i++){

            let damage = 0;
             let isCritical = false;
            if(i%3 === 0){
                damage = boostedDamage;
            }else{
                damage = basicDamage;
            }

            if(criticalCheck.checked){

                 isCritical = Math.random() < critical/100;

                if(isCritical){
                    criticalCount++;
                    damage *=2;
                }
            }
             hitDamages.push({
            damage:Math.floor(damage),
            critical:isCritical,
            boosted:i%3 === 0
             });
            totalDamage += damage;

        }
    
    const totalNormalAttackDamage = Math.floor(totalDamage);
     return {
            totalDamage: totalNormalAttackDamage,
            criticalCount: criticalCount,
            hitDamages};}
}

function computeNormalAttackFinalDamage(normalAttackData){



    
    
        if(normalAttackData == null){
            return null;
        }
        const selectPokemon = currentPokemon.id;
        const enemyLevel = Number(enemyLevelSelect.value);
        const enemyPokemonStats = enemyPokemon.stats[enemyLevel];
        

        
        let totalFinalDamage = 0;
        let finalHitDamages = [];
        const defense = enemyPokemonStats.defense;
        const spDefense = enemyPokemonStats.spDefense;
       
        
          if(selectPokemon === "Pikachu"){
            
            for(const hitData of normalAttackData.hitDamages){

                const finalDamage = hitData.damage * 
            
                                            (
                                                1 -
                                                (
                                                    spDefense /
                                                    (spDefense + 600)
                                                )
                                            );
           
           
    
            finalHitDamages.push({

                damage:Math.floor(finalDamage),
                
                critical:hitData.critical,

                boosted:hitData.boosted
            })

             totalFinalDamage += Math.floor(finalDamage);
            
        }

    }else{

        for(const hitData of normalAttackData.hitDamages){

            const finalDamage = hitData.damage * 
                                            (
                                                1 -
                                                (
                                                    defense /
                                                    (defense + 600)
                                                )
                                            );
            

             finalHitDamages.push({

                damage:Math.floor(finalDamage),
                
                critical:hitData.critical,

                boosted:hitData.boosted
            })
            totalFinalDamage += Math.floor(finalDamage);
        }
       
           
    }

    



      return {
        totalFinalDamage,
        finalHitDamages};
            
    
}

function isPlusMove(move, level){
    if(
        move.upgradeLevel &&
        move.formulaPlus &&
        level >= move.upgradeLevel
    ){
        return true;
    }
    return false;
}

function getRawDamage(selectedMove){

    if(
        !selectedMove ||
        !selectedMove.formula
    ){
        return null;
    }

    if(isPlusMove(selectedMove, Number(levelSelect.value))){
        return calculateDamagePlus(
            selectedMove,
            Number(levelSelect.value),
            getCurrentStatus()
        );
    }

    return calculateDamage(
        selectedMove,
        Number(levelSelect.value),
        getCurrentStatus()
    );
}

function isCategory(selectedMove){

    if(
        selectedMove.category === "physical"
    ){
        return true;
    }

    return false;
}

function getTotalDamage(selectedMove,hitCount){

    const rawDamage = getRawDamage(selectedMove);

    if(rawDamage === null){
        return null;
    }

    return rawDamage*hitCount;
}

