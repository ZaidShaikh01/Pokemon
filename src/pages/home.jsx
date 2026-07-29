import pokemonImg from '../assets/pickachu.png';
import PokemonCard from '../components/PokemonCard';
import InputFilter from '../components/FilterInput';
import LimitSelctor from '../components/LimitSelector';

const HomePage = ({
  pokemons,
  error,
  loading,
  filter,
  setFilter,
  limit,
  setLimit,
}) => {
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
        <LimitSelctor limit={limit} setLimit={setLimit} />
      </div>
      {loading && <p>Loading....</p>}
      {error && <p>{error}</p>}
      {!loading && !error && (
        <main className='pokemon-card-grid'>
          {/* Displaing the data using filterList */}
          {filterList.length > 0 ? (
            filterList.map((pokemon) => (
              <PokemonCard key={pokemon.id} pokemon={pokemon} />
            ))
          ) : (
            <p>There are no matches</p>
          )}
        </main>
      )}
    </div>
  );
};

export default HomePage;
