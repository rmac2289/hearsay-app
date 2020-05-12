import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Departments.css'
import Agencies from '../../Agencies'
import WriteReview from '../WriteReview/WriteReview'

export default function Departments(props){
    const [setSelect, setSelectState] = useState("")
    const [setDeptSelect, setDeptSelectState] = useState("")

    function selectChange(event){
        setSelectState(event.target.value)
    }
    function deptSelectChange(event){
        setDeptSelectState(event.target.value)
    }
    const writeOrLook = (<div className="selectLinks">
        <div><Link className="departmentLink" to='/singlereview'>show me reviews</Link></div>
        <div><Link className="departmentLink" to='/'>write a review</Link></div>
        </div>)

    const states = Object.keys(Agencies.States)
    const stateList = states.map((value, index) => {
        return <option key={index} value={value}>{value}</option>    
    })
    const depts = Agencies.States[setSelect]
    return (        
        <div>
            <header className="departmentsHeader">
                <h2>find law enforcement agency</h2>
            </header>
            <section className="departmentsSection">
                <p>pick your state, then choose the department from the list</p>
                <p>once you've found what you're looking for, follow the link to check out existing reviews or leave your own using the form that appears below</p>
                <select className="select" onChange={selectChange}>
                    <option defaultValue="find your state">find your state</option>
                    {stateList} 
                </select>
                <select onChange={deptSelectChange} className="select">
                    {setSelect !== "" && <option defaultValue="choose department">choose department</option>}
                    {setSelect !== "" && depts.map((value, index) => {
                    return <option value={value} key={index}>{value}</option>})} 
                </select>
                {setDeptSelect !== '' && writeOrLook}
                </section>
            {(setDeptSelect !== '' && setDeptSelect !== 'choose department') && <WriteReview onChangeState={selectChange} onChangeDept={deptSelectChange} state={setSelect} deptName={setDeptSelect}/>}
        </div>
    )
}