// CSS imports
import './PokemonList.css';
import Pokemon from '../Pokemon/Pokemon';
import usePokemonList from '../../hooks/usePokemonList';

function PokemonList(){

    const [setPokemonListState,pokemonListState] = usePokemonList();

    return (
        <div className='pokemon-list-wrapper'>
            <div >
                <h1>Pokemon List</h1>
            </div>
            <div className='page-controls'>
                <button
                    onClick={()=>setPokemonListState({...pokemonListState,pokedexUrl:pokemonListState.prevUrl})}
                >
                    Prev
                </button>

                <button
                    onClick={()=>setPokemonListState({...pokemonListState,pokedexUrl:pokemonListState.nextUrl})}
                >
                    Next
                </button>
            </div>
            <div className='pokemon-list'>
                {pokemonListState.pokemonList.map(pokemon=> <Pokemon key={pokemon.id} name={pokemon.name} url={pokemon.image} id={pokemon.id}/>)}
            </div>
        </div>
    );

}

export default PokemonList;