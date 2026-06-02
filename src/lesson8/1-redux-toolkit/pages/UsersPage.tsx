
import {useEffect} from "react";
import {useAppSelector} from "../redux/hooks/useAppSelector.tsx";
import {userSliceActions} from "../redux/slices/userSlice/userSlice.ts";
import {useAppDispatch} from "../redux/hooks/useAppDispatch.tsx";

const UsersPage = () => {

    const {users, loadState} = useAppSelector(({userSlice}) => userSlice);

    const dispatch = useAppDispatch();

    useEffect(() => {
       dispatch(userSliceActions.loadUsers())
    }, []);
    return (
        <div>
            {!loadState && <div>Loading</div>}
            {
                users.map(user => {
                    return <div key={user.id}>
                        <p>{user.id} - {user.name}</p>
                    </div>
                })
            }
        </div>
    );
};

export default UsersPage;
