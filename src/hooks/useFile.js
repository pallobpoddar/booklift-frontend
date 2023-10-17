import { useState } from "react";
import fileInstance from "../utils/fileInstance";

const useFile = () => {
	const [file, setFile] = useState({});

	const fileUpload = (formData) => {
		fileInstance
			.post("/upload-file", formData, {
				headers: {
					// "Content-Type": "application/json",
				},
			})
			.then((response) => {
				setFile(response.data);
			})
			.catch((error) => {
				if (error.response && error.response.status === 422) {
					const validationErrors = error.response.data.errors;
					toast.error("Invalid email or password");
				}
			});
	};
	return { fileUpload };
};

export default useFile;
