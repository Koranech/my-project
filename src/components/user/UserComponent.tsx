import type {FC} from "react";
import type {IUser} from "../../models/IUser.ts";

type UserPropsType = {
    user: IUser
}
const UserComponent:FC<UserPropsType> = ({user}) => {
    return (
        <div>
            <p>{user.id} - {user.firstName}</p>
        </div>
    );
};

export default UserComponent;
