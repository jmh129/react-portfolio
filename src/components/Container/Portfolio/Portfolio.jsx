import React from "react";
import ProjectCard from "../../Card/Card";
import FlexCity from "../../../assets/portfolioImages/FlexCity.png";
import BruHub from "../../../assets/portfolioImages/BruHub.png";
import EmployeeDirectory from "../../../assets/portfolioImages/EmployeeDirectory.png";
import Mars from "../../../assets/portfolioImages/mars.jpg";
import WeatherDashboard from "../../../assets/portfolioImages/WeatherDashboard.png";
import NoteTaker from "../../../assets/portfolioImages/NoteTaker.png";
import CodeQuiz from "../../../assets/portfolioImages/CodeQuiz.png";
import "../Portfolio/Portfolio.css";

const Portfolio = () => {
  return (
    <div>
      <div className="container center fluid" id="Portfolio">
        <h1 id="PortfolioTag" className="text-left">
          Portfolio
        </h1>
      </div>
      <div className="container center fluid" id="ProjectCards">
        <div className="row">
          <div className="col d-flex align-content-center flex-wrap" id="CardList">
            <ProjectCard
              imageName={FlexCity}
              projectTitle="FlexCity"
              cardText="A Fitness App"
              deployedLink="https://blooming-coast-09812.herokuapp.com/"
              gitHubLink="https://github.com/jmh129/project-2"
            ></ProjectCard>
            <ProjectCard
              imageName={BruHub}
              projectTitle="BruHub"
              cardText="A Local Brewery Finder"
              deployedLink="https://jmh129.github.io/BruHub/"
              gitHubLink="https://github.com/jmh129/BruHub"
            ></ProjectCard>
            <ProjectCard
              imageName={EmployeeDirectory}
              projectTitle="Employee Directory"
              cardText="An Employee Directory built with React."
              deployedLink="https://jmh129.github.io/gt-react-employee-directory/"
              gitHubLink="https://github.com/jmh129/gt-react-employee-directory"
            ></ProjectCard>
            <ProjectCard
              imageName={Mars}
              projectTitle="Martian Weather - Coming Soon!"
              cardText="Martian Weather app via NASA API"
              deployedLink="Coming Soon"
              gitHubLink="Coming Soon"
            ></ProjectCard>
            <ProjectCard
              imageName={WeatherDashboard}
              projectTitle="Weather Dashboard"
              cardText="A Real Time Weather and Forecast App."
              deployedLink="https://jmh129.github.io/gt-weather-dashboard/"
              gitHubLink="https://github.com/jmh129/gt-weather-dashboard"
            ></ProjectCard>
            <ProjectCard
              imageName={NoteTaker}
              projectTitle="Note Taker"
              cardText="Keep Track of Your Notes."
              deployedLink="https://infinite-oasis-43679.herokuapp.com/"
              gitHubLink="https://github.com/jmh129/gt-note-taker"
            ></ProjectCard>
            <ProjectCard
              imageName={CodeQuiz}
              projectTitle="Code Quiz"
              cardText="Test Your Skills!"
              deployedLink="https://jmh129.github.io/gt-code-quiz/index.html"
              gitHubLink="https://github.com/jmh129/gt-code-quiz"
            ></ProjectCard>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
