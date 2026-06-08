import {useAppDispatch} from "../../redux/hooks/useAppDispatch.ts";
import {useAppSelector} from "../../redux/hooks/useAppSelector.ts";
import {useEffect} from "react";
import {commentsAction} from "../../redux/slices/commentSlice.ts";
import Comment from "../comment/Comment.tsx";

const Comments = () => {

    const dispatch = useAppDispatch()
    const comments = useAppSelector(state => state.commentStoreSlice.comments)
    useEffect(() => {
        dispatch(commentsAction.loadComments())
    }, []);

    return (
        <div>
            {
                comments.map(comment => <Comment key={comment.id} comment={comment}/>)
            }
        </div>
    );
};

export default Comments;
