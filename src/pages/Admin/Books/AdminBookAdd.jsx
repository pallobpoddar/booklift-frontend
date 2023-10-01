import "../CommonStyle.scss";
import HeaderBar from "../../../components/Admin/Header/HeaderBar";
import Sidebar from "../../../components/Admin/Sidebar/Sidebar";
import AddEditForm from "../../../components/Admin/PageContent/AddEditForm";

const AdminBookAdd = () => {
	return (
		<>
			<HeaderBar />
			<Sidebar />
			<AddEditForm />
		</>
	);
};

export default AdminBookAdd;
