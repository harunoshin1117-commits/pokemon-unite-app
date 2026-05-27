// =========================
// element
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
const itemModal = document.querySelector("item-modal");
const heldItems = document.querySelectorAll(".held-item");
const closeModal = document.getElementById("close-modal");

const damageTaken = document.getElementById("damage-taken");
const remainingHp = document.getElementById("remaining-hp");
const damageTakenPuls = document.getElementById("damage-taken-puls");
const remainingHpPuls = document.getElementById("remaining-hp-puls");
const uniteTaken = document.getElementById("unite-taken");
const remainingHpUnite = document.getElementById("remaining-hp-unite");
const damageTakenNormalAttack = document.getElementById("damage-taken-normalAttack");
const remainingHpNormalAttack = document.getElementById("remaining-hp-normalAttack");


const allResetBottun = document.getElementById("all-reset-bottun");
const takenAll = document.getElementById("taken-all");
const remainingHpAll = document.getElementById("remaining-hp-all");

const hpBer = document.getElementById("hp-ber");
const hpFillOne = document.getElementById("hp-fill-one");
const hpFillTwo = document.getElementById("hp-fill-two");
const hpFillUnite = document.getElementById("hp-fill-unite");
const hpFillAll = document.getElementById("hp-fill-all");
const hpFillNormalAttack = document.getElementById("hp-fill-normalAttack");

const normalAttackDamage = document.getElementById("normalAttack-damage");
const criticalCheck = document.getElementById("critical-check");

const selectItems = document.querySelectorAll(".select-items");

const selectPokemonImage = document.getElementById("pokemon-img");
// =========================
// data
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
let currentSelectedMove = null;
let currentNormalAttackData = null;
let currentHeldItems = [];
let currentSelectedSlot = null;
// =========================
// init function
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
Object.values(hitCountSelects).forEach(select => {

    for(let i = 1; i <= 10; i++){

        const option = document.createElement("option");

        option.value = i;
        option.textContent = i + "Hits";

        select.appendChild(option);
    }

    select.addEventListener("change", () => {
        updateNormalAttack();
         updateDamageByHitCount();
        
    })
})

 

// =========================
// init
// =========================

createLevelOptions(levelSelect);
createLevelOptions(enemyLevelSelect);

createPokemonOptions(pokemonSelect);
createPokemonOptions(pokemonSelectTwo);

updateNormalAttack();


// =========================
// player event
// =========================

levelSelect.addEventListener("change", () => {

    updatePlayerUI();
    console.log(levelSelect.value);
     updateNormalAttack();
   updateDamageByHitCount();
   
  


});


pokemonSelect.addEventListener("change", () => {

   
    selectedSkillOne = null;
    selectedSkillTwo = null;
    selectedSkillThird = null;

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
        damageTakenPuls,
        remainingHpPuls,
        hpFillTwo
    );

    resetDamageDisplay(
        skillThirdResult,
        skillThirdDamage,
        uniteTaken,
        remainingHpUnite,
        hpFillUnite
    );

    takenAll.textContent = "合計ダメージ: 0";
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
   computeFinalDamageAll();

});


// =========================
// skill click event
// =========================

skillsFirst.forEach(skill => {

        skill.addEventListener("click", () => {
        
            if(skillFirstResult.textContent ==="" || skillFirstResult.textContent !== skill.textContent ){

            const skillName =skill.textContent.replace("+","");
           

            const selectedMove = findMoveByName(skillName);
            selectedSkillOne = selectedMove;
            console.log(selectedMove);
        
        
            showDamage(selectedMove,skillFirstDamage,Number(hitCountSelects.one.value));
        
            showSkillResult(skillFirstResult,
                            selectedMove.name,
                            selectedMove
                        );
        
            currentSelectedMove = selectedMove;
            showFinalDamage(currentSelectedMove,damageTaken,remainingHp,hpFillOne,Number(hitCountSelects.one.value));
            
            computeFinalDamageAll();   
           
                    
                    }else{
                        skillFirstResult.textContent = "";
                        skillFirstDamage.textContent = "威力:";
                        damageTaken.textContent = "";
                        remainingHp.textContent = "";
                        hpFillOne.style.width = "100%";
                        hpFillOne.style.backgroundColor = "green";
                        selectedSkillOne = null;
                        computeFinalDamageAll();
                    }

     });
   

});


