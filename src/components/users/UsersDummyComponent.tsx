import {useEffect, useState} from "react";
import {userService} from "../../services/api.sevice.ts";
import type {IUserDummy} from "../../models/UserDummyModel/IUserDummy.ts";
import UserDummyComponent from "../user/UserDummyComponent.tsx";


const UsersJSONComponent = () => {
    const [users, setUsers] = useState<IUserDummy[]>([])
    useEffect(() => {
        userService.getUserDummy()
            .then((allUsers) => {
                setUsers(allUsers)
            })
    }, [])
    return (
        <div>
            {
                users.map(user => <UserDummyComponent key={user.id} user={user}/>)
            }
        </div>
    );
};

export default UsersJSONComponent;
