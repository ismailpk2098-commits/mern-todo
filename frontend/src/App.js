import {  Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import ShowData from "./pages/ShowData";
import ProtectedRoute from "./components/ProtectedRoute";
import TodoForm from "./pages/TodoForm";

function App() {
  return (
    <AuthProvider>
      
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />

          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />

          <Route
            path="/users"
            element={
              <ProtectedRoute>
                <ShowData />
              </ProtectedRoute>
            }
          />
          <Route path="/allusers" element={<ShowData/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/todo" element={<TodoForm/>}/>
        </Routes>
     
    </AuthProvider>
  );
}

export default App;