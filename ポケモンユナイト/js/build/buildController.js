export function bindBuildEvents({
    buildNameInput,
    saveBuildButton,
    savedBuildSelect,
    showBuildDetailsButton,
    loadBuildButton,
    deleteBuildButton,
    buildStorageMessage,
    buildDetailsOverlay,
    buildDetailsContent,
    closeBuildDetails,
    getCurrentBuildState,
    applyBuildState,
    getSavedBuilds,
    saveBuild,
    loadBuild,
    deleteBuild,
    renderSavedBuilds,
    renderBuildDetails
}){
    const renderSavedBuildList = (selectedBuildId = "") => {
        renderSavedBuilds(
            getSavedBuilds(),
            {
                selectedBuildId,
                savedBuildSelect,
                showBuildDetailsButton,
                loadBuildButton,
                deleteBuildButton
            }
        );
    };

    saveBuildButton.addEventListener("click", () => {
        const buildName = buildNameInput.value.trim();

        if(!buildName){
            buildStorageMessage.textContent =
                "保存名を入力してください";
            return;
        }

        try{
            const savedBuild = saveBuild(
                buildName,
                getCurrentBuildState()
            );

            buildNameInput.value = "";
            renderSavedBuildList(savedBuild.id);
            buildStorageMessage.textContent =
                `「${savedBuild.name}」を保存しました`;
        }catch{
            buildStorageMessage.textContent =
                "ビルドを保存できませんでした";
        }
    });

    loadBuildButton.addEventListener("click", () => {
        const savedBuild = loadBuild(savedBuildSelect.value);

        if(!savedBuild){
            buildStorageMessage.textContent =
                "読み込むビルドを選択してください";
            return;
        }

        applyBuildState(savedBuild.buildState);
        buildStorageMessage.textContent =
            `「${savedBuild.name}」を読み込みました`;
    });

    showBuildDetailsButton.addEventListener("click", () => {
        const savedBuild = loadBuild(savedBuildSelect.value);

        if(!savedBuild){
            buildStorageMessage.textContent =
                "内容を表示するビルドを選択してください";
            return;
        }

        renderBuildDetails(savedBuild, buildDetailsContent);
        buildDetailsOverlay.style.display = "flex";
    });

    closeBuildDetails.addEventListener("click", () => {
        buildDetailsOverlay.style.display = "none";
    });

    deleteBuildButton.addEventListener("click", () => {
        const savedBuild = loadBuild(savedBuildSelect.value);

        if(!savedBuild){
            buildStorageMessage.textContent =
                "削除するビルドを選択してください";
            return;
        }

        try{
            deleteBuild(savedBuild.id);
            renderSavedBuildList();
            buildStorageMessage.textContent =
                `「${savedBuild.name}」を削除しました`;
        }catch{
            buildStorageMessage.textContent =
                "ビルドを削除できませんでした";
        }
    });

    renderSavedBuildList();
}
