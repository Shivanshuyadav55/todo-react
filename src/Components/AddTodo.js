import React, { useState } from "react";

export const AddTodo = ({addTodo}) => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const submit = (e)=>{
        e.preventDefault();
        if(!title || !desc){
            alert("Title or Descrption can't be empty")
        }
        else{
        addTodo(title, desc);
        setTitle("");
        setDesc("");
        }
    }
  return (
    <div className="container my-3">
        <h3>Add Your ToDo</h3>
      <form onSubmit={submit}>
        <div className="form-group">
          <label htmlFor="title">Todo Title</label>
          <input
            type="text"
            value={title}
            onChange={(e)=>{setTitle(e.target.value)}}
            className="form-control"
            id="title"
            aria-describedby="emailHelp"
          
          />
        </div>
        <div className="form-group mt-3">
          <label htmlFor="desc">Discription</label>
          <input
            type="text"
            value={desc}
            onChange={(e)=>{setDesc(e.target.value)}}
            className="form-control"
            id="desc"
           />
        </div>
        <button type="submit" className=" btn btn-sm mt-3 btn-success ">
          Add Todo
        </button>
      </form>
    </div>
  );
};
