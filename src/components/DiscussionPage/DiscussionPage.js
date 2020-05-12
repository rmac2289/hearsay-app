import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import DiscussionContext, { nullDiscussion } from '../../contexts/DiscussionContext'
import DiscussionApiService from '../../services/Discussion-api-service'
import { NiceDate, Hyph, Section } from '../../Utils/Utils'
import StyleIcon from '../StyleIcon/StyleIcon'
import CommentForm from '../CommentForm/CommentForm'
import './DiscussionPage.css'

export default class DiscussionPage extends Component {
  static defaultProps = {
    match: { params: {} },
  }

  static contextType = DiscussionContext

  componentDidMount() {
    const { discussionId } = this.props.match.params
    this.context.clearError()
    DiscussionApiService.getDiscussion(discussionId)
      .then(this.context.setDiscussion)
      .catch(this.context.setError)
    DiscussionApiService.getDiscussionComments(discussionId)
      .then(this.context.setComments)
      .catch(this.context.setError)
  }

  componentWillUnmount() {
    this.context.clearDiscussion()
  }

  renderDiscussion() {
    const { discussion, comments } = this.context
    return <>
      <h2>{discussion.title}</h2>
      <p>
        <DiscussionStyle Discussion={discussion} />
        {discussion.author.id && <>
          <Hyph />
          <DiscussionAuthor Discussion={discussion} />
        </>}
        <Hyph />
        <NiceDate date={discussion.date_created} />
      </p>
      <DiscussionContent Discussion={discussion} />
      <DiscussionComments comments={comments} />
      <CommentForm />
    </>
  }

  render() {
    const { error, discussion } = this.context
    let content
    if (error) {
      content = (error.error === `Discussion doesn't exist`)
        ? <p>Discussion not found</p>
        : <p>There was an error</p>
    } else if (!discussion.id) {
      content = <div className='loading' />
    } else {
      content = this.renderDiscussion()
    }
    return (
      <Section>
        {content}
      </Section>
    )
  }
}

function DiscussionStyle({ discussion }) {
  return (
    <span>
      <StyleIcon style={discussion.style} />
      {' '}
      {discussion.style}
    </span>
  )
}

function DiscussionAuthor({ discussion = nullDiscussion }) {
  return (
    <span>
      {discussion.author.full_name}
    </span>
  )
}

function DiscussionContent({ discussion }) {
  return (
    <p>
      {discussion.content}
    </p>
  )
}

function DiscussionComments({ comments = [] }) {
  return (
    <ul>
      {comments.map(comment =>
        <li key={comment.id}>
          <p>
            <FontAwesomeIcon
              size='lg'
              icon='quote-left'
            />
            {comment.text}
          </p>
          <p>
            {comment.user.full_name}
          </p>
        </li>
      )}
    </ul>
  )
}
