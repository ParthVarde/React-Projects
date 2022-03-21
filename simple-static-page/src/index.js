import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Navbar from "./Navbar";
import MainContent from "./MainContent";

ReactDOM.render(
  <React.StrictMode>
    <Navbar />
    <MainContent />
  </React.StrictMode>,
  document.getElementById('root')
);