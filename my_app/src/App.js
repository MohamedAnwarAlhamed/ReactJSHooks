import { React, useReducer } from 'react'
// import A from './components/comA'

const initialState = 0
const reducer = (state, action) => {
  switch (action) {
    case 'increment':
      return state + 1
      break
    case 'decrement':
      return state - 1
      break
    case 'reset':
      return initialState
      break
    default:
      return state
  }
}

const App = () => {
  const [count, dispatch] = useReducer(reducer, initialState)
  return (
    <div>
      <h1> count - {count} </h1>
      <button onClick={() => dispatch('increment')}>+</button>
      <button onClick={() => dispatch('decrement' )}>-</button>
      <button onClick={() => dispatch('reset')}>0</button>
    </div>
  )
}

export default App
