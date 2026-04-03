import {useNavigate} from "react-router-dom";
import type {FC} from "react";
import type {IUser} from "../../models/IUser.ts";

type UserPropsType = {
    user: IUser
}
export const UserComponent: FC<UserPropsType> = ({user}) => {

    const navigation = useNavigate();

    const onButtonClickNavigate = () => {
        navigation('/users/' + user.id + '/carts')
    }

    return <div>
        <h2>{user.id} - {user.firstName}</h2>
        <button onClick={onButtonClickNavigate}>{user.firstName} cart</button>
    </div>;
}
