import { useState } from "react"

import "./App.css"
import Employee_form from "./components/Employee_form"
import Employee_list from "./components/Employee_list"
import Employee_imputs from "./components/Employee_inputs"

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
      <Employee_imputs
        input={input} setInput={setInput} addToArray={addToArray} 
        familyName={familyName} setFamilyName={setFamilyName}
        department={department} setDepartment={setDepartment}
        id={setId} setId={setId}
        salary={salary} setSalary={setSalary}
      />
    )
  }

  function getOneElement(e){
    return <Employee_list item = {e}/>
  }
  
  return (
    <div className="App">
      <Employee_form setModal={setModal} />
      {modal ? showModal() : null}
      {array.map(getOneElement)}
      
    </div>
  )
}

export default App
