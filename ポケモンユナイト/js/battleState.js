const battleState = {
    lastCalculation: null,
    attacker: {
        currentHp: null
    },
    defender: {
        currentHp: null
    }
};

function normalizeCurrentHp(currentHp){
    return Number.isFinite(currentHp)
        ? currentHp
        : null;
}

export function normalizeCurrentHpForMax(currentHp, maxHp){
    const safeMaxHp = Number.isFinite(maxHp) && maxHp > 0
        ? Math.floor(maxHp)
        : 0;

    if(currentHp === null){
        return safeMaxHp;
    }

    const number = Number(currentHp);

    if(!Number.isFinite(number)){
        return safeMaxHp;
    }

    return Math.max(0, Math.min(safeMaxHp, Math.floor(number)));
}

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

export function setAttackerCurrentHp(currentHp){
    battleState.attacker.currentHp = normalizeCurrentHp(currentHp);
}

export function getAttackerCurrentHp(){
    return battleState.attacker.currentHp;
}

export function resetAttackerCurrentHp(){
    battleState.attacker.currentHp = null;
}

export function setDefenderCurrentHp(currentHp){
    battleState.defender.currentHp = normalizeCurrentHp(currentHp);
}

export function getDefenderCurrentHp(){
    return battleState.defender.currentHp;
}

export function resetDefenderCurrentHp(){
    battleState.defender.currentHp = null;
}

export function resetCurrentHpState(){
    resetAttackerCurrentHp();
    resetDefenderCurrentHp();
}
