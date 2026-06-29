const fs = require("fs");
const path = require("path");
const https = require("https");

const projectRoot = "C:/Projects/pokemon-unite-app/ポケモンユナイト";
const researchRoot = "C:/Projects/pokemon-unite-app/データリサーチ";
const surveyRoot = path.join(researchRoot, "mechanics-effects-survey-v3");
const docsRoot = path.join(projectRoot, "docs");
const sourceUrl = "https://unite-db.com/pokemon.json";
const researchDate = "2026-06-25";

function get(url) {
  return new Promise((resolve, reject) => {
    https
      .get(url, (res) => {
        if (res.statusCode >= 400) {
          reject(new Error(`HTTP ${res.statusCode}: ${url}`));
          return;
        }
        let data = "";
        res.on("data", (chunk) => {
          data += chunk;
        });
        res.on("end", () => resolve(data));
      })
      .on("error", reject);
  });
}

function clean(value) {
  return String(value || "").replace(/\s+/g, " ").trim();
}

function slug(value) {
  return clean(value).toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "") || "unknown";
}

function hasText(value) {
  return clean(value).length > 0;
}

function firstNumber(regex, text) {
  const match = clean(text).match(regex);
  return match ? Number(match[1]) : null;
}

function duration(text) {
  return firstNumber(/(\d+(?:\.\d+)?)\s*s\b/i, text);
}

function cooldown(text) {
  return firstNumber(/(\d+(?:\.\d+)?)\s*s\s*cd\b/i, text);
}

function ensureDir(dir) {
  fs.mkdirSync(dir, { recursive: true });
}

function writeJson(file, value) {
  fs.writeFileSync(file, `${JSON.stringify(value, null, 2)}\n`, "utf8");
}

function sourceIdsForPokemon(name) {
  const ids = ["uniteDbPokemon"];
  if (name === "Pikachu") ids.push("existingResearchPikachu");
  if (name === "Cinderace") ids.push("existingResearchCinderace");
  if (name === "Greninja") ids.push("existingResearchGreninja");
  return ids;
}

const sourceCatalog = {
  uniteDbPokemon: {
    sourceUrl,
    sourceType: "unofficialDatabase",
    notes:
      "Unite-DB public pokemon.json. v3 enumerates skills, boosted basic attacks, nested upgrade choices, Plus/enhanced effects, Unite Moves, and Unite Buffs.",
  },
  existingResearchPikachu: {
    sourceUrl: "local://../データリサーチ/pikachu-researchData.json",
    sourceType: "localResearch",
  },
  existingResearchCinderace: {
    sourceUrl: "local://../データリサーチ/cinderace-researchData.json",
    sourceType: "localResearch",
  },
  existingResearchGreninja: {
    sourceUrl: "local://../データリサーチ/greninja-researchData.json",
    sourceType: "localResearch",
  },
};

function rsbText(rsb, mode = "base") {
  if (!rsb) return "";
  const parts = [];
  if (mode === "plus") {
    parts.push(rsb.enhanced_true_desc, rsb.enhanced_notes, rsb.enhanced_rsb_info);
    for (let i = 1; i <= 5; i += 1) {
      parts.push(
        rsb[`enhanced_add${i}_true_desc`],
        rsb[`enhanced_add${i}_notes`],
        rsb[`enhanced_add${i}_rsb_info`],
      );
    }
  } else {
    parts.push(rsb.true_desc, rsb.notes, rsb.rsb_info);
    for (let i = 1; i <= 5; i += 1) {
      parts.push(rsb[`add${i}_true_desc`], rsb[`add${i}_notes`], rsb[`add${i}_rsb_info`]);
    }
  }
  return clean(parts.filter(Boolean).join(" "));
}

function hasPlusText(upgrade) {
  if (hasText(upgrade.description2)) return true;
  const rsb = upgrade.rsb || {};
  return Object.keys(rsb).some((key) => key.startsWith("enhanced_") && hasText(rsb[key]));
}

