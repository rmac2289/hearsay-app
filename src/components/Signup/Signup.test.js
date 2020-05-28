import React from 'react';
import Signup from './Signup';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom'


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<HashRouter><Signup /></HashRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});