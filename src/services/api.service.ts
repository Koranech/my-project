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



export const objService = {
    getObj: async (url: string, endpoint: string): Promise<any> => {
        const axiosInstance2 = axios.create({
            baseURL: url,
            headers: {}
        });

        const {data} = await axiosInstance2.get(endpoint);
        return data;
    }
}
