import type {IPostDummy} from "../../models/PostDummyModel/IPostDummy.ts";
import type {FC} from "react";

type PostTypeProps ={
    post: IPostDummy
}
const PostDummyComponent: FC<PostTypeProps> = ({post}) => {
    return (
        <div>
            <h1>{post.id}</h1>
            <h2>{post.title}</h2>
        </div>
    );
};

export default PostDummyComponent;
