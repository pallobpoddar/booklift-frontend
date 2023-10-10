import React from "react";
import { Link } from "react-router-dom";

const PrimaryButton = ({ buttonStyle, text, type }) => {
	return (
		<button
			className={buttonStyle}
			type={type}>
			{text}
		</button>
	);
};

export default PrimaryButton;
