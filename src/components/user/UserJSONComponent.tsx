import type {FC} from "react";
import type IUserJSON from "../../models/UserJSONModel/IUserJSON.ts";

type UserTypeProps ={
    user: IUserJSON
}

const UserJsonComponent: FC<UserTypeProps> = ({user}) => {
    return (
        <div>
           <h1>{user.id} - {user.name}</h1>
        </div>
    );
};

export default UserJsonComponent;
