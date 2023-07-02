import React, { useState } from 'react';
import Trox1 from '../img/Trox1.png'
import Trox2 from '../img/Trox2.png'
import Trox3 from '../img/Trox3.png'
import Trox4 from '../img/Trox4.png'
import Sportner1 from '../img/sportner1.jpg';
import Sportner2 from '../img/sportner2.jpg';
import Sportner3 from '../img/sportner3.jpg';
import Sportner4 from '../img/sportner4.jpg';
import '../styles/Projects.css'

const Projects = () => {
  const [troxNumber, setTroxNumber] = useState(1);
  const [troxImage, setTroxImage] = useState(Trox1);
  const [sportnerNumber, setSportnerNumber] = useState(1);
  const [sportnerImage, setSportnerImage] = useState(Sportner1);
  

  const handleArrowClickTrox = (direction) => {
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

  const handleArrowClickSportner = (direction) => {
    const newSportnerNumber = direction === 'arrowD' ? sportnerNumber + 1 : sportnerNumber - 1;
    if (newSportnerNumber > 4) {
      setSportnerNumber(1);
      setSportnerImage(Sportner1);
    } else if (newSportnerNumber < 1) {
      setSportnerNumber(4);
      setSportnerImage(Sportner4);
    } else {
      setSportnerNumber(newSportnerNumber);
      switch (newSportnerNumber) {
        case 1:
          setSportnerImage(Sportner1);
          break;
        case 2:
          setSportnerImage(Sportner2);
          break;
        case 3:
          setSportnerImage(Sportner3);
          break;
        case 4:
          setSportnerImage(Sportner4);
          break;
        default:
          setSportnerImage(Sportner1);
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
          <span className="arrowG" onClick={() => handleArrowClickTrox('arrowG')}><i className="fa-solid fa-circle-chevron-left"></i></span>
          <span className="arrowD" onClick={() => handleArrowClickTrox('arrowD')}><i className="fa-solid fa-circle-chevron-right"></i></span>
        </div>
        
        <div className="project1">
        <h2><a href='https://sportner.vercel.app/' target='_blank' rel='noreferrer'>https://sportner.vercel.app/</a></h2>
          <img className='sportnerImg' src={sportnerImage} alt={`Site Sportner${sportnerImage}`}/>
          <span className="arrowG" onClick={() => handleArrowClickSportner('arrowG')}><i className="fa-solid fa-circle-chevron-left"></i></span>
          <span className="arrowD" onClick={() => handleArrowClickSportner('arrowD')}><i className="fa-solid fa-circle-chevron-right"></i></span>
        </div>
      </div>
    </div>
  );
};

export default Projects;
