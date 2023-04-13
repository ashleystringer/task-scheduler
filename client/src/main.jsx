import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter } from "react-router-dom";
import { TasksProvider } from "./contexts/TasksProvider";
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <TasksProvider>
        <App/>
      </TasksProvider>
    </BrowserRouter>
  </React.StrictMode>
)
