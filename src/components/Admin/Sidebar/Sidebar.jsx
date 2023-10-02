import "./Sidebar.scss";
import { Link } from "react-router-dom";

const Sidebar = () => {
	return (
		<aside className="sidebar">
			<ul className="unordered-list">
				<li className="list-item">
					<Link to={"/admin/dashboard"} className="link">
						Dashboard
					</Link>
				</li>
				<li className="list-item">
					<Link to={"/admin/users"} className="link">
						Users
					</Link>
				</li>
				<li className="list-item">
					<Link to={"/admin/books"} className="link">
						Books
					</Link>
				</li>
				<li className="list-item">
					<Link to={"/admin/discounts"} className="link">
						Discounts
					</Link>
				</li>
				<li className="list-item">
					<Link to={"/admin/transactions"} className="link">
						Transactions
					</Link>
				</li>
			</ul>
		</aside>
	);
};

export default Sidebar;
