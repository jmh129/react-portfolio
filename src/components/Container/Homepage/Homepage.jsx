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
        <h1 className="HomepageText">
          Hey!
          <br />
          Welcome to my page.
        </h1>
        <br />
        <h3>James Holding</h3>
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
    </div>
  );
};

export default Homepage;
