import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.scss";
import UserHome from "./components/pages/user/UserHome";
import AdminDashboard from "./components/pages/admin/AdminDashboard";
import AdminBooks from "./components/pages/admin/AdminBooks";
import AdminUsers from "./components/pages/admin/AdminUsers";
import AdminDiscounts from "./components/pages/admin/AdminDiscounts";
import AdminTransactions from "./components/pages/admin/AdminTransactions";
import AdminBookList from "./components/pages/admin/AdminBookList";
import AdminBookAdd from "./components/pages/admin/AdminBookAdd";
import SigninForm from "./components/molecules/SigninForm";
import SignupForm from "./components/molecules/SignupForm";
import Authenticate from "./components/pages/user/authenticate";

function App() {
	return (
		<>
			<Router>
				<Routes>
					<Route
						path=""
						Component={UserHome}
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
						path="/admin/signin"
						Component={SigninForm}
					/>
					<Route
						path="/user/signup"
						Component={SignupForm}
					/>

					<Route element={<Authenticate />}>
						<Route
							path="/admin/dashboard"
							Component={AdminDashboard}
						/>
					</Route>
				</Routes>
			</Router>
		</>
	);
}

export default App;
