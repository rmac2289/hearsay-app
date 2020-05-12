import React, { Component } from 'react'
import DiscussionContext from '../../contexts/DiscussionContext'
import DiscussionApiService from '../../services/Discussion-api-service'
import { Button, Textarea } from '../Utils/Utils'
import './CommentForm.css'

export default class CommentForm extends Component {
  static contextType = DiscussionContext

  handleSubmit = ev => {
    ev.preventDefault()
    const { discussion } = this.context
    const { text } = ev.target
    DiscussionApiService.postComment(discussion.id, text.value)
      .then(this.context.addComment)
      .then(() => {
        text.value = ''
      })
      .catch(this.context.setError)
  }

  render() {
    return (
      <form
        className='CommentForm'
        onSubmit={this.handleSubmit}
      >
        <div className='text'>
          <Textarea
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
