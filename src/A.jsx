import React, { createContext } from 'react'
import B from './B'
import C from './C'
import D from './D'

export const UserContext = createContext()
function A() {

  return (
    <div>
        <UserContext.Provider value="sajan">
      <h1>A</h1>
      <B/>
      <C/>
      <D/>
      </UserContext.Provider>
    </div>
  )
}

export default A
