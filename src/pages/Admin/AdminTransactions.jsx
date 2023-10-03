import "../../utils/commonStyle.scss";
import HeaderBar from "../../components/Admin/Header/HeaderBar";
import ActionCard from "../../components/Admin/PageContent/ActionCard";
import Sidebar from "../../components/Admin/Sidebar/Sidebar";

const AdminTransactions = () => {
	return (
		<>
			<HeaderBar />
			<Sidebar />
			<div className="container">
				<ActionCard title={"All Transactions"} />
			</div>
		</>
	);
};

export default AdminTransactions;
