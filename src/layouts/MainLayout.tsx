import {Outlet} from "react-router-dom";
import Menu from "../components/menu/Menu.tsx";


const MainLayout = () => {
    return (
        <>
            <Menu/>
            <hr/>
            <Outlet/>
        </>
    );
};

export default MainLayout;
