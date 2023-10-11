import React from "react";
import PrimaryList from "../atoms/lists/PrimaryList";

const NavigationList = ({ StyledList }) => {
	return (
		<StyledList>
			<PrimaryList text="Books" />
			<PrimaryList text="Fiction" />
			<PrimaryList text="Nonfiction" />
			<PrimaryList text="New Releases" />
		</StyledList>
	);
};

export default NavigationList;
