import { useState } from 'react'
import React from "react"
import "../style/employee-inputs.css"

const EmployeeInputs = (props) => {

  const[alert,setAlert] = useState('')

  function checkIt(){
    if(props.input===''||props.familyName ===''|| props.department===''||props.id===''||props.salary===''){
      setAlert('1px solid red')
    } else{
      setAlert('')
      props.addToArray()
    }
  }
  
  return (
    <div className="employee-inputs">
      <div className="inputs-container">
        <h2>Add new Employee</h2>
        <div className="input-list">
          <input onChange={(e) => props.setInput(e.target.value)} type="text" placeholder="First name" value={props.input} style={{border:alert}}/>
          <input onChange={(e) => props.setFamilyName(e.target.value)} type="text" placeholder="Family name" value={props.familyName} style={{border:alert}} />
          <input onChange={(e) => props.setDepartment(e.target.value)} type="text" placeholder="Department" value={props.department} style={{border:alert}} />
          <input onChange={(e) => props.setId(e.target.value)} type="text" placeholder="ID" value={props.Id} style={{border:alert}}/>
          <input onChange={(e) => props.setSalary(e.target.value)} type="text" placeholder="Salary" value={props.salary} style={{border:alert}} />
          <button onClick={() => {checkIt()}}>Add New Employee</button>
        </div>
       
      </div>
    </div>
  )
}

export default EmployeeInputs
