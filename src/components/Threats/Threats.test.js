import React from 'react';
import Threats from './Threats';
import ReactDOM from 'react-dom';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Threats />, div);
  ReactDOM.unmountComponentAtNode(div);
});