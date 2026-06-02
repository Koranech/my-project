import {ThemeContext} from "../ThemeContext.tsx";
import {useContext} from "react";
import '../themes.css'

const LeftBranchA = () => {
   const {theme} = useContext(ThemeContext)



    return (
        <div className={theme}>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ad, assumenda facilis placeat porro quas sapiente veniam? Ab ad blanditiis commodi eum
                explicabo illum itaque magnam, modi nostrum quos, voluptatum.</p>

        </div>
    );
};

export default LeftBranchA;
