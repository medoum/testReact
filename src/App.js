import Header from "./component/Header";
import Tasks from "./component/Tasks";
import { useState } from "react";

const App = () => {
  
  const [tasks, setTask] = useState([
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
  return (
    <div className="container">
      <Header />
       <Tasks tasks={tasks} />
    </div>
    
  )
  }
  

export default App;
