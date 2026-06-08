import {useAppDispatch} from "../../redux/hooks/useAppDispatch.ts";
import {useAppSelector} from "../../redux/hooks/useAppSelector.ts";
import {useEffect} from "react";
import {postAction} from "../../redux/slices/postSlice.ts";
import Post from "../post/Post.tsx";

const Posts = () => {

   const dispatch = useAppDispatch()
    const posts = useAppSelector(state => state.postStoreSlice.posts)
    useEffect(() => {
        dispatch(postAction.loadPosts())
    }, [])

    return (
        <div>
            {
                posts.map( post => <Post key={post.id} post={post}/>)
            }
        </div>
    );
};

export default Posts;
