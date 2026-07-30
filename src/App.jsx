import { Routes, Route, Link } from 'react-router';
import Header from './components/Header';
import { useState, useEffect } from 'react';
import HomePage from './pages/home';
import AboutPage from './pages/about';
import AboutDetails from './pages/about-details';

const API_URL = import.meta.env.VITE_API_URL;

const App = () => {
  // I want to get list of pokemon right, My thinking is to create create a list and get that
  const [pokemons, setPokemons] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('');
  const [limit, setLimit] = useState(10);
  const [sortBy, setSortBy] = useState('All');
  // Now I'll start fetching the data

  // My Idea is to take an array and just start fetching the pokemons one after another.

  useEffect(() => {
    // Here I will run a try catch to get pokemon
    const fetchPokemons = async () => {
      try {
        // it stores the promises and not pokemon
        const requests = [];

        for (let i = 1; i <= limit; i++) {
          // This array will store Promises, not Pokémon.
          requests.push(
            fetch(`${API_URL}${i}`).then((res) => {
              if (!res.ok) throw new Error('Error while fetching the data');
              return res.json();
            }),
          );
        }
        // Each iteration immediately starts a fetch request and stJores its Promise.

        // After the loop, requests looks conceptually like:

        // [
        //   Promise,
        //   Promise,
        //   Promise,
        //   ...
        // ]

        // This waits until every Promise has finished.
        const pokemonDetails = await Promise.all(requests);
        setPokemons(pokemonDetails);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchPokemons();
  }, [limit]);

  return (
    <>
      <Header />
      <Routes>
        <Route
          path='/'
          element={
            <HomePage
              error={error}
              loading={loading}
              pokemons={pokemons}
              filter={filter}
              setFilter={setFilter}
              limit={limit}
              setLimit={setLimit}
              sortBy={sortBy}
              setSortBy={setSortBy}
            />
          }
        />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/pokemon/:id' element={<AboutDetails />} />
        {/* <Route path='*' element={<AboutPage />} /> */}
      </Routes>
    </>
  );
};

export default App;
