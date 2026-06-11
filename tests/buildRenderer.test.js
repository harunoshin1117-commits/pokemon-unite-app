import assert from "node:assert/strict";
import { beforeEach, test } from "node:test";

import {
    renderBuildDetails,
    renderSavedBuilds
} from "../js/build/buildRenderer.js";

function createElement(){
    return {
        children: [],
        disabled: false,
        textContent: "",
        value: "",
        append(child){
            this.children.push(child);
        },
        replaceChildren(){
            this.children = [];
        }
    };
}

function createRendererElements(){
    return {
        savedBuildSelect: createElement(),
        showBuildDetailsButton: createElement(),
        loadBuildButton: createElement(),
        deleteBuildButton: createElement()
    };
}

beforeEach(() => {
    globalThis.document = {
        createElement
    };
});

test("保存データがない場合は空表示にして操作を無効化する", () => {
    const elements = createRendererElements();

    renderSavedBuilds([], elements);

    assert.equal(elements.savedBuildSelect.children.length, 1);
    assert.equal(
        elements.savedBuildSelect.children[0].textContent,
        "保存済みビルドなし"
    );
    assert.equal(elements.savedBuildSelect.disabled, true);
    assert.equal(elements.showBuildDetailsButton.disabled, true);
    assert.equal(elements.loadBuildButton.disabled, true);
    assert.equal(elements.deleteBuildButton.disabled, true);
});

test("保存一覧を表示して指定したビルドを選択する", () => {
    const elements = createRendererElements();
    const savedBuilds = [
        { id: "build-1", name: "ビルド1" },
        { id: "build-2", name: "ビルド2" }
    ];

    renderSavedBuilds(savedBuilds, {
        ...elements,
        selectedBuildId: "build-2"
    });

    assert.deepEqual(
        elements.savedBuildSelect.children.map(option => option.value),
        ["build-1", "build-2"]
    );
    assert.equal(elements.savedBuildSelect.value, "build-2");
    assert.equal(elements.savedBuildSelect.disabled, false);
    assert.equal(elements.showBuildDetailsButton.disabled, false);
    assert.equal(elements.loadBuildButton.disabled, false);
    assert.equal(elements.deleteBuildButton.disabled, false);
});

test("保存内容を指定された日本語項目だけで表示する", () => {
    const buildDetailsContent = createElement();
    const savedBuild = {
        name: "テストビルド",
        buildState: {
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
            calculationState: {
                normalAttackData: {
                    totalDamage: 1200,
                    criticalCount: 1
                }
            }
        }
    };

    renderBuildDetails(savedBuild, buildDetailsContent);

    assert.equal(buildDetailsContent.children.length, 13);
    assert.deepEqual(
        buildDetailsContent.children.map(row => row.textContent),
        [
            "名前: テストビルド",
            "ポケモン名前: Pikachu",
            "レベル: 10",
            "技セット1: エレキボール",
            "技セット2: 10万ボルト",
            "ユナイト技: フルボルテッカー",
            "持ち物: scopeLens, , wiseGlasses",
            "通常攻撃ヒット数: 3",
            "技セット1ヒット数: 1",
            "技セット2ヒット数: 2",
            "ユナイト技ヒット数: 1",
            "通常攻撃合計ダメージ: 1200",
            "急所回数: 1"
        ]
    );
});
