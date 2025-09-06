import React from "react";
import { NavLink } from "react-router-dom";
import { Home, User, LogOut } from "lucide-react";
import "./Sidebar.css";

export default function Sidebar({ isOpen = true }) {
  return (
    <aside
      className={`sidebar ${isOpen ? "open" : "closed"}`}
      aria-hidden={!isOpen}
    >
      <div className="sidebar-header">
        <span className="logo">⚡ Dash</span>
      </div>

      <nav className="sidebar-nav">
        <NavLink
          to="/"
          end
          className={({ isActive }) => `nav-item ${isActive ? "active" : ""}`}
        >
          <Home size={18} />
          <span className="nav-text">Dashboard</span>
        </NavLink>

        <NavLink
          to="/profile"
          className={({ isActive }) => `nav-item ${isActive ? "active" : ""}`}
        >
          <User size={18} />
          <span className="nav-text">Profile</span>
        </NavLink>
      </nav>

      <div className="sidebar-footer">
        <button className="logout-btn">
          <LogOut size={18} />
          <span>Logout</span>
        </button>
      </div>
    </aside>
  );
}
