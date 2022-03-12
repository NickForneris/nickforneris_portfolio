import React, {useState, useEffect} from 'react';
import {Container, Button, Stack} from 'react-bootstrap';
import './App.css';
import About from './Sections/AboutMeSection';
import Cover from './Sections/CoverSection'
import Navigation from './Sections/Navbar';
import Skills from './Sections/SkillSection';
import Projects from './Sections/ProjectSection'
import References from './Sections/References';

const App = () => {

    const [fadeFob, setFobFade] = useState('hide');
    const [fadeMore, setMoreFade] = useState('fadeInMore');
    
    useEffect(() => {   
      window.addEventListener("scroll", listenToScroll);
      return () => 
         window.removeEventListener("scroll", listenToScroll); 
    }, [])
    
    const listenToScroll = () => {
      const winScroll = document.documentElement.scrollTop;
      
      if (winScroll == 0) {  
           setFobFade('fadeOutFob');
      } else {
           setFobFade('fadeInFob');
      } 
      
      if (winScroll == 0) {  
        setMoreFade('fadeInFob');
      } else {
        setMoreFade('fadeOutFob');
      }
    };

  return (
    <React.Fragment>
    <Container fluid>
    <Navigation/>
    <Cover/>
    <About/>
    <Skills/>
    <Projects/>
    <References/>
    <Button className={`${fadeFob} fob`} variant="dark" href="#top"><i className="bi bi-arrow-up-circle-fill up"/></Button>
    <h6 className={`${fadeMore} text-white more`}>
    <i class="bi bi-arrow-bar-down"></i>
    </h6>
    </Container>
    </React.Fragment>
  );
}

export default App;
