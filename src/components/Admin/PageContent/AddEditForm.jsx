import { useState } from "react";
import useBookApi from "../../../hooks/useBookApi";
import "./AddEditForm.scss";

const AddEditForm = () => {
	const { createPost } = useBookApi();

	const [title, setTitle] = useState("");
	const [author, setAuthor] = useState("");
	const [description, setDescription] = useState("");
	const [price, setPrice] = useState(0);
	const [year, setYear] = useState(0);
	const [language, setLanguage] = useState("");
	const [isbn, setIsbn] = useState(0);
	const [category, setCategory] = useState("");
	const [stock, setStock] = useState(0);

	const handleCreateUser = (e) => {
		e.preventDefault();

		const data = {
			title: title,
			author: author,
			description: description,
			price: price,
			year: year,
			language: language,
			isbn: isbn,
			category: category,
			stock: stock,
		};

		createPost(data);
	};
	return (
		<div className="form-center">
			<form className="form" onSubmit={handleCreateUser}>
				<div className="form-row">
					<label className="form-row-label">Title:</label>
					<input
						className="form-row-input"
						type="text"
						placeholder="Please enter title"
						onChange={(e) => setTitle(e.target.value)}
					/>
				</div>
				<div className="form-row">
					<label className="form-row-label">Author:</label>
					<input
						className="form-row-input"
						type="author"
						placeholder="Please enter author"
						onChange={(e) => setAuthor(e.target.value)}
					/>
				</div>
				<div className="form-row">
					<label className="form-row-label">Description:</label>
					<input
						className="form-row-input"
						type="author"
						placeholder="Please enter description"
						onChange={(e) => setDescription(e.target.value)}
					/>
				</div>
				<div className="form-row">
					<label className="form-row-label">Price:</label>
					<input
						className="form-row-input"
						type="text"
						placeholder="Please enter price"
						onChange={(e) => setPrice(e.target.value)}
					/>
				</div>
				<div className="form-row">
					<label className="form-row-label">Year:</label>
					<input
						className="form-row-input"
						type="text"
						placeholder="Please enter year"
						onChange={(e) => setYear(e.target.value)}
					/>
				</div>
				<div className="form-row">
					<label className="form-row-label">Language:</label>
					<input
						className="form-row-input"
						type="text"
						placeholder="Please enter language"
						onChange={(e) => setLanguage(e.target.value)}
					/>
				</div>
				<div className="form-row">
					<label className="form-row-label">ISBN:</label>
					<input
						className="form-row-input"
						type="text"
						placeholder="Please enter ISBN"
						onChange={(e) => setIsbn(e.target.value)}
					/>
				</div>
				<div className="form-row">
					<label className="form-row-label">Category:</label>
					<input
						className="form-row-input"
						type="text"
						placeholder="Please enter Category"
						onChange={(e) => setCategory(e.target.value)}
					/>
				</div>
				<div className="form-row">
					<label className="form-row-label">Stock:</label>
					<input
						className="form-row-input"
						type="text"
						placeholder="Please enter Stock"
						onChange={(e) => setStock(e.target.value)}
					/>
				</div>
				<div className="form-row">
					<button className="form-row-button" type="submit">
						Submit
					</button>
				</div>
			</form>
		</div>
	);
};

export default AddEditForm;
