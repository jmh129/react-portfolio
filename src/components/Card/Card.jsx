import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
} from "reactstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";

import "../Card/Card.css"

const ProjectCard = ({
  imageName,
  projectTitle,
  cardText,
  deployedLink,
  gitHubLink,
}) => {
  return (
    <div>
      <Card>
        <CardImg
          top
          width="100%"
          height="200px"
          src={imageName}
          alt={projectTitle}
        />
        <CardBody>
          <CardTitle>{projectTitle}</CardTitle>
          <CardText>{cardText}</CardText>
          <a href={deployedLink}>
            <FontAwesomeIcon className= "fa-2x" icon={faLink} />
          </a>
          <a href={gitHubLink}>
            <FontAwesomeIcon className= "fa-2x" icon={faGithub} />
          </a>
        </CardBody>
      </Card>
    </div>
  );
};

export default ProjectCard;
