import {React, useState, useEffect} from 'react'

const App = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let timer = setTimeout(() => {
    setCount((count) => count + 1);
  }, 3000);

  //return () => clearTimeout(timer)
  }, []);
  return (
    <div>
    <h1>I have rendered {count} times!</h1>
     </div>
  )
}

export default App