import { useState } from "react";
import { useDispatch } from "react-redux";
import { addBook, deleteBook } from "../../redux/actions/bookActions";

const Book = () => {
	const dispatch = useDispatch();
	const [book, setBook] = useState("");

	const addNewBook = () => {
		if (book !== "") {
			dispatch(addBook(book));
		}
		setBook("");
	};

	return (
		<div className="book-component">
			<div className="add-book">
				<input
					type="text"
					placeholder="Add book here..."
					value={book}
					onChange={(e) => setBook(e.target.value)}
					className="taskInput"
				/>
				<button onClick={addNewBook}>Add book</button>
			</div>
		</div>
	);
};

export default Book;
