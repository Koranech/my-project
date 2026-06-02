import {createContext} from "react";

type ThemeContextType = {
    theme: string,
    changeToDark: (theme: string) => void,
    changeToLight: (theme: string) => void,
}
export const init = {
    theme: 'light',
    changeToDark: (theme: string)=> {
        console.log(theme)
    },
    changeToLight: (theme: string)=> {
        console.log(theme)
    },
}

export const ThemeContext = createContext<ThemeContextType>(init)
