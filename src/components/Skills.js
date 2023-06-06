import React from 'react';
import ImgSkills from '../img/ImgSkills.png'
import '../styles/Skills.css'

const Skills = () => {
  return (
    <div className='skill'>
      <div className='Img'>
        <img className="ImgSkills" src={ImgSkills} alt='LogoSkills'></img>
      </div>
      <div className='skillsList'>
        
        <h2>Langages :</h2>
        <ul className='list'>
          <li><img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt='HTML5'/></li>
          <li><img src='https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white'alt='CSS3'/></li>
          <li><img src='https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E'alt='JS'/></li>
          <li><img src='https://img.shields.io/badge/Ruby-CC342D?style=for-the-badge&logo=ruby&logoColor=white'alt='Ruby'/></li>
          <li><img src="https://img.shields.io/badge/Markdown-000000?style=for-the-badge&logo=markdown&logoColor=white"alt='Markdown'/></li>
        </ul>
        <h2>Framework / Librairies JS :</h2>
        <ul className='list'>
          <li><img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"alt='React'/></li>
          <li><img src="https://img.shields.io/badge/Next-black?logo=next.js&logoColor=white"alt='Next'/></li>
        </ul>
        <h2>Framework / Librairies CSS :</h2>
        <ul className='list'>
          <li><img src='https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white'alt='Tailwind'/></li>
          <li><img src='https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white'alt='Bootstrap'/></li>
          <li><img src="https://img.shields.io/badge/SASS-hotpink.svg?logo=SASS&logoColor=white"alt='SASS'/></li>
        </ul>
        <h2>Bases de données :</h2>
        <ul className='list'>
          <li><img src="https://img.shields.io/badge/MySQL-00000F?style=for-the-badge&logo=mysql&logoColor=white"alt='MySQL'/></li>
          <li><img src='https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white'alt='Postgresql'/></li>
        </ul>
        <h2>Back-end :</h2>
        <ul className='list'>
          <li><img src='https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white'alt='Node'/></li>
          <li><img src='https://img.shields.io/badge/Ruby_on_Rails-CC0000?style=for-the-badge&logo=ruby-on-rails&logoColor=white'alt='Rails'/></li>
        </ul>
        <h2>Systèmes d'exploitation / fonctionnalités :</h2>
        <ul className='list'>
          <li><img src='https://img.shields.io/badge/PowerShell-%235391FE.svg?style=for-the-badge&logo=powershell&logoColor=white'alt='Powershell'/></li>
          <li><img src='https://img.shields.io/badge/Linux-FCC624?style=for-the-badge&logo=linux&logoColor=black'alt='Linux'/></li>
          <li><div className='wsl'>WSL</div></li>
        </ul>
        <h2>Déploiement :</h2>
        <ul className='list'>
          <li><img src='https://img.shields.io/badge/Heroku-430098?style=for-the-badge&logo=heroku&logoColor=white' alt='Heroku'/></li>
          <li><img src='https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white'alt='Vercel'/></li>
          <li><div className='fly'>Fly.io</div></li>
        </ul>
        <h2>Mais aussi :</h2>
        <ul className='list'>
          <li><img src='https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white'alt='Git'/></li>
          <li><img src='https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white'alt='Github'/></li>
          <li><img src='https://img.shields.io/badge/Trello-%23026AA7.svg?style=for-the-badge&logo=Trello&logoColor=white'alt='Trello'/></li>
          <li><img src='https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white'alt='Figma'/></li>
        </ul>
      </div>
    </div>
  );
};

export default Skills;