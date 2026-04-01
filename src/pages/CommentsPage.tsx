import {Link, Outlet} from "react-router-dom";


const CommentsPage = () => {
    return (
        <div>
            Comments Content
            <ul>
                <li><Link to={'jsonplaceholder'}>jsonplaceholder</Link></li>
            </ul>
            <hr/>
            <Outlet/>
        </div>
    );
};

export default CommentsPage;
