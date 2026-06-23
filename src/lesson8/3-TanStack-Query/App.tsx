import {useGetUsers} from "./query/1-users/useGetUsers.tsx";
import {useGetUser} from "./query/1-users/useGetUser.tsx";
import {useCreatePost} from "./2-mutations/posts/useCreatePost.ts";
import {useState} from "react";


const App = () => {

    const [postTitle, setPostTitle] = useState<string>('')
    const [postBody, setPostBody] = useState<string>('')

    const {data: users, status, isFetching} = useGetUsers()
    console.log(users, status);

    const {data: user, status: userStatus, isFetching: isUserLoading,} = useGetUser({userId: String(1)})
    console.log(user, userStatus, isUserLoading)

    const {mutateAsync, data: post} = useCreatePost()

    console.log(postTitle, postBody)

    const handleCreatePost = async ({userId}: { userId: string }) => {
        try {
            const response = await mutateAsync({userId, body: postBody, title: postTitle})
            if (response) {
                console.log(response)
                return
            }
            console.log('No Response')

        } catch (e) {
            console.log(e)
        }
    }

    if (isFetching) return <div>Loading...</div>

    if (post) {
        return <div>
            <h2>{post.id}</h2>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
            <h4>{post.userId}</h4>
        </div>
    }
    
    return (
        <div>

            {users && users.map(user => <div key={user.id}>
                    {user.id} - {user.name}

                    <button onClick={() => handleCreatePost({userId: user.id})}>
                        Create post by {user.id}
                    </button>
                </div>
            )}
            <hr/>
            <div>
                <input value={postTitle} onChange={e => setPostTitle(e.target.value)}/>
                <input value={postBody} onChange={e => setPostBody(e.target.value)}/>
            </div>

        </div>
    );
};

export default App;
