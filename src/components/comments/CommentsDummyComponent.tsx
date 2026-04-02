import {useEffect, useState} from "react";
import type {ICommentDummy} from "../../models/CommentDummyModel/ICommentDummy.ts";
import {userService} from "../../services/api.sevice.ts";
import CommentDummyComponent from "../comment/CommentDummyComponent.tsx";


const CommentsDummyComponent = () => {
    const [comments, setComments] = useState<ICommentDummy[]>([])
    useEffect(() => {
        userService.getCommentDummy()
            .then((allComments) => {
                setComments(allComments);
            })
    }, []);
    return (
        <div>
            {
                comments.map(comment => <CommentDummyComponent key={comment.id} comment={comment}/>)
            }
        </div>
    );
};

export default CommentsDummyComponent;
