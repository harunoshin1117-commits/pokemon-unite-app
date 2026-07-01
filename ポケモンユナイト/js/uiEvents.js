export function bindUiEvents({
    closeDetailPopup,
    detailPopupOverlay,
    resultBreakdownToggle,
    detailDamageResult,
    enemyStatsToggle,
    enemyStatsText,
    heldItems,
    overlay,
    closeModal
}){
    closeDetailPopup.addEventListener("click", () => {
        detailPopupOverlay.style.display = "none";
    });

    resultBreakdownToggle.addEventListener("click", () => {
        detailDamageResult.classList.toggle("is-open");
        resultBreakdownToggle.textContent = detailDamageResult.classList.contains("is-open")
            ? "内訳を閉じる"
            : "内訳を見る";
    });

    enemyStatsToggle.addEventListener("click", () => {
        enemyStatsText.classList.toggle("is-open");
    });

    heldItems.forEach(heldItem => {
        heldItem.addEventListener("click", () => {
            overlay.style.display = "flex";
        });
    });

    closeModal.addEventListener("click", () => {
        overlay.style.display = "none";
    });
}
