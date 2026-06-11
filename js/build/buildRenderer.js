export function renderSavedBuilds(
    savedBuilds,
    {
        selectedBuildId = "",
        savedBuildSelect,
        showBuildDetailsButton,
        loadBuildButton,
        deleteBuildButton
    }
){
    savedBuildSelect.replaceChildren();

    if(savedBuilds.length === 0){
        const emptyOption = document.createElement("option");
        emptyOption.value = "";
        emptyOption.textContent = "保存済みビルドなし";
        savedBuildSelect.append(emptyOption);
        savedBuildSelect.disabled = true;
        showBuildDetailsButton.disabled = true;
        loadBuildButton.disabled = true;
        deleteBuildButton.disabled = true;
        return;
    }

    savedBuilds.forEach(savedBuild => {
        const option = document.createElement("option");
        option.value = savedBuild.id;
        option.textContent = savedBuild.name;
        savedBuildSelect.append(option);
    });

    savedBuildSelect.disabled = false;
    showBuildDetailsButton.disabled = false;
    loadBuildButton.disabled = false;
    deleteBuildButton.disabled = false;

    if(
        selectedBuildId &&
        savedBuilds.some(
            savedBuild => savedBuild.id === selectedBuildId
        )
    ){
        savedBuildSelect.value = selectedBuildId;
    }
}

export function renderBuildDetails(
    savedBuild,
    buildDetailsContent
){
    const buildState = savedBuild.buildState;
    const attacker = buildState.attacker || {};
    const hitCounts = buildState.hitCounts || {};
    const calculationState = buildState.calculationState || {};
    const normalAttackData =
        calculationState.normalAttackData || {};
    const heldItemSlots = Array.isArray(attacker.heldItemSlots)
        ? attacker.heldItemSlots
        : [];
    const details = [
        ["名前", savedBuild.name],
        ["ポケモン名前", attacker.pokemonId],
        ["レベル", attacker.level],
        ["技セット1", attacker.skillOneName],
        ["技セット2", attacker.skillTwoName],
        ["ユナイト技", attacker.uniteMoveName],
        ["持ち物", heldItemSlots.join(", ")],
        ["通常攻撃ヒット数", hitCounts.normalAttack],
        ["技セット1ヒット数", hitCounts.skillOne],
        ["技セット2ヒット数", hitCounts.skillTwo],
        ["ユナイト技ヒット数", hitCounts.unite],
        ["通常攻撃合計ダメージ", normalAttackData.totalDamage],
        ["急所回数", normalAttackData.criticalCount]
    ];

    buildDetailsContent.replaceChildren();

    details.forEach(([label, value]) => {
        const row = document.createElement("p");
        row.textContent = `${label}: ${value ?? "null"}`;
        buildDetailsContent.append(row);
    });
}
