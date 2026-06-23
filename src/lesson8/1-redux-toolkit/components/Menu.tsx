import {Link} from "react-router-dom";

const Menu = () => {
    return (
        <div>
            <ul>
                <li><Link to={''}>home page</Link></li>
                <li><Link to={'users'}>users</Link></li>
                <li><Link to={'1-users/1'}>user n</Link></li>
                <li><Link to={'posts'}>posts</Link></li>
            </ul>
        </div>
    );
};

export default Menu;
