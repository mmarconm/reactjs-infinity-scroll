import { Outlet, Navigate, useLocation } from "react-router-dom";
// import useAuth from "../hooks/useAuth";

const PrivateRoute = () => {
  const location = useLocation();
  const user = true;

  return user ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default PrivateRoute;
