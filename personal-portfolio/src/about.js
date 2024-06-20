// Example in src/components/About.js
import React from 'react';
import { motion } from 'framer-motion';

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
      <p>Hi, I'm [Your Name], a web developer with experience in HTML, CSS, JavaScript, React, and Node.js.</p>
    </motion.section>
  );
}

export default About;
