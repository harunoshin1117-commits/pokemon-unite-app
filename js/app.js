// =========================
// DOM elements
// =========================

const levelSelect = document.getElementById("level");
const pokemonSelect = document.getElementById("pokemon-select");

const skillFirstResult = document.getElementById("skill-first-result");
const skillSecondResult = document.getElementById("skill-second-result");
const skillThirdResult = document.getElementById("skill-third-result");

const skillsFirst = document.querySelectorAll("#skill-one li");
const skillsSecond = document.querySelectorAll("#skill-two li");
const unitesMove = document.getElementById("unite-move");

const titlePokemonTitle = document.querySelector(".title-pokemon-title");

const enemyLevelSelect = document.getElementById("enemy-level");
const pokemonSelectTwo = document.getElementById("pokemon-select-two");
const enemyName = document.getElementById("enemy-name");

const colorChange = document.querySelectorAll(".color-change");
const skillFirstDamage = document.getElementById("skill-first-damage");
const skillSecondDamage = document.getElementById("skill-second-damage");
const skillThirdDamage = document.getElementById("skill-third-damage");

const overlay =  document.querySelector(".overlay");
const heldItems = document.querySelectorAll(".held-item");
const closeModal = document.getElementById("close-modal");

const damageTaken = document.getElementById("damage-taken");
const remainingHp = document.getElementById("remaining-hp");
const damageTakenPlus = document.getElementById("damage-taken-plus");
const remainingHpPlus = document.getElementById("remaining-hp-plus");
const uniteTaken = document.getElementById("unite-taken");
const remainingHpUnite = document.getElementById("remaining-hp-unite");
const damageTakenNormalAttack = document.getElementById("damage-taken-normalAttack");
const remainingHpNormalAttack = document.getElementById("remaining-hp-normalAttack");

const allResetButton = document.getElementById("all-reset-button");
const takenAll = document.getElementById("taken-all");
const remainingHpAll = document.getElementById("remaining-hp-all");

const hpFillOne = document.getElementById("hp-fill-one");
const hpFillTwo = document.getElementById("hp-fill-two");
const hpFillUnite = document.getElementById("hp-fill-unite");
const hpFillAll = document.getElementById("hp-fill-all");
const hpFillNormalAttack = document.getElementById("hp-fill-normalAttack");

const normalAttackDamage = document.getElementById("normalAttack-damage");
const criticalCheck = document.getElementById("critical-check");

const selectItems = document.querySelectorAll(".select-items");

const selectPokemonImage = document.getElementById("pokemon-img");

const attackAction = document.querySelector(".attack-action");
const resultPopup = document.querySelector(".result-popup");
const damageResult = document.getElementById("damage-result");
const detailDamageResult = document.getElementById("detail-damage-result");
const resultBreakdownToggle = document.getElementById("result-breakdown-toggle");
const detailPopupOverlay = document.getElementById("detail-popup-overlay");
const closeDetailPopup = document.getElementById("close-detail-popup");
const playerStatsToggle = document.getElementById("player-stats-toggle");
const enemyStatsToggle = document.getElementById("enemy-stats-toggle");
const statsText = document.getElementById("stats-text");
const enemyStatsText = document.getElementById("enemy-stats-text");
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

const hitCountSelects= {
    one:document.getElementById("damage-hit-one"),
    two:document.getElementById("damage-hit-two"),
    unite:document.getElementById("damage-hit-unite"),
    normalAttack:document.getElementById("normalAttack-hit")
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
// Option creation functions
// =========================

function createLevelOptions(selectElement){

    for(let i = 1; i <= 15; i++){

        const option = document.createElement("option");

        option.value = i;
        option.textContent = i + ".lv";

        selectElement.appendChild(option);
    }
}

function createPokemonOptions(selectElement){

    pokemonsList.forEach(pokemon => {

        const option = document.createElement("option");

        option.value = pokemon.id;
        option.textContent = pokemon.name;

        selectElement.appendChild(option);
    });
}
//通常攻撃と攻撃のヒットカウント分けたほうがいいかも
Object.values(hitCountSelects).forEach(select => {

    for(let i = 0; i <= 10; i++){

        const option = document.createElement("option");

        option.value = i;
        option.textContent = i + "Hits";

        select.appendChild(option);
    }

    if(select !== hitCountSelects.normalAttack){
        select.value = 1;
    }

    select.addEventListener("change", () => {
        updateNormalAttack();
         updateDamageByHitCount();
        
    })
})

 

// =========================
// Initial setup
// =========================

createLevelOptions(levelSelect);
createLevelOptions(enemyLevelSelect);

createPokemonOptions(pokemonSelect);
createPokemonOptions(pokemonSelectTwo);

updateNormalAttack();

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

    currentPokemon = pokemonsList.find(

        pokemon => pokemon.id === selectedId

    );

  

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
            const selectedMove = findMoveByName(skillName);

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
            const selectedMove = findMoveByName(skillName);

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

        const move = currentPokemon.skill[9][0];
        calculateDamage(move, Number(levelSelect.value), getCurrentStatus());
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
           toggleHeldItem(item.dataset.id);
           
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

    enemyPokemon = pokemonsList.find(

        pokemon => pokemon.id === selectedId

    );

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
    currentNormalAttackData = calculateNormalAttackDamage();
    showNormalAttackDamage(currentNormalAttackData);
    rerenderAfterAttack();
}
function rerenderAfterAttack(){
    if(hasAttacked){
        attackNormalAttack();
    }
}
function attackNormalAttack(){
    const finalDamageData = computeNormalAttackFinalDamage(currentNormalAttackData);

    applyHeldItemEffect(finalDamageData);
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
    computeFinalDamageAll(finalDamageData);

}

function updatePopup(){
    const finalDamageData = computeNormalAttackFinalDamage(currentNormalAttackData);
     applyHeldItemEffect(finalDamageData);
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

//return selectedMove
function findMoveByName(skillName){
    let selectedMove;
      Object.values(currentPokemon.skill).forEach(skills => {
         

            const foundMove = skills.find(move => {

                return move.name === skillName;

            });

            if(foundMove){

                selectedMove = foundMove;
            }

        });
         
        return selectedMove;
        
}
// =========================
// First render
// =========================

updatePlayerUI();
updateEnemyUI();



