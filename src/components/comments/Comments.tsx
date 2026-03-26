import {useEffect, useState} from "react";
import type {IComment} from "../../models/IComment.ts";
import {getComments} from "../../services/api.comments.ts";
import Comment from "../comment/Comment.tsx";
import './Comments.css'


const Comments = () => {
    const [comments, setComments] = useState<IComment[]>([])
    useEffect(() => {
        const fetchData = async () => {
            const comments = await getComments()
            setComments(comments)
        }
        fetchData()
    }, []);

    return (
        <div className={'comments'}>
            {
                comments.map(comment => <Comment key={comment.id} comment={comment}/>)
            }
        </div>
    );
};

export default Comments;
