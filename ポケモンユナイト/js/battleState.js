const battleState = {
    lastCalculation: null
};

export function getBattleState(){
    return battleState;
}

export function setLastCalculation(result){
    battleState.lastCalculation = result;
}

export function getLastCalculation(){
    return battleState.lastCalculation;
}

export function resetLastCalculation(){
    battleState.lastCalculation = null;
}
