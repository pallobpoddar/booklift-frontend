import Book from "../../molecules/Book";
import BookShow from "../../molecules/BookShow";
import Header from "../../organisms/Header";
import Main from "../../organisms/Main";
const UserHome = () => {
	return (
		<>
			<Header />
			<Main />
			<hr></hr>
			<h2> Cart</h2>
			<BookShow />
		</>
	);
};

export default UserHome;
