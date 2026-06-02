import UserComponent from "./UserComponent.tsx";
import {useCallback, useEffect, useMemo, useState} from "react";
import axios from 'axios';

const UsersComponent = () => {
    const [users, setUsers] = useState<any[]>([])


    const axiosInstance = axios.create({
        baseURL: 'https://dummyjson.com',
        headers: {}
    });
    const usersService = async () => {
        const {data: {users}} = await axiosInstance.get('/users');
        return users;
    }
    useEffect(() => {
       usersService().then(data => setUsers(data))

    }, []);

    const foo = useCallback(() => {
        console.log('hello')
    }, [])
    const arr = useMemo(() => {
        return [1, 2, 3]
    }, [])

    console.log(users);
    return (
        <div>
            {
                users.map((user) => <UserComponent key={user.id} user={user} foo={foo} arr={arr} />)
            }

            </div>
    );
};

export default UsersComponent;
