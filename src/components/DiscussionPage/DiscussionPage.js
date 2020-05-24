import React from 'react'
import './DiscussionPage.css'
import CommentForm from '../CommentForm/TestCommentForm'



export default function DiscussionPage(props){
  return (
    <>
    <section id="forumTopicName">
      <h1>{props.topic_name}</h1>
      <ul className="postList">
        {props.post}
      </ul>
    </section>
    <section id="forumSection">
    <CommentForm current_topic={props.topic_name}/>
  </section>
  </>
  )
}
