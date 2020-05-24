import React, { Component } from 'react'
import Comment from './Comment'
import '../DiscussionPage/DiscussionPage.css'

export default class CommentList extends Component {
    render() {
    const posts = this.props.data
    console.log(posts)
    const postList = posts.filter(post => post.topic_name === this.props.current_topic).map((value,index) => {
      return <Comment key={index} values={value.id} date={value.date_created} user={value.user_name} text={value.discussion_post} />
    }) 
    const sortedPosts = postList.sort(function(a,b){return a.props.values - b.props.values})
    console.log(sortedPosts)
     return (
        <section>
            <ul className="postList">
         {sortedPosts}
          </ul>
        </section>
      );
    }
  };