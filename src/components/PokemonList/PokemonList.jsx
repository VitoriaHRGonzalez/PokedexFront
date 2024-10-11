import React from 'react';
import { getPokemonImageUrl } from '../../services/trainers';
import './PokemonList.css';



const PrimeiraLetraMaiuscula = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};
const FormatoId = (num) => {
  return num.toString().padStart(3, '0');
};

const PokemonList = ({ filteredPokemons, onPokemonClick }) => {
  if (!filteredPokemons || filteredPokemons.length === 0) {
    return <div>No Pokémon found</div>;
  }

  const idImg = filteredPokemons.map(pokemon => pokemon.id);
  const displayImage = idImg.map(id => getPokemonImageUrl(id));

  return (
    <div className='containerPokemonlist'>
      {filteredPokemons.map((pokemon, index) => (
        <div
          className="pokemon-card"
          key={pokemon.id}
          data-cy={`pokemon-${pokemon.id}`}
          onClick={() => onPokemonClick(pokemon)}
        >
          <p className="pokemon-id">#{FormatoId(pokemon.id)}</p>
          <img className="pokemon-img" src={displayImage[index]} alt={pokemon.name} />
          <div className="card-name">
            <h3>{PrimeiraLetraMaiuscula(pokemon.name)}</h3>
          </div>
        </div>
      ))}
    
    </div>
  );
};

export default PokemonList;
