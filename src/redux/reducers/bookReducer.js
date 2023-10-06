const initialState = {
	bookList: [],
	total: 0,
};

const booksReducer = (state = initialState, action) => {
	switch (action.type) {
		case "ADD_BOOK":
			return {
				...state,
				bookList: [...state.bookList, action.payload],
				total: state.total + action.payload.object.price,
			};

		case "DELETE_BOOK":
			return {
				...state,
				bookList: state.bookList.filter(
					(book) => book.id !== action.payload.id
				),
				total: state.total - action.payload.price,
			};

		default:
			return state;
	}
};

export default booksReducer;
