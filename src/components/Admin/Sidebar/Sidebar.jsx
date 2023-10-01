import "./Sidebar.scss";
import { Link } from "react-router-dom";

const Sidebar = () => {
	return (
		<aside className="sidebar">
			<ul>
				<li>
					<Link to={"/admin/dashboard"} className="link-decoration">
						Dashboard
					</Link>
				</li>
				<li>
					<Link to={"/admin/users"} className="link-decoration">
						Users
					</Link>
				</li>
				<li>
					<Link to={"/admin/books"} className="link-decoration">
						Books
					</Link>
				</li>
				<li>
					<Link to={"/admin/discounts"} className="link-decoration">
						Discounts
					</Link>
				</li>
				<li>
					<Link
						to={"/admin/transactions"}
						className="link-decoration"
					>
						Transactions
					</Link>
				</li>
			</ul>
		</aside>
	);
};

export default Sidebar;
