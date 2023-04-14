import React, { useContext, useEffect, useState } from 'react';
import axios from "axios";

const TasksContext = React.createContext();

export function useTasks(){
    return useContext(TasksContext);
}

export function TasksProvider({children}) {
    
    const [tasks, setTasks] = useState(null);

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
                    console.error(err);
                })
    }

    function getTask(taskId){
        axios
            .get(`http://localhost:5000/tasks/${taskId}`)
                .then(response)
                .catch(err => {
                    console.error(err);
                });        
    }

    function deleteTask(taskId){
        axios
            .delete(`http://localhost:5000/tasks/${taskId}`)
                .then(response)
                .catch(err => {
                    console.error(err);
                });
    }

    function updateTask(taskId){
        axios
        .put(`http://localhost:5000/tasks/${taskId}`)
            .then(response)
            .catch(err => {
                console.error(err);
            });
    }

    const value = {
        tasks,
        setTasks,
        getTask,
        createTask,
        deleteTask,
        updateTask
    }
    return (
        <TasksContext.Provider value={value}>
            {children}
        </TasksContext.Provider>
    )
}
