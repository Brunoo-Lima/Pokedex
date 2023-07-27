import { useContext } from 'react';
import Pagination from '../Pagination';
import Pokemons from './Pokemons';
import { UserContext } from '../../UserContext';
import Loading from '../utilities/Loading';

const Pokedex = (props) => {
  const { pokemons } = props;
  const { page, setPage, totalPages, loading } = useContext(UserContext);

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
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="container">
          <div className="row">
            <Pagination
              page={page + 1}
              totalPages={totalPages}
              onLeftClick={onLeftClickHandler}
              onRightClick={onRightClickHandler}
            />
          </div>
          <ul className="row justify-content-center m-auto px-0">
            {pokemons &&
              pokemons.map((pokemon, index) => (
                <Pokemons key={index} pokemon={pokemon} />
              ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default Pokedex;
