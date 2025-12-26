import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import { AppRoutes } from "../routes/appRoutes";

export default function AuthGuard() {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to={AppRoutes.login} replace />;
  }

  return <Outlet />;
}
