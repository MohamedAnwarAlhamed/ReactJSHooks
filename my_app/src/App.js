import { React, createContext } from 'react'
import A from './components/comA'

export const UserContext = createContext()
export const ChannelContext = createContext()

const App = () => {
  return (
    <div>
      <UserContext.Provider value={'mohamed'}>
        <ChannelContext.Provider value={'react'}>
          <A />
        </ChannelContext.Provider>
      </UserContext.Provider>
    </div>
  )
}

export default App
