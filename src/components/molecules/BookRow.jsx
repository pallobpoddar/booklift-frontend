import "./BookRow.scss";

const BookRow = (row) => {
	return (
		<>
			<td>{row._id}</td>
			<td>{row.title}</td>
			<td>{row.author}</td>
			<td>{row.year}</td>
			<td className="truncate-cell">{row.description}</td>
			<td>{row.language}</td>
			<td>{row.category}</td>
			<td>{row.isbn}</td>
			<td>{row.price}</td>
			<td>{row.stock}</td>
		</>
	);
};

export default BookRow;
