import React, { useEffect } from 'react';
import DeleteTaskModal from "./DeleteTaskModal";
import { Form, Button, } from "react-bootstrap";

export default function Task({ task }) {
    
    /*
    IDEA - Make Task editable

    */

    useEffect(() => {
        console.log(task);
    }, [task]);

    return (
        <div>
            Task ID: {task._id}
            <br/>
            <DeleteTaskModal taskId={task._id}/>
        </div>
    )
}
