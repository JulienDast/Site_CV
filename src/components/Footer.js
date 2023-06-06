import React from 'react';
import '../styles/Footer.css';
import CV from '../pdf/CV_Julien_Dast.pdf'

const Footer = () => {
  return (
    <div className='footer'>
      <hr/>
      <p>Julien Dast</p>
      <p>Développeur Web Junior</p>
      <p>CLERMONT, Hauts-de-France</p>
      <p>+33 6 80 94 29 71</p>
      <p>Pour plus d'informations :</p>
        <div className="buttons">
          <a href='https://www.linkedin.com/in/julien-dast-36b619261/' target='_blank' rel='noopener noreferrer'>
            <i className="fa-brands fa-linkedin fa-2xl"></i>
          </a>
          <a href='https://github.com/JulienDast' target='_blank' rel='noopener noreferrer'>
            <i className="fa-brands fa-github fa-2xl"></i>
          </a>
          <a href={CV} target='_blank' rel='noopener noreferrer'aria-label="Télécharger le CV">  
            <i className="fa-solid fa-download fa-2xl"></i>
          </a>
        </div>
    </div>
  );
};

export default Footer;