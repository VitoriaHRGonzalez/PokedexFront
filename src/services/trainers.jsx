export const baseURL = process.env.REACT_APP_API_URL;
const ImageBaseURL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork';

// Se não for, tirar o 'api' da URL no Heroku

export const getAllPokemons = async(options = {}) => {
  try {
    const response = await fetch(`${baseURL}/pokemon`, options);
    if (!response.ok) {
      throw new Error('Failed to fetch Pokémon');
    }
    const pokemonResponse = await response.json();
    const results = pokemonResponse.results;
  
    const payload = await Promise.all(
      results.map(async (pokemon) => {
        const pokemonResponse = await getPokemonAttributes(pokemon.url);
        const imageUrl = getPokemonImageUrl(pokemonResponse.id);
        return {
          id: pokemonResponse.id,
          name: pokemon.name,
          types: pokemonResponse.types,
          imageUrl,
          weight: pokemonResponse.weight,
          height: pokemonResponse.height,
          moves: pokemonResponse.abilities,
          stats: pokemonResponse.stats
        };
      })
    );
    return payload;
  } catch (error) {
    console.error('Error fetching all Pokémon:', error);
    throw error;
  }
};

export const getPokemonAttributes = async(url) => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Failed to fetch Pokémon attributes from ${url}`);
    }
    const pokemonResponse = await response.json();
    return pokemonResponse;
  } catch (error) {
    console.error('Error fetching Pokémon attributes:', error);
    throw error;
  }
};

export const getPokemonImageUrl = (id) => {
  return `${ImageBaseURL}/${id}.png`;
};

export const getAllTrainers = async(options = {}) => {
  try {
    const response = await fetch(`${baseURL}/trainer`, options);
    if (!response.ok) {
      throw new Error('Failed to fetch trainers');
    }
    const trainers = await response.json();
    return trainers;
  } catch (error) {
    console.error('Error fetching trainers:', error);
    throw error;
  }
};

export const getTrainerById = async(id) => {
  try {
    const response = await fetch(`${baseURL}/trainer/${id}`);
    if (!response.ok) {
      throw new Error('Failed to fetch trainer');
    }
    const trainer = await response.json();
    return trainer;
  } catch (error) {
    console.error('Error fetching trainer:', error);
    throw error;
  }
};
