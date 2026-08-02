const AboutPage = () => {
  return (
    <div className='about-page'>
      <h1>About Page</h1>

      <main>
        <p className='description'>
          Pokémon Viewer is a React application that lets users browse and
          search Pokémon using data from the PokéAPI. The app displays official
          artwork, stats, abilities, types, and other information in a clean,
          responsive interface.
        </p>
        <ul className='features'>
            <h2>Features</h2>
          <li>Browse Pokémon by name or ID</li>
          <li>Search for Pokémon using a search bar</li>
          <li>View detailed information about each Pokémon</li>
          <li>Responsive design for mobile and desktop</li>
        </ul>
        <ul className='tech-stack'>
            <h2>Tech Stack</h2>
          <li>React</li>
          <li>PokéAPI</li>
          <li>JavaScript</li>
          <li>CSS</li>
        </ul>
        <p className='api'>
          This application uses the{' '}
          <a
            href='https://pokeapi.co/'
            target='_blank'
            rel='noopener noreferrer'
          >
            PokéAPI
          </a>{' '}
          to fetch Pokémon data. The API provides a wealth of information about
          Pokémon, including their stats, abilities, types, and more.
        </p>
        <p className='learning'>
          While building this project I learned: <br /> React components State
          management with useState <br /> Side effects with useEffect <br />{' '}
          Fetching data from APIs React Router <br /> Working with asynchronous
          JavaScript Managing themes with local storage
        </p>
      </main>
      <footer className='footer'>Version: 1.0.0 Built by: Zaid</footer>
    </div>
  );
};

export default AboutPage;
