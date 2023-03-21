import React from 'react'
import { TodoItem } from './Todo'
import './main.css'

export const Todos = (props) => {
    let myStyle = {
        minHeight: "65vh",
        margin: "80px auto"
    }
    let width = {
        position: "absolute",
        margin:"-30px auto ",
        left: "0",
        width :"150%",
        // color : "green",
        border: "solid 1px green"
        
        
    }
  return (
    
    <div className='container ' style={myStyle}>
        <div></div>
        <hr style={width}/>
        <h3 className='py-3'>ToDos List</h3>
        {props.todos.length===0? "no Todos to display" :
        props.todos.map((todo)=>{
            return (
                <>
            <TodoItem todo = {todo} key={todo.sno} onDelete={props.onDelete}/> <hr/>
            </>
            )
        })      
        }
        
        </div>
  )  
}
