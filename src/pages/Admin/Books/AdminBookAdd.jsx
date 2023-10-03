import "../CommonStyle.scss";
import HeaderBar from "../../../components/Admin/Header/HeaderBar";
import Sidebar from "../../../components/Admin/Sidebar/Sidebar";
import AddEditForm from "../../../components/Admin/PageContent/AddEditForm";

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
