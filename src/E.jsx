import React, { useReducer } from 'react'

function reducer(state,action)
{
    switch(action.type)
    {
        case "inc":  return{age: state.age+1 }
        case "desc":  return{age: state.age-1 }
    }    
}
//useReducer(<reducer>, <initialState>)
function E() {
    let [state, dispatch ]=useReducer(reducer, {age: 20})
  return (
    <div>
     <h1>{state.age}</h1>
     <button onClick={()=> dispatch({ type: "inc"})}>++</button>
     <button onClick={()=> dispatch({ type: "desc"})}>--</button>
    </div>
  )
}

export default E

 
