import useBookApi from "../../hooks/useBookApi";
import BookRow from "./BookRow";
import "./BookTable.scss";

const BookTable = () => {
	const { bookList } = useBookApi();

	return (
		<table>
			<caption>List of all books</caption>
			<thead>
				<tr>
					<th>Title</th>
					<th>Author</th>
					<th>Year</th>
					<th>Description</th>
					<th>Language</th>
					<th>Category</th>
					<th>ISBN</th>
					<th>Price</th>
					<th>Stock</th>
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
