// src/components/Projects.js
import React from 'react';
import './Projects.css'; // Importing the CSS file
import Tetris from './tetris'; // Importing the Tetris component

function Projects() {
  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="project-list">
        <div className="project-item">
          <h3>E-commerce Web App</h3>
          <p>A fully developed online gym apparel shop made with React, Node.js, MongoDB, and Tailwind CSS. Hosted on Vercel. <a href="your-git-link">GitHub Link</a></p>
        </div>
        <div className="project-item">
          <h3>Weather Forecast Web App</h3>
          <p>A weather forecast web app made with React, CSS, and the OpenWeather API, localized in several languages.</p>
        </div>
        <div className="project-item">
          <h3>Football Website</h3>
          <p>A football website made with React, Node.js, and MySQL.</p>
        </div>
        <div className="project-item">
          <h3>Dice Game</h3>
          <p>A dice game made with jQuery and CSS, hosted and working.</p>
        </div>
      </div>
      
      <Tetris /> {/* Adding Tetris component */}
    </section>
  );
}

export default Projects;
