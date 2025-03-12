// CSS imports
import { Link } from 'react-router-dom';
import './Pokemon.css'

function Pokemon({name,url,id}){

    return (
        <Link to={`/pokemon/${id}`} className='pokemon-wrapper'>
            <div className='pokemon'>
                <div className='pokemon-name'>
                    {name.toUpperCase()}
                </div>

                <img
                    className='pokemon-image'
                    src={url}
                    alt={`pokemon-${name}-image`}
                />
            </div>
        </Link>
    );
}

export default Pokemon;