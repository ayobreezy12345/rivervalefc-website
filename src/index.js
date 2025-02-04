import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // Optional: for global styles
import App from './App'; // Main App component
import reportWebVitals from './reportWebVitals'; // Performance reporting (optional)

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();