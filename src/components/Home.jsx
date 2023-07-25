import { useContext } from 'react';
import { UserContext } from '../UserContext';
import Pokedex from './Pokedex/Pokedex';

const Home = () => {
  const { pokemons } = useContext(UserContext);

  return (
    <div className="text-dark">
      <h1 className="text-center mt-5">Pokemons</h1>
      <div>
        <Pokedex pokemons={pokemons} />
      </div>
    </div>
  );
};

export default Home;
