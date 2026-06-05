// =========================
// Imports
// =========================

import { pokemonsList } from "./pokemonData.js";
import { heldItemsList } from "./helditemData.js";
import {
    calculateNormalAttackDamage,
    computeNormalAttackFinalDamage
} from "./damageCalculator.js";
import {
    applyHeldItemEffect,
    getActiveHeldItems,
    getCurrentStatus,
    toggleHeldItem
} from "./heldItemService.js";
import {
    renderFinalDamageAll,
    resetDamageDisplay,
    showDamage as renderDamage,
    showFinalDamage as renderFinalDamage,
    showHeldItem as renderHeldItem,
    showHitDamagesPopup,
    showNormalAttackDamage as renderNormalAttackDamage,
    showNormalAttackFinalDamage as renderNormalAttackFinalDamage,
    showSelectPokemonImage as renderSelectPokemonImage,
    showSkillResult as renderSkillResult
} from "./resultRenderer.js";
import {
    updateEnemyUI as renderEnemyUI,
    updatePlayerUI as renderPlayerUI
} from "./ui.js";
import {
    createHitCountOptions,
    createLevelOptions,
    createPokemonOptions
} from "./selectOptions.js";
import {
    getEnemyStats as selectEnemyStats,
    findPokemonById,
    findMoveByName,
    getHpFromStats,
    getPokemonStatsAtLevel,
    getUniteMove
} from "./appSelectors.js";
import {
    allResetButton,
    attackAction,
    closeDetailPopup,
    closeModal,
    colorChange,
    criticalCheck,
    damageResult,
    damageTaken,
    damageTakenNormalAttack,
    damageTakenPlus,
    detailDamageResult,
    detailPopupOverlay,
    enemyLevelSelect,
    enemyName,
    enemyStatsText,
    enemyStatsToggle,
    heldItems,
    hitCountSelects,
    hpFillAll,
    hpFillNormalAttack,
    hpFillOne,
    hpFillTwo,
    hpFillUnite,
    levelSelect,
    normalAttackDamage,
    overlay,
    playerStatsToggle,
    pokemonSelect,
    pokemonSelectTwo,
    remainingHp,
    remainingHpAll,
    remainingHpNormalAttack,
    remainingHpPlus,
    remainingHpUnite,
    resultBreakdownToggle,
    resultPopup,
    selectItems,
    selectPokemonImage,
    skillFirstDamage,
    skillFirstResult,
    skillSecondDamage,
    skillSecondResult,
    skillThirdDamage,
    skillThirdResult,
    skillsFirst,
    skillsSecond,
    statsText,
    takenAll,
    titlePokemonTitle,
    uniteTaken,
    unitesMove
} from "./domElements.js";
// =========================
// State and config
// =========================

const statusName = {
    hp:"HP",
    attack:"攻撃",
    defense:"防御",
    spAttack:"特攻",
    spDefense:"特防",
    criticalRate:"急所率",
    cooldownReduction:"CT短縮",
    lifeSteal:"ライフスティール"
};

let currentPokemon = pokemonsList[0];
let enemyPokemon = pokemonsList[0];
let selectedSkillOne = null;
let selectedSkillTwo = null;
let selectedSkillThird = null;
let currentNormalAttackData = null;
let currentHeldItems = [];
let currentSelectedSlot = null;
let hasAttacked = false;
// =========================
// Initial setup
// =========================

createLevelOptions(levelSelect);
createLevelOptions(enemyLevelSelect);

createPokemonOptions(pokemonSelect, pokemonsList);
createPokemonOptions(pokemonSelectTwo, pokemonsList);
createHitCountOptions(hitCountSelects);

updateNormalAttack();

Object.values(hitCountSelects).forEach(select => {
    select.addEventListener("change", () => {
        updateNormalAttack();
         updateDamageByHitCount();
        
    })
})

// =========================
// Player and result events
// =========================

levelSelect.addEventListener("change", () => {

    updatePlayerUI();
    updateNormalAttack();
   updateDamageByHitCount();
   
  

});

