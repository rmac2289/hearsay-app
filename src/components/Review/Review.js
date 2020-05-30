import React from 'react'
import './Review.css'
import moment from 'moment'


export default function Review(props){
const scrollDown = () => {
    const element = document.getElementById("banner")
    element.scrollIntoView({behavior: "smooth"})
}
// filter results so only reviews that match the selected department are rendered //
const filtered = props.department
const reviewsList = props.reviews.filter(review => review.department === filtered).map((value, index) => {
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
    </section>
})
    return(
        <div>
            <header className="reviewHeader">
                <h1 id="reviewHeader">Reviews</h1>
            </header>
            <div className="write"><div id="write" onClick={scrollDown}>write review</div></div>
            {/* conditionally render list of reviews if reviews exist */}
            {reviewsList.length > 0 ? reviewsList : <section id="nobody"><h3>Looks like nobody has reviewed this agency yet!</h3></section>}
            <div id="Review"></div>
        </div>
    )
}