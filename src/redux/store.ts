import {configureStore} from "@reduxjs/toolkit";
import {userSlice} from "./slices/userSlice.ts";
import {postSlice} from "./slices/postSlice.ts";
import {commentSlice} from "./slices/commentSlice.ts";

export const store = configureStore({
    reducer: {
        userStoreSlice: userSlice.reducer,
        postStoreSlice: postSlice.reducer,
        commentStoreSlice: commentSlice.reducer,
    }
});

