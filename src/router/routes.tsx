import {createBrowserRouter} from "react-router-dom";
import App from "../App.tsx";
import PaginationLayout from "../layouts/PaginationLayout.tsx";
import UsersPage from "../pages/UsersPage.tsx";

export const routes = createBrowserRouter([
    {path: '/', element: <App/>, children:[
            {path: '', element: <PaginationLayout/>, children: [
                    {path: 'users', element: <UsersPage/>}
                ]}
        ]}
]);
