import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const IconButton = ({ buttonStyle, icon, size }) => {
	return (
		<button className={buttonStyle}>
			<FontAwesomeIcon icon={icon} size={size} />
		</button>
	);
};

export default IconButton;
