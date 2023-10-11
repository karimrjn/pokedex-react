import React from "react";

function NavBar({ pokemonIndex, setPokemonIndex, pokemonListLength }) {
  return (
    <div>
      {pokemonIndex > 0 && (
        <button onClick={() => setPokemonIndex(pokemonIndex - 1)}>
          Précédent
        </button>
      )}
      {pokemonIndex < pokemonListLength - 1 && (
        <button onClick={() => setPokemonIndex(pokemonIndex + 1)}>
          Suivant
        </button>
      )}
    </div>
  );
}

export default NavBar;
