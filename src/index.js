import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { QueryContextProviver } from './context/context.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <QueryContextProviver>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </QueryContextProviver>
);

