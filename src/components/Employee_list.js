import React from "react"
import "../style/employee-list.css"

const Employee_list = (props) => {
  
  return (
    <div className="employee-list">
      <div className="container">
        <div className="list-title">
          <div className="list-items">
            <div className="list-item">{props.item.firstName}</div>
          </div>
          <div className="list-items">
            <div className="list-item">{props.item.secondName}</div>
          </div>
          <div className="list-items">
            <div className="list-item">{props.item.department}</div>
          </div>
          <div className="list-items">
            <div className="list-item">{props.item.id}</div>
          </div>
          <div className="list-items">
            <div className="list-item">{props.item.salary}</div>
          </div>
          <div className="list-items">
            <div className="list-item">
              <button className="delete">Delete</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Employee_list
