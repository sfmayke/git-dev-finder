import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

const htmlRoot = document.getElementById('root');

if (htmlRoot) {
  ReactDOM.createRoot(htmlRoot).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
