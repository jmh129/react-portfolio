import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from './components/Navbar/Navbar';
import HomePage from './components/Container/Homepage/Homepage';
import AboutMe from './components/Container/AboutMe/AboutMe';
import Portfolio from './components/Container/Portfolio/Portfolio';
import Contact from './components/Container/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <Navbar />
      <HomePage />
      <AboutMe />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
