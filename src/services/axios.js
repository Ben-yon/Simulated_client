import Axios from 'axios'

const instance = Axios.create({
    baseURL: 'http://localhost:8000/api'
});

instance.interceptors.request.use(config=>{
    let  token = localStorage.getItem('simulated_api_token');
    config.headers.authorization = `Bearer ${token}`;
    return config;
});

export const axios = instance ;