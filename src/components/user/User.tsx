import type {FC} from "react";
import type {IUser} from "../../models/IUser.ts";

type UserPropsType = {
    user: IUser
}
const User: FC<UserPropsType> = ({user}) => {
    return (
        <div>
            <h2>{user.id} - {user.name}</h2>
        </div>
    );
};

export default User;
