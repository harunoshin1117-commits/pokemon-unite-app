export const BUILD_STATE_VERSION = 2;
export const NORMAL_ATTACK_CALCULATION_VERSION = 1;

function isObject(value){
    return (
        value !== null &&
        typeof value === "object" &&
        !Array.isArray(value)
    );
}

function isNullableString(value){
    return value === null || typeof value === "string";
}

export function cloneNormalAttackData(normalAttackData){
    if(!normalAttackData){
        return null;
    }

    return {
        totalDamage: normalAttackData.totalDamage,
        criticalCount: normalAttackData.criticalCount,
        hitDamages: normalAttackData.hitDamages.map(hitData => ({
            damage: hitData.damage,
            critical: hitData.critical,
            boosted: hitData.boosted,
            ...(typeof hitData.defenseReference === "string"
                ? { defenseReference: hitData.defenseReference }
                : {})
        }))
    };
}

export function normalizeInteger(value, min, max, fallback){
    const number = Number(value);

    if(!Number.isInteger(number)){
        return fallback;
    }

    return Math.min(max, Math.max(min, number));
}

export function getValidNormalAttackData(
    normalAttackData,
    expectedHitCount,
    criticalEnabled
){
    if(
        !isObject(normalAttackData) ||
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
            isObject(hitData) &&
            Number.isInteger(hitData.damage) &&
            hitData.damage >= 0 &&
            typeof hitData.critical === "boolean" &&
            typeof hitData.boosted === "boolean" &&
            (
                hitData.defenseReference === undefined ||
                hitData.defenseReference === "defense" ||
                hitData.defenseReference === "spDefense"
            )
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

export function isValidBuildState(buildState){
    if(
        !isObject(buildState) ||
        buildState.version !== BUILD_STATE_VERSION ||
        !isObject(buildState.attacker) ||
        !isObject(buildState.hitCounts) ||
        !isObject(buildState.calculationState)
    ){
        return false;
    }

    const attacker = buildState.attacker;
    const calculationState = buildState.calculationState;

    return (
        typeof attacker.pokemonId === "string" &&
        isNullableString(attacker.skillOneName) &&
        isNullableString(attacker.skillTwoName) &&
        isNullableString(attacker.uniteMoveName) &&
        Array.isArray(attacker.heldItemSlots) &&
        attacker.heldItemSlots.every(isNullableString) &&
        typeof buildState.criticalEnabled === "boolean" &&
        (
            calculationState.normalAttackData === null ||
            isObject(calculationState.normalAttackData)
        ) &&
        typeof calculationState.normalAttackCriticalLocked ===
            "boolean" &&
        typeof calculationState.hasAttacked === "boolean"
    );
}

export function createBuildState({
    attacker,
    hitCounts,
    criticalEnabled,
    calculationState
}){
    return {
        version: BUILD_STATE_VERSION,
        attacker: {
            pokemonId: attacker.pokemonId,
            level: attacker.level,
            skillOneName: attacker.skillOneName,
            skillTwoName: attacker.skillTwoName,
            uniteMoveName: attacker.uniteMoveName,
            heldItemSlots: [...attacker.heldItemSlots]
        },
        hitCounts: {
            normalAttack: hitCounts.normalAttack,
            skillOne: hitCounts.skillOne,
            skillTwo: hitCounts.skillTwo,
            unite: hitCounts.unite
        },
        criticalEnabled,
        calculationState: {
            normalAttackData: calculationState.normalAttackData
                ? {
                    calculationVersion:
                        NORMAL_ATTACK_CALCULATION_VERSION,
                    ...cloneNormalAttackData(
                        calculationState.normalAttackData
                    )
                }
                : null,
            normalAttackCriticalLocked:
                calculationState.normalAttackCriticalLocked,
            hasAttacked: calculationState.hasAttacked
        }
    };
}
