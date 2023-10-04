import "../../../App.scss";
import HeaderBar from "../../molecules/HeaderBar";
import ActionCard from "../../molecules/ActionCard";
import Sidebar from "../../molecules/Sidebar";

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
