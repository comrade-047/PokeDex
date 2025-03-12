// Import CSS
import PokemonList from '../PokemonList/PokemonList';
import Search from '../Search/Search';
import './PokeDex.css'

function PokeDex(){

    return (
        <div className="pokedex-wrapper">
            <h1>POKEDEX</h1>
            <Search/>
            <PokemonList/>
        </div>
    );

}

export default PokeDex;