import React, { useRef } from 'react';
import { Button, Form, Container } from 'react-bootstrap';
import { useTasks } from "../contexts/TasksProvider";

export default function CreateTask() {

    const { createTask } = useTasks();
    const titleRef = useRef();
    const groupRef = useRef();
    const priorRef = useRef();

    function handleSubmit(e){
        e.preventDefault();


        const data = {
            title: titleRef.current.value,
            group: groupRef.current.value,
            priority: priorRef.current.value
        };

        console.log(data);

        createTask(data);

        //if successful, clear the refs

        titleRef.current.value = "";
        groupRef.current.value = "";
        priorRef.current.value = "";

    }

    return (
        <Container>
            <Form onSubmit={handleSubmit}>
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
                <Button type="submit">Submit</Button>
            </Form>
        </Container>
    )
}
