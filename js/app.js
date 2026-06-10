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
    BUILD_STATE_VERSION,
    deleteBuild,
    getSavedBuilds,
    loadBuild,
    saveBuild
} from "./buildStorage.js";
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
    buildNameInput,
    buildDetailsContent,
    buildDetailsOverlay,
    buildStorageMessage,
    closeDetailPopup,
    closeBuildDetails,
    closeModal,
    colorChange,
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
    saveBuildButton,
    savedBuildSelect,
    showBuildDetailsButton,
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
let lockedNormalAttackCriticalPattern = null;
const NORMAL_ATTACK_CALCULATION_VERSION = 1;
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
        if(select === hitCountSelects.normalAttack){
            releaseNormalAttackCriticalLock();
        }

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
    releaseNormalAttackCriticalLock();
   
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
            skillFirstResult.style.backgroundColor = "white";
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
            skillSecondResult.style.backgroundColor = "white";
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
        skillThirdResult.style.backgroundColor = "white";
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
    resetAppState();
})

saveBuildButton.addEventListener("click", () => {
    const buildName = buildNameInput.value.trim();

    if(!buildName){
        buildStorageMessage.textContent = "保存名を入力してください";
        return;
    }

    try{
        const savedBuild = saveBuild(
            buildName,
            getCurrentBuildState()
        );

        buildNameInput.value = "";
        renderSavedBuilds(savedBuild.id);
        buildStorageMessage.textContent =
            `「${savedBuild.name}」を保存しました`;
    }catch{
        buildStorageMessage.textContent =
            "ビルドを保存できませんでした";
    }
});

loadBuildButton.addEventListener("click", () => {
    const savedBuild = loadBuild(savedBuildSelect.value);

    if(!savedBuild){
        buildStorageMessage.textContent =
            "読み込むビルドを選択してください";
        return;
    }

    applyBuildState(savedBuild.buildState);
    buildStorageMessage.textContent =
        `「${savedBuild.name}」を読み込みました`;
});

showBuildDetailsButton.addEventListener("click", () => {
    const savedBuild = loadBuild(savedBuildSelect.value);

    if(!savedBuild){
        buildStorageMessage.textContent =
            "内容を表示するビルドを選択してください";
        return;
    }

    renderBuildDetails(savedBuild);
    buildDetailsOverlay.style.display = "flex";
});

closeBuildDetails.addEventListener("click", () => {
    buildDetailsOverlay.style.display = "none";
});

deleteBuildButton.addEventListener("click", () => {
    const savedBuild = loadBuild(savedBuildSelect.value);

    if(!savedBuild){
        buildStorageMessage.textContent =
            "削除するビルドを選択してください";
        return;
    }

    try{
        deleteBuild(savedBuild.id);
        renderSavedBuilds();
        buildStorageMessage.textContent =
            `「${savedBuild.name}」を削除しました`;
    }catch{
        buildStorageMessage.textContent =
            "ビルドを削除できませんでした";
    }
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
           updateNormalAttack();
          
    })
    
})

criticalCheck.addEventListener("click",() => {
    releaseNormalAttackCriticalLock();
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
    updateNormalAttack();
});

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

function renderSavedBuilds(selectedBuildId = ""){
    const savedBuilds = getSavedBuilds();

    savedBuildSelect.innerHTML = "";

    if(savedBuilds.length === 0){
        const emptyOption = document.createElement("option");
        emptyOption.value = "";
        emptyOption.textContent = "保存済みビルドなし";
        savedBuildSelect.append(emptyOption);
        savedBuildSelect.disabled = true;
        showBuildDetailsButton.disabled = true;
        loadBuildButton.disabled = true;
        deleteBuildButton.disabled = true;
        return;
    }

    savedBuilds.forEach(savedBuild => {
        const option = document.createElement("option");
        option.value = savedBuild.id;
        option.textContent = savedBuild.name;
        savedBuildSelect.append(option);
    });

    savedBuildSelect.disabled = false;
    showBuildDetailsButton.disabled = false;
    loadBuildButton.disabled = false;
    deleteBuildButton.disabled = false;

    if(
        selectedBuildId &&
        savedBuilds.some(savedBuild => savedBuild.id === selectedBuildId)
    ){
        savedBuildSelect.value = selectedBuildId;
    }
}

function renderBuildDetails(savedBuild){
    const buildState = savedBuild.buildState;
    const attacker = buildState.attacker || {};
    const hitCounts = buildState.hitCounts || {};
    const calculationState = buildState.calculationState || {};
    const normalAttackData =
        calculationState.normalAttackData || {};
    const heldItemSlots = Array.isArray(attacker.heldItemSlots)
        ? attacker.heldItemSlots
        : [];
    const details = [
        ["名前", savedBuild.name],
        ["ポケモン名前", attacker.pokemonId],
        ["レベル", attacker.level],
        ["技セット1", attacker.skillOneName],
        ["技セット2", attacker.skillTwoName],
        ["ユナイト技", attacker.uniteMoveName],
        ["持ち物", heldItemSlots.join(", ")],
        ["通常攻撃ヒット数", hitCounts.normalAttack],
        ["技セット1ヒット数", hitCounts.skillOne],
        ["技セット2ヒット数", hitCounts.skillTwo],
        ["ユナイト技ヒット数", hitCounts.unite],
        ["通常攻撃合計ダメージ", normalAttackData.totalDamage],
        ["急所回数", normalAttackData.criticalCount]
    ];

    buildDetailsContent.replaceChildren();

    details.forEach(([label, value]) => {
        const row = document.createElement("p");
        row.textContent = `${label}: ${value ?? "null"}`;
        buildDetailsContent.append(row);
    });
}

