import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import UserHome from "./pages/User/UserHome";
import AdminDashboard from "./pages/Admin/AdminDashboard";
import AdminBooks from "./pages/Admin/Books/AdminBooks";
import AdminUsers from "./pages/Admin/AdminUsers";
import AdminDiscounts from "./pages/Admin/AdminDiscounts";
import AdminTransactions from "./pages/Admin/AdminTransactions";
import AdminBookList from "./pages/Admin/Books/AdminBookList";
import AdminBookAdd from "./pages/Admin/Books/AdminBookAdd";
import SigninForm from "./components/User/PageContent/SigninForm";
import SignupForm from "./components/User/PageContent/SignupForm";

function App() {
	return (
		<>
			<Router>
				<Routes>
					<Route path="" Component={UserHome} />
					<Route path="/admin/dashboard" Component={AdminDashboard} />
					<Route path="/admin/books" Component={AdminBooks} />
					<Route path="/admin/users" Component={AdminUsers} />
					<Route path="/admin/discounts" Component={AdminDiscounts} />
					<Route
						path="/admin/transactions"
						Component={AdminTransactions}
					/>
					<Route path="/admin/books/all" Component={AdminBookList} />
					<Route path="/admin/books/add" Component={AdminBookAdd} />
					<Route path="/user/signin" Component={SigninForm} />
					<Route path="/user/signup" Component={SignupForm} />
				</Routes>
			</Router>
		</>
	);
}

export default App;
