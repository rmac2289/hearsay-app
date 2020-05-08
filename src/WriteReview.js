import React from 'react'
import './WriteReview.css'
import Nav from './Nav'
import Footer from './Footer'


export default function WriteReview() {
    return (
        <main>
            <Nav />
            <header id="banner">
                <h1>New Review</h1>
            </header>
            <section className="section">
                <form className="reviewForm">
                    <div className="form-section">
                        <label className="reviewLabel" htmlFor="locality">Locality</label>
                        <input className="reviewInput" type="text" name="locality" placeholder="City/Department" required />
                    </div>
                    <div className="form-section">
                        <label className="reviewLabel" htmlFor="nature">Nature of encounter</label>
                        <textarea className="reviewTextarea" name="nature" rows="5" placeholder="brief explanation of why your interaction occurred" required></textarea>
                    </div>
                    <div className="form-section">
                        <label className="reviewLabel" htmlFor="rating">Rating</label>
                        <input className="reviewInput" type="number" name="rating" placeholder="8" />
                    </div>
                    <div className="form-section">
                        <label className="reviewLabel" htmlFor="comments">comments</label>
                        <textarea className="reviewTextarea"  name="comments" rows="15"></textarea>
                    </div>
                    <div className="form-section">
                        <p className="reviewP">how did you feel after your experience?</p>
                        <input className="reviewInput" type="radio" name="terrible" value="0" />
                        <label className="reviewLabel" htmlFor="terrible">
                            <div>They had no right to treat me that way. Unacceptable.</div>
                        </label>

                        <input className="reviewInput" type="radio" name="bad" value="1" />
                        <label className="reviewLabel" htmlFor="bad">
                            <div>That was disrespectful. I was treated poorly.</div>
                        </label>

                        <input className="reviewInput" type="radio" name="ok" value="2" />
                        <label className="reviewLabel" htmlFor="ok">
                            <div>No major complaints, but nothing good to say either.</div>
                        </label>

                        <input className="reviewInput" type="radio" name="good" value="3" />
                        <label className="reviewLabel"  htmlFor="good">
                            <div>That was a pretty good experience - I got the help I needed.</div>
                        </label>

                        <input type="radio" name="great" value="4" />
                        <label className="reviewLabel" htmlFor="great">
                            <div>They went above and beyond to see that I got the help I needed.</div>
                        </label>
                    </div>

                    <div className="form-section">
                        <p className="reviewP">Date of Encounter</p>
                        <input className="reviewInput" type="number" name="date-month" placeholder="MM" min="1" max="12" required="" />
                        <input className="reviewInput date-day" type="number" name="date-day" placeholder="DD" min="1" max="31" required="" />
                        <input className="reviewInput date-year" type="number" name="date-year" placeholder="YYYY" min="2016" max="2017" required="" />
                    </div>

                    <button type="submit">Submit</button>
                    <button type="reset">Reset</button>
                </form>
            </section>
            <Footer />
        </main>
    )
}