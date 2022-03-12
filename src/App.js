import React, {useState, useEffect} from 'react';
import {Container, Button} from 'react-bootstrap';
import './App.css';
import About from './Sections/AboutMeSection';
import Cover from './Sections/CoverSection'
import Navigation from './Sections/Navbar';
import Skills from './Sections/SkillSection';

const App = () => {

    const [fade, setFade] = useState('hide');
    
    useEffect(() => {   
      window.addEventListener("scroll", listenToScroll);
      return () => 
         window.removeEventListener("scroll", listenToScroll); 
    }, [])
    
    const listenToScroll = () => {
      const winScroll = document.documentElement.scrollTop;
      
      if (winScroll == 0) {  
           setFade('fadeOutFob');
      } else {
           setFade('fadeInFob');
      }  
    };

  return (
    <React.Fragment>
    <Container fluid>
    <Navigation/>
    <Cover/>
    <About/>
    <Skills/>
    <Button className={`${fade} fob`} variant="dark" href="#top"><i className="bi bi-arrow-up-circle-fill up"/></Button>
    </Container>
    </React.Fragment>
  );
}

export default App;
