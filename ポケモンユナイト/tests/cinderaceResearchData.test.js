import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { test } from "node:test";

const cinderaceReviewDataPath = new URL(
    "../../データリサーチ/mechanics-effects-survey-v3/batch-02/cinderace-v3-reviewed.json",
    import.meta.url
);

function getCinderaceReviewedData(){
    return JSON.parse(readFileSync(cinderaceReviewDataPath, "utf8"));
}

function getBlazingBicycleKickHpReferenceEffect(){
    const data = getCinderaceReviewedData();
    const entry = data.sourceEntries.find(
        item => item.source?.sourceId === "blazing-bicycle-kick"
    );

    assert.ok(entry, "Blazing Bicycle Kick entry should exist");

    const effect = entry.specialEffects.find(
        item => item.effectId === "blazing-bicycle-kick__03__hpReferenceDamage"
    );

    assert.ok(effect, "Blazing Bicycle Kick hpReferenceDamage effect should exist");

    return effect;
}

test("エースバーンのユナイト技は命中時HP参照をmeasuredとして記録している", () => {
    const effect = getBlazingBicycleKickHpReferenceEffect();

    assert.equal(effect.verificationStatus, "measured");
    assert.equal(effect.confirmationStatus, "measured");
    assert.equal(effect.confirmedValues.missingHpDamagePercent, 14);
    assert.equal(
        effect.confirmedValues.hpReferenceTiming,
        "onHitBeforeMainDamageApplied"
    );
    assert.equal(effect.confirmedValues.usesHitTimeCurrentHp, true);
    assert.equal(effect.confirmedValues.usesCastTimeCurrentHp, false);
    assert.equal(effect.confirmedValues.preHitNaturalRecoveryAffectsDamage, true);
    assert.equal(effect.confirmedValues.mainDamageAppliedBeforeHpReference, false);
});

test("エースバーンのユナイト技検証値は命中時HPで実測ダメージと一致する", () => {
    const effect = getBlazingBicycleKickHpReferenceEffect();
    const measurement = effect.measurements.find(
        item => item.verificationStatus === "measured"
    );

    assert.ok(measurement, "measured result should exist");
    assert.equal(measurement.targetMaxHp, 6300);
    assert.equal(measurement.targetHpAtCast, 4810);
    assert.equal(measurement.targetHpOnHitBeforeDamage, 4873);
    assert.equal(measurement.missingHpOnHitBeforeDamage, 1427);
    assert.equal(measurement.baseFinalDamage, 1490);
    assert.equal(measurement.expectedAdditionalFinalDamage, 142);
    assert.equal(measurement.expectedTotalDamage, 1632);
    assert.equal(measurement.observedTotalDamage, 1632);
});

test("エースバーンのユナイト技で未確認のまま残す項目を記録している", () => {
    const effect = getBlazingBicycleKickHpReferenceEffect();

    assert.deepEqual(effect.needsRecheck, [
        "命中前に別の攻撃でダメージを受けた場合も、命中時点HPを参照するか。",
        "味方や自身の回復技によるHP変化も、自然回復と同じように追加ダメージへ反映されるか。",
        "小数点および防御補正の正確な丸め段階。"
    ]);
});
