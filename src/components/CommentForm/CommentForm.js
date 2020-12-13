import React, { useState } from "react";
import { Textarea, Button } from "../../Utils/Utils";

const CommentForm = ({ current_topic, onPostSubmit }) => {
  const [discussion_post, setDiscussionPost] = useState("");

  const handleTextChange = (e) => {
    setDiscussionPost(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const text = {
      date_created: new Date(),
      discussion_post: discussion_post,
      user_name: sessionStorage.getItem("username"),
      topic_name: current_topic,
    };
    if (!text) {
      return;
    }
    onPostSubmit(e, text);
  };

  return (
    <section>
      <form className="commentForm" onSubmit={handleSubmit}>
        <Textarea
          type="text"
          value={discussion_post}
          placeholder="Say something..."
          onChange={handleTextChange}
        />
        {current_topic === "" ? (
          <Button disabled type="submit">
            post comment
          </Button>
        ) : (
          <Button type="submit">post comment</Button>
        )}
      </form>
    </section>
  );
};

export default CommentForm;
