import {React, useState} from 'react'

const App = () => {
  const [items, setItem] = useState([]);
  const addItem = () => {
    setItem([...items, 
      {
      id: items.length,
      value: Math.floor(Math.random() * 10) + 1
    }
  ]);
  };
  return (
    <div>
     <button onClick={addItem}>Add a Number</button>
     <ul>
    
      {items.map((item) => (
        <li key={item.id}>{item.value}</li>
      ))}
      </ul>
     </div>
  )
}

export default App