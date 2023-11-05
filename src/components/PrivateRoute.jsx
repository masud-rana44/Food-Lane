import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export const PrivateRoute = ({ children }) => {
  const { pathname } = useLocation();
  const { user, isLoading } = useAuth();

  if (isLoading) return <div>Loading...</div>;

  if (!user)
    return <Navigate to="/login" state={{ pathname }} replace={true} />;

  return children;
};
