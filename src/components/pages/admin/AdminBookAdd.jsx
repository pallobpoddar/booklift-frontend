import "../../../App.scss";
import HeaderBar from "../../molecules/HeaderBar";
import Sidebar from "../../molecules/Sidebar";
import BookUpdateBox from "../../organisms/BookUpdateBox";

const AdminBookAdd = () => {
	return (
		<>
			<HeaderBar />
			<div className="container">
				<Sidebar />
				<BookUpdateBox />
			</div>
		</>
	);
};

export default AdminBookAdd;
