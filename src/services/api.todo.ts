import type {ITodo} from "../models/ITodo.ts";

export const getTodos = async (): Promise<ITodo[]> => {
    return await fetch(import.meta.env.VITE_API_URL)
        .then(value => value.json())
}