pokemonSelect.addEventListener("change", () => {

   
    selectedSkillOne = null;
    selectedSkillTwo = null;
    selectedSkillThird = null;
    hasAttacked = false;
    resultPopup.style.display = "none";
    resetDamageResultVisibility();
    detailDamageResult.classList.remove("is-open");
    resultBreakdownToggle.textContent = "内訳を見る";

     resetDamageDisplay(
        skillFirstResult,
        skillFirstDamage,
        damageTaken,
        remainingHp,
        hpFillOne
    );

    resetDamageDisplay(
        skillSecondResult,
        skillSecondDamage,
        damageTakenPlus,
        remainingHpPlus,
        hpFillTwo
    );

    resetDamageDisplay(
        skillThirdResult,
        skillThirdDamage,
        uniteTaken,
        remainingHpUnite,
        hpFillUnite
    );
    
    damageTakenNormalAttack.textContent = "";
    remainingHpNormalAttack.textContent = "";
    hpFillNormalAttack.style.width = "100%";
    hpFillNormalAttack.style.backgroundColor = "green";

    takenAll.textContent = "";
    remainingHpAll.textContent = "";
    hpFillAll.style.width = "100%";
    hpFillAll.style.backgroundColor = "green";

   

    const selectedId = pokemonSelect.value;

    currentPokemon = findPokemonById(pokemonsList, selectedId);

  

    titlePokemonTitle.textContent = selectedId;

    showSelectPokemonImage();
    updatePlayerUI();
   updateNormalAttack();
   

});

// =========================
// Move selection events
// =========================

skillsFirst.forEach(skill => {
    skill.addEventListener("click", () => {
        if(skillFirstResult.textContent === "" || skillFirstResult.textContent !== skill.textContent){
            const skillName = skill.textContent.replace("+", "");
            const selectedMove = findMoveByName(currentPokemon, skillName);

            selectedSkillOne = selectedMove;
            showDamage(selectedMove, skillFirstDamage, Number(hitCountSelects.one.value));
            showSkillResult(skillFirstResult, selectedMove.name, selectedMove);
            rerenderAfterAttack();
        }else{
            skillFirstResult.textContent = "";
            skillFirstDamage.textContent = "威力:";
            damageTaken.textContent = "";
            remainingHp.textContent = "";
            hpFillOne.style.width = "100%";
            hpFillOne.style.backgroundColor = "green";
            selectedSkillOne = null;
            rerenderAfterAttack();
        }
    });
});

skillsSecond.forEach(skill => {
    skill.addEventListener("click", () => {
        if(skillSecondResult.textContent === "" || skillSecondResult.textContent !== skill.textContent){
            const skillName = skill.textContent.replace("+", "");
            const selectedMove = findMoveByName(currentPokemon, skillName);

            selectedSkillTwo = selectedMove;
            showDamage(selectedMove, skillSecondDamage, Number(hitCountSelects.two.value));
            showSkillResult(skillSecondResult, selectedMove.name, selectedMove);
            rerenderAfterAttack();
        }else{
            skillSecondResult.textContent = "";
            skillSecondDamage.textContent = "威力:";
            damageTakenPlus.textContent = "";
            remainingHpPlus.textContent = "";
            hpFillTwo.style.width = "100%";
            hpFillTwo.style.backgroundColor = "green";
            selectedSkillTwo = null;
            rerenderAfterAttack();
        }
    });
});

unitesMove.addEventListener("click", () => {
    if(skillThirdResult.textContent === ""){
        skillThirdResult.textContent = unitesMove.textContent;
        skillThirdResult.style.backgroundColor = currentPokemon.color;

        const move = getUniteMove(currentPokemon);
        showDamage(move, skillThirdDamage, Number(hitCountSelects.unite.value));
        selectedSkillThird = move;
        rerenderAfterAttack();
    }else{
        skillThirdResult.textContent = "";
        skillThirdDamage.textContent = "威力:";
        uniteTaken.textContent = "";
        remainingHpUnite.textContent = "";
        hpFillUnite.style.width = "100%";
        hpFillUnite.style.backgroundColor = "green";
        selectedSkillThird = null;
        rerenderAfterAttack();
    }
});
allResetButton.addEventListener("click",() => {
     location.reload();
})

heldItems.forEach(item => {

    item.addEventListener("click", () => {

        currentSelectedSlot = item;
    })
})
selectItems.forEach(item => {

    item.addEventListener("click", () => {
       
           const selectedItem = 
                heldItemsList.find(
                    heldItem => {

                        return heldItem.id === item.dataset.id;
                    }                        
           )
           currentHeldItems = toggleHeldItem(currentHeldItems, item.dataset.id);
           
           showHeldItem(item.dataset.id,selectedItem);
           overlay.style.display = "none";
           updatePlayerUI();
            rerenderAfterAttack();
          
    })
    
})

