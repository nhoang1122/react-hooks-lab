import React from 'react'
import Todo from './Todo'

const List = (props) => {

    console.log("PROPS.LIST : ", props.list)

  return (
    <div>
        {props.list.map((item,index) => {
            return <Todo item={item} key={index}/>
        })}    
    </div>
  )
}

export default List