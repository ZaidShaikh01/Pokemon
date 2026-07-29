import pokemonImg from '../assets/pickachu.png';
import PokemonCard from '../components/PokemonCard';
import InputFilter from '../components/FilterInput';
import LimitSelctor from '../components/LimitSelector';
import SortSelector from '../components/SortSelector';

const HomePage = ({
  pokemons,
  error,
  loading,
  filter,
  setFilter,
  limit,
  setLimit,
  sortBy,
  setSortBy,
}) => {
  //Creating a new Filtered list with name matching the input && sort by button
  const filterList = pokemons.filter((pokemon) => {
    if (
      pokemon.name.toLowerCase().includes(filter.toLowerCase()) &&
      sortBy.toLowerCase() === 'all'
    ) {
      return pokemon;
    } else {
      return (
        pokemon.name.toLowerCase().includes(filter.toLowerCase()) &&
        pokemon.types[0].type.name.toLowerCase().includes(sortBy.toLowerCase())
      );
    }
  });

  

  return (
    // Add statments for if not loading and loading
    <div>
      <h1> 🌟 Pokemon Dash</h1>
      <div className='top-controls'>
        <InputFilter filter={filter} onFilterChange={setFilter} />
        <LimitSelctor limit={limit} setLimit={setLimit} />
        <SortSelector setSortBy={setSortBy} sortBy={sortBy} />
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
