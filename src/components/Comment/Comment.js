import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faThumbsDown } from "@fortawesome/free-solid-svg-icons";
import "./Comment.css";
import DiscussionApiService from "../../services/article-api-service";

export default function Post(props) {
  const [likes, setLikes] = useState(props.likes);
  const [dislikes, setDislikes] = useState(props.dislikes);

  const addLikes = () => {
    const id = props.values;
    const plusOne = likes + 1;
    DiscussionApiService.patchLikes(id, plusOne)
      .then(setLikes(likes + 1))
      .catch((error) => console.error(error));
  };
  const addDislikes = () => {
    const id = props.values;
    const plusOne = dislikes + 1;
    DiscussionApiService.patchDislikes(id, plusOne)
      .then(setDislikes(dislikes + 1))
      .catch((error) => console.error(error));
  };
  const startingLikes = props.likes;
  const startingDisLikes = props.dislikes;

  return (
    <li className="postListItem">
      <p className="postContent">{props.text}</p>
      <div className="likeContainer">
        <div>
          <div>
            <strong>posted by:</strong> {props.user}
          </div>
          <div>
            <strong>on:</strong> {props.date}
          </div>
        </div>
        <div className="container">
          <div className="likesbox">
            <button
              id="likebutton"
              onClick={addLikes}
              disabled={likes > startingLikes ? true : false}
            >
              <FontAwesomeIcon icon={faHeart} id="heart" />
            </button>
            <p>{likes}</p>
          </div>
          <div className="likesbox">
            <button
              id="likebutton"
              onClick={addDislikes}
              disabled={dislikes > startingDisLikes ? true : false}
            >
              <FontAwesomeIcon icon={faThumbsDown} id="thumb" />
            </button>
            <p>{dislikes}</p>
          </div>
          <div></div>
        </div>
      </div>
    </li>
  );
}
