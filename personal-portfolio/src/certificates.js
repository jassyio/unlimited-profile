// src/components/CertificatesAndAwards.js
import React from 'react';
import './CertificatesAndAwards.css'; // Importing the CSS file
import Tetris from './tetris'; // Importing the Tetris component

function CertificatesAndAwards() {
  return (
    <section id="certificates-awards" className="certificates-awards">
      <h2>Certificates and Awards</h2>
      <div className="certificates">
        <h3>Certificates</h3>
        <ul>
          <li>Fullstack Software Engineering - ALX School</li>
          <li>Frontend Specialization - ALX School</li>
          <li>JavaScript Certificate - Udemy</li>
          <li>Web Design Certificate - Udemy</li>
        </ul>
      </div>
      <div className="awards">
        <h3>Awards</h3>
        <ul>
          <li>Creativity Award - Most Creative Developer in Class</li>
          <li>Geeks Award - Novice Developer, ALX Community</li>
        </ul>
      </div>
      <Tetris /> {/* Adding Tetris component */}
    </section>
  );
}

export default CertificatesAndAwards;
