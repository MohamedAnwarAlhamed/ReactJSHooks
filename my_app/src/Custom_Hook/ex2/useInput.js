import { useState } from 'react'
const useInput = (initialValue) => {
  const [value, setValue] = useState(initialValue)
  const reset = () => {
    setValue(initialValue)
  };
  const bind = {
    value,
    type: 'text',
    onChange: (e) => {e.target.value}
  }
  return [value, bind, reset]
}

export default useInput; 
