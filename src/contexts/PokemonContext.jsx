import { createContext, useEffect, useState } from 'react';
import { getAllPokemons } from '../services/pokedex.jsx';

export const PokemonContext = createContext(null);

export const useGetPokemons = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null); 
  const [data, setData] = useState(null);
  const [filteredPokemonList, setFilteredPokemonList] = useState(null);

  useEffect(() => {
    setFilteredPokemonList(data);
  }, [data]);
  
  const getData = async(options = {}) => {
    try {
      setIsLoading(true);
      const pokemons = await getAllPokemons(options);
      setData(pokemons);
      setIsLoading(false);
  
      return pokemons;
    } catch (e){
      setError(e);
      setIsLoading(false);
      throw e;
    }
  };
  
  return {
    isLoading,
    error,
    data,
    filteredPokemonList,
    setFilteredPokemonList,
    getData
  };
};

// eslint-disable-next-line react/prop-types
export const PokemonProvider = ({children}) => {
  const pokemonData = useGetPokemons();

  return (
    <PokemonContext.Provider value={pokemonData}>
      {children}
    </PokemonContext.Provider>
  );
};
