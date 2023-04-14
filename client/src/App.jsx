import { useState, useEffect } from 'react';
import { useTasks } from "./contexts/TasksProvider";
import Task from "./components/Task";
import CreateTask from "./components/CreateTask";

function App() {
  const { tasks } = useTasks();
  const [tasksExist, setTasksExist] = useState(false);

  useEffect(() => {
    
    if(tasks){
      console.log("Tasks exist.");
    }else{
      console.log("Tasks do not exist.");
    }

    setTasksExist(prevState => {
      if (tasks) return true;
      return false;
    })
  }, [tasks]);

  return (
    <div className="App">
        App
        <br/>
        {tasksExist && tasks.data.map((task, i) => {
          return (<><Task task={task} key={i}/></>);
        })}

        <br/>
    </div>
  )
}

export default App
