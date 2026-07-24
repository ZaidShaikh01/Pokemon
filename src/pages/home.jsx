import pokemonImg from '../assets/pickachu.png';
import PokemonCard from '../components/PokemonCard';
const HomePage = ({ pokemons, error, loading }) => {
  return (
    // Add statments for if not loading and loading
    <div>
      {loading && <p>Loading....</p>}
      {error && <p>{error}</p>}

      {!loading && !error && (
        <main className='pokemon-card-grid'>
          {pokemons.map((pokemon) => (
            <PokemonCard key={pokemon.id} pokemon={pokemon} />
          ))}
        </main>
      )}
    </div>
  );
};

export default HomePage;
