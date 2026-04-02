import type {User} from "./User.ts";

export interface ICommentDummy {
   id: number;
   body: string;
   postId: number;
   likes: number;
   user: User;
}
