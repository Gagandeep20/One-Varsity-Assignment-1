// src/components/Topbar.jsx
import React, { useContext } from "react";
import { Menu, X } from "lucide-react";
import { AuthContext } from "../context/AuthContext";
import { Link } from "react-router-dom"; // import Link for navigation
import "./Topbar.css";

export default function Topbar({ toggleSidebar, isSidebarOpen }) {
  const { user, logout } = useContext(AuthContext);

  return (
    <header className="topbar">
      <button className="menu-btn" onClick={toggleSidebar}>
        {isSidebarOpen ? <X /> : <Menu />}
      </button>

      <div className="topbar-right">
        {user ? (
          <button className="logout-btn" onClick={logout}>
            Logout
          </button>
        ) : (
          <>
            <Link to="/login" className="topbar-link">
              Login
            </Link>
            <Link to="/signup" className="topbar-link">
              Signup
            </Link>
          </>
        )}
      </div>
    </header>
  );
}
