import React from "react";
import { useDispatch } from "react-redux";
import { addBook } from "../../redux/actions/bookActions";
import PrimaryImage from "../atoms/images/PrimaryImage";
import PrimaryButton from "../atoms/buttons/PrimaryButton";
import "../../App.scss";

const BookCard = ({ card, StyledBook, StyledBookImage, StyledListTitle }) => {
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
			<StyledBook>
				<PrimaryImage
					StyledImage={StyledBookImage}
					src={card.image}
				/>
				<StyledListTitle>{card.title}</StyledListTitle>
				Tk {card.price}
				{/* <div> */}
				<PrimaryButton
					buttonStyle="cardButton"
					text="Add to cart"
					onClick={addNewBook}
				/>
				{/* </div> */}
			</StyledBook>
		</>
	);
};

export default BookCard;
