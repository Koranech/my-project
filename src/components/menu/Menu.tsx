import {Link} from "react-router-dom";

const Menu = () => {
    return (
        <div>
            <ul>
                <li><Link to={''}>Home Page</Link></li>
                <li><Link to={'login'}>Login Page</Link></li>
                <li><Link to={'auth/resources'}>Auth Page</Link></li>
            </ul>
        </div>
    );
};

export default Menu;
