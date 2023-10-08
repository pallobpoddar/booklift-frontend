import React from "react";

const ValidationInput = ({ type, inputStyle, placeholder, field, style }) => {
	return (
		<input
			type={type}
			className={inputStyle}
			placeholder={placeholder}
			{...field}
			style={style}
		/>
	);
};

export default ValidationInput;
