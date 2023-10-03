import "../../utils/commonStyle.scss";
import HeaderBar from "../../components/Admin/Header/HeaderBar";
import ActionCard from "../../components/Admin/PageContent/ActionCard";
import Sidebar from "../../components/Admin/Sidebar/Sidebar";

const AdminUsers = () => {
	return (
		<>
			<HeaderBar />
			<Sidebar />
			<div className="container">
				<ActionCard title={"All Users"} />
				<ActionCard title={"Add User"} />
				<ActionCard title={"Edit User"} />
				<ActionCard title={"Delete User"} />
			</div>
		</>
	);
};

export default AdminUsers;
