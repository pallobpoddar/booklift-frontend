import React from "react";

const CheckboxInput = ({ type, value, onChange }) => {
	return (
		<input
			type={type}
			value={value}
			onChange={onChange}></input>
	);
};

export default CheckboxInput;
