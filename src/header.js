// src/Header.js
import React, { useState, useEffect } from 'react';
import './Header.css';
import Navbar from './navbar'; // Assuming Navbar component file is named 'Navbar'

const Header = () => {
  const [clickCoordinates, setClickCoordinates] = useState({ x: -100, y: -100 });
  const [colors, setColors] = useState(['#FF5733', '#33FF57', '#5733FF', '#FF33FF', '#33FFFF', '#FFFF33', '#FF5733', '#33FF57', '#5733FF', '#FF33FF', '#33FFFF', '#FFFF33', '#FF5733', '#33FF57', '#5733FF', '#FF33FF', '#33FFFF', '#FFFF33', '#ff3388']); // Example colors

  useEffect(() => {
    const interval = setInterval(() => {
      setColors(prevColors => {
        const newColors = prevColors.slice();
        const shiftedColor = newColors.shift();
        newColors.push(shiftedColor);
        return newColors;
      });
    }, 10000); // Change color every 10 seconds

    return () => clearInterval(interval); // Clean up interval on component unmount
  }, []);

  const handleClick = (e) => {
    const rect = e.target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setClickCoordinates({ x, y });
  };

  return (
    <header className="header">
      <h1 className="header-title">
        {/* Mapping over each character of "Unlimited Developer" */}
        {'Unlimited Developer'.split('').map((char, index) => (
          <span key={index} style={{ color: colors[index % colors.length] }}>
            {char}
          </span>
        ))}
      </h1>
      <Navbar handleClick={handleClick} />
      <div className="click-effect" style={{ left: clickCoordinates.x, top: clickCoordinates.y }}></div>
    </header>
  );
}

export default Header;
