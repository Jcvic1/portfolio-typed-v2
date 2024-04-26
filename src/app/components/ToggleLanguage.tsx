import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const ToggleLanguage = () => {
  const [lang, setLang] = useState("en");
  const { i18n } = useTranslation();

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
    setLang(lang);
  };

  return (
    <div className="dropdown">
      <button
        className="btn btn-secondary dropdown-toggle"
        data-bs-toggle="dropdown"
        aria-expanded="false"
        style={{ color: "#adb5bd" }}
      >
        <span>{lang}{" "}</span>
        <i className="bi bi-globe"></i>
      </button>

      <ul className="dropdown-menu">
        <li>
          <button
            className="dropdown-item"
            onClick={() => changeLanguage("en")}
          >
            en
          </button>
        </li>
        <li>
          <button
            className="dropdown-item"
            onClick={() => changeLanguage("ru")}
          >
            ru
          </button>
        </li>
        {/* <li>
          <button
            className="dropdown-item"
            onClick={() => changeLanguage("es")}
          >
            es
          </button>
        </li>
        <li>
          <button
            className="dropdown-item"
            onClick={() => changeLanguage("fr")}
          >
            fr
          </button>
        </li> */}
      </ul>
    </div>
  );
};

export default ToggleLanguage;
