import React, { createContext } from "react";

export type ThemeContextType = {
    theme: string;
    setTheme: (theme: string) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export default ThemeContext;
