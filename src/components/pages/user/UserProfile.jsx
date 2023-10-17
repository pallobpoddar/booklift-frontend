import { React, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import useFile from "../../../hooks/useFile";

const UserProfile = () => {
	const {
		handleSubmit,
		control,
		formState: { errors },
		getValues,
	} = useForm({
		mode: "onChange",
		defaultValues: {
			file: "",
		},
	});

	const { fileUpload } = useFile();
	const formData = new FormData();

	const handlerOnSubmit = (data) => {
		console.log("Successfully added the file to the server");
		formData.append("file_to_upload", data.file);
		fileUpload(formData);
	};

	useEffect(() => {}, [errors]);
	return (
		<>
			<form onSubmit={handleSubmit(handlerOnSubmit)}>
				<Controller
					name="file"
					control={control}
					render={({ field: { onChange } }) => (
						<input
							type="file"
							onChange={(e) => onChange(e.target.files[0])}></input>
					)}
				/>
				<button type="submit">Submit</button>
			</form>
			<div></div>
		</>
	);
};

export default UserProfile;
