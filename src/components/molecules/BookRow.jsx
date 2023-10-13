import "./BookRow.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import useBook from "../../hooks/useBook";
import "../../App.scss";

const BookRow = (row) => {
	const { deleteBook } = useBook();

	const handlerDelete = () => {
		deleteBook(row._id);
	};
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
			<td>
				<div className="actionButton">
					<Link
						to={`/admin/books/edit/${row._id}`}
						className="link">
						<FontAwesomeIcon icon={faPenToSquare} />
					</Link>
					<FontAwesomeIcon
						className="click"
						icon={faTrash}
						onClick={handlerDelete}
					/>
				</div>
			</td>
		</>
	);
};

export default BookRow;
