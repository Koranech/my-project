import {useEffect, useState} from "react";
import type {PostModel} from "../../models/PostModel.ts";
import {getPosts} from "../../services/api.sevice.ts";
import Post from "../post/Post.tsx";
import './Posts.css'


const Posts = () => {
    const [posts, setPosts] = useState<PostModel[]>([])
    useEffect(() => {
        const fetchData = async () => {
            const posts = await getPosts()
            setPosts(posts)
        }
        fetchData()
    })
    return (
        <div className={"posts"}>
            <h1>Posts</h1>
            {
                posts.map(post => <Post key={post.id} post={post}/>)
            }
        </div>
    );
};

export default Posts;
