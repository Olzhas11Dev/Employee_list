import React from "react"
import "../style/employee-list.css"

const Employee_list = () => {
  return (
    <div className="employee-list">
      <div className="container">
        <div className="list-title">
          <div className="list-items">
            <div className="list-item">Olzhas</div>
          </div>
          <div className="list-items">
            <div className="list-item">Kurmanbayev</div>
          </div>
          <div className="list-items">
            <div className="list-item">Development</div>
          </div>
          <div className="list-items">
            <div className="list-item">#111</div>
          </div>
          <div className="list-items">
            <div className="list-item">160 000</div>
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
