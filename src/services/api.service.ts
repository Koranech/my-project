import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_PLACEHOLDER_URL,
    headers: {}
});

export const userService = {
    getUsers: async () => {
        const {data} = await axiosInstance.get('/users');
        return data;
    }
}
