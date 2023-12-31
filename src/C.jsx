import React, { useContext } from 'react'
import { UserContext } from './A'
 
function C() {
    let aa=useContext(UserContext)
  return (
    <div>
      <h1>C {aa}</h1>
    </div>
  )
}

export default C
