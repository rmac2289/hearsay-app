import React, { Component } from 'react'
import DiscussionApiService from '../../services/article-api-service'
import config from '../../config'
import './DiscussionListPage.css'
import DiscussionPage from '../DiscussionPage/DiscussionPage'
import { Button } from '../../Utils/Utils'


export default class DiscussionListPage extends Component {
  state = {
    topics: [],
    current_topic: '',
    posts: [],
    users: []
  }
  componentDidMount() {
    fetch(`${config.API_ENDPOINT}/discussion/topics`)
    .then(res =>
      (!res.ok)
        ? res.json().then(e => Promise.reject(e))
        : res.json()
    )
      .then(data => this.setState({topics: data}))
      .catch((error) => { console.error('Error:', error) })
    }
  handleClick = () => {
    return fetch(`${config.API_ENDPOINT}/discussion`)
    .then(res => (!res.ok)
        ? res.json().then(e => Promise.reject(e))
        : res.json())
        .then(data => this.setState({ posts: data }))
  }

  currentTopic = (event) => {
    return this.setState({ current_topic: event.target.value })
  }
  
  render() {
    const list = this.state.topics
    console.log(this.state.posts)
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
      <DiscussionPage topic_name={this.state.current_topic}/>}
      </>
    )
  }
}