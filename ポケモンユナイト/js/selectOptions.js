export function createLevelOptions(selectElement){

    for(let i = 1; i <= 15; i++){

        const option = document.createElement("option");

        option.value = i;
        option.textContent = i + ".lv";

        selectElement.appendChild(option);
    }
}

export function createPokemonOptions(selectElement, pokemonsList){

    pokemonsList.forEach(pokemon => {

        const option = document.createElement("option");

        option.value = pokemon.id;
        option.textContent = pokemon.name;

        selectElement.appendChild(option);
    });
}

export function createHitCountOptions(hitCountSelects){

    Object.values(hitCountSelects).forEach(select => {

        for(let i = 0; i <= 10; i++){

            const option = document.createElement("option");

            option.value = i;
            option.textContent = select === hitCountSelects.normalAttack
                ? i + "Hits"
                : i + "回";

            select.appendChild(option);
        }

        if(select !== hitCountSelects.normalAttack){
            select.value = 1;
        }
    });
}
