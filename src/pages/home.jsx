import { useState } from 'react';
import pokemonImg from '../assets/pickachu.png';
import PokemonCard from '../components/PokemonCard';
import InputFilter from '../components/FilterInput';

const HomePage = ({ pokemons, error, loading }) => {
  const [filter, setFilter] = useState('');

  //Creating a new Filtered list
  const filterList = pokemons.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(filter.toLowerCase()),
  );


  return (
    // Add statments for if not loading and loading
    <div>
      <h1> 🌟 Pokemon Dash</h1>
      <div className='top-controls'>
        <InputFilter filter={filter} onFilterChange={setFilter} />
      </div>
      {loading && <p>Loading....</p>}
      {error && <p>{error}</p>}
      {!loading && !error && (
        <main className='pokemon-card-grid'>
          {/* Displaing the data using filterList */}
          {filterList.map((pokemon) => (
            <PokemonCard key={pokemon.id} pokemon={pokemon} />
          ))}
        </main>
      )}
    </div>
  );
};

export default HomePage;
