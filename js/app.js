// =========================
// Imports
// =========================

import { pokemonsList } from "./pokemonData.js";
import { heldItemsList } from "./helditemData.js";
import {
    computeFinalDamage,
    calculateNormalAttackDamage,
    computeNormalAttackFinalDamage,
    getTotalDamage
} from "./damageCalculator.js";
import {
    applyHeldItemEffect,
    getActiveHeldItems,
    getCurrentStatus,
    toggleHeldItem
} from "./heldItemService.js";
import {
    renderFinalDamageAll,
    renderMoveFinalDamage,
    renderMoveRawDamage,
    resetDamageDisplay,
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
import { bindUiEvents } from "./uiEvents.js";
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
    skillFirstOne,
    skillFirstDamage,
    skillFirstResult,
    skillFirstTwo,
    skillSecondOne,
    skillSecondDamage,
    skillSecondResult,
    skillSecondTwo,
    skillThirdOne,
    skillThirdDamage,
    skillThirdResult,
    skillThirdTwo,
    skillsFirst,
    skillsSecond,
    statsText,
    takenAll,
    titlePokemonTitle,
    uniteTaken,
    uniteMove
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
            renderSkillOneRawDamage();
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
            renderSkillTwoRawDamage();
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

uniteMove.addEventListener("click", () => {
    if(skillThirdResult.textContent === ""){
        skillThirdResult.textContent = uniteMove.textContent;
        skillThirdResult.style.backgroundColor = currentPokemon.color;

        const move = getUniteMove(currentPokemon);
        selectedSkillThird = move;
        renderSkillThirdRawDamage();
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

bindUiEvents({
    closeDetailPopup,
    detailPopupOverlay,
    resultBreakdownToggle,
    detailDamageResult,
    playerStatsToggle,
    statsText,
    enemyStatsToggle,
    enemyStatsText,
    heldItems,
    overlay,
    closeModal
});

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
   
    const skillOneDamageData = buildMoveDamageData(
        selectedSkillOne,
        Number(hitCountSelects.one.value)
    );

    const skillTwoDamageData = buildMoveDamageData(
        selectedSkillTwo,
        Number(hitCountSelects.two.value)
    );

    const uniteDamageData = buildMoveDamageData(
        selectedSkillThird,
        Number(hitCountSelects.unite.value)
    );

    renderMoveFinalDamage(
        damageTaken,
        remainingHp,
        hpFillOne,
        skillOneDamageData
    );
    renderMoveFinalDamage(
        damageTakenPlus,
        remainingHpPlus,
        hpFillTwo,
        skillTwoDamageData
    );
    renderMoveFinalDamage(
        uniteTaken,
        remainingHpUnite,
        hpFillUnite,
        uniteDamageData
    );
    renderTotalDamageResult(
        finalDamageData,
        {
            skillOne: skillOneDamageData,
            skillTwo: skillTwoDamageData,
            unite: uniteDamageData
        }
    );

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

        renderSkillOneRawDamage();

        }
    if(selectedSkillTwo){

        renderSkillTwoRawDamage();

        }
    if(selectedSkillThird){

        renderSkillThirdRawDamage();

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

function buildMoveDamageData(selectedMove, hitCount){
    if(!selectedMove){
        return {
            selectedMove: null,
            hitCount,
            rawDamage: null,
            finalDamage: null,
            hpAfter: null,
            enemyHp: null
        };
    }

    const level = Number(levelSelect.value);
    const attackerStatus = getCurrentPlayerStatus();
    const enemyStats = getEnemyStats();
    const enemyHp = getEnemyHp();

    const rawDamage = getTotalDamage(
        selectedMove,
        hitCount,
        level,
        attackerStatus
    );

    const finalDamage = computeFinalDamage(
        selectedMove,
        hitCount,
        level,
        attackerStatus,
        enemyStats
    );

    return {
        selectedMove,
        hitCount,
        rawDamage,
        finalDamage,
        hpAfter: finalDamage === null
            ? null
            : Math.max(0, enemyHp - finalDamage),
        enemyHp
    };
}

function renderSkillOneRawDamage(){
    renderMoveRawDamage(
        skillFirstDamage,
        buildMoveDamageData(
            selectedSkillOne,
            Number(hitCountSelects.one.value)
        )
    );
}

function renderSkillTwoRawDamage(){
    renderMoveRawDamage(
        skillSecondDamage,
        buildMoveDamageData(
            selectedSkillTwo,
            Number(hitCountSelects.two.value)
        )
    );
}

function renderSkillThirdRawDamage(){
    renderMoveRawDamage(
        skillThirdDamage,
        buildMoveDamageData(
            selectedSkillThird,
            Number(hitCountSelects.unite.value)
        )
    );
}

function updatePlayerUI(){
    renderPlayerUI({
        level: Number(levelSelect.value),
        currentPokemon,
        currentPokemonStats: getCurrentPlayerStatus(),
        statusName,
        selectedSkillOne,
        selectedSkillTwo,
        skillFirstOne,
        skillFirstResult,
        skillFirstTwo,
        skillSecondOne,
        skillSecondResult,
        skillSecondTwo,
        skillThirdOne,
        skillThirdTwo,
        uniteMove,
        statsText,
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
        statusName,
        enemyStatsText
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

function renderTotalDamageResult(finalDamageData, moveDamageData){
    renderFinalDamageAll(finalDamageData, {
        moveDamageData,
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



