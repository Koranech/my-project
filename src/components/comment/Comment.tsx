import type {FC} from "react";
import type {IComment} from "../../models/IComment.ts";
import './Comment.css'

type CommentPropType = {
    comment: IComment;
}


const Comment: FC<CommentPropType> = ({comment}) => {
    return (
        <div className={'comment'}>
            <h2>Post ID - {comment.postId}</h2>
            <h3>Comment ID - {comment.id}</h3>
            <p>{comment.name}</p>
            <p>{comment.email}</p>
            <p>{comment.body}</p>
        </div>
    );
};

export default Comment;
