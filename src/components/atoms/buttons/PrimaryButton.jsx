import React from "react";
import { Link } from "react-router-dom";

const PrimaryButton = ({ buttonStyle, text, to, linkStyle, type }) => {
	return (
		<Link
			to={to}
			className={linkStyle}>
			<button
				className={buttonStyle}
				type={type}>
				{text}
			</button>
		</Link>
	);
};

export default PrimaryButton;
