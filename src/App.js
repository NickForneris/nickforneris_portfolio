import React from 'react';
import './App.css';
import Cover from './Sections/CoverSection'
import Navigation from './Sections/Navbar';

const App = () => {
  return (
    <React.Fragment>
    <Navigation/>
    <Cover/>
    </React.Fragment>
  );
}

export default App;
