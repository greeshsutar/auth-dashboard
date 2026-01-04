import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

function App() {
  const [isAuth, setIsAuth] = useState(() => {
    const token = localStorage.getItem("token");
    return !!token;
  });

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            isAuth ? (
              <Navigate to="/dashboard" replace />
            ) : (
              <Login setIsAuth={setIsAuth} />
            )
          }
        />
        <Route
          path="/dashboard"
          element={
            isAuth ? (
              <Dashboard setIsAuth={setIsAuth} />
            ) : (
              <Navigate to="/" replace />
            )
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
