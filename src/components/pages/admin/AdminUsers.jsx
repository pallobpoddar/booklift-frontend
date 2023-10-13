import "../../../App.scss";
import HeaderBar from "../../molecules/HeaderBar";
import ActionCard from "../../molecules/ActionCard";
import Sidebar from "../../molecules/Sidebar";

const AdminUsers = () => {
	return (
		<>
			<HeaderBar />
			<div className="adminParentDiv">
				<Sidebar />
				<div className="container">
					<ActionCard title={"All Users"} />
					<ActionCard title={"Add User"} />
					<ActionCard title={"Edit User"} />
					<ActionCard title={"Delete User"} />
				</div>
			</div>
		</>
	);
};

export default AdminUsers;
