import React, { useEffect, useState } from "react";
import CommentList from "../CommentList/CommentList";
import CommentForm from "../CommentForm/CommentForm";
import DiscussionApiService from "../../services/article-api-service";

export default function CommentBox({ current_topic }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    DiscussionApiService.getDiscussions()
      .then((data) => setPosts(data))
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  const handlePostSubmit = (ev, post) => {
    ev.preventDefault();
    const newPosts = posts.concat([post]);
    setPosts(newPosts);
    DiscussionApiService.postComment(current_topic, post.discussion_post)
      .then(setPosts(newPosts))
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <header className="forumHeader">
        <h1 id="forumHeader">{current_topic}</h1>
      </header>
      <CommentList current_topic={current_topic} data={posts} />
      <CommentForm
        current_topic={current_topic}
        onPostSubmit={handlePostSubmit}
      />
    </div>
  );
}
