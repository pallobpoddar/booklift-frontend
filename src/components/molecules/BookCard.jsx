import React from "react";
import { useDispatch } from "react-redux";
import { addBook } from "../../redux/slices/cartSlice";
import PrimaryImage from "../atoms/images/PrimaryImage";
import PrimaryButton from "../atoms/buttons/PrimaryButton";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../../App.scss";

const BookCard = ({ card, StyledBook, StyledBookImage, StyledListTitle }) => {
	const dispatch = useDispatch();

	const addNewBook = () => {
		toast.success("Successfully added to the cart");
		if (card.title && card.price) {
			dispatch(
				addBook({
					id: new Date().getTime(),
					object: {
						image: card.image,
						title: card.title,
						price: card.price,
					},
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
				<PrimaryButton
					buttonStyle="cardButton"
					text="Add to cart"
					onClick={addNewBook}
				/>
			</StyledBook>
		</>
	);
};

export default BookCard;
