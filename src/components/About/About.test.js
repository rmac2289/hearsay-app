import React from 'react';
import About from './About';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BrowserRouter><About /></BrowserRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});