function formulaFromRsb(rsb, mode = "base") {
  if (!rsb) return null;
  const rows = [];
  const add = (id, data) => {
    if (
      !hasText(data.label) &&
      !hasText(data.ratio) &&
      !hasText(data.dmg_type) &&
      !hasText(data.slider) &&
      !hasText(data.base) &&
      !hasText(data.true_desc) &&
      !hasText(data.notes)
    ) {
      return;
    }
    rows.push({
      id,
      label: data.label || "",
      ratio: data.ratio || "",
      damageType: data.dmg_type || "",
      levelScaling: data.slider || "",
      base: data.base || "",
      trueDescription: data.true_desc || "",
      notes: data.notes || data.rsb_info || "",
    });
  };

  if (mode === "plus") {
    add("enhanced", {
      label: rsb.enhanced_label,
      ratio: rsb.enhanced_ratio,
      dmg_type: rsb.enhanced_dmg_type,
      slider: rsb.enhanced_slider,
      base: rsb.enhanced_base,
      true_desc: rsb.enhanced_true_desc,
      notes: rsb.enhanced_notes,
      rsb_info: rsb.enhanced_rsb_info,
    });
    for (let i = 1; i <= 5; i += 1) {
      add(`enhancedAdd${i}`, {
        label: rsb[`enhanced_add${i}_label`],
        ratio: rsb[`enhanced_add${i}_ratio`],
        dmg_type: rsb[`enhanced_add${i}_dmg_type`],
        slider: rsb[`enhanced_add${i}_slider`],
        base: rsb[`enhanced_add${i}_base`],
        true_desc: rsb[`enhanced_add${i}_true_desc`],
        notes: rsb[`enhanced_add${i}_notes`],
        rsb_info: rsb[`enhanced_add${i}_rsb_info`],
      });
    }
  } else {
    add("main", rsb);
    for (let i = 1; i <= 5; i += 1) {
      add(`add${i}`, {
        label: rsb[`add${i}_label`],
        ratio: rsb[`add${i}_ratio`],
        dmg_type: rsb[`add${i}_dmg_type`],
        slider: rsb[`add${i}_slider`],
        base: rsb[`add${i}_base`],
        true_desc: rsb[`add${i}_true_desc`],
        notes: rsb[`add${i}_notes`],
        rsb_info: rsb[`add${i}_rsb_info`],
      });
    }
  }

  return rows.length ? rows : null;
}

const effectRules = [
  ["burn", ["burn", "burned"], "やけどを付与する。"],
  ["poison", ["poison", "poisoned"], "どくを付与する。"],
  ["paralysis", ["paralyz", "paralysis"], "まひを付与する。"],
  ["sleep", ["sleep", "asleep"], "ねむりを付与する。"],
  ["freeze", ["freeze", "frozen"], "こおり・凍結を付与する。"],
  ["stun", ["stun", "unable to act", "incapacitated"], "行動不能・スタンを付与する。"],
  ["immobilize", ["immobiliz", "unable to move"], "移動不能を付与する。"],
  ["knockUp", ["throw", "throws", "thrown into the air", "knock up", "knocked up"], "相手を打ち上げる。"],
  ["knockBack", ["shove", "shoves", "push", "pushes", "knockback", "knock back"], "相手を押し出す。"],
  ["pull", ["pull", "pulls", "draws", "drag"], "相手を引き寄せる。"],
  ["slow", ["slow", "slowed", "movement speed is decreased", "decreases their movement speed"], "移動速度を下げる。"],
  ["attackSpeedDown", ["basic attack speed is decreased", "attack speed reduction"], "通常攻撃速度を下げる。"],
  ["unstoppable", ["unstoppable"], "妨害無効になる。"],
  ["invincible", ["invincible", "invulnerability"], "無敵になる。"],
  ["untargetableOrStealth", ["invisible", "stealthed", "cannot be targeted", "untargetable"], "対象指定されない、またはステルス状態になる。"],
  ["hindranceResistance", ["hindrance resistance", "resistant to hindrances", "immune to hindrances"], "妨害耐性を得る。"],
  ["movementSpeedUp", ["movement speed is increased", "increases movement speed", "movement speed increased", "increasing movement speed"], "移動速度を上げる。"],
  ["attackSpeedUp", ["attack speed is increased", "basic attack speed by", "auto attack speed by", "increasing basic attack speed"], "通常攻撃速度を上げる。"],
  ["criticalRateUp", ["critical-hit rate is increased", "critical hit rate is increased", "increases critical-hit rate"], "急所率を上げる。"],
  ["attackStatChange", ["attack is increased", "sp. atk", "sp. attack", "attack and sp. atk", "attack and sp. attack"], "攻撃・特攻などを変化させる。"],
  ["defenseStatChange", ["defense is increased", "defense by", "sp. def", "special defense", "decreasing their defense"], "防御・特防を変化させる。"],
  ["damageDealtChange", ["damage dealt", "increases all damage", "deals increased damage to"], "与ダメージを変化させる。"],
  ["damageReduction", ["damage reduction", "damage received", "take less damage", "reduced damage"], "受けるダメージを軽減する。"],
  ["cooldownReduction", ["cooldown is reduced", "cooldowns of", "reduces the cooldown", "reduced by 90%", "cdr"], "待ち時間を短縮する。"],
  ["cooldownReset", ["cooldown reset", "resets cooldown", "cooldown is reset"], "待ち時間をリセットする。"],
  ["healing", ["heal", "healing", "restores hp", "restore hp", "recovers hp", "recover hp"], "HPを回復する。"],
  ["shield", ["shield"], "シールドを付与する。"],
  ["damageOverTime", ["damage over time", "dealing damage over time", "every 0.5s", "dealing damage 3 times", "dealing damage 5 times"], "継続ダメージを与える。"],
  ["delayedDamage", ["after a delay", "after 1s", "after 2s", "explodes after", "then explodes"], "遅延または時間差でダメージを与える。"],
  ["fieldArea", ["field is created", "creates a field", "remains for", "outer ring", "on the battlefield", "area remains"], "フィールド・設置範囲を生成する。"],
  ["stackOrMark", ["stack", "stacks", "counter", "counters", "gauge", "mark", "marked", "cinder", "boost count", "sweet gauge"], "スタック、マーク、ゲージを扱う。"],
  ["nextBoostedAttack", ["next basic attack becomes", "next auto attack", "boosted attack remain", "remain readied until used", "after using a move", "next boosted attack"], "次の通常攻撃または強化攻撃を準備する。"],
  ["boostedAttackCycle", ["every third attack", "after a set amount of time passes", "becomes a boosted attack"], "通常攻撃回数により強化攻撃になる。"],
  ["hpThreshold", ["50% max hp or below", "half hp or less", "hp is low", "30% or less"], "HP割合条件で発動する。"],
  ["hpReferenceDamage", ["missing hp", "remaining hp", "max hp damage", "maximum hp damage", "lower the enemies remaining hp"], "現在HP・最大HP・減少HPなどを参照する。"],
  ["wildPokemonRule", ["wild pokémon", "wild pokemon"], "野生ポケモン限定の処理を持つ。"],
  ["formChange", ["forme", "form", "stance", "mode", "mega evolution", "mega evolve", "changes to"], "フォーム・モード・構えを変化させる。"],
  ["reuseOrSecondActivation", ["may be used again", "used again", "second activation", "this move can be used again", "recast"], "再使用・派生・2段目を持つ。"],
  ["cloneOrDecoy", ["substitute doll", "copy", "copies", "clone", "decoy", "illusory"], "分身、コピー、身代わりなどを生成する。"],
  ["attachToAlly", ["attach", "attached", "dashes to the designated ally", "teammate"], "味方へ付着または移動する。"],
  ["wallOrTerrain", ["wall", "terrain", "grass", "obstacles"], "壁・地形・草むらなどと相互作用する。"],
  ["koAssistTrigger", ["knocks out", "ko", "assist"], "KOまたはアシストで発動する。"],
  ["criticalGuaranteedOrDisabled", ["cannot land critical hits", "guaranteed critical", "always a critical hit", "always critical", "can critically strike"], "急所確定または急所不可などを持つ。"],
  ["lifestealOrDamageHeal", ["lifesteal", "damage dealt with"], "与ダメージに応じて回復する。"],
  ["maxHpChange", ["maximum hp buffed", "max hp increase", "maximum hp increased", "max hp shield"], "最大HPを変化させる。"],
  ["cleanse", ["cleansing", "cleanse", "removes all debuffs", "removes debuffs"], "状態異常や低下効果を解除する。"],
];

