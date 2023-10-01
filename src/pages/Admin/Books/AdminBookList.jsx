import "../CommonStyle.scss";
import HeaderBar from "../../../components/Admin/Header/HeaderBar";
import Sidebar from "../../../components/Admin/Sidebar/Sidebar";
import BookTable from "../../../components/Admin/PageContent/BookTable";

const AdminBookList = () => {
	return (
		<>
			<HeaderBar />
			<Sidebar />
			<BookTable />
		</>
	);
};

export default AdminBookList;
