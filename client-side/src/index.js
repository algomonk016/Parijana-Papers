import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import axios from 'axios'
import './index.css'
axios.defaults.baseURL = 'http://localhost:5000'
ReactDOM.render(
  <>
    <App />
  </>,
  document.getElementById('root')
);
