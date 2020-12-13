import React, { useEffect, useState } from "react";
import DiscussionApiService from "../../services/article-api-service";
import "./DiscussionListPage.css";
import { Button } from "../../Utils/Utils";
import Nav from "../Nav/Nav";
import Burger from "../Burger/Burger";
import Footer from "../Footer/Footer";
import CommentBox from "../CommentBox/CommentBox";
import LoadingIndicator from "../../Utils/LoadingIndicator";
import { trackPromise } from "react-promise-tracker";

const DiscussionListPage = () => {
  const [topics, setTopics] = useState([]);
  const [current_topic, setCurrentTopic] = useState("");

  useEffect(() => {
    trackPromise(
      DiscussionApiService.getTopics()
        .then((data) => setTopics(data))
        .catch((error) => {
          console.error("Error:", error);
        })
    );
  }, []);
  // get topic user is clicking on //
  const getCurrentTopic = (event) => setCurrentTopic(event.target.value);

  const listItems = topics.map((value, index) => {
    return (
      <li className="topicList" key={index} onClick={getCurrentTopic}>
        <Button id="topicButton" value={value.topic_name} type="button">
          {value.topic_name}
        </Button>
      </li>
    );
  });
  return (
    <>
      <Burger />
      <Nav />
      <header className="forumHeader">
        <h1 id="forumHeader">discussion</h1>
      </header>
      <section>
        <ul id="topicList">{listItems}</ul>
        <LoadingIndicator />
      </section>
      <CommentBox current_topic={current_topic} />
      <Footer />
    </>
  );
};

export default DiscussionListPage;
