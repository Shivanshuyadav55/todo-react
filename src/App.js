import './App.css';
import { Todos } from './Components/Todos';
import React, { useState, useEffect , element} from 'react';
import { AddTodo } from './Components/AddTodo';
import Footer from './Components/Footer';
import Header from './Components/header';
import {About} from './Components/About';
import {
  BrowserRouter as Router,
  Switch,
  Routes,
  Route
} from "react-router-dom";

function App() {
  let initTodo;

  if(localStorage.getItem("todos")===null){
    initTodo = [];
  }
  else{
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  let onDelete = (todo)=> {
    console.log("done delete" , todo);
    setTodos(todos.filter((e)=>{
      return e!==todo;
    }))
    localStorage.getItem("todos", JSON.stringify(todos));
  }

  const addTodo = (title,desc)=> {
    console.log("adding new todo", title, desc);
    let sno;
    if(todos.length===0){
      sno=0;
    }
    else{
      sno = todos[todos.length-1].sno + 1 ;
    }
    const myTodo ={
      sno: sno,
      title: title,
      desc: desc
    }
    setTodos([...todos,myTodo]);
    console.log(myTodo);
 }
  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos" , JSON.stringify(todos));
  }, [todos])
  return (
    <div className="App">
     <>
     <Router>
      <Header title = "My-Todos" searchBar = {false}/>
      <Switch>
      <Route exact path="/" render={()=>{
        return(
        <>
        <AddTodo addTodo={addTodo}/>
        <Todos todos={todos} onDelete={onDelete}/>
        </>)
      }}>
        
        </Route>
          <Route exact path="/about" element={About}>
            
          </Route>
        </Switch>
      
      <Footer/>
      </Router>
     
     </>
    </div>
  );
}

export default App;
