import React, { useReducer, useEffect } from 'react'
import ParentComponent from "./components/ParentComponent";

const App = () => {
  return (
    <div>
      <div className="App">
        <ParentComponent />
      </div>
    </div>
  )
}

export default App
