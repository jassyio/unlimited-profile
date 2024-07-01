import React, { useContext, useState } from 'react';
import { Theme } from './theme'; // Adjust import based on your folder structure
import './Navbar.css';

const Navbar = ({ handleClick }) => {
  const { theme, changeTheme } = useContext(Theme);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <nav className={`nav ${theme}`}>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/projects">Projects</a></li>
        <li><a href="/skills">Skills</a></li>
        <li><a href="/certificates">Certificates</a></li>
        <li><a href="/contact">Contact</a></li>
        <li className="dropdown">
          <button className="dropdown-button" onClick={toggleDropdown}>Theme</button>
          {dropdownOpen && (
            <ul className="dropdown-menu">
              <li><button onClick={() => changeTheme('light')}>Light Mode</button></li>
              <li><button onClick={() => changeTheme('dark')}>Dark Mode</button></li>
              <li><button onClick={() => changeTheme('classic')}>Classic Mode</button></li>
              <li><button className="color-mode" onClick={() => changeTheme('color')}>Color Mode</button></li>
            </ul>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
