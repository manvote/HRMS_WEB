import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AuthLayout from "../layout/AuthLayout";
import LoginPage from "../pages/authPages/LoginPage";
import SignupPage from "../pages/authPages/SigninPage";
import PrivateRouter from "./PrivateRouter";
import AdminDashboard from "../pages/adminPages/AdminDashboardPage";
import EmployeeDashboard from "../pages/employeePages/EmpDashboardPage";
import AdminLayout from "../layout/AdminLayout";
import AnalyticsPage from "../pages/adminPages/AnalyticsPage";
import AttendancePage from "../pages/adminPages/AttendancePage";
import NotificationPage from "../pages/adminPages/NotificationPage";
import PayrollPage from "../pages/adminPages/PayrollPage";
import PerformancePage from "../pages/adminPages/PerformancePage";
import RecruitmentPage from "../pages/adminPages/RecruitmentPage";
import TrainingPage from "../pages/adminPages/TrainingPage";
import OnboardingPage from "../pages/adminPages/OnboardingPage";
import EmployeeManagementPage from "../pages/adminPages/EmployeeManagementPage";
import SettingsPage from "../pages/commonPages/SettingsPage";


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
   
        {
          path: "employee",
          element: <AdminLayout/>,
          children: [
            { index: true, element: <EmployeeDashboard /> },
           
          ],
        },
           {
          path: "admin",
          element: <AdminLayout/>,
          children: [
            { index: true,  element: <AdminDashboard /> },
            { path: "Analytics", element: <AnalyticsPage /> },
            { path: "Attendance", element: <AttendancePage /> },
            { path: "Notifications", element: <NotificationPage /> },
            { path: "Payroll", element: <PayrollPage /> },
            { path: "Performance", element: <PerformancePage /> },
            { path: "Recruitment", element: <RecruitmentPage /> },
            { path: "Training", element: <TrainingPage /> },
            { path: "Onboarding", element: <OnboardingPage /> },
            { path: "EmployeeManagement", element: <EmployeeManagementPage /> },
            { path: "Settings", element: <SettingsPage /> },                  
          ],
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};
