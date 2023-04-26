import React, { useRef, useState } from 'react';
import { Modal, Button, Form } from "react-bootstrap";
import { useTasks } from "../contexts/TasksProvider";
import Calendar from "react-calendar";

export default function CreateTaskModal() {

    const { createTask } = useTasks();

    const titleRef = useRef();
    const groupRef = useRef();
    const priorRef = useRef();

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    function handleCreate(e){
        //e.preventDefault();


        const data = {
            title: titleRef.current.value,
            group: groupRef.current.value,
            priority: priorRef.current.value
        };

        console.log(data);

        createTask(data);

        handleClose();
    }

    return (
        <>
            <Button onClick={handleShow}>Create Task</Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header></Modal.Header>
                <Modal.Body>
                    <Form>
                            <Form.Group>
                                <Form.Label>Title</Form.Label>
                                <Form.Control type="text" ref={titleRef} required/>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Group</Form.Label>
                                <Form.Control type="text" ref={groupRef}/>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Priority</Form.Label>
                                <Form.Select ref={priorRef} required>
                                    <option>Select priority</option>
                                    <option value="low">Low</option>
                                    <option value="moderate">Moderate</option>
                                    <option value="high">High</option>
                                    <option value="very high">Very High</option>
                                </Form.Select>
                            </Form.Group>
                            <Form.Group>
                                <Calendar/>
                            </Form.Group>
                            <Button onClick={handleClose}>Close</Button>
                            <Button onClick={handleCreate}>Submit</Button>
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    )
}
