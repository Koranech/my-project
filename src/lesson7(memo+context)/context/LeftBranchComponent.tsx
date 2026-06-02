import {useContext, useMemo} from "react";
import {MyContext} from "./context/MyContext.tsx";

const LeftBranchComponent = () => {

    const {counterValue} = useContext(MyContext)

    useMemo(() => {
        for (let i = 0; i < 100; i++) {
            console.log(i)
        }
        return null
    }, []);
    return (
        <div>
            <p>
                current counter value: {counterValue}
            </p>
        </div>
    );
};

export default LeftBranchComponent;
