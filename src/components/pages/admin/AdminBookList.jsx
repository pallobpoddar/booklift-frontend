import "../../../App.scss";
import HeaderBar from "../../molecules/HeaderBar";
import Sidebar from "../../molecules/Sidebar";
import BookTable from "../../molecules/BookTable";
import SearchDebounce from "../../molecules/SearchDebounce";

const AdminBookList = () => {
	return (
		<>
			<HeaderBar />
			<div className="adminParentDiv">
				<Sidebar />
				<BookTable />
			</div>
		</>
	);
};

export default AdminBookList;
