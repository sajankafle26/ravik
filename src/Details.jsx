import React from 'react'
import { useParams } from 'react-router-dom'

function Details() {
    let {id}=useParams()
  return (
    <div>
      <h6>Details</h6>{id}
    </div>
  )
}

export default Details
