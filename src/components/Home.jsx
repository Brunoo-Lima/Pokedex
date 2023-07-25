import { useContext } from 'react';
import { UserContext } from '../UserContext';
import Pokedex from './Pokedex/Pokedex';

const Home = () => {
  const { pokemons } = useContext(UserContext);

  return (
    <div className="text-dark">
      <div>
        <Pokedex pokemons={pokemons} />
      </div>
    </div>
  );
};

export default Home;
