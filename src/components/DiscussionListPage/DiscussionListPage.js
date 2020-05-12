import React, { Component } from 'react'
import DiscussionListContext from '../../contexts/DiscussionListContext'
import DiscussionApiService from '../../services/Discussion-api-service'
import { Section } from '../../Utils/Utils'
import DiscussionListItem from '../DiscussionListItem/DiscussionListItem'

export default class DiscussionListPage extends Component {
  static contextType = DiscussionListContext

  componentDidMount() {
    this.context.clearError()
    DiscussionApiService.getDiscussions()
      .then(this.context.setDiscussionList)
      .catch(this.context.setError)
  }

  renderArticles() {
    const { discussionList = [] } = this.context
    return discussionList.map(discussion =>
      <DiscussionListItem
        key={discussion.id}
        discussion={discussion}
      />
    )
  }

  render() {
    const { error } = this.context
    return (
      <Section list>
        {error
          ? <p>There was an error, try again</p>
          : this.renderDiscussions()}
      </Section>
    )
  }
}