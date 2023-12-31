import React, { useRef } from 'react'


function D() {
  let abc=useRef()
  let efg=()=>{
    abc.current.focus()
  }
  return (
    <div>
      <input type='text' ref={abc}/>
      <button onClick={efg}>Send</button>
    </div>
  )
}

export default D
