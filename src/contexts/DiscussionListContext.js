import React, { Component } from 'react'

const DiscussionListContext = React.createContext({
  discussionList: [],
  error: null,
  setError: () => {},
  clearError: () => {},
  setDiscussionList: () => {},
})
export default DiscussionListContext

export class DiscussionListProvider extends Component {
  state = {
    discussionList: [],
    error: null,
  };

  setDiscussionList = discussionList => {
    this.setState({ discussionList })
  }

  setError = error => {
    console.error(error)
    this.setState({ error })
  }

  clearError = () => {
    this.setState({ error: null })
  }

  render() {
    const value = {
      discussionList: this.state.discussionList,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      setDiscussionList: this.setDiscussionList,
    }
    return (
      <DiscussionListContext.Provider value={value}>
        {this.props.children}
      </DiscussionListContext.Provider>
    )
  }
}
