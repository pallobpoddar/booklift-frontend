import React, { useEffect, useState } from "react";
import axiosInstance from "../../../utils/axiosInstance";

const DebounceDemo = () => {
	const [productId, setProductId] = useState("");
	const [errorMsg, setErrorMsg] = useState();
	const [productData, setProductData] = useState({});
	const [visibility, setVisibility] = useState(false);

	const handleVisibility = () => {
		setVisibility(true);
	};

	const callProductApi = () => {
		axiosInstance
			.get(`/all?search=${productId}`)
			.then((response) => response.data.data.books)
			.then((data) => {
				console.log("Data : ", data);
				setProductData(data);
				return data;
			})
			.catch((err) => {
				setErrorMsg("Some error occured");
				return "Some error";
			})
			.finally(() => {});
	};

	useEffect(() => {
		console.log("Product ID: ", productId);

		const timeOutFunc = setTimeout(() => {
			callProductApi();
		}, 500);

		return () => clearTimeout(timeOutFunc);
	}, [productId]);

	return (
		<div>
			<h1>Search a book</h1>
			<input
				placeholder="Enter title or description"
				onChange={(e) => {
					setProductId(e.target.value);
					setVisibility(true);
				}}
			/>

			<div>
				<h5>Title: {visibility ? productData[0].title : ""}</h5>
				<p>Description: {visibility ? productData[0].description : ""}</p>
				{errorMsg && <h4>Error: {errorMsg}</h4>}
			</div>
		</div>
	);
};

export default DebounceDemo;