criticalCheck.addEventListener("click",() => {

    updateNormalAttack();
})

attackAction.addEventListener("click",() => {

   damageResult.style.display = "flex";
   resultPopup.style.display = "block";
    hasAttacked = true;
    attackNormalAttack();
    damageResult.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
    
    
})

resultPopup.addEventListener("click", () => {
    updatePopup();
})

closeDetailPopup.addEventListener("click", () => {
    detailPopupOverlay.style.display = "none";
})

resultBreakdownToggle.addEventListener("click", () => {
    detailDamageResult.classList.toggle("is-open");
    resultBreakdownToggle.textContent = detailDamageResult.classList.contains("is-open")
        ? "内訳を閉じる"
        : "内訳を見る";
})
playerStatsToggle.addEventListener("click", () => {
    statsText.classList.toggle("is-open");
})

enemyStatsToggle.addEventListener("click", () => {
    enemyStatsText.classList.toggle("is-open");
})

// =====================
// Held item modal events
//======================

heldItems.forEach(heldItem => {
    heldItem.addEventListener("click", () => {
        overlay.style.display = "flex";
    })
});

closeModal.addEventListener("click", () => {
    overlay.style.display = "none";
})

// =========================
// Hover color sync
// =========================

colorChange.forEach(color => {

    color.addEventListener("mouseover", () => {

        color.style.backgroundColor = currentPokemon.color;

    });

    color.addEventListener("mouseout", () => {

        color.style.backgroundColor = "";

    });

});

// =========================
// Enemy events
// =========================

enemyLevelSelect.addEventListener("change", () => {

    updateEnemyUI();
   updateNormalAttack();
   updateDamageByHitCount();
   
      
   
});

pokemonSelectTwo.addEventListener("change", () => {

    const selectedId = pokemonSelectTwo.value;

    enemyPokemon = findPokemonById(pokemonsList, selectedId);

    enemyName.textContent = selectedId;

    updateEnemyUI();
     updateNormalAttack();
   updateDamageByHitCount();

   
});

//==========================
// App orchestration functions
//==========================

// ============================
// Update and rerender functions
// ============================

function resetDamageResultVisibility(){
    if(window.matchMedia("(max-width: 768px)").matches){
        damageResult.style.display = "none";
    }else{
        damageResult.style.display = "";
    }
}
function updateNormalAttack(){
    currentNormalAttackData = calculateNormalAttackDamage({
        level: Number(levelSelect.value),
        pokemonId: currentPokemon.id,
        hitCount: Number(hitCountSelects.normalAttack.value),
        status: getCurrentPlayerStatus(),
        criticalEnabled: criticalCheck.checked
    });
    showNormalAttackDamage(currentNormalAttackData);
    rerenderAfterAttack();
}
function rerenderAfterAttack(){
    if(hasAttacked){
        attackNormalAttack();
    }
}
function attackNormalAttack(){
    let finalDamageData = computeNormalAttackFinalDamage(
        currentNormalAttackData,
        currentPokemon.id,
        getEnemyStats()
    );

    finalDamageData = applyHeldItemEffect(
        finalDamageData,
        getActiveHeldItemsForCurrentSelection(),
        getEnemyHp()
    );
    showNormalAttackFinalDamage(finalDamageData);
   

    showFinalDamage(selectedSkillOne,
            damageTaken,
            remainingHp,
            hpFillOne,
            Number(hitCountSelects.one.value)
        );
    showFinalDamage(selectedSkillTwo,
            damageTakenPlus,
            remainingHpPlus,
            hpFillTwo,
            Number(hitCountSelects.two.value)
        );
    showFinalDamage(selectedSkillThird,
            uniteTaken,
            remainingHpUnite,
            hpFillUnite,
            Number(hitCountSelects.unite.value)
        );
    renderTotalDamageResult(finalDamageData);

}

