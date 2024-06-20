// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import './style.css';
import Header from './header';
// import Dashboard from './dashboard';
import About from './about';
import Skills from './skills';
import Projects from './projects';
import Contact from './contact';
import Footer from './footer';
const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div className="home">
      <h2>Welcome to Unlimited Developer</h2>
      {/* Add more content for homepage */}
    </div>
  );
}

export default App;