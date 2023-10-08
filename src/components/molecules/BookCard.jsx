import React from "react";
import { useDispatch } from "react-redux";
import { addBook } from "../../redux/actions/bookActions";
import PrimaryImage from "../atoms/images/PrimaryImage";
import PrimaryButton from "../atoms/buttons/PrimaryButton";
import "../../App.scss";
import "../organisms/BookList.scss";

const BookCard = ({ card, cardStyle, cardImageStyle, listTitleStyle }) => {
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
			<ul className={cardStyle}>
				<li>
					<PrimaryImage
						imageStyle={cardImageStyle}
						src="https://m.media-amazon.com/images/I/71uUx073fcL._AC_UF1000,1000_QL80_.jpg"
					/>
					<div className={listTitleStyle}>{card.title}</div>
					Tk {card.price}
					<div>
						<PrimaryButton
							buttonStyle="cardButton"
							text="Add to cart"
							onClick={addNewBook}
						/>
					</div>
				</li>
			</ul>
		</>
	);
};

export default BookCard;
