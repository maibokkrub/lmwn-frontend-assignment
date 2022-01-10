import axios from 'axios'; 
import { API_GATEWAY } from './endpoint';

const axiosInstance = axios.create({ 
    baseURL: API_GATEWAY,
    timeout: 3500,
})

export default axiosInstance;