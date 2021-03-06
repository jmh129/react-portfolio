import React from "react";
import Resume from "../../../assets/portfolioImages/JamesHoldingResume.pdf";
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
          <h1 id="Contact">Connect</h1>
          <Col id="contactCard" sm="8">
            <Card body>
              <div className="row">
                <div className="col-6">
                  <CardTitle className="contactInfo">
                    Linkedin
                  </CardTitle>
                  <a
                    href="https://www.linkedin.com/in/jamesholding"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon
                      className="fa-3x"
                      icon={faLinkedin}
                    />
                  </a>
                  <CardTitle className="contactInfo">
                    Github
                  </CardTitle>
                  <a
                    href="https://github.com/jmh129"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon
                      className="fa-3x"
                      icon={faGithub}
                    />
                  </a>
                  <CardTitle className="contactInfo">Email</CardTitle>
                  <a
                    href="mailto:james.holding90@gmail.com"
                    traget="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon
                      className="fa-3x"
                      icon={faEnvelope}
                    />
                  </a>
                  <CardTitle id="resume" className="contactInfo">
                    Check Out My Resume
                  </CardTitle>
                  <a
                    href={Resume}
                    traget="_blank"
                    rel="noopener noreferrer"
                  >
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
