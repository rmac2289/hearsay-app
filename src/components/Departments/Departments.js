import React, { useState } from 'react'
import './Departments.css'
import Agencies from '../../Agencies'
import WriteReview from '../WriteReview/WriteReview'
import Review from '../Review/Review'
import Nav from '../Nav/Nav'
import Footer from '../Footer/Footer'

export default function Departments(){
    const [setSelect, setSelectState] = useState("")
    const [setDeptSelect, setDeptSelectState] = useState("")

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
            {(setDeptSelect !== '' && setDeptSelect !== 'choose department') && <><WriteReview onChangeState={selectChange} onChangeDept={deptSelectChange} state={setSelect} deptName={setDeptSelect}/><Review department={setDeptSelect}/></>}
        </div>
        <Footer />
        </>
    )
}