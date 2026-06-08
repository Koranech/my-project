import type {IUser} from "../../models/IUser.ts";
import {createAsyncThunk, createSlice, type PayloadAction} from "@reduxjs/toolkit";
import {allService} from "../../services/api.service.ts";

type UserSliceType = {users: IUser[]}
const initUserSliceState: UserSliceType =  {users: []}

const loadUsers = createAsyncThunk('loadUsers', async (_, thunkAPI) => {
   try {
       const users = await allService<IUser[]>('/users')
       console.log(users)
       return thunkAPI.fulfillWithValue(users)
   }
   catch (e){
       return  thunkAPI.rejectWithValue(e)
   }
})

export const userSlice = createSlice({
    name: 'userSlice',
    initialState: initUserSliceState,
    reducers: {},
    extraReducers: builder => builder
        .addCase(loadUsers.fulfilled, (state, action:PayloadAction<IUser[]>) => {
                state.users = action.payload
        })

})
export const userAction =  {...userSlice.actions, loadUsers}
