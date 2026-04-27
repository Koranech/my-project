import './App.css'
import LeftBranch from "./components/LeftBranch.tsx";
import RightBranch from "./components/RightBranch.tsx";
import {MyContext} from "./context/MyContext.tsx";
import {useState} from "react";


const App = () => {

    const [themeColor, setThemeColor] = useState<string>('light')

    return (
        <div>
            <MyContext.Provider value={{
                theme: themeColor,
                changeTheme: (themeValue: string) => {
                    setThemeColor(themeValue)
                }
            }}>
                <LeftBranch/>
                <RightBranch/>
            </MyContext.Provider>
        </div>
    );
};

export default App;
