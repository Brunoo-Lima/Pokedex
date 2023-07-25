import { createContext, useEffect, useState } from 'react';
import { getPokemon, getPokemonData } from './api';

export const UserContext = createContext();

export const Provider = ({ children }) => {
  const [pokemons, setPokemons] = useState([]);

  async function fetchPokemon() {
    const data = await getPokemon();
    const promises = data.results.map(async (pokemon) => {
      return await getPokemonData(pokemon.url);
    });
    const results = await Promise.all(promises);
    setPokemons(results);
  }

  useEffect(() => {
    fetchPokemon();
  }, []);

  const value = { pokemons, setPokemons };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
