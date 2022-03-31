import './public-path';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter,HashRouter } from 'react-router-dom';
import './index.css';
import App from './App';
// @ts-ignore
const _App = ReactDOM.createRoot(document.getElementById('react-app'))
_App.render(
  <React.StrictMode>
      <BrowserRouter>
          <App/>
      </BrowserRouter>
  </React.StrictMode>
);

// window.addEventListener('unmount', function () {
//     // @ts-ignore
//     _App.unmount(document.getElementById('react-app'))
// })