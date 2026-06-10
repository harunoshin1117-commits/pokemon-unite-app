import assert from "node:assert/strict";
import { beforeEach, test } from "node:test";

import {
    BUILD_STATE_VERSION,
    deleteBuild,
    getSavedBuilds,
    loadBuild,
    saveBuild
} from "../js/buildStorage.js";

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
        buildState: { version },
        createdAt: "2026-06-10T00:00:00.000Z",
        updatedAt: "2026-06-10T00:00:00.000Z"
    };
}

beforeEach(() => {
    globalThis.localStorage = createMemoryStorage();
});

test("複数保存したビルドをIDで読み込める", () => {
    const first = saveBuild("ビルド1", {
        version: BUILD_STATE_VERSION
    });
    const second = saveBuild("ビルド2", {
        version: BUILD_STATE_VERSION
    });

    assert.equal(getSavedBuilds().length, 2);
    assert.equal(loadBuild(first.id)?.name, "ビルド1");
    assert.equal(loadBuild(second.id)?.name, "ビルド2");
});

test("指定したビルドだけを削除できる", () => {
    const first = saveBuild("ビルド1", {
        version: BUILD_STATE_VERSION
    });
    const second = saveBuild("ビルド2", {
        version: BUILD_STATE_VERSION
    });

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
