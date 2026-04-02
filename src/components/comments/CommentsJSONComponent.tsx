import {useEffect, useState} from "react";
import type {ICommentJSON} from "../../models/CommentJSONModel/ICommentJSON.ts";
import {userService} from "../../services/api.sevice.ts";
import CommentJSONComponent from "../comment/CommentJSONComponent.tsx";


const CommentsJsonComponent = () => {
    const [comments, setComments] = useState<ICommentJSON[]>([])
    useEffect(() => {
        userService.getCommentsJSON()
            .then((allComments) =>{
                setComments(allComments)})
    }, []);
    return (
        <div>
            {
                comments.map(comment => <CommentJSONComponent key={comment.id} comment={comment}/>)
            }
        </div>
    );
};

export default CommentsJsonComponent;
