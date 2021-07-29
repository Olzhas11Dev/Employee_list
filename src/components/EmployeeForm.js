import React from "react"
import "../style/employee-form.css"

const EmployeeForm = (props) => {
  return (
    <div className="header-form">
      <div className="container">
        <h2>Employee</h2>
        <div className="button-secion"> <button onClick={() => props.setModal(true)}>New Employee</button>
        <div className='numbersEmpl' >Numbers of employees: {props.array.length}</div></div>
       
        <div className="header-title">
          <div className="header-items">
            <div className="item">First Name</div>
          </div>
          <div className="header-items">
            <div className="item">Family Name</div>
          </div>
          <div className="header-items">
            <div className="item">Department</div>
          </div>
          <div className="header-items">
            <div className="item">ID</div>
          </div>
          <div className="header-items">
            <div className="item">Salary</div>
          </div>
          <div className="header-items">
            <div className="item">Delete</div>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default EmployeeForm
