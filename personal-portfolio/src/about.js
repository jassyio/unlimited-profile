// Example in src/components/About.js
import React from 'react';
import { motion } from 'framer-motion';
import './About.css'; // Importing the CSS file
import Tetris from './tetris'; // Importing the Tetris component

function About() {
  return (
    <motion.section 
      id="about" 
      className="about"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h2>About Me</h2>
      <p>Hi, I'm Joseph Njaci, known as the Unlimited Developer. I'm a certified fullstack developer with a passion for crafting exceptional digital experiences. With expertise in frontend development and a strong background in programming, I thrive on creating innovative solutions that blend creativity with technical proficiency. My toolbox includes a wide array of languages, frameworks, and developer tools, empowering me to tackle diverse challenges with confidence. Let's build something amazing together!</p>
      
      <Tetris />
    </motion.section>
  );
}

export default About;
