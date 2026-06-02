import {useContext} from "react";
import {ThemeContext} from "../ThemeContext.tsx";


const RightBranchA = () => {
    const {changeToDark, changeToLight} = useContext(ThemeContext)
    const changeThemeToDark = () => {
        changeToDark('dark')
    }
    const changeThemeToLight = () => {
        changeToLight('light')
    }

    return (
        <div>
            <button onClick={changeThemeToDark}>to dark</button>
            <button onClick={changeThemeToLight}>to light</button>
            </div>
    );
};

export default RightBranchA;
