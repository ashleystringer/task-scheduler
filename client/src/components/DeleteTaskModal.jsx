import React, { useState } from 'react'
import { Modal, Button } from "react-bootstrap";
import { useTasks } from "../contexts/TasksProvider";

export default function DeleteTaskModal({ taskId }) {
    
    const [show, setShow] = useState(false);
    const { deleteTask } = useTasks();
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    

    function handleDelete(e){

        console.log(`taskId: ${taskId}`);
        deleteTask(taskId);

        handleClose();
    }

    return (
        <>
            <Button onClick={handleShow}>Delete Task</Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header>
                    Header
                </Modal.Header>
                <Modal.Body>
                    Body
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={handleClose}>Close</Button>
                    <Button onClick={handleDelete}>Delete</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}
