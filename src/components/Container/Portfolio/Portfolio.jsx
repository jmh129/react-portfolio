import React from "react";
import ProjectCard from "../../Card/Card";
import FlexCity from "../../../assets/portfolioImages/FlexCity.png";
import BruHub from "../../../assets/portfolioImages/BruHub.png";
import EmployeeDirectory from "../../../assets/portfolioImages/EmployeeDirectory.png";
import WeatherDashboard from "../../../assets/portfolioImages/WeatherDashboard.png";
import NoteTaker from "../../../assets/portfolioImages/NoteTaker.png";
import CodeQuiz from "../../../assets/portfolioImages/CodeQuiz.png";

const Portfolio = () => {
  return (
    <div>
      <div className="container fluid" id="Portfolio">
        <h1 className="text-center">Portfolio</h1>
      </div>
      <div className="row">
        <ProjectCard
          imageName={FlexCity}
          projectTitle="FlexCity"
          cardText="FlexCity Fitness App"
        ></ProjectCard>
        <ProjectCard
          imageName={BruHub}
          projectTitle="BruHub"
          cardText="Brwery Finder"
        ></ProjectCard>
        <ProjectCard
          imageName={EmployeeDirectory}
          projectTitle="Employee Directory"
          cardText="An Employee Directory"
        ></ProjectCard>
        <ProjectCard
          imageName={WeatherDashboard}
          projectTitle="Weather Dashboard"
          cardText="Weather App"
        ></ProjectCard>
        <ProjectCard
          imageName={NoteTaker}
          projectTitle="Note Taker"
          cardText="Note Taking App"
        ></ProjectCard>
        <ProjectCard
          imageName={CodeQuiz}
          projectTitle="Code Quiz"
          cardText="A Coding Quiz"
        ></ProjectCard>
      </div>
    </div>
  );
};

export default Portfolio;
