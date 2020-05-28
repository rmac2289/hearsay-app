import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faThumbsDown } from '@fortawesome/free-solid-svg-icons'
import './Comment.css'

export default function Post(props){
    const [count, setCount] = useState(0)
    const [dislikeCount, setDislikeCount] = useState(0)
    
    const addLike = () => {
        setCount(count + 1 );
      }
    const dislike = () => {
      setDislikeCount(dislikeCount + 1)
    }
      
    return (
<li className="postListItem">
        <p className="postContent">{props.text}</p>
          <div className="like" >
            <div onClick={addLike}>
              <FontAwesomeIcon id="icon" icon={faHeart} />{count}
            </div>
            <div onClick={dislike}>
            <FontAwesomeIcon id="icon" icon={faThumbsDown} />{dislikeCount}
            </div>
          </div>
          <div><strong>posted by:</strong> {props.user}</div>
          <div><strong>on:</strong> {props.date}</div>
      </li>
    )
}


  

  