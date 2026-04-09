import './App.css'
import {Outlet} from "react-router-dom";
import Menu from "./components/menu/Menu.tsx";

const App = () => {
    return (
        <div>
            <Menu/>
            <hr/>
            <Outlet/>
        </div>
    );
};

export default App;
