import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
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
import UserSignin from "./components/pages/user/UserSignin";
import UserSignup from "./components/pages/user/UserSignup";
import AdminBookUpdate from "./components/pages/admin/AdminBookUpdate";
import "./App.scss";
import UserForgotPassword from "./components/pages/user/UserForgotPassword";
import UserResetPassword from "./components/pages/user/UserResetPassword";

function App() {
	return (
		<>
			<ToastContainer
				position="top-right"
				autoClose={3000}
			/>
			<Router>
				<Routes>
					<Route
						path="/"
						element={<UserHome />}
					/>
					<Route
						path="/user/signin"
						element={<UserSignin />}
					/>
					<Route
						path="/user/forgot-password"
						element={<UserForgotPassword />}
					/>
					<Route
						path="/reset-password/:token/:id"
						element={<UserResetPassword />}
					/>
					<Route
						path="/user/signup"
						element={<UserSignup />}
					/>
					<Route
						path="/user/cart"
						element={<UserCart />}
					/>
					<Route
						path="/admin/books"
						Component={AdminBooks}
					/>
					<Route
						path="/admin/books/add"
						element={<AdminBookAdd />}
					/>
					<Route
						path="/admin/books/edit/:id"
						element={<AdminBookUpdate />}
					/>
					<Route
						path="/admin/users"
						Component={AdminUsers}
					/>
					<Route
						path="/admin/discounts"
						Component={AdminDiscounts}
					/>
					<Route
						path="/admin/transactions"
						Component={AdminTransactions}
					/>
					<Route
						path="/admin/books/all"
						Component={AdminBookList}
					/>
					<Route
						path="/admin/books/add"
						Component={AdminBookAdd}
					/>
					<Route
						path="/admin/dashboard"
						Component={AdminDashboard}
					/>
				</Routes>
			</Router>
		</>
	);
}

export default App;
