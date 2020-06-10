import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faThumbsDown } from '@fortawesome/free-solid-svg-icons'
import './Comment.css';


export default function Post(props){

const [likes, setLikes] = useState(0);
const [dislikes,setDislikes] = useState(0)
      
const incrementLike = () => {
  return setLikes(likes + 1)
}
const incrementDislike = () => {
  return setDislikes(dislikes + 1)
}
    return (
<li className="postListItem">
        <p className="postContent">{props.text}</p>
  <div className="likeContainer">
    <div>
        <div><strong>posted by:</strong> {props.user}</div>
        <div><strong>on:</strong> {props.date}</div>
    </div>
    <div className="container">
      <div className="likesbox">
    <FontAwesomeIcon icon={faHeart} id="heart" onClick={incrementLike} />
        <p>{likes}</p>
      </div>
      <div className="likesbox">
        <FontAwesomeIcon icon={faThumbsDown} id="thumb" onClick={incrementDislike}/>
        <p>{dislikes}</p>
      </div>
      <div>
      </div>
    </div>
  </div>
</li>
    );
};


  

  