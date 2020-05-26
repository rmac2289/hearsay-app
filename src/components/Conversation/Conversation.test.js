import React from 'react';
import Conversation from './Conversation';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BrowserRouter><Conversation /></BrowserRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});