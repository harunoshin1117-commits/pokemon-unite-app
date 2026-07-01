import assert from "node:assert/strict";
import { test } from "node:test";

import { bindMobileTabs } from "../js/mobileTabs.js";

function createClassList(initialClasses = []){
    const classes = new Set(initialClasses);

    return {
        contains(className){
            return classes.has(className);
        },
        toggle(className, force){
            if(force){
                classes.add(className);
            }else{
                classes.delete(className);
            }
        }
    };
}

function createButton(tabName, active = false){
    const listeners = new Map();

    return {
        dataset: { mobileTab: tabName },
        classList: createClassList(active ? ["is-active"] : []),
        attributes: {},
        addEventListener(eventName, listener){
            listeners.set(eventName, listener);
        },
        setAttribute(name, value){
            this.attributes[name] = value;
        },
        click(){
            listeners.get("click")?.();
        }
    };
}

function createPanel(tabName, active = false){
    return {
        dataset: { mobileTabPanel: tabName },
        classList: createClassList(
            active ? ["is-mobile-tab-active"] : []
        )
    };
}

function createContainer(tabNames, active = false){
    return {
        dataset: { mobileTabContainer: tabNames },
        classList: createClassList(
            active ? ["is-mobile-tab-active"] : []
        )
    };
}

test("スマホでタブと対象パネルを切り替える", () => {
    const attackerButton = createButton("attacker", true);
    const resultButton = createButton("result");
    const attackerPanel = createPanel("attacker", true);
    const resultPanel = createPanel("result");
    const attackerContainer =
        createContainer("attacker details", true);

    const activateMobileTab = bindMobileTabs({
        tabButtons: [attackerButton, resultButton],
        tabPanels: [attackerPanel, resultPanel],
        tabContainers: [attackerContainer],
        mobileQuery: { matches: true }
    });

    activateMobileTab("result");

    assert.equal(
        attackerButton.classList.contains("is-active"),
        false
    );
    assert.equal(resultButton.classList.contains("is-active"), true);
    assert.equal(
        attackerPanel.classList.contains("is-mobile-tab-active"),
        false
    );
    assert.equal(
        resultPanel.classList.contains("is-mobile-tab-active"),
        true
    );
    assert.equal(
        attackerContainer.classList.contains(
            "is-mobile-tab-active"
        ),
        false
    );
    assert.equal(resultButton.attributes["aria-selected"], "true");
});

test("PC幅ではタブ状態を変更しない", () => {
    const attackerButton = createButton("attacker", true);
    const resultButton = createButton("result");
    const attackerPanel = createPanel("attacker", true);
    const resultPanel = createPanel("result");

    const activateMobileTab = bindMobileTabs({
        tabButtons: [attackerButton, resultButton],
        tabPanels: [attackerPanel, resultPanel],
        tabContainers: [],
        mobileQuery: { matches: false }
    });

    activateMobileTab("result");

    assert.equal(
        attackerPanel.classList.contains("is-mobile-tab-active"),
        true
    );
    assert.equal(
        resultPanel.classList.contains("is-mobile-tab-active"),
        false
    );
});
