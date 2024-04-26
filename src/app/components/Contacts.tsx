import React, { FC } from "react";
import animation from "./animation";
import { TFunction } from "i18next";

interface ContactsProps {
  t: TFunction;
}

const Contacts: FC<ContactsProps> = ({ t }) => {
  const contactLinks = [
    {
      icon: "bi-whatsapp",
      color: "text-success",
      href: "https://wa.me/+79038030953",
    },
    {
      icon: "bi-envelope-at-fill",
      color: "text-secondary",
      href: "mailto:victorjcdon@gmail.com@gmail.com",
    },
    { icon: "bi-telephone", color: "text-success", href: "tel:+79038030953" },
    {
      icon: "bi-telegram",
      color: "text-primary",
      href: "tg://resolve?domain=Jcvic",
    },
  ];

  return (
    <section id="contacts" className="my-5 container-xl ">
      <h2 className="animated text-center my-5">
        {t("common:contacts.title")}
      </h2>
      <div className="container">
        <div className="row">
          {contactLinks.map((link, index) => (
            <div key={index} className="col-sm-12 col-lg-3 my-1 text-center">
              <a
                className={`px-5 border rounded-pill ${link.color}`}
                href={link.href}
              >
                <i className={`bi ${link.icon}`}></i>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default animation(Contacts, ["tracking-in-contract-bck"], [".animated"]);
