import { React, useContext } from 'react'
import { UserContext, ChannelContext } from '../App'
const C = () => {
  const user = useContext(UserContext);
  const channel = useContext(ChannelContext);
  return (
    <div>
      <h1>
        {' '}
        {user} - {channel}{' '}
      </h1>
    </div>
  )
}

export default C
