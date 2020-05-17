import React, { useState, useEffect } from 'react'
import './Review.css'
import DiscussionApiService from '../../services/article-api-service'
import moment from 'moment'

export default function Review(props){
const [reviews, setReviews] = useState([])
useEffect(() => {
    DiscussionApiService.getReviews()
        .then(data => setReviews(data))
        .catch(error => console.error(error))
}, [])

const reviewsList = reviews.map((value, index) => {
    const incidentDate = moment(value.incident_date).format("dddd, MMMM Do YYYY")
    const reviewDate = moment(value.review_date).format("dddd, MMMM Do YYYY")
    return <section key={index} className="reviewSection">
    <p><strong>State:</strong> {value.state}</p>
    <p><strong>Department:</strong> {value.department}</p>
    <p><strong>Incident Date:</strong> {incidentDate}</p>
    <p><strong>Nature of Encounter:</strong> {value.nature}</p>
    <p><strong>Rating:</strong> {value.rating}</p>
    <p><strong>Review Date:</strong> {reviewDate}</p>
    <p><strong>Comments:</strong> {value.comments}</p>
    <p><strong>User:</strong> {value.user}</p>
    </section>
})
    return(
        <div>
            <header className="reviewHeader">
                <h1 id="reviewHeader">Reviews</h1>
            </header>
            {reviewsList}
        </div>
    )
}