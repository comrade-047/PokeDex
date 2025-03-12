import axios from "axios";
import { useEffect, useState } from "react";

function usePokemonDetails(id){

    const POKEMON_DETAILS_URL = "https://pokeapi.co/api/v2/pokemon/";
    const [pokemon, setPokemon] = useState(null); // Initialize as null to handle loading state

    async function downloadPokemon(id) {
        const response = await axios.get(POKEMON_DETAILS_URL + id);
        const pokemonData = response.data;
        console.log(pokemonData);

        setPokemon({
            name: pokemonData.name,
            height: pokemonData.height,
            weight: pokemonData.weight,
            types: pokemonData.types, 
            image: pokemonData.sprites.other.dream_world.front_default,
        });
    }

    useEffect(() => {
        downloadPokemon(id);
    }, [id]); // Added 'id' as dependency to re-fetch when id changes

    return [pokemon];

}

export default usePokemonDetails;