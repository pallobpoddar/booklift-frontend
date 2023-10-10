import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UserHome from "./components/pages/user/UserHome";
import AdminDashboard from "./components/pages/admin/AdminDashboard";
import AdminBooks from "./components/pages/admin/AdminBooks";
import AdminUsers from "./components/pages/admin/AdminUsers";
import AdminDiscounts from "./components/pages/admin/AdminDiscounts";
import AdminTransactions from "./components/pages/admin/AdminTransactions";
import AdminBookList from "./components/pages/admin/AdminBookList";
import AdminBookAdd from "./components/pages/admin/AdminBookAdd";
import SigninBox from "./components/organisms/SigninBox";
import SignupForm from "./components/molecules/SignupForm";
import "./App.scss";

function App() {
	return (
		<>
			<Router>
				<Routes>
					<Route
						path="/"
						element={<UserHome />}
					/>
					<Route
						path="/user/signin"
						element={<SigninBox />}
					/>
					{/* <Route
						path="/admin/dashboard"
						Component={AdminDashboard}
					/> */}
					<Route
						path="/admin/books"
						Component={AdminBooks}
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
						path="/user/signup"
						Component={SignupForm}
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
