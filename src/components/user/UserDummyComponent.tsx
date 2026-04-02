import type {FC} from "react";
import type {IUserDummy} from "../../models/UserDummyModel/IUserDummy.ts";

type UserTypeProps ={
    user: IUserDummy
}

const UserDummyComponent: FC<UserTypeProps> = ({user}) => {
    return (
        <div>
            <h1>{user.id} - {user.username}</h1>
        </div>
    );
};

export default UserDummyComponent;
