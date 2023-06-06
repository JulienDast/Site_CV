import React from 'react';
import { motion, useScroll } from "framer-motion";
import '../styles/ProgressBar.css';

const ProgressBar = () => {
  const { scrollYProgress } = useScroll();
  return (
    <div>
      <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
      />      
    </div>
  );
};

export default ProgressBar;