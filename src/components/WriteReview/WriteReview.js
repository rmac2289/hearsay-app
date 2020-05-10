import React, { useState } from 'react'
import './WriteReview.css'
import { Textarea, Input, Button } from '../../Utils/Utils'

export default function WriteReview(props) {
    const [setNature, setNatureState] = useState("")
    const [setComments, setCommentsState] = useState("")
    const [setRating, setRatingState] = useState("")

    function getNatureText(event){
        setNatureState(event.target.value)
    }
    function getCommentsText(event){
        setCommentsState(event.target.value)
    }
    function getRating(event){
        setRatingState(event.target.value)
    }
    return (
        <main>
            <header id="banner">
                <h1>New Encounter</h1>
            </header>
            <section className="section">
                <form className="reviewForm">
                <div className="form-section">
                        <label className="reviewLabel" htmlFor="state">State</label>
                        <Input value={props.state} onChange={props.onChangeState} className="reviewInput" type="text" name="state" required />
                    </div>
                    <div className="form-section">
                        <label className="reviewLabel" htmlFor="department">Department</label>
                        <Input value={props.deptName} onChange={props.onChangeDept} className="reviewInput" type="text" name="department" required />
                    </div>
                    <div className="form-section">
                        <label className="reviewLabel" htmlFor="nature">What led to the encounter?</label>
                        <Textarea onChange={getNatureText} value={setNature} className="reviewTextarea" name="nature" rows="5" required />
                    </div>
                    <div className="form-section">
                        <label className="reviewLabel" htmlFor="rating">Rating</label>
                        <Input onChange={getRating} value={setRating} className="reviewInput" type="number" name="rating" placeholder="8" />
                    </div>
                    <div className="form-section">
                        <label className="reviewLabel" htmlFor="comments">comments</label>
                        <Textarea onChange={getCommentsText} value={setComments} className="reviewTextarea"  name="comments" rows="15" />
                    </div>
                    <div className="form-section">
                        <p className="reviewP">When did this happen?</p>
                        <div id="date">
                        <Input className="reviewInput" type="number" name="date-month" placeholder="MM" min="1" max="12" required="" />
                        <Input className="reviewInput date-day" type="number" name="date-day" placeholder="DD" min="1" max="31" required="" />
                        <Input className="reviewInput date-year" id="date-year" type="number" name="date-year" placeholder="YYYY" min="2016" max="2017" required="" />
                        </div>
                    </div>

                    <Button id="reviewSubmit" type="submit">Submit</Button>
                    <Button type="reset">Reset</Button>
                </form>
            </section>
        </main>
    )
}