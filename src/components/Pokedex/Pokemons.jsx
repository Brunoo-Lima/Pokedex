/* eslint-disable react/prop-types */

const Pokemons = (props) => {
  const { pokemon } = props;
  return (
    <li className="col-lg-2 col-md-3 list-unstyled card m-2 p-2 text-center bg-light">
      <h4 className="text-capitalize">{pokemon.name}</h4>
      <img
        className="m-auto"
        src={pokemon.sprites.front_default}
        alt={pokemon.name}
      />
      <span className="fst-italic text-secondary mt-2">#{pokemon.id}</span>
      <p className="fw-lighter mb-2">{pokemon.types[0].type.name}</p>
    </li>
  );
};

export default Pokemons;
