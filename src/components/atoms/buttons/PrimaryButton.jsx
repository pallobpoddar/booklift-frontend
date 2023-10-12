import React from "react";

const PrimaryButton = ({ buttonStyle, text, type, onClick }) => {
	return (
		<button
			className={buttonStyle}
			type={type}
			onClick={onClick}>
			{text}
		</button>
	);
};

export default PrimaryButton;
