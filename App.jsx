import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [todoInput, settodoinput] = useState("")

  const [todoList, settodolist] = useState([])


  const  addtodo = () => {
    console.log(todoInput);
    if(!todoInput) {
      alert("Please enter a task")
      return
    }
    settodolist([...todoList, todoInput])
    settodoinput("")
    console.log(todoList);
  }
const deleteTodo = (index) => {
  console.log(index);
  //todoList.splice(index, 1)
  const newTodoList = todoList.filter((todo, i) => {
    console.log(todo, i);
    return i !== index

  })
  settodolist(newTodoList)
  console.log(newTodoList);
  settodoinput("")
  console.log(todoList);
}
const updateTodo = (index) => {
  console.log(index);
  const updatedTodo = prompt("Enter the updated task", todoList[index])
  if(updatedTodo) {
    const updateTodoList = todoList.map((todo, i) => {
      if(i === index) {
        return updatedTodo
      }
      return todo
    })
    settodolist(updateTodoList)
    settodoinput("")
  }
  console.log(todoList);
  console.log(updatedTodo);
}
const DeleteAll = () => {
  settodolist([])
  settodoinput("")
  console.log(todoList);
  alert("All tasks deleted")
}


  return (
    <>
     <div className='main-container'>
     <h1>TO DO LIST</h1>
     <div className="container">
      <div className="add-input">
      <input type="text" placeholder='enter task' onChange={(e)=>{settodoinput(e.target.value)}}/>
      <button onClick={addtodo} >Add</button>
      <button className='DeletBtn' onClick={DeleteAll}>Delete All</button>
      </div>
      <div className='list-container'>
        <ul>
        {todoList.map((todoData, index) => {
    return (
      <li key={index}>
        {todoData}
        <button className='edit-btn' id={index} onClick={()=>{updateTodo(index)}} >Update</button>
        <button className='delete-btn' id={index} onClick={()=>{deleteTodo(index)}}>Delete</button>
      </li>
    )
  })}
        </ul>
      </div>
     </div>
     </div>
    </>
  )
}

export default App
