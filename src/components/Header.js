import React from 'react';
import { useState } from 'react';
import '../styles/Header.css';
import CV from '../pdf/CV_Julien_Dast.pdf'


const Header = () => {

  const [text, setText] = useState("");
  const scrollToForm = () => {
    const formElement = document.getElementById("form");
    formElement.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <div className="header">
        <a onClick={scrollToForm}>
          <p>Intéressés pour travailler avec moi ? Cliquez ici pour me contacter !</p>
        </a>
      </div>
      <div className="bandeau">
        <div className="name">
          <h1>JULIEN DAST</h1>
        </div>
        <div className="buttons">
          <a href='https://www.linkedin.com/in/julien-dast-36b619261/' target='_blank' rel='noopener noreferrer' aria-label="Voir le profil LinkedIn">
            <i 
            className="fa-brands fa-linkedin fa-2xl"
            onMouseOver={() => setText("LinkedIn")}
            onMouseLeave={()=>setText("")}
            ></i>
          </a>
          <a href='https://github.com/JulienDast' target='_blank' rel='noopener noreferrer' aria-label="Voir le profil GitHub">
            <i 
            className="fa-brands fa-github fa-2xl"
            onMouseOver={() => setText("GitHub")}
            onMouseLeave={()=>setText("")}
            ></i>
          </a>
          <a href={CV} target='_blank' rel='noopener noreferrer'aria-label="Télécharger le CV">  
            <i 
          className="fa-solid fa-download fa-2xl"
          onMouseOver={() => setText("C.V")}
          onMouseLeave={()=>setText("")}
            ></i>
          </a>
          <span className="text-box"><h1 dangerouslySetInnerHTML={{ __html: text }}></h1></span>
        </div>
      </div>
    </div>
  );
};

export default Header;