import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AuthLayout from "../layout/AuthLayout";
import LoginPage from "../pages/authPages/LoginPage";
import SignupPage from "../pages/authPages/SigninPage";
import PrivateRouter from "./PrivateRouter";
import AdminDashboard from "../pages/adminPages/AdminDashboardPage";
import EmployeeDashboard from "../pages/employeePages/EmpDashboardPage";

export const AppRouter = () => {
  const router = createBrowserRouter([
    {
      element: <AuthLayout />,
      children: [
        { path: "/login", element: <LoginPage /> },
        { path: "/signup", element: <SignupPage /> },
      ],
    },
    {
      path: "/",
      element: <PrivateRouter />,
      children: [
        { path: "admin", element: <AdminDashboard /> },
        { path: "employee", element: <EmployeeDashboard /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};
