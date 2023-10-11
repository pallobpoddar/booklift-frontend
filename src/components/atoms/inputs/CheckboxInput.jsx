import React from "react";

const CheckboxInput = ({ type, field }) => {
	return <input type={type} {...field} />;
};

export default CheckboxInput;
