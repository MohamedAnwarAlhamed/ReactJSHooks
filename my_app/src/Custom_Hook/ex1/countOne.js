import React from 'react'
import useCounter from './useCounter'

const COUNTONE = () => {
  const [count, Increment, Decrement] = useCounter(0, 1)

  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={Increment}>Increment</button>
      <button onClick={Decrement}>Decrement</button>
    </div>
  )
}

export default COUNTONE
