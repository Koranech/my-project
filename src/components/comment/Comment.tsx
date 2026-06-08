import type {FC} from "react";
import type {IComment} from "../../models/IComment.ts";

type CommentPropsType = {
    comment: IComment
}

const Comment: FC<CommentPropsType> = ({comment}) => {
    return (
        <div>
            <h5>Post id - {comment.postId}</h5>
            <h3>{comment.id} - {comment.name}</h3>
            <p>{comment.body}</p>
            <h4>{comment.email}</h4>
        </div>
    );
};

export default Comment;
