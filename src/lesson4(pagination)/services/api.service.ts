import type {IUserResponseModel} from "../models/IUserResponseModel.ts";

// const baseUrl = import.meta.env.VITE_DUMMY_URL

// export const urls = {
//     getUsers: (skip: string) => {
//         return baseUrl + '/users?\e`limit=10&skip=' + skip
//     }
// }

const baseUrl = 'https://dummyjson.com'

export const service = {
    getAllUsers: async (page: string, limit: number): Promise<IUserResponseModel> => {
        const skip: number = limit * (+page) - limit
        return await fetch(baseUrl + '/users?limit=' + limit + '&skip=' + skip)
            .then(users => users.json())
    }
}

