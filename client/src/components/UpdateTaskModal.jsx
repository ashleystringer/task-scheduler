import React, { useState, useRef } from 'react';
import { Form, Button, Modal } from "react-bootstrap";
import { useTasks } from "../contexts/TasksProvider";

export default function UpdateTaskModal({task}) {

    const [show, setShow] = useState(false);
    const [selectedOpt, setSelectedOpt] = useState(false);

    const { updateTask } = useTasks();
    const titleRef = useRef(task.title);
    const groupRef = useRef(task.group);
    const priorRef = useRef(task.priority);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    function handleUpdate(e){
        e.preventDefault();

        const taskId = task._id;

        const data = {
            title: titleRef.current.value,
            group: groupRef.current.value,
            priority: priorRef.current.value
        };

        console.log(data);

        updateTask(taskId, data);

        handleClose();
    }

    /*
        !!!! Find a way to have an option selected by default
    */

    return (
        <>
            <Button onClick={handleShow}>Update Task</Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header></Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group>
                            <Form.Label>Title</Form.Label>
                            <Form.Control ref={titleRef} defaultValue={task.title}/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Group</Form.Label>
                            <Form.Control ref={groupRef} defaultValue={task.group}/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Priority</Form.Label>
                            <Form.Select ref={priorRef} required>
                                <option value="low">Low</option>
                                <option value="moderate">Moderate</option>
                                <option value="high">High</option>
                                <option value="very high">Very High</option>
                            </Form.Select>                        
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleUpdate}>Update</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}
