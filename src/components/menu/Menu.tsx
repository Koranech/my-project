import {Link} from "react-router-dom";

const Menu = () => {
    return (
        <div>
            <ul>
                <li><Link to={''}>Home</Link></li>
                <li><Link to={'users'}>Users</Link></li>
                <li><Link to={'custom-hook'}>CustomHook</Link></li>
            </ul>
        </div>
    );
};

export default Menu;
