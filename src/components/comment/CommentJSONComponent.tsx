import type {FC} from "react";
import type {ICommentJSON} from "../../models/CommentJSONModel/ICommentJSON.ts";

type CommentTypeProps = {
    comment: ICommentJSON
}

const CommentJsonComponent: FC<CommentTypeProps> = ({comment}) => {
    return (
        <div>
            <h1>{comment.id}</h1>
            <h2>{comment.body}</h2>
        </div>
    );
};

export default CommentJsonComponent;
