import { Navigate, Outlet, useLocation } from "react-router-dom";

const RoleRoute = () => {
  const user = JSON.parse(localStorage.getItem("user") || "{}");
  const location = useLocation();

  if (!user?.token) {
    return <Navigate to="/login" replace />;
  }


  // protect against wrong role access
  if (location.pathname.startsWith("/admin") && user.role !== "admin") {
    return <Navigate to="/employee" replace />;
  }
  if (location.pathname.startsWith("/employee") && user.role !== "employee") {
    return <Navigate to="/admin" replace />;
  }

  return <Outlet />;
};

export default RoleRoute;
