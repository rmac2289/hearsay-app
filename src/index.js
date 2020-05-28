import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import './index.css';
import App from './components/App/App';

ReactDOM.render(
<BrowserRouter basename='/Home'>
  <App />
</BrowserRouter>,
  document.getElementById('root')
);


