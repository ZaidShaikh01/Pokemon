const PokemonCard = ({ pokemon }) => {
  return (
    <div className='pokemon-card'>
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
      <div className='ctrl-btn'>
        <button className='btn'>Previous</button>
        <button className='btn'>Next</button>
      </div>
    </div>
  );
};

export default PokemonCard;
