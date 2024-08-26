
// const ImageBaseURL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork';
// const baseURL = 'https://pokeapi.co/api/v2';

// export const getAllPokemons = async(options) => {
//   const response = await fetch(`${baseURL}/pokemon?limit=151`, options);  //Retorna tudo da API
//   const pokemonResponse = await response.json(); //Transforma no formano json
//   const results = pokemonResponse.results; //Pega somente os results "151 pokemons"
//   const payload = await Promise.all(

//     results.map(async (pokemon) => { //Pegar os 151 pokemons, e pra cada pokemon, chama o getStatus  e chama o getImage
//       const pokemonResponse = await getPokemonAttributes(pokemon.url);
//       const imageUrl = getPokemonImageUrl(pokemonResponse.id);
//       return {
//         id:pokemonResponse.id,
//         name:pokemon.name,
//         types:pokemonResponse.types,
//         imageUrl,
//         weight:pokemonResponse.weight,
//         height:pokemonResponse.height,
//         moves:pokemonResponse.abilities,
//         stats:pokemonResponse.stats
//       };
//     })
//   );
//   return payload;
// };

// const getPokemonAttributes = async(url) => {
//   const response = await fetch(url);
//   const pokemonResponse = await response.json();
//   return pokemonResponse;
// };

// // export const getPokemonImageUrl = (id) => {   //Estrutura onde vai concatenar o link com o id de cada pokemon para pegar a imagem
// //   return `${ImageBaseURL}/${id}.png`;
// // };


