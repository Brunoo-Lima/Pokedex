import { createContext, useEffect, useState } from 'react';
import { getPokemon, getPokemonData } from './api';

export const UserContext = createContext();

export const Provider = ({ children }) => {
  const [pokemons, setPokemons] = useState([]);
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(false);

  const pokePerPage = 25;

  async function fetchPokemon() {
    setLoading(true);
    const data = await getPokemon(pokePerPage, pokePerPage * page);
    const promises = data.results.map(async (pokemon) => {
      return await getPokemonData(pokemon.url);
    });
    const results = await Promise.all(promises);
    setPokemons(results);
    setLoading(false);
    setTotalPages(Math.ceil(data.count / pokePerPage));
  }

  useEffect(() => {
    fetchPokemon();
  }, [page]);

  const value = {
    pokemons,
    setPokemons,
    fetchPokemon,
    page,
    setPage,
    totalPages,
    loading,
    setLoading,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
