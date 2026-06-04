// =========================

// Held item helpers

// =========================

// currentHeldItems はID配列のまま扱い、IDから持ち物オブジェクトへの変換方法は変えない。



function toggleHeldItem(
    itemId
){
    if( currentHeldItems.includes(itemId)){

        

        currentHeldItems = 
            currentHeldItems.filter(
                id => {

                    return id !== itemId;
                }
                
        );
    }else{

        currentHeldItems.push(itemId);
        
    }
}

function applyHeldItemStatus(status){
   // let  status = { ...currentPokemon.stats[level]}; 呼び出すところにこれ書いて5/30;
    const activeHeldItems = heldItemsList.filter(
                                    item => {

                                        return currentHeldItems.includes(
                                            item.id
                                        );
                                    }
    );
    for(const item of activeHeldItems){
        for(const [statusName,value] of Object.entries(item.status || {})){
                status[statusName] += value;
        }
    }
}

function applyHeldItemStatusEffect(status){
    
    const activeHeldItems = heldItemsList.filter(
                                item => {

                                    return currentHeldItems.includes(
                                        item.id
                                    );
                                }
    );
    for(const item of activeHeldItems){
        for(const [statusName,value] of Object.entries(item.statusEffect || {})){
                status[statusName] *= value;
        }
    }
}

function applyHeldItemEffect(damageData){

    const activeHeldItems = heldItemsList.filter(
                                    item => {

                                        return currentHeldItems.includes(
                                            item.id
                                        );
                                    }
    );
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
                const enemyLevel = Number(enemyLevelSelect.value);
                let currentEnemyHp = enemyPokemon.stats[enemyLevel].hp;
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

function getCurrentStatus(){

    const level = Number(levelSelect.value);
    const status = {
        ...currentPokemon.stats[level]
    };

    applyHeldItemStatus(status);
    applyHeldItemStatusEffect(status);
    return status;
}

