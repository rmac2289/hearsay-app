import React from 'react';
import Nav from './Nav';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom'


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<HashRouter><Nav /></HashRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});