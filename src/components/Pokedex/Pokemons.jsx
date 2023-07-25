import React from 'react';

const Pokemons = (props) => {
  const { pokemon } = props;
  return (
    <li>
      <h4>{pokemon.name}</h4>
    </li>
  );
};

export default Pokemons;
