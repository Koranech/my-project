import {useEffect, useState} from "react";
import {getPosts} from "../../services/api.posts.ts";
import type {IPost} from "../../models/IPost.ts";
import PostComponent from "../post-component/PostComponent.tsx";
import './PostsComponent.css'

const PostsComponent = () => {
    const [posts, setPosts] = useState<IPost[]>([])
    useEffect(() => {
        const fetchData = async () => {
            const posts = await getPosts()
            setPosts(posts)
        }
        fetchData()
    }, []);
    return (
        <div className={'posts'}>
            {
                posts.map(post => <PostComponent key={post.id} post={post}/>)
            }
        </div>
    );
};

export default PostsComponent;
