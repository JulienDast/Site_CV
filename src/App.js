import React from 'react';
import ProgressBar from './components/ProgressBar';
import Header from './components/Header';
import Presentation from './components/Presentation';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import TopPage from './components/TopPage';
import './styles/App.css'


const App = () => {
  return (
    <div>
      <TopPage/>
      <ProgressBar/>
      <Header/>
      <Presentation/>
      <Skills/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  );
};

export default App;