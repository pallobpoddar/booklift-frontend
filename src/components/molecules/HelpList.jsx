import React from "react";
import TitleList from "../atoms/lists/TitleList";
import PrimaryList from "../atoms/lists/PrimaryList";

const HelpList = ({ listStyle }) => {
	return (
		<ul className={listStyle}>
			<TitleList text="Help & Support" />
			<PrimaryList text="Shipping Info" />
			<PrimaryList text="Returns & Refunds" />
			<PrimaryList text="Order Status" />
			<PrimaryList text="Gift Cards" />
		</ul>
	);
};

export default HelpList;
