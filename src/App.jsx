import { BrowserRouter, Route, Routes } from "react-router";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import UserHome from "./components/pages/user/UserHome";
import AdminDashboard from "./components/pages/admin/AdminDashboard";
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
import UserForgotPassword from "./components/pages/user/UserForgotPassword";
import UserResetPassword from "./components/pages/user/UserResetPassword";
import UserProfile from "./components/pages/user/UserProfile";
import EmailVerification from "./components/pages/EmailVerification";

function App() {
  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<UserHome />} />
          <Route path="/signin" element={<Signin />} />
          <Route
            path="/user/forgot-password"
            element={<UserForgotPassword />}
          />
          <Route
            path="/reset-password/:token/:id"
            element={<UserResetPassword />}
          />
          <Route path="/signup" element={<Signup />} />
          <Route
            path="/email-verification/:token/:id"
            element={<EmailVerification />}
          />
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
          <Route path="/admin/dashboard" Component={AdminDashboard} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
