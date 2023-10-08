import React from "react";
import PrimaryList from "../atoms/lists/PrimaryList";

const NavigationList = ({ listStyle }) => {
	return (
		<ul className={listStyle}>
			<PrimaryList text="Books" />
			<PrimaryList text="Fiction" />
			<PrimaryList text="Nonfiction" />
			<PrimaryList text="Kids" />
			<PrimaryList text="New Releases" />
		</ul>
	);
};

export default NavigationList;
