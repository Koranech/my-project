import {useEffect, useState} from "react";
import axios from "axios";

//В tsx файлах при типізаці стрілочної функції після типу треба писати кому
export const useFetch = <T, >(defaultvalue: T, url: string, endpoint: string) => {

    const axiosInstance = axios.create({
        baseURL: url,
        headers: {}
    });

     const objService = {
        getObj: async () => {
            const {data} = await axiosInstance.get(endpoint);
            return data;
        }
    }

    const [obj, setObj] = useState<T>(defaultvalue)

    useEffect(() => {
        objService.getObj()
            .then(obj => setObj(obj))
    }, []);

    return obj;
};

