import axios from 'axios';

export const api = axios.create({
    baseURL: 'https://api.open-meteo.com/v1/forecast',
    timeout: 10_000
});