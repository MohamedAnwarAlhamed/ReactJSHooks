import { React, useState, useEffect } from 'react'
import axios from 'axios'

const App = () => {
  const [user, setUsers] = useState({})
  const [id, setId] = useState(1)

  useEffect(() => {
    //axios.get("https://jsonplaceholder.typicode.com/users")
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        setUsers(data)
      })
  }, [id])
  return (
    <div>
      <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
      <ul>
        <li key={user.id}>{user.name}</li>
      </ul>
    </div>
  )
}

export default App