function splitSentences(text) {
  return clean(text).split(/(?<=[.!?])\s+|;\s+/).map(clean).filter(Boolean);
}

function evidenceFor(text, words) {
  const lowerText = clean(text).toLowerCase();
  const sentences = splitSentences(text);
  const matches = sentences.filter((sentence) => {
    const lowerSentence = sentence.toLowerCase();
    return words.some((word) => lowerSentence.includes(word));
  });
  return matches.find((sentence) => /\d/.test(sentence)) || matches[0] || lowerText.slice(0, 240);
}

function stateReasons(type) {
  const reasons = [];
  if (["stackOrMark"].includes(type)) reasons.push("targetOrSelfStack");
  if (
    [
      "burn",
      "poison",
      "paralysis",
      "sleep",
      "freeze",
      "stun",
      "immobilize",
      "bind",
      "slow",
      "attackSpeedDown",
      "movementSpeedUp",
      "attackSpeedUp",
      "criticalRateUp",
      "attackStatChange",
      "defenseStatChange",
      "damageDealtChange",
      "damageReduction",
      "shield",
      "damageOverTime",
      "delayedDamage",
      "fieldArea",
      "cloneOrDecoy",
      "hindranceResistance",
      "invincible",
      "unstoppable",
      "untargetableOrStealth",
      "cleanse",
    ].includes(type)
  ) {
    reasons.push("durationOrBuffDebuff");
  }
  if (["nextBoostedAttack", "boostedAttackCycle", "reuseOrSecondActivation", "cooldownReduction", "cooldownReset"].includes(type)) {
    reasons.push("actionOrderOrCooldown");
  }
  if (["hpThreshold", "hpReferenceDamage", "healing", "lifestealOrDamageHeal", "maxHpChange"].includes(type)) reasons.push("hpState");
  if (["wildPokemonRule"].includes(type)) reasons.push("targetType");
  if (["formChange"].includes(type)) reasons.push("formOrMode");
  if (["koAssistTrigger"].includes(type)) reasons.push("koAssistEvent");
  return [...new Set(reasons)];
}

function inferTarget(type, evidence) {
  if (/ally|allies|teammate/i.test(evidence)) return "ally";
  if (
    ["hpThreshold", "movementSpeedUp", "attackSpeedUp", "criticalRateUp", "formChange", "unstoppable", "invincible", "hindranceResistance", "shield", "healing", "cleanse"].includes(type) &&
    /^(becomes|become|gains|gain|increases|buffs?:|restores|recovers|heals|cleansing|cleanse)/i.test(evidence)
  ) {
    return "self";
  }
  if (/enemy|enemies|opposing|target/i.test(evidence)) return "enemy";
  if (["fieldArea", "wallOrTerrain"].includes(type)) return "area";
  if (["hpThreshold", "movementSpeedUp", "attackSpeedUp", "criticalRateUp", "formChange", "unstoppable", "invincible", "hindranceResistance", "shield", "healing", "cleanse"].includes(type)) return "self";
  return "unconfirmed";
}

