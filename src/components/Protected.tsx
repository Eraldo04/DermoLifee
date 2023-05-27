import React, { ReactNode, useContext } from "react";
import { AuthContext } from "../context/AuthProvider";
import ErrorPage from "../errot-page";

interface ProtectedProps {
  children?: ReactNode;
}

const Protected = ({ children }: ProtectedProps) => {
  const { user } = useContext(AuthContext);
  if (user?.status === "LOGGED_OUT") return <ErrorPage />;
  if (user?.status === "LOGGED_IN") return <>{children}</>;
  
  return <></>;
};

export default Protected;
