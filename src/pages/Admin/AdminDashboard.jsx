import HeaderBar from "../../components/Admin/Header/HeaderBar";
import ActionCard from "../../components/Admin/PageContent/ActionCard";
import Sidebar from "../../components/Admin/Sidebar/Sidebar";
import "./CommonStyle.scss";

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
