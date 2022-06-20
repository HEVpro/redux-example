import axios from 'axios';

const axiosClient = axios.create({
    baseUrl: 'http://localhost:3001/'
})

export default axiosClient