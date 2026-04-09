import {Link} from "react-router-dom";

const Menu = () => {
    return (
        <>
            <p><Link to={'cars'}>Cars Page</Link></p>
            <p><Link to={'cars/create'}>Create car</Link></p>
        </>
    );
};

export default Menu;
