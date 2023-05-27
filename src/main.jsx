import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ChakraProvider, theme } from "@chakra-ui/react";
import ErrorPage from "./errot-page";
import Root from "./routes/root";
import SignIn from "./routes/Auth/SignIn";
import Signup from "./routes/Auth/SignUp"
import { AuthProvider } from "./context/AuthProvider";
import Patient from "./routes/pacient"
import Patients from "./routes/pacients"
import ForgotPassword from "./routes/forgotPassword"
import ResetPassword from "./routes/resetPassword"
import Appointments from "./routes/appointments"
import  Protected  from "./components/Protected.tsx"
import DashboardPage from "./routes/dashboardPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/Dashboard",
    element: (
      <Protected>
        <DashboardPage />
      </Protected>
    ),
  },
  {
    path: "/patient",
    element: (
      <Protected>
        <Patient />
      </Protected>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/patients",
    element: (
      <Protected>
        <Patients />
      </Protected>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/appointment",
    element: (
      <Protected>
        <Appointments />
      </Protected>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/signup",
    element: (
      <Protected>
        <Signup />,
      </Protected>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/signin",
    element: <SignIn />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/forgotPassword",
    element: <ForgotPassword />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/resetPassword",
    element: <ResetPassword />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
          <ChakraProvider theme={theme}>
  <React.StrictMode>
    <AuthProvider></AuthProvider>
    <RouterProvider router={router} />
  </React.StrictMode>
  </ChakraProvider>
);