function inferHolder(type, evidence) {
  if (["hpThreshold", "movementSpeedUp", "attackSpeedUp", "criticalRateUp", "nextBoostedAttack", "boostedAttackCycle", "formChange", "cloneOrDecoy", "attachToAlly", "unstoppable", "invincible", "hindranceResistance", "cleanse"].includes(type)) return "self";
  if (/ally|allies|teammate/i.test(evidence)) return "ally";
  if (/target|enemy|opposing/i.test(evidence)) return "target";
  if (["fieldArea", "wallOrTerrain"].includes(type)) return "field";
  return "unconfirmed";
}

function extractEffects(text, sourceId, trigger, rsb, mode) {
  const effects = [];
  const lowerText = text.toLowerCase();
  const seen = new Set();
  for (const [type, words, summary] of effectRules) {
    if (!words.some((word) => lowerText.includes(word))) continue;
    if (type === "stackOrMark" && /stacks? with/i.test(text) && !/(cinder|counter|gauge|mark|sweet gauge|boost count|up to \d+ stacks?)/i.test(text)) continue;
    if (seen.has(type)) continue;
    seen.add(type);
    const evidence = evidenceFor(text, words);
    const reasons = stateReasons(type);
    effects.push({
      effectId: `${sourceId}__${String(effects.length + 1).padStart(2, "0")}__${type}`,
      effectType: type,
      summary,
      trigger,
      conditions: [],
      holder: inferHolder(type, evidence),
      target: inferTarget(type, evidence),
      perTarget: !["unstoppable", "invincible", "hindranceResistance", "movementSpeedUp", "attackSpeedUp", "criticalRateUp", "hpThreshold", "shield", "healing", "damageReduction", "cleanse"].includes(type) && /target|enemy|opposing pokémon|opposing pokemon|enemies hit/i.test(evidence),
      durationSeconds: type === "attackStatChange" && /decreased by \d+% for 2s/i.test(text) ? 2 : duration(evidence),
      cooldownSeconds: cooldown(evidence),
      stacking: type === "stackOrMark" ? "stack/mark details require human review" : null,
      consumption: /consume|consumes|consumed/i.test(evidence) ? "consumes described resource" : null,
      damageFormula: ["hpReferenceDamage", "damageOverTime"].includes(type) ? formulaFromRsb(rsb, mode) : null,
      calculationRelevance: ["unstoppable", "invincible", "untargetableOrStealth", "hindranceResistance", "fieldArea", "attachToAlly", "wallOrTerrain", "koAssistTrigger", "criticalGuaranteedOrDisabled"].includes(type) ? "fullBattleSimulation" : "futureActionOrderCalculation",
      requiresActionOrder: ["nextBoostedAttack", "boostedAttackCycle", "cooldownReduction", "cooldownReset", "reuseOrSecondActivation", "stackOrMark", "hpReferenceDamage"].includes(type),
      requiresTimeTracking: Boolean(duration(evidence) || ["burn", "poison", "damageOverTime", "fieldArea", "shield", "slow", "attackSpeedDown", "movementSpeedUp", "attackSpeedUp", "criticalRateUp", "attackStatChange", "defenseStatChange", "damageReduction", "invincible", "unstoppable", "untargetableOrStealth", "hindranceResistance", "cloneOrDecoy", "cleanse"].includes(type)),
      requiresBattleState: reasons.length > 0,
      battleStateReasons: reasons,
      sourceEvidence: evidence,
      codexInterpretation: `${summary} 原文証拠: ${evidence}`,
      confirmationStatus: "unconfirmed",
      unconfirmedPoints: ["原文だけでは発動順、同時発動順、丸め順は未確認。"],
    });
  }
  return effects;
}

function baseActionFromText(text, rsb, mode) {
  const lowerText = text.toLowerCase();
  const damageFormula = formulaFromRsb(rsb, mode);
  return {
    hasDirectDamage: Boolean(damageFormula) || /\bdamag/.test(lowerText),
    damageFormula,
    hasMovement: /(dash|leap|jump|teleport|warp|move forward|moves forward|lunge|charge forward|charges forward)/.test(lowerText),
    movementType: /(teleport|warp)/.test(lowerText)
      ? "teleportOrWarp"
      : /(dash|lunge|charge forward|charges forward)/.test(lowerText)
        ? "dash"
        : /(leap|jump)/.test(lowerText)
          ? "jumpOrLeap"
          : null,
    notes: "直接ダメージと単純移動はbaseActionへ保存し、特殊効果件数には含めない。",
  };
}

function sourceTypeOf(skill) {
  if (skill.ability === "Passive") return "passive";
  if (skill.ability === "Basic") return "normalAttack";
  if (skill.ability === "Unite Move") return "uniteMove";
  return "initialMove";
}

