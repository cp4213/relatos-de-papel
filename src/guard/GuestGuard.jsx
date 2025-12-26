import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { AppRoutes } from "../routes/appRoutes";

export default function GuestGuard() {
  const { isAuthenticated } = useAuth();

  if (isAuthenticated) {
    return <Navigate to={AppRoutes.private.root} replace />;
  }

  return <Outlet />;
}
