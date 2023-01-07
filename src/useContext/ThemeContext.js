import { createContext, useState } from "react";
import Content from "./content";

export const ThemeContext = createContext();

function ThemeProvider({ children }) {
    const [theme, setTheme] = useState('Dark')
    const toggleTheme = () => {
        setTheme(theme === 'Dark' ? 'Light' : 'Dark')
    }

    const value = {
        theme,
        toggleTheme
    }

    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    );
}

export default ThemeProvider;
