import React, { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteBook } from "../../redux/slices/cartSlice";
import Header from "./Header";
import Footer from "./Footer";
import Header1 from "../atoms/labels/Header1";
import Header3 from "../atoms/labels/Header3";
import {
	StyledCart,
	StyledCartImage,
	StyledHeader,
	StyledList,
	StyledTotal,
} from "./Cart.styles";
import { StyledHeader1, StyledHeader3 } from "../../App.styles";
import PrimaryList from "../atoms/lists/PrimaryList";
import ImageList from "../atoms/lists/ImageList";
import PrimaryButton from "../atoms/buttons/PrimaryButton";
import "../../App.scss";

const Cart = () => {
	const bookList = useSelector((state) => state.cart.bookList);
	const total = useSelector((state) => state.cart.total);
	const dispatch = useDispatch();

	const handleDelete = (book) => {
		console.log(book.object.price);
		dispatch(
			deleteBook({
				id: book.id,
				price: book.object.price,
			})
		);
	};

	return (
		<>
			<Header />
			<StyledCart>
				<StyledHeader>
					<Header1
						StyledHeader1={StyledHeader1}
						text="My Cart"
					/>
				</StyledHeader>
				<hr></hr>

				{bookList.map((book) => {
					return (
						<Fragment key={book.id}>
							<StyledList>
								<ImageList
									StyledCartImage={StyledCartImage}
									src={book.object.image}
								/>
								<PrimaryList text={book.object.title} />
								<PrimaryList text={`Price: ${book.object.price} Tk`} />
								<PrimaryButton
									buttonStyle="primaryButton"
									text="Delete"
									onClick={() => handleDelete(book)}
								/>
							</StyledList>
						</Fragment>
					);
				})}
				<StyledTotal>
					<Header3
						StyledHeader3={StyledHeader3}
						text={`Total: ${total} Tk`}
					/>
				</StyledTotal>
			</StyledCart>
			<Footer />
		</>
	);
};

export default Cart;
