import { React, useReducer, createContext } from 'react'
import reducer from './reducer'
import {initialState} from './reducer'
import A from './components/comA'
import B from './components/comB'
import C from './components/comC'

export const countContext = createContext()

const App = () => {
  const [count1, dispatch1] = useReducer(reducer, initialState)

  return (
    <div>
    <h1> count - {count1} </h1>

      <countContext.Provider
        value={{ countState: count1, countDispatch: dispatch1 }}
      >
        <A />
        <B />
        <C />
      </countContext.Provider>
    </div>
  )
}

export default App
