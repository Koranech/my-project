import Menu from "../components/Menu.tsx";
import {Outlet} from "react-router";

const MainLayout = () => {
    return (
        <div>
            <Menu/>
            <hr/>
            <Outlet/>
        </div>
    );
};

export default MainLayout;
