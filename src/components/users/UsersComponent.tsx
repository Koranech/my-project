import {useEffect, useState} from "react";
import UserComponent from "../user/UserComponent.tsx";
import {getAllUsers} from "../../services/api.service.ts";
import type {IUser} from "../../models/IUser.ts";
import {useSearchParams} from "react-router-dom";


const UsersComponent = () => {

    const [users, setUsers] = useState<IUser[]>([])
    const [query] = useSearchParams()
    useEffect(() => {
        getAllUsers(query.get('pg') || '1')
            .then(value => setUsers(value.users))
    }, [query]);
    return (
        <div>
            <h1>Page number {(query.get('pg') || '1')}</h1>
            {
                users.map(user => (<UserComponent key={user.id} user={user} />))
            }
        </div>
    );
};

export default UsersComponent;
