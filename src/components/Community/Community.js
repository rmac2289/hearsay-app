import React, { useState } from 'react'
import './Community.css'
import Agencies from '../../Agencies'
import { Link } from 'react-router-dom'
import { Button } from '../../Utils/Utils'

export default function Community(props){
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
        <section>
                <header>
                    <h2>see what others are saying in your community</h2>
                </header>
                <p>Find out what others in the country are saying about their local officials. Search for your city to see reviews about your local law enforcement.
                    Pick your state, then choose the department from the list.
                </p>
                <div className="citySearch">
                <select className="select" onChange={selectChange}>
                    <option defaultValue="find your state">find your state</option>
                    {stateList} 
                </select>
                <select onChange={deptSelectChange} className="select">
                    {setSelect !== "" && <option defaultValue="choose department">choose department</option>}
                    {setSelect !== "" && depts.map((value, index) => {
                    return <option value={value} key={index}>{value}</option>})} 
                </select>
                <div>
                    <Button><Link id="showMe" to="/singlereview">show me reviews</Link></Button>
                </div>
                </div>
        </section>
    )
}