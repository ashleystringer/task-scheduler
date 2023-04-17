import ViewAllTasks from "./components/ViewAllTasks";
import CreateTask from "./components/CreateTask";
import CreateTaskModal from "./components/CreateTaskModal";

function App() {

  return (
    <div className="App">
        <ViewAllTasks/>
        <br/>
        <CreateTaskModal/>
    </div>
  )
}

export default App
