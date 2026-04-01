import {createRoot} from 'react-dom/client'
import './index.css'
import {routes} from "./router/routes.tsx";
import {RouterProvider} from "react-router-dom";


createRoot(document.getElementById('root')!)
    .render(<RouterProvider router={routes}/>)

// createRoot(document.getElementById('root2')!)
//     .render(
//         <BrowserRouter>
//             <Routes>
//                 <Route path={''} element={<MainLayout/>}>
//                     <Route index={true} element={<HomePage/>}/>
//                     <Route path={'users'} element={<UsersPage/>}/>
//                     <Route path={'posts'} element={<PostsPage/>}/>
//                     <Route path={'comments'} element={<CommentsPage/>}/>
//                     <Route path={'products'} element={<ProductsPage/>}/>
//                 </Route>
//             </Routes>
//         </BrowserRouter>
//     )
