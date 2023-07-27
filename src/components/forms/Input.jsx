import { useContext, useState } from 'react';
import { UserContext } from '../../UserContext';
import { searchPokemon } from '../../api';
import { AiOutlineSearch } from 'react-icons/ai';

const Input = () => {
  const [search, setSearch] = useState('');
  const { fetchPokemon, pokemons, setPokemons, setLoading } =
    useContext(UserContext);

  function onChangeSearch({ target }) {
    setSearch(target.value);
    if (target.value === 0) handleSearch(undefined);
  }

  async function handleSearch(pokemon) {
    if (!pokemon) return fetchPokemon();
    const result = await searchPokemon(pokemon.toLowerCase());
    if (!result) {
      window.alert('Nenhum resultado encontrado! Digite novamente.');
    } else {
      setPokemons([result]);
    }
  }

  function onChangeSearchPokemon() {
    if (search != 0) handleSearch(search);
  }

  //outra forma de pesquisar
  // function pokemonFilter(name) {
  //   let filteredPokemon = [];
  //   if (name === '') {
  //     fetchPokemon();
  //   }
  //   for (let i in pokemons) {
  //     if (pokemons[i].name.includes(name)) {
  //       filteredPokemon.push(pokemons[i]);
  //     }
  //   }
  //   setPokemons(filteredPokemon);
  // }

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          placeholder="Busca por nome ou id"
          aria-label="Busca por nome ou id"
          aria-describedby="btn-search"
          // onChange={(e) => pokemonFilter(e.target.value)}
          onChange={onChangeSearch}
          required
        />
        <button
          className="btn btn-primary"
          id="btn-search"
          onClick={onChangeSearchPokemon}
        >
          <AiOutlineSearch />
        </button>
      </div>
    </form>
  );
};

export default Input;
