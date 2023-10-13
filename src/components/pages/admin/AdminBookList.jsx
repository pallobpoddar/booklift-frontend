import "../../../App.scss";
import HeaderBar from "../../molecules/HeaderBar";
import Sidebar from "../../molecules/Sidebar";
import BookTable from "../../molecules/BookTable";
import SearchDebounce from "../../molecules/SearchDebounce";
import { Link } from "react-router-dom";

const AdminBookList = () => {
	return (
		<>
			<HeaderBar />
			<div className="adminParentDiv">
				<Sidebar />
				<div>
					<SearchDebounce />
					<button className="addButton">Add</button>
					<BookTable />
				</div>
			</div>
		</>
	);
};

export default AdminBookList;
