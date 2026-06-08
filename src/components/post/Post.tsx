import type {FC} from "react";
import type {IPost} from "../../models/IPost.ts";

type PostPropsType = {
    post: IPost
}
const Post: FC<PostPropsType> = ({post}) => {
    return (
        <div>
            <h5>User Id - {post.userId}</h5>
            <h2>{post.id} - {post.title}</h2>
            <p>{post.body}</p>
        </div>
    );
};

export default Post;
