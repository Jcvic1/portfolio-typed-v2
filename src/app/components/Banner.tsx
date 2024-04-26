import React, { FC } from "react";
import { Link } from "react-scroll";
import me from "../assets/me.png";
import { TFunction } from "i18next";

interface BannerProps {
  t: TFunction;
}

const Banner: FC<BannerProps> = ({ t }) => {
  return (
    <section id="home" className="container-xl">
      <div className="">
        <div className="container">
          <div className="row">
            <div
              className="col text-left d-flex align-items-center"
              style={{ minHeight: "80vh" }}
            >
              <div>
                <h1>{t("common:banner.h1")}</h1>
                <p>{t("common:banner.description.p1")}</p>
                <p>{t("common:banner.description.p2")}</p>
                <p>{t("common:banner.description.p3")}</p>
                <Link
                  to="contacts"
                  className="btn btn-outline-secondary mt-2 rounded-pill"
                >
                  {t("common:banner.connectButton")}
                </Link>
              </div>
            </div>
            <div className="col d-flex justify-content-center align-items-center">
              <img
                className="img-fluid border border-secondary "
                src={me}
                style={{ maxHeight: "75vh", borderRadius: "50%" }}
                alt="victor"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
