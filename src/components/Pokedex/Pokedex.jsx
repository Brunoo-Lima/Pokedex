import Pokemons from './Pokemons';

const Pokedex = (props) => {
  const { pokemons } = props;
  return (
    <div>
      <div>
        <ul>
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
