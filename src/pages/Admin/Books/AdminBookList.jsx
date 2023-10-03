import "../../../utils/commonStyle.scss";
import HeaderBar from "../../../components/Admin/Header/HeaderBar";
import Sidebar from "../../../components/Admin/Sidebar/Sidebar";
import BookTable from "../../../components/Admin/PageContent/BookTable";
import SearchDebounce from "../../../components/Admin/PageContent/SearchDebounce";

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
