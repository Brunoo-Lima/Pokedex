import { useContext, useState } from 'react';
import { UserContext } from '../../UserContext';
import { searchPokemon } from '../../api';

const Input = () => {
  const [search, setSearch] = useState('');
  const { fetchPokemon, setPokemons } = useContext(UserContext);

  function onChangeSearch({ target }) {
    setSearch(target.value);
    if (target.value === 0) handleSearch(undefined);
  }

  async function handleSearch(pokemon) {
    if (!pokemon) return fetchPokemon();
    const result = await searchPokemon(pokemon);
    if (!result) {
      window.alert('Nenhum resultado encontrado! Digite novamente.');
    } else {
      setPokemons([result]);
    }
  }

  function onChangeSearchPokemon() {
    handleSearch(search);
  }

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          placeholder="Busca por nome ou id"
          aria-label="Busca por nome ou id"
          aria-describedby="btn-search"
          onChange={onChangeSearch}
          required
        />
        <button
          className="btn btn-outline-secondary"
          id="btn-search"
          onClick={onChangeSearchPokemon}
        >
          Button
        </button>
      </div>
    </form>
  );
};

export default Input;
