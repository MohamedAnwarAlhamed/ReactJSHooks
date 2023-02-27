import {React, useState} from 'react'

const App = () => {
  const [name, setName] = useState({
    firstName: 'mohamed',
    lastName: 'anwar'
  });
  return (
    <div>
      <input type="text" name="fname" value={name.firstName}
      onChange={e => setName({...name, firstName: e.target.value})}
      />
      <input type="text" name="lname" value={name.lastName}
      onChange={e => setName({...name, lastName: e.target.value})}
      />
      <h1>My firstName is {name.firstName}</h1>
      <h1>My lastName is {name.lastName}</h1>
    </div>
  )
}

export default App