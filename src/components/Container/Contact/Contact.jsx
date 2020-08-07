import React from "react";
import Resume from "../../../assets/portfolioImages/James Holding Resume Aug 20.pdf";
import { Card, CardTitle, Col } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faFile } from "@fortawesome/free-solid-svg-icons";
import "../Contact/Contact.css";

const Contact = () => {
  return (
    <div className="backgroundContact">
      <div className="container fluid">
        <div className="row">
          <h1 id="Contact">Connect With Me</h1>
          <Col id="contactCard" sm="8">
            <Card body>
              <div className="row">
                <div className="col-6">
                  <CardTitle className="contactInfo">
                    Linkedin
                  </CardTitle>
                  <a
                    href="www.linkedin.com/in/jamesholding"
                    traget="_blank"
                  >
                    <FontAwesomeIcon
                      className="fa-3x"
                      icon={faLinkedin}
                    />
                  </a>
                  <CardTitle className="contactInfo">
                    Github
                  </CardTitle>
                  <a href="https://github.com/jmh129" traget="_blank">
                    <FontAwesomeIcon
                      className="fa-3x"
                      icon={faGithub}
                    />
                  </a>
                  <CardTitle className="contactInfo">Email</CardTitle>
                  <a
                    href="mailto:james.holding90@gmail.com"
                    traget="_blank"
                  >
                    <FontAwesomeIcon
                      className="fa-3x"
                      icon={faEnvelope}
                    />
                  </a>
                </div>
                <div className="col-5">
                  <CardTitle id="resume" className="contactInfo">
                    Check Out My Resume
                  </CardTitle>
                  <a href={Resume}>
                    <FontAwesomeIcon
                      className="fa-3x"
                      icon={faFile}
                    />
                  </a>
                </div>
              </div>
            </Card>
          </Col>
        </div>
      </div>
    </div>
  );
};

export default Contact;
