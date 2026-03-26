import './Comments.css'
import {useEffect, useState} from "react";
import type {CommentModel} from "../../models/CommentModel.ts";
import {getComments} from "../../services/api.sevice.ts";
import Comment from "../comment/Comment.tsx";

const Comments = () => {
    const [comments, setComments] = useState<CommentModel[]>([])
    useEffect(() => {
        const fetchData = async() => {
            const comments = await getComments()
            setComments(comments)
        }
        fetchData()
    }, []);
    return (
        <div className="comments">
            <h1>Comments</h1>
            {
                comments.map(comment => <Comment key={comment.id} comment={comment}/>)
            }
        </div>
    );
};

export default Comments;
