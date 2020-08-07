import React from "react";
import { Link } from "react-scroll";
import { Button } from "reactstrap";
import "./Homepage.css";

const Homepage = () => {
  return (
    <div id="homepage" className="background">
      <div className="top-container flex">
        <h1>
          Hi, I'm James.
          <br />
          Welcome to my page.
        </h1>
        <div>
          <Button id="start-button" color="transparent">
            <Link
              className="nav-link"
              activeClass="active"
              to="AboutMe"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            ></Link>
            <h3>V</h3>
          </Button>{" "}
        </div>
      </div>
    </div>
  );
};

export default Homepage;
