import React, { useState } from 'react'
import './WriteReview.css'
import { Textarea, Input, Button } from '../../Utils/Utils'


export default function WriteReview(props) {
    const [setNature, setNatureState] = useState("")
    const [setComments, setCommentsState] = useState("")
    const [setRating, setRatingState] = useState("")
    const [setDateMonth, setDateMonthState] = useState('')
    const [setDateDay, setDateDayState] = useState('')
    const [setDateYear, setDateYearState] = useState('')

    function getNatureText(event) {
        setNatureState(event.target.value)
    }
    function getCommentsText(event) {
        setCommentsState(event.target.value)
    }
    function getRating(event) {
        setRatingState(event.target.value)
    }
    function getDateMonth(event){
        setDateMonthState(event.target.value)
    }
    function getDateDay(event){
        setDateDayState(event.target.value)
    }
    function getDateYear(event){
        setDateYearState(event.target.value)
    }
   
    const handleSubmit = (e) => {
      e.preventDefault();
      const incidentDate = `${setDateYear}-${setDateMonth}-${setDateDay}`
      const review_fields = {
          state: props.state,
          department: props.deptName,
          nature: setNature,
          rating: setRating,
          comments: setComments,
          incident_date: incidentDate,
          user: sessionStorage.getItem('username')
      }

      if (!review_fields) {
        return;
      }
        props.handleAddReview(e, review_fields);
    }

    return (
        <main>
            <header id="banner">
                <h1 className="newHeader">New Review</h1>
            </header>
            <section className="section">
                <form className="reviewForm ReviewForm" onSubmit={handleSubmit} >
                    <div className="form-section">
                        <label className="reviewLabel" htmlFor="state"><strong>State:</strong></label>
                        <Input value={props.state} onChange={props.onChangeState} className="reviewInput" type="text" name="state" required />
                    </div>
                    <div className="form-section">
                        <label className="reviewLabel" htmlFor="department"><strong>Department</strong></label>
                        <Input value={props.deptName} onChange={props.onChangeDept} className="reviewInput" type="text" name="department" required />
                    </div>
                    <div className="form-section">
                        <label className="reviewLabel" htmlFor="nature"><strong>What led to the encounter?</strong></label>
                        <Textarea onChange={getNatureText} value={setNature} className="reviewTextarea" name="nature" rows="5" required />
                    </div>
                    <div className="form-section">
                        <label className="reviewLabel" htmlFor="comments"><strong>Comments:</strong></label>
                        <Textarea onChange={getCommentsText} value={setComments} className="reviewTextarea" name="comments" rows="15" />
                    </div>
                    <div className="form-section">
                        <div >
                            <label htmlFor='rating'><strong>Rating:</strong></label>
                            <select
                            value={setRating}
                            className='select'
                                onChange={getRating}
                                required
                                aria-label='Rating'
                                name='rating'
                                id='rating'
                            >
                                <option value='1'>1 Star</option>
                                <option value='2'>2 Stars</option>
                                <option value='3'>3 Stars</option>
                                <option value='4'>4 Stars</option>
                                <option value='5'>5 Stars</option>
                            </select>
                        </div>
                        <label htmlFor="date-month"><strong>When did this happen?</strong></label>
                        <div id="date">
                            <Input className="reviewInput" value={setDateMonth} onChange={getDateMonth} id="date-month" type="number" name="date-month" placeholder="MM" min="1" max="12" required="" />
                            <Input className="reviewInput date-day" value={setDateDay} onChange={getDateDay} id="date-day" type="number" name="date-day" placeholder="DD" min="1" max="31" required="" />
                            <Input className="reviewInput date-year" value={setDateYear} onChange={getDateYear} id="date-year" type="number" name="date-year" placeholder="YYYY" min="2000" max="2020" required="" />
                        </div>
                    </div>

                    <Button id="reviewSubmit" type="submit">Submit</Button>
                    <Button type="reset">Reset</Button>
                </form>
            </section>
        </main>
    )
}