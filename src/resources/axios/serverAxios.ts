import axios from 'axios';
const baseUrl = 'http://localhost:3000/';

const serverAxios = axios.create({
  baseURL: baseUrl,
});

export { serverAxios };
