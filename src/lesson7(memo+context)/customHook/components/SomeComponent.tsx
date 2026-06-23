import {useFetch} from "../customHooks/useFetch.tsx";
import {useAxiosInstance} from "../customHooks/useAxiosInstance.tsx";

const SomeComponent = () => {

    const users = useFetch<any>('/1-users');
    const posts = useAxiosInstance<any>('/posts')
    return (
        <div>
            {
                users.map(user => <p key={user.id}>{user.id} - {user.name}</p>)
            }
            <hr/>
            {
                posts.map(post => <p key={post.id}>{post.id} - {post.title}</p>)
            }
        </div>
    );
};

export default SomeComponent;
