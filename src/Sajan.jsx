import React, { useEffect, useState } from 'react'

function Sajan() {
    let [data,setData]=useState([])
     
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts').then((res)=>res.json()).then((abc)=>setData(abc))
    }, [])
    console.log(data)
  return (
    <div>
       <ol>
        {data.map((a)=>(
            <li>{a.title}</li>
        ))}
       </ol>
    </div>
  )
}

export default Sajan
