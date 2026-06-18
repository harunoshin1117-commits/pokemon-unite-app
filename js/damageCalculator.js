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
    return (
        Array.isArray(selectedMove?.damageComponents) &&
        selectedMove.damageComponents.length > 0
    );
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

function getAdditionalDamageEffects(selectedMove, level){
    if(
        isPlusMove(selectedMove, level) &&
        Array.isArray(selectedMove.plusAdditionalDamageEffects)
    ){
        return selectedMove.plusAdditionalDamageEffects;
    }

    return Array.isArray(selectedMove.additionalDamageEffects)
        ? selectedMove.additionalDamageEffects
        : [];
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

function calculateTargetMissingHpDamage(effect, targetMissingHp){
    const damage =
        targetMissingHp * effect.ratio +
        effect.levelScaling +
        effect.fixedValue;

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

function applyDefense(rawDamage, defenseReference, enemyState){
    const defenseValue = getDefenseValue(defenseReference, enemyState);
    const finalDamage = rawDamage *
        (
            1 -
            (
                defenseValue /
                (defenseValue + 600)
            )
        );

    return Math.floor(finalDamage);
}

function createEmptyMoveDamageData(selectedMove, useCount, enemyState){
    const maxHp = enemyState?.maxHp ?? null;
    const startingHp = Number.isFinite(enemyState?.currentHp)
        ? enemyState.currentHp
        : maxHp;

    return {
        selectedMove,
        useCount,
        hitCount: useCount,
        hpBefore: startingHp,
        baseRawDamage: 0,
        baseFinalDamage: 0,
        additionalRawDamage: 0,
        additionalFinalDamage: 0,
        rawDamage: null,
        finalDamage: null,
        hpAfter: null,
        displayHpAfter: null,
        sequentialHpAfter: null,
        enemyHp: maxHp,
        useResults: []
    };
}

export function computeMoveDamageData({
    selectedMove,
    useCount = 1,
    attackerLevel,
    attackerStats,
    enemyState,
    carryHpBetweenUses = false
}){
    if(!selectedMove || !enemyState){
        return createEmptyMoveDamageData(selectedMove ?? null, useCount, enemyState);
    }

    const maxHp = enemyState.maxHp;
    const startingHp = Number.isFinite(enemyState.currentHp)
        ? enemyState.currentHp
        : maxHp;
    let currentHp = startingHp;
    let baseRawDamage = 0;
    let baseFinalDamage = 0;
    let additionalRawDamage = 0;
    let additionalFinalDamage = 0;
    const useResults = [];

    if(hasDamageComponents(selectedMove)){
        const components = getMoveDamageComponents(
            selectedMove,
            attackerLevel
        );
        const additionalEffects = getAdditionalDamageEffects(
            selectedMove,
            attackerLevel
        );

        for(let useIndex = 1; useIndex <= useCount; useIndex++){
            let useCurrentHp = carryHpBetweenUses
                ? currentHp
                : startingHp;
            const hpBeforeUse = useCurrentHp;
            let useBaseRawDamage = 0;
            let useBaseFinalDamage = 0;
            let useAdditionalRawDamage = 0;
            let useAdditionalFinalDamage = 0;

            components.forEach(component => {
                const componentHitCount = getDamageComponentHitCount(
                    component,
                    selectedMove,
                    attackerLevel
                );

                for(let hitIndex = 1; hitIndex <= componentHitCount; hitIndex++){
                    const rawDamage = calculateDamageComponent(
                        component,
                        attackerLevel,
                        attackerStats
                    );
                    const finalDamage = applyDefense(
                        rawDamage,
                        component.defenseReference,
                        enemyState
                    );

                    useBaseRawDamage += rawDamage;
                    useBaseFinalDamage += finalDamage;
                    useCurrentHp = Math.max(0, useCurrentHp - finalDamage);
                }
            });

            additionalEffects.forEach(effect => {
                if(effect.type !== "targetMissingHp"){
                    throw new Error(
                        `未対応の追加ダメージです: ${effect.type}`
                    );
                }

                if(effect.trigger !== "afterMainDamage"){
                    throw new Error(
                        `未対応の追加ダメージ発動タイミングです: ${effect.trigger}`
                    );
                }

                const effectHitCount = getDamageComponentHitCount(
                    effect,
                    selectedMove,
                    attackerLevel
                );

                for(let hitIndex = 1; hitIndex <= effectHitCount; hitIndex++){
                    const targetMissingHp = Math.max(0, maxHp - useCurrentHp);
                    const rawDamage = calculateTargetMissingHpDamage(
                        effect,
                        targetMissingHp
                    );
                    const finalDamage = applyDefense(
                        rawDamage,
                        effect.defenseReference,
                        enemyState
                    );

                    useAdditionalRawDamage += rawDamage;
                    useAdditionalFinalDamage += finalDamage;
                    useCurrentHp = Math.max(0, useCurrentHp - finalDamage);
                }
            });

            if(carryHpBetweenUses){
                currentHp = useCurrentHp;
            }

            useResults.push({
                useNumber: useIndex,
                hpBefore: hpBeforeUse,
                baseRawDamage: useBaseRawDamage,
                baseFinalDamage: useBaseFinalDamage,
                additionalRawDamage: useAdditionalRawDamage,
                additionalFinalDamage: useAdditionalFinalDamage,
                rawDamage: useBaseRawDamage + useAdditionalRawDamage,
                finalDamage: useBaseFinalDamage + useAdditionalFinalDamage,
                hpAfter: useCurrentHp
            });

            baseRawDamage += useBaseRawDamage;
            baseFinalDamage += useBaseFinalDamage;
            additionalRawDamage += useAdditionalRawDamage;
            additionalFinalDamage += useAdditionalFinalDamage;
        }

        const finalDamage = baseFinalDamage + additionalFinalDamage;
        const displayHpAfter = Math.max(0, startingHp - finalDamage);
        const sequentialHpAfter = carryHpBetweenUses
            ? currentHp
            : null;
        const hpAfter = displayHpAfter;

        return {
            selectedMove,
            useCount,
            hitCount: useCount,
            hpBefore: startingHp,
            baseRawDamage,
            baseFinalDamage,
            additionalRawDamage,
            additionalFinalDamage,
            rawDamage: baseRawDamage + additionalRawDamage,
            finalDamage,
            hpAfter,
            displayHpAfter,
            sequentialHpAfter,
            enemyHp: maxHp,
            useResults
        };
    }

    const rawDamage = getTotalDamage(
        selectedMove,
        useCount,
        attackerLevel,
        attackerStats
    );

    if(rawDamage === null){
        return createEmptyMoveDamageData(selectedMove, useCount, enemyState);
    }

    const finalDamage = computeFinalDamage(
        selectedMove,
        useCount,
        attackerLevel,
        attackerStats,
        enemyState
    );
    const hpAfter = Math.max(0, currentHp - finalDamage);
    const displayHpAfter = hpAfter;
    const sequentialHpAfter = carryHpBetweenUses
        ? hpAfter
        : null;

    return {
        selectedMove,
        useCount,
        hitCount: useCount,
        hpBefore: startingHp,
        baseRawDamage: rawDamage,
        baseFinalDamage: finalDamage,
        additionalRawDamage: 0,
        additionalFinalDamage: 0,
        rawDamage,
        finalDamage,
        hpAfter,
        displayHpAfter,
        sequentialHpAfter,
        enemyHp: maxHp,
        useResults: [{
            useNumber: 1,
            hpBefore: startingHp,
            baseRawDamage: rawDamage,
            baseFinalDamage: finalDamage,
            additionalRawDamage: 0,
            additionalFinalDamage: 0,
            rawDamage,
            finalDamage,
            hpAfter
        }]
    };
}

export function computeFinalDamage(
    selectedMove,
    hitCount = 1,
    attackerLevel,
    attackerStats,
    enemyPokemonStats
){

        if(hasDamageComponents(selectedMove)){
            return computeMoveDamageData({
                selectedMove,
                useCount: hitCount,
                attackerLevel,
                attackerStats,
                enemyState: {
                    maxHp: enemyPokemonStats.hp,
                    currentHp: enemyPokemonStats.hp,
                    defense: enemyPokemonStats.defense,
                    spDefense: enemyPokemonStats.spDefense
                }
            }).finalDamage;
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
        normalAttack?.basic &&
        typeof normalAttack.basic === "object" &&
        normalAttack?.boosted &&
        typeof normalAttack.boosted === "object"
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
    const critical = status.criticalRate;
   
    if(hasNormalAttackDamageData(normalAttack)){
        const cycle = normalAttack.cycle ?? 3;
        let totalDamage = 0;
        let criticalCount = 0;
        let hitDamages = [];

        for(let i = 1; i <= hitCount; i++){
            const boosted = i % cycle === 0;
            const formula = boosted
                ? normalAttack.boosted
                : normalAttack.basic;
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

    if(pokemonId === "Greninja"){
         
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
                const targetDefense = getDefenseValue(
                    defenseReference,
                    enemyPokemonStats
                );

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
            const targetDefense = getDefenseValue(
                defenseReference,
                enemyPokemonStats
            );

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
