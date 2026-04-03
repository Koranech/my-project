import {Link} from "react-router-dom";

const Menu = () => {
    return (
        <div>
            <ul>
                <li><Link to={''}>menu</Link></li>
                <li><Link to={'users'}>users</Link></li>
            </ul>
        </div>
    );
};

export default Menu;
