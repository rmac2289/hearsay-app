import React, { Component } from 'react';
import DiscussionApiService from '../../services/article-api-service';
import './DiscussionListPage.css';
import { Button } from '../../Utils/Utils';
import Nav from '../Nav/Nav';
import Burger from '../Burger/Burger';
import Footer from '../Footer/Footer';
import CommentBox from '../CommentBox/CommentBox';


export default class DiscussionListPage extends Component {
  state = {
    topics: [],
    current_topic: '',
  };
  
  componentDidMount() {
    DiscussionApiService.getTopics()
      .then(data => this.setState({topics: data}))
      .catch((error) => { console.error('Error:', error) });
  };
  // get topic user is clicking on //
  currentTopic = (event) => this.setState({ current_topic: event.target.value });

  render() {
    // render list of discussion topics //
    const list = this.state.topics;
    const listItems = list.map((value, index) => {
  return  <li className="topicList" key={index} onClick={this.currentTopic}>
       <Button id="topicButton" value={value.topic_name} type="button">{value.topic_name}</Button>
       </li>
    });
    return (
      <>
      <Burger />
      <Nav />
      <header className="forumHeader">
          <h1 id="forumHeader">discussion</h1>
        </header>
        <section>
            <ul id="topicList">
             {listItems}
            </ul>
        </section>
      <CommentBox current_topic={this.state.current_topic}/>
      <Footer />
      </>
    );
  };
};