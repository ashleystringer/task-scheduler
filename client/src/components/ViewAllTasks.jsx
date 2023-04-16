import React, { useState, useEffect } from 'react'
import { Button } from "react-bootstrap";
import CreateTask from "./CreateTask";
import Task from "./Task";
import { useTasks } from "../contexts/TasksProvider";


export default function ViewAllTasks() {

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
        <>
            <br/>
            {tasksExist && tasks.data.map((task, i) => {
            return (<><Task task={task} key={i}/></>);
            })}
        </>
    )
}
