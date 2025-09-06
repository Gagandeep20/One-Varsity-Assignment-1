// src/components/Topbar.jsx
import React from "react";
import { Menu, X } from "lucide-react";
import "./Topbar.css";

export default function Topbar({ toggleSidebar, isSidebarOpen }) {
  return (
    <header className="topbar">
      <button
        className="menu-btn"
        onClick={toggleSidebar}
        aria-label="Toggle sidebar"
      >
        {isSidebarOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      <div className="search-wrap">
        <input className="search-input" placeholder="Search..." />
      </div>

      <div className="topbar-right">👤</div>
    </header>
  );
}
