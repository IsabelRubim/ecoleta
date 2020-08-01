import axios from 'axios';

const api = axios.create({
  baseURL: 'seuip:3333',
});

export default api;