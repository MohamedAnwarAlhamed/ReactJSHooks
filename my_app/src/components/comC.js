import React from 'react'
import { UserContext, ChannelContext } from '../App'
const C = () => {
  return (
    <div>
        <UserContext.Consumer>
            {(user) => {
                return (
                  <ChannelContext.Consumer>
                  {(channel) => {
                      return (
                            <h1> {user} - {channel} </h1>
                      );
                  }}
                  </ChannelContext.Consumer>
                );
              }}
              </UserContext.Consumer>
    </div>
  )
}

export default C