// =========================
// Damage calculation helpers
// =========================

export function calculateDamage(selectedMove,attackerLevel,attackerStats){
    
    
    const formula = selectedMove.formula;
    
    const scalingStat = attackerStats[formula.scaling];

    const damage =scalingStat * formula.ratio + formula.levelScaling * (attackerLevel-1) + formula.baseDamage;
    return Math.floor(damage);
}

export function calculateDamagePlus(selectedMove,attackerLevel,attackerStats){
    
    const formula = selectedMove.formulaPlus;
    const scalingStat = attackerStats[formula.scaling];

    const damage = scalingStat * formula.ratio + formula.levelScaling * (attackerLevel-1) + formula.baseDamage;
    return Math.floor(damage);
}

export function computeFinalDamage(
    selectedMove,
    hitCount = 1,
    attackerLevel,
    attackerStats,
    enemyPokemonStats
){

        const rawDamage = getTotalDamage(
            selectedMove,
            hitCount,
            attackerLevel,
            attackerStats
        )   
    
        if(rawDamage === null){
            return null;
        }

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

export function calculateNormalAttackDamage({
    level,
    pokemonId,
    hitCount,
    status,
    criticalEnabled,
    random = Math.random
}){
    
    const atk = status.attack;
    const spAtk = status.spAttack;
    const critical = status.criticalRate;
   

    if(pokemonId === "Pikachu" ){

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
       if(criticalEnabled){
        //急所判定
       isCritical = random() <critical/100;
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

    }if(pokemonId === "Greninja"){
         
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

            if(criticalEnabled){
                
                 isCritical = random() < critical/100;
                
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
        
        return {
            totalDamage: totalNormalAttackDamage,
            criticalCount: criticalCount,
            hitDamages};

    }if(pokemonId === "Cinderace"){

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

            if(criticalEnabled){

                 isCritical = random() < critical/100;

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

export function computeNormalAttackFinalDamage(normalAttackData, pokemonId, enemyPokemonStats){



    
    
        if(normalAttackData == null){
            return null;
        }

        
        let totalFinalDamage = 0;
        let finalHitDamages = [];
        const defense = enemyPokemonStats.defense;
        const spDefense = enemyPokemonStats.spDefense;
       
        
          if(pokemonId === "Pikachu"){
            
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

export function isPlusMove(move, level){
    if(
        move.upgradeLevel &&
        move.formulaPlus &&
        level >= move.upgradeLevel
    ){
        return true;
    }
    return false;
}

export function getRawDamage(selectedMove, level, status){

    if(
        !selectedMove ||
        !selectedMove.formula
    ){
        return null;
    }

    if(isPlusMove(selectedMove, level)){
        return calculateDamagePlus(
            selectedMove,
            level,
            status
        );
    }

    return calculateDamage(
        selectedMove,
        level,
        status
    );
}

export function isCategory(selectedMove){

    if(
        selectedMove.category === "physical"
    ){
        return true;
    }

    return false;
}

export function getTotalDamage(selectedMove,hitCount,level,status){

    const rawDamage = getRawDamage(selectedMove,level,status);

    if(rawDamage === null){
        return null;
    }

    return rawDamage*hitCount;
}
