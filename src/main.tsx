import {createRoot} from 'react-dom/client'
import './index.css'
import {RouterProvider} from "react-router-dom";
import {Provider} from "react-redux";
import {store} from "./lesson8/2-homework/redux/store.ts";
import {router} from "./lesson8/2-homework/router/router.tsx";


createRoot(document.getElementById('root')!)
.render(
    <Provider store={store}>
    <RouterProvider router={router}/>
    </Provider>
)
    // .render(<RouterProvider router={router}/>);
