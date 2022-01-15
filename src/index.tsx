import React from 'react';
import ReactDOM from 'react-dom';
import "bootswatch/dist/darkly/bootstrap.min.css";
import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App title={"React & TypeScript"} />
  </React.StrictMode>,
  document.getElementById('root')
);
