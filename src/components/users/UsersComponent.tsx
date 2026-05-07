import {useEffect, useState} from "react";
import type {IUser} from "../../models/IUser.ts";
import {useSearchParams} from "react-router-dom";
import {service} from "../../services/api.service.ts";
import UserComponent from "../user/UserComponent.tsx";
import type {IUserResponseModel} from "../../models/IUserResponseModel.ts";

const UsersComponent = () => {

    const [query] = useSearchParams()

    const [users, setUsers] = useState<IUser[]>([])
    useEffect(() => {
        const page: string = query.get('page') || '1'
        const limit: string = query.get('limit') || '9'
        service.getAllUsers(page, +limit)
            .then(({users}: IUserResponseModel) => setUsers(users))
    }, [query]);

    return (
        <div>
            {
                users.map(user => <UserComponent key={user.id} user={user}/>)
            }
        </div>
    );
};

export default UsersComponent;
