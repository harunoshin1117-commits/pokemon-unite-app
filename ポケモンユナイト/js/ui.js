import {
    showSkillResult
} from "./resultRenderer.js";

export function updatePlayerUI(context){
    const {
        level,
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
    } = context;

  // リセット
  const moveOptions = [
    skillFirstOne,
    skillSecondOne,
    skillThirdOne,
    skillFirstTwo,
    skillSecondTwo,
    skillThirdTwo,
    uniteMove
  ];

  moveOptions.forEach(option => {
    option.textContent = "";
    option.value = "";
    option.hidden = true;
  });

  function setMoveOption(option, moveName){
    option.textContent = moveName;
    option.value = moveName;
    option.hidden = false;
  }

  function keepSelectedMoveOption(resultElement, selectedMove){
    if(!selectedMove){
      return;
    }

    const options = Array.from(resultElement.options);
    const selectedOption = options.find(
      option => option.value === selectedMove.name
    );

    if(selectedOption){
      return;
    }

    const hiddenOption = options.find(
      option => option.value === "" && option.hidden
    );

    if(hiddenOption){
      setMoveOption(hiddenOption, selectedMove.name);
    }
  }
  damageTaken.textContent = "";
  remainingHp.textContent = "";
  damageTakenPlus.textContent = "";
  remainingHpPlus.textContent = "";
  uniteTaken.textContent = "";
  remainingHpUnite.textContent = "";
  


Object.entries(currentPokemon.skill).forEach(([skillLevel,skills]) => {
    const skillLv = Number(skillLevel);
    
    if(level >= skillLv){
        
        if(skillLv ===1 || skillLv ===3 ){
           setMoveOption(skillFirstOne, skills[0].name);
           setMoveOption(skillFirstTwo, skills[1].name);
        }
          if(skills[0].replace){

            setMoveOption(skillSecondOne, skills[0].name);
            setMoveOption(skillSecondTwo, skills[1].name);
        }

        // 技2派生
        if(skills[0].replaceSecond){

            setMoveOption(skillThirdOne, skills[0].name);
            setMoveOption(skillThirdTwo, skills[1].name);
        }
           
       
        if( skillLv ==9){
            setMoveOption(uniteMove, skills[0].name);

        }
       
    }
})
 if(level >= 11){
            skillSecondOne.textContent += "+";
            skillSecondTwo.textContent += "+";
        }
        if(level >= 13){
            skillThirdOne.textContent +=  "+";
            skillThirdTwo.textContent += "+";
        }


  

  keepSelectedMoveOption(skillFirstResult, selectedSkillOne);
  keepSelectedMoveOption(skillSecondResult, selectedSkillTwo);
  keepSelectedMoveOption(skillThirdResult, selectedSkillThird);

  function upChangelevelDamage(selectedMove,resultElement){
    
    if(selectedMove){

        showSkillResult(
            resultElement,
            selectedMove.name,
            selectedMove,
            level,
            currentPokemon.color
            
        )
    }
  }

   upChangelevelDamage(
    selectedSkillOne,
    skillFirstResult

   );
   upChangelevelDamage(
    selectedSkillTwo,
    skillSecondResult
   )
   upChangelevelDamage(
    selectedSkillThird,
    skillThirdResult
   )
    


updateDamageByHitCount();

  
    

  
}

export function updateEnemyUI(context){
    const {
        enemyLevel,
        enemyPokemon,
        statusName,
        enemyStatsText
    } = context;

  enemyStatsText.innerHTML = "";
  const enemyPokemonStats = enemyPokemon.stats[enemyLevel];
    Object.entries(enemyPokemonStats).forEach(([key,value]) => {
        const p = document.createElement("p");

        p.textContent = `${statusName[key]}: ${value}`;

        enemyStatsText.appendChild(p);
    })
}
