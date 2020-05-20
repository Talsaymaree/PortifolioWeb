import React, { Component } from 'react';
import Project from './project';
import Fade from 'react-reveal/Fade';
import data from '../yourdata';

class Work extends Component {
    state = {  }
    render() { 
        return (<div>
        <h1 className='heading'>
        <Fade bottom cascade>Music.</Fade></h1>
        <div className='music-container'>
        <iframe id='bandcamp' src="https://bandcamp.com/EmbeddedPlayer/album=4122828318/size=large/bgcol=ffffff/linkcol=e99708/artwork=none/transparent=true/" seamless><a href="http://ch4ins4w.bandcamp.com/album/turbo-apocalypse">Turbo Apocalypse by CH4iNS4W</a></iframe>        <div className='work-content'>
                {data.projects.map((project)=>(
                    <Project key={project.id}
                             title = {project.title}
                             releaseDate = {project.releaseDate}
                             imageSrc = {project.imageSrc}
                             url={project.url}
                     ></Project>
                ))}
                
                <div>
                
   
        </div>      </div><h1 className='headingVideo'>
        <Fade bottom cascade> Videos.</Fade></h1>
        <div className='videoContainer'>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/TGyZVyJdd2E" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/ZUQ4QYOj-pY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <h1 className='heading'><Fade bottom cascade> Live set.</Fade></h1>  
        <div className='liveset-container'>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/wxGnBnFHvwI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            </div>
            </div> );
    }
}
 
export default Work;