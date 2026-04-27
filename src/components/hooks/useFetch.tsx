import { useEffect, useState } from "react";
import {objService} from "../../services/api.service.ts";

//В tsx файлах при типізаці стрілочної функції після типу треба писати кому
export const useFetch = <T, >(defaultvalue: T, url: string, endpoint: string) => {

    const [obj, setObj] = useState<T>(defaultvalue)

    useEffect(() => {
        objService.getObj(url, endpoint)
            .then(obj => setObj(obj))
    }, []);


    return obj;
};

