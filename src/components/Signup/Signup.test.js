import React from 'react';
import Signup from './Signup';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BrowserRouter><Signup /></BrowserRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});