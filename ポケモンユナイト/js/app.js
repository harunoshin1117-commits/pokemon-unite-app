// =========================
// Imports
// =========================

import { pokemonsList } from "./pokemonData.js";
import { heldItemsList } from "./helditemData.js";
import {
    computeFinalDamage,
    computeMoveDamageData,
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
import { bindMobileTabs } from "./mobileTabs.js";
import {
    resetLastCalculation,
    setLastCalculation
} from "./battleState.js";
import {
    deleteBuild,
    getSavedBuilds,
    loadBuild,
    saveBuild
} from "./build/buildStorage.js";
import {
    renderBuildDetails,
    renderSavedBuilds
} from "./build/buildRenderer.js";
import { bindBuildEvents } from "./build/buildController.js";
import {
    createBuildState,
    getValidNormalAttackData,
    isValidBuildState,
    normalizeInteger
} from "./build/buildState.js";
import {
    getEnemyStats as selectEnemyStats,
    findPokemonById,
    findMoveByName,
    getHpFromStats,
    getPokemonStatsAtLevel,
    getUniteMove
} from "./appSelectors.js";
import {
    abilityDescription,
    abilityImage,
    abilityImagePlaceholder,
    abilityName,
    abilityNote,
    allResetButton,
    attackAction,
    attackerSummaryAbility,
    attackerSummaryAttack,
    attackerSummaryCriticalDamage,
    attackerSummaryCriticalRate,
    attackerSummaryCurrentHpInput,
    attackerSummaryCurrentHpMax,
    attackerSummaryCurrentHpPercent,
    attackerSummaryDefense,
    attackerSummaryHp,
    attackerSummaryHpFill,
    attackerSummaryHpRange,
    attackerSummaryImage,
    attackerSummaryLevel,
    attackerSummaryMoveSpeed,
    attackerSummaryName,
    attackerSummarySpAttack,
    attackerSummarySpDefense,
    buildNameInput,
    buildDetailsContent,
    buildDetailsOverlay,
    buildStorageMessage,
    closeDetailPopup,
    closeBuildDetails,
    closeModal,
    criticalCheck,
    criticalPatternLock,
    damageResult,
    damageTaken,
    damageTakenNormalAttack,
    damageTakenPlus,
    detailDamageResult,
    detailPopupOverlay,
    deleteBuildButton,
    enemyLevelSelect,
    enemyName,
    enemyStatsText,
    enemyStatsToggle,
    heldItems,
    hitDamageResult,
    hitCountSelects,
    hpFillAll,
    hpFillNormalAttack,
    hpFillOne,
    hpFillTwo,
    hpFillUnite,
    levelSelect,
    loadBuildButton,
    mobileTabButtons,
    mobileTabContainers,
    mobileTabPanels,
    normalAttackDamage,
    overlay,
    pokemonSelect,
    pokemonSelectTwo,
    remainingHp,
    remainingHpAll,
    remainingHpNormalAttack,
    remainingHpPlus,
    remainingHpUnite,
    resultBreakdownToggle,
    resultPopup,
    saveBuildButton,
    savedBuildSelect,
    showBuildDetailsButton,
    selectItems,
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
    takenAll,
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
let attackerCurrentHp = null;
let hasAttacked = false;
let lockedNormalAttackCriticalPattern = null;
const mobileQuery = window.matchMedia("(max-width: 768px)");
// =========================
// Initial setup
// =========================

createLevelOptions(levelSelect);
createLevelOptions(enemyLevelSelect);

createPokemonOptions(pokemonSelect, pokemonsList);
createPokemonOptions(pokemonSelectTwo, pokemonsList);
createHitCountOptions(hitCountSelects);

currentPokemon = findPokemonById(pokemonsList, pokemonSelect.value) || pokemonsList[0];
enemyPokemon = findPokemonById(pokemonsList, pokemonSelectTwo.value) || pokemonsList[0];
levelSelect.value = levelSelect.value || "1";
enemyLevelSelect.value = enemyLevelSelect.value || "1";
updateAbilityDisplay();
updateAttackerSummaryCard();

updateNormalAttack();

Object.values(hitCountSelects).forEach(select => {
    select.addEventListener("change", () => {
        if(select === hitCountSelects.normalAttack){
            releaseNormalAttackCriticalLock();
        }

        updateNormalAttack();
         updateDamageByHitCount();
        
    })
})

attackerSummaryHpRange.addEventListener("input", () => {
    const maxHp = getAttackerMaxHp();
    attackerCurrentHp = normalizeInteger(
        attackerSummaryHpRange.value,
        0,
        maxHp,
        maxHp
    );
    updateAttackerSummaryCard();
});

attackerSummaryCurrentHpInput.addEventListener("input", () => {
    const maxHp = getAttackerMaxHp();
    attackerCurrentHp = normalizeInteger(
        attackerSummaryCurrentHpInput.value,
        0,
        maxHp,
        maxHp
    );
    updateAttackerSummaryCard();
});

// =========================
// Player and result events
// =========================

levelSelect.addEventListener("change", () => {
    attackerCurrentHp = null;

    updatePlayerUI();
    updateAttackerSummaryCard();
    updateNormalAttack();
   updateDamageByHitCount();
   
  

});

pokemonSelect.addEventListener("change", () => {
    releaseNormalAttackCriticalLock();
    attackerCurrentHp = null;
   
    selectedSkillOne = null;
    selectedSkillTwo = null;
    selectedSkillThird = null;
    hasAttacked = false;
    resetLastCalculation();
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

  
    updateAbilityDisplay();
    updateAttackerSummaryCard();
    updatePlayerUI();
   updateNormalAttack();
   

});

// =========================
// Move selection events
// =========================

skillFirstResult.addEventListener("change", () => {
    selectedSkillOne = skillFirstResult.value
        ? findMoveByName(currentPokemon, skillFirstResult.value)
        : null;

    if(selectedSkillOne){
        renderSkillOneRawDamage();
    }else{
        resetDamageDisplay(
            skillFirstResult,
            skillFirstDamage,
            damageTaken,
            remainingHp,
            hpFillOne
        );
    }

    rerenderAfterAttack();
});

skillSecondResult.addEventListener("change", () => {
    selectedSkillTwo = skillSecondResult.value
        ? findMoveByName(currentPokemon, skillSecondResult.value)
        : null;

    if(selectedSkillTwo){
        renderSkillTwoRawDamage();
    }else{
        resetDamageDisplay(
            skillSecondResult,
            skillSecondDamage,
            damageTakenPlus,
            remainingHpPlus,
            hpFillTwo
        );
    }

    rerenderAfterAttack();
});

skillThirdResult.addEventListener("change", () => {
    selectedSkillThird = skillThirdResult.value
        ? getUniteMove(currentPokemon)
        : null;

    if(selectedSkillThird){
        renderSkillThirdRawDamage();
    }else{
        resetDamageDisplay(
            skillThirdResult,
            skillThirdDamage,
            uniteTaken,
            remainingHpUnite,
            hpFillUnite
        );
    }

    rerenderAfterAttack();
});
allResetButton.addEventListener("click",() => {
    resetAppState();
})

bindBuildEvents({
    buildNameInput,
    saveBuildButton,
    savedBuildSelect,
    showBuildDetailsButton,
    loadBuildButton,
    deleteBuildButton,
    buildStorageMessage,
    buildDetailsOverlay,
    buildDetailsContent,
    closeBuildDetails,
    getCurrentBuildState,
    applyBuildState,
    getSavedBuilds,
    saveBuild,
    loadBuild,
    deleteBuild,
    renderSavedBuilds,
    renderBuildDetails
});

const activateMobileTab = bindMobileTabs({
    tabButtons: mobileTabButtons,
    tabPanels: mobileTabPanels,
    tabContainers: mobileTabContainers,
    mobileQuery
});

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
           updateAttackerSummaryCard();
           updateNormalAttack();
          
    })
    
})

