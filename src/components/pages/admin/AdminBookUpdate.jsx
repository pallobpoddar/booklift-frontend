import "../../../App.scss";
import HeaderBar from "../../molecules/HeaderBar";
import Sidebar from "../../molecules/Sidebar";
import BookAddEditBox from "../../organisms/BookAddEditBox";

const AdminBookUpdate = () => {
	return (
		<>
			<HeaderBar />
			<div className="container">
				<Sidebar />
				<BookAddEditBox />
			</div>
		</>
	);
};

export default AdminBookUpdate;
