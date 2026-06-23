import {createRoot} from 'react-dom/client'
import './index.css'
// import {RouterProvider} from "react-router-dom";
// import {Provider} from "react-redux";
// import {store} from "./lesson8/2-homework/redux/store.ts";
// import {router} from "./lesson8/2-homework/router/router.tsx";
import {QueryClientProvider} from "@tanstack/react-query";
import PostsPagination from "./lesson8/3-TanStack-Query/PostsPagination.tsx";
import type {PropsWithChildren} from "react";
import {useQueryClientConfig} from "./lesson8/3-TanStack-Query/useQueryClientConfig.ts";



export const QueryClient = ({children}: PropsWithChildren) => {
    const queryClient = useQueryClientConfig()
    return (
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    )
}


createRoot(document.getElementById('root')!)
.render(
    // <Provider store={store}> <RouterProvider router={router}/></Provider>
    <QueryClient>
        <PostsPagination/>
    </QueryClient>
)
    // .render(<RouterProvider router={router}/>);
