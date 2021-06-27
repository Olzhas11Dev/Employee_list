import React from "react"
import "../style/employee-form.css"

const Employee_form = (props) => {
  return (
    <div className="header-form">
      <div className="container">
        <h2>Employee</h2>
        <button onClick={() => props.setModal(true)}>New Employee</button>
        <div className="header-title">
          <div className="header-items">
            <div className="item">First Name</div>
          </div>
          <div className="header-items">
            <div className="item">First Name</div>
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

export default Employee_form
