import { Container } from "react-bootstrap";
import ViewAllTasks from "./components/ViewAllTasks";
import CreateTaskModal from "./components/CreateTaskModal";
import { Routes } from "react-router-dom"

function App() {

  return (
    <Container className="d-flex">
        <Container>
          <ViewAllTasks/>
        </Container>
        <br/>
        <Container>
          <CreateTaskModal/>
        </Container>
    </Container>
  )
}

export default App
