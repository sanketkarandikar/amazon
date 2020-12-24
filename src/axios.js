import axios from 'axios';

const instance = axios.create({
    baseURL: 'localhost:5001/clone-27cf6/s-central1/api'
});

export default instance;