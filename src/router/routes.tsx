import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layouts/MainLayout.tsx";
import HomePage from "../pages/HomePage.tsx";
import UsersPage from "../pages/UsersPage.tsx";
import PostsPage from "../pages/PostsPage.tsx";
import CommentsPage from "../pages/CommentsPage.tsx";
import ProductsPage from "../pages/ProductsPage.tsx";
import UsersFromJSONPlaceholder from "../pages/Users/UsersFromJSONPlaceholder.tsx";
import UsersFromDummyJSON from "../pages/Users/UsersFromDummyJSON.tsx";
import PostsFromJSONPlaceholder from "../pages/Posts/PostsFromJSONPlaceholder.tsx";
import PostsFromDummyJSON from "../pages/Posts/PostsFromDummyJSON.tsx";
import CommentsFromJSONPlaceholder from "../pages/Comments/CommentsFromJSONPlaceholder.tsx";

export const routes = createBrowserRouter([
    {path: '', element: <MainLayout/>, children:
            [
                {index: true, element: <HomePage/>},
                {path: 'users', element: <UsersPage/>, children: [
                        {path: 'jsonplaceholder', element: <UsersFromJSONPlaceholder/>},
                        {path: 'dummyjson', element: <UsersFromDummyJSON/>}
                    ]},
                {path: 'posts', element: <PostsPage/>, children: [
                        {path: 'jsonplaceholder', element: <PostsFromJSONPlaceholder/>},
                        {path: 'dummyjson', element: <PostsFromDummyJSON/>}
                    ]},
                {path: 'comments', element: <CommentsPage/>, children: [
                        {path: 'jsonplaceholder', element: <CommentsFromJSONPlaceholder/>}
                    ]},
                {path: 'products', element: <ProductsPage/>},
            ]
    }
])

