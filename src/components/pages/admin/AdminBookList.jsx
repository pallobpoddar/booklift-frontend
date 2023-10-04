import "../../../App.scss";
import HeaderBar from "../../molecules/HeaderBar";
import Sidebar from "../../molecules/Sidebar";
import BookTable from "../../molecules/BookTable";
import SearchDebounce from "../../molecules/SearchDebounce";

const AdminBookList = () => {
	return (
		<>
			<HeaderBar />
			<Sidebar />
			<div>
				<SearchDebounce />
			</div>
			<BookTable />
		</>
	);
};

export default AdminBookList;
