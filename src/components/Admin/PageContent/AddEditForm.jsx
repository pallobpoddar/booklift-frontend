import { useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import useBookApi from "../../../hooks/useBookApi";
import "./AddEditForm.scss";

const AddEditForm = () => {
	const {
		handleSubmit,
		control,
		formState: { errors },
		getValues,
	} = useForm();

	const { createPost } = useBookApi();

	const handlerOnSubmit = () => {
		const data = {
			title: getValues("title"),
			author: getValues("author"),
			description: getValues("description"),
			price: getValues("price"),
			year: getValues("year"),
			language: getValues("language"),
			isbn: getValues("isbn"),
			category: getValues("category"),
			stock: getValues("stock"),
		};

		createPost(data);
	};

	useEffect(() => {
		console.log("Errors: ", errors);
	}, [errors]);

	return (
		<form className="form" onSubmit={handleSubmit(handlerOnSubmit)}>
			<div className="form-row">
				<Controller
					name="title"
					control={control}
					rules={{
						required: "Title is required",
						minLength: {
							value: 6,
							message: "Minimum length must be 6",
						},
						maxLength: {
							value: 50,
							message: "Minimum length must be 20",
						},
					}}
					render={({ field }) => (
						<input
							placeholder="Title"
							{...field}
							style={{
								border: errors.title ? "1px solid red" : "",
							}}
						/>
					)}
				/>
				{errors.title && <h5>{errors.title.message}</h5>}

				<Controller
					name="author"
					control={control}
					rules={{
						required: "Author is required",
						minLength: {
							value: 6,
							message: "Minimum length must be 6",
						},
						maxLength: {
							value: 50,
							message: "Minimum length must be 20",
						},
					}}
					render={({ field }) => (
						<input
							placeholder="Author"
							{...field}
							style={{
								border: errors.author ? "1px solid red" : "",
							}}
						/>
					)}
				/>
				{errors.author && <h5>{errors.author.message}</h5>}
			</div>

			<div className="form-row">
				<label className="form-row-label">Description:</label>
				<Controller
					name="description"
					control={control}
					rules={{
						required: "description is required",
						minLength: {
							value: 6,
							message: "Minimum length must be 6",
						},
						maxLength: {
							value: 100,
							message: "Minimum length must be 20",
						},
					}}
					render={({ field }) => (
						<input
							placeholder="Enter description"
							{...field}
							style={{
								border: errors.description
									? "1px solid red"
									: "",
							}}
						/>
					)}
				/>
				{errors.description && <h5>{errors.description.message}</h5>}
			</div>
			<div className="form-row">
				<label className="form-row-label">Price:</label>
				<Controller
					name="price"
					control={control}
					rules={{
						required: "price is required",
					}}
					render={({ field }) => (
						<input
							placeholder="Enter price"
							{...field}
							style={{
								border: errors.price ? "1px solid red" : "",
							}}
						/>
					)}
				/>
				{errors.price && <h5>{errors.price.message}</h5>}
			</div>
			<div className="form-row">
				<label className="form-row-label">Year:</label>
				<Controller
					name="year"
					control={control}
					rules={{
						required: "year is required",
					}}
					render={({ field }) => (
						<input
							placeholder="Enter year"
							{...field}
							style={{
								border: errors.year ? "1px solid red" : "",
							}}
						/>
					)}
				/>
				{errors.year && <h5>{errors.year.message}</h5>}
			</div>
			<div className="form-row">
				<label className="form-row-label">Language:</label>
				<Controller
					name="language"
					control={control}
					rules={{
						required: "language is required",
					}}
					render={({ field }) => (
						<input
							placeholder="Enter language"
							{...field}
							style={{
								border: errors.language ? "1px solid red" : "",
							}}
						/>
					)}
				/>
				{errors.language && <h5>{errors.language.message}</h5>}
			</div>
			<div className="form-row">
				<label className="form-row-label">ISBN:</label>
				<Controller
					name="isbn"
					control={control}
					rules={{
						required: "isbn is required",
						minLength: {
							value: 6,
							message: "Minimum length must be 6",
						},
						maxLength: {
							value: 20,
							message: "Minimum length must be 20",
						},
					}}
					render={({ field }) => (
						<input
							placeholder="Enter isbn"
							{...field}
							style={{
								border: errors.isbn ? "1px solid red" : "",
							}}
						/>
					)}
				/>
				{errors.isbn && <h5>{errors.isbn.message}</h5>}
			</div>
			<div className="form-row">
				<label className="form-row-label">Category:</label>
				<Controller
					name="category"
					control={control}
					rules={{
						required: "category is required",
					}}
					render={({ field }) => (
						<input
							placeholder="Enter category"
							{...field}
							style={{
								border: errors.category ? "1px solid red" : "",
							}}
						/>
					)}
				/>
				{errors.category && <h5>{errors.category.message}</h5>}
			</div>
			<div className="form-row">
				<label className="form-row-label">Stock:</label>
				<Controller
					name="stock"
					control={control}
					rules={{
						required: "stock is required",
					}}
					render={({ field }) => (
						<input
							placeholder="Enter stock"
							{...field}
							style={{
								border: errors.stock ? "1px solid red" : "",
							}}
						/>
					)}
				/>
				{errors.stock && <h5>{errors.stock.message}</h5>}
			</div>
			<div className="form-row">
				<button className="form-row-button" type="submit">
					Submit
				</button>
			</div>
		</form>
	);
};

export default AddEditForm;
