import React, { createContext, useContext, useState, useEffect } from "react";
import { getToken, setToken, removeToken, getUser, setUser as saveUser, removeUser } from "../utils/api";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Restore user data from localStorage on app start
    const token = getToken();
    const savedUser = getUser();
    
    if (token && savedUser) {
      // Restore user data and authentication state
      setUser(savedUser);
      setIsAuthenticated(true);
    } else if (token && !savedUser) {
      // Token exists but no user data - clear token
      removeToken();
      setIsAuthenticated(false);
    } else {
      setIsAuthenticated(false);
    }
    setLoading(false);
  }, []);

  const login = (userData, token) => {
    setToken(token);
    saveUser(userData); // Save user data to localStorage
    setUser(userData);
    setIsAuthenticated(true);
  };

  const logout = () => {
    removeToken();
    removeUser(); // Remove user data from localStorage
    setUser(null);
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
        loading,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

