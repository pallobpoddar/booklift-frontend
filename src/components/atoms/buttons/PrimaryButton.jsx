import React from "react";

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
