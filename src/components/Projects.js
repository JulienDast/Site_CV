import React, { useState } from 'react';
import Trox1 from '../img/Trox1.png'
import Trox2 from '../img/Trox2.png'
import Trox3 from '../img/Trox3.png'
import Trox4 from '../img/Trox4.png'
import Sportner from '../img/Sportner.png'
import '../styles/Projects.css'

const Projects = () => {
  const [troxNumber, setTroxNumber] = useState(1);
  const [troxImage, setTroxImage] = useState(Trox1);
 

  const handleArrowClick = (direction) => {
    const newTroxNumber = direction === 'arrowD' ? troxNumber + 1 : troxNumber - 1;
    if (newTroxNumber > 4) {
      setTroxNumber(1);
      setTroxImage(Trox1);
    } else if (newTroxNumber < 1) {
      setTroxNumber(4);
      setTroxImage(Trox4);
    } else {
      setTroxNumber(newTroxNumber);
      switch (newTroxNumber) {
        case 1:
          setTroxImage(Trox1);
          break;
        case 2:
          setTroxImage(Trox2);
          break;
        case 3:
          setTroxImage(Trox3);
          break;
        case 4:
          setTroxImage(Trox4);
          break;
        default:
          setTroxImage(Trox1);
      }
    }
  };

  return (
    <div id='projects'>
      <h1>Mes projets les plus récents :</h1>
      <div className="portfolio">
        <div className="project1">
        <h2><a href='https://troxx.fly.dev/' target='_blank' rel='noreferrer'>https://troxx.fly.dev/</a></h2>
          <img className='troxImg' src={troxImage} alt={`Site Trox${troxNumber}`}/>
          <span className="arrowG" onClick={() => handleArrowClick('arrowG')}><i className="fa-solid fa-circle-chevron-left"></i></span>
          <span className="arrowD" onClick={() => handleArrowClick('arrowD')}><i className="fa-solid fa-circle-chevron-right"></i></span>
        </div>
        
        <div className="project2">
          <h2>Sportner</h2>
          <img className='sportnerImg' src={Sportner} alt={`Site Sportner`}/>
        </div>
      </div>
    </div>
  );
};

export default Projects;
