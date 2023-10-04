import "../../../App.scss";
import HeaderBar from "../../molecules/HeaderBar";
import Sidebar from "../../molecules/Sidebar";
import AddEditForm from "../../molecules/AddEditForm";

const AdminBookAdd = () => {
	return (
		<>
			<HeaderBar />
			<div className="container">
				<Sidebar />
				<AddEditForm />
			</div>
		</>
	);
};

export default AdminBookAdd;
