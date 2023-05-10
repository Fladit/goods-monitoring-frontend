import axios from 'axios';
const baseUrl = 'https://localhost:8080/';

const clientAxios = axios.create({
  baseURL: baseUrl,
});

export { clientAxios };
