import React, { Component } from 'react'

export const nullDiscussion = {
  author: {},
  tags: [],
}

const DiscussionContext = React.createContext({
  Discussion: nullDiscussion,
  comments: [],
  error: null,
  setError: () => {},
  clearError: () => { },
  setDiscussion: () => {},
  clearDiscussion: () => {},
  setComments: () => {},
  addComment: () => {},
})

export default DiscussionContext

export class DiscussionProvider extends Component {
  state = {
    Discussion: nullDiscussion,
    error: null,
  };

  setError = error => {
    console.error(error)
    this.setState({ error })
  }

  clearError = () => {
    this.setState({ error: null })
  }

  setDiscussion = discussion => {
    this.setState({ discussion })
  }

  setComments = comments => {
    this.setState({ comments })
  }

  clearDiscussion = () => {
    this.setDiscussion(nullDiscussion)
    this.setComments([])
  }

  addComment = comment => {
    this.setComments([
      ...this.state.comments,
      comment
    ])
  }

  render() {
    const value = {
      discussion: this.state.discussion,
      comments: this.state.comments,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      setDiscussion: this.setDiscussion,
      setComments: this.setComments,
      clearDiscussion: this.clearDiscussion,
      addComment: this.addComment,
    }
    return (
      <DiscussionContext.Provider value={value}>
        {this.props.children}
      </DiscussionContext.Provider>
    )
  }
}
