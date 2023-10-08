import React from "react";

const Header2 = ({ header2Style, text }) => {
	return (
		<h2 className={header2Style}>
			<i>{text}</i>
		</h2>
	);
};

export default Header2;
