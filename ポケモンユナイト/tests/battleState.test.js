import assert from "node:assert/strict";
import { test } from "node:test";

import {
    getAttackerCurrentHp,
    getBattleState,
    getDefenderCurrentHp,
    getLastCalculation,
    resetAttackerCurrentHp,
    resetCurrentHpState,
    resetDefenderCurrentHp,
    resetLastCalculation,
    setAttackerCurrentHp,
    setDefenderCurrentHp,
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

test("attacker.currentHpを保存して取得できる", () => {
    resetAttackerCurrentHp();

    setAttackerCurrentHp(1234);

    assert.equal(getAttackerCurrentHp(), 1234);
    assert.equal(getBattleState().attacker.currentHp, 1234);

    resetAttackerCurrentHp();
});

test("defender.currentHpを保存して取得できる", () => {
    resetDefenderCurrentHp();

    setDefenderCurrentHp(5678);

    assert.equal(getDefenderCurrentHp(), 5678);
    assert.equal(getBattleState().defender.currentHp, 5678);

    resetDefenderCurrentHp();
});

test("currentHpは0を有効な値として保存できる", () => {
    resetCurrentHpState();

    setAttackerCurrentHp(0);
    setDefenderCurrentHp(0);

    assert.equal(getAttackerCurrentHp(), 0);
    assert.equal(getDefenderCurrentHp(), 0);

    resetCurrentHpState();
});

test("currentHpは数値以外ならnullとして保存する", () => {
    resetCurrentHpState();

    setAttackerCurrentHp("100");
    setDefenderCurrentHp(Number.NaN);

    assert.equal(getAttackerCurrentHp(), null);
    assert.equal(getDefenderCurrentHp(), null);
});

test("currentHpをまとめてnullへリセットできる", () => {
    setAttackerCurrentHp(111);
    setDefenderCurrentHp(222);

    resetCurrentHpState();

    assert.equal(getAttackerCurrentHp(), null);
    assert.equal(getDefenderCurrentHp(), null);
});
