import React, { useEffect, useState } from 'react';
import { baseURL, getPokemonAttributes, getPokemonImageUrl } from '../../services/trainers';
import './PokemonList.css';

const PrimeiraLetraMaiuscula = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};
const FormatoId = (num) => {
  return num.toString().padStart(3, '0');
};

const PokemonList = ({ pokemonIds, onPokemonClick }) => {
  const [pokemonList, setPokemonList] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        const fetchedPokemons = await Promise.all(
          pokemonIds.map(async (id) => {
            const pokemonResponse = await getPokemonAttributes(`${baseURL}/pokemon/${id}`);
            const imageUrl = getPokemonImageUrl(pokemonResponse.id);
            return {
              id: pokemonResponse.id,
              name: pokemonResponse.name,
              type: pokemonResponse.type,
              imageUrl,
              weight: pokemonResponse.weight,
              height: pokemonResponse.height,
              moves: pokemonResponse.abilities,
              stats: pokemonResponse.stats
            };
          })
        );
        setPokemonList(fetchedPokemons);
      } catch (e) {
        setError(e);
      }
    };

    fetchPokemons();
  }, [pokemonIds]);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className='containerPokemonlist'>
      {pokemonList && pokemonList.map((pokemon) => (
        <div className="pokemon-card" key={pokemon.id} onClick={() => {
          onPokemonClick(pokemon);
        }}>
          <p className="pokemon-id">#{FormatoId(pokemon.id)}</p>
          <img className="pokemon-img" src={pokemon.imageUrl} alt={pokemon.name} />
          <div className="card-name">
            <h3>{PrimeiraLetraMaiuscula(pokemon.name)}</h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PokemonList;
