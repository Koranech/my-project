import type {IPost} from "../models/IPost.ts";

export const getPosts = async(): Promise<IPost[]> => {
    return await fetch(import.meta.env.VITE_API_URL)
        .then(value => value.json())
}
