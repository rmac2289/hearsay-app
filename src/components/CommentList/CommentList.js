import React, { Component } from 'react'
import Comment from '../Comment/Comment'
import './CommentList.css'
import moment from 'moment'

export default class CommentList extends Component {
    render() {
    const posts = this.props.data
    const postList = posts.filter(post => post.topic_name === this.props.current_topic).map((value,index) => {
      return <Comment key={index} values={value.id} date={moment(value.date_created).format("dddd, MMMM Do YYYY")} user={value.user_name} text={value.discussion_post} />
    }) 
    const sortedPosts = postList.sort(function(a,b){return a.props.values - b.props.values})
     return (
        <section>
            <ul className="postList">
            {sortedPosts.length < 1 ? 
            <div className="choose">
              <h3>Choose a topic above to see what others have to say!</h3>
            </div>:sortedPosts}
          </ul>
        </section>
      );
    }
  };