import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://pokeapi.co/api/v2'
});

export const apiImage = axios.create({
  baseURL: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork'
});
