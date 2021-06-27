import React from "react"
import "../style/employee-inputs.css"
const Employee_inputs = (props) => {
  return (
    <div className="employee-inputs">
      <div className="inputs-container">
        <h2>Add new Employee</h2>
        <div className="input-list">
          <input onChange={(e) => props.setInput(e.target.value)} type="text" placeholder="Enter  First name" value={props.input} />
          <input onChange={(e) => props.setFamilyName(e.target.value)} type="text" placeholder="Enter  Family name" value={props.familyName} />
          <input onChange={(e) => props.setDepartment(e.target.value)} type="text" placeholder="Enter   Department" value={props.department} />
          <input onChange={(e) => props.setId(e.target.value)} type="text" placeholder="Enter  Id" value={props.Id} />
          <input onChange={(e) => props.setSalary(e.target.value)} type="text" placeholder="Enter  Salary" value={props.salary} />
          <button onClick={() => props.addToArray()}>Add New Employee</button>
        </div>
      </div>
    </div>
  )
}

export default Employee_inputs
