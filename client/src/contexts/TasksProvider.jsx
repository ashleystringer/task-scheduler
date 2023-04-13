import React, { useContext, useEffect, useState } from 'react';
import axios from "axios";

const TasksContext = React.createContext();

export function useTasks(){
    return useContext(TasksContext);
}

export function TasksProvider({children}) {
    
    const [tasks, setTasks] = useState();

    console.log("TasksProvider");


    useEffect(() => {
        axios
            .get("http://localhost:5000/tasks")
                .then(response => {
                    console.log(response);
                    setTasks(response);
                })
                .catch(err => {
                    console.error(err);
                });
    }, []);

    function createTask(data){
        console.log(data);
        axios
            .post("http://localhost:5000/tasks", data)
                .then(response => {
                    console.log(response);
                })
                .catch(err => {
                    console.error(err.response);
                })
    }

    const value = {
        tasks,
        setTasks,
        createTask
    }
    return (
        <TasksContext.Provider value={value}>
            {children}
        </TasksContext.Provider>
    )
}
