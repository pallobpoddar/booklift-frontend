import { React, Fragment } from "react";
import useBookApi from "../../hooks/useBookApi";
import Header2 from "../atoms/labels/Header2";
import BookCard from "../molecules/BookCard";
import "../../App.scss";
import "./BookList.scss";

const BookList = () => {
	const { bookList } = useBookApi();
	return (
		<>
			<Header2 header2Style="header2" text="Fall into a good book" />
			<div className="cardList">
				{bookList &&
					bookList.map((card) => {
						return (
							<Fragment key={card.isbn}>
								<BookCard
									card={card}
									cardStyle="card"
									cardImageStyle="cardImage"
									listTitleStyle="listTitle"
								></BookCard>
							</Fragment>
						);
					})}
			</div>
		</>
	);
};

export default BookList;
