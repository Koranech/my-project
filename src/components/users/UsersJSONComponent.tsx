import {useEffect, useState} from "react";
import {userService} from "../../services/api.sevice.ts";
import type IUserJSON from "../../models/UserJSONModel/IUserJSON.ts";
import UserJSONComponent from "../user/UserJSONComponent.tsx";


const UsersJSONComponent = () => {
    const [users, setUsers] = useState<IUserJSON[]>([])
    useEffect(() => {
        userService.getUserJSON()
            .then((allUsers) => {
                setUsers(allUsers)
            })
    }, [])
    return (
        <div>
            {
                users.map(user => <UserJSONComponent key={user.id} user={user}/>)
            }

        </div>
    );
};

export default UsersJSONComponent;
