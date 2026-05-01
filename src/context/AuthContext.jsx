import React, { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate checking for a logged-in user
    const checkUser = () => {
      const storedUser = localStorage.getItem('stunet_user');
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      }
      setLoading(false);
    };
    checkUser();
  }, []);

  const login = (email, password) => {
    // Dummy login logic
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (email && password) {
          const fakeUser = { id: 1, name: 'Student Admin', email, role: 'student' };
          setUser(fakeUser);
          localStorage.setItem('stunet_user', JSON.stringify(fakeUser));
          resolve(fakeUser);
        } else {
          reject(new Error('Invalid credentials'));
        }
      }, 1000);
    });
  };

  const register = (name, email, password) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const fakeUser = { id: 2, name, email, role: 'student' };
        setUser(fakeUser);
        localStorage.setItem('stunet_user', JSON.stringify(fakeUser));
        resolve(fakeUser);
      }, 1000);
    });
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('stunet_user');
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout, loading, isAuthenticated: !!user }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
