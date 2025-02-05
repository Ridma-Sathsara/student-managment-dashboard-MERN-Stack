import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5002', // Backend server URL
});

export default api;
