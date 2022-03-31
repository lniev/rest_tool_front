import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import './public-path';

// @ts-ignore
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      {/*@ts-ignore*/}
      <BrowserRouter basename={window.__MICRO_APP_BASE_ROUTE__ || '/'}>
          <App />
      </BrowserRouter>
  </React.StrictMode>
);
