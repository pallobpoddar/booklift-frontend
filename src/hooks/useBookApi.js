import { useState, useEffect } from "react";
import axiosInstance from "../utils/axiosInstance";

const useBookApi = () => {
	const [bookList, setBookList] = useState([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		axiosInstance
			.get("/all")
			.then((response) => {
				const data = response.data.data.books;
				setBookList(data);
			})
			.catch((error) => {
				console.error("Error fetching data:", error);
			});
	}, []);

	const createPost = (formData) => {
		axiosInstance
			.post("/add", formData, {
				headers: {
					"Content-Type": "application/json",
				},
			})
			.then((response) => {
				const data = response.data;
			})
			.catch((error) => {
				console.error("Error:", error);
			});
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
