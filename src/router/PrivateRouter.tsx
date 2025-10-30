// src/routes/PrivateRouter.tsx
import { Navigate, Outlet, useLocation } from "react-router-dom";

const PrivateRouter = () => {
  const location = useLocation();
  const raw = localStorage.getItem("user");
  const user = raw ? JSON.parse(raw) : null;

  // Not logged in → send to login
  if (!user?.token) return <Navigate to="/login" replace />;

  // Allowed roles
  const validRoles = ["admin", "employee", "manager"];
  if (!validRoles.includes(user.role)) {
    localStorage.removeItem("user");
    return <Navigate to="/login" replace />;
  }

  // Redirect from root `/` based on role
  if (location.pathname === "/") {
    return <Navigate to={`/${user.role}`} replace />;
  }

  // Role-based protection
  if (location.pathname.startsWith("/admin") && user.role !== "admin") {
    return <Navigate to="/employee" replace />;
  }
  if (location.pathname.startsWith("/employee") && user.role !== "employee") {
    return <Navigate to="/admin" replace />;
  }

  return <Outlet />;
};

export default PrivateRouter;
