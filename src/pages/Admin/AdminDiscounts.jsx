import "./CommonStyle.scss";
import HeaderBar from "../../components/Admin/Header/HeaderBar";
import ActionCard from "../../components/Admin/PageContent/ActionCard";
import Sidebar from "../../components/Admin/Sidebar/Sidebar";

const AdminDiscounts = () => {
	return (
		<>
			<HeaderBar />
			<Sidebar />
			<div className="container">
				<ActionCard title={"All discounts"} />
				<ActionCard title={"Add discount"} />
				<ActionCard title={"Edit discount"} />
				<ActionCard title={"Delete discount"} />
			</div>
		</>
	);
};

export default AdminDiscounts;
