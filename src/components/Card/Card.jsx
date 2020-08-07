import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  // CardSubtitle,
  Button,
} from "reactstrap";

const ProjectCard = ({
  imageName,
  projectTitle,
  cardText,
  //   deployedLink,
  //   repoName,
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
              {/* <CardSubtitle>{}</CardSubtitle> */}
              <CardText>{cardText}</CardText>
              <Button>Button</Button>
            </CardBody>
          </Card>
        </div>
  );
};

export default ProjectCard;