criticalCheck.addEventListener("click",() => {
    releaseNormalAttackCriticalLock();
    updateAttackerSummaryCard();
    updateNormalAttack();
})

criticalPatternLock.addEventListener("change", () => {
    if(criticalPatternLock.checked){
        lockedNormalAttackCriticalPattern =
            currentNormalAttackData?.hitDamages.map(
                hitData => hitData.critical
            ) || [];
        return;
    }

    lockedNormalAttackCriticalPattern = null;
    updateAttackerSummaryCard();
    updateNormalAttack();
});

attackAction.addEventListener("click",() => {

   damageResult.style.display = "flex";
   resultPopup.style.display = "block";
    hasAttacked = true;
    attackNormalAttack();
    activateMobileTab("result");
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
    enemyStatsToggle,
    enemyStatsText,
    heldItems,
    overlay,
    closeModal
});

// =========================
// Enemy events
// =========================

enemyLevelSelect.addEventListener("change", () => {
    updateEnemyUI();
    rerenderAfterAttack();
});

pokemonSelectTwo.addEventListener("change", () => {
    const selectedId = pokemonSelectTwo.value;

    enemyPokemon = findPokemonById(pokemonsList, selectedId);
    enemyName.textContent = selectedId;

    updateEnemyUI();
    rerenderAfterAttack();
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

function resetAppState(){
    hasAttacked = false;
    resetLastCalculation();
    lockedNormalAttackCriticalPattern = null;

    currentPokemon = pokemonsList[0];
    enemyPokemon = pokemonsList[0];
    selectedSkillOne = null;
    selectedSkillTwo = null;
    selectedSkillThird = null;
    currentNormalAttackData = null;
    currentHeldItems = [];
    currentSelectedSlot = null;
    attackerCurrentHp = null;

    pokemonSelect.value = currentPokemon.id;
    pokemonSelectTwo.value = enemyPokemon.id;
    levelSelect.value = "1";
    enemyLevelSelect.value = "1";
    hitCountSelects.normalAttack.value = "0";
    hitCountSelects.one.value = "1";
    hitCountSelects.two.value = "1";
    hitCountSelects.unite.value = "1";
    criticalCheck.checked = false;
    criticalPatternLock.checked = false;

    heldItems.forEach(item => {
        item.textContent = "✚";
        item.dataset.id = "";
        item.style.padding = "";
        item.classList.remove("is-held-item-selected");
    });

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

    skillFirstResult.style.backgroundColor = "white";
    skillSecondResult.style.backgroundColor = "white";
    skillThirdResult.style.backgroundColor = "white";

    damageTakenNormalAttack.textContent = "";
    remainingHpNormalAttack.textContent = "";
    hpFillNormalAttack.style.width = "100%";
    hpFillNormalAttack.style.backgroundColor = "green";

    takenAll.textContent = "";
    remainingHpAll.textContent = "";
    hpFillAll.style.width = "100%";
    hpFillAll.style.backgroundColor = "green";

    detailDamageResult.classList.remove("is-open");
    enemyStatsText.classList.remove("is-open");
    resultBreakdownToggle.textContent = "内訳を見る";

    detailPopupOverlay.style.display = "none";
    buildDetailsOverlay.style.display = "none";
    hitDamageResult.innerHTML = "";
    overlay.style.display = "none";
    resultPopup.style.display = "none";

    enemyName.textContent = enemyPokemon.id;
    updateAbilityDisplay();
    updateAttackerSummaryCard();
    updatePlayerUI();
    updateEnemyUI();
    updateNormalAttack();
    resetDamageResultVisibility();
}

export function getCurrentBuildState(){
    return createBuildState({
        attacker: {
            pokemonId: currentPokemon.id,
            level: Number(levelSelect.value),
            currentHp: getCurrentAttackerHpForSave(),
            skillOneName: selectedSkillOne?.name ?? null,
            skillTwoName: selectedSkillTwo?.name ?? null,
            uniteMoveName: selectedSkillThird?.name ?? null,
            heldItemSlots: Array.from(
                heldItems,
                item => item.dataset.id || null
            )
        },
        hitCounts: {
            normalAttack: Number(hitCountSelects.normalAttack.value),
            skillOne: Number(hitCountSelects.one.value),
            skillTwo: Number(hitCountSelects.two.value),
            unite: Number(hitCountSelects.unite.value)
        },
        criticalEnabled: criticalCheck.checked,
        calculationState: {
            normalAttackData: currentNormalAttackData,
            normalAttackCriticalLocked:
                criticalPatternLock.checked,
            hasAttacked
        }
    });
}

export function applyBuildState(build){
    if(!isValidBuildState(build)){
        return getCurrentBuildState();
    }

    const preservedEnemyPokemon = enemyPokemon;
    const preservedEnemyLevel = enemyLevelSelect.value;

    resetAppState();

    enemyPokemon = preservedEnemyPokemon;
    pokemonSelectTwo.value = enemyPokemon.id;
    enemyLevelSelect.value = preservedEnemyLevel;
    enemyName.textContent = enemyPokemon.id;
    updateEnemyUI();

    currentPokemon =
        findPokemonById(pokemonsList, build.attacker?.pokemonId) ||
        pokemonsList[0];

    pokemonSelect.value = currentPokemon.id;
    levelSelect.value = String(
        normalizeInteger(build.attacker?.level, 1, 15, 1)
    );

    hitCountSelects.normalAttack.value = String(
        normalizeInteger(build.hitCounts?.normalAttack, 0, 10, 0)
    );
    hitCountSelects.one.value = String(
        normalizeInteger(build.hitCounts?.skillOne, 0, 10, 1)
    );
    hitCountSelects.two.value = String(
        normalizeInteger(build.hitCounts?.skillTwo, 0, 10, 1)
    );
    hitCountSelects.unite.value = String(
        normalizeInteger(build.hitCounts?.unite, 0, 10, 1)
    );
    criticalCheck.checked = build.criticalEnabled === true;

    selectedSkillOne = build.attacker?.skillOneName
        ? findMoveByName(currentPokemon, build.attacker.skillOneName)
        : null;
    selectedSkillTwo = build.attacker?.skillTwoName
        ? findMoveByName(currentPokemon, build.attacker.skillTwoName)
        : null;
    selectedSkillThird = build.attacker?.uniteMoveName
        ? findMoveByName(currentPokemon, build.attacker.uniteMoveName)
        : null;

    const restoredHeldItemIds = new Set();
    const heldItemSlots = Array.isArray(build.attacker?.heldItemSlots)
        ? build.attacker.heldItemSlots
        : [];

    heldItems.forEach((slot, index) => {
        const itemId = heldItemSlots[index];
        const selectedItem = heldItemsList.find(
            item => item.id === itemId
        );

        if(!selectedItem || restoredHeldItemIds.has(itemId)){
            return;
        }

        restoredHeldItemIds.add(itemId);
        currentSelectedSlot = slot;
        showHeldItem(itemId, selectedItem);
    });

    currentHeldItems = [...restoredHeldItemIds];
    currentSelectedSlot = null;
    attackerCurrentHp = normalizeInteger(
        build.attacker?.currentHp,
        0,
        getAttackerMaxHp(),
        getAttackerMaxHp()
    );

    enemyName.textContent = enemyPokemon.id;
    updateAbilityDisplay();
    updateAttackerSummaryCard();
    updatePlayerUI();
    updateEnemyUI();

    if(selectedSkillThird){
        showSkillResult(
            skillThirdResult,
            selectedSkillThird.name,
            selectedSkillThird
        );
    }

    const normalAttackHitCount = Number(
        hitCountSelects.normalAttack.value
    );
    const savedNormalAttackData = getValidNormalAttackData(
        build.calculationState?.normalAttackData,
        normalAttackHitCount,
        criticalCheck.checked
    );
    const shouldLockCriticalPattern =
        build.calculationState?.normalAttackCriticalLocked !==
            false;

    hasAttacked = build.calculationState?.hasAttacked === true;

    if(savedNormalAttackData){
        currentNormalAttackData = savedNormalAttackData;
        showNormalAttackDamage(currentNormalAttackData);

        if(hasAttacked){
            damageResult.style.display = "flex";
            resultPopup.style.display = "block";
            attackNormalAttack();
        }else{
            resetDamageResultVisibility();
        }
    }else{
        updateNormalAttack();

        if(hasAttacked){
            damageResult.style.display = "flex";
            resultPopup.style.display = "block";
        }else{
            resetDamageResultVisibility();
        }
    }

    if(shouldLockCriticalPattern){
        lockedNormalAttackCriticalPattern =
            currentNormalAttackData?.hitDamages.map(
                hitData => hitData.critical
            ) || [];
        criticalPatternLock.checked = true;
    }else{
        lockedNormalAttackCriticalPattern = null;
        criticalPatternLock.checked = false;
    }

    return getCurrentBuildState();
}

function updateNormalAttack(){
    currentNormalAttackData = calculateNormalAttackDamage({
        level: Number(levelSelect.value),
        pokemonId: currentPokemon.id,
        hitCount: Number(hitCountSelects.normalAttack.value),
        status: getCurrentPlayerStatus(),
        normalAttack: currentPokemon.normalAttack,
        criticalEnabled: criticalCheck.checked,
        criticalPattern: lockedNormalAttackCriticalPattern
    });
    showNormalAttackDamage(currentNormalAttackData);
    rerenderAfterAttack();
}
function releaseNormalAttackCriticalLock(){
    lockedNormalAttackCriticalPattern = null;
    criticalPatternLock.checked = false;
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
    const moveDamageData = {
        skillOne: skillOneDamageData,
        skillTwo: skillTwoDamageData,
        unite: uniteDamageData
    };

    setLastCalculation({
        normalAttack: finalDamageData,
        moveDamageData,
        enemyHp: getEnemyHp()
    });

    renderTotalDamageResult(finalDamageData, moveDamageData);

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
    const level = normalizeInteger(levelSelect.value, 1, 15, 1);
    const selectedPokemon =
        findPokemonById(pokemonsList, pokemonSelect.value) ||
        currentPokemon;
    const baseStats = getPokemonStatsAtLevel(selectedPokemon, level);

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
    const enemyState = {
        maxHp: enemyHp,
        currentHp: enemyHp,
        defense: enemyStats.defense,
        spDefense: enemyStats.spDefense
    };

    if(selectedMove.damageComponents){
        return computeMoveDamageData({
            selectedMove,
            useCount: hitCount,
            attackerLevel: level,
            attackerStats: attackerStatus,
            enemyState,
            carryHpBetweenUses: true
        });
    }

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
        selectedSkillOne,
        selectedSkillTwo,
        selectedSkillThird,
        skillFirstOne,
        skillFirstResult,
        skillFirstTwo,
        skillSecondOne,
        skillSecondResult,
        skillSecondTwo,
        skillThirdOne,
        skillThirdResult,
        skillThirdTwo,
        uniteMove,
        damageTaken,
        remainingHp,
        damageTakenPlus,
        remainingHpPlus,
        uniteTaken,
        remainingHpUnite,
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

function updateAbilityDisplay(){
    const ability = currentPokemon.abilityDisplayData;

    abilityName.textContent = ability?.name || "特性情報は準備中です";
    abilityDescription.textContent = ability?.shortDescription || "";
    abilityNote.textContent =
        ability?.note || "現在は説明表示のみ。計算処理には未接続。";

    if(ability?.image){
        abilityImage.src = ability.image;
        abilityImage.alt = `${abilityName.textContent}のイメージ`;
        abilityImage.hidden = false;
        abilityImagePlaceholder.hidden = true;
    }else{
        abilityImage.removeAttribute("src");
        abilityImage.alt = "";
        abilityImage.hidden = true;
        abilityImagePlaceholder.hidden = false;
    }
}

function formatSummaryNumber(value){
    return Number.isFinite(value)
        ? Math.floor(value).toLocaleString()
        : "-";
}

function formatSummaryPercent(value){
    if(!Number.isFinite(value)){
        return "-";
    }

    return `${Math.floor(value)}%`;
}

function getSummaryMoveSpeed(status){
    return status.moveSpeed ??
        status.movementSpeed ??
        status.speed ??
        null;
}

function getSummaryCriticalDamage(status){
    const criticalDamage =
        status.criticalDamage ??
        status.criticalDamageRate ??
        200;

    if(!Number.isFinite(criticalDamage)){
        return "200%";
    }

    return criticalDamage <= 10
        ? `${Math.floor(criticalDamage * 100)}%`
        : `${Math.floor(criticalDamage)}%`;
}

function getAttackerMaxHp(){
    const status = getCurrentPlayerStatus();
    const maxHp = Math.floor(Number(status.hp));

    return Number.isFinite(maxHp) && maxHp > 0
        ? maxHp
        : 0;
}

function getCurrentAttackerHpForSave(){
    const maxHp = getAttackerMaxHp();

    if(attackerCurrentHp === null){
        return maxHp;
    }

    return normalizeInteger(attackerCurrentHp, 0, maxHp, maxHp);
}

function updateAttackerSummaryCard(){
    const selectedPokemon =
        findPokemonById(pokemonsList, pokemonSelect.value) ||
        currentPokemon;
    const status = getCurrentPlayerStatus();
    const level = normalizeInteger(levelSelect.value, 1, 15, 1);
    const maxHp = Math.floor(Number(status.hp));
    const safeMaxHp = Number.isFinite(maxHp) && maxHp > 0
        ? maxHp
        : 0;
    const currentHp = attackerCurrentHp === null
        ? safeMaxHp
        : normalizeInteger(attackerCurrentHp, 0, safeMaxHp, safeMaxHp);
    const hpPercent = safeMaxHp > 0
        ? Math.max(0, Math.min(100, Math.floor((currentHp / safeMaxHp) * 100)))
        : 0;
    const abilityNameText =
        selectedPokemon.abilityDisplayData?.name || "特性情報準備中";

    attackerCurrentHp = currentHp;

    attackerSummaryImage.src = selectedPokemon.Image || "";
    attackerSummaryImage.alt = `${selectedPokemon.name || selectedPokemon.id}の画像`;
    attackerSummaryName.textContent = selectedPokemon.name || selectedPokemon.id;
    attackerSummaryLevel.textContent = `Lv.${level}`;
    attackerSummaryAttack.textContent = formatSummaryNumber(status.attack);
    attackerSummaryDefense.textContent = formatSummaryNumber(status.defense);
    attackerSummarySpAttack.textContent = formatSummaryNumber(status.spAttack);
    attackerSummarySpDefense.textContent = formatSummaryNumber(status.spDefense);
    attackerSummaryHp.textContent = formatSummaryNumber(safeMaxHp);
    attackerSummaryMoveSpeed.textContent =
        formatSummaryNumber(getSummaryMoveSpeed(status));
    attackerSummaryCriticalRate.textContent =
        formatSummaryPercent(status.criticalRate);
    attackerSummaryCriticalDamage.textContent =
        getSummaryCriticalDamage(status);
    attackerSummaryCurrentHpInput.max = String(safeMaxHp);
    attackerSummaryCurrentHpInput.value = String(currentHp);
    attackerSummaryCurrentHpInput.disabled = safeMaxHp <= 0;
    attackerSummaryCurrentHpMax.textContent = formatSummaryNumber(safeMaxHp);
    attackerSummaryCurrentHpPercent.textContent = `(${hpPercent}%)`;
    attackerSummaryHpFill.style.width = `${hpPercent}%`;
    attackerSummaryHpRange.max = String(safeMaxHp);
    attackerSummaryHpRange.value = String(currentHp);
    attackerSummaryHpRange.disabled = safeMaxHp <= 0;
    attackerSummaryAbility.textContent = abilityNameText;
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
updateAbilityDisplay();
updateAttackerSummaryCard();
window.setTimeout(() => {
    updateAbilityDisplay();
    updateAttackerSummaryCard();
}, 0);
