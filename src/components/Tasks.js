
import {FaTimes} from 'react-icons/fa'
const Tasks = ({tasks = true,onDelete = true ,onToggle  = true}) => {
  return (
    <div className={`task ${tasks.reminder ?
    'reminder' : ''}`}
     onDoubleClick = {()=>onToggle (tasks.id)}>
      <h3>{tasks.text}<FaTimes style = {{color : 
        'red',cursor :'pointer'}} onClick = {()=>onDelete(tasks.id)}
        on/></h3>
      <p>{tasks.day}</p>
    </div>
  )
}

export default Tasks
