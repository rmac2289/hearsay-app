import React from 'react';
import Departments from './Departments';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BrowserRouter><Departments /></BrowserRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});