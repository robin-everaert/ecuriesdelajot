import React from 'react';
import { createRoot } from 'react-dom/client';
import  'bootstrap/dist/css/bootstrap.min.css' ;
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import App from './App';
import "./assets/styles/index.scss";


const container = document.getElementById('root');
const root = createRoot(container);

root.render(
      <App />
);

