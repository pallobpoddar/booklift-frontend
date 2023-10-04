import "./BookCard.scss";

const BookCard = (card) => {
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
					<button className="card-button"> Add to cart</button>
				</li>
			</ul>
		</>
	);
};

export default BookCard;
