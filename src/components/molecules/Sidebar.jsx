import { Link } from "react-router";

const Sidebar = () => {
	return (
		<div className="sidebar">
			<aside>
				<ul className="unordered-list">
					<li className="list-item">
						<Link
							to={"/admin/dashboard"}
							className="link">
							Dashboard
						</Link>
					</li>
					<li className="list-item">
						<Link
							to={"/admin/users"}
							className="link">
							Users
						</Link>
					</li>
					<li className="list-item">
						<Link
							to={"/admin/books"}
							className="link">
							Books
						</Link>
					</li>
					<li className="list-item">
						<Link
							to={"/admin/discounts"}
							className="link">
							Discounts
						</Link>
					</li>
					<li className="list-item">
						<Link
							to={"/admin/transactions"}
							className="link">
							Transactions
						</Link>
					</li>
				</ul>
			</aside>
		</div>
	);
};

export default Sidebar;
