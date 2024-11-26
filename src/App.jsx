import React, { useEffect, useState } from "react";

import TaskForm from "./Component/taskForm";
import Filters from "./Component/filter";
import TaskList from "./Component/taskList";


function App () {
   const [tasks, setTasks] =useState([]);
   const [filter, setFilter] = useState('all');
   const [isMobile, setIsMobile] = useState(false);

   useEffect(() => {
     const handleResize = () => setIsMobile(window.innerWidth <= 768);
     handleResize(); // Set initial state
     window.addEventListener('resize', handleResize);
     return () => window.removeEventListener('resize', handleResize);
   }, []);

   // load tasks from local storage on mount
   useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(storedTasks);
      }, []);

// save tasks to local storage on change
useEffect ( () => {
  localStorage.setItem('tasks',JSON.stringify(tasks));
},[tasks])

const addTask = (taskname) =>{
  const newTask = {id:Date.now(), name: taskname, completed:false};
  setTasks([...tasks,newTask]);
};

const toggleComplete = (taskId) => {
  setTasks(
     tasks.map((task)=>
      task.id === taskId ? {...task, completed: !task.completed}: task)
  )
}

const deleteTask = (taskId) => {
  setTasks(tasks.filter((task) => task.id !== taskId));
};

const filteredTasks = tasks.filter((task) => {
  if (filter === 'all') return true;
  if (filter === 'completed') return task.completed;
  if (filter === 'pending') return !task.completed;
  return true;
});

return (
  <div className="h-screen bg-orange-50 flex" style={isMobile ? mobileGridDesign : gridDesign}>
      <div className="" style={{gridArea:'header'}}>
        <h1 className="text-center text-white font-bold bg-blue-500" style={{fontSize:'40px',border:'solid lihgtgray',borderRadius:'10px'}}>To Do List</h1>
      </div>
        <div className= "bg-orange-200" style={{ gridArea: "sidebar",borderRadius:'10px'}}>
        <TaskForm onAddTask={addTask} />
      </div>
      <div className="sm:flex-row" style={{gridArea:'main',background:'',display:'flex', flexDirection:'column'}}>
        <Filters filter={filter} setFilter={setFilter} />
        <TaskList
          tasks={filteredTasks}
          onToggleComplete={toggleComplete}
          onDelete={deleteTask}
        />
      </div>
      <div>
         {new Date().toLocaleDateString()}
      </div>
  </div>
);
};

export default App;


const gridDesign = {
  display: 'grid',
  gridTemplateAreas:
    `"header header header"
    "sidebar main main"
    "footer footer footer"`,
  gridTemplateRows: "auto 1fr auto",
  gridTemplateColumns: "1fr 2fr 1fr",
  padding:'1rem',
  gap:'20px',

}

const mobileGridDesign = {
  ...gridDesign,
  gridTemplateAreas: `
    "header"
    "sidebar"
    "main"
    "footer"`,
  gridTemplateRows: "auto  auto 1fr auto",
  gridTemplateColumns: "1fr",
};
