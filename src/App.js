import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./components/Container/Homepage/Homepage";
import AboutMe from "./components/Container/AboutMe/AboutMe";
import Portfolio from "./components/Container/Portfolio/Portfolio";
import Contact from "./components/Container/Contact/Contact";
import Footer from "./components/Footer/Footer";
import { Container, Row, Col } from "reactstrap";

function App() {
  return (
    <div>
      <Navbar />
      <Container>
        <Row>
          <Col>
            <HomePage />
          </Col>
        </Row>
        <Row>
          <Col>
            <AboutMe />
          </Col>
        </Row>
        <Row>
          <Col>
            <Portfolio />
          </Col>
        </Row>
        <Row>
          <Col>
            <Contact />
          </Col>
        </Row>
      </Container>
      <Row>
        <Col>
          <Footer />
        </Col>
      </Row>
    </div>
  );
}

export default App;
