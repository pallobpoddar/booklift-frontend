import { React, Fragment } from "react";
import useBookApi from "../../hooks/useBookApi";
import Header2 from "../atoms/labels/Header2";
import BookCard from "../molecules/BookCard";
import {
	StyledBookList,
	StyledBook,
	StyledBookImage,
	StyledListTitle,
} from "./BookList.styles";
import { StyledHeader2 } from "../../App.styles";

const BookList = () => {
	const { bookList } = useBookApi();
	return (
		<>
			<Header2
				StyledHeader2={StyledHeader2}
				text="Fall into a good book"
			/>
			<StyledBookList>
				{bookList &&
					bookList.map((card) => {
						return (
							<Fragment key={card.isbn}>
								<BookCard
									card={card}
									StyledBook={StyledBook}
									StyledBookImage={StyledBookImage}
									StyledListTitle={StyledListTitle}></BookCard>
							</Fragment>
						);
					})}
			</StyledBookList>
		</>
	);
};

export default BookList;
