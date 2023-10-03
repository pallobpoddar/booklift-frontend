import "../../../utils/commonStyle.scss";
import HeaderBar from "../../../components/Admin/Header/HeaderBar";
import ActionCard from "../../../components/Admin/PageContent/ActionCard";
import Sidebar from "../../../components/Admin/Sidebar/Sidebar";

const AdminBooks = () => {
	return (
		<>
			<HeaderBar />
			<Sidebar />
			<div className="container">
				<ActionCard title={"All Books"} path={"/admin/books/all"} />
				<ActionCard title={"Add Book"} path={"/admin/books/add"} />
				<ActionCard title={"Edit Book"} />
				<ActionCard title={"Delete Book"} />
			</div>
		</>
	);
};

export default AdminBooks;
