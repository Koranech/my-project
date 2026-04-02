import {urls} from "../constans/urls.ts";
import type IUserJSON from "../models/UserJSONModel/IUserJSON.ts";
import type {IUserDummy} from "../models/UserDummyModel/IUserDummy.ts";
import type IPostJSON from "../models/PostJSONModel/IPostJSON.ts";
import type {IPostDummy} from "../models/PostDummyModel/IPostDummy.ts";
import type {ICommentJSON} from "../models/CommentJSONModel/ICommentJSON.ts";
import type {ICommentDummy} from "../models/CommentDummyModel/ICommentDummy.ts";

export const userService = {
    getUserJSON: async (): Promise<IUserJSON[]> => {
        return await fetch(urls.usersJSON.allUsers)
        .then((res) => res.json())
    },
    getUserDummy: async (): Promise<IUserDummy[]> => {
        const users = await fetch(urls.usersDummy.allUsers)
        .then((res) => res.json())
        return users.users;
    },
    getPostJSON: async (): Promise<IPostJSON[]> => {
        return await fetch(urls.postsJSON.allPosts)
        .then((res) => res.json())
    },
    getPostDummy: async (): Promise<IPostDummy[]> => {
        const posts = await fetch(urls.postsDummy.allPosts)
            .then((res) => res.json())
        return posts.posts;
    },
    getCommentsJSON: async (): Promise<ICommentJSON[]> => {
        return  await fetch(urls.commentsJSON.allComments)
        .then((res) => res.json())
    },
    getCommentDummy: async (): Promise<ICommentDummy[]> => {
        const comments = await fetch(urls.commentsDummy.allComments)
        .then((res) => res.json())
        return comments.comments;
    }
}
