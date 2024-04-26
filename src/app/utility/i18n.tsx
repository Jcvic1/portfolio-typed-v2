import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import enCommon from "../locales/enTranslation/common.json";
import ruCommon from "../locales/ruTranslation/common.json";
import enAppProjects from "../locales/enTranslation/appProjects.json";
import ruAppProjects from "../locales/ruTranslation/appProjects.json";
import enMobileProjects from "../locales/enTranslation/mobileProjects.json";
import ruMobileProjects from "../locales/ruTranslation/mobileProjects.json";
import enNewProjects from "../locales/enTranslation/newProjects.json";
import ruNewProjects from "../locales/ruTranslation/newProjects.json";
import enPythonProjects from "../locales/enTranslation/pythonProjects.json";
import ruPythonProjects from "../locales/ruTranslation/pythonProjects.json";
import enSiteProjects from "../locales/enTranslation/siteProjects.json";
import ruSiteProjects from "../locales/ruTranslation/siteProjects.json";

const resources = {
  en: {
    common: enCommon,
    appProjects: enAppProjects,
    mobileProjects: enMobileProjects,
    newProjects: enNewProjects,
    pythonProjects: enPythonProjects,
    siteProjects: enSiteProjects,
  },
  ru: {
    common: ruCommon,
    appProjects: ruAppProjects,
    mobileProjects: ruMobileProjects,
    newProjects: ruNewProjects,
    pythonProjects: ruPythonProjects,
    siteProjects: ruSiteProjects,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
