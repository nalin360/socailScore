import { Routes, Route } from "react-router-dom";
import LoginForm from "./pages/auth/LoginForm"
import Register from "./pages/auth/Register"
import Dashboard from "./pages/Dashboard/Dashboard";


function App() {
 

  return (
    <>
      <Routes>
        <Route path="/" element={<LoginForm/>} />
        <Route path="/signup" element={<Register/>} />
        <Route path="/dashboard" element={<Dashboard />} >
          <Route path="board" element={<div>Board</div>} />
          <Route path="analytics" element={<div>Analytics</div>} />
        </Route>
      </Routes>
    </>
  )
}

export default App
