// src/components/Skills.js
import React from 'react';
import './Skills.css'; // Importing the CSS file
import Tetris from './tetris'; // Importing the Tetris component

function Skills() {
  return (
    <section id="skills" className="skills">
      <h2>Skills</h2>
      <p>My skills include HTML, CSS, JavaScript, Node.js, React, jQuery, MySQL, NoSQL, Git and GitHub. I also have experience in Python AI and am a continuous learner to stay updated with new frameworks and tools.</p>
      
      <Tetris /> {/* Adding Tetris component */}
    </section>
  );
}

export default Skills;