function updatePopup(){
    let finalDamageData = computeNormalAttackFinalDamage(
        currentNormalAttackData,
        currentPokemon.id,
        getEnemyStats()
    );
     finalDamageData = applyHeldItemEffect(
        finalDamageData,
        getActiveHeldItemsForCurrentSelection(),
        getEnemyHp()
    );
     detailPopupOverlay.style.display = "flex";
    showHitDamagesPopup(finalDamageData.finalHitDamages);

}
function updateDamageByHitCount(){

    if(selectedSkillOne){

        showDamage(selectedSkillOne,
            skillFirstDamage,
            Number(hitCountSelects.one.value));
        
        
        }
    if(selectedSkillTwo){

        showDamage(selectedSkillTwo,
            skillSecondDamage,
            Number(hitCountSelects.two.value));

        
        }
    if(selectedSkillThird){

        showDamage(selectedSkillThird,
            skillThirdDamage,
            Number(hitCountSelects.unite.value));

        
    }
   
    
}

// ============================
// Helper functions
// ============================

function getActiveHeldItemsForCurrentSelection(){
    return getActiveHeldItems(heldItemsList, currentHeldItems);
}

function getCurrentPlayerStatus(){
    const level = Number(levelSelect.value);
    const baseStats = getPokemonStatsAtLevel(currentPokemon, level);

    return getCurrentStatus(
        baseStats,
        getActiveHeldItemsForCurrentSelection()
    );
}

function getEnemyStats(){
    const enemyLevel = Number(enemyLevelSelect.value);

    return selectEnemyStats(enemyPokemon, enemyLevel);
}

function getEnemyHp(){
    return getHpFromStats(getEnemyStats());
}

function updatePlayerUI(){
    renderPlayerUI({
        level: Number(levelSelect.value),
        currentPokemon,
        currentPokemonStats: getCurrentPlayerStatus(),
        statusName,
        selectedSkillOne,
        selectedSkillTwo,
        skillFirstResult,
        skillSecondResult,
        damageTaken,
        remainingHp,
        damageTakenPlus,
        remainingHpPlus,
        uniteTaken,
        remainingHpUnite,
        selectPokemonImage,
        updateDamageByHitCount
    });
}

function updateEnemyUI(){
    renderEnemyUI({
        enemyLevel: Number(enemyLevelSelect.value),
        enemyPokemon,
        statusName
    });
}

function showNormalAttackDamage(normalAttackData){
    renderNormalAttackDamage(normalAttackData, normalAttackDamage);
}

function showNormalAttackFinalDamage(finalDamageData){
    renderNormalAttackFinalDamage(finalDamageData, {
        damageTakenNormalAttack,
        remainingHpNormalAttack,
        hpFillNormalAttack,
        enemyHp: getEnemyHp()
    });
}

function showDamage(selectedMove, targetElement, hitCount = 1){
    renderDamage(
        selectedMove,
        targetElement,
        hitCount,
        Number(levelSelect.value),
        getCurrentPlayerStatus()
    );
}

function showFinalDamage(
    selectedMove,
    damageElement,
    hpElement,
    hpBarElement,
    hitCount = 1
){
    renderFinalDamage(
        selectedMove,
        damageElement,
        hpElement,
        hpBarElement,
        hitCount,
        Number(levelSelect.value),
        getCurrentPlayerStatus(),
        getEnemyStats(),
        getEnemyHp()
    );
}

function showSkillResult(resultElement, skillText, selectedMove){
    renderSkillResult(
        resultElement,
        skillText,
        selectedMove,
        Number(levelSelect.value),
        currentPokemon.color
    );
}

function showHeldItem(itemId, selectedItem){
    renderHeldItem(itemId, selectedItem, currentSelectedSlot);
}

function showSelectPokemonImage(){
    renderSelectPokemonImage(currentPokemon, selectPokemonImage);
}

function renderTotalDamageResult(finalDamageData){
    renderFinalDamageAll(finalDamageData, {
        selectedSkillOne,
        selectedSkillTwo,
        selectedSkillThird,
        hitCounts: {
            one: Number(hitCountSelects.one.value),
            two: Number(hitCountSelects.two.value),
            unite: Number(hitCountSelects.unite.value)
        },
        attackerLevel: Number(levelSelect.value),
        attackerStatus: getCurrentPlayerStatus(),
        enemyStats: getEnemyStats(),
        enemyHp: getEnemyHp(),
        takenAll,
        remainingHpAll,
        hpFillAll
    });
}

// =========================
// First render
// =========================

updatePlayerUI();
updateEnemyUI();



