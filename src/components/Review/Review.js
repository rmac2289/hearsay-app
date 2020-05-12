import React from 'react'
import STORE from '../../STORE'
import './Review.css'

export default function Review(props){
    return(
        <div>
            <header className="reviewHeader">
                <h1>Reviews</h1>
            </header>
            <section className="reviewSection">
            <p><strong>State:</strong> {STORE[0].reviews[0].state}</p>
            <p><strong>Department:</strong> {STORE[0].reviews[0].department}</p>
            <p><strong>Nature of Encounter:</strong> {STORE[0].reviews[0].nature}</p>
            <p><strong>Rating:</strong> {STORE[0].reviews[0].rating}</p>
            <p><strong>Date:</strong> April 17th, 2020 11:15 AM</p>
            <p><strong>Comments:</strong> {STORE[0].reviews[0].comments}</p>
            <p><strong>User:</strong> {STORE[0].reviews[0].user}</p>
            </section>
            <section className="reviewSection">
            <p><strong>State:</strong> {STORE[0].reviews[1].state}</p>
            <p><strong>Department:</strong> {STORE[0].reviews[1].department}</p>
            <p><strong>Nature of Encounter:</strong> {STORE[0].reviews[1].nature}</p>
            <p><strong>Rating:</strong> {STORE[0].reviews[1].rating}</p>
            <p><strong>Date:</strong> April 17th, 2020 11:15 AM</p>
            <p><strong>Comments:</strong> {STORE[0].reviews[1].comments}</p>
            <p><strong>User:</strong> {STORE[0].reviews[1].user}</p>
            </section>
            <section className="reviewSection">
            <p><strong>State:</strong> {STORE[0].reviews[2].state}</p>
            <p><strong>Department:</strong> {STORE[0].reviews[2].department}</p>
            <p><strong>Nature of Encounter:</strong> {STORE[0].reviews[2].nature}</p>
            <p><strong>Rating:</strong> {STORE[0].reviews[2].rating}</p>
            <p><strong>Date:</strong> April 17th, 2020 11:15 AM</p>
            <p><strong>Comments:</strong> {STORE[0].reviews[2].comments}</p>
            <p><strong>User:</strong> {STORE[0].reviews[2].user}</p>
            </section>
        </div>
    )
}