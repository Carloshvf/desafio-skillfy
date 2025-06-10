import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

//components
import Navbar from "./components/Navbar";

//screens
import Dashboard from "./screens/Dashboard";
import TaskForm from "./screens/TaskForm";
import TaskList from "./screens/TaskList";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/lista-tarefas" element={<TaskList />} />
          <Route path="/nova-tarefa" element={<TaskForm />} />
          <Route path="/editar-tarefa/:id" element={<TaskForm />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
