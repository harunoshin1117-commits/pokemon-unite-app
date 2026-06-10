const SAVED_BUILDS_STORAGE_KEY = "pokemon-unite-saved-builds";
export const BUILD_STATE_VERSION = 2;

function isSavedBuild(savedBuild){
    return (
        savedBuild &&
        typeof savedBuild === "object" &&
        typeof savedBuild.id === "string" &&
        typeof savedBuild.name === "string" &&
        savedBuild.buildState &&
        typeof savedBuild.buildState === "object" &&
        savedBuild.buildState.version === BUILD_STATE_VERSION &&
        typeof savedBuild.createdAt === "string" &&
        typeof savedBuild.updatedAt === "string"
    );
}

function createBuildId(){
    if(
        typeof crypto !== "undefined" &&
        typeof crypto.randomUUID === "function"
    ){
        return crypto.randomUUID();
    }

    return `${Date.now()}-${Math.random().toString(36).slice(2)}`;
}

export function getSavedBuilds(){
    try{
        const savedBuildsJson = localStorage.getItem(
            SAVED_BUILDS_STORAGE_KEY
        );

        if(!savedBuildsJson){
            return [];
        }

        const savedBuilds = JSON.parse(savedBuildsJson);

        if(!Array.isArray(savedBuilds)){
            return [];
        }

        const currentSavedBuilds = savedBuilds.filter(isSavedBuild);

        if(currentSavedBuilds.length !== savedBuilds.length){
            localStorage.setItem(
                SAVED_BUILDS_STORAGE_KEY,
                JSON.stringify(currentSavedBuilds)
            );
        }

        return currentSavedBuilds;
    }catch{
        return [];
    }
}

export function saveBuild(name, buildState){
    const savedBuilds = getSavedBuilds();
    const now = new Date().toISOString();
    const savedBuild = {
        id: createBuildId(),
        name,
        buildState,
        createdAt: now,
        updatedAt: now
    };

    savedBuilds.push(savedBuild);
    localStorage.setItem(
        SAVED_BUILDS_STORAGE_KEY,
        JSON.stringify(savedBuilds)
    );

    return savedBuild;
}

export function loadBuild(buildId){
    return getSavedBuilds().find(
        savedBuild => savedBuild.id === buildId
    ) || null;
}

export function deleteBuild(buildId){
    const savedBuilds = getSavedBuilds();
    const remainingBuilds = savedBuilds.filter(
        savedBuild => savedBuild.id !== buildId
    );

    if(remainingBuilds.length === savedBuilds.length){
        return false;
    }

    localStorage.setItem(
        SAVED_BUILDS_STORAGE_KEY,
        JSON.stringify(remainingBuilds)
    );

    return true;
}
