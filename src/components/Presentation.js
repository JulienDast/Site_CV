import React, { useState, useEffect } from 'react';
import '../styles/Presentation.css';
import ImgHome from '../img/ImgHome.png'


const Presentation = () => {
  const [wordIndex, setWordIndex] = useState(0);
  const [colorIndex, setColorIndex] = useState(0);
  const words = ["front-end,", "back-end,", "ou fullstack !"];
  const colors = ["#ffcb30", "#1957c2", "#ff654d"];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setWordIndex((index) => (index + 1) % words.length);
      setColorIndex((index)=> (index +1) % colors.length);
      }, 2000);

    return () => clearInterval(intervalId);
  }, [wordIndex]);

  return (
    <div id='jumbotron'>
      <div className='text'>
        <h1 className='bigTitle'>Développeur Web junior, <br/>à la recherche d'un projet</h1>
        <h2>
        <span className="skills" style={{ color: colors[colorIndex] }}>{words[wordIndex]}</span>
        </h2>
      </div>
      <div className="imgJumbotron">
        <img className= "imgCodeur" src={ImgHome} alt='img_codeur'></img>
      </div>
    </div>
  );
};

export default Presentation;
