import HeaderBar from "../../molecules/HeaderBar";
import ActionCard from "../../molecules/ActionCard";
import Sidebar from "../../molecules/Sidebar";

const AdminBooks = () => {
	return (
		<>
			<HeaderBar />
			<div className="adminParentDiv">
				<Sidebar />
				<div className="container">
					<ActionCard title={"All Books"} path={"/admin/books/all"} />
					<ActionCard title={"Add Book"} path={"/admin/books/add"} />
					<ActionCard title={"Edit Book"} />
					<ActionCard title={"Delete Book"} />
				</div>
			</div>
		</>
	);
};

export default AdminBooks;
