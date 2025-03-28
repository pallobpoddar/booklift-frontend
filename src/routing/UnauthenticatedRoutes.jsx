import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router";

const UnauthenticatedRoutes = () => {
  const role = useSelector((state) => state.user.role);

  return (
    <>
      {role === null ? (
        <Outlet />
      ) : role === "Admin" ? (
        <Navigate to="/admin" />
      ) : (
        <Navigate to="/" />
      )}
    </>
  );
};

export default UnauthenticatedRoutes;
