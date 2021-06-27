import { useState } from "react"

import "./App.css"
import Employee_form from "./components/Employee_form"
import Employee_list from "./components/Employee_list"
import Employee_imputs from "./components/Employee_inputs"

function App() {
  const [modal, setModal] = useState(false)
  function showModal() {
    return <Employee_imputs />
  }

  return (
    <div className="App">
      <Employee_form setModal={setModal} />
      {modal ? showModal() : null}
      <Employee_list />
    </div>
  )
}

export default App
