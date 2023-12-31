import React, { useMemo, useState } from 'react'

function Profile() {
 
  let [add, setAdd]=useState(0)
  let [minus, setMinus]=useState(100)

  const mmm=useMemo(function multiply()
  {
    console.log('helllllo')
   return add*10;
  },[add])
  
  return (
    <div>
      {multiply()}
      <button onClick={()=>setAdd(add+1)}>++</button>
      {add}
      <button onClick={()=>setMinus(minus-1)}>--</button>
      {minus}
      {add}
    </div>
  )
}

export default Profile
