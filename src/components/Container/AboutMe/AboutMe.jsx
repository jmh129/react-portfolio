import React from "react";
import "../AboutMe/AboutMe.css"
import Image from "../../../assets/portfolioImages/headshot-copy.png";

const AboutMe = () => {
  return (
    <div className="container fluid">
      <div className="row" id="AboutMe">
        <div className="col-sm-1"></div>
        <div className="col-sm-4">
          <img className="img-fluid" src={Image} alt="Headshot"></img>
        </div>
        <div className="col-sm-6">
          <h1 id="AboutMeTag">About Me</h1>
          <p>
            Hey, I'm a Full-Stack Web Developer, Engineer and Veteran
            of the United States Marine Corps. With Skills in MERN
            stack technologies and a background in Oracle Cloud
            implentation, I strive to learn the most relevant skills
            and have a passion for problem solving and helping others.
            I call South Florida home but, for the time being Atlanta
            is where I set up shop!{" "}
          </p>
        </div>
       
      </div>
    </div>
  );
};

export default AboutMe;
