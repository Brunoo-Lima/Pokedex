import { useContext } from 'react';
import Pagination from '../Pagination';
import Pokemons from './Pokemons';
import { UserContext } from '../../UserContext';

const Pokedex = (props) => {
  const { pokemons } = props;
  const { page, setPage, totalPages } = useContext(UserContext);

  function onLeftClickHandler() {
    if (page > 0) {
      setPage(page - 1);
    }
  }

  function onRightClickHandler() {
    if (page + 1 != totalPages) {
      setPage(page + 1);
    }
  }

  return (
    <div>
      <div className="container">
        <div>
          <Pagination
            page={page + 1}
            totalPages={totalPages}
            onLeftClick={onLeftClickHandler}
            onRightClick={onRightClickHandler}
          />
        </div>
        <ul className="row justify-content-center">
          {pokemons &&
            pokemons.map((pokemon, index) => (
              <Pokemons key={index} pokemon={pokemon} />
            ))}
        </ul>
      </div>
    </div>
  );
};

export default Pokedex;
