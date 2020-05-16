import React, { Component } from 'react'
import DiscussionApiService from '../../services/article-api-service'
import './DiscussionListPage.css'
import DiscussionPage from '../DiscussionPage/DiscussionPage'
import { Button } from '../../Utils/Utils'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'


export default class DiscussionListPage extends Component {
  state = {
    topics: [],
    current_topic: '',
    posts: [],
    users: [],
    count: 0
  }
  componentDidMount() {
    DiscussionApiService.getTopics()
      .then(data => this.setState({topics: data}))
      .catch((error) => { console.error('Error:', error) })
    DiscussionApiService.getDiscussions()
      .then(data => this.setState({ posts: data }))
      .catch((error) => console.error('Error', error))
    }

  incrementCount = () => {
    this.setState({ count: this.state.count + 1 })
  }

  currentTopic = (event) => {
    return this.setState({ current_topic: event.target.value })
  }
  
  render() {
    const posts = this.state.posts
    const postList = posts.filter(post => post.topic_name === this.state.current_topic).map((value,index) => {
      return <li className="postListItem" key={index}>
        <p>{value.discussion_post}</p>
          <Button onClick={this.incrementCount}><FontAwesomeIcon icon={faHeart} />{this.state.count}</Button>
      </li>
    })
    const list = this.state.topics
    const listItems = list.map((value, index) => {
      return  <li className="topicList" key={index} onClick={this.currentTopic}>
       <Button onClick={this.handleClick} id="topicButton" value={value.topic_name} type="button">{value.topic_name}</Button>
       </li>
    })
    
    return (
      <>
      <header className="forumHeader">
          <h1 id="forumHeader">discussion</h1>
        </header>
      <section>
        <ul id="topicList">
          {listItems}
        </ul>
      </section>
      {this.state.current_topic !== '' &&
      <DiscussionPage topic_name={this.state.current_topic} post={postList} topicsList={list}/>}
      </>
    )
  }
}