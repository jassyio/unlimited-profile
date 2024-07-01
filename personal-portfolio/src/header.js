import React, { useContext } from 'react';
import './Header.css';
import Navbar from './navbar';
import { Theme } from './theme';

const Header = () => {
  const { theme } = useContext(Theme);

  return (
    <header className={`header ${theme}`}>
      <h1 className={`header-title ${theme}`}>
        {'Unlimited Developer'.split('').map((char, index) => (
          <span key={index} className={`${theme === 'classic' ? 'classic-font' : ''}`}>
            {char}
          </span>
        ))}
      </h1>
      <Navbar />
    </header>
  );
};

export default Header;
