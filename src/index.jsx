import React from 'react';
import { render } from 'react-dom';

import App from './components/app.jsx';

window.mapinit = function() {
  const target = document.getElementById('root');
  render(<App />, target);
}

const url = 'https://webapi.amap.com/maps?v=1.4.9&key=a48fe69cbd1a9ebfd6935402d673c381&callback=mapinit';
const jsapi = document.createElement('script');
jsapi.charset = 'utf-8';
jsapi.src = url;
document.head.appendChild(jsapi);