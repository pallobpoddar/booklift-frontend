import React from "react";

const PrimaryInput = ({ type, inputStyle, placeholder }) => {
	return (
		<input type={type} className={inputStyle} placeholder={placeholder} />
	);
};

export default PrimaryInput;
