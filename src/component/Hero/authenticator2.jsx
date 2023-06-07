import React, { createContext, useState } from 'react';

// Create the AuthContext
export const AuthContext = createContext();

// Create the AuthProvider component
const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  // Implement your authentication logic here

  const login = () => {
    // Simulating a successful login
    setIsAuthenticated(true);
  };

  const logout = () => {
    // Simulating a logout
    setIsAuthenticated(false);
    setIsAdmin(false);
  };

  const setAdminPrivileges = (hasAdminPrivileges) => {
    setIsAdmin(hasAdminPrivileges);
  };

  // Create the context value
  const authContextValue = {
    isAuthenticated,
    isAdmin,
    login,
    logout,
    setAdminPrivileges,
  };

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
