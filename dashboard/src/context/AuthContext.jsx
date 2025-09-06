import React, { createContext, useState, useEffect } from "react";
import api from "../services/api";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem("user");
    return saved ? JSON.parse(saved) : null;
  });

  async function login(email, password) {
    // json-server: find user with matching email & password
    const res = await api.get(`/users`, { params: { email, password } });
    if (res.data.length > 0) {
      const u = res.data[0];
      // create a mock token (do not use in production)
      const token = btoa(`${u.id}:${u.email}`);
      const payload = { ...u, token };
      setUser(payload);
      localStorage.setItem("user", JSON.stringify(payload));
      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      return { success: true };
    } else {
      return { success: false, message: "Invalid credentials" };
    }
  }

  async function signup(payload) {
    // check existing email
    const check = await api.get("/users", { params: { email: payload.email } });
    if (check.data.length > 0)
      return { success: false, message: "Email in use" };
    const res = await api.post("/users", payload);
    return { success: true, user: res.data };
  }

  function logout() {
    setUser(null);
    localStorage.removeItem("user");
    delete api.defaults.headers.common["Authorization"];
  }

  useEffect(() => {
    if (user?.token)
      api.defaults.headers.common["Authorization"] = `Bearer ${user.token}`;
  }, [user]);

  return (
    <AuthContext.Provider value={{ user, login, logout, signup }}>
      {children}
    </AuthContext.Provider>
  );
}
