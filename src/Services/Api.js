import axios from 'axios';

const api = axios.create({
    baseURL:'http:/172.25.240.1/'
});
export default api;