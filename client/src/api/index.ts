import axios from 'axios';

export const axiosWithAuth = axios.create({
    withCredentials: true,
});

axiosWithAuth.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
    return config;
});

export const axiosClassic = axios.create({
    withCredentials: true
})

async function fn (){

}