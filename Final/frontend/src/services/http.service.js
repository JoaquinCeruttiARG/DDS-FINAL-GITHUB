import axios from 'axios'

const httpService = axios.create({
    headers: {
        'Content-Type': 'application/json',
    },
});

export default httpService;
