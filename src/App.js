
import { useState , useEffect} from "react"
//import {BrowserRouter as Router,Route} from "react-router-dom"
import Head from './components/Head'
import Footer from "./components/Footer"
import Task from './components/Task'
import Tasks from "./components/Tasks"
import About from "./components/About"
import AddTask from "./components/AddTask"
// import { BrowserRouter } from "react-router-dom"
const App = () =>{
  const [showAddTask = true , setShowAddTask = true] = useState(false) 
  const [task,setTask] = useState( [])
  useEffect (() =>{
    const getTask = async() =>{
      const tasksFromServer = await fetchTasks();
      setTask(tasksFromServer);
    }
    
    getTask()
  },[])

  //Fetch task

  const fetchTasks = async () => {
    const res = await fetch('http://localhost:5000/tasks')
    const data  = await res.json()
    console.log(data)
    return data
  }
//Add Task
const addTask =async(tasks) =>{
  const res = await fetch('http://localhost:5000/tasks',
  {
    method : 'POST',
    headers : {'content-type': 'application/json'},
    body : JSON.stringify(tasks)
  })
  const data = await res.json()
  setTask([...task,data])
//  const id  = Math.floor(Math.random()*1000 +1)
//  console.log(id)

//  const newTask = {id,...task}
//  setTask ([...task,newTask])
}

//Delete a task
const deleteTask = async(id) =>{
  await fetch(`http://localhost:5000/tasks/${id}`,
  {
    method: 'DELETE',
  })
  setTask(task.filter((task)=> task.id !== id))
}
//Toggle Reminder
const toggleReminder = (id) =>{
  setTask(task.map((task)=>task.id===id? {...task,reminder:!task.reminder}:task))}

  return (
    // <Router>
      
    <div className="container">
      <Head  onAdd ={()=> setShowAddTask(!showAddTask)} showAdd={showAddTask}/>

      
      
        {showAddTask && <AddTask onAdd = {addTask}/>}
      {task.length > 0 ? (<Task  task = {task} 
      onDelete = {deleteTask}
      onToggle = {toggleReminder}/>) 
      :('No tasks to delete')} 
        
     
       {/* <Route path='/About' component={About} />  */}
      <Footer />
    </div>
    
    // </Router>
   
  )
}


export default App;
