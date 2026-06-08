import {axiosInstance} from "../constants/url.ts";
import type {IUser} from "../models/IUser.ts";

export const userService = {
    getUsers: async (): Promise<IUser[]> => {
        const {data: users} = await axiosInstance.get("/users")
        console.log(users)
        return users
    }
}
export const postService = {}
export const commentService = {}

export const allService = async <T>(endpont: string) => {
    const {data: result} = await axiosInstance.get(endpont);
    console.log(result)
    return result as T;
}
