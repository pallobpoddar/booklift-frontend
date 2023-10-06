import "./BookCard.scss";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addBook, deleteBook } from "../../../redux/actions/bookActions";

const BookCard = (card) => {
	const dispatch = useDispatch();

	const addNewBook = () => {
		if (card.title && card.price) {
			dispatch(
				addBook({
					title: card.title,
					price: card.price,
				})
			);
		}
	};

	return (
		<>
			<ul className="card">
				<li>
					<img
						className="card-image"
						src="https://m.media-amazon.com/images/I/71uUx073fcL._AC_UF1000,1000_QL80_.jpg"
					/>
					<p>
						<div className="list-title">
							{card.title}
							<br />
						</div>
						${card.price}
					</p>
					<button
						className="card-button"
						onClick={addNewBook}>
						{" "}
						Add to cart
					</button>
				</li>
			</ul>
		</>
	);
};

export default BookCard;
