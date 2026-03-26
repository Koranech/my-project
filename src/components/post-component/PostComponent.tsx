import type {FC} from "react";
import type {IPost} from "../../models/IPost.ts";
import './PostComponent.css'

type PostPropType = {
    post: IPost;
}

const PostComponent: FC<PostPropType> = ({post}) => {
    return (
        <div className={'post'}>
            <h2>User ID - {post.userId}</h2>
            <h3>Post ID - {post.id}</h3>
            <p><b>{post.title}</b></p>
            <p>{post.body}</p>
        </div>
    );
};

export default PostComponent;
