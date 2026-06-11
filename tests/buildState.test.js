import assert from "node:assert/strict";
import { test } from "node:test";

import {
    BUILD_STATE_VERSION,
    NORMAL_ATTACK_CALCULATION_VERSION,
    createBuildState,
    getValidNormalAttackData,
    isValidBuildState,
    normalizeInteger
} from "../js/build/buildState.js";

function createSourceState(){
    return {
        attacker: {
            pokemonId: "Pikachu",
            level: 10,
            skillOneName: "エレキボール",
            skillTwoName: "10万ボルト",
            uniteMoveName: "フルボルテッカー",
            heldItemSlots: ["scopeLens", null, "wiseGlasses"]
        },
        hitCounts: {
            normalAttack: 3,
            skillOne: 1,
            skillTwo: 2,
            unite: 1
        },
        criticalEnabled: true,
        calculationState: {
            normalAttackData: {
                totalDamage: 1200,
                criticalCount: 1,
                hitDamages: [
                    {
                        damage: 400,
                        critical: false,
                        boosted: false
                    },
                    {
                        damage: 800,
                        critical: true,
                        boosted: false
                    }
                ]
            },
            normalAttackCriticalLocked: true,
            hasAttacked: true
        }
    };
}

test("現在状態を保存形式へ変換する", () => {
    const buildState = createBuildState(createSourceState());

    assert.equal(buildState.version, BUILD_STATE_VERSION);
    assert.equal(
        buildState.calculationState.normalAttackData
            .calculationVersion,
        NORMAL_ATTACK_CALCULATION_VERSION
    );
    assert.equal(buildState.attacker.pokemonId, "Pikachu");
    assert.equal(buildState.hitCounts.normalAttack, 3);
});

test("配列と通常攻撃データを複製する", () => {
    const sourceState = createSourceState();
    const buildState = createBuildState(sourceState);

    sourceState.attacker.heldItemSlots[0] = "changed";
    sourceState.calculationState.normalAttackData
        .hitDamages[0].damage = 9999;

    assert.equal(buildState.attacker.heldItemSlots[0], "scopeLens");
    assert.equal(
        buildState.calculationState.normalAttackData
            .hitDamages[0].damage,
        400
    );
});

test("通常攻撃データがない状態も保存形式へ変換する", () => {
    const sourceState = createSourceState();
    sourceState.calculationState.normalAttackData = null;

    const buildState = createBuildState(sourceState);

    assert.equal(
        buildState.calculationState.normalAttackData,
        null
    );
});

test("整数を範囲内へ補正する", () => {
    assert.equal(normalizeInteger("10", 1, 15, 1), 10);
    assert.equal(normalizeInteger(20, 1, 15, 1), 15);
    assert.equal(normalizeInteger(-5, 1, 15, 1), 1);
    assert.equal(normalizeInteger("invalid", 1, 15, 1), 1);
});

test("有効な通常攻撃データを複製して返す", () => {
    const buildState = createBuildState(createSourceState());
    const normalAttackData =
        buildState.calculationState.normalAttackData;
    const result = getValidNormalAttackData(
        normalAttackData,
        2,
        true
    );

    assert.deepEqual(result, {
        totalDamage: 1200,
        criticalCount: 1,
        hitDamages: [
            {
                damage: 400,
                critical: false,
                boosted: false
            },
            {
                damage: 800,
                critical: true,
                boosted: false
            }
        ]
    });
    assert.notEqual(result, normalAttackData);
});

test("壊れた通常攻撃データは復元対象にしない", () => {
    const buildState = createBuildState(createSourceState());
    buildState.calculationState.normalAttackData.criticalCount = 0;

    assert.equal(
        getValidNormalAttackData(
            buildState.calculationState.normalAttackData,
            2,
            true
        ),
        null
    );
});

test("保存データ全体の必須構造を検証する", () => {
    const buildState = createBuildState(createSourceState());

    assert.equal(isValidBuildState(buildState), true);

    const invalidBuildState = {
        ...buildState,
        attacker: {
            ...buildState.attacker,
            heldItemSlots: "scopeLens"
        }
    };

    assert.equal(isValidBuildState(invalidBuildState), false);
});
