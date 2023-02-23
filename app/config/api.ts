import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.letsgoeurope.fr/api/v1',
});

const baseUrl = "https://api.letsgoeurope.fr/uploads/"


export {
  api,
  baseUrl
};
