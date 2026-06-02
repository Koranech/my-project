import axios from "axios";
import {useEffect, useState} from "react";

export const useAxiosInstance = <T, >(endpoint: string)=> {

    const axiosInstance = axios.create({
        baseURL: 'https://jsonplaceholder.typicode.com',
        headers: {}
    });
    const objService = async () => {
        const {data} = await axiosInstance.get(endpoint)
        return data
    }

    const [obj, setObj] = useState<T[]>([])
    useEffect(() => {
        objService().then(value => setObj(value))
    }, []);

    return obj
}
