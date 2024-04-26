import React, { useState } from "react";
import Homepage from "./app/pages/homepage";
import ThemeContext from "./app/contexts/theme";


const App = () => {
  const [theme, setTheme] = useState("dark");
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <Homepage />
    </ThemeContext.Provider>
  );
};

export default App;