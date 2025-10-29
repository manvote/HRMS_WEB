import { Navigate, Outlet, useLocation } from "react-router-dom";

const PrivateRouter = () => {
  const location = useLocation();

  const raw = localStorage.getItem("user");
  let user = null;

  try {
    user = raw ? JSON.parse(raw) : null;

    const validRoles = ["admin", "employee", "manager"];
    if (!user?.role || !validRoles.includes(user.role)) {
      throw new Error("invalid role");
    }
  } catch (err) {
    alert("Invalid role. Please log in again.");
    localStorage.removeItem("user");
    return <Navigate to="/login" replace />;
  }

  if (!user) return <Navigate to="/login" replace />;

  if (location.pathname === "/") {
    if (user.role === "admin") return <Navigate to="/admin" replace />;
    if (user.role === "employee") return <Navigate to="/employee" replace />;

  }

  return <Outlet />;
};

export default PrivateRouter;
