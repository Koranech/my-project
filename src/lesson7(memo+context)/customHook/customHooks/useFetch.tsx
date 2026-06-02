import {useEffect, useState} from "react";


export const useFetch = <T, >(endpoint: string)=> {
    const [obj, setObj] = useState<T[]>([])
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com' + endpoint)
            .then(value => value.json())
            .then(value => setObj(value))
    }, []);
    return obj
}


