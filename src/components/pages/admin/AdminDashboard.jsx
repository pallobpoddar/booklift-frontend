import "../../../App.scss";
import HeaderBar from "../../molecules/HeaderBar";
import ActionCard from "../../molecules/ActionCard";
import Sidebar from "../../molecules/Sidebar";

const AdminDashboard = () => {
	return (
		<>
			<HeaderBar />
			<div className="adminParentDiv">
				<Sidebar />
				<div className="container">
					<ActionCard
						title={"Users"}
						path="/admin/users"
					/>
					<ActionCard
						title={"Books"}
						path="/admin/books"
					/>
					<ActionCard title={"Discounts"} />
					<ActionCard title={"Transactions"} />
				</div>
			</div>
		</>
	);
};

export default AdminDashboard;
