import LeftBranch from "./LeftBranch.tsx";
import RightBranch from "./RightBranch.tsx";
import {init, ThemeContext} from "../ThemeContext.tsx";
import {useState} from "react";

const MainBranch = () => {
    const [theme, setTheme] = useState<string>(init.theme)

    return (
        <div>
            <ThemeContext.Provider value ={{
                theme: theme,
                changeToDark: (theme: string) => {
                    setTheme('dark')
                    console.log(theme)
                },
                changeToLight: (theme: string) => {
                    setTheme('light')
                    console.log(theme)
                }
            }}>
                <LeftBranch/>
                <RightBranch/>
            </ThemeContext.Provider>

        </div>
    );
};

export default MainBranch;
