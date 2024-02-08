import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Landing from "./components/Landing";
import AllTasks from "./components/AllTasks";
import Task from "./components/Task";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/landing" element={<Landing />} />
          <Route path="/tasks" element={<AllTasks />} />
          <Route path="/tasks/:id" element={<Task />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
