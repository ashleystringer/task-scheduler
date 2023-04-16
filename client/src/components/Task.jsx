import React, { useEffect } from 'react';
import DeleteTaskModal from "./DeleteTaskModal";
import UpdateTaskModal from "./UpdateTaskModal";
import { Form, Button, } from "react-bootstrap";

export default function Task({ task }) {
    
    /*
    IDEA - Make Task editable

    */

    /*
        - Title
        - Text 
        - Groups
        - Priority 
    */

    useEffect(() => {
        console.log(task);
    }, [task]);

    return (
        <div>
            Task ID: {task._id}
            <br/>
            <UpdateTaskModal task={task}/>
            <DeleteTaskModal taskId={task._id}/>
        </div>
    )
}
