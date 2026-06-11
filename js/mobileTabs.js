export function bindMobileTabs({
    tabButtons,
    tabPanels,
    tabContainers,
    mobileQuery
}){
    const activateMobileTab = tabName => {
        if(!mobileQuery.matches){
            return;
        }

        tabButtons.forEach(button => {
            const isActive = button.dataset.mobileTab === tabName;

            button.classList.toggle("is-active", isActive);
            button.setAttribute("aria-selected", String(isActive));
        });

        tabPanels.forEach(panel => {
            panel.classList.toggle(
                "is-mobile-tab-active",
                panel.dataset.mobileTabPanel === tabName
            );
        });

        tabContainers.forEach(container => {
            const containerTabs =
                container.dataset.mobileTabContainer.split(" ");

            container.classList.toggle(
                "is-mobile-tab-active",
                containerTabs.includes(tabName)
            );
        });
    };

    tabButtons.forEach(button => {
        button.addEventListener("click", () => {
            activateMobileTab(button.dataset.mobileTab);
        });
    });

    activateMobileTab("attacker");

    return activateMobileTab;
}
