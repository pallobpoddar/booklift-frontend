import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import axiosInstance from "../utils/bookInstance";
import { changeBookList } from "../redux/slices/bookSlice";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const useBook = () => {
	const dispatch = useDispatch();
	const [bookList, setBookList] = useState([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		axiosInstance
			.get("/all")
			.then((response) => {
				const data = response.data.data.books;
				setBookList(data);
				dispatch(changeBookList(data));
			})
			.catch((error) => {
				console.error("Error fetching data:", error);
			});
	}, []);

	const addBook = (formData) => {
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
				if (error.response && error.response.status === 422) {
					const validationErrors = error.response.data.errors;
					toast.error("Failed to add the book");
				}
			});
	};

	const updateBook = (formData) => {
		axiosInstance
			.patch(`/update-one-by-id/${formData.id}`, formData, {
				headers: {
					"Content-Type": "application/json",
				},
			})
			.then((response) => {
				const data = response.data;
				toast.success("Successfully updated the book");
			})
			.catch((error) => {
				if (error.response && error.response.status === 422) {
					const validationErrors = error.response.data.errors;
					toast.error("Failed to update the book");
				}
			});
	};

	const deleteBook = (id) => {
		axiosInstance
			.delete(`/delete-one-by-id/${id}`, id, {
				headers: {
					"Content-Type": "application/json",
				},
			})
			.then((response) => {
				const data = response.data;
				toast.success("Successfully deleted the book");
			})
			.catch((error) => {
				if (error.response && error.response.status === 422) {
					const validationErrors = error.response.data.errors;
					toast.error("Failed to delete the book");
				}
			});
	};

	return { bookList, addBook, updateBook, deleteBook };
};

export default useBook;
