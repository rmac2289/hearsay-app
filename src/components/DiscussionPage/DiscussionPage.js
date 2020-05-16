import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Textarea } from '../../Utils/Utils'
import './DiscussionPage.css'
import config from '../../config'

export default function DiscussionPage(props){
  return (
    <section>
      <h1>{props.topic_name}</h1>
      <ul>
        {props.post}
      </ul>
    </section>
  )
}
