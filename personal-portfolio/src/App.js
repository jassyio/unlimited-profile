// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import './style.css';
import Header from './header';
import About from './about';
import Skills from './skills';
import Projects from './projects';
import Certificates from './certificates';
import Footer from './footer';
import Chat from './chat'
import Home from './home';
import Contact from './contact';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/certificates" element={<Certificates />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Chat />
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
