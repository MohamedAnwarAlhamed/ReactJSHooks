import React from 'react'
 Count = (props) => {
  console.log('Count rendering')
  return (
    <div>
      {props.text} is {props.count}
    </div>
  )
}
export default Count
// export default React.memo(Count); //Count.js
