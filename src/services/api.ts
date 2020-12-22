import axios from 'axios';

const api = axios.create({
  baseURL: process.env.POKEDEX_API,
});

export default api;
