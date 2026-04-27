import {useContext} from "react";
import {MyContext} from "../context/MyContext.tsx";

const RightBranchA = () => {
    const {changeTheme} = useContext(MyContext)

    const handlerDark  = () => {
        changeTheme('dark')
    }
    const handlerLight  = () => {
        changeTheme('light')
    }


    return (
        <div>
            <button onClick={handlerDark}>change theme to dark</button>
            <button onClick={handlerLight}>change theme to light</button>
        </div>
    );
};

export default RightBranchA;
