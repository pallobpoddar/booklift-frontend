export const addBook = (object) => {
	return {
		type: "ADD_BOOK",
		payload: {
			id: new Date().getTime(),
			object: object,
		},
	};
};

export const deleteBook = (book) => {
	return {
		type: "DELETE_BOOK",
		payload: {
			id: book.id,
			price: book.price,
		},
	};
};
