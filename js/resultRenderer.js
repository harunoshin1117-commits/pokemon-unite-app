import {
    computeFinalDamage,
    getTotalDamage,
    isPlusMove
} from "./damageCalculator.js";

// =========================
// Result rendering helpers
// =========================

// DOM表示とHPバー更新を担当し、UI構造や表示文言は変えない。

export function computeFinalDamageAll(finalDamageData, context){
    const {
        selectedSkillOne,
        selectedSkillTwo,
        selectedSkillThird,
        hitCounts,
        attackerLevel,
        attackerStatus,
        enemyStats,
        enemyHp,
        takenAll,
        remainingHpAll,
        hpFillAll
    } = context;

    const damage1 =
        computeFinalDamage(
            selectedSkillOne,
            hitCounts.one,
            attackerLevel,
            attackerStatus,
            enemyStats
        ) || 0;

    const damage2 =
        computeFinalDamage(
            selectedSkillTwo,
            hitCounts.two,
            attackerLevel,
            attackerStatus,
            enemyStats
        ) || 0;

    const damage3 =
        computeFinalDamage(
            selectedSkillThird,
            hitCounts.unite,
            attackerLevel,
            attackerStatus,
            enemyStats
        ) || 0;

    const allDamage =
        damage1 + damage2 + damage3 + finalDamageData.totalFinalDamage;

    takenAll.textContent =
        `合計ダメージ: ${allDamage}`;

    const hpAfter =
        Math.max(0, enemyHp - allDamage);

    remainingHpAll.textContent =
        `残りHP: ${hpAfter}`;

   updateHpBar(hpAfter,enemyHp,hpFillAll);
}

export function showNormalAttackDamage(normalAttackData, normalAttackDamage){
   
    if(normalAttackData == null){
        normalAttackDamage.textContent = "威力なし";
        return;
    }
    normalAttackDamage.textContent = "威力:" + normalAttackData.totalDamage;
}

export function showNormalAttackFinalDamage(finalDamageData, context){
    const {
        damageTakenNormalAttack,
        remainingHpNormalAttack,
        hpFillNormalAttack,
        enemyHp
    } = context;

    const finalDamage = finalDamageData;
    if(finalDamage.totalFinalDamage == null){
         
        damageTakenNormalAttack.textContent = "ダメージ: 計算不可";

        remainingHpNormalAttack.textContent = "残りHP: -";
        return null;
    }

    const hpAfter = Math.max(0,enemyHp - finalDamage.totalFinalDamage);
    damageTakenNormalAttack.textContent = "ダメージ:" + finalDamage.totalFinalDamage;
    remainingHpNormalAttack.textContent = "残りHP:" + hpAfter;

     updateHpBar(hpAfter,enemyHp,hpFillNormalAttack);
    
}

export function showDamage(
    selectedMove,
    targetElement,
    hitCount = 1,
    attackerLevel,
    attackerStatus
){
    
    const totalDamage = getTotalDamage(
        selectedMove,
        hitCount,
        attackerLevel,
        attackerStatus
    )

    if(totalDamage === null){

        targetElement.textContent =
            "威力なし";

        return;
    }

   
    targetElement.textContent =
        `威力: ${totalDamage}`;
}

export function showFinalDamage(
            selectedMove,
            damageElement,
            hpElement,
            hpBarElement,
            hitCount = 1,
            attackerLevel,
            attackerStatus,
            enemyStats,
            enemyHp
                        
){

       const finalDamage = computeFinalDamage(
            selectedMove,
            hitCount,
            attackerLevel,
            attackerStatus,
            enemyStats
        );

        if(finalDamage === null){

            damageElement.textContent = "ダメージ: 計算不可";

            hpElement.textContent = "残りHP: -";
            hpBarElement.style.width = "100%";
            hpBarElement.style.backgroundColor = "green";
            return;
        }

        const hpAfter = Math.max(0,enemyHp - finalDamage);

        damageElement.textContent = `ダメージ: ${finalDamage}`;

        hpElement.textContent = `残りHP: ${hpAfter}`;

       updateHpBar(hpAfter,enemyHp,hpBarElement);

}

export function showSkillResult(
    resultElement,
    skillText,
    selectedMove,
    level,
    pokemonColor
){

    resultElement.textContent = skillText;

    if(isPlusMove(selectedMove, level)){
        resultElement.textContent += "+";
    }

    resultElement.style.backgroundColor =
        pokemonColor;
}

export function showHeldItem(itemId,
    selectedItem,
    currentSelectedSlot
){
    if(currentSelectedSlot.dataset.id === itemId ){

       currentSelectedSlot.innerHTML = "✚";
       currentSelectedSlot.dataset.id = "";
       currentSelectedSlot.style.padding = "20px";
    }else{

        currentSelectedSlot.innerHTML = `${selectedItem.name} <img src= "${selectedItem.image}" class="slot-image">  `;
       
        currentSelectedSlot.dataset.id = itemId;
        currentSelectedSlot.style.padding = "0px";

        
    }
}

export function showSelectPokemonImage(currentPokemon, selectPokemonImage){

   
    const image = currentPokemon.Image;
    selectPokemonImage.innerHTML = `<img src = "${image}" class="image-pokemon">`
    

}

export function showHitDamagesPopup(
    hitDamages
){
    const popup = 
            document.getElementById("hitDamage-result");

    popup.innerHTML = "";
           
    hitDamages.forEach((hitDamage,index) => {

        showSingleHitDamagesPopup(hitDamage,index)
            
        })
    
}

function showSingleHitDamagesPopup(hitDamage,index){

     const popup = 
            document.getElementById("hitDamage-result");
    const p = document.createElement("div");

            p.classList.add("hit-damage");
            
            const hitNumber = document.createElement("span");
            const damage = document.createElement("span");
            const tags = document.createElement("span");

            hitNumber.textContent = `${index + 1}Hit`;
            damage.textContent = `ダメージ: ${hitDamage.damage}`;

            let text = "通常";
            if(hitDamage.boosted){
                text = "強化通常";
                p.classList.add("boosted-color");
                
            }if(hitDamage.critical){
                text += " / 急所命中";
                p.classList.add("critical-color");
            }
            
            
            tags.textContent = text;
            p.appendChild(hitNumber);
            p.appendChild(damage);
            p.appendChild(tags);
            popup.appendChild(p);
}

export function updateHpBar(currentHp,maxHp,hpBarElement){

    const percentage = currentHp / maxHp*100;
   hpBarElement.style.width = `${percentage}%`;

    if(percentage > 50){
       hpBarElement.style.backgroundColor = "green";
    }else if(percentage > 20 ){
       hpBarElement.style.backgroundColor = "orange";
    }else{
       hpBarElement.style.backgroundColor = "red";
    }
}

export function resetDamageDisplay(
    skillResultElement,
    damageElement,
    finalDamageElement,
    remainingHpElement,
    hpBarElement
){
    skillResultElement.textContent = "";
    skillResultElement.style.backgroundColor = "";
    
    damageElement.textContent = "威力:";
    finalDamageElement.textContent = "";
    remainingHpElement.textContent = "";

    hpBarElement.style.width = "100%";
    hpBarElement.style.backgroundColor = "green";
}