function makeSource({ pokemon, name, sourceType, sourceId, jsonPath, parentName = null, learnLevel = null, upgradeLevel = null, isPlus = false, rawName = null, text, rsb = null, mode = "base" }) {
  const trigger =
    sourceType === "passive"
      ? "passive condition"
      : sourceType === "normalAttack" || sourceType === "boostedAttack"
        ? "normal attack or boosted attack"
        : sourceType === "uniteMove"
          ? "unite move use or hit"
          : sourceType === "uniteBuff"
            ? "unite buff active"
            : "move use or hit";
  const originalDescription = clean(text) || "No English description available in Unite-DB JSON.";
  const specialEffects = extractEffects(originalDescription, sourceId, trigger, rsb, mode);
  return {
    source: {
      sourceType,
      sourceId,
      name,
      rawName: rawName || name,
      parentName,
      learnLevel,
      upgradeLevel,
      isPlus,
      originalDescription,
      translatedDescription: specialEffects.length
        ? `機械要約: ${name} は ${specialEffects.map((effect) => effect.summary.replace(/。$/, "")).join("、")}。`
        : `機械要約: ${name} には、直接ダメージや単純移動以外の特殊効果を検出していません。`,
      confirmationStatus: "unconfirmed",
      sourceIds: sourceIdsForPokemon(pokemon.display_name),
      jsonPath,
    },
    baseAction: baseActionFromText(originalDescription, rsb, mode),
    specialEffects,
    humanReview: {
      reviewStatus: "notReviewed",
      reviewMemoId: `${slug(pokemon.display_name)}__${sourceId}`,
      correctionNotes: "",
    },
  };
}

function enumerateSources(pokemon) {
  const entries = [];
  const seen = new Set();
  const add = (entry) => {
    if (seen.has(entry.source.sourceId)) return;
    seen.add(entry.source.sourceId);
    entries.push(entry);
  };

  (pokemon.skills || []).forEach((skill, index) => {
    const jsonPath = `skills[${index}]`;
    const sourceType = sourceTypeOf(skill);
    if (sourceType === "normalAttack") {
      add(
        makeSource({
          pokemon,
          name: skill.name,
          sourceType: "normalAttack",
          sourceId: `${slug(skill.name)}-basic`,
          jsonPath,
          text: [rsbText(skill.rsb), skill.description].filter(Boolean).join(" "),
          rsb: skill.rsb,
        }),
      );
      add(
        makeSource({
          pokemon,
          name: `${skill.name} Boosted`,
          rawName: skill.name,
          sourceType: "boostedAttack",
          sourceId: `${slug(skill.name)}-boosted`,
          jsonPath: `${jsonPath}.boosted_rsb`,
          parentName: skill.name,
          text: [rsbText(skill.boosted_rsb), skill.description].filter(Boolean).join(" "),
          rsb: skill.boosted_rsb || skill.rsb,
        }),
      );
    } else if (sourceType === "uniteMove") {
      add(
        makeSource({
          pokemon,
          name: skill.name,
          sourceType,
          sourceId: slug(skill.name),
          jsonPath,
          learnLevel: skill.level || null,
          text: [rsbText(skill.rsb), skill.description].filter(Boolean).join(" "),
          rsb: skill.rsb,
        }),
      );
      if (hasText(skill.buffs)) {
        add(
          makeSource({
            pokemon,
            name: `${skill.name} Unite Buff`,
            rawName: "Unite Buff",
            sourceType: "uniteBuff",
            sourceId: `${slug(skill.name)}-unite-buff`,
            jsonPath: `${jsonPath}.buffs`,
            parentName: skill.name,
            learnLevel: skill.level || null,
            text: [`Buffs: ${skill.buffs}`, skill.buff_duration ? `Buff duration: ${skill.buff_duration}` : ""].filter(Boolean).join(" "),
          }),
        );
      }
    } else {
      add(
        makeSource({
          pokemon,
          name: skill.name,
          sourceType,
          sourceId: slug(skill.name),
          jsonPath,
          text: [rsbText(skill.rsb), skill.description].filter(Boolean).join(" "),
          rsb: skill.rsb,
        }),
      );
    }

    (skill.upgrades || []).forEach((upgrade, upgradeIndex) => {
      const upgradePath = `${jsonPath}.upgrades[${upgradeIndex}]`;
      add(
        makeSource({
          pokemon,
          name: upgrade.name,
          sourceType: "moveChoice",
          sourceId: slug(upgrade.name),
          jsonPath: upgradePath,
          parentName: skill.name,
          learnLevel: upgrade.level1 || null,
          upgradeLevel: upgrade.level2 || null,
          text: [rsbText(upgrade.rsb), upgrade.description1].filter(Boolean).join(" "),
          rsb: upgrade.rsb,
        }),
      );
      if (hasPlusText(upgrade)) {
        add(
          makeSource({
            pokemon,
            name: `${upgrade.name}+`,
            rawName: upgrade.name,
            sourceType: "movePlus",
            sourceId: `${slug(upgrade.name)}-plus`,
            jsonPath: `${upgradePath}.description2/enhanced`,
            parentName: upgrade.name,
            learnLevel: upgrade.level1 || null,
            upgradeLevel: upgrade.level2 || null,
            isPlus: true,
            text: [rsbText(upgrade.rsb, "plus"), upgrade.description2].filter(Boolean).join(" "),
            rsb: upgrade.rsb,
            mode: "plus",
          }),
        );
      }
    });
  });

  return entries;
}

