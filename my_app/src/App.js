import {React, useState, useEffect} from 'react'

const App = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
      console.log("useEffect called")
  });
  return (
    <div>
     App
     </div>
  )
}

export default App