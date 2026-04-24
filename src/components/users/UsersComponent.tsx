import {useCallback, useEffect, useMemo, useState} from "react";
import type {IUser} from "../../models/IUser.ts";
import {userService} from "../../services/api.service.ts";
import UserComponent from "../user/UserComponent.tsx";

const UsersComponent = () => {

    const [users, setUsers] = useState<IUser[]>([])

    useEffect(() => {
        userService.getUsers()
            .then(users => setUsers(users))
    }, []);

    const arr: number[] = useMemo(() => {
        return[1, 2, 3];
    }, [])

    const warning = useCallback(() => {
        console.warn('warning!');
    }, [])


    return (
        <div>
            {
                users.map(user => <UserComponent key={user.id} user={user} warning={warning} arr={arr}/>)
            }
        </div>
    );
};

export default UsersComponent;
