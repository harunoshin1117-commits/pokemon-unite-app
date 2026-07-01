import assert from "node:assert/strict";
import { test } from "node:test";

import { bindBuildEvents } from "../js/build/buildController.js";

function createElement({ value = "" } = {}){
    const listeners = new Map();

    return {
        value,
        textContent: "",
        style: {},
        addEventListener(eventName, listener){
            listeners.set(eventName, listener);
        },
        click(){
            listeners.get("click")?.();
        }
    };
}

function createContext(overrides = {}){
    const elements = {
        buildNameInput: createElement(),
        saveBuildButton: createElement(),
        savedBuildSelect: createElement(),
        showBuildDetailsButton: createElement(),
        loadBuildButton: createElement(),
        deleteBuildButton: createElement(),
        buildStorageMessage: createElement(),
        buildDetailsOverlay: createElement(),
        buildDetailsContent: createElement(),
        closeBuildDetails: createElement()
    };
    const calls = {
        applyBuildState: [],
        deleteBuild: [],
        renderBuildDetails: [],
        renderSavedBuilds: [],
        saveBuild: []
    };
    const savedBuilds = [
        {
            id: "build-1",
            name: "ビルド1",
            buildState: { version: 2 }
        }
    ];
    const context = {
        ...elements,
        getCurrentBuildState: () => ({ version: 2 }),
        applyBuildState: buildState => {
            calls.applyBuildState.push(buildState);
        },
        getSavedBuilds: () => savedBuilds,
        saveBuild: (name, buildState) => {
            calls.saveBuild.push({ name, buildState });
            return {
                id: "saved-build",
                name,
                buildState
            };
        },
        loadBuild: buildId => (
            savedBuilds.find(savedBuild => savedBuild.id === buildId) ||
            null
        ),
        deleteBuild: buildId => {
            calls.deleteBuild.push(buildId);
            return true;
        },
        renderSavedBuilds: (builds, renderContext) => {
            calls.renderSavedBuilds.push({
                builds,
                selectedBuildId: renderContext.selectedBuildId
            });
        },
        renderBuildDetails: (savedBuild, content) => {
            calls.renderBuildDetails.push({ savedBuild, content });
        },
        ...overrides
    };

    return { calls, context, elements, savedBuilds };
}

test("初期化時に保存一覧を描画する", () => {
    const { calls, context, savedBuilds } = createContext();

    bindBuildEvents(context);

    assert.deepEqual(calls.renderSavedBuilds, [
        {
            builds: savedBuilds,
            selectedBuildId: ""
        }
    ]);
});

test("保存名と現在状態を渡して保存し一覧を更新する", () => {
    const { calls, context, elements } = createContext();
    elements.buildNameInput.value = " テストビルド ";

    bindBuildEvents(context);
    elements.saveBuildButton.click();

    assert.deepEqual(calls.saveBuild, [
        {
            name: "テストビルド",
            buildState: { version: 2 }
        }
    ]);
    assert.equal(
        calls.renderSavedBuilds.at(-1).selectedBuildId,
        "saved-build"
    );
    assert.equal(elements.buildNameInput.value, "");
    assert.equal(
        elements.buildStorageMessage.textContent,
        "「テストビルド」を保存しました"
    );
});

test("選択したビルドを読み込む", () => {
    const { calls, context, elements, savedBuilds } =
        createContext();
    elements.savedBuildSelect.value = "build-1";

    bindBuildEvents(context);
    elements.loadBuildButton.click();

    assert.deepEqual(
        calls.applyBuildState,
        [savedBuilds[0].buildState]
    );
    assert.equal(
        elements.buildStorageMessage.textContent,
        "「ビルド1」を読み込みました"
    );
});

test("保存内容の表示とモーダルの開閉を行う", () => {
    const { calls, context, elements, savedBuilds } =
        createContext();
    elements.savedBuildSelect.value = "build-1";

    bindBuildEvents(context);
    elements.showBuildDetailsButton.click();

    assert.deepEqual(calls.renderBuildDetails, [
        {
            savedBuild: savedBuilds[0],
            content: elements.buildDetailsContent
        }
    ]);
    assert.equal(elements.buildDetailsOverlay.style.display, "flex");

    elements.closeBuildDetails.click();
    assert.equal(elements.buildDetailsOverlay.style.display, "none");
});

test("選択したビルドを削除して一覧を更新する", () => {
    const { calls, context, elements } = createContext();
    elements.savedBuildSelect.value = "build-1";

    bindBuildEvents(context);
    elements.deleteBuildButton.click();

    assert.deepEqual(calls.deleteBuild, ["build-1"]);
    assert.equal(calls.renderSavedBuilds.length, 2);
    assert.equal(
        elements.buildStorageMessage.textContent,
        "「ビルド1」を削除しました"
    );
});
