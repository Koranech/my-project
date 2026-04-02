import {useEffect, useState} from "react";
import type IPostJSON from "../../models/PostJSONModel/IPostJSON.ts";
import {userService} from "../../services/api.sevice.ts";
import PostJSONComponent from "../post/PostJSONComponent.tsx";

const PostsJsonComponent = () => {
    const [posts, setPosts] = useState<IPostJSON[]>([])
    useEffect(() => {
        userService.getPostJSON()
            .then((allPosts) => {
                setPosts(allPosts);
            })
    }, []);
    return (
        <div>
            {
                posts.map(post => <PostJSONComponent key={post.id} post={post}/>)
            }
        </div>
    );
};

export default PostsJsonComponent;
