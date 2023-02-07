import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.letsg0.fr/api/v1/',
});


export default api;
