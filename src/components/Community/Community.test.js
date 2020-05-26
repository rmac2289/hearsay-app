import React from 'react';
import Community from './Community';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BrowserRouter><Community /></BrowserRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});