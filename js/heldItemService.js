// =========================
// Held item helpers
// =========================

// currentHeldItems はID配列のまま扱い、IDから持ち物オブジェクトへの変換方法は変えない。

export function toggleHeldItem(
    selectedItemIds,
    itemId
){
    if(selectedItemIds.includes(itemId)){
        return selectedItemIds.filter(
            id => {

                return id !== itemId;
            }
        );
    }

    return [...selectedItemIds, itemId];
}

export function getActiveHeldItems(allHeldItems, selectedItemIds){
    return allHeldItems.filter(
        item => {

            return selectedItemIds.includes(
                item.id
            );
        }
    );
}

export function applyHeldItemStatus(status, activeHeldItems){
    for(const item of activeHeldItems){
        for(const [statusName,value] of Object.entries(item.status || {})){
                status[statusName] += value;
        }
    }
}

export function applyHeldItemStatusEffect(status, activeHeldItems){
    for(const item of activeHeldItems){
        for(const [statusName,value] of Object.entries(item.statusEffect || {})){
                status[statusName] *= value;
        }
    }
}

export function applyHeldItemEffect(damageData, activeHeldItems, enemyHp){
    for(const item of activeHeldItems){
        for(const [name,value] of Object.entries(item.effect || {})){
            switch(name){
                case "criticalPlusDamage":
                    
                    damageData.totalFinalDamage = 0;

                    for(const hitData of damageData.finalHitDamages){
                        if(hitData.critical){
                            hitData.damage *= value;
                            
                        }

                        damageData.totalFinalDamage += Math.floor(hitData.damage);
                    }
                    
                break;

                case "muscleBandDamage":
                
                damageData.totalFinalDamage = 0;
                let currentEnemyHp = enemyHp;
                for(const hitData of damageData.finalHitDamages){
                    const muscleBandDamage = Math.floor(currentEnemyHp * value);
                    hitData.damage += muscleBandDamage;
                    currentEnemyHp -= hitData.damage;
                    damageData.totalFinalDamage += Math.floor(hitData.damage);
                }
                break;
            }
        }
    }
}

export function getCurrentStatus(baseStats, activeHeldItems){
    const status = {
        ...baseStats
    };

    applyHeldItemStatus(status, activeHeldItems);
    applyHeldItemStatusEffect(status, activeHeldItems);
    return status;
}
