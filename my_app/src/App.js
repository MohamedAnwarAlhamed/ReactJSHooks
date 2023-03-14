import { React, useEffect, useState } from 'react'
import axios from 'axios'

const App = () => {
  const [userDetails, setUserdetails] = useState()
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState()

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        console.log(response)
        setUserdetails(response.data)
        setError(false)
        setLoading(false)
      })
      .catch((error) => {
        setError('there was an error')
        setLoading(false)
        setUserdetails({})
      })
  }, [])
  return (
    <div>
      {loading ? (<p>loading...</p>) 
      : error ? (<p>{error}</p>)
      : (
        <ul>
          {userDetails.map((user) => (
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
