import React, { useState, useEffect } from 'react'
import './Departments.css'
import Agencies from '../../Agencies'
import WriteReview from '../WriteReview/WriteReview'
import Review from '../Review/Review'
import Nav from '../Nav/Nav'
import Footer from '../Footer/Footer'
import DiscussionApiService from '../../services/article-api-service'

export default function Departments(){
    const [setSelect, setSelectState] = useState("")
    const [setDeptSelect, setDeptSelectState] = useState("")
    const [reviews, setReviews] = useState([])

    const handleAddReview = (ev, review) => {
        ev.preventDefault();
        const newReviews = reviews.concat([review]);
        setReviews(newReviews);
        DiscussionApiService.postReview(setSelect, setDeptSelect, review.nature, review.rating, review.comments, review.incident_date )
            .then(setReviews(newReviews))
            .catch(error => console.error(error));
    }

    useEffect(() => {
        DiscussionApiService.getReviews()
            .then(data => {
                setReviews(data);
            })
            .catch(error => console.error(error))
    }, [])

    function selectChange(event){
        setSelectState(event.target.value)
    }
    function deptSelectChange(event){
        setDeptSelectState(event.target.value)
    }
    const states = Object.keys(Agencies.States)
    const stateList = states.map((value, index) => {
        return <option key={index} value={value}>{value}</option>    
    })
    const depts = Agencies.States[setSelect]
    return (   
        <>
        <Nav />     
        <div>
            <header className="departmentsHeader">
                <h1 id="agency">agency finder</h1>
            </header>
            <section className="departmentsSection">
                <p className="deptP">pick your state, then choose the department from the list</p>
                <p className="deptP">once you've found what you're looking for, leave your review using the form that appears below or scroll down to check out existing reviews for that department</p>
                <select className="select" onChange={selectChange}>
                    <option defaultValue="find your state">find your state</option>
                    {stateList} 
                </select>
                <select onChange={deptSelectChange} className="select">
                    {setSelect !== "" && <option defaultValue="choose department">choose department</option>}
                    {setSelect !== "" && depts.sort().map((value, index) => {
                    return <option value={value} key={index}>{value}</option>})} 
                </select>
                </section>
            {(setDeptSelect !== '' && setDeptSelect !== 'choose department') && <><WriteReview handleAddReview={handleAddReview} onChangeState={selectChange} onChangeDept={deptSelectChange} state={setSelect} deptName={setDeptSelect}/><Review reviews={reviews}department={setDeptSelect}/></>}
        </div>
        <Footer />
        </>
    )
}