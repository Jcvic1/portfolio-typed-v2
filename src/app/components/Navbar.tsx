import React, { useState, FC } from "react";
import { Link } from "react-scroll";
import ToggleLanguage from "./ToggleLanguage";
import useTheme from "../hooks/useTheme";
import animation from "./animation";
import { TFunction } from "i18next";

interface NavbarProps {
  t: TFunction;
}

const Navbar: FC<NavbarProps> = ({ t }) => {
  const { theme, setTheme } = useTheme();
  const [icon, setIcon] = useState(theme === "dark" ? "bi-sun" : "bi-moon");
  const handleSetTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
    setIcon(icon === "bi-sun" ? "bi-moon" : "bi-sun");
  };
  return (
    <div className="container-xl">
      <div className="d-flex justify-content-between pt-3">
        <div className="fs-3 animated">Victor JC</div>
        <div className="d-flex ">
          <ToggleLanguage />
          <button
            className="btn ms-1"
            onClick={handleSetTheme}
            style={{ color: "#adb5bd" }}
          >
            <i id="color-mode-icon" className={`bi ${icon}`}></i>
          </button>
        </div>
      </div>
      <nav className="navbar">
        <div className="d-flex ms-auto">
          <Link
            to="home"
            className="nav-link m-2 btn p-1 rounded-pill"
            smooth={true}
            duration={100}
            offset={-120}
          >
            {t("common:navigation.1")}
          </Link>
          <Link
            to="expertise"
            className="nav-link m-2 btn p-1 rounded-pill"
            smooth={true}
            duration={100}
            offset={-120}
          >
            {t("common:navigation.2")}
          </Link>
          <Link
            to="projects"
            className="nav-link m-2 btn p-1 rounded-pill"
            smooth={true}
            duration={100}
            offset={-120}
          >
            {t("common:navigation.3")}
          </Link>
          <Link
            to="contacts"
            className="nav-link m-2 btn p-1 rounded-pill"
            smooth={true}
            duration={100}
            offset={-120}
          >
            {t("common:navigation.4")}
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default animation(Navbar, ["bounce-left"], [".animated"]);
