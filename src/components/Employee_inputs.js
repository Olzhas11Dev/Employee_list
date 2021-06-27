import React from "react"
import "../style/employee-inputs.css"
const Employee_inputs = () => {
  return (
    <div className="employee-inputs">
      <div className="inputs-container">
        <h2>Add new Employee</h2>
        <div className="input-list">
          <input type="text" placeholder="Enter  First name" />
          <input type="text" placeholder="Enter  Family name" />
          <input type="text" placeholder="Enter  Department" />
          <input type="text" placeholder="Enter  ID" />
          <input type="text" placeholder="Enter Salary" />
          <button>Add New Employee</button>
        </div>
      </div>
    </div>
  )
}

export default Employee_inputs
