import React from 'react'

const Todo = (props) => {

    console.log("PROPS.ITEM : ",props.item)
  
    return (
    <h2>{props.item}</h2>
  )
}

export default Todo