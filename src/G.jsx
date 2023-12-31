import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { inc, desc } from './redux/counterSlice'
 
function G() {
  let a=useSelector((state)=>state.counter.value)
  var dispatch=useDispatch()
  return (
    <div>
      <h1>Count:{a} </h1>
      <button onClick={()=>dispatch(inc())}>++</button>
      <button onClick={()=>dispatch(desc())}>--</button>
    </div>
  )
}

export default G
