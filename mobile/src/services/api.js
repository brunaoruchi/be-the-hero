import axios from 'axios';

const api = axios.create({
    //url:Chance URL
    baseURL: 'http://192.0.0.1:3333'
});

export default api;