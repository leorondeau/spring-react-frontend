import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom"
import { ReactSpring } from './components/ReactSpring.js';
import './index.css';
import reportWebVitals from './reportWebVitals';



ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ReactSpring />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

