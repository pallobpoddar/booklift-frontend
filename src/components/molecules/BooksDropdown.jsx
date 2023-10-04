import { useState } from "react";
import "./BooksDropdown.scss";

const BooksDropdown = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleDropdown = () => {
		setIsOpen(!isOpen);
	};

	return (
		<>
			<div className={`dropdown ${isOpen ? "open" : ""}`}>
				<button onClick={toggleDropdown}>Books</button>
				<ul className="dropdown-content">
					<li>
						<a href="#">All Books</a>
					</li>
					<li>
						<a href="#">Add Books</a>
					</li>
					<li>
						<a href="#">Edit Books</a>
					</li>
					<li>
						<a href="#">Delete Books</a>
					</li>
				</ul>
			</div>
		</>
	);
};

export default BooksDropdown;
