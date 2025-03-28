import { BrowserRouter, Route, Routes } from "react-router";
import { ToastContainer } from "react-toastify";
import UserHome from "./components/pages/user/UserHome";
import AdminDashboard from "./components/pages/AdminDashboard";
import AdminBooks from "./components/pages/admin/AdminBooks";
import AdminUsers from "./components/pages/admin/AdminUsers";
import AdminDiscounts from "./components/pages/admin/AdminDiscounts";
import AdminTransactions from "./components/pages/admin/AdminTransactions";
import AdminBookList from "./components/pages/admin/AdminBookList";
import AdminBookAdd from "./components/pages/admin/AdminBookUpdate";
import UserCart from "./components/pages/user/UserCart";
import Signin from "./components/pages/Signin";
import Signup from "./components/pages/Signup";
import AdminBookUpdate from "./components/pages/admin/AdminBookUpdate";
import ForgotPassword from "./components/pages/ForgotPassword";
import UserResetPassword from "./components/pages/ResetPassword";
import UserProfile from "./components/pages/user/UserProfile";
import EmailVerification from "./components/pages/EmailVerification";
import UnauthenticatedRoutes from "./middleware/UnauthenticatedRoutes";
import AdminRoutes from "./middleware/AdminRoutes";

function App() {
  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<UserHome />} />

          <Route element={<UnauthenticatedRoutes />}>
            <Route path="/signup" element={<Signup />} />
            <Route path="/signin" element={<Signin />} />
            <Route
              path="/:id/email-verification/:token"
              element={<EmailVerification />}
            />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route
              path="/:id/password-reset/:token"
              element={<UserResetPassword />}
            />
          </Route>

          <Route element={<AdminRoutes />}>
            <Route path="/admin" Component={AdminDashboard} />
          </Route>

          <Route path="/user/cart" element={<UserCart />} />
          <Route path="/user/profile" element={<UserProfile />} />
          <Route path="/admin/books" Component={AdminBooks} />
          <Route path="/admin/books/add" element={<AdminBookAdd />} />
          <Route path="/admin/books/edit/:id" element={<AdminBookUpdate />} />
          <Route path="/admin/users" Component={AdminUsers} />
          <Route path="/admin/discounts" Component={AdminDiscounts} />
          <Route path="/admin/transactions" Component={AdminTransactions} />
          <Route path="/admin/books/all" Component={AdminBookList} />
          <Route path="/admin/books/add" Component={AdminBookAdd} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
