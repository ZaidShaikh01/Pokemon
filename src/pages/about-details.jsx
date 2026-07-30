import { useParams } from 'react-router';
import { useState, useEffect } from 'react';
import { Link } from 'react-router';
const API_URL = import.meta.env.VITE_API_URL;
const AboutDetails = () => {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  console.log(`${API_URL}${Number(id)}`);

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const res = await fetch(`${API_URL}${id}`);
        if (!res.ok) throw new Error('Error while fetching the pokemon');
        const data = await res.json();
        console.log(data);
        setPokemon(data);
        console.log('Pokemon: ', pokemon);
      } catch (e) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    };
    fetchPokemon();
  }, [id]);

  return (
    <div className='about-details-container'>
      <div className='pokemon-details-card'>
        {loading && <p>Loading....</p>}
        {error && <p>{error}</p>}
        {!loading && !error && (
          <div>
            <h3 className='pokemon-name'>{pokemon.name}</h3>
            <img
              src={pokemon.sprites.other.dream_world.front_default}
              alt='pokemon-img'
              className='pokemon-image'
            />
            <div className='pokemon-details'>
              <p>ID: {pokemon.id}</p>
              <p>Type: {pokemon.types[0].type.name}</p>
              <p>Height: {pokemon.height}</p>
              <p>Weight: {pokemon.weight}</p>
              <p>Ability: {pokemon.abilities[0].ability.name}</p>
              <p>Base Experience: {pokemon.base_experience}</p>
            </div>
            <Link to='/'> Back To Home</Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default AboutDetails;
