import Header from "./component/Header";
import Tasks from "./component/Tasks";
import { useState } from "react";
import AddTask from "./component/AddTask";

const App = () => {
  
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Mohamed first Work',
        day: '23 octobre 2023',
        reminder: true,
      },
      {
        id: 2,
        text: 'Mohamed Second Work',
        day: '24 octobre 2023',
        reminder: false,
      },
      {
        id: 3,
        text: 'Mohamed Third Work',
        day: '25 octobre 2023',
        reminder: true,
      },
      {
        id: 4,
        text: 'Mohamed Last Work',
        day: '26 octobre 2023',
        reminder: false,
      }
])

  // Delete Task

  const deleteTask = (id) => {
    setTasks(tasks.filter((task)=> task.id !==id))
  }

// Toggle Reminder
const toggleReminder = (id) => {
  setTasks(tasks.map((task)=>task.id === id
  ? {...task, reminder: !task.reminder} : task
   ))
}
  return (
    <div className="container">
      <Header />
      <AddTask />
       {tasks.length > 0 ?  <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} /> : ( 'No task to show') }
    </div>
    
  )
  }
  

export default App;
