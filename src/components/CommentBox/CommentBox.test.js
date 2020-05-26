import React from 'react';
import CommentBox from './CommentBox';
import ReactDOM from 'react-dom';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CommentBox />, div);
  ReactDOM.unmountComponentAtNode(div);
});