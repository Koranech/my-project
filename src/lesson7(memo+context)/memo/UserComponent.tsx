import {type FC, memo} from "react";

type UserTypeProps = {
    foo: () => void;
    arr: number[],
    user: any
}
const UserComponent:FC<UserTypeProps> = memo (({user, arr, foo}) => {
    return (
        <div>
            <p>{user.id} - {user.firstName}</p>

            </div>
    );
});

export default UserComponent;
