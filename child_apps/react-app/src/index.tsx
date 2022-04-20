import './public-path';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import './index.css';
import App from './App';

declare global {
  interface Window {
    microApp: {
      addDataListener: (dataListener: Function, autoTrigger?: boolean) => void;
      removeDataListener: (dataListener: Function) => void;
      clearDataListener: Function;
    };
    __MICRO_APP_BASE_ROUTE__: string
  }
}
// @ts-ignore
const _App = ReactDOM.createRoot(document.getElementById('react-app'));
_App.render(
  <BrowserRouter basename={window.__MICRO_APP_BASE_ROUTE__ || '/'}>
    <App />
  </BrowserRouter>
);

// window.addEventListener('unmount', function () {
//     // @ts-ignore
//     _App.unmount(document.getElementById('react-app'))
// })
