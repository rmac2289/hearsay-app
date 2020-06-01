import React from 'react';

import './Comment.css';

export default function Post(props){
      
    return (
<li className="postListItem">
        <p className="postContent">{props.text}</p>
          <div><strong>posted by:</strong> {props.user}</div>
          <div><strong>on:</strong> {props.date}</div>
      </li>
    );
};


  

  