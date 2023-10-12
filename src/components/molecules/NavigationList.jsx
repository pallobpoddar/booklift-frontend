import React from "react";
import PrimaryList from "../atoms/lists/PrimaryList";
import { Link } from "react-router-dom";
import "../../App.scss";

const NavigationList = ({ StyledList }) => {
	return (
		<StyledList>
			<Link
				to="/"
				className="link">
				<PrimaryList text="Home" />
			</Link>
			<PrimaryList text="Fiction" />
			<PrimaryList text="Nonfiction" />
			<PrimaryList text="New Releases" />
		</StyledList>
	);
};

export default NavigationList;
