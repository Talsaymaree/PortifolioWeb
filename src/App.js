import React from 'react';
import './App.css';

import Header from './components/Header';
import About from './components/About';
import Work from './components/work';
import Contact from './components/Contact';
import Navbar from './components/Navbar'
import TitleSlide from './components/TitleSlide'
import EventSlide from './components/EventSilde'


function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <div className="App-header">     

      <Header></Header>  
            
      </div>
 <TitleSlide></TitleSlide>
 <div id='mbpad'>
      <div className='About'>
        <About></About>
      </div>
      <div className='work'>

        <Work></Work>        <EventSlide className="event"/>    
      </div>
      </div>
      <div className='contact'>
        <Contact></Contact>
      </div>
    </div>
  );
}

export default App;
