import type {TodoModel} from "../models/TodoModel.ts";
import type {PostModel} from "../models/PostModel.ts";
import type {CommentModel} from "../models/CommentModel.ts";

const todosURL = import.meta.env.VITE_API_URL + '/todos'
const postsURL = import.meta.env.VITE_API_URL + '/posts'
const commentsURL = import.meta.env.VITE_API_URL + '/comments'

export const getTodos = async (): Promise<TodoModel[]> => {
    const response = await fetch(todosURL)
        .then(value => value.json())
    return response.todos;
}

export const getPosts = async ():Promise<PostModel[]> => {
    const response = await fetch(postsURL)
    .then(value => value.json())
    return response.posts;
}

export const getComments = async(): Promise<CommentModel[]> => {
    const response = await fetch(commentsURL)
        .then(value => value.json())
    return response.comments;
}
