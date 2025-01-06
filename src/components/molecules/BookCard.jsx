import React from "react";
import { useDispatch } from "react-redux";
import { addBook } from "../../redux/slices/cartSlice";
import PrimaryImage from "../atoms/images/PrimaryImage";
import Button from "../atoms/buttons/Button";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../../App.scss";
import styled from "styled-components";

const StyledButton = styled.button`
	padding: 0.5rem 1rem;
	background-color: #3e5962;
	color: white;
	font-weight: bold;
`

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
        <PrimaryImage StyledImage={StyledBookImage} src={card.image} />
        <StyledListTitle>{card.title}</StyledListTitle>
        Tk {card.price}
        <Button
          buttonStyle="cardButton"
          text="Add to cart"
          onClick={addNewBook}
        />
      </StyledBook>
    </>
  );
};

export default BookCard;
