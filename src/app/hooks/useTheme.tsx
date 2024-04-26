import { useContext } from "react";
import ThemeContext, { ThemeContextType } from "../contexts/theme";

interface ThemeHookReturnType {
  theme: string;
  setTheme: (theme: string) => void;
}

const useTheme = (): ThemeHookReturnType => {
  const { theme, setTheme } = useContext(ThemeContext) as ThemeContextType;

  return {
    theme,
    setTheme,
  };
};

export default useTheme;



