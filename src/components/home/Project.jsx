import React from "react";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Row from "react-bootstrap/Row";
import ProjectCard from "./ProjectCard";

const dummyProject = {
  name: null,
  description: null,
  svn_url: null,
  stargazers_count: null,
  languages_url: null,
  pushed_at: null,
};

const Project = ({ heading, username, length, specfic }) => {
  const dummyProjectsArr = new Array(length + specfic.length).fill(
    dummyProject
  );

  const projectsArray = [
    {
      name: "Payyd",
      description:
        "Payyd Is a online invoicing service for a freelancers, small businesses etc. Payyd redefined and reimagined the way anyone can do business internationally.",
      languages_url: {
        React_Js: 3200,
        Javascript: 2000,
        CSS: 1500,
      },
      svn_url:
        "https://payyd.app/",
    },
    {
      name: "Cyber Cities",
      description:
        "Cyber Cities is an American Ecommerce Store with 3d Antimated Custom UI for Products Listing.This web app contain multiple Vendor options and dropshipping feature to users.(This app is in Progress)",
      languages_url: {
        React_Js: 3200,
        Javascript: 2000,
        CSS: 1500,
      },
      svn_url:
        "https://cyeber-cities.web.app/",
    },
    {
      name: "Payyd Portal",
      description:
      "Payyd Is a online invoicing service for a freelancers, small businesses etc. Payyd redefined and reimagined the way anyone can do business internationally.",
      languages_url: {
        React_Js: 3200,
        Javascript: 2000,
        CSS: 1500,
      },
      svn_url:
      "https://payyd.money/login",
    },
    {
      name: "Splendid Accounts",
      description:
        "Splendid Invoices is a subsidiary app of Splendidaccounts.com, Splendid Accounts is an online accounting and inventory management system. In this app, you can manage your all sales activities.",
      languages_url: {
        React_Native: 3200,
        Javascript: 2000,
        CSS: 1500,
      },
      svn_url:
        "https://play.google.com/store/apps/details?id=com.isplendid.invoicing",
    },
    {
      name: "Sayaansh Ecommerce Store",
      description:
        "Sayaansh is a marketplace of and for a common man. Be it an individual craftsman who is skilled in art of his own type or a local business, or he is someone who wants to sell his or her unique creations and products all over India & across the world.",
      languages_url: {
        React_Native: 3200,
        Javascript: 2000,
        CSS: 1500,
      },
      svn_url: "https://www.sayaansh.com/",
    },
    {
      name: "Salesman Tracking App",
      description:
        "Salesman Tracker is a sales tracking and sales reporting app for business owners & sales managers. This App is directly connected with Splendid Accounts.",
      languages_url: {
        React_Native: 3200,
        Javascript: 2000,
        CSS: 1500,
      },
      svn_url:
        "https://play.google.com/store/apps/details?id=com.splendidaccounts.splendidtracker",
    },
    {
      name: "One Love Laboratory",
      description:
        "This app provides the highest quality results using the latest laboratory technology empowering physicians with the needed support for accurate clinical decisions and optimal patient care.",
      languages_url: {
        React_Native: 3200,
        Javascript: 2000,
        CSS: 1500,
      },
      svn_url: "https://play.google.com/store/apps/details?id=com.onelove",
    },
  ];

  return (
    <Jumbotron fluid id="projects" className="bg-light m-0">
      <Container className="">
        <h2 className="display-4 pb-5 text-center">{heading}</h2>
        <Row>
          {projectsArray.length
            ? projectsArray.map((project, index) => (
                <ProjectCard
                  key={`project-card-${index}`}
                  id={`project-card-${index}`}
                  value={project}
                />
              ))
            : dummyProjectsArr.map((project, index) => (
                <ProjectCard
                  key={`dummy-${index}`}
                  id={`dummy-${index}`}
                  value={project}
                />
              ))}
        </Row>
      </Container>
    </Jumbotron>
  );
};

export default Project;