function resetDamageResultVisibility(){
    if(window.matchMedia("(max-width: 768px)").matches){
        damageResult.style.display = "none";
    }else{
        damageResult.style.display = "";
    }
}

function resetAppState(){
    hasAttacked = false;
    lockedNormalAttackCriticalPattern = null;

    currentPokemon = pokemonsList[0];
    enemyPokemon = pokemonsList[0];
    selectedSkillOne = null;
    selectedSkillTwo = null;
    selectedSkillThird = null;
    currentNormalAttackData = null;
    currentHeldItems = [];
    currentSelectedSlot = null;

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
        item.style.padding = "20px";
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
    statsText.classList.remove("is-open");
    enemyStatsText.classList.remove("is-open");
    resultBreakdownToggle.textContent = "内訳を見る";

    detailPopupOverlay.style.display = "none";
    buildDetailsOverlay.style.display = "none";
    hitDamageResult.innerHTML = "";
    overlay.style.display = "none";
    resultPopup.style.display = "none";

    titlePokemonTitle.textContent = currentPokemon.id;
    enemyName.textContent = enemyPokemon.id;
    showSelectPokemonImage();
    updatePlayerUI();
    updateEnemyUI();
    updateNormalAttack();
    resetDamageResultVisibility();
}

function cloneNormalAttackData(normalAttackData){
    if(!normalAttackData){
        return null;
    }

    return {
        totalDamage: normalAttackData.totalDamage,
        criticalCount: normalAttackData.criticalCount,
        hitDamages: normalAttackData.hitDamages.map(hitData => ({
            damage: hitData.damage,
            critical: hitData.critical,
            boosted: hitData.boosted
        }))
    };
}

function getValidNormalAttackData(
    normalAttackData,
    expectedHitCount,
    criticalEnabled
){
    if(
        !normalAttackData ||
        typeof normalAttackData !== "object" ||
        normalAttackData.calculationVersion !==
            NORMAL_ATTACK_CALCULATION_VERSION ||
        !Number.isInteger(normalAttackData.totalDamage) ||
        normalAttackData.totalDamage < 0 ||
        !Number.isInteger(normalAttackData.criticalCount) ||
        normalAttackData.criticalCount < 0 ||
        !Array.isArray(normalAttackData.hitDamages) ||
        normalAttackData.hitDamages.length !== expectedHitCount
    ){
        return null;
    }

    const hitDamagesAreValid = normalAttackData.hitDamages.every(
        hitData =>
            hitData &&
            typeof hitData === "object" &&
            Number.isInteger(hitData.damage) &&
            hitData.damage >= 0 &&
            typeof hitData.critical === "boolean" &&
            typeof hitData.boosted === "boolean"
    );

    if(!hitDamagesAreValid){
        return null;
    }

    const criticalCount = normalAttackData.hitDamages.filter(
        hitData => hitData.critical
    ).length;
    const hitDamageTotal = normalAttackData.hitDamages.reduce(
        (total, hitData) => total + hitData.damage,
        0
    );
    const roundingDifference =
        normalAttackData.totalDamage - hitDamageTotal;

    if(
        normalAttackData.criticalCount !== criticalCount ||
        (!criticalEnabled && criticalCount > 0) ||
        roundingDifference < 0 ||
        roundingDifference > Math.max(0, expectedHitCount - 1)
    ){
        return null;
    }

    return cloneNormalAttackData(normalAttackData);
}

export function getCurrentBuildState(){
    return {
        version: BUILD_STATE_VERSION,
        attacker: {
            pokemonId: currentPokemon.id,
            level: Number(levelSelect.value),
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
            normalAttackData: currentNormalAttackData
                ? {
                    calculationVersion:
                        NORMAL_ATTACK_CALCULATION_VERSION,
                    ...cloneNormalAttackData(currentNormalAttackData)
                }
                : null,
            normalAttackCriticalLocked:
                criticalPatternLock.checked,
            hasAttacked
        }
    };
}

export function applyBuildState(build){
    if(
        !build ||
        typeof build !== "object" ||
        build.version !== BUILD_STATE_VERSION
    ){
        return getCurrentBuildState();
    }

    const normalizeInteger = (value, min, max, fallback) => {
        const number = Number(value);

        if(!Number.isInteger(number)){
            return fallback;
        }

        return Math.min(max, Math.max(min, number));
    };

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

    titlePokemonTitle.textContent = currentPokemon.id;
    enemyName.textContent = enemyPokemon.id;
    showSelectPokemonImage();
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
renderSavedBuilds();
