import React, { useState, useEffect } from 'react';
import '../styles/TopPage.css';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div>
      {isVisible && (
        <div className="scroll-to-top-button" onClick={scrollToTop}>
          <i id='topPage' className="fa-regular fa-circle-up fa-2xl"></i>  
        </div>
      )}
    </div>
  );
};

export default ScrollToTopButton;
