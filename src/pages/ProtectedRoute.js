import { Navigate } from "react-router-dom";

// context
import { useAuth } from "../context/AuthContext";

function ProtectedRoute({ children, redirectPath, admin }) {
  const { loggedIn, user } = useAuth();

  if (admin && user?.user !== "admin") {
    return <Navigate to={redirectPath} replace />;
  }

  if (!loggedIn) {
    return <Navigate to={redirectPath} replace />;
  }

  return children;
}

export default ProtectedRoute;
