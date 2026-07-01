import assert from "node:assert/strict";
import { beforeEach, test } from "node:test";

import {
    deleteBuild,
    getSavedBuilds,
    loadBuild,
    saveBuild
} from "../js/build/buildStorage.js";
import {
    BUILD_STATE_VERSION
} from "../js/build/buildState.js";

const STORAGE_KEY = "pokemon-unite-saved-builds";

function createMemoryStorage(){
    const values = new Map();

    return {
        getItem(key){
            return values.has(key) ? values.get(key) : null;
        },
        setItem(key, value){
            values.set(key, String(value));
        }
    };
}

function createSavedBuild({
    id,
    version = BUILD_STATE_VERSION
}){
    return {
        id,
        name: id,
        buildState: {
            version,
            attacker: {
                pokemonId: "Pikachu",
                level: 10,
                skillOneName: null,
                skillTwoName: null,
                uniteMoveName: null,
                heldItemSlots: [null, null, null]
            },
            hitCounts: {
                normalAttack: 0,
                skillOne: 1,
                skillTwo: 1,
                unite: 1
            },
            criticalEnabled: false,
            calculationState: {
                normalAttackData: null,
                normalAttackCriticalLocked: false,
                hasAttacked: false
            }
        },
        createdAt: "2026-06-10T00:00:00.000Z",
        updatedAt: "2026-06-10T00:00:00.000Z"
    };
}

beforeEach(() => {
    globalThis.localStorage = createMemoryStorage();
});

test("複数保存したビルドをIDで読み込める", () => {
    const first = saveBuild(
        "ビルド1",
        createSavedBuild({ id: "first" }).buildState
    );
    const second = saveBuild(
        "ビルド2",
        createSavedBuild({ id: "second" }).buildState
    );

    assert.equal(getSavedBuilds().length, 2);
    assert.equal(loadBuild(first.id)?.name, "ビルド1");
    assert.equal(loadBuild(second.id)?.name, "ビルド2");
});

test("指定したビルドだけを削除できる", () => {
    const first = saveBuild(
        "ビルド1",
        createSavedBuild({ id: "first" }).buildState
    );
    const second = saveBuild(
        "ビルド2",
        createSavedBuild({ id: "second" }).buildState
    );

    assert.equal(deleteBuild(first.id), true);
    assert.equal(loadBuild(first.id), null);
    assert.equal(loadBuild(second.id)?.name, "ビルド2");
});

test("旧バージョンを除外してlocalStorageも整理する", () => {
    const currentBuild = createSavedBuild({ id: "current" });
    const oldBuild = createSavedBuild({
        id: "old",
        version: BUILD_STATE_VERSION - 1
    });

    localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify([oldBuild, currentBuild])
    );

    assert.deepEqual(
        getSavedBuilds().map(savedBuild => savedBuild.id),
        ["current"]
    );
    assert.deepEqual(
        JSON.parse(localStorage.getItem(STORAGE_KEY)),
        [currentBuild]
    );
});

test("壊れたJSONでは空配列を返す", () => {
    localStorage.setItem(STORAGE_KEY, "{broken");

    assert.deepEqual(getSavedBuilds(), []);
});

test("必須構造が壊れた現行データを除外する", () => {
    const invalidBuild = createSavedBuild({ id: "invalid" });
    invalidBuild.buildState.attacker.heldItemSlots = "scopeLens";

    localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify([invalidBuild])
    );

    assert.deepEqual(getSavedBuilds(), []);
    assert.deepEqual(
        JSON.parse(localStorage.getItem(STORAGE_KEY)),
        []
    );
});

test("不正な状態は保存しない", () => {
    assert.throws(
        () => saveBuild("不正データ", { version: BUILD_STATE_VERSION }),
        TypeError
    );
    assert.equal(localStorage.getItem(STORAGE_KEY), null);
});
