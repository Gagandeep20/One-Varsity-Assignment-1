import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import "./Profile.css";

export default function Profile() {
  const { user, logout } = useContext(AuthContext);
  if (!user) return null;

  return (
    <div className="profile-page">
      <div className="profile-card">
        <h2 className="profile-name">{user.name}</h2>
        <p className="profile-info">
          <strong>Email:</strong> {user.email}
        </p>
        <p className="profile-info">
          <strong>Role:</strong> {user.role}
        </p>
        <button className="logout-btn" onClick={logout}>
          Logout
        </button>
      </div>
    </div>
  );
}
