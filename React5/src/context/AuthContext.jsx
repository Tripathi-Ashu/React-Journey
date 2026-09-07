import React, { createContext, useState, useContext } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {

  
  const [user, setUser] = useState(() => {
    const stored = localStorage.getItem("authUser");
    return stored ? JSON.parse(stored) : null;
  });

  // SIGN UP — naya user localStorage ki "users" list mein add karo
  const signup = ({ name, email, password }) => {

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const alreadyExists = users.some(u => u.email === email);

    if (alreadyExists) {
      return { success: false, message: "Email aleardy have" };
    }

    const newUser = { name, email, password };
    const updatedUsers = [...users, newUser];

    localStorage.setItem("users", JSON.stringify(updatedUsers));

    return { success: true };
  };

  // SIGN IN — email/password check karo stored users se
  const login = (email, password) => {

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const matchedUser = users.find(
      u => u.email === email && u.password === password
    );

    if (!matchedUser) {
      return { success: false, message: "Email ya password galat hai" };
    }

    setUser(matchedUser);
    localStorage.setItem("authUser", JSON.stringify(matchedUser));

    return { success: true };
  };

  // LOGOUT
  const logout = () => {
    setUser(null);
    localStorage.removeItem("authUser");
  };

  const value = {
    user,
    isAuthenticated: !!user,
    signup,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}