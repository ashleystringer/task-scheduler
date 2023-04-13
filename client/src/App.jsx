import { useState } from 'react';
import { Button } from "react-bootstrap";
import { useTasks } from "./contexts/TasksProvider";

function App() {
  const { createTask } = useTasks();

  function handleClick(){
    console.log("Click");

    const data = {
      title: "Title for task",
      group: "Group for task",
      priority: "Priority for task"
    };

    createTask(data);
  }

  return (
    <div className="App">
        App
        <br/>
        <Button onClick={handleClick}>Click</Button>
    </div>
  )
}

export default App
