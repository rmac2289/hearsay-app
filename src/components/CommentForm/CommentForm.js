import React, { Component } from "react";
import { Textarea, Button } from "../../Utils/Utils";

export default class CommentForm extends Component {
  state = {
    discussion_post: "",
  };
  getInitialState = () => {
    return { discussion_post: "" };
  };
  handleTextChange = (e) => {
    this.setState({ discussion_post: e.target.value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const text = {
      date_created: new Date(),
      discussion_post: this.state.discussion_post,
      user_name: sessionStorage.getItem("username"),
      topic_name: this.props.current_topic,
    };
    if (!text) {
      return;
    }
    this.props.onPostSubmit(e, text);
  };
  render() {
    return (
      <section>
        <form className="commentForm" onSubmit={this.handleSubmit}>
          <Textarea
            type="text"
            value={this.state.discussion_post}
            placeholder="Say something..."
            onChange={this.handleTextChange}
          />
          {this.props.currentTopic === "" ? (
            <Button disabled type="submit">
              post comment
            </Button>
          ) : (
            <Button type="submit">post comment</Button>
          )}
        </form>
      </section>
    );
  }
}
