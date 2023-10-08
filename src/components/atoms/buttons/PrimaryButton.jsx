import React from "react";
import { Link } from "react-router-dom";
import "../../../App.scss";

const PrimaryButton = ({ buttonStyle, text, to }) => {
	return (
		<button className={buttonStyle}>
			<Link to={to} className="link">
				{text}
			</Link>
		</button>
	);
};

export default PrimaryButton;