function expectedSources(pokemon) {
  return enumerateSources(pokemon).map((entry) => ({
    name: entry.source.name,
    sourceType: entry.source.sourceType,
    sourceId: entry.source.sourceId,
    jsonPath: entry.source.jsonPath,
    parentName: entry.source.parentName,
  }));
}

function makePokemonSurvey(pokemon) {
  const sourceEntries = enumerateSources(pokemon);
  const sourceList = sourceEntries.map((entry) => ({
    pokemonName: pokemon.display_name,
    pokemonId: slug(pokemon.display_name),
    sourceId: entry.source.sourceId,
    moveName: entry.source.name,
    sourceType: entry.source.sourceType,
    learnLevel: entry.source.learnLevel,
    upgradeLevel: entry.source.upgradeLevel,
    parentName: entry.source.parentName,
    isPlus: entry.source.isPlus,
    originalDescription: entry.source.originalDescription,
    jsonPath: entry.source.jsonPath,
  }));
  return {
    schemaVersion: "mechanics-effects-survey-v3.0",
    researchDate,
    pokemonId: slug(pokemon.display_name),
    pokemonName: pokemon.display_name,
    role: pokemon.tier || null,
    range: pokemon.tags || null,
    damageType: pokemon.damage_type || null,
    researchStatus: "draft",
    confirmationStatus: "unconfirmed",
    sourceIds: sourceIdsForPokemon(pokemon.display_name),
    sources: sourceCatalog,
    sourceList,
    expectedSourceList: expectedSources(pokemon),
    missingSources: [],
    sourceEntries,
    summary: {
      sourceCount: sourceEntries.length,
      specialEffectCount: sourceEntries.reduce((total, entry) => total + entry.specialEffects.length, 0),
      zeroSpecialEffectSourceCount: sourceEntries.filter((entry) => entry.specialEffects.length === 0).length,
      missingSourceCount: 0,
    },
  };
}

function validate(surveys, allData, v2Inventory) {
  const errors = [];
  const warnings = [];
  if (surveys.length !== allData.length) errors.push(`Pokemon file count mismatch: ${surveys.length}/${allData.length}`);

  for (const survey of surveys) {
    const sourceTypes = new Set(survey.sourceEntries.map((entry) => entry.source.sourceType));
    if (!sourceTypes.has("passive")) errors.push(`${survey.pokemonName}: passive missing`);
    if (!sourceTypes.has("normalAttack")) errors.push(`${survey.pokemonName}: normalAttack missing`);
    if (!sourceTypes.has("boostedAttack")) errors.push(`${survey.pokemonName}: boostedAttack missing`);
    if (!sourceTypes.has("uniteMove")) errors.push(`${survey.pokemonName}: uniteMove missing`);
    const ids = survey.sourceEntries.map((entry) => entry.source.sourceId);
    const duplicated = ids.filter((id, index) => ids.indexOf(id) !== index);
    if (duplicated.length > 0) errors.push(`${survey.pokemonName}: duplicate sourceId ${[...new Set(duplicated)].join(", ")}`);
  }

  const cinderace = surveys.find((survey) => survey.pokemonName === "Cinderace");
  if (!cinderace) {
    errors.push("Cinderace survey missing");
  } else {
    const cinderaceNames = cinderace.sourceEntries.map((entry) => entry.source.name);
    const required = [
      "Blaze",
      "Attack",
      "Attack Boosted",
      "Ember",
      "Low Sweep",
      "Pyro Ball",
      "Pyro Ball+",
      "Blaze Kick",
      "Blaze Kick+",
      "Flame Charge",
      "Flame Charge+",
      "Feint",
      "Feint+",
      "Blazing Bicycle Kick",
    ];
    for (const name of required) {
      if (!cinderaceNames.includes(name)) errors.push(`Cinderace required source missing: ${name}`);
    }
  }

  const sourceCount = surveys.reduce((total, survey) => total + survey.sourceEntries.length, 0);
  if (v2Inventory && sourceCount <= v2Inventory.sourceEntryCount) {
    warnings.push(`v3 source count did not increase over v2: ${sourceCount}/${v2Inventory.sourceEntryCount}`);
  }

  return { errors, warnings, missingSources: [] };
}

