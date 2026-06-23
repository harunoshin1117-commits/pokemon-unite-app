import assert from "node:assert/strict";
import { test } from "node:test";

import {
    calculateNormalAttackDamage,
    computeNormalAttackFinalDamage,
    computeFinalDamage,
    computeMoveDamageData,
    getRawDamage,
    isPlusMove
} from "../js/damageCalculator.js";
import { pokemonsList } from "../js/pokemonData.js";

const pikachu = pokemonsList.find(pokemon => pokemon.id === "Pikachu");
const cinderace = pokemonsList.find(pokemon => pokemon.id === "Cinderace");
const findPikachuMove = moveName =>
    Object.values(pikachu.skill)
        .flat()
        .find(move => move.name === moveName);

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

function calculateCinderaceNormalAttack({
    level = 5,
    hitCount = 3,
    status = cinderace.stats[level],
    criticalEnabled = false,
    criticalPattern = null,
    random = Math.random
} = {}){
    return calculateNormalAttackDamage({
        level,
        pokemonId: cinderace.id,
        hitCount,
        status,
        normalAttack: cinderace.normalAttack,
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

test("エースバーン通常攻撃はnormalAttackデータを参照して計算する", () => {
    const result = calculateCinderaceNormalAttack({
        level: 5,
        hitCount: 3
    });
    const finalDamage = computeNormalAttackFinalDamage(
        result,
        cinderace.id,
        cinderace.stats[5]
    );

    assert.deepEqual(
        result.hitDamages.map(hitData => hitData.damage),
        [174, 174, 243]
    );
    assert.deepEqual(
        result.hitDamages.map(hitData => hitData.boosted),
        [false, false, true]
    );
    assert.deepEqual(
        finalDamage.finalHitDamages.map(hitData => hitData.damage),
        [153, 153, 215]
    );
    assert.equal(finalDamage.totalFinalDamage, 521);
});

test("エースバーンステータスはUnite-DB採用値を参照する", () => {
    assert.deepEqual(cinderace.stats[5], {
        hp: 3382,
        attack: 174,
        defense: 78,
        spAttack: 32,
        spDefense: 55,
        criticalRate: 15
    });
    assert.deepEqual(cinderace.stats[15], {
        hp: 6000,
        attack: 418,
        defense: 268,
        spAttack: 119,
        spDefense: 232,
        criticalRate: 30
    });
});

test("エースバーン通常攻撃と強化攻撃は別の倍率データを参照する", () => {
    const result = calculateCinderaceNormalAttack({
        level: 5,
        hitCount: 3,
        status: {
            attack: 2000,
            spAttack: 1,
            criticalRate: 0
        }
    });

    assert.deepEqual(
        result.hitDamages.map(hitData => hitData.damage),
        [2000, 2000, 2800]
    );
    assert.deepEqual(
        result.hitDamages.map(hitData => hitData.defenseReference),
        ["defense", "defense", "defense"]
    );
});

test("エースバーン通常攻撃でも固定した急所パターンを維持する", () => {
    const result = calculateCinderaceNormalAttack({
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

test("エースバーン通常攻撃は元のステータスオブジェクトを変更しない", () => {
    const status = { ...cinderace.stats[5] };
    const before = JSON.stringify(status);

    calculateCinderaceNormalAttack({
        level: 5,
        hitCount: 3,
        status,
        criticalPattern: [true, false, false]
    });

    assert.equal(JSON.stringify(status), before);
});

test("エースバーン通常攻撃データは将来用の強化条件と野生上限を持つ", () => {
    assert.deepEqual(cinderace.normalAttack.boostedTriggers, [
        {
            type: "attackCycle",
            every: 3
        },
        {
            type: "afterMove",
            appliesTo: "nextNormalAttack",
            persistsUntilUsed: true
        }
    ]);
    assert.deepEqual(cinderace.normalAttack.wildPokemonDamageCaps, {
        basic: 1000,
        boosted: 1300
    });
});

test("エースバーン特性データは火種と発火追加ダメージを持つ", () => {
    const blaze = cinderace.passiveEffects.find(
        effect => effect.id === "cinderace-blaze"
    );

    assert.equal(blaze.implementationStatus, "dataOnly");
    assert.deepEqual(blaze.lowHpBuff.trigger, {
        type: "selfHpRatioAtOrBelow",
        value: 0.5
    });
    assert.deepEqual(blaze.lowHpBuff.effects, {
        criticalRateBonus: 10,
        autoAttackSpeedBonus: 20
    });
    assert.deepEqual(blaze.cinderStacks.stacksByAttackType, {
        normalAttack: 1,
        boostedNormalAttack: 2,
        move: 2
    });
    assert.equal(blaze.cinderStacks.triggerStacks, 5);
    assert.equal(blaze.flareDamage.attackRatio, 0.9);
    assert.equal(blaze.flareDamage.targetMaxHpLevelScalingRatio, 0.007);
    assert.equal(blaze.flareDamage.fixedValue, 25);
    assert.equal(blaze.flareDamage.wildPokemonMaxHpDamageCap, 500);
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
    const testCases = [
        {
            moveName: "電気ショック",
            level: 1,
            expectedRawDamage: 427,
            expectedFinalDamage: 408
        },
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
        },
        {
            moveName: "フルボルトストーム",
            level: 9,
            expectedRawDamage: 3080,
            expectedFinalDamage: 2648
        }
    ];

    testCases.forEach(testCase => {
        const move = findPikachuMove(testCase.moveName);
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

test("エレキボールは満タンHPから本体と追加ダメージを計算する", () => {
    const move = findPikachuMove("エレキボール");
    const result = computeMoveDamageData({
        selectedMove: move,
        useCount: 1,
        attackerLevel: 4,
        attackerStats: pikachu.stats[4],
        enemyState: {
            maxHp: pikachu.stats[4].hp,
            currentHp: pikachu.stats[4].hp,
            defense: pikachu.stats[4].defense,
            spDefense: pikachu.stats[4].spDefense
        }
    });

    assert.equal(result.hpBefore, 3646);
    assert.equal(result.baseRawDamage, 647);
    assert.equal(result.baseFinalDamage, 600);
    assert.equal(result.additionalRawDamage, 36);
    assert.equal(result.additionalFinalDamage, 33);
    assert.equal(result.rawDamage, 683);
    assert.equal(result.finalDamage, 633);
    assert.equal(result.hpAfter, 3013);
    assert.equal(result.displayHpAfter, 3013);
    assert.equal(result.sequentialHpAfter, null);
    assert.deepEqual(
        result.useResults.map(useResult => ({
            hpBefore: useResult.hpBefore,
            baseFinalDamage: useResult.baseFinalDamage,
            additionalFinalDamage: useResult.additionalFinalDamage,
            finalDamage: useResult.finalDamage,
            hpAfter: useResult.hpAfter
        })),
        [{
            hpBefore: 3646,
            baseFinalDamage: 600,
            additionalFinalDamage: 33,
            finalDamage: 633,
            hpAfter: 3013
        }]
    );
});

test("computeMoveDamageDataはcurrentHp未指定ならmaxHpから計算する", () => {
    const move = findPikachuMove("エレキボール");
    const result = computeMoveDamageData({
        selectedMove: move,
        useCount: 1,
        attackerLevel: 4,
        attackerStats: pikachu.stats[4],
        enemyState: {
            maxHp: pikachu.stats[4].hp,
            defense: pikachu.stats[4].defense,
            spDefense: pikachu.stats[4].spDefense
        }
    });

    assert.equal(result.hpBefore, 3646);
    assert.equal(result.finalDamage, 633);
    assert.equal(result.hpAfter, 3013);
    assert.equal(result.displayHpAfter, 3013);
    assert.equal(result.sequentialHpAfter, null);
});

test("エレキボールは渡されたcurrentHpから計算を開始する", () => {
    const move = findPikachuMove("エレキボール");
    const result = computeMoveDamageData({
        selectedMove: move,
        useCount: 1,
        attackerLevel: 4,
        attackerStats: pikachu.stats[4],
        enemyState: {
            maxHp: pikachu.stats[4].hp,
            currentHp: 3000,
            defense: pikachu.stats[4].defense,
            spDefense: pikachu.stats[4].spDefense
        }
    });

    assert.equal(result.hpBefore, 3000);
    assert.equal(result.baseFinalDamage, 600);
    assert.equal(result.additionalRawDamage, 74);
    assert.equal(result.additionalFinalDamage, 68);
    assert.equal(result.finalDamage, 668);
    assert.equal(result.hpAfter, 2332);
    assert.equal(result.displayHpAfter, 2332);
    assert.equal(result.sequentialHpAfter, null);
});

test("エレキボール複数使用はデフォルトでは使用回数間でHPを引き継がない", () => {
    const move = findPikachuMove("エレキボール");
    const result = computeMoveDamageData({
        selectedMove: move,
        useCount: 2,
        attackerLevel: 4,
        attackerStats: pikachu.stats[4],
        enemyState: {
            maxHp: pikachu.stats[4].hp,
            currentHp: pikachu.stats[4].hp,
            defense: pikachu.stats[4].defense,
            spDefense: pikachu.stats[4].spDefense
        }
    });

    assert.deepEqual(
        result.useResults.map(useResult => ({
            hpBefore: useResult.hpBefore,
            baseFinalDamage: useResult.baseFinalDamage,
            additionalFinalDamage: useResult.additionalFinalDamage,
            finalDamage: useResult.finalDamage,
            hpAfter: useResult.hpAfter
        })),
        [
            {
                hpBefore: 3646,
                baseFinalDamage: 600,
                additionalFinalDamage: 33,
                finalDamage: 633,
                hpAfter: 3013
            },
            {
                hpBefore: 3646,
                baseFinalDamage: 600,
                additionalFinalDamage: 33,
                finalDamage: 633,
                hpAfter: 3013
            }
        ]
    );
    assert.equal(result.finalDamage, 1266);
    assert.equal(result.hpAfter, 2380);
    assert.equal(result.displayHpAfter, 2380);
    assert.equal(result.sequentialHpAfter, null);
});

test("エレキボール複数使用は指定時だけ同じ計算内でHPを引き継ぐ", () => {
    const move = findPikachuMove("エレキボール");
    const result = computeMoveDamageData({
        selectedMove: move,
        useCount: 2,
        attackerLevel: 4,
        attackerStats: pikachu.stats[4],
        enemyState: {
            maxHp: pikachu.stats[4].hp,
            currentHp: pikachu.stats[4].hp,
            defense: pikachu.stats[4].defense,
            spDefense: pikachu.stats[4].spDefense
        },
        carryHpBetweenUses: true
    });

    assert.deepEqual(
        result.useResults.map(useResult => ({
            hpBefore: useResult.hpBefore,
            baseFinalDamage: useResult.baseFinalDamage,
            additionalFinalDamage: useResult.additionalFinalDamage,
            finalDamage: useResult.finalDamage,
            hpAfter: useResult.hpAfter
        })),
        [
            {
                hpBefore: 3646,
                baseFinalDamage: 600,
                additionalFinalDamage: 33,
                finalDamage: 633,
                hpAfter: 3013
            },
            {
                hpBefore: 3013,
                baseFinalDamage: 600,
                additionalFinalDamage: 67,
                finalDamage: 667,
                hpAfter: 2346
            }
        ]
    );
    assert.equal(result.finalDamage, 1300);
    assert.equal(result.hpAfter, 2346);
    assert.equal(result.displayHpAfter, 2346);
    assert.equal(result.sequentialHpAfter, 2346);
});

test("エレキボール+は減少HPの8%で追加ダメージを計算する", () => {
    const move = findPikachuMove("エレキボール");
    const result = computeMoveDamageData({
        selectedMove: move,
        useCount: 1,
        attackerLevel: 15,
        attackerStats: pikachu.stats[15],
        enemyState: {
            maxHp: pikachu.stats[15].hp,
            currentHp: pikachu.stats[15].hp,
            defense: pikachu.stats[15].defense,
            spDefense: pikachu.stats[15].spDefense
        }
    });

    assert.equal(result.baseRawDamage, 1768);
    assert.equal(result.baseFinalDamage, 1326);
    assert.equal(result.additionalRawDamage, 106);
    assert.equal(result.additionalFinalDamage, 79);
    assert.equal(result.finalDamage, 1405);
    assert.equal(result.hpAfter, 4895);
    assert.equal(result.displayHpAfter, 4895);
    assert.equal(result.sequentialHpAfter, null);
});

test("computeMoveDamageDataは入力された敵状態、攻撃側状態、技データを変更しない", () => {
    const move = findPikachuMove("エレキボール");
    const attackerStats = { ...pikachu.stats[4] };
    const enemyState = {
        maxHp: pikachu.stats[4].hp,
        currentHp: pikachu.stats[4].hp,
        defense: pikachu.stats[4].defense,
        spDefense: pikachu.stats[4].spDefense
    };
    const attackerBefore = JSON.stringify(attackerStats);
    const enemyBefore = JSON.stringify(enemyState);
    const moveBefore = JSON.stringify(move);

    computeMoveDamageData({
        selectedMove: move,
        useCount: 2,
        attackerLevel: 4,
        attackerStats,
        enemyState
    });

    assert.equal(JSON.stringify(attackerStats), attackerBefore);
    assert.equal(JSON.stringify(enemyState), enemyBefore);
    assert.equal(JSON.stringify(move), moveBefore);
});

test("computeMoveDamageDataはcurrentHpが0でもmaxHpへ戻さない", () => {
    const move = findPikachuMove("エレキボール");
    const result = computeMoveDamageData({
        selectedMove: move,
        useCount: 1,
        attackerLevel: 4,
        attackerStats: pikachu.stats[4],
        enemyState: {
            maxHp: pikachu.stats[4].hp,
            currentHp: 0,
            defense: pikachu.stats[4].defense,
            spDefense: pikachu.stats[4].spDefense
        }
    });

    assert.equal(result.hpBefore, 0);
    assert.equal(result.hpAfter, 0);
});

test("computeMoveDamageDataは単純なdamageComponents技も同じ基本形で返す", () => {
    const move = findPikachuMove("エレキネット");
    const result = computeMoveDamageData({
        selectedMove: move,
        useCount: 1,
        attackerLevel: 5,
        attackerStats: pikachu.stats[5],
        enemyState: {
            maxHp: pikachu.stats[5].hp,
            currentHp: pikachu.stats[5].hp,
            defense: pikachu.stats[5].defense,
            spDefense: pikachu.stats[5].spDefense
        }
    });

    assert.equal(result.hpBefore, 3788);
    assert.equal(result.baseRawDamage, 465);
    assert.equal(result.baseFinalDamage, 425);
    assert.equal(result.additionalRawDamage, 0);
    assert.equal(result.additionalFinalDamage, 0);
    assert.equal(result.rawDamage, 465);
    assert.equal(result.finalDamage, 425);
    assert.equal(result.hpAfter, 3363);
    assert.equal(result.displayHpAfter, 3363);
    assert.equal(result.sequentialHpAfter, null);
    assert.deepEqual(result.useResults, [{
        useNumber: 1,
        hpBefore: 3788,
        baseRawDamage: 465,
        baseFinalDamage: 425,
        additionalRawDamage: 0,
        additionalFinalDamage: 0,
        rawDamage: 465,
        finalDamage: 425,
        hpAfter: 3363
    }]);
});

test("空のdamageComponentsは新形式扱いにしない", () => {
    const move = {
        category: "special",
        damageComponents: [],
        formula: {
            scaling: "spAttack",
            ratio: 1,
            levelScaling: 0,
            baseDamage: 100
        }
    };

    assert.equal(
        computeFinalDamage(
            move,
            1,
            5,
            { spAttack: 100 },
            { defense: 999, spDefense: 0 }
        ),
        200
    );
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
