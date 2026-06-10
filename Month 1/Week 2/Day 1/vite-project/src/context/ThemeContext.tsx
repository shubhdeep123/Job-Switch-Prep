import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";

// This is the shape of the value every component can access
interface ThemeContextType {
    theme : "light" | "dark";
    toggleTheme : () => void;
}

// createContext needs a default value — used only if no Provider is found above
const ThemeContext = createContext<ThemeContextType>({
    theme:"light",
    toggleTheme:()=>{} // empty fn as default
})

export function ThemeProvider ({children}:{children:ReactNode}) {
    // state lives here
    const [theme,setTheme] = useState<"light" | "dark">("light");

    // toggle function - uses functional update you learned in week 1
    const toggleTheme = () => {
        setTheme(prev => prev === "light" ? "dark" : "light");
    } 

    return (
        <ThemeContext.Provider value= {{theme,toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

export function useTheme () {
    return useContext(ThemeContext);
}



