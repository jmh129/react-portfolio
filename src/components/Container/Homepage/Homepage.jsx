import React from "react";
import { Link } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import "../../Navbar/Navbar";
import "./Homepage.css";

const Homepage = () => {
  return (
    <div id="homepage" className="background">
      <div className="top-container flex">
        <h1 className="HomepageText">James Holding</h1>
        <br />
        <h3>Fullstack Web Developer</h3>
      </div>
      <Link
        className="nav-link"
        activeClass="active"
        to="AboutMe"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      >
        <button className="angleDown">
          <FontAwesomeIcon icon={faChevronDown} />
        </button>
      </Link>
    </div>
  );
};

export default Homepage;
