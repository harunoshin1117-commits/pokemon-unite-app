import assert from "node:assert/strict";
import { test } from "node:test";

import {
    getBattleState,
    getLastCalculation,
    resetLastCalculation,
    setLastCalculation
} from "../js/battleState.js";

test("lastCalculationの初期状態はnull", () => {
    resetLastCalculation();

    assert.equal(getLastCalculation(), null);
    assert.equal(getBattleState().lastCalculation, null);
});

test("lastCalculationを保存して取得できる", () => {
    resetLastCalculation();

    const result = {
        normalAttack: {
            totalFinalDamage: 143
        },
        moveDamageData: {
            skillOne: {
                finalDamage: 600
            }
        },
        enemyHp: 6300
    };

    setLastCalculation(result);

    assert.equal(getLastCalculation(), result);
    assert.equal(getBattleState().lastCalculation, result);

    resetLastCalculation();
});

test("lastCalculationをnullへリセットできる", () => {
    setLastCalculation({
        finalDamage: 100
    });

    resetLastCalculation();

    assert.equal(getLastCalculation(), null);
});
