import type {ICommentDummy} from "../../models/CommentDummyModel/ICommentDummy.ts";
import type {FC} from "react";

type CommentTypeProps ={
    comment: ICommentDummy
}
const CommentDummyComponent: FC<CommentTypeProps> = ({comment}) => {
    return (
        <div>
           <h1>{comment.id}</h1>
           <h2>{comment.body}</h2>
        </div>
    );
};

export default CommentDummyComponent;
