import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const IconButton = ({ StyledIcon, icon, size }) => {
	return (
		<StyledIcon>
			<FontAwesomeIcon
				icon={icon}
				size={size}
			/>
		</StyledIcon>
	);
};

export default IconButton;