function categoryCounts(effects) {
  const count = (predicate) => effects.filter(predicate).length;
  return {
    burn: count((effect) => effect.effectType === "burn"),
    otherStatusConditions: count((effect) => ["paralysis", "sleep", "freeze", "stun", "immobilize", "bind", "knockUp", "knockBack", "pull"].includes(effect.effectType)),
    damageOverTime: count((effect) => effect.effectType === "damageOverTime"),
    stackOrMark: count((effect) => effect.effectType === "stackOrMark"),
    healing: count((effect) => effect.effectType === "healing" || effect.effectType === "lifestealOrDamageHeal"),
    shield: count((effect) => effect.effectType === "shield"),
    nextNormalAttackBoost: count((effect) => effect.effectType === "nextBoostedAttack"),
    hpCondition: count((effect) => effect.effectType === "hpThreshold"),
    hpReferenceDamage: count((effect) => effect.effectType === "hpReferenceDamage"),
    cooldownChange: count((effect) => effect.effectType === "cooldownReduction" || effect.effectType === "cooldownReset"),
    formChange: count((effect) => effect.effectType === "formChange"),
    actionOrderRequired: count((effect) => effect.requiresActionOrder),
    timeTrackingRequired: count((effect) => effect.requiresTimeTracking),
    battleStateRequired: count((effect) => effect.requiresBattleState),
  };
}

function loadJsonIfExists(file) {
  try {
    return JSON.parse(fs.readFileSync(file, "utf8"));
  } catch {
    return null;
  }
}

function makeInventory(surveys, allData, validation) {
  const v2 = loadJsonIfExists(path.join(docsRoot, "special-mechanics-inventory-v2.json"));
  const sourceEntries = surveys.flatMap((survey) =>
    survey.sourceList.map((source) => ({
      ...source,
      specialEffectCount: survey.sourceEntries.find((entry) => entry.source.sourceId === source.sourceId)?.specialEffects.length || 0,
    })),
  );
  const effects = surveys.flatMap((survey) =>
    survey.sourceEntries.flatMap((entry) =>
      entry.specialEffects.map((effect) => ({
        pokemon: survey.pokemonName,
        pokemonId: survey.pokemonId,
        sourceName: entry.source.name,
        sourceType: entry.source.sourceType,
        sourceId: entry.source.sourceId,
        jsonPath: entry.source.jsonPath,
        parentName: entry.source.parentName,
        learnLevel: entry.source.learnLevel,
        upgradeLevel: entry.source.upgradeLevel,
        isPlus: entry.source.isPlus,
        ...effect,
      })),
    ),
  );
  const v2Ids = new Set((v2?.sourceEntries || []).map((source) => `${source.pokemonId || slug(source.pokemon || "")}::${source.sourceId}`));
  const addedSourcesFromV2 = sourceEntries.filter((source) => !v2Ids.has(`${source.pokemonId}::${source.sourceId}`));

  return {
    schemaVersion: "special-mechanics-inventory-v3.0",
    researchDate,
    scope: "Complete source enumeration first, then effect-level extraction. Includes nested upgrade choices, Plus/enhanced effects, boosted basic attacks, and Unite Buffs.",
    sourceCatalog,
    totalPokemonInUniteDb: allData.length,
    pokemonCount: surveys.length,
    sourceEntryCount: sourceEntries.length,
    specialEffectCount: effects.length,
    zeroSpecialEffectSourceCount: sourceEntries.filter((source) => source.specialEffectCount === 0).length,
    v2Comparison: {
      v2SourceEntryCount: v2?.sourceEntryCount ?? null,
      v2SpecialEffectCount: v2?.specialEffectCount ?? null,
      addedSourceCount: addedSourcesFromV2.length,
      note: "v3 separates boosted basic attacks, move choices, Plus/enhanced effects, and Unite Buffs. Some sourceIds intentionally differ from v2.",
    },
    categoryCounts: categoryCounts(effects),
    pokemonSourceCounts: surveys.map((survey) => ({
      pokemonName: survey.pokemonName,
      pokemonId: survey.pokemonId,
      sourceCount: survey.summary.sourceCount,
      specialEffectCount: survey.summary.specialEffectCount,
      zeroSpecialEffectSourceCount: survey.summary.zeroSpecialEffectSourceCount,
      missingSourceCount: survey.summary.missingSourceCount,
    })),
    validation: {
      errors: validation.errors,
      warnings: validation.warnings,
      missingSourceCount: validation.missingSources.length,
      missingSources: validation.missingSources,
    },
    sourceEntries,
    addedSourcesFromV2,
    effects,
  };
}

