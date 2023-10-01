import "./UserHome.scss";
import NavigationBar from "../../components/User/Header/NavigationBar";
import Banner from "../../components/User/PageContent/Banner";
import BookList from "../../components/User/PageContent/BookList";

const UserHome = () => {
	return (
		<>
			<NavigationBar />
			<Banner />
			<BookList />
		</>
	);
};

export default UserHome;
