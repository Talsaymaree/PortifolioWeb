import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import data from '../yourdata';

class About extends Component {
    state = {  }
    render() { 
        return (<div >
            
            <h1 id='about-title'><Fade bottom cascade>About.</Fade></h1>
             <div className='about-content'>
                 </div> {data.ShowAboutImageTwo ? <img src={data.aboutImageTwo} id='imgtwo' alt='about image two'></img> : null}   
            <div className='about-image-text'>
                        
               {data.ShowAboutImage ? <img src={data.aboutImage} id='imgone' alt='about image'></img> : null}
            <Fade bottom id='fade'>
                    <p>{data.abouttext}</p>
            </Fade>
             
            </div>

        </div>  );
    }
}
 
export default About;