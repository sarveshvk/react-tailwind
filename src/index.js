import React from 'react';
import ReactDOM from 'react-dom/client'; // For React 18 and later
import './index.css'; // Importing the CSS file
import App from './App'; // The main App component

// Get the root element from the DOM

// Render the App component inside the root element
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

