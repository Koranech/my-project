import {createRoot} from 'react-dom/client'
import './index.css'
import {RouterProvider} from "react-router-dom";
import {router} from "./lesson8/1-redux-toolkit/router/router.tsx";
import {Provider} from "react-redux";
import {store} from "./lesson8/1-redux-toolkit/redux/stores/store.ts";


createRoot(document.getElementById('root')!)
.render(
    <Provider store={store}>
    <RouterProvider router={router}/>
    </Provider>
)
    // .render(<RouterProvider routes={routes}/>);
