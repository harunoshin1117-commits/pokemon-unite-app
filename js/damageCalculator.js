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

function hasDamageComponents(selectedMove){
    return Array.isArray(selectedMove?.damageComponents);
}

function getMoveDamageComponents(selectedMove, level){
    if(
        isPlusMove(selectedMove, level) &&
        Array.isArray(selectedMove.plusDamageComponents)
    ){
        return selectedMove.plusDamageComponents;
    }

    return selectedMove.damageComponents;
}

function getDamageComponentHitCount(component, selectedMove, level){
    if(
        isPlusMove(selectedMove, level) &&
        Number.isInteger(component.plusHitCount)
    ){
        return component.plusHitCount;
    }

    return Number.isInteger(component.hitCount)
        ? component.hitCount
        : 1;
}

function calculateDamageComponent(component, attackerLevel, attackerStats){
    const scalingStat = attackerStats[component.referenceStat] ?? 0;
    const damage =
        scalingStat * component.ratio +
        component.levelScaling * (attackerLevel - 1) +
        component.fixedValue;

    return Math.floor(damage);
}

function getDefenseValue(defenseReference, enemyPokemonStats){
    if(defenseReference === "defense"){
        return enemyPokemonStats.defense;
    }

    if(defenseReference === "spDefense"){
        return enemyPokemonStats.spDefense;
    }

    throw new Error(
        `未対応の防御参照です: ${defenseReference}`
    );
}

export function computeFinalDamage(
    selectedMove,
    hitCount = 1,
    attackerLevel,
    attackerStats,
    enemyPokemonStats
){

        if(hasDamageComponents(selectedMove)){
            const components = getMoveDamageComponents(
                selectedMove,
                attackerLevel
            );

            let totalFinalDamage = 0;

            components.forEach(component => {
                const rawDamage = calculateDamageComponent(
                    component,
                    attackerLevel,
                    attackerStats
                );
                const componentHitCount = getDamageComponentHitCount(
                    component,
                    selectedMove,
                    attackerLevel
                );
                const defenseValue = getDefenseValue(
                    component.defenseReference,
                    enemyPokemonStats
                );
                const finalDamage = rawDamage *
                    (
                        1 -
                        (
                            defenseValue /
                            (defenseValue + 600)
                        )
                    );

                totalFinalDamage +=
                    Math.floor(finalDamage) *
                    componentHitCount *
                    hitCount;
            });

            return totalFinalDamage;
        }

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

function hasNormalAttackDamageData(normalAttack){
    return Boolean(
        normalAttack?.damage?.basic &&
        typeof normalAttack.damage.basic === "object" &&
        normalAttack?.damage?.boosted &&
        typeof normalAttack.damage.boosted === "object"
    );
}

function calculateNormalAttackHitDamage(formula, level, status){
    const referenceStat = status[formula.referenceStat] ?? 0;

    return (
        referenceStat * formula.ratio +
        formula.levelScaling * (level - 1) +
        formula.fixedValue
    );
}

function getNormalAttackDefenseReference(hitData, pokemonId){
    if(hitData.defenseReference){
        return hitData.defenseReference;
    }

    if(pokemonId === "Pikachu" && hitData.boosted){
        return "spDefense";
    }

    return "defense";
}

export function calculateNormalAttackDamage({
    level,
    pokemonId,
    hitCount,
    status,
    normalAttack,
    criticalEnabled,
    criticalPattern = null,
    random = Math.random
}){
    
    const atk = status.attack;
    const spAtk = status.spAttack;
    const critical = status.criticalRate;
   
    if(hasNormalAttackDamageData(normalAttack)){
        const cycle = normalAttack.cycle ?? 3;
        let totalDamage = 0;
        let criticalCount = 0;
        let hitDamages = [];

        for(let i = 1; i <= hitCount; i++){
            const boosted = i % cycle === 0;
            const formula = boosted
                ? normalAttack.damage.boosted
                : normalAttack.damage.basic;
            let damage = calculateNormalAttackHitDamage(
                formula,
                level,
                status
            );
            let isCritical = false;

            if(criticalEnabled){
                isCritical = Array.isArray(criticalPattern)
                    ? criticalPattern[i - 1] === true
                    : random() < critical / 100;

                if(isCritical){
                    criticalCount++;
                    damage *= 2;
                }
            }

            hitDamages.push({
                damage: Math.floor(damage),
                critical: isCritical,
                boosted,
                defenseReference: formula.defenseReference ?? "defense"
            });
            totalDamage += damage;
        }

        return {
            totalDamage: Math.floor(totalDamage),
            criticalCount,
            hitDamages
        };
    }

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
       isCritical = Array.isArray(criticalPattern)
            ? criticalPattern[i - 1] === true
            : random() <critical/100;
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
                
                 isCritical = Array.isArray(criticalPattern)
                    ? criticalPattern[i - 1] === true
                    : random() < critical/100;
                
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

                 isCritical = Array.isArray(criticalPattern)
                    ? criticalPattern[i - 1] === true
                    : random() < critical/100;

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
                const defenseReference =
                    getNormalAttackDefenseReference(hitData, pokemonId);
                const targetDefense = defenseReference === "spDefense"
                    ? spDefense
                    : defense;

                const finalDamage = hitData.damage * 
            
                                            (
                                                1 -
                                                (
                                                    targetDefense /
                                                    (targetDefense + 600)
                                                )
                                            );
           
           
    
            finalHitDamages.push({

                damage:Math.floor(finalDamage),
                
                critical:hitData.critical,

                boosted:hitData.boosted,

                defenseReference
            })

             totalFinalDamage += Math.floor(finalDamage);
            
        }

    }else{

        for(const hitData of normalAttackData.hitDamages){
            const defenseReference =
                getNormalAttackDefenseReference(hitData, pokemonId);
            const targetDefense = defenseReference === "spDefense"
                ? spDefense
                : defense;

            const finalDamage = hitData.damage * 
                                            (
                                                1 -
                                                (
                                                    targetDefense /
                                                    (targetDefense + 600)
                                                )
                                            );
            

             finalHitDamages.push({

                damage:Math.floor(finalDamage),
                
                critical:hitData.critical,

                boosted:hitData.boosted,

                defenseReference
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
        move?.upgradeLevel &&
        level >= move.upgradeLevel
    ){
        return true;
    }
    return false;
}

export function getRawDamage(selectedMove, level, status){

    if(
        !selectedMove
    ){
        return null;
    }

    if(hasDamageComponents(selectedMove)){
        const components = getMoveDamageComponents(selectedMove, level);

        return components.reduce((total, component) => {
            const componentHitCount = getDamageComponentHitCount(
                component,
                selectedMove,
                level
            );

            return total +
                calculateDamageComponent(component, level, status) *
                componentHitCount;
        }, 0);
    }

    if(!selectedMove.formula){
        return null;
    }

    if(
        isPlusMove(selectedMove, level) &&
        selectedMove.formulaPlus
    ){
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
