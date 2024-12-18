import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Expertise from "../components/Expertise";
import Projects from "../components/Projects";
import Contacts from "../components/Contacts";
import Player from "../components/Games";
import Footer from "../components/Footer";
import useTheme from "../hooks/useTheme";

const Homepage = () => {
  const { theme } = useTheme();
  const { t } = useTranslation();

  document.body.setAttribute("data-bs-theme", theme);
  return (
    <div id="body" data-bs-theme={theme}>
      <header className="sticky-top bg-secondary">
        <Navbar t={t} />
      </header>
      <Banner t={t} />
      <Expertise t={t} />
      <Projects t={t} />
      <Player t={t} />
      <Contacts t={t} />
      <Footer />
    </div>
  );
};

export default Homepage;
