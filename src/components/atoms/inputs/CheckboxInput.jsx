import React from "react";

const CheckboxInput = ({ type, field, value }) => {
	return (
		<input
			type={type}
			{...field}
			value={value}
		/>
	);
};

export default CheckboxInput;
