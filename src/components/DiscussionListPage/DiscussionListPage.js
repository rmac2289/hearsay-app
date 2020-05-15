import React, { Component } from 'react'
import DiscussionListContext from '../../contexts/DiscussionListContext'
import DiscussionApiService from '../../services/article-api-service'
import { Section } from '../../Utils/Utils'
import DiscussionListItem from '../DiscussionListItem/DiscussionListItem'
import config from '../../config'
import './DiscussionListPage.css'
export default class DiscussionListPage extends Component {
  state = {
    topics: []
  }


  componentDidMount() {
    fetch(`${config.API_ENDPOINT}/discussion/topics`, {
    headers: {
    },
  })
    .then(res =>
      (!res.ok)
        ? res.json().then(e => Promise.reject(e))
        : res.json()
    )
      .then(data => this.setState({topics: data}))
      .catch((error) => {
        console.error('Error:', error);
     
      })
    }

  render() {
    const list = this.state.topics
    const listItems = list.map((value, index) => {
      return <li className="topicList" key={index}>
        <h2 className="topicName">{value.topic_name}</h2>
      </li>
    })
    return (
      <>
      <header id="forumHeader">
          <h1>Forum</h1>
        </header>
      <section>
        <ul id="topicList">
          {listItems}
        </ul>
      </section>
      </>
    )
  }
}