import React, { useState } from "react";
import { SpeedInsights } from '@vercel/speed-insights/react';
import { Analytics } from '@vercel/analytics/react';
import Homepage from "./app/pages/homepage";
import ThemeContext from "./app/contexts/theme";


const App = () => {
  const [theme, setTheme] = useState("dark");
  return (
    <>
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <Homepage />
    </ThemeContext.Provider>
    <SpeedInsights />
    <Analytics />
    </>
  );
};

export default App;