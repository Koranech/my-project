import './App.css'
import {Link, Outlet} from "react-router-dom";

const App = () => {
    return (
        <div>
            <Link to={'users'}>Users Page</Link>
            <Outlet/>
        </div>
    );
};

export default App;
