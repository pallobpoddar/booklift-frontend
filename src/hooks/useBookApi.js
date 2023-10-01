import { useState, useEffect } from "react";

const useBookApi = () => {
	const [bookList, setBookList] = useState([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		fetch(`http://localhost:8000/api/books/all`)
			.then((res) => res.json())
			.then((field) => field.data.books)
			.then((data) => {
				setBookList(data);
			});
	}, []);

	const createPost = async (formData) => {
		setLoading(true);
		console.log("The form data ", formData);
		await fetch(`http://localhost:8000/api/books/add`, {
			method: "POST",
			body: JSON.stringify(formData),
		})
			.then((resp) => resp.json())
			.then((data) => console.log("Successfully created", data))
			.finally(() => setLoading(false));
	};

	// const updateBook = async (formData) => {
	// 	setLoading(true);
	// 	console.log("The form data ", formData);
	// 	await fetch(`http://localhost:8000/api/books/update-one-by-id`, {
	// 		method: "PATCH",
	// 		body: JSON.stringify(formData),
	// 	})
	// 		.then((resp) => resp.json())
	// 		.then((data) => console.log("Successfully updated", data))
	// 		.finally(() => setLoading(false));
	// };

	// const deleteBook = async (formData) => {
	// 	setLoading(true);
	// 	console.log("The form data ", formData);
	// 	await fetch(`http://localhost:8000/api/books/delete-one-by-id`, {
	// 		method: "DELETE",
	// 		body: JSON.stringify(formData),
	// 	})
	// 		.then((resp) => resp.json())
	// 		.then((data) => console.log("Successfully deleted", data))
	// 		.finally(() => setLoading(false));
	// };

	// return { bookList, createPost, updateBook, deleteBook };

	return { bookList, createPost };
};

export default useBookApi;
