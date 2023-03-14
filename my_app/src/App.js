import { React, useReducer } from 'react'
// import A from './components/comA'

const initialState = { firstCount: 0, secondCount: 10 }
const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return { ...state,firstCount: state.firstCount + action.value }
      break
    case 'decrement':
      return { ...state,firstCount: state.firstCount - action.value }
      break
    case 'incrementS':
      return { ...state,secondCount: state.secondCount + action.value }
      break
    case 'decrementS':
      return { ...state,secondCount: state.secondCount - action.value }
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

  return (
    <div>
      <h1> count1 - {count1.firstCount} </h1>
      <button onClick={() => dispatch1({ type: 'increment', value: 5 })}>
        +
      </button>
      <button onClick={() => dispatch1({ type: 'decrement', value: 5 })}>
        -
      </button>
      <button onClick={() => dispatch1({ type: 'reset' })}>0</button>

      <h1> count1 - {count1.secondCount} </h1>
      <button onClick={() => dispatch1({ type: 'incrementS', value: 5 })}>
        +
      </button>
      <button onClick={() => dispatch1({ type: 'decrementS', value: 5 })}>
        -
      </button>
      <h1>reset all</h1>
      <button onClick={() => dispatch1({ type: 'reset' })}>0</button>
    </div>
  )
}

export default App
