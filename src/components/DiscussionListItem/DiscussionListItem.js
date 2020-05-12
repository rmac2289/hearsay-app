import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { NiceDate, Hyph } from '../../Utils/Utils'
import StyleIcon from '../StyleIcon/StyleIcon'

export default class DiscussionListItem extends Component {
  render() {
    const { discussion } = this.props
    return (
      <Link to={`/discussion/${discussion.id}`}>
        <header>
          <h2>
            {discussion.title}
          </h2>
          <DiscussionDate discussion={discussion} />
        </header>
        <footer>
          <DiscussionStyle discussion={discussion} />
          {discussion.author.id && <>
            <Hyph />
            <DiscussionAuthor discussion={discussion} />
          </>}
          <DiscussionCommentCount discussion={discussion} />
        </footer>
      </Link>
    )
  }
}

function DiscussionStyle({ discussion}) {
  return (
    <span>
      <StyleIcon style={discussion.style} />
      {' '}
      {discussion.style}
    </span>
  )
}

function DiscussionDate({ discussion }) {
  return (
    <span>
      <NiceDate
        date={discussion.date_created}
      />
    </span>
  )
}

function DiscussionAuthor({ discussion }) {
  return (
    <span>
      {discussion.author.full_name}
    </span>
  )
}

function DiscussionCommentCount({ discussion }) {
  return (
    <span
      className='fa-layers fa-fw'
    >
      <FontAwesomeIcon size='lg' icon='comment' />
      <span
        className='fa-layers-text fa-inverse'>
        {discussion.number_of_comments}
      </span>
    </span>
  )
}