import React from 'react'
import useInput from './useInput'
const USERFORM = () => {
  const [firstName, bindFirstName, resetFirstName] = useInput("mohamed")
  const [lastName, bindLastName, resetLastName] = useInput("mohamed")
  const submitHandler = (e) => {
    e.preventDefault()
    alert(`Hello ${firstName} ${lastName}`)
    resetFirstName()
    resetLastName()
  }
  return (
    <>
      <form onSubmit={submitHandler}>
        <div>
          <label>First Name</label>
          <input {...bindFirstName} />
        </div>
        <div>
          <label>Last Name</label>
          <input {...bindLastName} />
        </div>
        <button>Submit</button>
      </form>
    </>
  )
}

export default USERFORM;
