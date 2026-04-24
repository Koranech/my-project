import type {IUser} from "../../models/IUser.ts";
import {type FC, memo} from "react";

type UserPropsType = {
    user: IUser,
    warning: () => void,
    arr: number[]
}

const UserComponent:FC<UserPropsType> = memo(({user, arr})  => {
    console.log(arr)
    return (
        <div>
            <h2>{user.id} - {user.name}</h2>
            <p>{user.username}</p>
        </div>
    );
});

export default UserComponent;
