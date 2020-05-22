import React, { Component } from 'react'
import DiscussionApiService from '../../services/article-api-service'
import './DiscussionListPage.css'
import DiscussionPage from '../DiscussionPage/DiscussionPage'
import { Button } from '../../Utils/Utils'
import Post from './Post'
import Nav from '../Nav/Nav'
import Footer from '../Footer/Footer'


export default class DiscussionListPage extends Component {
  state = {
    topics: [],
    current_topic: '',
    posts: [],
    users: [],
    current_topic_id: ''
  }
  
  componentDidMount() {
    DiscussionApiService.getTopics()
      .then(data => this.setState({topics: data}))
      .catch((error) => { console.error('Error:', error) })
    DiscussionApiService.getDiscussions()
      .then(data => this.setState({ posts: data }))
      .catch((error) => console.error('Error', error))
    }
  currentTopic = (event) => this.setState({ current_topic: event.target.value })
  render() {
    const posts = this.state.posts
    const postList = posts.filter(post => post.topic_name === this.state.current_topic).map((value,index) => {
      return <Post key={index} values={value.id} date={value.date_created} user={value.user_name} discussion_post={value.discussion_post} />
    })
    const sortedPosts = postList.sort(function(a,b){return a.props.values - b.props.values})
    const list = this.state.topics
    const listItems = list.map((value, index) => {
      return  <li className="topicList" key={index} onClick={this.currentTopic}>
       <Button id="topicButton" value={value.topic_name} type="button">{value.topic_name}</Button>
       </li>
    })
    return (
      <>
      <Nav />
      <header className="forumHeader">
          <h1 id="forumHeader">discussion</h1>
        </header>
      <section>
        <ul id="topicList">
          {listItems}
        </ul>
      </section>
      {this.state.current_topic !== '' &&
      <DiscussionPage topic_name={this.state.current_topic} post={sortedPosts} topicsList={list}/>}
      <Footer />
      </>
    )
  }
}