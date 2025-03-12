import './PokemonDetails.css'

import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function PokemonDetails() {
    const { id } = useParams(); // the name here should be the same as what you have provided while declaring url in path
    const POKEMON_DETAILS_URL = "https://pokeapi.co/api/v2/pokemon/";
    const [pokemon, setPokemon] = useState(null); // Initialize as null to handle loading state

    async function downloadPokemon() {
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
        downloadPokemon();
    }, [id]); // Added 'id' as dependency to re-fetch when id changes

    // // Handling loading state or if the pokemon data is not yet available
    // if (!pokemon) {
    //     return <div>Loading...</div>;
    // }

    return (
        <>
            <h1 className='home-page'>
                <Link to={'/'} className='home-page'>
                    POKEDEX
                </Link>
            </h1>
            {pokemon &&<div className="pokemon-details-wrapper">
                <div className='pokemon-details-name'>
                    <h1>{pokemon.name.toUpperCase()}</h1>
                </div>
                <div className='pokemon-details-image'>
                    <img src={pokemon.image} alt={pokemon.name.toUpperCase()} />
                </div>
                <div className='pokemon-attr'>
                    <div>
                        Height: {pokemon.height} 
                    </div>
                    <div>
                    |
                    </div>
                    <div>
                    Weight: {pokemon.weight}
                    </div>
                </div>
                <div className='pokemon-type'>
                    <h1 className='type'>Type:</h1> {pokemon.types.map((t, index) => <span key={index} className='types'>{t.type.name}</span>)}
                </div>
            </div>}
        </>
    );
}

export default PokemonDetails;
