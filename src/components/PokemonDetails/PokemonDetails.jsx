import usePokemonDetails from '../../hooks/usePokemonDetails';
import './PokemonDetails.css'

import { Link,useParams } from "react-router-dom";

function PokemonDetails() {
    
    const { id } = useParams(); // the name here should be the same as what you have provided while declaring url in path
    
    const [pokemon] = usePokemonDetails(id);
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
