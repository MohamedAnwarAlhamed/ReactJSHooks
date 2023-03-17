import React from 'react'
import useCounter from './useCounter'

const COUNTTOW = () => {
  const [count, Increment, Decrement] = useCounter(6, 2)

  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={Increment}>Increment</button>
      <button onClick={Decrement}>Decrement</button>
    </div>
  )
}

export default COUNTTOW
