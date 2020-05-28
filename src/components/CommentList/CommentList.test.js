import React from 'react';
import CommentList from './CommentList';
import ReactDOM from 'react-dom';


it('renders without crashing', () => {
  const div = document.createElement('div');
  const data = [{id: 1,discussion_post: 'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.', topic_name:'Police Brutality', user_name: 'user'},
  {id:2, discussion_post: 'In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.',topic_name: 'Juvenile Justice', user_name: 'user2'},
  {id:3, discussion_post: 'Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.',topic_name:'Race',user_name: 'user3'},
  {id:4, discussion_post: 'Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.',topic_name:'War on Drugs',user_name: 'user4'}]
  ReactDOM.render(<CommentList data={data}/>, div);
  ReactDOM.unmountComponentAtNode(div);
});