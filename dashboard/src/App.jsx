// src/App.jsx
import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import "./App.css";

export default function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => setIsSidebarOpen((s) => !s);

  // quick console debug so you can see the toggle happening in the console
  // remove in production
  console.log("sidebar open:", isSidebarOpen);

  return (
    <div className="app">
      {/* single Sidebar instance controlled by state */}
      <Sidebar isOpen={isSidebarOpen} />

      <div className="main-content">
        <Topbar toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />

        <div className="content-area">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
