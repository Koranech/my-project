import {createBrowserRouter} from "react-router-dom";
import App from "../App.tsx";
import UsersPage from "../pages/UsersPage.tsx";
import HomePage from "../pages/HomePage.tsx";
import CustomHookPage from "../pages/CustomHookPage.tsx";

export const routes = createBrowserRouter([
    {path: '/', element: <App/>, children: [
            {index: true, element: <HomePage/>},
            {path: 'users', element: <UsersPage/>},
            {path: 'custom-hook', element: <CustomHookPage/>}
        ]}
])
