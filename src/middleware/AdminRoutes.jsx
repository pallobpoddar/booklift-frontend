import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router";

const AdminRoutes = () => {
  const role = useSelector((state) => state.user.role);

  return (
    <>
      {role === "Admin" ? (
        <Outlet />
      ) : role === null ? (
        <Navigate to="/signin" />
      ) : (
        <Navigate to="/" />
      )}
    </>
  );
};

export default AdminRoutes;
