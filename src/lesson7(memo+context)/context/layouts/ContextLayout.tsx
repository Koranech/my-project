import LeftBranchComponent from "../LeftBranchComponent.tsx";
import RightBranchComponent from "../RightBranchComponent.tsx";
import {init, MyContext} from "../context/MyContext.tsx";
import {useState} from "react";

const ContextLayout = () => {

    const [counter, setCounter] = useState<number>(init.counterValue)

    return (
        <>
            <MyContext.Provider value={{
                counterValue: counter,
                increment: (obj: number) => {
                    setCounter(++obj)
                    console.log(obj)
                },
                decrement: (obj: number) => {
                    setCounter(--obj)
                    console.log(obj)
                }
            }}>
                <LeftBranchComponent/>
                <RightBranchComponent/>
            </MyContext.Provider>

        </>
    );
};

export default ContextLayout;