skillsSecond.forEach(skill => {

    skill.addEventListener("click", () => {

      

        if(skillSecondResult.textContent ==="" || skillSecondResult.textContent !== skill.textContent){

        const skillName =skill.textContent.replace("+","");
       
       
        const selectedMove = findMoveByName(skillName);
        selectedSkillTwo = selectedMove;
        console.log(selectedMove);


        showDamage(selectedMove,skillSecondDamage,Number(hitCountSelects.two.value));

        showSkillResult(skillSecondResult,
                        selectedMove.name,
                        selectedMove
                    );

        currentSelectedMove = selectedMove;
        showFinalDamage(currentSelectedMove,damageTakenPuls,remainingHpPuls,hpFillTwo,Number(hitCountSelects.two.value));
       
          computeFinalDamageAll(); 
                }else{
                    skillSecondResult.textContent = "";
                    skillSecondDamage.textContent = "威力:";
                    damageTakenPuls.textContent = "";
                    remainingHpPuls.textContent = "";
                    hpFillTwo.style.width = "100%";
                    hpFillTwo.style.backgroundColor = "green";
                    selectedSkillTwo = null;
                    computeFinalDamageAll();
                }
    });

});


unitesMove.addEventListener("click", () => {

    if(skillThirdResult.textContent === ""){

        skillThirdResult.textContent = unitesMove.textContent;
        skillThirdResult.style.backgroundColor = currentPokemon.color;

        const move = currentPokemon.skill[9][0];
        console.log(move);
        calculateDamage(move,Number(levelSelect.value),currentPokemon.stats[Number(levelSelect.value)]);
         showDamage(move,skillThirdDamage,Number(hitCountSelects.unite.value))
         selectedSkillThird = move;
         showFinalDamage(move,uniteTaken,remainingHpUnite,hpFillUnite,Number(hitCountSelects.unite.value));
       
        computeFinalDamageAll(); 
         
    }else{
        
        skillThirdResult.textContent = "";
        skillThirdDamage.textContent = "威力:";
        uniteTaken.textContent = "";
        remainingHpUnite.textContent = "";
        console.log("ユナイト技選択なし");
        hpFillUnite.style.width = "100%"
        hpFillUnite.style.backgroundColor = "green";
        selectedSkillThird = null;
        computeFinalDamageAll();
        
    }

});

allResetBottun.addEventListener("click",() => {
     location.reload();
})

heldItems.forEach(item => {

    item.addEventListener("click", () => {

        currentSelectedSlot = item;
        console.log("枠作成");
    })
})
selectItems.forEach(item => {

    item.addEventListener("click", () => {
       
           console.log(
                item.dataset.id
           );
           const selectedItem = 
                heldItemsList.find(
                    heldItem => {

                        return heldItem.id === item.dataset.id;
                    }                        
           )
           console.log(selectedItem);
           toggleHeldItem(item.dataset.id);
           showHeldItem(item.dataset.id,selectedItem);
           overlay.style.display = "none";
    })
})

criticalCheck.addEventListener("click",() => {

    updateNormalAttack();
})
// =====================
// 持ち物選択スペース作成
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
// hover color
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
// enemy event
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

    console.log(enemyPokemon + "相手のポケモン選択");

    enemyName.textContent = selectedId;

    updateEnemyUI();
     updateNormalAttack();
   updateDamageByHitCount();

   
});


//==========================
// function(便利な機能)
//==========================

function calculateDamage(selectedMove,attackerLevel,attackerStats){
    
    
    const formula = selectedMove.formula;
    
    const scalingStat = attackerStats[formula.scaling];

    const damage =scalingStat * formula.ratio + formula.levelScaling * (attackerLevel-1) + formula.bassDamage;
      
    
    const result =  Math.floor(damage);
    console.log(result);
    return Math.floor(damage);
}

function calculateDamagePuls(selectedMove,attackerLevel,attackerStats){
    
    const formula = selectedMove.formulaPlus;
    console.log(formula);
    const scalingStat = attackerStats[formula.scaling];

    const damage = scalingStat * formula.ratio + formula.levelScaling * (attackerLevel-1) + formula.bassDamage;
    
    const result =  Math.floor(damage);
    console.log(result);
    return Math.floor(damage);
}

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
function isPlusMove(move){

    const level = Number(levelSelect.value);

    if(move.upgradeLevel &&
         move.formulaPlus &&
          level >= move.upgradeLevel

    ){
        return true;
    }
    return false;
}

