import './Comment.css'
import type {FC} from "react";
import type {CommentModel} from "../../models/CommentModel.ts";

type CommentPropsType = {
    comment: CommentModel;
}

const Comment: FC<CommentPropsType> = ({comment}) => {
    return (

        <div className={'comment'}>
            <h2>Comment ID - {comment.id}</h2>
            <p>{comment.body}</p>
            <p>Post ID - {comment.postId}</p>
            <p>Likes - {comment.likes}</p>
            <h3>User Info</h3>
            <p>User ID - {comment.user.id}</p>
            <p>Username - {comment.user.username}</p>
            <p>Fullname - {comment.user.fullName}</p>
        </div>
    );
};

export default Comment;
