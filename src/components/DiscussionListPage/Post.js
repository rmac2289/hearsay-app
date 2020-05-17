import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faThumbsDown } from '@fortawesome/free-solid-svg-icons'
import './Post.css'
import moment from 'moment'

export default function Post(props){
    const [count, setCount] = useState(0)
    const [dislikeCount, setDislikeCount] = useState(0)

    const parsedDate = moment(props.date).format("dddd, MMMM Do YYYY")
    const addLike = () => {
        setCount(count + 1 );
      }
    const dislike = () => {
      setDislikeCount(dislikeCount + 1)
    }
      
    return (
<li className="postListItem">
        <p className="postContent">{props.discussion_post}</p>
          <div className="like" >
            <div onClick={addLike}>
              <FontAwesomeIcon id="icon" icon={faHeart} />{count}
            </div>
            <div onClick={dislike}>
            <FontAwesomeIcon id="icon" icon={faThumbsDown} />{dislikeCount}
            </div>
            
            
           
          </div>
          <div><strong>posted by:</strong> {props.user}</div>
          <div><strong>on:</strong> {parsedDate}</div>
      </li>
    )
}