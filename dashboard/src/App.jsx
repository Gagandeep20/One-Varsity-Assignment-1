import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import "./App.css";

export default function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => setIsSidebarOpen((s) => !s);

  return (
    <Routes>
      {/* Public pages (no sidebar/topbar) */}
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      {/* Protected pages (with sidebar/topbar) */}
      <Route
        path="/"
        element={
          <div className="app">
            <Sidebar isOpen={isSidebarOpen} />
            <div className="main-content">
              <Topbar
                toggleSidebar={toggleSidebar}
                isSidebarOpen={isSidebarOpen}
              />
              <div className="content-area">
                <Dashboard />
              </div>
            </div>
          </div>
        }
      />
      <Route
        path="/profile"
        element={
          <div className="app">
            <Sidebar isOpen={isSidebarOpen} />
            <div className="main-content">
              <Topbar
                toggleSidebar={toggleSidebar}
                isSidebarOpen={isSidebarOpen}
              />
              <div className="content-area">
                <Profile />
              </div>
            </div>
          </div>
        }
      />
    </Routes>
  );
}
