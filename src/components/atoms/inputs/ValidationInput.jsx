import React from "react";

const ValidationInput = ({
	type,
	StyledFormInput,
	placeholder,
	field,
	style,
}) => {
	return (
		<StyledFormInput
			type={type}
			placeholder={placeholder}
			{...field}
			style={style}
		/>
	);
};

export default ValidationInput;
