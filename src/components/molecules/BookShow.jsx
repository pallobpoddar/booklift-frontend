import { useSelector, useDispatch } from "react-redux";
import { deleteBook } from "../../redux/actions/bookActions";

const BookShow = () => {
	const books = useSelector((state) => state.bookList);
	const total = useSelector((state) => state.total);
	const dispatch = useDispatch();

	const handleDelete = (book) => {
		console.log(book.object.price);
		dispatch(
			deleteBook({
				id: book.id,
				price: book.object.price,
			})
		);
	};

	return (
		<div className="tasklist">
			<div className="display-books">
				<h3>Your books:</h3>
				<ul className="books">
					{console.log("the books are ", books)}
					{books.map((book) => {
						console.log("Single book is ", book);

						return (
							<li
								className="book"
								key={book.id}>
								<p>{book.object.title}</p>
								<p>{book.object.price}</p>
								<button
									className="delete-btn"
									onClick={() => handleDelete(book)}>
									delete
								</button>
							</li>
						);
					})}
					<h3>Total: {total}</h3>
				</ul>
			</div>
		</div>
	);
};

export default BookShow;