function writeDocs(inventory) {
  const matrix = [
    "# 特殊効果 横断マトリクス v3",
    "",
    "v3は、Unite-DB `pokemon.json` の `skills[]`、`skills[].upgrades[]`、強化通常攻撃、Plus/Enhanced効果、Unite Buffを列挙してから、効果単位で特殊効果を抽出したドラフトです。",
    "",
    `調査日: ${researchDate}`,
    "出典: https://unite-db.com/pokemon.json",
    "",
    "## 集計",
    "",
    `- 対象ポケモン数: ${inventory.pokemonCount}`,
    `- 調査対象ソース数: ${inventory.sourceEntryCount}`,
    `- 特殊効果数: ${inventory.specialEffectCount}`,
    `- 特殊効果0件のソース数: ${inventory.zeroSpecialEffectSourceCount}`,
    `- 未取得技数: ${inventory.validation.missingSourceCount}`,
    `- v2から追加されたソース数: ${inventory.v2Comparison.addedSourceCount}`,
    "",
    "## ポケモンごとのソース数",
    "",
    "| ポケモン | ソース数 | 特殊効果数 | 未取得 |",
    "| --- | ---: | ---: | ---: |",
    ...inventory.pokemonSourceCounts.map((row) => `| ${row.pokemonName} | ${row.sourceCount} | ${row.specialEffectCount} | ${row.missingSourceCount} |`),
    "",
    "## 効果一覧",
    "",
    "| ポケモン | ソース | 種類 | Lv | Plus | 効果タイプ | 要約 | 対象 | 持続 | battleState理由 | 確認 |",
    "| --- | --- | --- | ---: | --- | --- | --- | --- | ---: | --- | --- |",
    ...inventory.effects.map((effect) => `| ${effect.pokemon} | ${String(effect.sourceName).replace(/\|/g, "/")} | ${effect.sourceType} | ${effect.learnLevel ?? ""} | ${effect.isPlus ? "yes" : ""} | ${effect.effectType} | ${effect.summary.replace(/\|/g, "/")} | ${effect.target} | ${effect.durationSeconds ?? ""} | ${effect.battleStateReasons.join(", ")} | ${effect.confirmationStatus} |`),
    "",
  ].join("\n");
  fs.writeFileSync(path.join(docsRoot, "special-mechanics-matrix-v3.md"), `${matrix}\n`, "utf8");

  const designNotes = [
    "# 特殊効果 設計メモ v3",
    "",
    "v3は、v2で漏れていたレベルアップ後の派生技・上位技・Plus効果を含めるため、最初に「調査対象ソース一覧」を作ってから特殊効果を抽出しています。",
    "",
    "## v3で変えたこと",
    "",
    "- `skills[]` だけでなく `skills[].upgrades[]` を必ず列挙する。",
    "- 通常攻撃と強化通常攻撃を別ソースに分ける。",
    "- 派生技の `description2` / `enhanced_true_desc` がある場合は `技名+` としてPlusソースを作る。",
    "- Unite Buffをユナイト技本体とは別ソースとして残す。",
    "- 各ソースに `jsonPath` を持たせ、どこから取ったか確認できるようにする。",
    "",
    "## v2との差分",
    "",
    `- v2ソース数: ${inventory.v2Comparison.v2SourceEntryCount}`,
    `- v3ソース数: ${inventory.sourceEntryCount}`,
    `- v2から追加されたソース数: ${inventory.v2Comparison.addedSourceCount}`,
    `- v3特殊効果数: ${inventory.specialEffectCount}`,
    "",
    "## 人間確認の優先順位",
    "",
    "1. 各ポケモンの `sourceList` に技漏れがないか確認する。",
    "2. Plus効果が本体技と別ソースで分かれていることを確認する。",
    "3. 強化通常攻撃の説明・式が通常攻撃と分離できているか確認する。",
    "4. `specialEffects: []` のソースが本当に直接ダメージ・単純移動だけか確認する。",
    "5. スタック、マーク、HP参照、再使用、派生攻撃は実装前に個別確認する。",
    "",
    "## 既知の限界",
    "",
    "- Unite-DBの公開JSONに存在する範囲の調査であり、ゲーム内の隠し仕様までは確定しない。",
    "- 日本語要約は公式訳ではない。",
    "- 機械抽出なので、効果タイプの過検出・漏れは残りうる。",
    "- `confirmationStatus` は原則 `unconfirmed` で、アプリ採用には人間確認が必要。",
  ].join("\n");
  fs.writeFileSync(path.join(docsRoot, "special-mechanics-design-notes-v3.md"), `${designNotes}\n`, "utf8");
}

async function main() {
  const allData = JSON.parse(await get(sourceUrl));
  const surveys = allData.map(makePokemonSurvey);
  const v2 = loadJsonIfExists(path.join(docsRoot, "special-mechanics-inventory-v2.json"));
  const validation = validate(surveys, allData, v2);
  const inventory = makeInventory(surveys, allData, validation);

  ensureDir(surveyRoot);
  for (let index = 0; index < surveys.length; index += 10) {
    const batchDir = path.join(surveyRoot, `batch-${String(Math.floor(index / 10) + 1).padStart(2, "0")}`);
    ensureDir(batchDir);
    for (const survey of surveys.slice(index, index + 10)) {
      writeJson(path.join(batchDir, `${survey.pokemonId}-effects.json`), survey);
    }
  }

  writeJson(path.join(docsRoot, "special-mechanics-inventory-v3.json"), inventory);
  writeDocs(inventory);

  const cinderace = surveys.find((survey) => survey.pokemonName === "Cinderace");
  console.log(JSON.stringify({
    pokemon: surveys.length,
    sources: inventory.sourceEntryCount,
    effects: inventory.specialEffectCount,
    zeroSpecialSources: inventory.zeroSpecialEffectSourceCount,
    missingSources: inventory.validation.missingSourceCount,
    validation: {
      errors: inventory.validation.errors.length,
      warnings: inventory.validation.warnings.length,
    },
    cinderace: cinderace.sourceList.map((source) => source.moveName),
  }, null, 2));
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
