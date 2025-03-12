// CSS imports
import './PokemonList.css';

import axios from 'axios';
import { useEffect, useState } from 'react';
import Pokemon from '../Pokemon/Pokemon';

function PokemonList(){
    const DEFAULT_URL = "https://pokeapi.co/api/v2/pokemon";
    const [pokemonList,setPokemonList] = useState([]);
    const [pokedexUrl,setPokedexUrl] = useState(DEFAULT_URL);
    const [nextUrl,setNextUrl] = useState(DEFAULT_URL);
    const [prevUrl,setPrevUrl] = useState(DEFAULT_URL);

    
    async function downloadPokemons(){
        const response = await axios.get(pokedexUrl?pokedexUrl:DEFAULT_URL);
        // console.log(response);
        const pokemonResult = response.data.results; // array of pokemons
        // console.log(pokemonResult);

        // setting prev and next Url
        setNextUrl(response.data.next);
        setPrevUrl(response.data.previous);

        const pokemonPromise = pokemonResult.map((pokemon)=> axios.get(pokemon.url)); // getting all the pokemons as an promise

        const pokemonListData = await axios.all(pokemonPromise); // axios.all resolves all the promises and returns and array 

        const pokemonFinalList = pokemonListData.map(pokemonData=>{
            const pokemon = pokemonData.data;
            return {
                id:pokemon.id,
                name:pokemon.name,
                image:pokemon.sprites.other.dream_world.front_default,
                types:pokemon.types
            }
        });

        setPokemonList(pokemonFinalList);
        
    }
    
    {/** use effect does the task every time the component re-renders if no dependency 
        array is passed and if empty dependency array is passed it runs only once
     */}
    useEffect(()=>{
        downloadPokemons();
    },[pokedexUrl]);

    return (
        <div className='pokemon-list-wrapper'>
            <div >
                <h1>Pokemon List</h1>
            </div>
            <div className='page-controls'>
                <button
                    onClick={()=>setPokedexUrl(prevUrl)}
                >
                    Prev
                </button>

                <button
                    onClick={()=>setPokedexUrl(nextUrl)}
                >
                    Next
                </button>
            </div>
            <div className='pokemon-list'>
                {pokemonList.map(pokemon=> <Pokemon key={pokemon.id} name={pokemon.name} url={pokemon.image} id={pokemon.id}/>)}
            </div>
        </div>
    );

}

export default PokemonList;