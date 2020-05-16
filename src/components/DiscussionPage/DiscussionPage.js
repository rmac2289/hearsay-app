import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Textarea } from '../../Utils/Utils'
import './DiscussionPage.css'
import config from '../../config'

export default function DiscussionPage(props){
  const topicsList = props.topicsList
  const postList = props.post

  

  return (
    <section>
      <h1>{props.topic_name}</h1>
      <ul className="postList">
        {props.post}
      </ul>
    </section>
  )
}