function getRawDamage(selectedMove){

    if(
        !selectedMove ||
        !selectedMove.formula
    ){
        return null;
    }

    if(isPlusMove(selectedMove)){
        return calculateDamagePuls(
            selectedMove,
            Number(levelSelect.value),
            currentPokemon.stats[
                Number(levelSelect.value)
            ]
        );
    }

    return calculateDamage(
        selectedMove,
        Number(levelSelect.value),
        currentPokemon.stats[
            Number(levelSelect.value)
        ]
    );
}
function showDamage(
    selectedMove,
    targetElement,
    hitCount = 1
){
    
    const totalDamage = getTotalDamage(selectedMove,hitCount)

    if(totalDamage === null){

        targetElement.textContent =
            "威力なし";

        return;
    }

   
    targetElement.textContent =
        `威力: ${totalDamage}`;
}

function showFinalDamage(
            selectedMove,
            damageElement,
            hpElement,
            hpBarElement,
            hitCount = 1
                        
){

       const finalDamage = computeFinalDamage(selectedMove,hitCount);

        if(finalDamage === null){

            damageElement.textContent = "ダメージ: 計算不可";

            hpElement.textContent = "残りHP: -";
            hpBarElement.style.width = "100%";
            hpBarElement.style.backgroundColor = "green";
            return;
        }


        const enemyLevel = Number(enemyLevelSelect.value);
        const enemyHp = enemyPokemon.stats[enemyLevel].hp;

        const hpAfter = Math.max(0,enemyHp - finalDamage);

        damageElement.textContent = `ダメージ: ${finalDamage}`;

        hpElement.textContent = `残りHP: ${hpAfter}`;

       updateHpBar(hpAfter,enemyHp,hpBarElement);

    }

    
