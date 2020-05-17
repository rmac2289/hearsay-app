import TokenService from '../services/token-service'
import config from '../config'

const DiscussionApiService = {
  getDiscussions() {
    return fetch(`${config.API_ENDPOINT}/discussion`, {
      headers: {
      },
    })
    .then(response => {
        if(!response.ok){
            return response.json().then(e => Promise.reject(e))
        }
        return response.json()
    })
  },
  getTopics() {
    return fetch(`${config.API_ENDPOINT}/discussion/topics`, {
      headers: {
      },
    })
    .then(response => {
        if(!response.ok){
            return response.json().then(e => Promise.reject(e))
        }
        return response.json()
    })
  },
  getDiscussion(discussionId) {
    return fetch(`${config.API_ENDPOINT}/discussion/${discussionId}`, {
      headers: {
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      },
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  getDiscussionComments(discussionId) {
    return fetch(`${config.API_ENDPOINT}/discussion/${discussionId}/comments`, {
      headers: {
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      },
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  postComment(topic_name, discussion_post) {
    return fetch(`${config.API_ENDPOINT}/discussion`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify({
        discussion_post,
        topic_name,
      }),
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  getReviews(){
    return fetch(`${config.API_ENDPOINT}/reviews`, {
      headers: {
      },
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  getReview(reviewId){
    return fetch(`${config.API_ENDPOINT}/reviews/${reviewId}`, {
      headers: {
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      },
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  postReview(state, department, nature, rating, comments, incident_date ){
    return fetch(`${config.API_ENDPOINT}/reviews`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify({
        state,
        department,
        nature,
        rating,
        comments,
        incident_date,
      }),
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  }
}

export default DiscussionApiService
