
import Tasks from "./Tasks"
const Task = ({task  , onDelete  , onToggle }) => {
    
  return (
 
    <>
      {task.map((tasks)=>(
        <Tasks key = {tasks.id} tasks= {tasks}
         onDelete={onDelete} 
         onToggle = {onToggle}/>
        ))}
    </>
  )
}

export default Task
