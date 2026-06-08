import {useEffect} from "react";
import {useAppDispatch} from "../../redux/hooks/useAppDispatch.ts";
import {useAppSelector} from "../../redux/hooks/useAppSelector.ts";
import {userAction} from "../../redux/slices/userSlice.ts";
import User from "../user/User.tsx";

const Users = () => {

    const dispatch = useAppDispatch()
    const users = useAppSelector(state => state.userStoreSlice.users)
    useEffect(() => {
        dispatch(userAction.loadUsers())
    }, []);

    return (
        <div>
            {
                users.map( user => <User key={user.id} user={user}/>)
            }
        </div>
    );
};

export default Users;
