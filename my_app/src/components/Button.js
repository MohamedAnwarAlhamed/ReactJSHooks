import React from 'react'
Button = (props) => {
  console.log(`Button clicked ${props.children}`)
  return (
    <div>
      <button onClick={props.handleClick}> {props.children} </button>
    </div>
  )
}
export default Button
// export default React.memo(Button);
