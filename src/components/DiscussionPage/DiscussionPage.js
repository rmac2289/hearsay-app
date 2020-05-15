import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import DiscussionApiService from '../../services/Discussion-api-service'
import { NiceDate, Hyph, Section } from '../../Utils/Utils'
import './DiscussionPage.css'

export default function DiscussionPage(props){
  return (
    <section>
      <h1>Topic</h1>
      <ul>Posts
        <li></li>
      </ul>
      <form>add comment</form>
    </section>
  )
}
