import React from "react";
import { createContext, useState, useEffect, ReactNode } from "react";

interface User {
  status: "LOGGED_IN" | "LOGGED_OUT" | "PENDING";
  role: "ADMIN" | "COMMON";
}

interface AuthContextType {
  user: User | null;
  login: (token: string, role: "ADMIN" | "COMMON") => void;
  logout: () => void;
  isAdmin: () => boolean;
}

export const AuthContext = createContext<AuthContextType>({
  user: null,
  login: () => {},
  logout: () => {},
  isAdmin: () => false,
});

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const role = localStorage.getItem("role");
    if (token) {
      //decode token to get role
      setUser({
        status: "LOGGED_IN",
        role: role === "ADMIN" ? "ADMIN" : "COMMON",
      });
    }
  }, []);

  const login = (token: string, role: "ADMIN" | "COMMON") => {
    localStorage.setItem("token", token);
    setUser({
      status: "LOGGED_IN",
      role: "ADMIN",
    });
  };

  const register = (token: string, role: "ADMIN" | "COMMON") => {
    localStorage.setItem("token", token);
    setUser({
      status: "LOGGED_IN",
      role: "ADMIN",
    });
  };

  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
  };

  const isAdmin = () => {
    return user ? user.role === "ADMIN" : false;
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, isAdmin }}>
      {children}
    </AuthContext.Provider>
  );
};
