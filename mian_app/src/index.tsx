import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import microApp from '@micro-zoe/micro-app';
import BaseLayout from './layout/BaseLayout';
import store from './store';
import { Provider } from 'react-redux';
import './index.css';
import { enableMapSet } from 'immer';
enableMapSet();
microApp.start({
  plugins: {
    modules: {
      // appName即应用的name值
      // ['react-app']: [
      //   {
      //     loader(code) {
      //       if (process.env.NODE_ENV === 'development') {
      //         // 这里 basename 需要和子应用vite.config.js中base的配置保持一致
      //         code = code.replace(/(from|import)(\s*['"])(\/rp\/)/g, (all) => {
      //           return all.replace('/rp/', 'http://localhost:8077/rp/');
      //         });
      //       }
      //       return code;
      //     },
      //   },
      // ],
      'vue-app': [
        {
          loader(code) {
            if (process.env.NODE_ENV === 'development') {
              // 这里 basename 需要和子应用vite.config.js中base的配置保持一致
              code = code.replace(/(from|import)(\s*['"])(\/rp\/)/g, (all) => {
                return all.replace('/vp/', 'http://localhost:8078/vp/');
              });
            }
            return code;
          },
        },
      ],
    },
  },
});

const client = ReactDOM.createRoot(document.getElementById('root'));
client.render(
  <Provider store={store}>
    <BrowserRouter>
      <BaseLayout />
    </BrowserRouter>
  </Provider>,
);
