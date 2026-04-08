import PaginationComponent from "../components/pagination/PaginationComponent.tsx";
import {Outlet} from "react-router-dom";

const PaginationLayout = () => {
    return (
        <>
            <Outlet/>
            <PaginationComponent/>
        </>
    );
};

export default PaginationLayout;
