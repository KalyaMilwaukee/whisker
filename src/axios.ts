import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://whisker-backend.herokuapp.com'
})

export default instance;