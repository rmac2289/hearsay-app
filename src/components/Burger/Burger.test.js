import React from 'react';
import Burger from './Burger';
import ReactDOM from 'react-dom';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Burger />, div);
  ReactDOM.unmountComponentAtNode(div);
});