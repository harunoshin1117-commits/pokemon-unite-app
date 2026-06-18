import assert from "node:assert/strict";
import { test } from "node:test";

import {
    calculateNormalAttackDamage,
    computeFinalDamage,
    getRawDamage,
    isPlusMove
} from "../js/damageCalculator.js";
import { pokemonsList } from "../js/pokemonData.js";

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

test("ピカチュウのdamageComponents技が実測値と一致する", () => {
    const pikachu = pokemonsList.find(pokemon => pokemon.id === "Pikachu");
    const findMove = moveName =>
        Object.values(pikachu.skill)
            .flat()
            .find(move => move.name === moveName);
    const testCases = [
        {
            moveName: "エレキネット",
            level: 1,
            expectedRawDamage: 368,
            expectedFinalDamage: 352
        },
        {
            moveName: "エレキネット",
            level: 5,
            expectedRawDamage: 465,
            expectedFinalDamage: 425
        },
        {
            moveName: "かみなり",
            level: 4,
            expectedRawDamage: 1325,
            expectedFinalDamage: 1225
        },
        {
            moveName: "かみなり",
            level: 11,
            expectedRawDamage: 2695,
            expectedFinalDamage: 2226
        },
        {
            moveName: "ボルトテッカー",
            level: 6,
            expectedRawDamage: 1080,
            expectedFinalDamage: 975
        },
        {
            moveName: "ボルトテッカー",
            level: 15,
            expectedRawDamage: 1780,
            expectedFinalDamage: 1335
        },
        {
            moveName: "10万ボルト",
            level: 6,
            expectedRawDamage: 750,
            expectedFinalDamage: 677
        },
        {
            moveName: "10万ボルト",
            level: 13,
            expectedRawDamage: 1321,
            expectedFinalDamage: 1044
        }
    ];

    testCases.forEach(testCase => {
        const move = findMove(testCase.moveName);
        const attackerStats = pikachu.stats[testCase.level];
        const enemyStats = pikachu.stats[testCase.level];

        assert.equal(
            getRawDamage(move, testCase.level, attackerStats),
            testCase.expectedRawDamage,
            `${testCase.moveName} Lv${testCase.level} raw damage`
        );
        assert.equal(
            computeFinalDamage(
                move,
                1,
                testCase.level,
                attackerStats,
                enemyStats
            ),
            testCase.expectedFinalDamage,
            `${testCase.moveName} Lv${testCase.level} final damage`
        );
    });
});

test("isPlusMoveは旧formulaPlusなしでもアップグレードレベルで判定する", () => {
    const move = {
        upgradeLevel: 11,
        damageComponents: [{
            id: "main",
            type: "standard",
            referenceStat: "spAttack",
            ratio: 1,
            levelScaling: 0,
            fixedValue: 0,
            defenseReference: "spDefense",
            hitCount: 1
        }],
        plusDamageComponents: [{
            id: "main",
            type: "standard",
            referenceStat: "spAttack",
            ratio: 2,
            levelScaling: 0,
            fixedValue: 0,
            defenseReference: "spDefense",
            hitCount: 1
        }]
    };

    assert.equal(isPlusMove(move, 10), false);
    assert.equal(isPlusMove(move, 11), true);
});

test("damageComponentsの未対応防御参照はエラーにする", () => {
    const move = {
        damageComponents: [{
            id: "main",
            type: "standard",
            referenceStat: "spAttack",
            ratio: 1,
            levelScaling: 0,
            fixedValue: 0,
            defenseReference: "unknownDefense",
            hitCount: 1
        }]
    };

    assert.throws(
        () => computeFinalDamage(
            move,
            1,
            1,
            { spAttack: 100 },
            { defense: 50, spDefense: 50 }
        ),
        /未対応の防御参照です: unknownDefense/
    );
});

test("旧形式でformulaPlusがないプラス技は通常式で計算する", () => {
    const move = {
        upgradeLevel: 11,
        formula: {
            scaling: "spAttack",
            ratio: 1,
            levelScaling: 0,
            baseDamage: 100
        },
        formulaPlus: null
    };

    assert.equal(
        isPlusMove(move, 11),
        true
    );
    assert.equal(
        getRawDamage(
            move,
            11,
            { spAttack: 200 }
        ),
        300
    );
});
