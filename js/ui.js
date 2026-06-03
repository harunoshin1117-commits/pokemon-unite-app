function updatePlayerUI(){
         const level = Number(levelSelect.value);

  const skillFirstOne = document.getElementById("skill-first-one");
  const skillSecondOne = document.getElementById("skill-second-one");
  const skillThirdOne = document.getElementById("skill-third-one");
  const skillFirstTwo = document.getElementById("skill-first-two");
  const skillSecondTwo = document.getElementById("skill-second-two");
  const skillThirdTwo = document.getElementById("skill-third-two");
  const uniteMove = document.getElementById("unite-move");
    const statsText = document.getElementById("stats-text");

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
  


let skillUpgradeCount = 0;
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


  


  const currentPokemonStats = getCurrentStatus();

    Object.entries(currentPokemonStats).forEach(([key,value]) =>{
          const p = document.createElement("p");
                
            p.textContent = `${statusName[key]}: ${Math.floor(value)}`;

             statsText.appendChild(p);
        
    })

showSelectPokemonImage();
    

  function upChangelevelDamage(selectedMove,resultElement){
    
    if(selectedMove){

        showSkillResult(
            resultElement,
            selectedMove.name,
            selectedMove
            
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



   







function updateEnemyUI(){
    const enemyLevel = Number(enemyLevelSelect.value);


  const enemyStatsText = document.getElementById("enemy-stats-text");
  enemyStatsText.innerHTML = "";
  const enemyPokemonStats = enemyPokemon.stats[enemyLevel];
    Object.entries(enemyPokemonStats).forEach(([key,value]) => {
        const p = document.createElement("p");

        p.textContent = `${statusName[key]}: ${value}`;

        enemyStatsText.appendChild(p);
    })
}