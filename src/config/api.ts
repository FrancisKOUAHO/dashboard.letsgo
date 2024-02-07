import axios from "axios";

const api = axios.create({
  //baseURL: 'https://api.letsgoeurope.fr/api/v1',
  baseURL: "http://127.0.0.1:3333/api/v1",
});

//const baseUrl = "https://api.letsgoeurope.fr/uploads/"
const baseUrl = "http://127.0.0.1:3333/uploads/";

export { api, baseUrl };
