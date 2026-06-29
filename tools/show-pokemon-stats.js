import { pokemonsList } from "../js/pokemonData.js";

function printUsage() {
    console.log("Usage: node tools/show-pokemon-stats.js <PokemonId> [level]");
    console.log("Example: node tools/show-pokemon-stats.js Cinderace 15");
    console.log("Known ids:", pokemonsList.map((pokemon) => pokemon.id).join(", "));
}

const [, , pokemonId, levelArg] = process.argv;

if (!pokemonId || pokemonId === "--help" || pokemonId === "-h") {
    printUsage();
    process.exit(pokemonId ? 0 : 1);
}

const pokemon = pokemonsList.find((entry) => entry.id === pokemonId);

if (!pokemon) {
    console.error(`Pokemon not found: ${pokemonId}`);
    printUsage();
    process.exit(1);
}

if (!pokemon.stats) {
    console.error(`Stats not found for Pokemon: ${pokemonId}`);
    process.exit(1);
}

if (levelArg) {
    const level = Number(levelArg);

    if (!Number.isInteger(level) || level < 1 || level > 15) {
        console.error(`Invalid level: ${levelArg}`);
        printUsage();
        process.exit(1);
    }

    const stats = pokemon.stats[level];

    if (!stats) {
        console.error(`Stats not found for ${pokemonId} level ${level}`);
        process.exit(1);
    }

    console.log(JSON.stringify({
        id: pokemon.id,
        name: pokemon.name,
        level,
        stats
    }, null, 2));
    process.exit(0);
}

console.log(JSON.stringify({
    id: pokemon.id,
    name: pokemon.name,
    stats: pokemon.stats
}, null, 2));
