import React, { FC } from "react";
import { useMediaQuery } from "react-responsive";
import siteProjectsData from "../utility/siteProjectsData";
import appProjectsData from "../utility/appProjectsData";
import mobileProjectsData from "../utility/mobileProjects";
import pythonProjects from "../utility/pythonProjects";
import newProjects from "../utility/newProjects";
import animation from "./animation";
import { TFunction } from "i18next";

interface ProjectsProps {
  t: TFunction;
}

const Projects: FC<ProjectsProps> = ({ t }) => {
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });

  const filterImages = (images: string[]) => {
    if (isMobile) {
      return images.filter(
        (image: string) => image.includes("iPhone") || image.includes("Screenshot")
      );
    }
    return images;
  };
  return (
    <section id="projects" className="my-5 container-xl">
      <h2 className="animated text-center my-5">
        {t("common:projects.title")}
      </h2>

      <p className="my-5 text-center">{t("common:projects.p")}</p>

      <div className="animated my-1 d-flex justify-content-center">
        <ul
          className="nav nav-pills mb-3 flex-nowrap overflow-x-auto"
          id="pills-tab"
          role="tablist"
        >
          <li className="nav-item" role="presentation">
            <button
              className="nav-link rounded-pill active grey text-nowrap"
              id="pills-webapp-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-webapp"
              type="button"
              role="tab"
              aria-controls="pills-webapp"
              aria-selected="false"
            >
              {t("common:projects.projectNavButtons.1")}
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link rounded-pill grey text-nowrap"
              id="pills-mobileapp-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-mobileapp"
              type="button"
              role="tab"
              aria-controls="pills-mobileapp"
              aria-selected="false"
            >
              {t("common:projects.projectNavButtons.2")}
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link rounded-pill grey text-nowrap"
              id="pills-website-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-website"
              type="button"
              role="tab"
              aria-controls="pills-website"
              aria-selected="true"
            >
              {t("common:projects.projectNavButtons.3")}
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link rounded-pill grey text-nowrap"
              id="pills-python-projects-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-python-projects"
              type="button"
              role="tab"
              aria-controls="pills-python-projects"
              aria-selected="false"
            >
              {t("common:projects.projectNavButtons.4")}
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link rounded-pill grey text-nowrap"
              id="pills-new-projects-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-new-projects"
              type="button"
              role="tab"
              aria-controls="pills-new-projects"
              aria-selected="false"
            >
              {t("common:projects.projectNavButtons.5")}
            </button>
          </li>
        </ul>
      </div>
      <div className="tab-content" id="pills-tabContent">
        {/* Web App */}

        <div
          className="tab-pane fade show active"
          id="pills-webapp"
          role="tabpanel"
          aria-labelledby="pills-webapp-tab"
          tabIndex={0}
        >
          <div className="container">
            <div className="row">
              {appProjectsData.map((project) => (
                <div key={project.id} className="col-sm-12 col-lg-6 my-3">
                  <div className="card border-0">
                    <div
                      id={project.id}
                      className="carousel slide m-2"
                      data-bs-ride="carousel"
                    >
                      <div className="carousel-inner">
                        {filterImages(project.images).map((image, index) => (
                          <div
                            key={index}
                            className={`carousel-item ${
                              index === 0 ? "active" : ""
                            }`}
                          >
                            <img
                              src={image}
                              style={{
                                maxHeight: "40vh",
                              }}
                              className="d-block m-auto border rounded"
                              alt={`app-${index + 1}.png`}
                            />
                          </div>
                        ))}
                      </div>
                      {/* Carousel Controls */}
                      <button
                        className="carousel-control-prev"
                        type="button"
                        data-bs-target={`#${project.id}`}
                        data-bs-slide="prev"
                      >
                        <span
                          className="carousel-control-prev-icon"
                          aria-hidden="true"
                        ></span>
                        <span className="visually-hidden">Previous</span>
                      </button>
                      <button
                        className="carousel-control-next"
                        type="button"
                        data-bs-target={`#${project.id}`}
                        data-bs-slide="next"
                      >
                        <span
                          className="carousel-control-next-icon"
                          aria-hidden="true"
                        ></span>
                        <span className="visually-hidden">Next</span>
                      </button>
                    </div>

                    {/* Card Body */}
                    <div className="card-body">
                      <h5 className="card-title my-2">
                        {t(`appProjects:appProjectsData.${project.id}.title`)}
                      </h5>
                      <h6 className="card-title my-3">
                        {t("common:projects.projectExperience")}
                      </h6>
                      <div className="card-text">
                        {project.skills.map((skill, index) => (
                          <p
                            key={index}
                            className="my-1 text-center p-2 bg-secondary rounded-pill"
                          >
                            {skill}
                          </p>
                        ))}
                      </div>
                      <h6 className="card-title my-2">
                        {t("common:projects.projectDescription")}
                      </h6>
                      <p className="card-text">
                        {t(
                          `appProjects:appProjectsData.${project.id}.description`
                        )}
                      </p>
                      <a href={project.link} className="btn btn-success">
                        {t("common:projects.projectSiteButton")}
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile App */}

        <div
          className="tab-pane fade"
          id="pills-mobileapp"
          role="tabpanel"
          aria-labelledby="pills-mobileapp-tab"
          tabIndex={0}
        >
          <div className="container">
            <div className="row">
              {mobileProjectsData.map((project) => (
                <div key={project.id} className="col-sm-12 col-lg-6 my-3">
                  <div className="card border-0">
                    <div
                      id={project.id}
                      className="carousel slide m-2"
                      data-bs-ride="carousel"
                    >
                      <div className="carousel-inner">
                        {filterImages(project.images).map((image, index) => (
                          <div
                            key={index}
                            className={`carousel-item ${
                              index === 0 ? "active" : ""
                            }`}
                          >
                            <img
                              src={image}
                              style={{ maxHeight: "40vh" }}
                              className="d-block m-auto border rounded"
                              alt={`app-${index + 1}.png`}
                            />
                          </div>
                        ))}
                      </div>
                      {/* Carousel Controls */}
                      <button
                        className="carousel-control-prev"
                        type="button"
                        data-bs-target={`#${project.id}`}
                        data-bs-slide="prev"
                      >
                        <span
                          className="carousel-control-prev-icon"
                          aria-hidden="true"
                        ></span>
                        <span className="visually-hidden">Previous</span>
                      </button>
                      <button
                        className="carousel-control-next"
                        type="button"
                        data-bs-target={`#${project.id}`}
                        data-bs-slide="next"
                      >
                        <span
                          className="carousel-control-next-icon"
                          aria-hidden="true"
                        ></span>
                        <span className="visually-hidden">Next</span>
                      </button>
                    </div>

                    {/* Card Body */}
                    <div className="card-body">
                      <h5 className="card-title my-2">
                        {t(
                          `mobileProjects:mobileProjectsData.${project.id}.title`
                        )}
                      </h5>
                      <h6 className="card-title my-3">
                        {t("common:projects.projectExperience")}
                      </h6>
                      <div className="card-text">
                        {project.skills.map((skill, index) => (
                          <p
                            key={index}
                            className="my-1 text-center p-2 bg-secondary rounded-pill"
                          >
                            {skill}
                          </p>
                        ))}
                      </div>
                      <h6 className="card-title my-2">
                        {t("common:projects.projectDescription")}
                      </h6>
                      <p className="card-text">
                        {t(
                          `mobileProjects:mobileProjectsData.${project.id}.description`
                        )}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Websites */}

        <div
          className="tab-pane fade"
          id="pills-website"
          role="tabpanel"
          aria-labelledby="pills-website-tab"
          tabIndex={0}
        >
          <div className="container">
            <div className="row">
              {siteProjectsData.map((project) => (
                <div key={project.id} className="col-sm-12 col-lg-6 my-3">
                  <div className="card border-0">
                    <div
                      id={project.id}
                      className="carousel slide m-2"
                      data-bs-ride="carousel"
                    >
                      <div className="carousel-inner">
                        {filterImages(project.images).map((image, index) => (
                          <div
                            key={index}
                            className={`carousel-item ${
                              index === 0 ? "active" : ""
                            }`}
                          >
                            <img
                              src={image}
                              style={{ maxHeight: "40vh" }}
                              className="d-block m-auto border rounded"
                              alt={`site-${index + 1}.png`}
                            />
                          </div>
                        ))}
                      </div>
                      {/* Carousel Controls */}
                      <button
                        className="carousel-control-prev"
                        type="button"
                        data-bs-target={`#${project.id}`}
                        data-bs-slide="prev"
                      >
                        <span
                          className="carousel-control-prev-icon"
                          aria-hidden="true"
                        ></span>
                        <span className="visually-hidden">Previous</span>
                      </button>
                      <button
                        className="carousel-control-next"
                        type="button"
                        data-bs-target={`#${project.id}`}
                        data-bs-slide="next"
                      >
                        <span
                          className="carousel-control-next-icon"
                          aria-hidden="true"
                        ></span>
                        <span className="visually-hidden">Next</span>
                      </button>
                    </div>

                    {/* Card Body */}
                    <div className="card-body">
                      <h5 className="card-title my-2">
                        {t(`siteProjects:siteProjectsData.${project.id}.title`)}
                      </h5>
                      <h6 className="card-title my-3">
                        {t("common:projects.projectExperience")}
                      </h6>
                      <div className="card-text">
                        {project.skills.map((skill, index) => (
                          <p
                            key={index}
                            className="my-1 text-center p-2 bg-secondary rounded-pill"
                          >
                            {skill}
                          </p>
                        ))}
                      </div>
                      <h6 className="card-title my-2">
                        {t("common:projects.projectDescription")}
                      </h6>
                      <p className="card-text">
                        {t(
                          `siteProjects:siteProjectsData.${project.id}.description`
                        )}
                      </p>
                      <a href={project.link} className="btn btn-success">
                        {t("common:projects.projectSiteButton")}
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Python Projects */}

        <div
          className="tab-pane fade"
          id="pills-python-projects"
          role="tabpanel"
          aria-labelledby="pills-python-projects-tab"
          tabIndex={0}
        >
          <div className="container">
            <div className="row">
              {pythonProjects.map((project, index) => (
                <div key={index} className="col-sm-12 col-lg-6 my-3">
                  <div className="card-body">
                    <h5 className="card-title my-2">
                      {t(
                        `pythonProjects:pythonProjects.${project.title}.title`
                      )}
                    </h5>
                    <h6 className="card-title my-3">
                      {t("common:projects.projectExperience")}
                    </h6>
                    <div className="card-text">
                      {project.skills.map((skill, skillIndex) => (
                        <p
                          key={skillIndex}
                          className="my-1 text-center p-2 bg-secondary rounded-pill"
                        >
                          {skill}
                        </p>
                      ))}
                    </div>
                    <h6 className="card-title my-2">
                      {t("common:projects.projectDescription")}
                    </h6>
                    <p className="card-text">
                      {t(
                        `pythonProjects:pythonProjects.${project.title}.description`
                      )}
                    </p>
                    {project.link && (
                      <a href={project.link} className="btn btn-success">
                        {t("common:projects.projectSiteButton")}
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* New Projects */}

        <div
          className="tab-pane fade"
          id="pills-new-projects"
          role="tabpanel"
          aria-labelledby="pills-new-projects-tab"
          tabIndex={0}
        >
          <div className="text-center">
            {newProjects.map((project, index) => (
              <div key={index} className="my-3">
                <div className="my-1 text-center">
                  {t(`newProjects:newProjects.${project.name}.name`)}
                </div>
                <div>
                  <div
                    className="progress"
                    role="progressbar"
                    aria-label="Animated striped example"
                    aria-valuenow={project.progress}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  >
                    <div
                      className="progress-bar progress-bar-striped progress-bar-animated bg-success"
                      style={{ width: `${project.progress}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default animation(Projects, ["tracking-in-contract-bck"], [".animated"]);
