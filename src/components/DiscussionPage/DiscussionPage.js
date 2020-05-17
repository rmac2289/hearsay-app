import React from 'react'
import './DiscussionPage.css'


export default function DiscussionPage(props){

  return (
    <section id="forumTopicName">
      <h1>{props.topic_name}</h1>
      <ul className="postList">
        {props.post}
      </ul>
    </section>
  )
}
