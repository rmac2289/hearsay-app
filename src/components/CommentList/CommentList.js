import React from "react";
import Comment from "../Comment/Comment";
import "./CommentList.css";
import moment from "moment";

const CommentList = ({ data, current_topic }) => {
  // filter posts to render only those that match the selected topic //
  const postList = data
    .filter((post) => post.topic_name === current_topic)
    .map((v, i) => {
      return (
        <Comment
          key={i}
          values={v.id}
          date={moment(v.date_created).format("dddd, MMMM Do YYYY")}
          user={v.user_name}
          text={v.discussion_post}
          likes={v.likes}
          dislikes={v.dislikes}
        />
      );
    });
  const sortedPosts = postList.sort(function (a, b) {
    return a.props.values - b.props.values;
  });
  return (
    <section>
      <ul className="postList">
        {sortedPosts.length < 1 ? (
          <div className="choose">
            <h3>Choose a topic above to see what others have to say!</h3>
          </div>
        ) : (
          sortedPosts
        )}
      </ul>
    </section>
  );
};

export default CommentList;
