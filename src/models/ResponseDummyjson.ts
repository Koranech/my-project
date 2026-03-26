import type {PostModel} from "./PostModel.ts";
import type {TodoModel} from "./TodoModel.ts";
import type {CommentModel} from "./CommentModel.ts";

export interface ResponseDummyjson{
    todos?: TodoModel[],
    posts?: PostModel[],
    comments?: CommentModel[],
    total: number,
    skip: number,
    limit: number,
}
