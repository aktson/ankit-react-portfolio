import React from 'react';
import { Analytics } from '@vercel/analytics/react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


ReactDOM.render(
  <React.StrictMode>
    <App />
    <Analytics />
  </React.StrictMode>,
  document.getElementById('root')
);


