import type {FC} from "react";
import type IPostJSON from "../../models/PostJSONModel/IPostJSON.ts";

type PostTypeProps = {
    post: IPostJSON
}

const PostJsonComponent: FC<PostTypeProps> = ({post}) => {
    return (
        <div>
            <h1>{post.id}</h1>
            <h2>{post.title}</h2>
        </div>
    );
};

export default PostJsonComponent;
