import { useState } from "react";
import { Container } from "react-bootstrap";
import ViewAllTasks from "./components/ViewAllTasks";
import CreateTaskModal from "./components/CreateTaskModal";
import Error from "./components/Error";
import { Routes } from "react-router-dom"

function App() {

  const [error, setError] = useState(null);

  return (
    <>
      <Container className="d-flex">
          <Container>
            <ViewAllTasks/>
          </Container>
          <br/>
          <Container>
            <CreateTaskModal/>
          </Container>
      </Container>    

      {error ? <Error/> : ""}
    </>
  )
}

export default App
