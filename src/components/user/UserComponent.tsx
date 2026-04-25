import type {IUser} from "../../models/IUser.ts";
import {type FC, memo} from "react";

type UserPropsType = {
    user: IUser,
    warning: () => void,
    arr: number[]
}

//Мемомізація компоненти
const UserComponent:FC<UserPropsType> = memo(({user, arr, warning})  => {

    console.clear()
    console.log(arr)
    warning()

    return (
        <div>
            <h2>{user.id} - {user.name}</h2>
            <p>Username: {user.username}</p>
        </div>
    );
});

export default UserComponent;
