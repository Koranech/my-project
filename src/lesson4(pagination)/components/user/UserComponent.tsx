import type {FC} from "react";
import type {IUser} from "../../models/IUser.ts";

type UserTypeProps = {
    user: IUser
}
const UserComponent: FC<UserTypeProps> = ({user}) => {


    return (
        <div>
           <h2>{user.id} - {user.username}</h2>
        </div>
    );
};

export default UserComponent;
