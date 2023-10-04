import "../../../App.scss";
import HeaderBar from "../../molecules/HeaderBar";
import ActionCard from "../../molecules/ActionCard";
import Sidebar from "../../molecules/Sidebar";

const AdminDashboard = () => {
	return (
		<>
			<HeaderBar />
			<Sidebar />
			<div className="container">
				<ActionCard title={"Users"} />
				<ActionCard title={"Books"} />
				<ActionCard title={"Discounts"} />
				<ActionCard title={"Transactions"} />
			</div>
		</>
	);
};

export default AdminDashboard;
