import {React, useContext} from 'react'
import {countContext} from '../App'


const B = () => {
  const ConutContext = useContext(countContext)
  return (
    <div>
    <button onClick={() => ConutContext.countDispatch('increment')}>
      +
    </button>
    <button onClick={() => ConutContext.countDispatch('decrement')}>
      -
    </button>
    <button onClick={() => ConutContext.countDispatch('reset')}>0</button>
    </div>
  )
}

export default B