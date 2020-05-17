import React, { Component } from 'react'
import DiscussionApiService from '../../services/article-api-service'
import { Button, Textarea } from '../../Utils/Utils'
import './CommentForm.css'

export default class CommentForm extends Component {
  state = { discussion_post: '' }

  getPostText = ev => {
    this.setState({ discussion_post: ev.target.value })
  }

  handleSubmit = ev => {
    ev.preventDefault()
    DiscussionApiService.postComment(this.props.current_topic, this.state.discussion_post)
      .then(this.setState({ discussion_post: '' }))
      .catch(error => console.error(error))
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className='text'>
          <Textarea
            onChange={this.getPostText}
            required
            aria-label='Type a comment...'
            name='text'
            id='text'
            cols='30'
            rows='3'
            placeholder='Type a comment..'>
          </Textarea>
        </div>
        <Button type='submit'>
          Post comment
        </Button>
      </form>
    )
  }
}
