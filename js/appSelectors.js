export function findMoveByName(pokemon, skillName){
    let selectedMove;

    Object.values(pokemon.skill).forEach(skills => {

        const foundMove = skills.find(move => {

            return move.name === skillName;

        });

        if(foundMove){

            selectedMove = foundMove;
        }

    });

    return selectedMove;
}

export function getPokemonStatsAtLevel(pokemon, level){
    return pokemon.stats[level];
}

export function getEnemyStats(enemyPokemon, enemyLevel){
    return getPokemonStatsAtLevel(enemyPokemon, enemyLevel);
}

export function getHpFromStats(stats){
    return stats.hp;
}

export function getUniteMove(pokemon){
    return pokemon.skill[9][0];
}

export function findPokemonById(pokemonsList, pokemonId){
    return pokemonsList.find(pokemon => {

        return pokemon.id === pokemonId;

    });
}
