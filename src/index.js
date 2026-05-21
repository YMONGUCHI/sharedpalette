// Core React libraries
import React from 'react';
import ReactDOM from 'react-dom/client';

import { BrowserRouter } from 'react-router-dom'; // Routing wrapper for the single-page app

// Global styles
import './index.css';
import './styles/accessibility.css';

import App from './App'; // root component

// Mount the React app into the root div in public/index.html
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

