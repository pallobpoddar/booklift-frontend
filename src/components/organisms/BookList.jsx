import { React, Fragment } from "react";
import useBook from "../../hooks/useBook";
import Header2 from "../atoms/labels/Header2";
import BookCard from "../molecules/BookCard";
import Filter from "./Filter";
import {
	StyledBookBox,
	StyledBookList,
	StyledBook,
	StyledBookImage,
	StyledListTitle,
} from "./BookList.styles";
import { StyledHeader2 } from "../../App.styles";
import FilterPanel from "./FilterPanel";
import { useSelector } from "react-redux";

const BookList = () => {
	const { bookList } = useBook();
	const bookCards = useSelector((state) => state.filteredBooks.bookList);
	return (
		<>
			<Header2
				StyledHeader2={StyledHeader2}
				text="Fall into a good book"
			/>
			<StyledBookBox>
				<FilterPanel />
				<StyledBookList>
					{bookCards &&
						bookCards.map((card) => {
							return (
								<Fragment key={card.isbn}>
									<BookCard
										card={card}
										StyledBook={StyledBook}
										StyledBookImage={StyledBookImage}
										StyledListTitle={StyledListTitle}
									></BookCard>
								</Fragment>
							);
						})}
				</StyledBookList>
			</StyledBookBox>
		</>
	);
};

export default BookList;
