import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3333/api/v1',
});

const baseUrl = "http://localhost:3333/uploads/"


export {
  api,
  baseUrl
};
