import { useState } from "react"

import "./App.css"
import EmployeeForm from "./components/EmployeeForm"
import EmployeeList from "./components/EmployeeList"
import EmployeeInputs from "./components/EmployeeInputs"

function App() {
  const [modal, setModal] = useState(false)
  const [input, setInput] = useState("")
  const [familyName, setFamilyName] = useState("")
  const [department, setDepartment] = useState("")
  const [id, setId] = useState("")
  const [salary, setSalary] = useState("")
  const [array, setArray] = useState([])

  function addToArray() {
    setArray([...array, 
      { firstName: input, 
      secondName: familyName ,
      department: department,
      id: id,
      salary:salary}])
      setInput('')
      setFamilyName('')
      setDepartment('')
      setId('')
      setSalary('')
      setModal(false)
  }

  function showModal() {
    return (
      <EmployeeInputs
        input={input} setInput={setInput} addToArray={addToArray} 
        familyName={familyName} setFamilyName={setFamilyName}
        department={department} setDepartment={setDepartment}
        id={setId} setId={setId}
        salary={salary} setSalary={setSalary}
      />
    )
  }

  function cleanList (elem){
    let newArray = array.filter(function(k){
      return k!==elem
    })
    setArray(newArray)
  }

  function getOneElement(e,key){
    return <EmployeeList item = {e}
    cleanList = {cleanList} 
    key={key}/>
  }

  return (
    <div className="App">
      <EmployeeForm setModal={setModal} array={array}/>
      {modal ? showModal() : null}
      {array.map(getOneElement)}
      
    </div>
  )
}

export default App
