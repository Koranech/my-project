import {useFetch} from "../components/hooks/useFetch.tsx";
import type {IUser} from "../models/IUser.ts";
import UserComponent from "../components/user/UserComponent.tsx";
import {useCallback, useMemo} from "react";


const CustomHookPage = () => {

    //Мемоізація масиву
    const arr: number[] = useMemo(() => {
        return[1, 2, 3];
    }, [])

    //Мемомізація функції
    const warning = useCallback(() => {
        console.warn('warning!');
    }, [])

    const users = useFetch<IUser[]>([],'https://jsonplaceholder.typicode.com', '/users')

    return (
        <div>
            {
                users.map(user => <UserComponent key={user.id} user={user} arr={arr} warning={warning}/>)
            }
        </div>
    );
};

export default CustomHookPage;
