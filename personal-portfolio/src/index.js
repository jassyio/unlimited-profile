
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ThemeProvider from './theme'; // Adjust import based on your folder structure

ReactDOM.render(
  <ThemeProvider>
    <App />
  </ThemeProvider>,
  document.getElementById('root')
);
