import React, { useReducer, useEffect } from 'react'
import axios from 'axios'

const initialState = {
  loading: true,
  error: '',
  users: {},
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_SUCCESS':
      return {
        loading: false,
        users: action.payload,
        error: '',
      }
    case 'FETCH_ERROR':
      return {
        loading: false,
        error: 'Something went wrong!',
        users: {},
      }
    default:
      return state
  }
}
const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState)
  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        dispatch({ type: 'FETCH_SUCCESS', payload: response.data })
      })
      .catch((error) => {
        dispatch({ type: 'FETCH_ERROR' })
      })
  }, [])
  return (
    <div>
      {state.loading ? (
        <p>loading...</p>
      ) : state.error ? (
        <p>{state.error}</p>
      ) : (
        <ul>
          {state.users.map((user) => (
            <li key={user.id}>
              <h1>{user.name}</h1>
              <p>{user.email}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default App
