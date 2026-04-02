import {useEffect, useState} from "react";
import type {IPostDummy} from "../../models/PostDummyModel/IPostDummy.ts";
import {userService} from "../../services/api.sevice.ts";
import PostDummyComponent from "../post/PostDummyComponent.tsx";

const PostsDummyComponent = () => {
    const [posts, setPosts] = useState<IPostDummy[]>([])
    useEffect(() => {
        userService.getPostDummy()
            .then((allPosts) => {
                setPosts(allPosts);
            })
    }, []);
    return (
        <div>
            {
                posts.map(post => <PostDummyComponent key={post.id} post={post}/>)
            }
        </div>
    );
};

export default PostsDummyComponent;