function computeFinalDamage(selectedMove,hitCount = 1){

        const rawDamage = getTotalDamage(selectedMove,hitCount)   
    
        if(rawDamage === null){
            return null;
        }

        const enemyLevel = Number(enemyLevelSelect.value);
        const enemyPokemonStats = enemyPokemon.stats[enemyLevel];
        console.log(enemyPokemonStats + "相手のポケモンステータス");

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



function showSkillResult(
    resultElement,
    skillText,
    selectedMove
){

    resultElement.textContent = skillText;

    if(isPlusMove(selectedMove)){
        resultElement.textContent += "+";
    }

    resultElement.style.backgroundColor =
        currentPokemon.color;
}

function isCategory(selectedMove){

    if(
        selectedMove.category === "physical"
    ){
        return true;
    }

    return false;
}


function computeFinalDamageAll(){

   
    const normalAttackDamage = computeNormalAttackFinalDamage(currentNormalAttackData) || 0;

    const damage1 =
        computeFinalDamage(selectedSkillOne,
            Number(hitCountSelects.one.value)
        ) || 0;

    const damage2 =
        computeFinalDamage(selectedSkillTwo,
            Number(hitCountSelects.two.value)
        ) || 0;

    const damage3 =
        computeFinalDamage(selectedSkillThird,
            Number(hitCountSelects.unite.value)
        ) || 0;

    const allDamage =
        damage1 + damage2 + damage3 + normalAttackDamage;

    takenAll.textContent =
        `合計ダメージ: ${allDamage}`;

    const enemyLevel =
        Number(enemyLevelSelect.value);

    const enemyHp =
        enemyPokemon.stats[enemyLevel].hp;

    const hpAfter =
        Math.max(0, enemyHp - allDamage);

    remainingHpAll.textContent =
        `残りHP: ${hpAfter}`;

   updateHpBar(hpAfter,enemyHp,hpFillAll);
}

function updateHpBar(currentHp,maxHp,hpBarElement){

    const percentage = currentHp / maxHp*100;
    console.log("hpバーの割合" + percentage);
   hpBarElement.style.width = `${percentage}%`;

    if(percentage > 50){
       hpBarElement.style.backgroundColor = "green";
    }else if(percentage > 20 ){
       hpBarElement.style.backgroundColor = "orange";
    }else{
       hpBarElement.style.backgroundColor = "red";
    }
}
function updateDamageByHitCount(){

    if(selectedSkillOne){

        showDamage(selectedSkillOne,
            skillFirstDamage,
            Number(hitCountSelects.one.value));
        
        showFinalDamage(selectedSkillOne,
            damageTaken,
            remainingHp,
            hpFillOne,
            Number(hitCountSelects.one.value)
        );
        }
    if(selectedSkillTwo){

        showDamage(selectedSkillTwo,
            skillSecondDamage,
            Number(hitCountSelects.two.value));

        showFinalDamage(selectedSkillTwo,
            damageTakenPuls,
            remainingHpPuls,
            hpFillTwo,
            Number(hitCountSelects.two.value)
        );
        }
    if(selectedSkillThird){

        showDamage(selectedSkillThird,
            skillThirdDamage,
            Number(hitCountSelects.unite.value));

        showFinalDamage(selectedSkillThird,
            uniteTaken,
            remainingHpUnite,
            hpFillUnite,
            Number(hitCountSelects.unite.value)
        );
    }
    computeFinalDamageAll();
    }
function getTotalDamage(selectedMove,hitCount){

    const rawDamage = getRawDamage(selectedMove);

    if(rawDamage === null){
        return null;
    }

    return rawDamage*hitCount;
}

function resetDamageDisplay(
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

function calculateNormalAttackDamage(){
    
    const level =Number(levelSelect.value);
    const selectPokemon = currentPokemon.id;
    
    const hitCount = Number(hitCountSelects.normalAttack.value);
    const atk = currentPokemon.stats[level].attack;
    const spAtk = currentPokemon.stats[level].spAttack;
    const critical = currentPokemon.stats[level]. criticalRate;
    if(selectPokemon === "Pikachu" ){

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
       if(criticalCheck.checked){
        console.log("急所判定実行");
        //急所判定
       isCritical = Math.random() <critical/100;
        //急所なら二倍（今回だけ）
        if(isCritical){
            criticalCount++;
            damage *= 2
            console.log(damage);
        }
       }
        hitDamages.push({
            damage:Math.floor(damage),
            critical: isCritical,
            boosted:i%3 === 0
        });
        totalDamage += damage;
    }
        
        console.log(boostedDamage + "強化通常");

       
      
        const totalNormalAttackDamage = Math.floor(totalDamage);


        return {
            totalDamage: totalNormalAttackDamage,
            criticalCount: criticalCount,
            hitDamages};

    }if(selectPokemon === "Greninja"){
         
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

            if(criticalCheck.checked){
                
                 isCritical = Math.random() < critical/100;
                
                if(isCritical){
                    criticalCount++;
                    damage *= 2;
                    console.log(damage);
                }
            }
            hitDamages.push({
                damage:Math.floor(damage),
                critical:isCritical,
                boosted:i%3 === 0
            });
            totalDamage += damage;
            console.log(totalDamage + "急所判定実行結果");
        }
      
        
        const totalNormalAttackDamage = Math.floor(totalDamage);

        //normalAttackDamage.textContent = "威力:" + Math.floor(allNormalDamageG);

        return {
            totalDamage: totalNormalAttackDamage,
            criticalCount: criticalCount,
            hitDamages};

    }if(selectPokemon === "Cinderace"){

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

            if(criticalCheck.checked){

                 isCritical = Math.random() < critical/100;

                if(isCritical){
                    criticalCount++;
                    console.log("急所に当たりました");
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
            hitDamages};
    
    

}}   
function showNormalAttackDamage(normalAttackData){
   
    if(normalAttackData == null){
        normalAttackDamage.textContent = "威力なし";
        return;
    }
    normalAttackDamage.textContent = "威力:" + normalAttackData.totalDamage;
}

function computeNormalAttackFinalDamage(normalAttackData){



    
    
        if(normalAttackData == null){
            return null;
        }
        const selectPokemon = currentPokemon.id;
        const enemyLevel = Number(enemyLevelSelect.value);
        const enemyPokemonStats = enemyPokemon.stats[enemyLevel];
        

        
        let totalFinalDamage = 0;
        const defense = enemyPokemonStats.defense;
        const spDefense = enemyPokemonStats.spDefense;
       
        
          if(selectPokemon === "Pikachu"){
            
            for(const hitData of normalAttackData.hitDamages){

                const finalDamage = hitData.damage * 
            
                                            (
                                                1 -
                                                (
                                                    spDefense /
                                                    (spDefense + 600)
                                                )
                                            );
           
            totalFinalDamage += Math.floor(finalDamage);}

    }else{

        for(const hitData of normalAttackData.hitDamages){

            const finalDamage = hitData.damage * 
                                            (
                                                1 -
                                                (
                                                    defense /
                                                    (defense + 600)
                                                )
                                            );
            totalFinalDamage += Math.floor(finalDamage);
        }
       
           
    }




      return totalFinalDamage;
    
}

function showNormalAttackFinalDamage(normalAttackData){

    const finalDamage = computeNormalAttackFinalDamage(normalAttackData);
    if(finalDamage == null){
         
        damageTakenNormalAttack.textContent = "ダメージ: 計算不可";

        remainingHpNormalAttack.textContent = "残りHP: -";
       // hpFillNormalAttack.style.width = "100%";
      //  hpFillNormalAttack.style.backgroundColor = "green";
        return null;
    }

    const enemyLevel = Number(enemyLevelSelect.value);
    const enemyHp = enemyPokemon.stats[enemyLevel].hp;

    const hpAfter = Math.max(0,enemyHp - finalDamage);
    damageTakenNormalAttack.textContent = "ダメージ:" + finalDamage;
    remainingHpNormalAttack.textContent = "残りHP:" + hpAfter;

     updateHpBar(hpAfter,enemyHp,hpFillNormalAttack);
    
}
function updateNormalAttack(){
    currentNormalAttackData = calculateNormalAttackDamage();
    showNormalAttackDamage(currentNormalAttackData);
   
    showNormalAttackFinalDamage(currentNormalAttackData);

     if(
        currentNormalAttackData &&
        currentNormalAttackData.criticalCount > 0
    ){
        showCriticalPopup(
            currentNormalAttackData.criticalCount
        );
       
    }
     showHitDamagesPopup(currentNormalAttackData.hitDamages);
}

function showCriticalPopup(
    criticalCount
){

    const popup =
        document.getElementById(
            "critical-popup"
        );

    popup.textContent =
        `急所 ${criticalCount}回!`;
    
    

    popup.style.animation =
        "none";

    popup.offsetHeight;

    popup.style.animation =
        "criticalPopup 3s ease";
}
function showHitDamagesPopup(
    hitDamages
){
    const popup = 
            document.getElementById("hitDamage-result");
    
          
    hitDamages.forEach(hitDamage => {

        showSingleHitDamagesPopup(hitDamage)
            
        })
    
}
function showSingleHitDamagesPopup(hitDamage){

     const popup = 
            document.getElementById("hitDamage-result");
    const p = document.createElement("p");

            p.classList.add("hit-damage");
            
            let text = hitDamage.damage;
            if(hitDamage.boosted){
                text += "強化通常";
                p.classList.add("boosted-color");
                
            }if(hitDamage.critical){
                text += "急所命中 ";
                p.classList.add("critical-color");
            }
            
            
            p.textContent =text;
            popup.appendChild(p);
             setTimeout(() => {

        p.remove();

    },5000);
}

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
    console.log(currentHeldItems);
}
function showHeldItem(itemId,
    selectedItem
){
    if(currentSelectedSlot.dataset.id === itemId ){

       currentSelectedSlot.innerHTML = "✚";
       currentSelectedSlot.dataset.id = "";
       currentSelectedSlot.style.padding = "20px";
       console.log("削除");
    }else{

        currentSelectedSlot.innerHTML = `${selectedItem.name} <img src= "${selectedItem.image}" class="slot-image">  `;
       
        currentSelectedSlot.dataset.id = itemId;
        currentSelectedSlot.style.padding = "0px";

        
    }
    console.log("追加");
}

function showSelectPokemonImage(){

   
    const image = currentPokemon.Image;
    console.log("img取得");
    selectPokemonImage.innerHTML = `<img src = "${image}" class="image-pokemon">`
    

}
// =========================
// first render
// =========================

updatePlayerUI();
updateEnemyUI();