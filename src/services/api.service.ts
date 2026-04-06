import {urls} from "../constants/urls.ts";
import type IUserPromise from "../models/IUserPromise.ts";

export const getAllUsers = async (page: string): Promise<IUserPromise> => {
    const limit = 10
    let skip = limit * (+page) - limit

    return await fetch(urls.getPageOfUsers + skip)
        .then(users => users.json())
}
