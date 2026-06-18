import assert from "node:assert/strict";
import { test } from "node:test";

import {
    calculateNormalAttackDamage,
    computeNormalAttackFinalDamage,
    computeFinalDamage,
    getRawDamage,
    isPlusMove
} from "../js/damageCalculator.js";
import { pokemonsList } from "../js/pokemonData.js";

const pikachu = pokemonsList.find(pokemon => pokemon.id === "Pikachu");

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

function calculatePikachuNormalAttack({
    level = 5,
    hitCount = 3,
    criticalEnabled = false,
    criticalPattern = null,
    random = Math.random
} = {}){
    return calculateNormalAttackDamage({
        level,
        pokemonId: pikachu.id,
        hitCount,
        status: pikachu.stats[level],
        normalAttack: pikachu.normalAttack,
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

test("ピカチュウ通常攻撃がレベル5実測値と一致する", () => {
    const singleHitData = calculatePikachuNormalAttack({
        hitCount: 1
    });
    const singleHitFinalDamage = computeNormalAttackFinalDamage(
        singleHitData,
        pikachu.id,
        pikachu.stats[5]
    );
    const threeHitData = calculatePikachuNormalAttack({
        hitCount: 3
    });
    const threeHitFinalDamage = computeNormalAttackFinalDamage(
        threeHitData,
        pikachu.id,
        pikachu.stats[5]
    );

    assert.deepEqual(
        singleHitFinalDamage.finalHitDamages.map(hitData => hitData.damage),
        [143]
    );
    assert.deepEqual(
        threeHitFinalDamage.finalHitDamages.map(hitData => hitData.damage),
        [143, 143, 288]
    );
    assert.equal(threeHitFinalDamage.totalFinalDamage, 574);
});

test("ピカチュウ通常攻撃は防御だけを参照する", () => {
    const normalAttackData = calculatePikachuNormalAttack({
        hitCount: 1
    });
    const baseResult = computeNormalAttackFinalDamage(
        normalAttackData,
        pikachu.id,
        {
            defense: 69,
            spDefense: 55
        }
    );
    const changedDefenseResult = computeNormalAttackFinalDamage(
        normalAttackData,
        pikachu.id,
        {
            defense: 600,
            spDefense: 55
        }
    );
    const changedSpDefenseResult = computeNormalAttackFinalDamage(
        normalAttackData,
        pikachu.id,
        {
            defense: 69,
            spDefense: 600
        }
    );

    assert.notEqual(
        changedDefenseResult.totalFinalDamage,
        baseResult.totalFinalDamage
    );
    assert.equal(
        changedSpDefenseResult.totalFinalDamage,
        baseResult.totalFinalDamage
    );
});

test("ピカチュウ強化攻撃は特防だけを参照する", () => {
    const thirdHit = calculatePikachuNormalAttack({
        hitCount: 3
    }).hitDamages[2];
    const boostedAttackData = {
        totalDamage: thirdHit.damage,
        criticalCount: 0,
        hitDamages: [thirdHit]
    };
    const baseResult = computeNormalAttackFinalDamage(
        boostedAttackData,
        pikachu.id,
        {
            defense: 69,
            spDefense: 55
        }
    );
    const changedDefenseResult = computeNormalAttackFinalDamage(
        boostedAttackData,
        pikachu.id,
        {
            defense: 600,
            spDefense: 55
        }
    );
    const changedSpDefenseResult = computeNormalAttackFinalDamage(
        boostedAttackData,
        pikachu.id,
        {
            defense: 69,
            spDefense: 600
        }
    );

    assert.equal(
        changedDefenseResult.totalFinalDamage,
        baseResult.totalFinalDamage
    );
    assert.notEqual(
        changedSpDefenseResult.totalFinalDamage,
        baseResult.totalFinalDamage
    );
});

test("ピカチュウ通常攻撃は3回周期を維持する", () => {
    const result = calculatePikachuNormalAttack({
        hitCount: 6
    });

    assert.deepEqual(
        result.hitDamages.map(hitData => hitData.boosted),
        [false, false, true, false, false, true]
    );
});

test("ピカチュウ通常攻撃でも固定した急所パターンを維持する", () => {
    const result = calculatePikachuNormalAttack({
        hitCount: 3,
        criticalEnabled: true,
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

test("旧形式のポケモンは従来どおり通常攻撃を計算する", () => {
    const result = calculateGreninjaNormalAttack({
        attack: 100,
        criticalEnabled: false
    });

    assert.deepEqual(
        result.hitDamages.map(hitData => hitData.damage),
        [100, 100, 130]
    );
    assert.equal(result.totalDamage, 330);
});

test("通常攻撃の未対応防御参照はエラーにする", () => {
    const normalAttackData = {
        totalDamage: 100,
        criticalCount: 0,
        hitDamages: [{
            damage: 100,
            critical: false,
            boosted: false,
            defenseReference: "unknownDefense"
        }]
    };

    assert.throws(
        () => computeNormalAttackFinalDamage(
            normalAttackData,
            pikachu.id,
            {
                defense: 50,
                spDefense: 50
            }
        ),
        /未対応の防御参照です: unknownDefense/
    );
});

test("ピカチュウのdamageComponents技が実測値と一致する", () => {
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
