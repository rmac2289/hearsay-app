import React from 'react';
import DiscussionListPage from './DiscussionListPage';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<HashRouter><DiscussionListPage /></HashRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});