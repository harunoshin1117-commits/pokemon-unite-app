import {
    showSelectPokemonImage,
    showSkillResult
} from "./resultRenderer.js";

export function updatePlayerUI(context){
    const {
        level,
        currentPokemon,
        currentPokemonStats,
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
    } = context;

  // リセット
  skillFirstOne.textContent = "";
  skillSecondOne.textContent = "";
  skillThirdOne.textContent = "";
  skillFirstTwo.textContent = "";
  skillSecondTwo.textContent = "";
  skillThirdTwo.textContent = "";
  uniteMove.textContent = "";
  skillFirstOne.style.opacity = 1;
  skillFirstTwo.style.opacity = 1;
  statsText.innerHTML = "";
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
           skillFirstOne.textContent = skills[0].name;
           skillFirstTwo.textContent = skills[1].name;
        }
          if(skills[0].replace){

            skillSecondOne.textContent = skills[0].name;
            skillSecondTwo.textContent = skills[1].name;

            skillFirstOne.style.opacity = 0.3;
        }

        // 技2派生
        if(skills[0].replaceSecond){

            skillThirdOne.textContent = skills[0].name;
            skillThirdTwo.textContent = skills[1].name;

            skillFirstTwo.style.opacity = 0.3;
        }
           
       
        if( skillLv ==9){
            uniteMove.textContent = skills[0].name;

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


  


    Object.entries(currentPokemonStats).forEach(([key,value]) =>{
          const p = document.createElement("p");
                
            p.textContent = `${statusName[key]}: ${Math.floor(value)}`;

             statsText.appendChild(p);
        
    })

showSelectPokemonImage(currentPokemon, selectPokemonImage);
    

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
