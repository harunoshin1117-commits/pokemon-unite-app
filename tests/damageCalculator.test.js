import assert from "node:assert/strict";
import { test } from "node:test";

import { calculateNormalAttackDamage } from "../js/damageCalculator.js";

function calculateGreninjaNormalAttack({
    attack = 100,
    criticalEnabled = true,
    criticalPattern = null,
    random = Math.random
} = {}){
    return calculateNormalAttackDamage({
        level: 10,
        pokemonId: "Greninja",
        hitCount: 3,
        status: {
            attack,
            spAttack: 0,
            criticalRate: 20
        },
        criticalEnabled,
        criticalPattern,
        random
    });
}

test("固定した急所パターンを維持する", () => {
    const result = calculateGreninjaNormalAttack({
        criticalPattern: [true, false, true],
        random: () => {
            throw new Error("固定中は乱数を使用しない");
        }
    });

    assert.deepEqual(
        result.hitDamages.map(hitData => hitData.critical),
        [true, false, true]
    );
    assert.equal(result.criticalCount, 2);
});

test("攻撃力を変更しても急所位置を維持しダメージだけ更新する", () => {
    const criticalPattern = [false, true, false];
    const before = calculateGreninjaNormalAttack({
        attack: 100,
        criticalPattern
    });
    const after = calculateGreninjaNormalAttack({
        attack: 200,
        criticalPattern
    });

    assert.deepEqual(
        after.hitDamages.map(hitData => hitData.critical),
        before.hitDamages.map(hitData => hitData.critical)
    );
    assert.notEqual(after.totalDamage, before.totalDamage);
});

test("固定パターンがない場合は渡された乱数を使用する", () => {
    const randomValues = [0.1, 0.9, 0.1];
    let randomCallCount = 0;
    const result = calculateGreninjaNormalAttack({
        random: () => randomValues[randomCallCount++]
    });

    assert.equal(randomCallCount, 3);
    assert.deepEqual(
        result.hitDamages.map(hitData => hitData.critical),
        [true, false, true]
    );
});

test("急所OFFでは固定パターンを適用しない", () => {
    const result = calculateGreninjaNormalAttack({
        criticalEnabled: false,
        criticalPattern: [true, true, true],
        random: () => {
            throw new Error("急所OFFでは乱数を使用しない");
        }
    });

    assert.equal(result.criticalCount, 0);
    assert.deepEqual(
        result.hitDamages.map(hitData => hitData.critical),
        [false, false, false]
    );
});

test("通常攻撃の急所回数と各ヒット情報が一致する", () => {
    const result = calculateGreninjaNormalAttack({
        criticalPattern: [true, false, true]
    });
    const criticalCount = result.hitDamages.filter(
        hitData => hitData.critical
    ).length;

    assert.equal(result.criticalCount, criticalCount);
    assert.equal(result.hitDamages.length, 3);
});
