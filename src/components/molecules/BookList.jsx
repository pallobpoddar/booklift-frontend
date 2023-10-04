import BookCard from "../atoms/cards/BookCard";
import useBookApi from "../../hooks/useBookApi";
import "./BookList.scss";

const BookList = () => {
	const { bookList } = useBookApi();
	return (
		<>
			<h2 className="header2-style">
				<em>Fall into a good book</em>
			</h2>
			<div className="cards">
				{bookList &&
					bookList.map((card, i) => {
						return (
							<div key={card.isbn}>
								<BookCard {...card}></BookCard>
							</div>
						);
					})}
			</div>
		</>
	);
};

export default BookList;
