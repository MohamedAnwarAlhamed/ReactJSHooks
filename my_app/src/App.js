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
  const [count1, dispatch1] = useReducer(reducer, initialState)
  const [count2, dispatch2] = useReducer(reducer, initialState)

  return (
    <div>
      <h1> count1 - {count1} </h1>
      <button onClick={() => dispatch1('increment')}>+</button>
      <button onClick={() => dispatch1('decrement' )}>-</button>
      <button onClick={() => dispatch1('reset')}>0</button>


      <h1> count2 - {count2} </h1>
      <button onClick={() => dispatch2('increment')}>+</button>
      <button onClick={() => dispatch2('decrement' )}>-</button>
      <button onClick={() => dispatch2('reset')}>0</button>
    </div>
  )
}

export default App
