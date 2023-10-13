import useBook from "../../hooks/useBook";
import BookRow from "./BookRow";
import "./BookTable.scss";

const BookTable = () => {
	const { bookList } = useBook();

	return (
		<table>
			<caption>List of all books</caption>
			<thead>
				<tr>
					<th>ID</th>
					<th>Title</th>
					<th>Author</th>
					<th>Year</th>
					<th>Description</th>
					<th>Language</th>
					<th>Category</th>
					<th>ISBN</th>
					<th>Price</th>
					<th>Stock</th>
					<th>Action</th>
				</tr>
			</thead>
			<tbody>
				{bookList &&
					bookList.map((row, i) => {
						return (
							<tr key={row.isbn}>
								<BookRow {...row} />
							</tr>
						);
					})}
			</tbody>
		</table>
	);
};

export default BookTable;
