import type {PostModel} from "../../models/PostModel.ts";
import type {FC} from "react";
import './Post.css'

type PostPropsType = {
    post: PostModel
}
const Post: FC<PostPropsType> = ({post}) => {
    return (
        <div className={'post'}>
            <h2>User ID: {post.userId}</h2>
            <h2>Post ID: {post.id} - Title: {post.title}</h2>
            <p>{post.body}</p>
            <ul>
                {
                    post.tags.map((tag, index) => (<li key={index}>{tag}</li>))
                }
            </ul>
            <h3>Likes - {post.reactions.likes}; Dislikes - {post.reactions.dislikes}</h3>
            <h3>Views - {post.views}</h3>
        </div>
    );
};

export default Post;
