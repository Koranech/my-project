import Comment from "../comment/Comment.tsx";
import {useAppSelector} from "../../redux/hooks/useAppSelector.ts";
import {useAppDispatch} from "../../redux/hooks/useAppDispatch.ts";
import {useEffect} from "react";
import {userAction} from "../../redux/slices/userSlice.ts";
import {postAction} from "../../redux/slices/postSlice.ts";
import {commentsAction} from "../../redux/slices/commentSlice.ts";
import User from "../user/User.tsx";
import Post from "../post/Post.tsx";


const Complex = () => {
    const dispatch = useAppDispatch()
    const users = useAppSelector(state => state.userStoreSlice.users)
    const posts = useAppSelector(state => state.postStoreSlice.posts)
    const comments = useAppSelector(state => state.commentStoreSlice.comments)

    useEffect(() => {
        if(!users.length){
            dispatch(userAction.loadUsers())
        }
        if(!posts.length) {
            dispatch(postAction.loadPosts())
        }
       if(!comments.length){
            dispatch(commentsAction.loadComments())
        }

    }, []);

    return (
        <div>
            {
                users.map( user => <User key={user.id} user={user}/>)
            }
           <hr/>
            {
                posts.map( post =><Post key={post.id} post={post}/>)
            }
            <hr/>
            {
                comments.map(comment => <Comment key={comment.id} comment={comment}/>)
            }
        </div>
    );
};

export default Complex;
