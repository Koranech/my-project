import UsersComponent from "../components/users-component/UsersComponent.tsx";
import {Outlet} from "react-router-dom";

const UsersPage = () => {
    return (
        <div>
            <Outlet/>
            <hr/>
            <UsersComponent/>

        </div>
    );
};

export default UsersPage;
