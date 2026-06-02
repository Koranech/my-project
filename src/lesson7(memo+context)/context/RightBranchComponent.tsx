import {useContext} from "react";
import {MyContext} from "./context/MyContext.tsx";


const RightBranchComponent = () => {

    const {counterValue, increment, decrement} = useContext(MyContext)

    const incrementOnClick = () => {
    increment(counterValue)
    }

    const decrementOnClick = () => {
        decrement(counterValue)
    }
    return (
        <div>
            <button onClick={incrementOnClick}>
                click to increment counter value
            </button>

            <button onClick={decrementOnClick}>
                click to decrement counter value
            </button>
        </div>
    );
};

export default RightBranchComponent;
