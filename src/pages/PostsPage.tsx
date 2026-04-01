import {Link, Outlet} from "react-router-dom";


const PostsPage = () => {
    return (
        <div>
            Posts Content
            <ul>
                <li><Link to={'jsonplaceholder'}>jsonplaceholder</Link></li>
                <li><Link to={'dummyjson'}>dummyjson</Link></li>
            </ul>
            <hr/>
            <Outlet/>
        </div>
    );
};

export default PostsPage;
